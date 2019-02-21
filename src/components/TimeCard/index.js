import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { formatTime, toRem } from "utils";
import { WiDayRain, WiDaySunny, WiCloud, WiCloudy } from "react-icons/wi";
import { GLOBAL_SPACING_UNIT, GLOBAL_SPACING_UNIT_SMALL } from "utils";

const Icon = ({ id }) => {
  switch (id) {
    case 500:
      return <WiDayRain />;
    case 800:
      return <WiDaySunny />;
    case 801:
      return <WiCloud />;
    case 802:
      return <WiCloudy />;
    case 803:
      return <WiCloudy />;
    default:
      return <WiDaySunny />;
  }
};

const StyledTimeCard = styled("div")`
  margin-bottom: ${GLOBAL_SPACING_UNIT};
  padding: ${GLOBAL_SPACING_UNIT};

  width: 100%;

  background-color: rgba(0, 0, 0, 0.25);
  color: white;
`;

const TimeCardTitle = styled("h3")`
  margin-bottom: ${GLOBAL_SPACING_UNIT_SMALL};
`;

const TimeCardForecast = styled("div")`
  display: flex;
  align-items: center;

  svg {
    margin-right: ${GLOBAL_SPACING_UNIT_SMALL};
    width: 50px;
    height: 50px;
  }
`;

const TimeCardForecastItem = styled("li")`
  list-style: none;
  font-size: ${toRem(14)};
`;

const TimeCard = ({ icon, high, low, timestamp }) => (
  <StyledTimeCard>
    <TimeCardTitle>{formatTime(timestamp)}</TimeCardTitle>
    <TimeCardForecast>
      <Icon id={icon} />
      <ul>
        <TimeCardForecastItem>High: {high}&deg;c</TimeCardForecastItem>
        <TimeCardForecastItem>Low: {low}&deg;c</TimeCardForecastItem>
      </ul>
    </TimeCardForecast>
  </StyledTimeCard>
);

TimeCard.propTypes = {
  timestamp: PropTypes.string,
  icon: PropTypes.number,
  high: PropTypes.number,
  low: PropTypes.number
};

export default TimeCard;
