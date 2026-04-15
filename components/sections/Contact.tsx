"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <span className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's create something <span className="text-gradient">extraordinary</span> together.
          </h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-md">
            I'm always open to discussing new projects, creative ideas or 
            opportunities to be part of your visions.
          </p>

          <div className="space-y-8">
            <ContactInfoItem label="Email" value="adityasiagian07@gmail.com" />
            <ContactInfoItem label="Phone" value="+62 812 2879 9948" />
            <ContactInfoItem label="Location" value="Temanggung, Indonesia" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 glass rounded-3xl border border-border relative"
        >
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 bg-background/95 rounded-3xl z-10"
            >
              <CheckCircle2 size={64} className="text-green-500 mb-6" />
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-zinc-400">Thanks for reaching out. I'll get back to you soon.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 text-sm text-blue-500 hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : null}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Name</label>
              <input
                {...register("name")}
                className="w-full bg-foreground/[0.03] border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Email</label>
              <input
                {...register("email")}
                className="w-full bg-foreground/[0.03] border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Message</label>
              <textarea
                {...register("message")}
                rows={4}
                className="w-full bg-foreground/[0.03] border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
              {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full py-4 bg-foreground text-background rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-500 hover:text-white transition-all disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <Send size={18} />}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function ContactInfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-zinc-500 text-xs uppercase tracking-widest font-mono block mb-1">
        {label}
      </span>
      <span className="text-foreground text-lg font-medium">{value}</span>
    </div>
  );
}
