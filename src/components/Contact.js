import React from "react";

const Contact = ({ darkMode }) => {
  return (
    <div className={darkMode ? "dark" : ""}>
      <section
        className="bg-slate-100 dark:bg-gray-800 text-gray-800 dark:text-white px-5 py-24 font-mono"
        id="contact"
      >
        <div className="text-center md:w-[60%] mx-auto ">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
            Contact Me
          </h2>
          <p>
            I am currently open for a Frontend Or Backend Developer role. If you
            want to discuss about that feel free to email me or call me.
          </p>

          <p className="py-2">
            <span className="font-bold">Email:</span> mahdizaltnii@gmail.com
          </p>
          <p className="py-2">
            <span className="font-bold">Phone:</span> +216 21 698 101
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
