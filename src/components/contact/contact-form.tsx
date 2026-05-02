"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Send } from "lucide-react";

const inquiryTypes = [
  "General",
  "Product Inquiry",
  "Partnership",
  "Careers",
  "Other",
] as const;

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  inquiryType: z.enum(inquiryTypes),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      inquiryType: "General",
      message: "",
    },
  });

  const inquiryType = watch("inquiryType");

  async function onSubmit(data: ContactFormData) {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className="glass rounded-2xl p-8 md:p-10 text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-gold/10">
          <Send className="size-8 text-gold" />
        </div>
        <h3 className="mt-6 font-heading text-2xl font-semibold text-foreground">
          Thank You!
        </h3>
        <p className="mt-3 text-foreground/60 leading-relaxed">
          Your message has been received. Our team typically responds within
          one business day. We look forward to connecting with you.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-gold hover:text-gold-light transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass rounded-2xl p-8 md:p-10"
      noValidate
    >
      <h2 className="font-heading text-2xl font-semibold text-foreground">
        Send Us a Message
      </h2>
      <p className="mt-2 text-sm text-foreground/50">
        Fill out the form below and we&apos;ll get back to you shortly.
      </p>

      <div className="mt-8 space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-foreground/70 mb-1.5"
          >
            Name <span className="text-crimson">*</span>
          </label>
          <Input
            id="contact-name"
            {...register("name")}
            placeholder="Your full name"
            className={cn(
              "h-10 border-gold/20 focus-visible:border-gold focus-visible:ring-gold/30",
              errors.name && "border-crimson focus-visible:border-crimson"
            )}
            aria-invalid={errors.name ? "true" : undefined}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-crimson">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-foreground/70 mb-1.5"
          >
            Email <span className="text-crimson">*</span>
          </label>
          <Input
            id="contact-email"
            type="email"
            {...register("email")}
            placeholder="you@company.com"
            className={cn(
              "h-10 border-gold/20 focus-visible:border-gold focus-visible:ring-gold/30",
              errors.email && "border-crimson focus-visible:border-crimson"
            )}
            aria-invalid={errors.email ? "true" : undefined}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-crimson">{errors.email.message}</p>
          )}
        </div>

        {/* Company & Phone */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-company"
              className="block text-sm font-medium text-foreground/70 mb-1.5"
            >
              Company
            </label>
            <Input
              id="contact-company"
              {...register("company")}
              placeholder="Company name"
              className="h-10 border-gold/20 focus-visible:border-gold focus-visible:ring-gold/30"
            />
          </div>
          <div>
            <label
              htmlFor="contact-phone"
              className="block text-sm font-medium text-foreground/70 mb-1.5"
            >
              Phone
            </label>
            <Input
              id="contact-phone"
              type="tel"
              {...register("phone")}
              placeholder="+1 (555) 000-0000"
              className="h-10 border-gold/20 focus-visible:border-gold focus-visible:ring-gold/30"
            />
          </div>
        </div>

        {/* Inquiry Type */}
        <div>
          <label
            htmlFor="contact-type"
            className="block text-sm font-medium text-foreground/70 mb-1.5"
          >
            Inquiry Type <span className="text-crimson">*</span>
          </label>
          <Select
            value={inquiryType}
            onValueChange={(value) =>
              setValue("inquiryType", (value ?? "General") as ContactFormData["inquiryType"], {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger
              className={cn(
                "w-full h-10 border-gold/20 focus-visible:border-gold focus-visible:ring-gold/30",
                errors.inquiryType && "border-crimson focus-visible:border-crimson"
              )}
            >
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              {inquiryTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.inquiryType && (
            <p className="mt-1 text-xs text-crimson">
              {errors.inquiryType.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-medium text-foreground/70 mb-1.5"
          >
            Message <span className="text-crimson">*</span>
          </label>
          <Textarea
            id="contact-message"
            {...register("message")}
            placeholder="How can we help you?"
            rows={5}
            className={cn(
              "min-h-[120px] border-gold/20 focus-visible:border-gold focus-visible:ring-gold/30 resize-y",
              errors.message && "border-crimson focus-visible:border-crimson"
            )}
            aria-invalid={errors.message ? "true" : undefined}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-crimson">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "mt-4 inline-flex w-full items-center justify-center gap-2 h-12 rounded-xl text-base font-semibold transition-all duration-300",
            "bg-crimson text-white shadow-lg shadow-crimson/30",
            "hover:bg-crimson-dark hover:shadow-xl hover:shadow-crimson/40",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="size-5" />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
}
