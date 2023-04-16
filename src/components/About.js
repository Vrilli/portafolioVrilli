import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div>
           <div
            className="flex aspect-square  bg-about bg-contain bg-no-repeat h-[640px]
           mix-blend-lighten mt-32 lg:mt-[500px]"
          ></div> 
          <div className="">
            <h2>Sobre mí</h2>
            <h3>Soy una Front-end Developer con un año de experiencia.</h3>
            <p></p>
            <div className="flex">
              <div>
                <div
                  className="text-[40px] font-tertiary text-gradient
                mb-3"
                >
                   <CountUp start={0} end={1} duration={3} /> 
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  años de <br />
                  Experiencia
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg mt-8">Contactame</button>
              <a href="." className="text-gradient btn-link">
                Mi Portafolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
