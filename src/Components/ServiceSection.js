import React from 'react';
import money from '../img/money.svg';
import diaphragm from '../img/diaphragm.svg';
import clock from '../img/clock.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import { About, Description, Image } from '../Style';
import styled from 'styled-components';
import { reveal } from '../animation';
import { useScroll } from './useScroll';
const ServiceSection = () => {
    const [element, controls] = useScroll();
    return (
      <Services
        transition={{ duration: 0.75 }}
        ref={element}
        variants={reveal}
        animate={controls}
        initial="hidden"
      >
        <Description>
          <h2>
            High <span>quality</span> services.
          </h2>
          <Cards>
            <Card>
              <div className="icon">
                <img src={clock} alt="" />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={teamwork} alt="" />
                <h3>Teamwork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={diaphragm} alt="" />
                <h3>Pro Grade Gear</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={money} alt="" />
                <h3>Affordable</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Cards>
        </Description>
        <Image>
          <img src={home2} alt="camera" />
        </Image>
      </Services>
    );
};


const Services = styled(About)`
  min-height: 90vh;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 600px) {
    display: block;
    padding: 2rem 2rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default ServiceSection;