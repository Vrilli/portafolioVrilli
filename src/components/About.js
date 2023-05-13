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
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* imagen */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex aspect-square  bg-about bg-contain bg-no-repeat h-[580px]
           mix-blend-lighten mt-32 lg:mt-[500px]"
          ></motion.div>

          {/* texto */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 "
          >
            <h2 className="h2 text-accent">Sobre mí</h2>
            <h3 h3 mb-4>
              Soy una Front-end Developer con un año de experiencia.
            </h3>
            <p className="mb-6">
              Una persona proactiva que le encantan los retos, responsable y
              creativa.{" "}
            </p>

            {/* starts */}
            <div className="flex">
              <div>
                <div
                  className="text-[40px] font-tertiary text-gradient
                mb-3"
                >
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Año<br />
                  Experiencia
                </div>
              </div>
                
              <div>
                <div
                  className="text-[40px] font-tertiary text-gradient
                mb-3"
                >
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                 y  meses de<br />
                 
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
