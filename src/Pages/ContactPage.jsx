import React from "react";

export default function ContactPage() {
  return (
    <div className="grid grid-cols-2 mx-auto mt-4">
      <div className="place-items-start px-4">
        <div className="flex items-center space-x-8 mb-4 border-1 border-gray-300 shadow-2xl rounded-full ">
          <button className="bg-purple-400 px-4 py-3 font-semibold border-1 rounded-full">
            Success
          </button>
          <input
            type="text"
            placeholder="Our Success in Numbers"
            className="font-bold opacity-70 outline-none"
          />
        </div>

        <strong className="text-3xl opacity-70">
          Have a project in mind? <br />
          Let's talk!
        </strong>
        <p className="mt-4 opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Ut
          elit tellus, luctus nec ullamcorper mattis, <br /> pulvinar dapibus
          leo.
        </p>
      </div>
      <label className="space-x-4">
       
          <input
            type="text"
            placeholder="first Name"
            className="border border-gray-400 opacity-60 px-8 py-4 shadow-2xl outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-400 opacity-60 px-8 py-4 shadow-2xl outline-none"
          />
          <input type="text"
           placeholder="Email"
           className="border border-gray-400 opacity-60 px-41 py-4 shadow-2xl outline-none mt-4" />

          <input type="text"
           placeholder="Massage"
           className="border border-gray-400 opacity-60 px-41 py-24 shadow-2xl outline-none mt-4" />

           <button className="bg-orange-500">
            Submit Form
           </button>
       
       
      </label>
    </div>
  );
}
