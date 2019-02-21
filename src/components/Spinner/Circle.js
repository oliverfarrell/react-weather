import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";

import { BLACK, WHITE } from "utils/colors";

const fade = keyframes`
  0%,
  39%,
  100% {
    opacity: 0;
  }
  40% { opacity: 1; }
`;

const rotate = (nth, rotation, delay) => css`
  &:nth-of-type(${nth}) {
    transform: rotate(${rotation}deg);
    &::before {
      animation-delay: ${delay}s;
    }
  }
`;

// Create a <Circle> react component that renders a <div>
const Circle = styled("div")`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  &::before {
    content: '';
    display: block;
    margin: 0 auto;

    width: 15%;
    height: 15%;

    border-radius: 100%;
    background-color: ${props => (props.colorScheme === "dark" ? BLACK : WHITE)};

    animation: ${fade} 1.2s infinite ease-in-out both;
  }

  ${rotate(2, 30, -1.1)}
  ${rotate(3, 60, -1)}
  ${rotate(4, 90, -0.9)}
  ${rotate(5, 120, -0.8)}
  ${rotate(6, 150, -0.7)}
  ${rotate(7, 180, -0.6)}
  ${rotate(8, 210, -0.5)}
  ${rotate(9, 240, -0.4)}
  ${rotate(10, 270, -0.3)}
  ${rotate(11, 300, -0.2)}
  ${rotate(12, 330, -0.1)}
`;

export default Circle;
