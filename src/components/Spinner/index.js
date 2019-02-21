import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Circle from "./Circle";

const SpinnerWrapper = styled("div")`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSpinner = styled("div")`
  position: relative;
  width: 40px;
  height: 40px;
`;

const Spinner = ({ colorScheme }) => (
  <SpinnerWrapper>
    <StyledSpinner>
      {[...Array(12)].map((x, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Circle key={i} colorScheme={colorScheme} />
      ))}
    </StyledSpinner>
  </SpinnerWrapper>
);

Spinner.defaultProps = {
  colorScheme: "light"
};

Spinner.propTypes = {
  colorScheme: PropTypes.oneOf(["light", "dark"])
};

export default Spinner;
