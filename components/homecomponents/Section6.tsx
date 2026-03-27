"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Title from "../Title";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMail } from "react-icons/io5";
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
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!phoneRegex.test(data.phone.replace(/\s/g, ""))) {
    errors.phone = "Enter a valid 10-digit phone number.";
  }

  if (!data.message.trim()) errors.message = "Message is required.";

  return errors;
}

// ─── Component ─────────────────────────────────────────────────────────
function Section6() {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrorsType>({});
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  // ✅ Toast State
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({
    show: false,
    message: "",
    type: "success",
  });

  // ── Input class ──────────────────────────────────────────────────────
  const inputClass = (field: keyof FormDataType) =>
    [
      "border p-3 rounded-md w-full",
      "text-black dark:text-white",
      "bg-white dark:bg-transparent",
      "placeholder-gray-500 dark:placeholder-gray-400",
      "focus:outline-none focus:ring-2 transition",
      errors[field]
        ? "border-red-500 focus:ring-red-400"
        : "border-gray-300 dark:border-white/40 focus:ring-pink-400 dark:focus:ring-yellow-400",
    ].join(" ");

  // ── Handle Change ────────────────────────────────────────────────────
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormDataType]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // ── Handle Submit ────────────────────────────────────────────────────
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      setToast({
        show: true,
        message: "Please fill all required fields correctly",
        type: "error",
      });

      setTimeout(() => setToast((t) => ({ ...t, show: false })), 5000);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      setToast({
        show: true,
        message: result.message,
        type: res.ok ? "success" : "error",
      });

      setTimeout(() => setToast((t) => ({ ...t, show: false })), 5000);

      if (res.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          message: "",
        });
        setErrors({});
      }
    } catch (err) {
      setToast({
        show: true,
        message: "Something went wrong",
        type: "error",
      });

      setTimeout(() => setToast((t) => ({ ...t, show: false })), 5000);
    }

    setStatus("idle");
  };

  return (
    <section className="layout-wrapper mx-auto py-6 px-4 md:py-10">
      <div className="container flex flex-col md:flex-row gap-10">

        {/* LEFT */}
        <div className="w-full md:w-1/2 space-y-6">
          <Title smallTitle="Contact Us" mainTitle="Get in touch" />

          <a href="tel:9629140160" className="flex items-center gap-3">
            <PiPhoneCallFill /> 9629140160
          </a>

          <a href="https://wa.me/919629140160" target="_blank">
            <FaWhatsapp /> WhatsApp
          </a>

          <a href="mailto:amsanthoshkumar2@gmail.com">
            <IoMail /> Email
          </a>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input name="name" placeholder="Name *" value={formData.name} onChange={handleChange} className={inputClass("name")} />
            <input name="email" placeholder="Email *" value={formData.email} onChange={handleChange} className={inputClass("email")} />
            <input name="phone" placeholder="Phone *" value={formData.phone} onChange={handleChange} className={inputClass("phone")} />
            <input name="city" placeholder="City" value={formData.city} onChange={handleChange} className={inputClass("city")} />
            <textarea name="message" placeholder="Message *" value={formData.message} onChange={handleChange} className={inputClass("message")} />

            <button
              type="submit"
              disabled={status === "loading"}
              className="py-3 px-4 rounded-md text-white font-bold
                bg-[linear-gradient(329deg,#FF91FA,#FA6490,#F7D86A)]
                hover:opacity-90 transition duration-300
                shadow-[0_0_20px_rgba(250,100,144,0.6)]
                disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Get Free Quote"}
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Toast Popup */}
      {toast.show && (
        <div className="fixed top-5 right-5 z-50 animate-slideIn">
          <div
            className={`px-4 py-3 rounded-md shadow-lg text-white text-sm font-medium flex items-center gap-2
            ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}`}
          >
            <span>{toast.type === "success" ? "✅" : "❌"}</span>
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default Section6;