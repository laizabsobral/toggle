import React, { useState } from 'react';
import styled from 'styled-components';
import { IoSunnyOutline, IoMoonOutline  } from "react-icons/io5";

const AppContainer = styled.div`
  background-color: ${({ isOpen }) => (isOpen ? '#100e4f' : '#21a5ff')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

`;
const Container = styled.div`
background-color: ${({ isOpen }) => (isOpen ? '#110e72' : '#fee28c')};
transition: all 1s ease-in-out;
margin: 0px;
  width: 200px;
  height: 80px;
  border-radius: 1000px;
  border: 4px solid #e3b017;
  padding: 10px 16px;
  position: relative;


  &.open {
    background-color: #110e72;
    border: 4px solid #000000;
  }
`;

const ToggleButton = styled.div`
  background-color: ${({ isOpen }) => (isOpen ? '#130fa1' : '#fdd047')};
  border: 5px solid ${({ isOpen }) => (isOpen ? '#135089' : '#e3b017')};
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 5px;
  left: ${({ isOpen }) => (isOpen ? '136px' : '6px')};
  color: ${({ isOpen }) => (isOpen ? '#fff' : '#322705')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  transition: all 1s ease-in-out;
`;

const ToggleIcon = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
  transition: all 0.5s ease-in-out;
`;

const ToggleContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('open');
  };

  return (
    <AppContainer isOpen={isOpen}>
    <Container className={isOpen ? 'open' : ''}>
      <ToggleButton isOpen={isOpen} onClick={handleClick}>
        <ToggleIcon isOpen={isOpen}>
           <IoSunnyOutline name="sunny" className="toggle-sun" />
        </ToggleIcon>
        <ToggleIcon isOpen={!isOpen}>
        <IoMoonOutline name="moon" className="toggle-moon" />
        </ToggleIcon>
      </ToggleButton>
    </Container>
     </AppContainer>
  );
};

export default ToggleContainer;
