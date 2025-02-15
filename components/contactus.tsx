'use client';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSuccessMessage("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      setSuccessMessage("Something went wrong!");
    }
  };

  return (
    <>
      <div className="w-full pt-20 pb-10" id="contact">
        <div className="flex flex-col items-center">
          <h1 className="heading text-white lg:max-w-[45vw]">
            Ready to Take <span className="text-blue-800">Your</span> project
          </h1>
          <h2 className="heading text-white lg:max-w-[35vw]">
            Contact <span className="text-blue-800">me</span> now
          </h2>
        </div>
      </div>

      <div className="max-w-lg mx-auto p-6 bg-gray-500 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <Input id="name" {...register("name")} placeholder="Your Name" />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              {...register("email")}
              placeholder="Your Email"
              type="email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="Your Message"
              rows={4}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          {successMessage && (
            <p className="text-green-500 text-sm text-center">
              {successMessage}
            </p>
          )}
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Submitting..." : "Send Message"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;