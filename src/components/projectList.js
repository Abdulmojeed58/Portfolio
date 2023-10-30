import MovieApp from "../images/hng-movie-app.png";
import TodoApp from "../images/Todo.png";
import FoodApp from "../images/Food app.png";
import Instagram from "../images/Instagram.png";
import QuranApp from "../images/quran app.png";
import Kanban from "../images/Kanban.png";

export const ALL_PROJECTS = [
  {
    id: "p1",
    name: "Quran App",
    languages: [
      "Nextjs",
      "Tailwind",
      "Typescript",
      "Firebase db",
      "Redis",
      "Pino",
    ],
    image: QuranApp,
    live: "https://quran-app-red-two.vercel.app",
    code: "https://github.com/Abdulmojeed58/My-Quran-Application",
  },
  {
    id: "p2",
    name: "Project Planner",
    languages: ["React", "Tailwind", "Typescript"],
    image: TodoApp,
    live: "https://abdulmojeed-todo-app.netlify.app/",
    code: "https://github.com/Abdulmojeed58/Todo-app",
  },
  {
    id: "p3",
    name: "Kanban Task Management",
    languages: ["React", "SASS", "Typescript", "Redux-Toolkit"],
    inProgress: true,
    image: Kanban,
    live: "https://kanban-task-manager-chi.vercel.app/",
    code: "https://github.com/Abdulmojeed58/Kanban-Task-Manager",
  },
  {
    id: "p4",
    name: "Food App",
    languages: ["HTML", "Css", "Javascript"],
    image: FoodApp,
    live: "https://mcmickey-food-website.netlify.app/",
    code: "https://github.com/Abdulmojeed58/Food-website",
  },
  {
    id: "p5",
    name: "Movie App",
    languages: ["React", "Tailwind", "Typescript"],
    image: MovieApp,
    live: "https://mojeed-hng-movie-app.netlify.app/",
    code: "https://github.com/Abdulmojeed58/HNG-Movie-App",
  },
  {
    id: "p6",
    name: "Mini Instagram",
    languages: ["HTML", "Css", "Javascript"],
    image: Instagram,
    live: "https://splendorous-pudding-cff5d9.netlify.app/",
    code: "https://github.com/Abdulmojeed58/mini-instagram-clone",
  },
];
