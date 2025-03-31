import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaTelegram } from "react-icons/fa";
import { TbSquareLetterMFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <div className="flex flex-items-center justify-between w-10/12 mx-auto mt-24 border-b space-y-12">
        <div>
          <strong>Syron</strong>
          <p>
            This is a great space to write text about your <br /> company and
            your services. You can use this <br /> space to go into a little
            more details about <br />
            your company.{" "}
          </p>
        </div>
        <div>
          <strong className="flex items-center gap-2">
            <GoDotFill className="text-pink-500 rounded-xl" />
            Links
          </strong>
          <p>About Us</p>
          <p>Our Story</p>
          <p>Projects</p>
        </div>
        <div>
          <strong className="flex items-center gap-2">
            <GoDotFill className="text-pink-500 rounded-xl" />
            Categories
          </strong>

          <p>
            <span className="text-purple-500">#</span>Entertaintment{" "}
            <span className="text-orange-500">#</span> Gadget{" "}
            <span className="text-blue-500">#</span>Ideas
          </p>
          <p>
            <span className="text-green-500">#</span>Inspiration{" "}
            <span className="text-yellow-400">#</span>Lifestyle{" "}
            <span className="text-pink-500">#</span>Music
          </p>
          <p>
            <span className="text-purple-500">#</span>Travel{" "}
            <span className="text-pink-500">#</span>Trending
          </p>
        </div>
        <div className="space-y-2">
          <strong className="flex items-center gap-2">
            <GoDotFill className="text-pink-500 rounded-xl" />
            Newsletter
          </strong>
          <p>subscribe newsletter to get latest articles</p>
          <div className="flex bg-gray-200 py-1 px-2 rounded-full pl-10 mt-4 ">
            <input
              type="email"
              placeholder="Email address*"
              className="outline-none"
            />
            <button className="flex place-items-center gap-2 bg-pink-500 rounded-full p-4 hover:bg-black  text-white duration-500 cursor-pointer">
              <FaTelegram />
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-items-center justify-between mx-auto w-10/12 mt-10 mb-10">
        <p>
          This website may collect data about you, use cookies, embed additional
          third-party tracking, and <br /> monitor your interaction with that
          embedded content <br />
          Privacy Policy | Terms and Conditions
        </p>
        <div>
          <p>Follow Us On Socials</p>
          <div className="flex justify-items-center px-4 gap-3 text-xl opacity-70 ">
            <TbSquareLetterMFilled />

            <FaXTwitter />

            <FiInstagram />

            <FaTelegramPlane />
          </div>
        </div>
      </div>
    </div>
  );
}
