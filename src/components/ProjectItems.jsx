import React from "react";

import Project from "./Project";
import { ALL_PROJECTS } from "./projectList";

const ProjectItems = () => {
  const lists = ALL_PROJECTS.map((item) => (
    <Project key={item.id} item={item} />
  ));

  return (
    <section className="mt-14 px-4 md:px-0 text-white uppercase">
      <div className="flex justify-between items-center mb-7">
        <h2 className="text-white font-bold text-3xl md:text-4xl">Projects</h2>
        <a href="#contact" className="btn">
          contact me
        </a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {lists}
      </div>
    </section>
  );
};

export default ProjectItems;
