"use client";

import { useState, ChangeEvent, FormEvent, useEffect, useRef } from "react";
import Image from "next/image";
import Title from "../Title";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMail, IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

// ─── Types ─────────────────────────────────────────────────────────────
type FormDataType = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
};
type FormErrorsType = Partial<Record<keyof FormDataType, string>>;

// ─── Validation ────────────────────────────────────────────────────────
function validate(data: FormDataType): FormErrorsType {
  const errors: FormErrorsType = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  if (!data.name.trim()) errors.name = "Name is required.";

  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = "Enter a valid email address (e.g. you@gmail.com).";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!phoneRegex.test(data.phone.replace(/\s/g, ""))) {
    errors.phone = "Enter a valid 10-digit mobile number (e.g. 9876543210).";
  }

  if (!data.message.trim()) errors.message = "Message is required.";

  return errors;
}

// ─── Thank You Modal ────────────────────────────────────────────────────
function ThankYouModal({ name, onClose }: { name: string; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Escape key closes
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Click backdrop to close
  const onBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <>
      <style>{`
        @keyframes backdropIn { from { opacity:0 } to { opacity:1 } }
        @keyframes modalUp {
          from { opacity:0; transform:translateY(48px) scale(0.94); }
          to   { opacity:1; transform:translateY(0)    scale(1);    }
        }
        @keyframes checkPop {
          0%   { transform:scale(0) rotate(-20deg); opacity:0; }
          70%  { transform:scale(1.2) rotate(5deg); opacity:1; }
          100% { transform:scale(1)  rotate(0deg); opacity:1; }
        }
        .modal-backdrop { animation: backdropIn 0.25s ease both; }
        .modal-card     { animation: modalUp   0.4s cubic-bezier(0.34,1.56,0.64,1) both; }
        .check-pop      { animation: checkPop  0.5s ease 0.2s both; }
      `}</style>

      {/* Backdrop */}
      <div
        className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center px-4
          bg-black/50 backdrop-blur-sm"
        onClick={onBackdrop}
      >
        {/* Card */}
        <div
          ref={modalRef}
          className="modal-card relative bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden"
        >
          {/* ── X Close ── */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center
              rounded-full bg-white/70 hover:bg-white text-gray-500 hover:text-gray-900
              shadow transition-all duration-200 hover:scale-110"
          >
            <IoClose className="text-lg" />
          </button>

          {/* ── Gradient Header ── */}
          <div
            className="px-6 py-4 flex items-center gap-3"
            style={{ background: "linear-gradient(329deg,#FF91FA,#FA6490,#F7D86A)" }}
          >
            <Image
              src="/images/minilogo.png"
              alt="Logo"
              width={38}
              height={38}
              className="rounded-lg object-contain   p-0.5 bg-white/80 "
            />
            <span className="text-white font-extrabold text-lg tracking-tight drop-shadow">
              SiteDesign
            </span>
          </div>

          {/* ── Body ── */}
          <div className="px-8 py-7 text-center flex flex-col items-center gap-4">

            {/* Animated check circle */}
            <div
              className="check-pop w-[72px] h-[72px] rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg,#FF91FA22,#F7D86A44)",
                border: "2.5px solid #FA6490",
              }}
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="18" fill="url(#cg)" />
                <path d="M10 18.5L15 24L26 12" stroke="#fff" strokeWidth="2.8"
                  strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="cg" x1="0" y1="0" x2="36" y2="36">
                    <stop stopColor="#FF91FA" />
                    <stop offset="0.5" stopColor="#FA6490" />
                    <stop offset="1" stopColor="#F7D86A" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-[1.6rem] font-extrabold text-gray-900 leading-tight">
                Thank you, {name}! 
              </h2>
              <p className="text-[11px] uppercase tracking-widest text-gray-400 mt-1 font-semibold">
                Enquiry Received
              </p>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              We've received your message. Our team will get back to you{" "}
              <span className="font-bold text-gray-800">within 24 hours</span>.
            </p>

            <p className="text-gray-500 text-sm max-w-xs">
              Need a faster reply? Reach us directly on WhatsApp!
            </p>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/917845002502"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm
                text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-green-200"
              style={{ background: "#25D366" }}
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp · 7845002502
            </a>

            {/* Divider line */}
            <div
              className="h-px w-20 rounded-full"
              style={{ background: "linear-gradient(90deg,#FF91FA,#FA6490,#F7D86A)" }}
            />

            <button
              onClick={onClose}
              className="text-xs text-gray-400 hover:text-gray-700 transition underline underline-offset-2"
            >
              Close and go back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────
export default function Section6() {
  const [formData, setFormData] = useState<FormDataType>({
    name: "", email: "", phone: "", city: "", message: "",
  });
  const [errors, setErrors]     = useState<FormErrorsType>({});
  const [status, setStatus]     = useState<"idle" | "loading">("idle");
  const [showModal, setShowModal] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [toast, setToast]       = useState({ show: false, message: "", type: "success" as "success" | "error" });

  const fireToast = (message: string, type: "success" | "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 5000);
  };

  const inputCls = (f: keyof FormDataType) =>
    ["border p-3 rounded-md w-full text-sm text-black dark:text-white",
     "bg-white dark:bg-transparent placeholder-gray-500 dark:placeholder-gray-400",
     "focus:outline-none focus:ring-2 transition",
     errors[f]
       ? "border-red-500 focus:ring-red-400 bg-red-50"
       : "border-gray-300 dark:border-white/40 focus:ring-pink-400"].join(" ");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormDataType])
      setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate(formData);
    if (Object.keys(errs).length) {
      setErrors(errs);
      fireToast("Please fix the highlighted errors below.", "error");
      return;
    }
    setStatus("loading");
    try {
      const res    = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (res.ok) {
        setSubmittedName(formData.name.split(" ")[0]);
        setShowModal(true);
        setFormData({ name: "", email: "", phone: "", city: "", message: "" });
        setErrors({});
      } else {
        fireToast(result.message || "Something went wrong.", "error");
      }
    } catch {
      fireToast("Something went wrong. Please try again.", "error");
    }
    setStatus("idle");
  };

  return (
    <>
      {showModal && (
        <ThankYouModal name={submittedName} onClose={() => setShowModal(false)} />
      )}

      <section className="layout-wrapper mx-auto py-6 px-4 md:py-10">
        <div className="container flex flex-col md:flex-row gap-10">

          {/* LEFT */}
          <div className="w-full md:w-1/2 space-y-6 font-sans">
            <Title smallTitle="Contact Us" mainTitle="Get in touch" />

            <a href="tel:9629140160"
              className="group flex items-center gap-4 p-4 rounded-lg border-l-4 border-blue-500
                bg-white/70 backdrop-blur-md hover:bg-blue-50 transition-all duration-500">
              <div className="p-2 rounded-full bg-blue-100 group-hover:scale-110 transition">
                <PiPhoneCallFill className="text-blue-600 text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Call us</p>
                <p className="text-gray-800 font-medium">9629140160</p>
              </div>
            </a>

            <a href="https://wa.me/917845002502" target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-lg border-l-4 border-green-500
                bg-white/70 backdrop-blur-md hover:bg-green-50 transition-all duration-500">
              <div className="p-2 rounded-full bg-green-100 group-hover:scale-110 transition">
                <FaWhatsapp className="text-green-600 text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Chat with us</p>
                <p className="text-gray-800 font-medium">WhatsApp · 7845002502</p>
              </div>
            </a>

            <a href="mailto:a.m.santhoshkumarofficial@gmail.com"
              className="group flex items-center gap-4 p-4 rounded-lg border-l-4 border-purple-500
                bg-white/70 backdrop-blur-md hover:bg-purple-50 transition-all duration-500">
              <div className="p-2 rounded-full bg-purple-100 group-hover:scale-110 transition">
                <IoMail className="text-purple-600 text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Mail us</p>
                <p className="text-gray-800 font-medium">a.m.santhoshkumarofficial@gmail.com</p>
              </div>
            </a>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>

              <div>
                <input name="name" placeholder="Name *" value={formData.name} onChange={handleChange} className={inputCls("name")} />
                {errors.name && <p className="text-red-500 text-xs mt-1">⚠️ {errors.name}</p>}
              </div>

              <div>
                <input name="email" type="email" placeholder="Email * (e.g. you@gmail.com)" value={formData.email} onChange={handleChange} className={inputCls("email")} />
                {errors.email && <p className="text-red-500 text-xs mt-1">⚠️ {errors.email}</p>}
              </div>

              <div>
                <input name="phone" type="tel" placeholder="Phone * (10-digit number)" value={formData.phone} onChange={handleChange} maxLength={10} className={inputCls("phone")} />
                {errors.phone && <p className="text-red-500 text-xs mt-1">⚠️ {errors.phone}</p>}
              </div>

              <div>
                <input name="city" placeholder="City" value={formData.city} onChange={handleChange} className={inputCls("city")} />
              </div>

              <div>
                <textarea name="message" placeholder="Message *" value={formData.message} onChange={handleChange} rows={4} className={inputCls("message")} />
                {errors.message && <p className="text-red-500 text-xs mt-1">⚠️ {errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="py-3 px-4 rounded-md text-white font-bold
                  hover:opacity-90 transition duration-300
                  shadow-[0_0_20px_rgba(250,100,144,0.6)]
                  disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: "linear-gradient(329deg,#FF91FA,#FA6490,#F7D86A)" }}
              >
                {status === "loading" ? "Sending..." : "Get Free Quote"}
              </button>
            </form>
          </div>
        </div>

        {/* Toast */}
        {toast.show && (
          <div className="fixed top-5 right-5 z-50">
            <div className={`px-4 py-3 rounded-md shadow-lg text-white text-sm font-medium flex items-center gap-2
              ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}`}>
              <span>{toast.type === "success" ? "✅" : "❌"}</span>
              <span>{toast.message}</span>
            </div>
          </div>
        )}
      </section>
    </>
  );
}