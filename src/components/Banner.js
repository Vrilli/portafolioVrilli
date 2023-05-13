import React from "react";
import Image from "../assets/avatar.png";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <div className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8]"
            >
              VRILLI <span>CASTRO</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[30px] lg:text-[30px] 
            font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-2 text-white">Soy Desarrolladora</span>
              <TypeAnimation
                sequence={["Frontend", 2000, "Reactjs", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Desarrollador Front End React con competencias para la creación
              desarrollo y modificación de sitios y la construcción de
              aplicaciones web basadas en React, Typescript, Tailwind CSS, y
              sistemas de control de versiones con Git, Desde las cuales, genero
              soluciones digitales que permiten una interacción agradable al
              usuario final. Ademas cuento con conocimientos sólidos en
              tecnologías web como JavaScript, HTML y CSS, Git, Github y
              Metodología Scrum, conocimientos básicos en Python. Soy reconocida
              por la pasión y el empeño que pongo en cada proyecto y las ganas
              de siempre, culminar lo que empiezo
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a
                href="https://wa.me/3117671177"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-lg">Contactame</button>
              </a>
              <a href="https://github.com/Vrilli?tab=repositories" className="text-gradient btn-link">
                Mi portafolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/Vrilli">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/vrilli-castro-rodriguez-37584822a/">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/VRILLYCASTRO1?t=56kZeK5lpDMfSa-PYBGvGw&s=09">
                <FaTwitter />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="imagen" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
