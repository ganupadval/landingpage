import React from "react";

export default function Tools() {
  return (
    <div>
      <div className="text-center mb-12">
        <br />
        <br />
        <h1 className="text-4xl md:text-5xl lg:text-6xl  text-black mb-4 w-auto max-w-screen-md m-auto">
          Most Popular Tools
        </h1>
        <br />
        <p className="text-xl text-gray-600 max-w-screen-lg m-auto">
          These are the most popular tools and a good place to start.
        </p>
        <p className="text-xl text-gray-600 mb-8 max-w-screen-lg m-auto">
          Give them a try!
        </p>
        {/* <div className="flex flex-wrap">
          <div className="m-auto my-14">
            <a
              href="#"
              className="block max-w-sm min-w-min p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
          </div>


         
        </div> */}
        <div className="flex">
          <div className="grid p-4 m-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Article Generator", icon: "📄" },
              { title: "Blog Post Writer", icon: "📝" },
              { title: "Content Rewriter", icon: "🔄" },
              { title: "Image Generator", icon: "🖼️" },
              { title: "Product Descriptions", icon: "🏷️" },
              { title: "Social Media Post", icon: "📱" },
            ].map((tool, index) => (
              <a
                key={index}
                href="#"
                className="block  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  dark:border-gray-700 dark:hover:bg-blue-100"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  {tool.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Turn a title and an outline into a fully SEO-optimized and
                  long article with this AI editor.
                </p>
              </a>
            ))}
            <br /> <br /> <br />
          </div>
        </div>
      </div>
    </div>
  );
}
