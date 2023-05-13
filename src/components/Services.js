import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const programs = [
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "JavaScript",
  },
  {
    name: "Typescript",
  },
  {
    name: "Reactjs",
  },
  {
    name: "Tailwincss",
  },
  {
    name: "Git",
  },
  {
    name: "GitHub",
  },
];

const Services = () => {
  return (
    <div className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* texto */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">Lo que hago</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Encargada de crear la interfaz de usuario de un sitio web o
              aplicación web, así como de garantizar su funcionalidad y
              eficiencia.
            </h3>
          </motion.div>

          {/* servicio */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div className>
              <h1 className="h1 text-accent mb-6 text-3xl">
                Tecnologías Manejadas!
              </h1>
              {programs.map((service, index) => {
                const { name } = service;
                return (
                  <div className="border-b border-white/20" key={index}>
                    <div className="">
                      <h4
                        className="text-[20px] tracking-wider
                     font-primary font-semibold text-center"
                      >
                        {name}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
