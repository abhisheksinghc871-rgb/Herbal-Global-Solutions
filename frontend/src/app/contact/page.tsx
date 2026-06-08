"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  message: "",
});
const [successMessage, setSuccessMessage] = useState("");

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:5000/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    console.log(data);

    setSuccessMessage(
  "Inquiry submitted successfully. Our team will contact you soon."
);

window.scrollTo({
  top: 0,
  behavior: "smooth",
});

    setFormData({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    message: "",
  });

  } catch (error) {
    console.error(error);

    alert("Something went wrong");
  }
};

  return (
    <main>
      <section className="bg-green-50 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-6xl font-bold text-green-800">
            Contact Us
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-700">
            Get in touch with our team for product inquiries,
            quotations and business partnerships.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <h2 className="mb-6 text-4xl font-bold text-green-800">
                Let's Talk
              </h2>

              <p className="mb-8 text-lg text-gray-600">
                We are ready to help you source premium herbal ingredients
                for your business.
              </p>

              <div className="space-y-5 text-lg text-gray-800">

                <p className="flex items-center gap-3">
                  <span>📧</span>
                  <span>techopssimplified8@gmail.com</span>
                </p>

                <p className="flex items-center gap-3">
                  <span>📞</span>
                  <span>+91 81034 21613</span>
                </p>

                <p className="flex items-center gap-3">
                  <span>📍</span>
                  <span>India</span>
                </p>

              </div>
            </div>

            <form
  onSubmit={handleSubmit}
  className="space-y-6 rounded-2xl border p-8 shadow-sm"
>


            {successMessage && (
  <div className="mb-4 rounded-lg border border-green-300 bg-green-100 p-3 text-sm text-green-800">
    {successMessage}
  </div>
)}

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-300 bg-white p-4 text-black focus:border-green-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 bg-white p-4 text-black focus:border-green-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Company Name *
                </label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Enter company name"
                  className="w-full rounded-lg border border-gray-300 bg-white p-4 text-black focus:border-green-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Phone Number *
                </label>

                <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  required
  placeholder="Enter phone number"
  className="w-full rounded-lg border border-gray-300 bg-white p-4 text-black focus:border-green-600 focus:outline-none"
/>
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Country *
                </label>

                <select
  name="country"
  value={formData.country}
  onChange={handleChange}
  required
  className="w-full rounded-lg border border-gray-300 bg-white p-4 text-black focus:border-green-600 focus:outline-none"
>
  <option value="">Select Country</option>
  <option value="India">India</option>
  <option value="United States">United States</option>
  <option value="United Kingdom">United Kingdom</option>
  <option value="Germany">Germany</option>
  <option value="France">France</option>
  <option value="Canada">Canada</option>
  <option value="Australia">Australia</option>
  <option value="UAE">UAE</option>
  <option value="Japan">Japan</option>
  <option value="Singapore">Singapore</option>
</select>
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Message *
                </label>

                <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  required
  rows={6}
  placeholder="Tell us about your requirements"
  className="w-full rounded-lg border border-gray-300 bg-white p-4 text-black focus:border-green-600 focus:outline-none"
/>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
              >
                Send Inquiry
              </button>

            </form>

          </div>
        </div>
      </section>
    </main>
  );
}