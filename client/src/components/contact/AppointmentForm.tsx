import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// ✅ Define schema locally (instead of @shared/schema)
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceId: z.string().optional(),
  preferredDate: z.date({
    required_error: "Please select a date",
    invalid_type_error: "That's not a date!"
  }),
  preferredTime: z.string({
    required_error: "Please select a time",
  }),
  message: z.string().optional().default(""),
});

type AppointmentFormData = z.infer<typeof formSchema>;

// Available time slots
const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM",
  "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
];

// Hardcoded services (instead of fetching from backend)
const services = [
  { id: "1", title: "General Consultation" },
  { id: "2", title: "Physiotherapy" },
  { id: "3", title: "Rehabilitation" },
  { id: "4", title: "Sports Therapy" },
];

const AppointmentForm = () => {
  const { toast } = useToast();
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      serviceId: "",
      preferredTime: "",
      preferredDate: undefined,
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: Omit<AppointmentFormData, "preferredDate"> & { preferredDate: string }) => {
      const response = await apiRequest('POST', '/api/appointments', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Appointment Requested",
        description: "Thank you! Your appointment request has been submitted.",
        variant: "default",
      });
      form.reset();
      setIsSubmitSuccessful(true);

      setTimeout(() => setIsSubmitSuccessful(false), 5000);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem submitting your appointment request. Please try again.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    },
  });

  const onSubmit = (data: AppointmentFormData) => {
    const formattedData = {
      ...data,
      preferredDate: format(data.preferredDate, 'yyyy-MM-dd'),
    };
    mutation.mutate(formattedData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="bg-neutral-100 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-6">Book an Appointment</h3>

        {isSubmitSuccessful && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            <p>Thank you for your appointment request! We will contact you soon.</p>
          </div>
        )}

        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name *</FormLabel>
              <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email *</FormLabel>
              <FormControl><Input placeholder="john@example.com" type="email" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        {/* Phone */}
        <FormField control={form.control} name="phone" render={({ field }) => (
          <FormItem className="mb-4">
            <FormLabel>Your Phone Number *</FormLabel>
            <FormControl><Input placeholder="+91 XXXXXXXXXX" type="tel" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        {/* Service Type */}
        <FormField control={form.control} name="serviceId" render={({ field }) => (
          <FormItem className="mb-4">
            <FormLabel>Service Type</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
              </FormControl>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.id} value={service.id}>{service.title}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )} />

        {/* Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <FormField control={form.control} name="preferredDate" render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Preferred Date *</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button variant="outline" className={cn("w-full justify-start", !field.value && "text-muted-foreground")}>
                      {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return date < today || date.getDay() === 0; // disable past & Sundays
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="preferredTime" render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Time *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger><SelectValue placeholder="Select a time" /></SelectTrigger>
                </FormControl>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>{time}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        {/* Message */}
        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem className="mb-6">
            <FormLabel>Additional Information</FormLabel>
            <FormControl><Textarea placeholder="Tell us about your condition..." rows={4} {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <Button type="submit" className="w-full bg-primary text-white" disabled={mutation.isPending}>
          {mutation.isPending ? "Submitting..." : "Request Appointment"}
        </Button>
      </form>
    </Form>
  );
};

export default AppointmentForm;