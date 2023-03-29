import { motion } from 'framer-motion';
import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import { Socials } from '../../components';

import './Home.scss';
const Home = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  return (
    <>
      <div className='app__home-background-container'>
        <div className='app__home-background'></div>
        <video id="app__home-video" autoPlay={true} loop={true} muted>
          <source src={images.videoBg} type="video/mp4" />
        </video>
      </div>


      <div className='app__home app__flex'>

        <div className="app__home-header app__flex">
          <motion.h2 className='app__home-title head-text' whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}>
            Jeunesse <span>Porsel</span>
          </motion.h2>
          <motion.div
            whileInView={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__flex app__wrapper app__home-socials'>
            <Socials />
          </motion.div>
          <div className='app__home-arrow'>
            <a href='#'><motion.svg
              width="64"
              height="64"
              viewBox="0 0 128 128"
              initial="hidden"
              animate="visible"
            >
              <motion.line
                x1="64"
                y1="30"
                x2="64"
                y2="100"
                stroke="#fffeee"
                variants={draw}
                custom={1}
              />
              <motion.line
                x1="44"
                y1="80"
                x2="64"
                y2="100"
                stroke="#fffeee"
                variants={draw}
                custom={2}
              />
              <motion.line
                x1="84"
                y1="80"
                x2="64"
                y2="100"
                stroke="#fffeee"
                variants={draw}
                custom={2}
              />

            </motion.svg></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppWrap(Home, 'accueil');