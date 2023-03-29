import React from 'react'
import { FiMail } from 'react-icons/fi';
import {FaFacebookF, FaInstagram} from 'react-icons/fa'

const socials = () => {
  return (
    <div className="app__social app__flex">
    <a href='https://twitter.com/KillianPasche' target='_blank' rel="noreferrer">
    <div>
      <FaInstagram/>
    </div>
    </a>
    <a href='https://github.com/PascheK/' target='_blank' rel="noreferrer">
    <div>
      <FaFacebookF/>
    </div>
    </a>
    <a href='https://www.instagram.com/k.pasch7/' target='_blank' rel="noreferrer">
    <div>
      <FiMail/>
    </div>
    </a>
  </div>
  )
}

export default socials