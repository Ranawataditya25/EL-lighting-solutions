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
      
      // Send confirmation email to user
      const userEmailSubject = `Thank you for contacting PhysioForU - We've received your message`;
      const userEmailText = `
Dear ${message.name},

Thank you for reaching out to PhysioForU! We have received your message and appreciate you taking the time to contact us.

Your Message Details:
Subject: ${message.subject}
Message: ${message.message}

We will review your inquiry and get back to you within 24 hours. If this is an urgent matter, please feel free to call us directly at +91 9782219444.

Best regards,
PhysioForU Team
C-98, Om Path, Bhagirath Marg
Shyam Nagar, Behind Community Centre
Jaipur, Rajasthan, India
Phone: +91 9782219444
Email: physioforu5@gmail.com
`;

      const userEmailHtml = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .message-box { background-color: #f8f9fa; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0; }
        .footer { background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 14px; color: #666; }
    </style>
</head>
<body>
    <div class="header">
        <h1>PhysioForU</h1>
        <p>Thank you for contacting us!</p>
    </div>
    
    <div class="content">
        <p>Dear ${message.name},</p>
        
        <p>Thank you for reaching out to PhysioForU! We have received your message and appreciate you taking the time to contact us.</p>
        
        <div class="message-box">
            <h3>Your Message Details:</h3>
            <p><strong>Subject:</strong> ${message.subject}</p>
            <p><strong>Message:</strong> ${message.message}</p>
        </div>
        
        <p>We will review your inquiry and get back to you within 24 hours. If this is an urgent matter, please feel free to call us directly at <strong>+91 9782219444</strong>.</p>
        
        <p>Best regards,<br>
        <strong>PhysioForU Team</strong></p>
    </div>
    
    <div class="footer">
        <p>
            C-98, Om Path, Bhagirath Marg<br>
            Shyam Nagar, Behind Community Centre<br>
            Jaipur, Rajasthan, India<br>
            Phone: +91 9782219444 | Email: physioforu5@gmail.com
        </p>
    </div>
</body>
</html>
`;

      // Send email to user
      const emailSent = await sendEmail({
        to: message.email,
        subject: userEmailSubject,
        text: userEmailText,
        html: userEmailHtml
      });

      res.status(201).json({
        message: "Thank you for your message! We will get back to you soon. A confirmation email has been sent to your email address.",
        id: message.id,
        emailSent: emailSent
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
