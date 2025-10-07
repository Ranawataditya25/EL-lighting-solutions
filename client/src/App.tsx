// import { Switch, Route, useLocation } from "wouter";
// import { queryClient } from "./lib/queryClient";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { useEffect } from "react";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
// import Sitemap from "@/components/seo/Sitemap";
// import HomePage from "@/pages/HomePage";
// import AboutPage from "@/pages/AboutPage";
// import ServicesPage from "@/pages/ServicesPage";
// import ServiceDetails from "@/pages/ServiceDetails";
// import BlogPage from "@/pages/BlogPage";
// import BlogPost from "@/pages/BlogPost";
// import TestimonialsPage from "@/pages/TestimonialsPage";
// import ContactPage from "@/pages/ContactPage";
// import VideosPage from "@/pages/VideosPage";
// import NotFound from "@/pages/not-found";

// // This component scrolls to the top when location changes
// function ScrollToTop() {
//   const [location] = useLocation();
  
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);
  
//   return null;
// }

// function Router() {
//   return (
//     <Switch>
//       <Route path="/" component={HomePage} />
//       <Route path="/about" component={AboutPage} />
//       <Route path="/services" component={ServicesPage} />
//       <Route path="/services/:slug" component={ServiceDetails} />
//       <Route path="/blog" component={BlogPage} />
//       <Route path="/blog/:slug" component={BlogPost} />
//       <Route path="/testimonials" component={TestimonialsPage} />
//       <Route path="/videos" component={VideosPage} />
//       <Route path="/contact" component={ContactPage} />
//       <Route component={NotFound} />
//     </Switch>
//   );
// }

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <div className="flex flex-col min-h-screen">
//         {/* This component will scroll to top on route change */}
//         <ScrollToTop />
//         {/* This component generates the sitemap.xml dynamically */}
//         <Sitemap />
//         <Header />
//         <main className="flex-grow">
//           <Router />
//         </main>
//         <Footer />
//       </div>
//     </QueryClientProvider>
//   );
// }

// export default App;








import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Sitemap from "@/components/seo/Sitemap";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ServiceDetails from "@/pages/ServiceDetails";
import BlogPage from "@/pages/BlogPage";
import BlogPost from "@/pages/BlogPost";
import TestimonialsPage from "@/pages/TestimonialsPage";
import ContactPage from "@/pages/ContactPage";
import VideosPage from "@/pages/VideosPage";
import NotFound from "@/pages/not-found";

// Scroll to top on route change
function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

// Route setup
function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      {/* <Route path="/services" component={ServicesPage} /> */}
      {/* <Route path="/services/:slug" component={ServiceDetails} /> */}
      {/* <Route path="/blog" component={BlogPage} /> */}
      {/* <Route path="/blog/:slug" component={BlogPost} /> */}
      <Route path="/testimonials" component={TestimonialsPage} />
      {/* <Route path="/videos" component={VideosPage} /> */}
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

// Main App
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Sitemap />
        <Header />
        <main className="flex-grow">
          <Router />
        </main>

        {/* ✅ Floating WhatsApp Button */}
        <a
          href="https://wa.me/918824585675?text=Hi%2C%20I'm%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="./physiowebreact/public/imgww.jpeg"
            viewBox="0 0 32 32"
            width="28"
            height="28"
            fill="white"
          >
            <path d="M19.11 17.74c-.29-.14-1.7-.84-1.96-.93-.26-.1-.45-.14-.63.15s-.72.93-.89 1.12c-.16.18-.33.2-.62.07-1.69-.68-2.8-1.21-3.92-2.73-.3-.4.3-.37.86-1.23.1-.14.05-.26-.03-.38-.08-.11-.63-1.5-.86-2.06-.22-.53-.45-.45-.62-.46l-.53-.01c-.19 0-.5.07-.76.35-.26.29-1 1-1 2.43 0 1.42 1.03 2.8 1.18 2.99.14.18 2.02 3.14 4.88 4.41.68.29 1.2.46 1.61.59.67.21 1.27.18 1.75.11.53-.08 1.7-.69 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.18-.55-.31zm-3.11 9.26c-1.86 0-3.7-.5-5.31-1.44l-5.61 1.48 1.5-5.47c-.97-1.64-1.49-3.5-1.49-5.41 0-5.83 4.74-10.57 10.57-10.57S26.23 5.73 26.23 11.56 21.49 22.57 15.66 22.57zM15.66 2C8.89 2 3.34 7.55 3.34 14.32c0 2.62.76 5.13 2.2 7.29L2 30l8.61-2.27c2.06 1.1 4.37 1.69 6.76 1.69 6.77 0 12.32-5.55 12.32-12.32S22.43 2 15.66 2z" />
          </svg>
        </a>

        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;

