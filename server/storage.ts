import { 
  users, User, InsertUser, 
  services, Service, InsertService,
  blogPosts, BlogPost, InsertBlogPost,
  testimonials, Testimonial, InsertTestimonial,
  contactMessages, ContactMessage, InsertContactMessage,
  appointments, Appointment, InsertAppointment,
  youtubeVideos, YoutubeVideo, InsertYoutubeVideo
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Service methods
  getServices(): Promise<Service[]>;
  getServiceById(id: number): Promise<Service | undefined>;
  getServiceBySlug(slug: string): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
  
  // BlogPost methods
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostById(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  // Testimonial methods
  getTestimonials(): Promise<Testimonial[]>;
  getTestimonialById(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // Contact message methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  
  // Appointment methods
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAppointments(): Promise<Appointment[]>;
  getAppointmentById(id: number): Promise<Appointment | undefined>;
  
  // YouTube video methods
  getYoutubeVideos(): Promise<YoutubeVideo[]>;
  getYoutubeVideoById(id: number): Promise<YoutubeVideo | undefined>;
  getYoutubeVideoByVideoId(videoId: string): Promise<YoutubeVideo | undefined>;
  createYoutubeVideo(video: InsertYoutubeVideo): Promise<YoutubeVideo>;
  getYoutubeVideosByCategory(category: string): Promise<YoutubeVideo[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private services: Map<number, Service>;
  private blogPosts: Map<number, BlogPost>;
  private testimonials: Map<number, Testimonial>;
  private contactMessages: Map<number, ContactMessage>;
  private appointments: Map<number, Appointment>;
  private youtubeVideos: Map<number, YoutubeVideo>;
  
  private userCurrentId: number;
  private serviceCurrentId: number;
  private blogPostCurrentId: number;
  private testimonialCurrentId: number;
  private contactMessageCurrentId: number;
  private appointmentCurrentId: number;
  private youtubeVideoCurrentId: number;

  constructor() {
    this.users = new Map();
    this.services = new Map();
    this.blogPosts = new Map();
    this.testimonials = new Map();
    this.contactMessages = new Map();
    this.appointments = new Map();
    this.youtubeVideos = new Map();
    
    this.userCurrentId = 1;
    this.serviceCurrentId = 1;
    this.blogPostCurrentId = 1;
    this.testimonialCurrentId = 1;
    this.contactMessageCurrentId = 1;
    this.appointmentCurrentId = 1;
    this.youtubeVideoCurrentId = 1;
    
    // Initialize with sample data
    this.initializeData();
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Service methods
  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }
  
  async getServiceById(id: number): Promise<Service | undefined> {
    return this.services.get(id);
  }
  
  async getServiceBySlug(slug: string): Promise<Service | undefined> {
    return Array.from(this.services.values()).find(
      (service) => service.slug === slug,
    );
  }
  
  async createService(insertService: InsertService): Promise<Service> {
    const id = this.serviceCurrentId++;
    const service: Service = { ...insertService, id };
    this.services.set(id, service);
    return service;
  }
  
  // Blog post methods
  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }
  
  async getBlogPostById(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }
  
  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      (post) => post.slug === slug,
    );
  }
  
  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.blogPostCurrentId++;
    const post: BlogPost = { 
      ...insertBlogPost, 
      id,
      publishedAt: new Date(),
      published: insertBlogPost.published === undefined ? true : insertBlogPost.published
    };
    this.blogPosts.set(id, post);
    return post;
  }
  
  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
  
  async getTestimonialById(id: number): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }
  
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.testimonialCurrentId++;
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
  
  // Contact message methods
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageCurrentId++;
    const message: ContactMessage = { 
      ...insertMessage, 
      id,
      createdAt: new Date(),
      phone: insertMessage.phone === undefined ? null : insertMessage.phone
    };
    this.contactMessages.set(id, message);
    return message;
  }
  
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  
  // Appointment methods
  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = this.appointmentCurrentId++;
    const appointment: Appointment = {
      ...insertAppointment,
      id,
      createdAt: new Date(),
      message: insertAppointment.message === undefined ? null : insertAppointment.message,
      serviceId: insertAppointment.serviceId === undefined ? null : insertAppointment.serviceId
    };
    this.appointments.set(id, appointment);
    return appointment;
  }
  
  async getAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  
  async getAppointmentById(id: number): Promise<Appointment | undefined> {
    return this.appointments.get(id);
  }
  
  // YouTube video methods
  async getYoutubeVideos(): Promise<YoutubeVideo[]> {
    return Array.from(this.youtubeVideos.values())
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }
  
  async getYoutubeVideoById(id: number): Promise<YoutubeVideo | undefined> {
    return this.youtubeVideos.get(id);
  }
  
  async getYoutubeVideoByVideoId(videoId: string): Promise<YoutubeVideo | undefined> {
    return Array.from(this.youtubeVideos.values()).find(
      (video) => video.videoId === videoId,
    );
  }
  
  async createYoutubeVideo(insertVideo: InsertYoutubeVideo): Promise<YoutubeVideo> {
    const id = this.youtubeVideoCurrentId++;
    const video: YoutubeVideo = { 
      ...insertVideo, 
      id,
      publishedAt: new Date(),
      description: insertVideo.description === undefined ? null : insertVideo.description,
      thumbnailUrl: insertVideo.thumbnailUrl === undefined ? null : insertVideo.thumbnailUrl,
      category: insertVideo.category === undefined ? null : insertVideo.category
    };
    this.youtubeVideos.set(id, video);
    return video;
  }
  
  async getYoutubeVideosByCategory(category: string): Promise<YoutubeVideo[]> {
    return Array.from(this.youtubeVideos.values())
      .filter(video => video.category === category)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }
  
  // Initialize with sample data
  private initializeData() {
    // Services data
    const servicesData: InsertService[] = [
      {
        title: "Sports Injuries",
        description: "Specialized treatment for athletes and active individuals to help you recover and return to your sport quickly and safely.",
        icon: "fa-dumbbell",
        slug: "sports-injuries"
      },
      {
        title: "Back & Neck Pain",
        description: "Effective treatment approaches for chronic and acute back and neck pain to improve mobility and reduce discomfort.",
        icon: "fa-spine",
        slug: "back-neck-pain"
      },
      {
        title: "Joint Pain",
        description: "Personalized treatment plans for knee, shoulder, hip and other joint pain, focusing on improved function and pain relief.",
        icon: "fa-bone",
        slug: "joint-pain"
      },
      {
        title: "Post-Surgical Rehabilitation",
        description: "Comprehensive rehabilitation programs for patients recovering from surgery to restore function and strength.",
        icon: "fa-hospital",
        slug: "post-surgical-rehabilitation"
      },
      {
        title: "Gait Analysis",
        description: "Expert analysis of your walking pattern to identify issues and develop corrective strategies for better mobility.",
        icon: "fa-walking",
        slug: "gait-analysis"
      },
      {
        title: "Manual Therapy",
        description: "Hands-on techniques to reduce pain, improve joint mobility, and address muscle tension for better overall function.",
        icon: "fa-hands",
        slug: "manual-therapy"
      }
    ];
    
    servicesData.forEach(service => {
      this.createService(service);
    });
    
    // Blog posts data
    const blogPostsData: InsertBlogPost[] = [
      {
        title: "5 Effective Exercises for Relieving Back Pain",
        content: `
          <p>Back pain is one of the most common reasons people seek physiotherapy. Whether it's from poor posture, injury, or a chronic condition, the discomfort can significantly impact your quality of life.</p>
          <p>Here are five exercises that can help alleviate back pain:</p>
          <h3>1. Pelvic Tilts</h3>
          <p>This gentle exercise helps strengthen the abdominal muscles and stretch the lower back.</p>
          <ul>
            <li>Lie on your back with knees bent and feet flat on the floor</li>
            <li>Tighten your abdominal muscles and flatten your back against the floor</li>
            <li>Hold for 5 seconds, then release</li>
            <li>Repeat 10 times</li>
          </ul>
          <h3>2. Cat-Cow Stretch</h3>
          <p>This yoga-inspired movement improves flexibility and mobility in the spine.</p>
          <ul>
            <li>Start on your hands and knees in a tabletop position</li>
            <li>Inhale, dropping your belly towards the floor and lifting your gaze (Cow)</li>
            <li>Exhale, arching your spine towards the ceiling and tucking your chin (Cat)</li>
            <li>Repeat 10-15 times, moving with your breath</li>
          </ul>
          <h3>3. Bridge Exercise</h3>
          <p>The bridge strengthens the glutes and lower back while stretching the hip flexors.</p>
          <ul>
            <li>Lie on your back with knees bent and feet flat on the floor</li>
            <li>Keeping your shoulders on the floor, lift your hips towards the ceiling</li>
            <li>Hold for 5 seconds, then lower slowly</li>
            <li>Repeat 10 times</li>
          </ul>
          <h3>4. Bird Dog</h3>
          <p>This exercise improves core stability and strengthens back muscles.</p>
          <ul>
            <li>Start on your hands and knees</li>
            <li>Simultaneously extend your right arm forward and left leg backward</li>
            <li>Hold for 5 seconds, maintaining balance</li>
            <li>Return to starting position and switch sides</li>
            <li>Repeat 10 times on each side</li>
          </ul>
          <h3>5. Child's Pose</h3>
          <p>A gentle stretch that helps relieve tension in the back and promotes relaxation.</p>
          <ul>
            <li>Kneel on the floor with knees hip-width apart</li>
            <li>Sit back on your heels and reach your arms forward</li>
            <li>Rest your forehead on the floor and relax</li>
            <li>Hold for 30 seconds to 1 minute</li>
          </ul>
          <p>Remember to perform these exercises slowly and with control. If you experience increased pain, stop immediately and consult with a physiotherapist.</p>
          <p>For a personalized exercise program tailored to your specific condition, book an appointment with one of our experienced physiotherapists at PhysioForU.</p>
        `,
        excerpt: "Learn simple yet effective exercises that can help alleviate back pain and improve your spinal health.",
        imageUrl: "https://images.unsplash.com/photo-1573495804664-b1c0849525af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
        slug: "5-effective-exercises-for-relieving-back-pain",
        published: true
      },
      {
        title: "Physiotherapy Techniques You Can Do at Home",
        content: `
          <p>Physiotherapy is most effective when combined with a consistent home exercise program. While professional sessions are important, the exercises you do at home can significantly impact your recovery speed and outcomes.</p>
          <p>Here are some effective physiotherapy techniques you can safely perform at home:</p>
          <h3>Self-Massage with a Foam Roller</h3>
          <p>Foam rolling helps release muscle tension and improve circulation.</p>
          <ul>
            <li>Place the foam roller under the target muscle group</li>
            <li>Slowly roll back and forth, pausing on tender areas</li>
            <li>Spend 1-2 minutes per muscle group</li>
            <li>Focus on larger muscles like quads, hamstrings, and back</li>
          </ul>
          <h3>Gentle Stretching Routine</h3>
          <p>Regular stretching improves flexibility and reduces muscle stiffness.</p>
          <ul>
            <li>Hold each stretch for 20-30 seconds</li>
            <li>Breathe deeply and relax into the stretch</li>
            <li>Avoid bouncing or forcing the stretch</li>
            <li>Include stretches for major muscle groups</li>
          </ul>
          <h3>Balance Exercises</h3>
          <p>These exercises improve stability and proprioception, which is especially important after injuries.</p>
          <ul>
            <li>Stand on one foot for 30 seconds</li>
            <li>Progress to closing your eyes while balancing</li>
            <li>Use a wall or chair for support if needed</li>
            <li>Practice daily to see improvements</li>
          </ul>
          <h3>Resistance Band Exercises</h3>
          <p>Resistance bands are affordable and versatile tools for strengthening.</p>
          <ul>
            <li>Use for strengthening shoulders, hips, and knees</li>
            <li>Start with 10-15 repetitions per exercise</li>
            <li>Focus on proper form rather than quantity</li>
            <li>Increase resistance as you get stronger</li>
          </ul>
          <h3>Posture Correction</h3>
          <p>Good posture is crucial for preventing and managing many conditions.</p>
          <ul>
            <li>Set reminders to check your posture throughout the day</li>
            <li>Practice sitting and standing with proper alignment</li>
            <li>Strengthen core muscles to support good posture</li>
            <li>Consider ergonomic adjustments to your workspace</li>
          </ul>
          <p>Important: Always follow the specific instructions from your physiotherapist, as they will tailor exercises to your condition and stage of recovery. If you experience increased pain or discomfort with any exercise, stop and consult your healthcare provider.</p>
          <p>For a personalized home exercise program, book an appointment with PhysioForU today.</p>
        `,
        excerpt: "Discover easy-to-follow physiotherapy methods that you can incorporate into your daily routine at home.",
        imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
        slug: "physiotherapy-techniques-you-can-do-at-home",
        published: true
      },
      {
        title: "Understanding Post-Surgery Rehabilitation",
        content: `
          <p>Surgery is often just the first step in your recovery journey. The rehabilitation process that follows is equally important for achieving optimal outcomes and returning to your normal activities.</p>
          <h3>Why is Post-Surgery Rehabilitation Important?</h3>
          <p>Rehabilitation after surgery serves multiple critical purposes:</p>
          <ul>
            <li>Minimizes pain and swelling</li>
            <li>Prevents complications like blood clots and muscle atrophy</li>
            <li>Restores normal range of motion and flexibility</li>
            <li>Rebuilds strength and endurance</li>
            <li>Improves functional abilities for daily activities</li>
            <li>Facilitates faster and more complete recovery</li>
          </ul>
          <h3>The Phases of Post-Surgery Rehabilitation</h3>
          <p><strong>Phase 1: Acute Recovery (1-2 weeks post-surgery)</strong></p>
          <p>This initial phase focuses on:</p>
          <ul>
            <li>Pain management</li>
            <li>Controlling swelling</li>
            <li>Protecting the surgical site</li>
            <li>Gentle movement as approved by your surgeon</li>
            <li>Basic exercises to prevent complications</li>
          </ul>
          <p><strong>Phase 2: Motion and Basic Strengthening (2-6 weeks post-surgery)</strong></p>
          <p>As healing progresses, rehabilitation shifts to:</p>
          <ul>
            <li>Increasing range of motion</li>
            <li>Beginning light resistance exercises</li>
            <li>Improving balance and coordination</li>
            <li>Reducing dependence on assistive devices</li>
            <li>More focus on functional movements</li>
          </ul>
          <p><strong>Phase 3: Advanced Strengthening and Functional Training (6-12 weeks post-surgery)</strong></p>
          <p>This phase typically includes:</p>
          <ul>
            <li>Progressive resistance training</li>
            <li>More challenging balance exercises</li>
            <li>Activity-specific training</li>
            <li>Cardiovascular conditioning</li>
            <li>Preparation for return to work or sports</li>
          </ul>
          <p><strong>Phase 4: Return to Normal Activities (3+ months post-surgery)</strong></p>
          <p>The final phase focuses on:</p>
          <ul>
            <li>Sport-specific or job-specific training</li>
            <li>Advanced strength and conditioning</li>
            <li>Injury prevention strategies</li>
            <li>Maintenance programs</li>
          </ul>
          <h3>What to Expect During Post-Surgery Physiotherapy</h3>
          <p>Your physiotherapy program will be tailored to your specific surgery, condition, and goals, but generally includes:</p>
          <ul>
            <li>Regular sessions with a physiotherapist</li>
            <li>A customized home exercise program</li>
            <li>Manual therapy techniques</li>
            <li>Modalities for pain and inflammation (ice, heat, electrotherapy)</li>
            <li>Progression assessments</li>
            <li>Education on activity modifications</li>
          </ul>
          <p>At PhysioForU, our experienced physiotherapists work closely with your surgical team to ensure a coordinated approach to your recovery. We understand that every patient and procedure is unique, and we tailor our rehabilitation programs accordingly.</p>
          <p>If you're preparing for surgery or are in the post-surgical recovery phase, contact us to discuss how our rehabilitation services can support your journey back to health.</p>
        `,
        excerpt: "A comprehensive guide to what you can expect during rehabilitation after surgery and how to maximize recovery.",
        imageUrl: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
        slug: "understanding-post-surgery-rehabilitation",
        published: true
      }
    ];
    
    blogPostsData.forEach(post => {
      this.createBlogPost(post);
    });
    
    // Testimonials data
    const testimonialsData: InsertTestimonial[] = [
      {
        quote: "After suffering from chronic back pain for years, the team at PhysioForU developed a treatment plan that finally gave me relief. Their expertise and personalized care made all the difference.",
        name: "Sarah Johnson",
        title: "Back Pain Patient",
        rating: 5
      },
      {
        quote: "As a competitive runner, I needed specialized care for my knee injury. The physiotherapists at PhysioForU not only helped me recover but also improved my running technique to prevent future injuries.",
        name: "Michael Davis",
        title: "Sports Injury Patient",
        rating: 5
      },
      {
        quote: "Following my shoulder surgery, I was worried about regaining full movement. The rehabilitation program designed by PhysioForU was comprehensive and effective. I'm now back to all my normal activities.",
        name: "Jennifer Taylor",
        title: "Post-Surgery Patient",
        rating: 4.5
      }
    ];
    
    testimonialsData.forEach(testimonial => {
      this.createTestimonial(testimonial);
    });
    
    // YouTube videos data
    const youtubeVideosData: InsertYoutubeVideo[] = [
      // Only including videos that actually exist on YouTube
      {
        title: "Indian Physician Neurosciences 17th rank Physiotherapist Dr Vishal Sharma (PhysioForU) Jaipur",
        videoId: "owGRfzhxaz0",
        description: "Learn more about Dr. Vishal Sharma's qualifications and expertise in physiotherapy at PhysioForU clinic in Jaipur.",
        thumbnailUrl: "https://i.ytimg.com/vi/owGRfzhxaz0/maxresdefault.jpg",
        category: "About Us"
      },
      {
        title: "Why Physiotherapy is Important",
        videoId: "1l3ugHKC2Aw",
        description: "Discover the importance of physiotherapy in recovery and maintaining physical health.",
        thumbnailUrl: "https://i.ytimg.com/vi/1l3ugHKC2Aw/maxresdefault.jpg",
        category: "Educational"
      },
      {
        title: "Physiotherapy Techniques",
        videoId: "d3j4MGFFqW0",
        description: "Learn about various physiotherapy techniques used in professional treatment.",
        thumbnailUrl: "https://i.ytimg.com/vi/d3j4MGFFqW0/maxresdefault.jpg",
        category: "Techniques"
      },
      {
        title: "Home Exercise Routine for Better Mobility",
        videoId: "ApGhiByLWi8",
        description: "Follow these exercises at home to improve your mobility and flexibility.",
        thumbnailUrl: "https://i.ytimg.com/vi/ApGhiByLWi8/maxresdefault.jpg",
        category: "Home Exercises"
      },
      {
        title: "Preventing Sports Injuries Through Physiotherapy",
        videoId: "xNYUHdPnojs",
        description: "Learn how physiotherapy can help prevent common sports injuries.",
        thumbnailUrl: "https://i.ytimg.com/vi/xNYUHdPnojs/maxresdefault.jpg",
        category: "Sports Injuries"
      },
      {
        title: "Physiotherapy for Chronic Pain Management",
        videoId: "etfLJYM1Lns",
        description: "Discover how physiotherapy techniques can help manage chronic pain conditions.",
        thumbnailUrl: "https://i.ytimg.com/vi/etfLJYM1Lns/maxresdefault.jpg",
        category: "Pain Management"
      },
      {
        title: "Recovering from Joint Replacement Surgery",
        videoId: "etKRfNyK66Y",
        description: "Physiotherapy guidance for recovery after joint replacement surgery.",
        thumbnailUrl: "https://i.ytimg.com/vi/etKRfNyK66Y/maxresdefault.jpg",
        category: "Rehabilitation"
      },
      {
        title: "Stretching Exercises for Neck and Shoulder Pain",
        videoId: "ELZmn_vCOiE",
        description: "Follow these stretches to relieve tension and pain in the neck and shoulder area.",
        thumbnailUrl: "https://i.ytimg.com/vi/ELZmn_vCOiE/maxresdefault.jpg",
        category: "Neck Pain"
      },
      {
        title: "Back Pain Relief Through Gentle Exercise",
        videoId: "YLINHcT_pqQ",
        description: "Learn gentle exercises that can help alleviate back pain without straining your body.",
        thumbnailUrl: "https://i.ytimg.com/vi/YLINHcT_pqQ/maxresdefault.jpg",
        category: "Back Pain"
      },
      {
        title: "Understanding Physiotherapy Assessment",
        videoId: "rL8MnAjykFk",
        description: "What to expect during your first physiotherapy assessment and how it helps in your treatment.",
        thumbnailUrl: "https://i.ytimg.com/vi/rL8MnAjykFk/maxresdefault.jpg",
        category: "Educational"
      },
      // Adding new YouTube videos
      {
        title: "Physiotherapy Jaipur Dr Vishal Sharma Physioforu",
        videoId: "jK2mAW2rjPI",
        description: "Physiotherapy treatment by Dr. Vishal Sharma at PhysioForU clinic in Jaipur.",
        thumbnailUrl: "https://i.ytimg.com/vi/jK2mAW2rjPI/maxresdefault.jpg",
        category: "About Us"
      },
      {
        title: "How to Increase Height with Physiotherapy Exercises",
        videoId: "ibvMpENgX-k",
        description: "Exercises that can potentially help with height increase through improved posture and alignment.",
        thumbnailUrl: "https://i.ytimg.com/vi/ibvMpENgX-k/maxresdefault.jpg",
        category: "Growth & Development"
      },
      {
        title: "Physiotherapy Treatment for Frozen Shoulder",
        videoId: "ZADWd0-iQRw",
        description: "Learn about effective physiotherapy techniques for treating frozen shoulder condition.",
        thumbnailUrl: "https://i.ytimg.com/vi/ZADWd0-iQRw/maxresdefault.jpg",
        category: "Shoulder Pain"
      },
      {
        title: "Physiotherapy Exercises for Knee Pain Relief",
        videoId: "ewq4leNzNQY",
        description: "Guided exercises to help relieve knee pain and improve mobility.",
        thumbnailUrl: "https://i.ytimg.com/vi/ewq4leNzNQY/maxresdefault.jpg",
        category: "Knee Pain"
      },
      {
        title: "Ankle Sprain Physiotherapy Treatment",
        videoId: "Q0xOTHrQzCU",
        description: "Effective physiotherapy treatment methods for ankle sprains and injuries.",
        thumbnailUrl: "https://i.ytimg.com/vi/Q0xOTHrQzCU/maxresdefault.jpg",
        category: "Ankle Injuries"
      },
      {
        title: "Back Pain Relief Exercises - Part 1",
        videoId: "gdFOa32ZoG0",
        description: "First part of a series showing exercises for relieving back pain through proper movement.",
        thumbnailUrl: "https://i.ytimg.com/vi/gdFOa32ZoG0/maxresdefault.jpg",
        category: "Back Pain"
      },
      {
        title: "Home Physiotherapy Techniques for Neck Pain",
        videoId: "vUgV2FCqhRU",
        description: "Simple physiotherapy exercises you can do at home to relieve neck pain.",
        thumbnailUrl: "https://i.ytimg.com/vi/vUgV2FCqhRU/maxresdefault.jpg",
        category: "Neck Pain"
      },
      {
        title: "Treating Tennis Elbow with Physiotherapy",
        videoId: "pPRJhKy91X0",
        description: "Effective physiotherapy techniques for treating tennis elbow and related conditions.",
        thumbnailUrl: "https://i.ytimg.com/vi/pPRJhKy91X0/maxresdefault.jpg",
        category: "Elbow Pain"
      },
      {
        title: "Physiotherapy for Plantar Fasciitis",
        videoId: "ZfvlnPP1Aik",
        description: "Treatment and exercise options for managing plantar fasciitis through physiotherapy.",
        thumbnailUrl: "https://i.ytimg.com/vi/ZfvlnPP1Aik/maxresdefault.jpg",
        category: "Foot Pain"
      },
      {
        title: "Balance Exercises for Vertigo Patients",
        videoId: "sH3ABbZIyi0",
        description: "Specialized balance training exercises for patients experiencing vertigo.",
        thumbnailUrl: "https://i.ytimg.com/vi/sH3ABbZIyi0/maxresdefault.jpg",
        category: "Vertigo"
      },
      {
        title: "Post-Stroke Rehabilitation Exercises",
        videoId: "mgwOWp67S5g",
        description: "Rehabilitation exercises designed specifically for patients recovering from stroke.",
        thumbnailUrl: "https://i.ytimg.com/vi/mgwOWp67S5g/maxresdefault.jpg",
        category: "Rehabilitation"
      },
      {
        title: "Physiotherapy Techniques for Carpal Tunnel Syndrome",
        videoId: "4c8mW7cMCFc",
        description: "Effective physiotherapy exercises and treatments for carpal tunnel syndrome.",
        thumbnailUrl: "https://i.ytimg.com/vi/4c8mW7cMCFc/maxresdefault.jpg",
        category: "Hand Therapy"
      },
      {
        title: "Physiotherapy for Children with Special Needs",
        videoId: "mQTdi072zIA",
        description: "Specialized physiotherapy approaches for children with special needs and developmental conditions.",
        thumbnailUrl: "https://i.ytimg.com/vi/mQTdi072zIA/maxresdefault.jpg",
        category: "Pediatric Therapy"
      },
      {
        title: "Therapeutic Exercises for Arthritis Management",
        videoId: "siCb0LKCSkA",
        description: "Exercise routines designed to help manage arthritis symptoms and improve joint health.",
        thumbnailUrl: "https://i.ytimg.com/vi/siCb0LKCSkA/maxresdefault.jpg",
        category: "Arthritis"
      },
      {
        title: "Posture Correction Techniques",
        videoId: "k-dtl-e82PE",
        description: "Learn proper techniques for correcting posture problems and preventing related pain.",
        thumbnailUrl: "https://i.ytimg.com/vi/k-dtl-e82PE/maxresdefault.jpg",
        category: "Posture"
      },
      {
        title: "Physiotherapy for Pregnancy-Related Back Pain",
        videoId: "g86QgdJnyjw",
        description: "Safe physiotherapy exercises for pregnant women experiencing back pain.",
        thumbnailUrl: "https://i.ytimg.com/vi/g86QgdJnyjw/maxresdefault.jpg",
        category: "Pregnancy Care"
      },
      {
        title: "Sports Performance Enhancement Through Physiotherapy",
        videoId: "cTrGAPPb6qs",
        description: "How physiotherapy techniques can help improve athletic performance and prevent injuries.",
        thumbnailUrl: "https://i.ytimg.com/vi/cTrGAPPb6qs/maxresdefault.jpg",
        category: "Sports Performance"
      }
    ];
    
    youtubeVideosData.forEach(video => {
      this.createYoutubeVideo(video);
    });
  }
}

export const storage = new MemStorage();
