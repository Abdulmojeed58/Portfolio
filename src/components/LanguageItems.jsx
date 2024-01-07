import React from "react";
import Language from "./Language";
import design from "../images/Group 26(1).png";

const NO_OF_LANGUAGES = [
  { name: "HTML", years: 2 },
  { name: "CSS", years: 2 },
  { name: "javascript", years: 2 },
  { name: "typescript", years: 1 },
  { name: "react", years: 2 },
  { name: "nextjs", years: 1 },
  { name: "tailwind", years: 2 },
  { name: "mongodb", years: 1 },
  { name: "sass", years: 1 },
  { name: "materialui", years: 1 },
  { name: "redux toolkit", years: 1 },
  { name: "zustand", years: 1 },
  { name: "GraphQL", years: 1 },
  { name: "Jest", years: 1 },
];

const LanguageItems = () => {
  const lists = NO_OF_LANGUAGES.map((list, i) => (
    <Language key={i} name={list.name} years={list.years} />
  ));
  return (
    <section className="text-white mt-16 md:mt-[10rem]">
      <div className="absolute right-0 bottom-[2rem] w-[15rem] lg:w-[22rem]">
        <img src={design} alt="design" />
      </div>
      <div className="w-full h-[1px] bg-[#D9D9D9] mb-10"></div>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3">{lists}</ul>
      <div className="w-full h-[1px] bg-[#D9D9D9] my-10 md:hidden"></div>
    </section>
  );
};

export default LanguageItems;
