import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import IMC from "../assets/calculadoraImc.png";
import Landing from "../assets/landing.png";
import Appclima from "../assets/AppClima.png";


const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* texto */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                Mis ùltimos <br /> trabajos
              </h2>
              <p className="max-w-sm mb-16">
                Consiste en una serie de proyectos personales realizados con la
                intencìon de adquirir conocimientos.
              </p>
              <a href="https://github.com/Vrilli?tab=repositories">
                <button className="btn btn-sm">Ver el proyecto</button>
              </a>
            </div>

            {/* imagenes */}
            <a href="https://eafit-reto-9olg.vercel.app/login">
              <div className="flex-1 flex flex-col gap-y-10">
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer">
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    className="group-hover:scale-125 transition-all duration-500"
                    src={Landing}
                    alt="eccommer"
                  />
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <span className="text-gradient">Landing</span>
                  </div>
                  <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                    <span className="text-3xl text-white">
                      Tìtulo del proyecto
                    </span>
                  </div>
                </div>
              </div>{" "}
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <a href="https://dashboard-psi-pink-32.vercel.app/">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Appclima}
                  alt="clima"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Aplicacion para consultar el Clima</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">
                    Tìtulo del proyecto
                  </span>
                </div>
              </div>
            </a>
            <a href="https://imc-eight-eta.vercel.app/">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={IMC}
                  alt="pokemon"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Calculadora IMC</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">
                    Tìtulo del proyecto
                  </span>
                </div>
              </div>{" "}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
