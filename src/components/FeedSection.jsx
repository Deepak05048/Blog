import React from "react";
import { Flame } from "lucide-react";
import { Clock } from "lucide-react";

import ballimage from "../assets/ballimage.webp";
import { NavLink } from "react-router";
export default function FeedSection() {
  return (
    <div className="w-11/12 md:w-8/12 mx-auto mt-12 space-y-4">
      {/* card */}
      <div className="bg-white shadow-md border border-gray-50 rounded-2xl p-4 group">
        <div className="md:flex gap-4 space-y-4">
          <img
            src={ballimage}
            className="h-40 w-full md:w-40 object-cover rounded-2xl group-hover:scale-105 duration-500"
            alt=" This is ballimage"
          />
          <div>
            <NavLink
              to="/blog/1"
              className="text-xl flex flex-col font-medium mb-3 group-hover:text-pink-500 duration-500 group-hover:border-b-3 border-white group-hover:border-pink-500"
            >
              The Benefits Of Traveling With A Second Language
            </NavLink>
            <span className="text-gray-600">By Jessica Smith 6 Comments</span>
            <p className="text-lg text-gray-700 mt-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by...
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-dotted mt-4 border-gray-300 pt-4">
          <p>
            <span className="text-pink-500">#</span>Lifestyle{" "}
            <span className="text-pink-500">#</span>Trending
          </p>
          <div className="flex gap-1">
            {" "}
            <span className=" text-gray-500">
              {" "}
              <Flame />
            </span>{" "}
            299 Views{" "}
            <span className="text-gray-500">
              <Clock />
            </span>{" "}
            3 Min Read
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md border border-gray-50 rounded-2xl p-4 group">
        <div className="flex gap-4">
          <img
            src={ballimage}
            className="h-40 w-40 rounded-2xl"
            alt=" This is ballimage"
          />
          <div>
            <h1 className="text-xl font-medium mb-3 group-hover:text-pink-500 duration-500 group-hover:border-b-3 border-white group-hover:border-pink-500">
              The Benefits Of Traveling With A Second Language
            </h1>
            <span className="text-gray-600">By Jessica Smith 6 Comments</span>
            <p className="text-lg text-gray-700 mt-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by...
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-dotted mt-4 border-gray-300 pt-4">
          <p>
            <span className="text-pink-500">#</span>Lifestyle{" "}
            <span className="text-pink-500">#</span>Trending
          </p>
          <div className="flex gap-1">
            {" "}
            <span className=" text-gray-500">
              {" "}
              <Flame />
            </span>{" "}
            299 Views{" "}
            <span className="text-gray-500">
              <Clock />
            </span>{" "}
            3 Min Read
          </div>
        </div>
      </div>{" "}
      <div className="bg-white shadow-md border border-gray-50 rounded-2xl p-4 group">
        <div className="flex gap-4">
          <img
            src={ballimage}
            className="h-40 w-40 rounded-2xl"
            alt=" This is ballimage"
          />
          <div>
            <h1 className="text-xl font-medium mb-3 group-hover:text-pink-500 duration-500 group-hover:border-b-3 border-white group-hover:border-pink-500">
              The Benefits Of Traveling With A Second Language
            </h1>
            <span className="text-gray-600">By Jessica Smith 6 Comments</span>
            <p className="text-lg text-gray-700 mt-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by...
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-dotted mt-4 border-gray-300 pt-4">
          <p>
            <span className="text-pink-500">#</span>Lifestyle{" "}
            <span className="text-pink-500">#</span>Trending
          </p>
          <div className="flex gap-1">
            {" "}
            <span className=" text-gray-500">
              {" "}
              <Flame />
            </span>{" "}
            299 Views{" "}
            <span className="text-gray-500">
              <Clock />
            </span>{" "}
            3 Min Read
          </div>
        </div>
      </div>{" "}
      <div className="bg-white shadow-md border border-gray-50 rounded-2xl p-4 group">
        <div className="flex gap-4">
          <img
            src={ballimage}
            className="h-40 w-40 rounded-2xl"
            alt=" This is ballimage"
          />
          <div>
            <h1 className="text-xl font-medium mb-3 group-hover:text-pink-500 duration-500 group-hover:border-b-3 border-white group-hover:border-pink-500">
              The Benefits Of Traveling With A Second Language
            </h1>
            <span className="text-gray-600">By Jessica Smith 6 Comments</span>
            <p className="text-lg text-gray-700 mt-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by...
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-dotted mt-4 border-gray-300 pt-4">
          <p>
            <span className="text-pink-500">#</span>Lifestyle{" "}
            <span className="text-pink-500">#</span>Trending
          </p>
          <div className="flex gap-1">
            {" "}
            <span className=" text-gray-500">
              {" "}
              <Flame />
            </span>{" "}
            299 Views{" "}
            <span className="text-gray-500">
              <Clock />
            </span>{" "}
            3 Min Read
          </div>
        </div>
      </div>{" "}
      <div className="bg-white shadow-md border border-gray-50 rounded-2xl p-4 group">
        <div className="flex gap-4">
          <img
            src={ballimage}
            className="h-40 w-40 rounded-2xl"
            alt=" This is ballimage"
          />
          <div>
            <h1 className="text-xl font-medium mb-3 group-hover:text-pink-500 duration-500 group-hover:border-b-3 border-white group-hover:border-pink-500">
              The Benefits Of Traveling With A Second Language
            </h1>
            <span className="text-gray-600">By Jessica Smith 6 Comments</span>
            <p className="text-lg text-gray-700 mt-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by...
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-dotted mt-4 border-gray-300 pt-4">
          <p>
            <span className="text-pink-500">#</span>Lifestyle{" "}
            <span className="text-pink-500">#</span>Trending
          </p>
          <div className="flex gap-1">
            {" "}
            <span className=" text-gray-500">
              {" "}
              <Flame />
            </span>{" "}
            299 Views{" "}
            <span className="text-gray-500">
              <Clock />
            </span>{" "}
            3 Min Read
          </div>
        </div>
      </div>{" "}
      <div className="bg-white shadow-md border border-gray-50 rounded-2xl p-4 group">
        <div className="flex gap-4">
          <img
            src={ballimage}
            className="h-40 w-40 rounded-2xl"
            alt=" This is ballimage"
          />
          <div>
            <h1 className="text-xl font-medium mb-3 group-hover:text-pink-500 duration-500 group-hover:border-b-3 border-white group-hover:border-pink-500">
              The Benefits Of Traveling With A Second Language
            </h1>
            <span className="text-gray-600">By Jessica Smith 6 Comments</span>
            <p className="text-lg text-gray-700 mt-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by...
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-dotted mt-4 border-gray-300 pt-4">
          <p>
            <span className="text-pink-500">#</span>Lifestyle{" "}
            <span className="text-pink-500">#</span>Trending
          </p>
          <div className="flex gap-1">
            {" "}
            <span className=" text-gray-500">
              {" "}
              <Flame />
            </span>{" "}
            299 Views{" "}
            <span className="text-gray-500">
              <Clock />
            </span>{" "}
            3 Min Read
          </div>
        </div>
      </div>
    </div>
  );
}
