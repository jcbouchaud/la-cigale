"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormState = {
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
    _form?: string[];
  };
  message?: string | null;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to submit form.",
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    // Here you would typically send the form data to your backend
    // For example, sending an email or storing in a database
    console.log("Form submission:", { name, email, subject, message });

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      message: "Message sent successfully!",
    };
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      message: "Something went wrong. Please try again.",
    };
  }
}
