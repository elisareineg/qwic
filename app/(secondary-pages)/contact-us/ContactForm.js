"use client";

export default function ContactForm() {
  return (
    <form
      className="w-full"
      action="https://getform.io/f/ayvkwpkb"
      method="POST"
    >
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex flex-col gap-2 basis-1/2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Jane Smith"
            className="p-2 bg-transparent border-1 border-light-grey rounded-xl text-my-gray focus:outline-qwic-pink"
          />
        </div>
        <div className="flex flex-col gap-2 basis-1/2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="jane@gmail.com"
            className="p-2 bg-transparent border-1 border-light-grey rounded-xl text-my-gray focus:outline-qwic-pink"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          placeholder="Enter your message"
          rows="10"
          className="p-2 w-full bg-transparent border-2 border-my-gray rounded-xl text-my-gray focus:outline-qwic-pink"
        ></textarea>
      </div>
      <button
        type="submit"
        className="text-secondary-text bg-qwic-pink border border-secondary-text px-4 py-2 my-4 rounded-xl hover:bg-dark-pink w-full"
      >
        Send Message
      </button>
    </form>
  );
}
