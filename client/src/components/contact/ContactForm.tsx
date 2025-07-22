import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { insertContactMessageSchema, InsertContactMessage } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const formSchema = insertContactMessageSchema
  .extend({
    email: z.string().email("Please enter a valid email address"),
  });

type ContactFormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message! We will get back to you soon. A confirmation email has been sent to your email address.",
        variant: "default",
      });
      form.reset();
      setIsSubmitSuccessful(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitSuccessful(false);
      }, 5000);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="bg-neutral-100 p-8 rounded-lg"
      >
        <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
        
        {isSubmitSuccessful && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            <p>Thank you for your message! We will get back to you soon. A confirmation email has been sent to your email address.</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-text-secondary">Your Name *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    {...field} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-text-secondary">Your Email *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="john@example.com" 
                    type="email" 
                    {...field} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-text-secondary">Your Phone Number</FormLabel>
              <FormControl>
                <Input 
                  placeholder="+44 (0) XXX XXX XXXX" 
                  type="tel" 
                  {...field} 
                  value={field.value || ""}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-text-secondary">Subject *</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Appointment Request" 
                  {...field} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="text-text-secondary">Your Message *</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="How can we help you?" 
                  rows={5} 
                  {...field} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition duration-300 w-full"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
