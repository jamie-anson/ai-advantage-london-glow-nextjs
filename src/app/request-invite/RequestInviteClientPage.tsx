"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";


// Components
import AnimatedBackground from "@/components/AnimatedBackground";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import ButtonPrimary from "@/components/ButtonPrimary";

// UI Components
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";

// Form schema
const formSchema = z.object({
  currentStatus: z.string().min(1, "Please select an option"),
  background: z.string().min(1, "Please tell us about your background"),
  workshopGoals: z.string().min(1, "Please tell us what would make this a win"),
  confirmationSpeed: z.string().min(1, "Please select an option"),
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
      currentStatus: "",
      background: "",
      workshopGoals: "",
      confirmationSpeed: "",
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
          title: "✈️ Your guide is on its way",
          description: "It will be with you in 15 mins",
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

  const currentStatusOptions = [
    { id: "building", label: "I’m actively building or testing an AI-powered project" },
    { id: "prototype", label: "I’ve built something small (prototype / script / workflow) and want to go further" },
    { id: "experimenting", label: "I’ve experimented but haven’t shipped anything yet" },
    { id: "exploring", label: "I’m mostly exploring and learning" },
  ];

  return (
    <div className="relative bg-black min-h-screen text-white overflow-hidden">
      <CustomCursor />
      <AnimatedBackground />
      <div className="relative z-10">
        <React.Fragment>
          <div className="container mx-auto px-6 pt-32 pb-24 md:pt-40 max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="heading-lg mb-4">Request an Invite</h1>
              <p className="body-lg text-white/80 max-w-2xl mx-auto">
                This is an exclusive, invite-only workshop for ambitious professionals. Tell us about yourself to get on the list.
              </p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 glass-card p-8 md:p-12">

                {/* Q1: Current Status */}
                <FormField
                  control={form.control}
                  name="currentStatus"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-xl">Which best describes where you are right now?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-3"
                        >
                          {currentStatusOptions.map((option) => (
                            <FormItem key={option.id}>
                              <FormControl>
                                <RadioGroupItem
                                  value={option.id}
                                  className="peer sr-only"
                                  id={option.id}
                                />
                              </FormControl>
                              <Label
                                htmlFor={option.id}
                                className={`flex items-start space-x-3 space-y-0 w-full p-4 border-2 rounded-lg cursor-pointer transition-all hover:bg-white/5 ${field.value === option.id
                                  ? "border-brand-green bg-brand-green/10"
                                  : "border-white/20"
                                  }`}
                              >
                                <div className={`mt-1 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${field.value === option.id ? "border-brand-green" : "border-white/50"
                                  }`}>
                                  {field.value === option.id && (
                                    <div className="w-2 h-2 rounded-full bg-brand-green" />
                                  )}
                                </div>
                                <span className="font-normal text-lg leading-snug">
                                  {option.label}
                                </span>
                              </Label>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Q2: Background */}
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

                {/* Q3: Workshop Goals */}
                <FormField
                  control={form.control}
                  name="workshopGoals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl mb-4 block">What would make this workshop a clear win for you?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us what you hope to achieve..."
                          className="bg-black/70 border-white/30 border-2 min-h-[120px] text-white placeholder:text-white/60 p-4 focus:border-brand-green focus:ring-brand-green/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Q4: Confirmation Speed */}
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
                          className="flex flex-col space-y-4"
                        >
                          <FormItem>
                            <FormControl>
                              <RadioGroupItem
                                value="immediately"
                                className="peer sr-only"
                                id="immediately"
                              />
                            </FormControl>
                            <Label
                              htmlFor="immediately"
                              className={`flex items-start space-x-3 space-y-0 w-full p-4 border-2 rounded-lg cursor-pointer transition-all hover:bg-white/5 ${field.value === "immediately"
                                ? "border-brand-green bg-brand-green/10"
                                : "border-white/20"
                                }`}
                            >
                              <div className={`mt-1 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${field.value === "immediately" ? "border-brand-green" : "border-white/50"
                                }`}>
                                {field.value === "immediately" && (
                                  <div className="w-2 h-2 rounded-full bg-brand-green" />
                                )}
                              </div>
                              <span className="font-normal text-lg leading-snug">Immediately</span>
                            </Label>
                          </FormItem>

                          <div className="flex flex-col gap-2">
                            <FormItem>
                              <FormControl>
                                <RadioGroupItem
                                  value="approval"
                                  className="peer sr-only"
                                  id="approval"
                                />
                              </FormControl>
                              <Label
                                htmlFor="approval"
                                className={`flex items-start space-x-3 space-y-0 w-full p-4 border-2 rounded-lg cursor-pointer transition-all hover:bg-white/5 ${field.value === "approval"
                                  ? "border-brand-green bg-brand-green/10"
                                  : "border-white/20"
                                  }`}
                              >
                                <div className={`mt-1 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${field.value === "approval" ? "border-brand-green" : "border-white/50"
                                  }`}>
                                  {field.value === "approval" && (
                                    <div className="w-2 h-2 rounded-full bg-brand-green" />
                                  )}
                                </div>
                                <span className="font-normal text-lg leading-snug">After I get approval</span>
                              </Label>
                            </FormItem>

                            {/* Nested content for "approval" explanation/link */}
                            <div className="ml-8 text-white/70 text-sm pl-4">
                              <a
                                href="/downloads/ai_workshop_london_pitch.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center hover:text-brand-green transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
                                Here’s a PDF with a concise, exec-ready summary outlining outcomes, relevance, and ROI to help.
                              </a>
                            </div>
                          </div>
                        </RadioGroup>

                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Name and Email */}
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
                    Confirm my interest
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
