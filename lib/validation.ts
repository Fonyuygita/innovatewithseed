import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
});

export const StudentFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  birthDate: z.coerce.date(),
  gender: z.enum(["Male", "Female", "Other"]),
  site: z.enum(["Online", "Offline", "Other"]),
  address: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(500, "Address must be at most 500 characters"),
  occupation: z
    .string()
    .min(2, "Occupation must be at least 2 characters")
    .max(500, "Occupation must be at most 500 characters"),
  ambitions: z
    .string()
    .min(2, "Ambitions must be at least 2 characters")
    .max(500, "Ambitions must be at most 500 characters"),

  duration: z
    .string()
    .min(2, "Duration must be at least 2 characters")
    .max(20, "Duration must be at most 20 characters"),
  level: z.enum(["Beginner", "Intermediate", "Advance", "Other"]),

  reason: z.string().optional(),
  notes: z.string().optional(),

  // department: z.string().min(2, "Select at least one department"),
  program: z.string().min(2, "Select at least one internship program"),
  department: z.string().min(2, "Select at least one department program"),

  identificationType: z.string().optional(),
  identificationNumber: z.string().optional(),
  identificationDocument: z.custom<File[]>().optional(),
  applicationDocument: z.custom<File[]>().optional(),

  // treatmentConsent: z
  //   .boolean()
  //   .default(false)
  //   .refine((value) => value === true, {
  //     message: "You must consent to treatment in order to proceed",
  //   }),
  // disclosureConsent: z
  //   .boolean()
  //   .default(false)
  //   .refine((value) => value === true, {
  //     message: "You must consent to disclosure in order to proceed",
  //   }),
  // privacyConsent: z
  //   .boolean()
  //   .default(false)
  //   .refine((value) => value === true, {
  //     message: "You must consent to privacy in order to proceed",
  //   }),
});
