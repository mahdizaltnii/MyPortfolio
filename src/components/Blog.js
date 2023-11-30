import React, { useState, useEffect } from "react";

const Blog = ({darkMode}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=coderamrin")
      .then((res) => res.json())
      .then((data) => setBlogs(data.slice(0, 2)))
      .catch((error) => console.log(error.message));
  });

  return (
    <div className={darkMode ? "dark" : ""}> 
    <section className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-5 py-32 font-mono" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2">
            Blogs
          </h2>

          <p className="pb-5">Some of my best blogs.</p>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {blogs.map((item) => {
          console.log(item);

          return (
            <div>
              <img src={item.cover_image} alt={item.title} />
              <h3 className="py-5 text-2xl">{item.title}</h3>
              <a
                href={item.url}
                className=" btn bg-red-500  border-2 border-[#ff7474] text-white px-6 py-3 hover:bg-transparent hover:text-black"
              >
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </section>
    </div>
  );
};

export default Blog;
