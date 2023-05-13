import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-purple-900 text-white items-center grid grid-cols-2 justify-center py-12 h-[200px]">
      <div className=" flex justify-center items-center">
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
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className=" flex flex-col justify-center items-center"
      >
        <p className="mb-2">
          Desarrollado con <FontAwesomeIcon icon={faHeart} />
        </p>
        <p className="text-sm">
          &copy; 2023 All Rights Reserved by
          <a
            href="https://instagram.com/vrilly_castro?igshid=ZDdkNTZiNTM="
            className="text-blue-400 ml-1"
          >
            Vrilli Castro
          </a>
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;
