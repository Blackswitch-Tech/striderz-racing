import React from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import timelineData from "../components/journey.json";
import { Typography } from "@material-tailwind/react";
const JourneyPage = () => {
  return (
    <div className="min-h-screen bg-[#0033CC] text-white ">
      <Section>
        <motion.h1
          className="text-6xl text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Journey
        </motion.h1>
        {/* Add team member cards or grid here */}

        <Typography className="md:px-64 lg:px-64 pb-8 text-center m-5 ">
          TEAM STRIDERZ Racing began its journey at Saintgits College of
          Engineering, born from the Mechanical Engineering Department. Driven
          by a shared passion for racing and engineering, our team was formed to
          push the limits of innovation and performance.
        </Typography>
        <ol className="relative border-l border-gray-200 dark:border-gray-700 m-5  md:w-6/12 md:mx-auto">
          {timelineData.map((item, index) => (
            <li className="mb-10 ml-4" key={index}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-white ">
                {item.time}
              </time>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              {item.image && (
                <img src={item.image} alt={item.title} className="mb-4" />
              )}
              <p className="text-base font-normal text-white whitespace-pre-line">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
};

export default JourneyPage;
