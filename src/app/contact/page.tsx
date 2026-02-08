'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Phone, Mail, MapPin } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

import { PublicLayout } from '@/components/layout/public-layout';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WhatsAppButton } from '@/components/whatsapp-button';

// Mock function for EmailJS, as we cannot implement it fully
async function sendEmail(data: any) {
    console.log("Sending email with data:", data);
    // In a real app, you would use EmailJS SDK here:
    // emailjs.send('service_id', 'template_id', data, 'user_id');
    return new Promise(resolve => setTimeout(resolve, 1000));
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: 'Please enter a valid phone number.',
  }),
  issue: z.string().min(10, {
    message: 'Please describe your legal issue in at least 10 characters.',
  }),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      issue: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
        await sendEmail(values);
        toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. We will get back to you shortly.",
        });
        form.reset();
    } catch (error) {
        toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem sending your message. Please try again.",
        });
    }
  }

  return (
    <PublicLayout>
      <main className="flex-1">
        <div className="bg-primary/5">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <h1 className="text-4xl md:text-5xl font-headline text-center font-bold text-primary">
              Get In Touch
            </h1>
            <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
              We are here to help. Reach out to us for a confidential consultation regarding your legal needs.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 123 456 7890" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="issue"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Describe Your Legal Issue</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Briefly explain your situation..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-headline text-primary">Contact Information</h3>
                <div className="mt-4 space-y-4 text-muted-foreground">
                   <div className="flex items-start">
                        <MapPin className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-accent" />
                        <div>
                            <p className="font-bold text-foreground">Office Address</p>
                            <p>123 Law Chamber, Near High Court, Ranchi, Jharkhand, 834001</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Mail className="h-6 w-6 mr-4 text-accent" />
                         <div>
                            <p className="font-bold text-foreground">Email</p>
                            <a href="mailto:contact@lexcompage.com" className="hover:text-primary transition-colors">contact@lexcompage.com</a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Phone className="h-6 w-6 mr-4 text-accent" />
                        <div>
                            <p className="font-bold text-foreground">Phone</p>
                             <a href="tel:+911234567890" className="hover:text-primary transition-colors">+91 123-456-7890</a>
                        </div>
                    </div>
                </div>
                 <div className="mt-6 flex space-x-4">
                    <Button asChild>
                        <a href="tel:+911234567890">
                            <Phone className="mr-2 h-4 w-4" /> Call Now
                        </a>
                    </Button>
                    <Button asChild variant="outline">
                        <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">
                             <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2"
                            >
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg>
                            WhatsApp
                        </a>
                    </Button>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-headline text-primary">Office Location</h3>
                 <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.65118779951!2d85.3468903154203!3d23.36539298478143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1a3a4add147%3A0x292ec9473b95600b!2sHigh%20Court%20of%20Jharkhand!5e0!3m2!1sen!2sin!4v1626868616142!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <WhatsAppButton />
    </PublicLayout>
  );
}
