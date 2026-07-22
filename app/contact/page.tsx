import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact | Aditya Siagian",
  description:
    "Get in touch with Aditya Siagian for collaboration, freelance work, or networking opportunities.",
};

export default function ContactPage() {
  return <Contact />;
}
