import { z } from "zod";

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^[\d\s\-\+\(\)]+$/, "Please enter a valid phone number")
    .optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
  subject: z.string().min(3, "Subject must be at least 3 characters").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Real Estate specific form schema
export const realEstateInquirySchema = contactFormSchema.extend({
  propertyType: z.enum(["residential", "commercial", "land", "other"]),
  budget: z.string().optional(),
  location: z.string().min(2, "Location must be at least 2 characters"),
});

export type RealEstateInquiryData = z.infer<typeof realEstateInquirySchema>;

// Travel specific form schema
export const travelInquirySchema = contactFormSchema.extend({
  destination: z.string().min(2, "Destination must be at least 2 characters"),
  travelDate: z.string().optional(),
  travelers: z
    .number()
    .int()
    .min(1, "Must have at least 1 traveler")
    .max(50, "Maximum 50 travelers")
    .optional(),
  tourType: z.enum(["adventure", "cultural", "beach", "city", "luxury", "other"]).optional(),
});

export type TravelInquiryData = z.infer<typeof travelInquirySchema>;

