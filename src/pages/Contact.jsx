import React from "react";
import { assets } from "../../public/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 my-10 justify-center mb-28 text-sm">
        <div className="md:max-w-[360px]">
          <img src={assets.contact_image} alt="" />
        </div>

        <div className="flex flex-col justify-center items-start gap-6">
          <h2 className="font-semibold text-lg text-gray-600">OUR OFFICE</h2>
          <p className="text-gray-500">
            00000 Willms Station <br /> Suite 000, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (000) 000-0000 <br /> Email: prescripto@gmail.com
          </p>
          <h2 className="font-semibold text-lg text-gray-600">
            CAREERS AT PRESCRIPTO
          </h2>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
