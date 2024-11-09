import React from "react";
import Heading from "./Heading";
import Card from "./Card";

const data = [
  {
    id: 0,
    title: "Countdown Timer",
    desc: "A React and TypeScript based App for managing and organizing codes ",
    img: "/CDtime.png",
    tags: ["React", "Node", "CSS", "TypeScript"],
  },

  {
    id: 1,
    title: "Todo List",
    desc: "A React and Next.js based App for managing and organizing codes ",
    img: "/todo list.png",
    tags: ["React", "Node", "CSS", "TypeScript"],
  },

  {
    id: 2,
    title: "Weather Widget",
    desc: "A React and TypeScript based App for managing and organizing codes ",
    img: "/weather.png",
    tags: ["React", "Node", "CSS", "TypeScript"],
  },

  {
    id: 3,
    title: "Avionics Engineering",
    desc: "An avionics engineer specializes in designing, developing, and maintaining electronic systems for aircraft, including navigation, communication, radar, and flight control systems. Their role is crucial for ensuring aircraft safety, functionality, and compliance with regulatory standards. ",
    img: "/Avionic Engineering.png",
    tags: ["Calibration", "BenchCheck", "Repairing", "Installation"],
  },

  {
    id: 4,
    title: "F-16 Instruments Calibrator",
    desc: "The TTU-205D is a specialized test set used to calibrate and test aircraft pitot-static systems, ensuring accurate airspeed and altitude measurements. This portable unit is essential for maintaining the precision and reliability of aviation instruments critical to flight safety. ",
    img: "/TTU-205D.png",
    tags: ["IRS", "Altimeter", "AMI", "VVI", "ASI"],
  },

  {
    id: 5,
    title: "F-16 FALCON FIGHTER",
    desc: "The F-16 Falcon is a highly versatile, single-engine multirole fighter jet, renowned for its agility, advanced avionics, and adaptability in air-to-air and air-to-ground missions. Designed for speed and maneuverability, it is widely used globally for defense and tactical operations. ",
    img: "/F-16.png",
    tags: ["IRS", "Altimeter", "AMI", "VVI", "ASI"],
  },
];

const Projects = () => {
  return (
  <div id = "projects" className="container pt-32">
    <Heading title="My projects" />
    <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el)=>(<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
        
    </div>
    
  </div>
  )
};


export default Projects;
