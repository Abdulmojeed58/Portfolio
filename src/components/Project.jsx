import React from "react";

const ProjectLanguageList = ({ lists }) => {
  return <span className="text-sm mr-2">{lists}</span>;
};

const Project = ({ item }) => {
  return (
    <div className="mt-10 lg:mt-5">
      <div className="relative">
        <div className="hidden w-full h-full bg-[#000000a1] z-10 absolute top-0 left-0 right-0 text-sm lg:flex flex-col justify-center items-center gap-10 opacity-0 hover:opacity-100 transition ease-linear duration-200 cursor-pointer">
          <a
            target="_blank"
            rel="noreferrer"
            href={item.live}
            className="btn"
          >
            view project
          </a>
          <a target="_blank" rel="noreferrer" href={item.code} className="btn">
            view code
          </a>
        </div>
        <img src={item.image} alt={item.name} className="" />
      </div>
      <div>
        <h2 className="font-bold text-2xl mt-4">{item.name}</h2>
        <div className="mt-2 mb-6">
          {item.languages.map((list, index) => (
            <ProjectLanguageList key={index} lists={list} />
          ))}
        </div>
      </div>
      <div className="text-sm lg:hidden">
        <a
          target="_blank"
          rel="noreferrer"
          href={item.live}
          className="btn mr-8"
        >
          view project
        </a>
        <a target="_blank" rel="noreferrer" href={item.code} className="btn">
          view code
        </a>
      </div>
    </div>
  );
};

export default Project;
