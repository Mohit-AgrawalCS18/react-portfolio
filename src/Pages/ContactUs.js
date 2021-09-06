import React from 'react';
import styled from 'styled-components';
//Animation
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';

const ContactUs = () => {
  return (
    <ContactStyle
      style={{ background: '#fff' }}
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <Title>
        <Hide>
          <motion.h4 variants={titleAnim} style={{fontSize:"30px"}}>Get in touch.</motion.h4>
        </Hide>
        <div className="line2"></div>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h4><a href="https://www.linkedin.com/in/mohit-agrawal-303b04197/">Linkedin.com</a></h4>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h4><a href="">facebook</a></h4>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h4><a href="agrawalmohit679@gmail.com">agrawalmohit679@gmail.com</a></h4>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const Hide = styled.div`
  overflow: hidden;
`;

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height:90vh;
  @media (max-width: 600px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 2rem;
  color: black;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #353535;
  @media (max-width: 600px) {
    display: none;
  }
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h4{
    margin: 2rem;
    font-size:35px;
  }
  a{
    text-decoration:none;
  }
  @media (max-width: 600px) {
    h4 {
      margin: 1rem 0rem;
      font-size: 2.5rem;
    }
  }
`;

export default ContactUs;
