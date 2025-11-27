import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    <div className="mt-20 px-4 place-items-center">
      <h1 className="text-center text-2xl font-bold font-montserrat whitespace-nowrap">
        Subscribe now & get 15% off
      </h1>
      <br />
      <p className="text-center text-base font-inter text-gray-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (regex.test(email)) {
            setEmail("");
          }
        }}
        className="w-full flex place-content-center"
      >
        <input
          className="w-[60%] h-[50px] border border-gray-300 rounded px-4"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />
        <button className="px-4 bg-black text-white font-inter font-semibold">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
