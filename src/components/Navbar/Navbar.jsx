import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import $ from 'jquery';

import { images } from '../../constants';

import './Navbar.scss';


const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  let nav = $(".app__navbar");
   window.onscroll = function () { scrollFunction() };

   function scrollFunction() {
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.addClass('app__navbar-white');

       } else {
        nav.removeClass('app__navbar-white');
       }
   }

  return (
    <motion.nav 
    animate={{y: [-500, 0], opacity: [0, 1]}}
    className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.jeunesselogo} alt="logo" />
    </div>
    <ul className="app__navbar-links">
      {['accueil', 'a-propos', 'evenement'].map((item) => (
        <li className="app__flex p-text" key={`link-${item}`}>
          <div />
          <a href={`#${item}`}>{item}</a>
        </li>
      ))}
    </ul>

    <div className="app__navbar-menu">
      <HiMenuAlt4 onClick={() => setToggle(true)} />

      {toggle && (
        <motion.div
          whileInView={{ x: [300, 0] }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
        >
          <HiX onClick={() => setToggle(false)} />
          <ul>
            {['Accueil', 'A propos', 'Événément'].map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={() => setToggle(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  </motion.nav>

  )
}

export default Navbar