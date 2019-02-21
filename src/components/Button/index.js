import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { BUTTON_BACKGROUND, BUTTON_BACKGROUND_HOVER, WHITE } from "utils/colors";

import { GLOBAL_FONT_FAMILY, FONT_SIZES, toRem } from "utils";

const StyledButton = styled("button")`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.full ? "center" : "space-between")};

  width: ${props => (props.full ? "100%" : "auto")};
  height: 60px;

  padding: 0 2em;

  font-family: ${GLOBAL_FONT_FAMILY};
  font-size: ${toRem(FONT_SIZES["SMALL"].fontSize)};
  color: ${WHITE};
  background-color: ${BUTTON_BACKGROUND};

  outline: 0;
  border: 0;
  border-radius: 50px;

  cursor: pointer;

  transition: 0.3s background-color ease-in-out;

  &:hover,
  &:active,
  &:focus {
    background-color: ${BUTTON_BACKGROUND_HOVER};
  }
`;

const Button = ({ icon, children, ...props }) => (
  <StyledButton icon={icon} {...props}>
    {children}
    {icon}
  </StyledButton>
);

Button.propTypes = {
  /* Button text */
  children: PropTypes.node,
  /* Button icon */
  icon: PropTypes.node,
  /* Renders a disabled button and removes pointer events if set to true */
  disabled: PropTypes.bool
};

Button.defaultProps = {
  children: "Button",
  icon: undefined,
  disabled: false
};

export default Button;
