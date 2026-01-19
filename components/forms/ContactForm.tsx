"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void> | void;
  submitLabel?: string;
  className?: string;
}

export function ContactForm({
  onSubmit,
  submitLabel = "Send Message",
  className = "",
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onFormSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        // Default behavior - log to console (in production, this would be an API call)
        console.log("Form submitted:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      }
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className={`space-y-6 ${className}`}
      noValidate
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-black mb-2"
        >
          Name <span className="text-red-600">*</span>
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20 transition-colors"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-2 text-sm text-red-600" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-black mb-2"
        >
          Email <span className="text-red-600">*</span>
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20 transition-colors"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p
            id="email-error"
            className="mt-2 text-sm text-red-600"
            role="alert"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-black mb-2"
        >
          Phone
        </label>
        <input
          {...register("phone")}
          type="tel"
          id="phone"
          className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20 transition-colors"
          aria-invalid={errors.phone ? "true" : "false"}
        />
        {errors.phone && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-black mb-2"
        >
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={5}
          className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20 transition-colors resize-none"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p
            id="message-error"
            className="mt-2 text-sm text-red-600"
            role="alert"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      {submitStatus.type && (
        <div
          className={`rounded-lg p-4 ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border-2 border-green-200"
              : "bg-red-50 text-red-800 border-2 border-red-200"
          }`}
          role="alert"
        >
          {submitStatus.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-black px-6 py-3 font-semibold text-white transition-all hover:bg-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}
