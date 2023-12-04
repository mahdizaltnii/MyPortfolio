// import React, { useState, useEffect } from "react";

// const Blog = ({ darkMode }) => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     fetch("https://dev.to/api/articles?username=coderamrin")
//       .then((res) => res.json())
//       .then((data) => setBlogs(data.slice(0, 2)))
//       .catch((error) => console.log(error.message));
//   });

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <section
//         className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-5 py-32 font-mono"
//         id="blog"
//       >
//         <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
//           <div className="about-info mb-5">
//             <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2">
//               Blogs
//             </h2>

//             <p className="pb-5">Some of my best blogs.</p>
//           </div>

//           <div></div>
//         </div>

//         <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
//           {blogs.map((item) => {
//             console.log(item);

//             return (
//               <div>
//                 <img src={item.cover_image} alt={item.title} />
//                 <h3 className="py-5 text-2xl">{item.title}</h3>
//                 <a
//                   href={item.url}
//                   className=" btn bg-red-500  border-2 border-[#ff7474] text-white px-6 py-3 hover:bg-transparent hover:text-black"
//                 >
//                   Read More
//                 </a>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Blog;
import React, { useState, useEffect } from "react";
import Clean from "../assets/clean.png";
import bff from "../assets/bff.png";

const Blog = ({ darkMode }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const linkedinPosts = [
      {
        title: "🔥Clean Code: Essential Practices for Every Coder",
        image: Clean,
        link: "https://www.linkedin.com/posts/mahdi-zaltni_cleancode-codequality-softwaredevelopment-activity-7136045601426681857-n2z-?utm_source=share&utm_medium=member_desktop",
      },
      {
        title: "Backend for Frontend (BFF) pattern",
        image: bff,
        link: "https://www.linkedin.com/posts/mahdi-zaltni_backend-frontend-bff-activity-7133227842917535744-5d3y?utm_source=share&utm_medium=member_desktop",
      },
      // Add more posts as needed
    ];

    setBlogs(linkedinPosts.slice(0, 2));
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <section className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-5 py-32 font-mono" id="blog">
        <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
          <div className="about-info mb-5">
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2">Blogs</h2>
            <p className="pb-5">Some of my LinkedIn posts.</p>
          </div>
          <div></div>
        </div>

        <div className="projects container mx-auto grid md:grid-cols-2 gap-5 items-center">
          {blogs.map((item) => (
            <div key={item.title}>
              <img src={item.image} alt={item.title} className="max-w-lg" />
              
              <h3 className="py-5 text-xl items-center">{item.title}</h3>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-red-500 border-2 border-[#ff7474] text-white px-6 py-3 hover:bg-transparent hover:text-black"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
