"use client";
import { useState } from "react";

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handle submit clicked!");
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-10 flex flex-col gap-6 max-w-lg mx-auto"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium text-neutral-600 tracking-tight"
        >
          Full Name
        </label>
        <input
          id="name"
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Tyle Durden"
          className="shadow-input px-2 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-neutral-600 tracking-tight"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="tyle.hurden@mail.com"
          className="shadow-input px-2 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-neutral-600 tracking-tight"
        >
          Message
        </label>
        <textarea
          rows={5}
          id="message"
          onChange={handleChange}
          name="message"
          placeholder="Tyle Durden"
          className="resize-none shadow-input px-2 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    </form>
  );
};
