import React from "react";
import moment from "moment";
import { Card, Row, Col, CardGroup, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Footer from "./footer";

var d = new Date();
var currTime =
/* Below is date for future use */
  /* d.toLocaleDateString() + " - " + */
  d.toLocaleTimeString().slice(0, -6) + " " + d.toLocaleTimeString().slice(8);  

const Forecast = ({ weatherData }) => (
  <Container className="weatherContainer" fluid>
    <Row>
      <Col className="center dayAndTime">
        {/* Current Day and Time */}
        <p>
          {moment.unix(weatherData.current.dt).format("ddd")} - {currTime}
        </p>
      </Col>
    </Row>
    <Row>
      <Col className="center">
        {/* Current Temp */}
        <p className="currentTemp">
          {Math.round((weatherData.current.temp - 273.15) * 1.8 + 32)}&deg;
        </p>
        {/* Current Weather Description */}
        <p className="currentTempDesc">
          {weatherData.current.weather[0].description
            .toLowerCase()
            .split(" ")
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ")}
        </p>
        {/* Current Weather Min - Max Temp */}
        <p className="minMaxTemp">
          {Math.round((weatherData.daily[0].temp.min - 273.15) * 1.8 + 32)}&deg;
          /&nbsp;
          {Math.round((weatherData.daily[0].temp.max - 273.15) * 1.8 + 32)}
          &deg;&nbsp; Feels Like{" "}
          {Math.round(
            (weatherData.daily[0].feels_like.day - 273.15) * 1.8 + 32
          )}
          &deg;
        </p>
      </Col>
      <Col className="currentWeatherIcon">
        {/* Current Weather Icon */}
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
          alt="Card image"
          className="CurrentWeatherIcon"
        />
      </Col>
    </Row>

    <Row className="containerBG">
      <Col className="center">
        <center>
          <i className="fa-solid fa-sun rise"></i>
          <p>Sunrise</p>
          {moment
            .unix(weatherData.current.sunrise)
            .format("h:mm a")
            .toUpperCase()}
        </center>
      </Col>
      <Col className="center">
        <center>
          <i className="fa-solid fa-moon rise"></i>
          <p>Sunset</p>
          {moment
            .unix(weatherData.current.sunset)
            .format("h:mm a")
            .toUpperCase()}
        </center>
      </Col>
    </Row>
    <Row className="containerBG">
      <Col className="center">
        <p>
          <i className="fa-solid fa-circle"></i>
        </p>
        <p>UV Index</p>
        <p>{weatherData.current.uvi}</p>
      </Col>
      <Col className="center">
        <p>
          <i className="fa-solid fa-wind"></i>
        </p>
        <p>Wind</p>
        <p>{weatherData.current.wind_speed} mph</p>
      </Col>
      <Col className="center">
        <p>
          <i className="fa-solid fa-droplet"></i>
        </p>
        <p>Humidity</p>
        <p>{weatherData.current.humidity} &#37;</p>
      </Col>
    </Row>

    <Row className="containerBG fiveDay">
      <Col className="center">
        <p>{moment.unix(weatherData.daily[1].dt).format("ddd")}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.daily[1].weather[0].icon}.png`}
          alt="Card image"
        />
        <p>
          {Math.round((weatherData.daily[1].temp.min - 273.15) * 1.8 + 32)}&deg;
          &nbsp;
          {Math.round((weatherData.daily[1].temp.max - 273.15) * 1.8 + 32)}
          &deg;
        </p>
      </Col>
      <Col className="center">
        <p>{moment.unix(weatherData.daily[2].dt).format("ddd")}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.daily[2].weather[0].icon}.png`}
          alt="Card image"
        />
        <p>
          {Math.round((weatherData.daily[2].temp.min - 273.15) * 1.8 + 32)}&deg;
          &nbsp;
          {Math.round((weatherData.daily[2].temp.max - 273.15) * 1.8 + 32)}
          &deg;
        </p>
      </Col>
      <Col className="center">
        <p>{moment.unix(weatherData.daily[3].dt).format("ddd")}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.daily[3].weather[0].icon}.png`}
          alt="Card image"
        />
        <p>
          {Math.round((weatherData.daily[3].temp.min - 273.15) * 1.8 + 32)}&deg;
          &nbsp;
          {Math.round((weatherData.daily[3].temp.max - 273.15) * 1.8 + 32)}
          &deg;
        </p>
      </Col>
      <Col className="center">
        <p>{moment.unix(weatherData.daily[4].dt).format("ddd")}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.daily[4].weather[0].icon}.png`}
          alt="Card image"
        />
        <p>
          {Math.round((weatherData.daily[4].temp.min - 273.15) * 1.8 + 32)}&deg;
          &nbsp;
          {Math.round((weatherData.daily[4].temp.max - 273.15) * 1.8 + 32)}
          &deg;
        </p>
      </Col>
      <Col className="center">
        <p>{moment.unix(weatherData.daily[5].dt).format("ddd")}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.daily[5].weather[0].icon}.png`}
          alt="Card image"
        />
        <p>
          {Math.round((weatherData.daily[5].temp.min - 273.15) * 1.8 + 32)}&deg;
          &nbsp;
          {Math.round((weatherData.daily[5].temp.max - 273.15) * 1.8 + 32)}
          &deg;
        </p>
      </Col>
    </Row>
  </Container>
  
);

export default Forecast;
