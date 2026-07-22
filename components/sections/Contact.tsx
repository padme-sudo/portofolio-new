"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { animate, stagger } from "animejs";

const ACCESS_KEY = "669a1ad0-3c61-4ab9-bd3c-bbab7b540e2b";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    animate(".contact-reveal", {
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 500,
      delay: stagger(100),
      ease: "outQuad",
    });
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-24 px-6 bg-bg-secondary border-y-[3px] border-fg relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="bg-green text-white font-black tracking-wider uppercase text-sm px-3 py-1 neo-border inline-block mb-4 contact-reveal" style={{ opacity: 0 }}>
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-black contact-reveal" style={{ opacity: 0 }}>
            Let&apos;s{" "}
            <span className="bg-pink text-white px-2 neo-border inline-block -rotate-1">
              Talk
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4 contact-reveal" style={{ opacity: 0 }}>
            <div className="neo-card bg-white neo-shadow-sm px-5 py-4">
              <span className="text-fg-secondary text-xs font-black uppercase tracking-wider block mb-1">
                Email
              </span>
              <span className="text-fg font-black">adityasiagian07@gmail.com</span>
            </div>
            <div className="neo-card bg-white neo-shadow-sm px-5 py-4">
              <span className="text-fg-secondary text-xs font-black uppercase tracking-wider block mb-1">
                Location
              </span>
              <span className="text-fg font-black">Temanggung, Indonesia</span>
            </div>
          </div>

          <div className="neo-card bg-yellow neo-shadow p-6 contact-reveal" style={{ opacity: 0 }}>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-8">
                <CheckCircle2 size={48} className="text-green mb-4" />
                <h3 className="text-xl font-black mb-1">Message Sent!</h3>
                <p className="text-fg-secondary text-sm font-medium">Thanks for reaching out.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="access_key" value={ACCESS_KEY} />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-white border-[3px] border-fg px-4 py-3 font-medium focus:outline-none focus:bg-cyan"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-white border-[3px] border-fg px-4 py-3 font-medium focus:outline-none focus:bg-cyan"
                />
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Your Message"
                  className="w-full bg-white border-[3px] border-fg px-4 py-3 font-medium focus:outline-none focus:bg-cyan resize-none"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full neo-btn py-3 bg-fg text-bg font-black uppercase flex items-center justify-center gap-2 neo-shadow disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={16} /> Send</>
                  )}
                </button>
                {status === "error" && (
                  <p className="text-pink text-sm font-bold text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
