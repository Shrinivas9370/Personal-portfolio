import { useState } from "react";
import emailjs from '@emailjs/browser';
// ─── Replace these with your actual EmailJS credentials ───────────────────────
const EMAILJS_SERVICE_ID = "service_nex0qcb";
const EMAILJS_TEMPLATE_ID = "template_jj7cll8";
const EMAILJS_PUBLIC_KEY = "QeD_f3hoEn-EAfwUt";

type FormState = "idle" | "sending" | "success" | "error";
export const ContactForm = () => {

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Dynamically load EmailJS so it doesn't block page load
      const emailjs = await import("@emailjs/browser");
      emailjs.init("QeD_f3hoEn-EAfwUt");

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_name: "Shrinivas",
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-zinc-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl max-w-2xl mx-auto">
      <div className="p-6 border-b border-slate-800">
        <h3 className="text-xl font-bold text-white">Send a Message</h3>
      </div>

      <div className="p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name and Email Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="bg-neutral-900 text-white text-sm h-10 w-full border border-zinc-800 px-3 py-2 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-purple-400/50 transition-all placeholder:text-slate-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className="bg-neutral-900 text-white text-sm h-10 w-full border border-zinc-800 px-3 py-2 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-purple-400/50 transition-all placeholder:text-slate-500"
              />
            </div>
          </div>

          {/* Subject Field */}
          <div className="flex flex-col">
            <label htmlFor="subject" className="text-sm font-medium text-slate-300 mb-2">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="What's this about?"
              value={form.subject}
              onChange={handleChange}
              className="bg-neutral-900 text-white text-sm h-10 w-full border border-zinc-800 px-3 py-2 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-purple-400/50 transition-all placeholder:text-slate-500"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium text-slate-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell me about your project or question..."
              value={form.message}
              onChange={handleChange}
              className="bg-neutral-900 text-white text-sm min-h-32 w-full border border-zinc-800 px-3 py-2 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-purple-400/50 transition-all resize-y placeholder:text-slate-500"
            ></textarea>
          </div>

          {/* Submit Button
          <button
            type="submit"
            className="w-full h-11 flex items-center justify-center bg-purple-400 text-neutral-900 font-bold text-sm rounded-lg hover:bg-purple-300 active:scale-98 transition-all cursor-pointer"
          >
            Send Message
          </button> */}

           {/* Status messages */}
                    {status === "success" && (
                        <div className="flex items-center gap-2 text-green-400 text-sm bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Message sent! I'll get back to you soon.
                        </div>
                    )}
                    {status === "error" && (
                        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Something went wrong. Please try again.
                        </div>
                    )}
 
                    {/* ✅ disabled + loading state wired */}
                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full h-11 flex items-center justify-center gap-2 bg-purple-400 text-neutral-900 font-bold text-sm rounded-lg hover:bg-purple-300 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === "sending" ? (
                            <>
                                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                </svg>
                                Sending…
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </button>
        </form>
      </div>
    </div>
  );
};