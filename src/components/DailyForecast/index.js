import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { GLOBAL_SPACING_UNIT, BUTTON_BACKGROUND, BUTTON_BACKGROUND_HOVER } from "utils";

import TimeCard from "components/TimeCard";
import Header from "components/Header";

const StyledDailyForecast = styled("div")`
  display: grid;
  grid-template-rows: fit-content(100%) 1fr;
  width: 100%;
`;

const TimesWrapper = styled("div")`
  overflow-y: scroll;

  padding: ${GLOBAL_SPACING_UNIT};

  height: calc(100% - 98px); /* fixed a quirk in IE 11 */

  @supports (display: flex) {
    height: auto;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.25);
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${BUTTON_BACKGROUND};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${BUTTON_BACKGROUND_HOVER};
  }
`;

const DailyForecast = props => (
  <StyledDailyForecast>
    <Header day={props.forecast[0].timestamp} />
    <TimesWrapper>
      {props.forecast.map((hour, index) => (
        <TimeCard
          key={index}
          timestamp={hour.timestamp}
          icon={hour.weather.id}
          high={hour.temperature.max}
          low={hour.temperature.min}
        />
      ))}
    </TimesWrapper>
  </StyledDailyForecast>
);

DailyForecast.propTypes = {
  /* The day of the week */
  day: PropTypes.string,
  /* The forecast array */
  forecast: PropTypes.array
};

export default DailyForecast;
