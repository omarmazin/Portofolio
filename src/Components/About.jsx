import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Detail-oriented Front End Developer with more than 2 years 
          experience working with HTML, CSS, Javascript and React.js .
          Highly adept at both independent and and collaborative projects, 
          with an ephasis on landing page and website development .
        </p>
      </div>
    </div>
  );
};

export default About;
