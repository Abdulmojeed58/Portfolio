import React from "react";

import Project from "./Project";
import ImageGallery from "../images/hng-image-gallery.png";
import MovieApp from "../images/hng-movie-app.png";
import TodoApp from "../images/Todo.png";
import Licks from "../images/Licks.png";
import FoodApp from "../images/Food app.png";
import eComm from "../images/E comm.png";
import Instagram from "../images/Instagram.png";

const ALL_PROJECTS = [
  {
    id: "p1",
    name: "Image Gallery",
    languages: ["React", "Tailwind", "Typescript", "React Router"],
    image: ImageGallery,
    live: "https://mojeed-hng-image-gallery.netlify.app",
    code: "https://github.com/Abdulmojeed58/hng-image-gallery",
  },
  {
    id: "p2",
    name: "Movie App",
    languages: ["React", "Tailwind", "Typescript"],
    image: MovieApp,
    live: "https://mojeed-hng-movie-app.netlify.app/",
    code: "https://github.com/Abdulmojeed58/HNG-Movie-App",
  },
  {
    id: "p3",
    name: "Todo App",
    languages: ["React", "Tailwind", "Typescript"],
    image: TodoApp,
    live: "https://abdulmojeed-todo-app.netlify.app/",
    code: "https://github.com/Abdulmojeed58/Todo-app",
  },
  {
    id: "p4",
    name: "Licks Food App",
    languages: ["React", "Css", "React Router"],
    image: Licks,
    live: "https://steady-cendol-dff3c5.netlify.app/",
    code: "https://github.com/Abdulmojeed58/Licks",
  },
  {
    id: "p5",
    name: "Food App",
    languages: ["HTML", "Css", "Javascript"],
    image: FoodApp,
    live: "https://mcmickey-food-website.netlify.app/",
    code: "https://github.com/Abdulmojeed58/Food-website",
  },
  {
    id: "p6",
    name: "e-Commerce",
    languages: ["HTML", "Css", "Javascript"],
    image: eComm,
    live: "https://starlit-bombolone-031a5e.netlify.app/",
    code: "https://github.com/Abdulmojeed58/e-commerce-web",
  },
  {
    id: "p7",
    name: "Mini Instagram",
    languages: ["HTML", "Css", "Javascript"],
    image: Instagram,
    live: "https://splendorous-pudding-cff5d9.netlify.app/",
    code: "https://github.com/Abdulmojeed58/mini-instagram-clone",
  },
];

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
      <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
        {lists}
      </div>
    </section>
  );
};

export default ProjectItems;
