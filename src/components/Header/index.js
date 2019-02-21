import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { getDay } from "utils";

import { WiDayCloudy } from "react-icons/wi";
import {
  WHITE,
  BUTTON_BACKGROUND,
  BUTTON_BACKGROUND_HOVER,
  GLOBAL_SPACING_UNIT,
  GLOBAL_SPACING_UNIT_TINY,
  formatDate
} from "utils";

const StyledHeader = styled("header")`
  display: flex;
  justify-content: center;

  padding: ${GLOBAL_SPACING_UNIT};

  text-decoration: none;

  transition: all 0.3s ease-in-out;

  color: ${WHITE};
  background-color: ${BUTTON_BACKGROUND};

  &:hover,
  &:focus,
  &:active {
    background-color: ${BUTTON_BACKGROUND_HOVER};
    transform: scale(1.05);
  }

  &:not(:last-child) {
    border-right: 1px solid ${BUTTON_BACKGROUND_HOVER};
  }
`;

const HeaderWrapper = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const HeaderDay = styled("strong")`
  margin-bottom: ${GLOBAL_SPACING_UNIT_TINY};
`;

const HeaderDate = styled("small")`
  opacity: 0.5;
`;

const HeaderIcon = styled(WiDayCloudy)`
  width: 50px;
  height: 50px;
  margin-right: ${GLOBAL_SPACING_UNIT};
`;

const Header = ({ day }) => (
  <StyledHeader>
    <HeaderIcon />
    <HeaderWrapper>
      <HeaderDay>{getDay(day)}</HeaderDay>
      <HeaderDate>{formatDate(day)}</HeaderDate>
    </HeaderWrapper>
  </StyledHeader>
);

Header.propTypes = {
  day: PropTypes.string
};

export default Header;
