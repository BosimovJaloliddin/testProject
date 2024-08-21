import styled from "styled-components";

import img1 from "../../assets/icons/tree-example.svg?react";
import img2 from "../../assets/icons/uzbekiston-map.svg?react";

export const Container = styled.section`
  position: relative;
  max-width: 1220px;
  min-width: 1200px;

  /* border: 1px solid red; */
`;
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 42px;
  border: 2px solid var(--secondary-text-color);
  border-radius: 7px;
`;

export const ImgOne = styled(img1)`
  max-width: 100%;
  height: fit-content;
  /* border: 1px solid yellow; */
`;
export const ImgTwo = styled(img2)``;
export const Cricle = styled.div`
  position: absolute;
  top: ${({ posy }) => posy && `${posy - 10}px`};
  left: ${({ posx }) => posx && `${posx - 10}px`};
  width: 30px;
  height: 30px;
  background-color: grey;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
`;
export const Button = styled.button`
  width: 100%;
  height: 35px;
  background-color: var(--primary-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s linear;

  &:active {
    transform: scale(0.98);
  }
`;
