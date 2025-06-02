import React from "react";
import { motion } from "motion/react";
import team1 from "../assets/img/team1.jpg";
import team2 from "../assets/img/team2.jpg";
const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              animate={{
                y: [100, 150, 100],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                },
              }}
              src={team1}
              className="max-w-sm rounded-t-4xl rounded-br-4xl border-l-15 border-b-15 border-green-700  shadow-2xl"
            />
            <motion.img
              animate={{
                x: [100, 150, 100],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  delay: 2,
                },
              }}
              src={team2}
              className="max-w-sm rounded-t-4xl rounded-br-4xl border-l-15 border-b-15 border-purple-700  shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold">
              Latest{" "}
              <motion.span
                animate={{
                  color: ["#fdfdfd", "#A30B22", "#c6c6c6"],
                  transition: { duration: 4, repeat: Infinity },
                }}>
                remote
              </motion.span>{" "}
              job
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
