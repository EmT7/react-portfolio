import React from 'react';
import Project from "./Project";
 function Portfolio() {
    return (
      <div>
        
   <form>
            <h1>Portfolio </h1>
            <h4> Welcome to my portfolio of coding projects. This section will highlight some of the modules, homework challenges and projects I have completed during my courses. </h4>
        </form>
        <Project projects={projects} />
      </div>
    );
  }
  const projects = [
    {
        id: 0,
        title: "Run-Buddy",
        image: "/images/run-buddy.jpg",
        repo: "https://github.com/MirandaT77/run-buddy",
        live: "https://mirandat77.github.io/run-buddy/",
    },
    {
        id: 1,
        title: "Taskmaster Pro",
        image: "/images/taskmaster.jpg",
        repo: "https://github.com/MirandaT77/taskmaster-pro",
        live: "https://mirandat77.github.io/taskmaster-pro/",
    },
    {
        id: 2,
        title: "Taskinator",
        image: "/images/taskinator.jpg",
        repo: "https://github.com/MirandaT77/Taskinator",
        live: "https://mirandat77.github.io/Taskinator/",
    },
    {
        id: 3,
        title: "Ferias",
        image: "/images/ferias.png",
        repo: "https://github.com/MirandaT77/groupProject1",
        live: "https://mirandat77.github.io/groupProject1/",
    },
    {
        id: 4,
        title: "Swapsies",
        image: "/images/swapsies.jpg",
        repo: "https://github.com/MirandaT77/The-Barter-System",
        live: "https://swapsies-project2.herokuapp.com/",
    },
    {
        id: 5,
        title: "MAC-Marvel Search",
        image: "/images/MAC.jpg",
        repo: "https://github.com/MirandaT77/MAC",
        live: "https://mac-project.herokuapp.com/",
      },
];

  
 
export default Portfolio;

