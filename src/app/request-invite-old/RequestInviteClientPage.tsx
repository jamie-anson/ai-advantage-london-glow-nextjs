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

// Form schema
const formSchema = z.object({
  interests: z.array(z.string()).min(1, "Please select at least one interest"),
  background: z.string().min(1, "Please tell us about your background"),
  familiarity: z.string().min(1, "Please select your familiarity level"),
  timing: z.array(z.string()).min(1, "Please select at least one preferred timing"),
  timeline: z.string().min(1, "Please select your preferred timeline"),
  additionalInfo: z.string().optional(),
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
      interests: [],
      background: "",
      familiarity: "",
      timing: [],
      timeline: "",
      additionalInfo: "",
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

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      });
    }
  };

  const interestOptions = [
    { id: "business", label: "Growing my business with AI" },
    { id: "automation", label: "Automating time-consuming tasks" },
    { id: "building", label: "Learning how to build AI apps" },
    { id: "creative", label: "Creative uses for AI in content/marketing" },
    { id: "connecting", label: "Connecting with likeminded founders/professionals" },
    { id: "curious", label: "I'm just curious – not sure yet" },
  ];

  const familiarityOptions = [
    { id: "beginner", label: "Total beginner" },
    { id: "dabbled", label: "Dabbled here and there" },
    { id: "regular", label: "Regular user" },
    { id: "expert", label: "I teach others or build with them" },
  ];

  const timingOptions = [
    { id: "weekend", label: "Weekend Intensive (2 days)" },
    { id: "weekday", label: "Weekday Evening (2-3 evenings)" },
    { id: "flexible", label: "Flexible / Other" },
  ];

  const timelineOptions = [
    { id: "next-month", label: "Within the next month" },
    { id: "1-3-months", label: "1-3 months" },
    { id: "3-plus-months", label: "3+ months from now" },
  ];

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
                This is an exclusive, invite-only workshop for ambitious professionals. Tell us about yourself to get on the list.
              </p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 glass-card p-8 md:p-12">
                {/* Interests Section */}
                <FormField
                  control={form.control}
                  name="interests"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-xl">What are you most interested in?</FormLabel>
                      </div>
                      {interestOptions.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="interests"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0 mb-3"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...(field.value || []), item.id])
                                        : field.onChange(
                                          (field.value || []).filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal text-lg">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Background Section */}
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

                {/* AI Familiarity Section */}
                <FormField
                  control={form.control}
                  name="familiarity"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-xl">How familiar are you with AI tools?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-2"
                        >
                          {familiarityOptions.map((option) => (
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

                {/* Timing Section */}
                <FormField
                  control={form.control}
                  name="timing"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-xl">Preferred Timing</FormLabel>
                      </div>
                      {timingOptions.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="timing"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0 mb-3"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...(field.value || []), item.id])
                                        : field.onChange(
                                          (field.value || []).filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal text-lg">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Timeline Section */}
                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-xl">How soon are you looking to join?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-2"
                        >
                          {timelineOptions.map((option) => (
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

                {/* Additional Info Section */}
                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl mb-4 block">Anything else we should know?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us what would make this workshop unmissable for you..."
                          className="bg-black/70 border-white/30 border-2 min-h-[120px] text-white placeholder:text-white/60 p-4 focus:border-brand-green focus:ring-brand-green/50"
                          {...field}
                        />
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
                    Reserve My Spot & Get the Guide
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
