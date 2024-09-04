import React from 'react';
import Section from '../assets/section.png'
export default function Lander() {
  return (
    <div>
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12"><br/><br/>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-900 mb-4 w-auto max-w-screen-md m-auto">
            Effortlessly Create High-Quality Articles with Our AI Article Generator
          </h1>
          <br/>
          <p className="text-xl text-gray-600 mb-8 max-w-screen-lg m-auto">
            AI has the potential to revolutionize the way we live and work, from improving healthcare and
            transportation to enhancing the way.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors">
              Get Started
            </button>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-full hover:bg-purple-100 transition-colors">
              Explore
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 w-24 h-24 bg-purple-200 rounded-full opacity-50 z-0" />
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 z-0" />
          <img
            src={Section}
            alt="AI Article Generator Interface"
            width={1200}
            height={675}
            className="rounded-lg shadow-2xl z-10 relative m-auto"
          />
        </div>
      </main>
    </div>
  );
}
