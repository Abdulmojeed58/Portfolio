import React from "react";

import design from "../images/Group 26.png";


const Contact = () => {
  return (
    <section className="bg-[#242424] mt-14 lg:mt-28 px-4 py-10 lg:grid grid-cols-2 justify-between items-start gap-[10rem]" id="contact">
      <div className="absolute left-0 bottom-[2rem] w-[15rem] lg:w-[22rem]">
        <img src={design} alt="design" />
      </div>
      <div className="text-center lg:text-left">
        <h2 className="text-white font-bold text-5xl">Contact</h2>
        <p className="text-[#D9D9D9] mt-7 mb-14 font-bold lg:text-xl">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <form className="text-[#D9D9D9]">
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            className="input pb-5"
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            placeholder="email"
            id="email"
            className="input pb-5"
          />
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea
            type="text"
            placeholder="message"
            id="name"
            className="pb-16 input"
          />
        </div>
        <div className="flex justify-end">
          <button type="button" className="btn mt-3">
            send message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
