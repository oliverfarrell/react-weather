import React from "react";
import { Redirect, Link } from "@reach/router";
import { connect } from "react-redux";
import { getForecast } from "actions/forecast";

import styled from "@emotion/styled";

import DailyForecast from "components/DailyForecast";
import Button from "components/Button";

import { MEDIA_QUERIES, GLOBAL_SPACING_UNIT, getDay } from "utils";

const StyledForecast = styled("div")`
  height: 100vh;
`;

const ForecastContainer = styled("div")`
  overflow: hidden;

  @media (min-width: ${MEDIA_QUERIES.DESKTOP}) {
    display: flex;
    height: 100vh;
  }
`;

const StyledDailyForecast = styled(DailyForecast)`
  @media (min-width: ${MEDIA_QUERIES.DESKTOP}) {
    width: 20%;
  }
`;

const LocationButton = styled(Button)`
  position: fixed;
  bottom: ${GLOBAL_SPACING_UNIT};
  left: 50%;
  transform: translateX(-50%) scale(0.6);

  a {
    color: white;
    text-decoration: none;
  }
`;

class Forecast extends React.Component {
  render() {
    const { forecast } = this.props;

    if (!forecast) {
      return <Redirect from="/forecast" to="/" noThrow />;
    }

    return (
      <StyledForecast>
        <ForecastContainer>
          {forecast.days.map((day, index) => (
            <StyledDailyForecast key={index} day={getDay(day[0].timestamp)} forecast={day} />
          ))}
          <LocationButton>
            <Link to="/">{forecast.location.name}</Link>
          </LocationButton>
        </ForecastContainer>
      </StyledForecast>
    );
  }
}

const mapStateToProps = ({ forecast }) => ({
  forecast
});

const mapDispatchToProps = dispatch => ({
  fetchForecast: (longitude, latitude) => {
    dispatch(getForecast(longitude, latitude));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forecast);
