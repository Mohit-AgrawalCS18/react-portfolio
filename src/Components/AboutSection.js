import React from 'react';
import home1 from '../img/home1.png';
import {About,Description,Hide,Image} from '../Style';
import { titleAnim, fade, photoAnim } from '../animation';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import Wave from './Wave';
const AboutSection=()=>{
    return(
        <About>
          <Description>
            <div className="title">
              <Hide>
                <motion.h2 variants={titleAnim}>I'm Mohit Agrawal</motion.h2>
              </Hide>
              <Hide>
                <motion.strong variants={titleAnim} className="descrip">Web developer</motion.strong>
              </Hide>
            </div>
            <Link to="/contact">
                <motion.button variants={fade}>Contact Us</motion.button>
            </Link>
          </Description>
    </About>
    )
}



export default AboutSection;