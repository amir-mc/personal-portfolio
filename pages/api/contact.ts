import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/mongodb";
import Contact from "../../models/Contact";
import { z } from "zod";

// Define a schema for the request body
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Validate the request body
    const validationResult = contactSchema.safeParse(req.body);
    if (!validationResult.success) {
      return res.status(400).json({ message: validationResult.error.errors });
    }

    // Connect to the database
    await connectToDatabase();

    // Save the contact message
    const { name, email, message } = validationResult.data;
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
}