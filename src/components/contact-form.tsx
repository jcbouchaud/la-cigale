"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { useActionState } from "react";

const initialState: ContactFormState = {
  message: null,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-primary hover:bg-primary/90"
    >
      {pending ? "Envoi..." : "Envoyer"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-primary/10 rounded-xs shadow-lg">
      <form action={formAction} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-1 sr-only"
          >
            Name
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Anthon Herr"
            className="w-full bg-background"
            aria-describedby="name-error"
          />
          {state.errors?.name && (
            <p className="text-red-500 text-sm mt-1" id="name-error">
              {state.errors.name.join(", ")}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-1 sr-only"
          >
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="anthony@gmail.com"
            className="w-full bg-background"
            aria-describedby="email-error"
          />
          {state.errors?.email && (
            <p className="text-red-500 text-sm mt-1" id="email-error">
              {state.errors.email.join(", ")}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium mb-1 sr-only"
          >
            Subject
          </label>
          <Input
            id="subject"
            name="subject"
            required
            placeholder="Réservation de groupe"
            className="w-full bg-background"
            aria-describedby="subject-error"
          />
          {state.errors?.subject && (
            <p className="text-red-500 text-sm mt-1" id="subject-error">
              {state.errors.subject.join(", ")}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-1 sr-only"
          >
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Je souhaite réserver pour un groupe de 10 personnes..."
            className="w-full min-h-[150px] bg-background"
            aria-describedby="message-error"
          />
          {state.errors?.message && (
            <p className="text-red-500 text-sm mt-1" id="message-error">
              {state.errors.message.join(", ")}
            </p>
          )}
        </div>

        <SubmitButton />

        {state.message && (
          <p
            className={`text-center ${state.message.includes("success") ? "text-green-600" : "text-red-600"}`}
          >
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}
