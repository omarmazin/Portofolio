import React from "react";
// import CoinsVision from "../Assets/Projects/CoinsVision.jpg";
// import CurrencyConverter from "../Assets/Projects/CurrencyConverter.jpg";
// import ProgramManager from "../Assets/Projects/ProgramManager.jpeg";
// import TodoList from "../Assets/Projects/TodoList.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://user-images.githubusercontent.com/77233657/250461014-ae3aae9e-100e-4886-b9e8-b84e077a97e2.png",
      link: "https://admin-panel-wine-mu.vercel.app/",
      pname: "Admin Panel",
    },
    {
      id: 2,
      src: "https://github.com/omarmazin/Notification-Page-/blob/main/design/desktop-preview.jpg",
      link: "https://notification-page-blush.vercel.app/",
      pname: "Notification Page",
    },
    {
      id: 3,
      src: ProgramManager,
      link: "https://github.com/omarmazin/ProgramManager",
      pname: "Program Manager",
    },
    {
      id: 4,
      src: TodoList,
      link: "https://github.com/omarmazin/To-Do-list",
      pname: "To do list",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, pname }) => (
            <div
              key={id}
              className=" shadow-md shadow-gray-600 rounded-lg w-10/12"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="px-5 py-0 w-full m-1 duration-200 hover:scale-105">
                {pname}
              </p>
              <button className="px-1 py-2 w-1/2 m-2 duration-200 hover:scale-105">
                <a href={link} target="_blank">
                  Code
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
