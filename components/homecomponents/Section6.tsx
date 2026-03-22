"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Title from "../Title";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMail } from "react-icons/io5";

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
};

function Section6() {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      alert(result.message);

      if (res.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          message: "",
        });
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later!");
    }
  };

  return (
    <section className="layout-wrapper mx-auto py-6 px-4 md:py-10">
      <div className="container flex flex-col md:flex-row items-start justify-between gap-10">

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 space-y-6">
      
                        <Title     smallTitle="Contact Us"
  mainTitle={
    <>
    Get in  {" "}
      <span className="text-black dark:bg-gradient-to-r dark:from-pink-500 dark:to-yellow-400 dark:bg-clip-text dark:text-transparent ">
   touch
      </span>
    </>
  }
/>  

          {/* NEW DESCRIPTION ✅ */}
          <p className="text-black dark:text-white text-sm max-w-sm">
            Have a project in mind? Let’s build something amazing together 
          </p>

          {/* Phone */}
          <a
            href="tel:9629140160"
            className="flex items-center gap-4 group py-2 hover:translate-x-1 transition duration-300"
          >
            <PiPhoneCallFill className="w-9 h-9 text-blue-500 group-hover:scale-110 transition" />
            <div>
              <h4 className="font-semibold font-syne">Phone Number</h4>
              <h5 className="text-black dark:text-white group-hover:text-gray-300 transition">
                9629140160
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
              <h5 className="text-black dark:text-white group-hover:text-gray-300 transition">
                amsanthoshkumar2@gmail.com
              </h5>
            </div>
          </a>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 space-y-5">
          <h2 className="text-xl font-semibold">
            Start your project today 
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">

            {/* INPUT STYLE FIXED ✅ */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 dark:border-white p-3 rounded-md w-full 
              text-black dark:text-white 
              bg-white dark:bg-transparent
              placeholder-gray-500 dark:placeholder-gray-400
              focus:outline-none focus:ring-2 
              focus:ring-pink-400 dark:focus:ring-yellow-400 transition"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 dark:border-white p-3 rounded-md w-full 
              text-black dark:text-white 
              bg-white dark:bg-transparent
              focus:outline-none focus:ring-2 
              focus:ring-pink-400 dark:focus:ring-yellow-400 transition"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 dark:border-white p-3 rounded-md w-full 
              text-black dark:text-white 
              bg-white dark:bg-transparent
              focus:outline-none focus:ring-2 
              focus:ring-pink-400 dark:focus:ring-yellow-400 transition"
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="border border-gray-300 dark:border-white p-3 rounded-md w-full 
              text-black dark:text-white 
              bg-white dark:bg-transparent
              focus:outline-none focus:ring-2 
              focus:ring-pink-400 dark:focus:ring-yellow-400 transition"
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 dark:border-white p-3 rounded-md w-full 
              text-black dark:text-white 
              bg-white dark:bg-transparent
              focus:outline-none focus:ring-2 
              focus:ring-pink-400 dark:focus:ring-yellow-400 transition"
              rows={4}
              required
            ></textarea>

            {/* BUTTON FIXED ✅ */}
            <button
              type="submit"
              className="py-3 px-4 rounded-md text-white 
              bg-primary font-bold 
              dark:bg-[linear-gradient(329deg,#FF91FA,#FA6490,#F7D86A)]
              hover:bg-white hover:text-black 
              dark:hover:bg-white dark:hover:text-white
              transition duration-300
              dark:shadow-[0_0_20px_rgba(250,100,144,0.6)]"
            >
              Get Free Quote 
            </button>

            {/* TRUST TEXT ✅ */}
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