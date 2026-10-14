"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("from_name");
    const email = data.get("reply_to");
    const message = data.get("message");
    // Open the email client as a fallback without a backend:
    window.location.href = `mailto:${profile.email}?subject=Message from ${name} (${email})&body=${encodeURIComponent(String(message ?? ""))}`;
    setSent(true);
  };

  return (
    <section id="contact" className="w-full py-12 border-t border-[#ffffff10]">
      <div className="max-w-5xl mx-auto px-9 sm:px-0">
        <h2 className="text-lg text-[#A9FF5B] mb-2 shiny-sec">Let&apos;s talk</h2>
        <h3 className="text-4xl md:text-5xl font-medium text-[#f5f5f5] mb-6">
          Contact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-[#a1a1aa]">
            <p className="mb-4">
              Have a question or a project in mind? Feel free to reach out.
            </p>
            <div className="flex items-center gap-2">
              <span>Location:</span>
              <span className="text-white">{profile.location}</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span>Email:</span>
              <a href={`mailto:${profile.email}`} className="text-white hover:text-[#A9FF5B] transition-colors">
                {profile.email}
              </a>
            </div>
          </div>
          <div>
            {!sent ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  required
                  className="px-4 py-2 bg-[rgba(20,20,20,0.61)] text-white border border-[rgba(255,255,255,0.08)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A9FF5B]"
                />
                <input
                  type="email"
                  name="reply_to"
                  placeholder="Email"
                  required
                  className="px-4 py-2 bg-[rgba(20,20,20,0.61)] text-white border border-[rgba(255,255,255,0.08)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A9FF5B]"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  required
                  className="px-4 py-2 bg-[rgba(20,20,20,0.61)] text-white border border-[rgba(255,255,255,0.08)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A9FF5B] resize-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[rgba(255,255,255,0.08)] text-white rounded-lg opacity-70 transition-opacity border border-[rgba(255,255,255,0.08)] hover:opacity-100"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="flex justify-center items-center mt-4 text-white text-lg">
                ✅ Thank you for your message! I&apos;ll get back to you via email soon.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
