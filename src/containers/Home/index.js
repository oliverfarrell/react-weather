import React from "react";
import { connect } from "react-redux";
import { getForecast } from "actions/forecast";

import styled from "@emotion/styled";

import Spinner from "components/Spinner";
import Button from "components/Button";
import { WiDaySunny } from "react-icons/wi";

const StyledButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    transform: translate(-50%, -50%) scale(1.05);
  }

  svg {
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }
`;

class Forecast extends React.Component {
  GEOLOCATION_TIMEOUT = 10000;

  state = {
    loading: false,
    error: false
  };

  getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      return navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          resolve({ latitude: coords.latitude, longitude: coords.longitude });
        },
        error => {
          reject(error);
        },
        {
          timeout: this.GEOLOCATION_TIMEOUT
        }
      );
    });
  };

  getLocation = async evt => {
    evt.preventDefault();

    this.setState({ loading: true });

    try {
      const { latitude, longitude } = await this.getCurrentPosition();
      await this.props.fetchForecast(latitude, longitude);
    } catch (e) {
      await this.props.fetchForecast(51.515419, -0.141099);
    }

    this.setState({ loading: false });

    this.props.navigate("/forecast");
  };

  render() {
    const { loading, error } = this.state;

    if (loading) {
      return <Spinner colorScheme="light" />;
    }

    return (
      <>
        <StyledButton onClick={this.getLocation}>
          Get forecast <WiDaySunny />
        </StyledButton>
        {error && <p>There was a problem retrieving location data. Please try again.</p>}
      </>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  fetchForecast: async (longitude, latitude) => {
    await dispatch(getForecast(longitude, latitude));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forecast);
