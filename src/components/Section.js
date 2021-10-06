import React from "react";
import styled from "styled-components";
import { useSpring, animated } from 'react-spring'

function Section(props) {
  const { title, description, backgroundImg, leftBtnText, rightBtnText } =
    props;

  const animation = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })


  return (
    <Wrap bgImage={backgroundImg}>

      <animated.div style={animation}>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </animated.div>

      <animated.div style={animation}>
        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
      </animated.div>

    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 15px;
  gap: 20px;

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  margin-top: 15px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
