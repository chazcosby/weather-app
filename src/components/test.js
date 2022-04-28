import React from "react";
import moment from "moment";
import { Card, Row, Col, CardGroup, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

var d = new Date();
var currTime =
  /* Below is date */
  /* d.toLocaleDateString() + " - " + */
  d.toLocaleTimeString().slice(0, -6) + " " + d.toLocaleTimeString().slice(8);

const Forecast = ({ weatherData }) => (
  <Container className="weatherContainer" fluid>
    <Row>
      <Col className="center dayAndTime">
        {/* Current Day and Time */}
        <p>
          {moment.unix(weatherData.dt).format("ddd")} - {currTime}
        </p>
      </Col>
    </Row>
    <Row>
      <Col className="center">
        {/* Current Temp */}
        <p className="currentTemp">
          {Math.round(weatherData.main.temp * 1.8 + 32)}&deg;
        </p>
        {/* Current Weather Description */}
        <p className="currentTempDesc">
          {weatherData.weather[0].description
            .toLowerCase()
            .split(" ")
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ")}
        </p>
        {/* Current Weather Min - Max Temp */}
        <p className="minMaxTemp">
          {Math.round(weatherData.main.temp_min * 1.8 + 32)}&deg; /&nbsp;
          {Math.round(weatherData.main.temp_max * 1.8 + 32)}&deg;&nbsp; Feels
          Like {Math.round(weatherData.main.feels_like * 1.8 + 32)}&deg;
        </p>
      </Col>
      <Col className="currentWeatherIcon">
        {/* Current Weather Icon */}
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="Card image"
        />
      </Col>
    </Row>

    <Row className="containerBG">
      <Col className="center">
        <center>
          <i className="fa-solid fa-sun rise"></i>
          <p>Sunrise</p>
          {moment.unix(weatherData.sys.sunrise).format("h:mm a").toUpperCase()}
        </center>
      </Col>
      <Col className="center">
        <center>
          <i className="fa-solid fa-moon rise"></i>
          <p>Sunset</p>
          {moment.unix(weatherData.sys.sunset).format("h:mm a").toUpperCase()}
        </center>
      </Col>
    </Row>
    <Row className="containerBG">
      <Col className="center">
        <p>
          <i className="fa-solid fa-circle"></i>
        </p>
        <p>UV Index</p>
        <p>{weatherData.clouds.all}</p>
      </Col>
      <Col className="center">
        <p>
          <i className="fa-solid fa-wind"></i>
        </p>
        <p>Wind</p>
        <p>{weatherData.wind.speed} mph</p>
      </Col>
      <Col className="center">
        <p>
          <i className="fa-solid fa-droplet"></i>
        </p>
        <p>Humidity</p>
        <p>{weatherData.main.humidity} &#37;</p>
        {console.log(weatherData.lat)}
      </Col>
    </Row>
  </Container>
);

export default Forecast;
