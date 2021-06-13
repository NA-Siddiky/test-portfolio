import React from 'react';
import './HeaderMessage.css';
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import { Button } from 'react-bootstrap';


const MyTitleMessage = styled.h2`
  width: 100%;
  z-index: 1;
  text-align: center;
  strong {
    font-size: 1.00em;
  }
  div {
    color: #222831;
    font-weight: 400;
    letter-spacing: 5px;
    .main {
      font-size: 45px;
    }
    .sub {
      font-size: 30px;
      letter-spacing: 2px;
    }
  }
`;


const HeaderMessage = () => {
  return (
    <MyTitleMessage>
      <div className="titleMessage w-100 h-100 p-4 d-flex justify-content-center align-items-center">
        <div className="heading p-4 text-left w-75">
          <div className="main">
            <h1 className="fw-bolder">Hi, I'M <br></br> <span className="color-primary my-name">N.A Siddiky</span></h1><br />
            <h4>MERN Developer</h4>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: ["React", "Node Js", "MongoDB", "Express JS"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
          <div>
            <Button className="color-highlight mt-3" target="_blank" href="https://drive.google.com/file/d/1MD7KtIoMcxQtXTMzjNUkHx3ow49S_k8_/view?usp=sharing">RESUME</Button>
          </div>
        </div>
      </div>
    </MyTitleMessage>
  );
};

export default HeaderMessage;



