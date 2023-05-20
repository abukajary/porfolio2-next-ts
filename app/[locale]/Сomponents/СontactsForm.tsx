"use client";
import React from 'react'
const ContactFrom = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: { target: { id: any; value: any } }) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    alert(`Форма не работает: ${form.name} ${form.email} ${form.message}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="grid gap-x-[20px]">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            placeholder="Your Name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="text-sm h-12 outline-none border-0 resize-none overflow-auto bg-gray-100 rounded-md px-3 py-1 mt-1"
          />
        </div>
        <div className="grid gap-x-[20px]">
          <label htmlFor="password">Email</label>
          <input
            id="email"
            placeholder="Your Email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="text-sm h-12 outline-none border-0 resize-none overflow-auto bg-gray-100 rounded-md px-3 py-1 mt-1"
          />
        </div>
        <div className="grid gap-x-[20px]">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            onChange={handleChange}
            className="text-sm h-12 outline-none border-0 resize-none overflow-auto bg-gray-100 rounded-md px-3 py-1 mt-1"
          ></textarea>
        </div>
      </div>
      <button
        className="focus:outline-none border-0 px-4 py-2 w-[120px] h-12 bg-purple-600 text-white rounded-md mt-3 cursor-pointer"
        type="submit"
      >
        Отправить
      </button>
    </form>
  );
};

export default ContactFrom