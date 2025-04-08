import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, insertYoutubeVideoSchema, insertAppointmentSchema } from "@shared/schema";
import { z } from "zod";
import { sendEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  const apiRouter = app.route('/api');
  
  // Services endpoints
  app.get('/api/services', async (req, res) => {
    try {
      const services = await storage.getServices();
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch services" });
    }
  });
  
  app.get('/api/services/:slug', async (req, res) => {
    try {
      const service = await storage.getServiceBySlug(req.params.slug);
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }
      res.json(service);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch service" });
    }
  });
  
  // Blog posts endpoints
  app.get('/api/blog-posts', async (req, res) => {
    try {
      const blogPosts = await storage.getBlogPosts();
      res.json(blogPosts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });
  
  app.get('/api/blog-posts/:slug', async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });
  
  // Testimonials endpoints
  app.get('/api/testimonials', async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });
  
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({
        message: "Thank you for your message! We will get back to you soon.",
        id: message.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });
  
  // YouTube videos endpoints
  app.get('/api/youtube-videos', async (req, res) => {
    try {
      const videos = await storage.getYoutubeVideos();
      res.json(videos);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch YouTube videos" });
    }
  });
  
  app.get('/api/youtube-videos/category/:category', async (req, res) => {
    try {
      const videos = await storage.getYoutubeVideosByCategory(req.params.category);
      res.json(videos);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch YouTube videos by category" });
    }
  });
  
  app.get('/api/youtube-videos/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid video ID" });
      }
      
      const video = await storage.getYoutubeVideoById(id);
      if (!video) {
        return res.status(404).json({ message: "YouTube video not found" });
      }
      
      res.json(video);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch YouTube video" });
    }
  });
  
  app.post('/api/youtube-videos', async (req, res) => {
    try {
      const validatedData = insertYoutubeVideoSchema.parse(req.body);
      const video = await storage.createYoutubeVideo(validatedData);
      res.status(201).json({
        message: "YouTube video added successfully",
        id: video.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid video data", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Failed to add YouTube video" });
    }
  });

  // Appointment endpoint
  app.post('/api/appointments', async (req, res) => {
    try {
      const validatedData = insertAppointmentSchema.parse(req.body);
      const appointment = await storage.createAppointment(validatedData);
      
      // Get service information if serviceId is provided
      let serviceName = "General consultation";
      if (appointment.serviceId) {
        const service = await storage.getServiceById(appointment.serviceId);
        if (service) {
          serviceName = service.title;
        }
      }
      
      // Format the email content
      const emailSubject = `New Appointment Request: ${appointment.name}`;
      const emailText = `
New appointment request details:

Name: ${appointment.name}
Email: ${appointment.email}
Phone: ${appointment.phone}
Service: ${serviceName}
Preferred Date: ${appointment.preferredDate}
Preferred Time: ${appointment.preferredTime}
${appointment.message ? `Additional Message: ${appointment.message}` : ''}
`;

      const emailHtml = `
<h2>New Appointment Request</h2>
<p><strong>Name:</strong> ${appointment.name}</p>
<p><strong>Email:</strong> ${appointment.email}</p>
<p><strong>Phone:</strong> ${appointment.phone}</p>
<p><strong>Service:</strong> ${serviceName}</p>
<p><strong>Preferred Date:</strong> ${appointment.preferredDate}</p>
<p><strong>Preferred Time:</strong> ${appointment.preferredTime}</p>
${appointment.message ? `<p><strong>Additional Message:</strong> ${appointment.message}</p>` : ''}
`;

      // Send email
      const emailSent = await sendEmail({
        to: "physioforu5@gmail.com",
        subject: emailSubject,
        text: emailText,
        html: emailHtml
      });

      res.status(201).json({
        message: "Your appointment request has been submitted successfully! We will contact you soon to confirm.",
        id: appointment.id,
        emailSent: emailSent
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid appointment data", 
          errors: error.errors 
        });
      }
      console.error("Appointment error:", error);
      res.status(500).json({ message: "Failed to submit appointment request" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
