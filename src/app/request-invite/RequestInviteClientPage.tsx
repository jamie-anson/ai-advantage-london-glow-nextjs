"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from 'next/link';

// Components
import AnimatedBackground from "@/components/AnimatedBackground";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import ButtonPrimary from "@/components/ButtonPrimary";

// UI Components
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

// Form schema
const formSchema = z.object({
  currentState: z.enum([
    "actively_building",
    "built_small",
    "experimented",
    "exploring"
  ]),
  background: z.string().min(1, "Please tell us about your background"),
  workshopWin: z.string().min(1, "Please tell us what would make this a win for you"),
  confirmationSpeed: z.enum(["immediately", "after_approval"]),
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

export default function RequestInviteClientPage() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentState: undefined,
      background: "",
      workshopWin: "",
      confirmationSpeed: undefined,
      name: "",
      email: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Form submitted:", data);

    try {
      const response = await fetch('https://hook.eu2.make.com/rkaf4c5ny755iu1znhu4f7ofn6a27ib4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log('Webhook response:', await response.text());

      router.push(`/thank-you?name=${encodeURIComponent(data.name)}`);

      setTimeout(() => {
        toast({
          title: "Request Received",
          description: "We'll be in touch shortly.",
        });
      }, 2000);

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      });
    }
  };

  const currentStateOptions = [
    { id: "actively_building", label: "I’m actively building or testing an AI-powered project" },
    { id: "built_small", label: "I’ve built something small (prototype / script / workflow) and want to go further" },
    { id: "experimented", label: "I’ve experimented but haven’t shipped anything yet" },
    { id: "exploring", label: "I’m mostly exploring and learning" },
  ];

  const confirmationSpeedOptions = [
    { id: "immediately", label: "Immediately" },
    { id: "after_approval", label: "After I get approval" },
  ];

  const confirmationSpeedValue = form.watch("confirmationSpeed");

  return (
    <div className="relative bg-black min-h-screen text-white overflow-hidden">
      <CustomCursor />
      <AnimatedBackground />
      <div className="relative z-10">
        <React.Fragment>
          <div className="container mx-auto px-6 py-24 max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="heading-lg mb-4">Request an Invite</h1>
              <p className="body-lg text-white/80 max-w-2xl mx-auto">
                This is an exclusive, invite-only workshop for ambitious professionals. Applications are reviewed twice weekly, with invitations sent on Sundays and Wednesdays.
              </p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 glass-card p-8 md:p-12">

                {/* 1. Current State Section */}
                <FormField
                  control={form.control}
                  name="currentState"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-xl">Which best describes where you are right now?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-2"
                        >
                          {currentStateOptions.map((option) => (
                            <FormItem key={option.id} className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value={option.id} />
                              </FormControl>
                              <FormLabel className="font-normal text-lg">{option.label}</FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 2. Background Section */}
                <FormField
                  control={form.control}
                  name="background"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl mb-4 block">Your Background</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Founder of a SaaS startup, Marketing Manager at a tech company, Freelance Designer..."
                          className="bg-black/70 border-white/30 border-2 min-h-[120px] text-white placeholder:text-white/60 p-4 focus:border-brand-green focus:ring-brand-green/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 3. Workshop Win Section */}
                <FormField
                  control={form.control}
                  name="workshopWin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl mb-4 block">What would make this workshop a clear win for you?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ideally, I leave with..."
                          className="bg-black/70 border-white/30 border-2 min-h-[120px] text-white placeholder:text-white/60 p-4 focus:border-brand-green focus:ring-brand-green/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 4. Confirmation Speed Section */}
                <FormField
                  control={form.control}
                  name="confirmationSpeed"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-xl">If invited, how quickly would you expect to confirm your place?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-2"
                        >
                          {confirmationSpeedOptions.map((option) => (
                            <div key={option.id}>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value={option.id} />
                                </FormControl>
                                <FormLabel className="font-normal text-lg">{option.label}</FormLabel>
                              </FormItem>
                              {option.id === "after_approval" && confirmationSpeedValue === "after_approval" && (
                                <div className="ml-7 mt-2 mb-4 p-4 bg-white/5 border border-white/10 rounded-md">
                                  <p className="text-sm text-white/80 flex items-start gap-2">
                                    <span>📄</span>
                                    <span>Here’s a <Link href="/AI_Advantage_Exec_Summary.pdf" target="_blank" className="text-brand-green hover:underline font-medium">PDF with a concise, exec-ready summary</Link> outlining outcomes, relevance, and ROI to help.</span>
                                  </p>
                                </div>
                              )}
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 5 & 6. Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xl mb-4 block">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your full name"
                            className="bg-black/70 border-white/30 border-2 text-white placeholder:text-white/60 p-3 focus:border-brand-green focus:ring-brand-green/50"
                            {...field}
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
                        <FormLabel className="text-xl mb-4 block">
                          Best Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            className="bg-black/70 border-white/30 border-2 text-white placeholder:text-white/60 p-3 focus:border-brand-green focus:ring-brand-green/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="pt-6 flex justify-center">
                  <ButtonPrimary className="px-12 py-4 text-lg" type="submit" data-testid="submit-button">
                    Apply for Your Seat
                  </ButtonPrimary>
                </div>
              </form>
            </Form>
          </div>
        </React.Fragment>
        <Footer />
      </div>
    </div>
  );
}
