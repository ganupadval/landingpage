import React from "react";

export default function InfoSection() {
  return (
    <div className="m-auto">
      <div className=" max-w-md p-6 bg-white">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Enter your post’s title & keyword
        </h2>
        <p className="text-gray-600 mb-6">
          Simply provide our AI writer with 1-2 sentences on what to write, and
          it'll understand and start writing for you.
        </p>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <svg
              className="w-6 h-6 text-purple-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Include any SEO keywords you want to rank for</span>
          </li>
          <li className="flex items-start">
            <svg
              className="w-6 h-6 text-purple-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Customize your copy with tone and perspective options</span>
          </li>
          <li className="flex items-start">
            <svg
              className="w-6 h-6 text-purple-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Choose from 25+ languages</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
