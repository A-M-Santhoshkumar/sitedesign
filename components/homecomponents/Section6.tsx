"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Title from "../Title";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMail } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

// ─── Types ────────────────────────────────────────────────────────────────────
type FormDataType = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
};

type FormErrorsType = Partial<Record<keyof FormDataType, string>>;

// ─── Validation (matches server rules exactly) ────────────────────────────────
function validate(data: FormDataType): FormErrorsType {
  const errors: FormErrorsType = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  if (!data.name.trim())
    errors.name = "Name is required.";

  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }

  // ✅ Phone REQUIRED
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!phoneRegex.test(data.phone.replace(/\s/g, ""))) {
    errors.phone = "Enter a valid 10-digit phone number.";
  }

  if (!data.message.trim())
    errors.message = "Message is required.";

  return errors;
}

// ─── Component ────────────────────────────────────────────────────────────────
function Section6() {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const [errors, setErrors]               = useState<FormErrorsType>({});
  const [status, setStatus]               = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  // ── Input class helper ─────────────────────────────────────────────────────
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

  // ── onChange ───────────────────────────────────────────────────────────────
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // clear per-field error as user types
    if (errors[name as keyof FormDataType]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    // clear top banner when user starts fixing things
    if (serverMessage) {
      setServerMessage("");
      setStatus("idle");
    }
  };

  // ── onSubmit ───────────────────────────────────────────────────────────────
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
      setServerMessage("Please fill in all required fields correctly.");
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const contentType = res.headers.get("content-type") ?? "";
      if (!contentType.includes("application/json")) {
        throw new Error(
          "Route not found."
        );
      }

      const result: { message: string } = await res.json();
      setServerMessage(result.message);
      setStatus(res.ok ? "success" : "error");

      if (res.ok) {
        setFormData({ name: "", email: "", phone: "", city: "", message: "" });
        setErrors({});
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("error");
      setServerMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section className="layout-wrapper mx-auto py-6 px-4 md:py-10">
      <div className="container flex flex-col md:flex-row items-start justify-between gap-10">

        {/* ── LEFT ──────────────────────────────────────────────────────── */}
        <div className="w-full md:w-1/2 space-y-6">
          <Title
            smallTitle="Contact Us"
            mainTitle={
              <>
                Get in{" "}
                <span className="text-black dark:bg-gradient-to-r dark:from-pink-500 dark:to-yellow-400 dark:bg-clip-text dark:text-transparent">
                  touch
                </span>
              </>
            }
          />

          <p className="text-black dark:text-white text-sm max-w-sm">
            Have a project in mind? Let's build something amazing together.
          </p>

          {/* Phone */}
          <a
            href="tel:9629140160"
            className="flex items-center gap-4 group py-2 hover:translate-x-1 transition duration-300"
          >
            <PiPhoneCallFill className="w-9 h-9 text-blue-500 group-hover:scale-110 transition" />
            <div>
              <h4 className="font-semibold font-syne">Phone Number</h4>
              <h5 className="text-black dark:text-white group-hover:text-gray-400 transition">
                9629140160
              </h5>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919629140160"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group py-2 hover:translate-x-1 transition duration-300"
          >
            <FaWhatsapp className="w-9 h-9 text-green-500 group-hover:scale-110 transition" />
            <div>
              <h4 className="font-semibold font-syne">WhatsApp</h4>
              <h5 className="text-black dark:text-white group-hover:text-gray-400 transition">
                Chat with me
              </h5>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:amsanthoshkumar2@gmail.com"
            className="flex items-center gap-4 group py-2 hover:translate-x-1 transition duration-300"
          >
            <IoMail className="w-9 h-9 text-yellow-400 group-hover:scale-110 transition" />
            <div>
              <h4 className="font-semibold font-syne">Email</h4>
              <h5 className="text-black dark:text-white group-hover:text-gray-400 transition">
                amsanthoshkumar2@gmail.com
              </h5>
            </div>
          </a>
        </div>

        {/* ── RIGHT FORM ────────────────────────────────────────────────── */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-xl font-semibold">Start your project today</h2>

          {/* ── Status banner (above form) ── */}
          {serverMessage && (
            <div
              className={`flex items-start gap-3 rounded-lg border px-4 py-3 text-sm font-medium ${
                status === "success"
                  ? "border-green-400 bg-green-50 text-green-700 dark:bg-green-900/20 dark:border-green-600 dark:text-green-400"
                  : "border-red-400 bg-red-50 text-red-600 dark:bg-red-900/20 dark:border-red-600 dark:text-red-400"
              }`}
            >
              <span className="shrink-0 text-base">{status === "success" ? "✅" : "❌"}</span>
              <span>{serverMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full" noValidate>

            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                className={inputClass("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <span>⚠</span>{errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                className={inputClass("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <span>⚠</span>{errors.email}
                </p>
              )}
            </div>

            {/* Phone — REQUIRED */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number * (10 digits)"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass("phone")}
                maxLength={10}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <span>⚠</span>{errors.phone}
                </p>
              )}
            </div>

            {/* City — optional */}
            <div>
              <input
                type="text"
                name="city"
                placeholder="City (optional)"
                value={formData.city}
                onChange={handleChange}
                className={inputClass("city")}
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Message *"
                value={formData.message}
                onChange={handleChange}
                className={inputClass("message")}
                rows={4}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <span>⚠</span>{errors.message}
                </p>
              )}
            </div>

            <p className="text-xs text-gray-400">* Required fields</p>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="py-3 px-4 rounded-md text-white font-bold
                bg-primary
                dark:bg-[linear-gradient(329deg,#FF91FA,#FA6490,#F7D86A)]
                hover:opacity-90 transition duration-300
                dark:shadow-[0_0_20px_rgba(250,100,144,0.6)]
                disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Get Free Quote"}
            </button>

            <p className="text-xs text-gray-400 text-center">
              We usually respond within 24 hours. Your info is safe with us.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Section6;