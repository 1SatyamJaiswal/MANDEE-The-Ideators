import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/weather.css";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p className="Time">{time.toLocaleTimeString()}</p>
    </div>
  );
}

function Weather() {
  const [data1, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("Mumbai");
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event) {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setQuery(searchTerm);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }

  const appid = "370a3a5e715d21a0fcf56723602d0a72";
  const units = "metric";

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    appid +
    "&units=" +
    units;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const temp = data1.main.temp;
  const weather = data1.weather[0].main;
  const icon = data1.weather[0].icon;
  const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  const onSearch = (value) => {
    query = value;
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="searchWeather">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        className="search"
        />
        <button type="submit" id="searchbtn">Search</button>
      </form>
      <div className="container">
        <div className="background">
          <div className="Circle1"></div>
          <div className="Circle2"></div>
          <div className="Circle3"></div>
          <div className="content">
            <img
              className="icon"
              src={imageUrl}
              alt={weather}
              width="50px"
              height="50px"
            />
            <h1 className="Condition">{weather}</h1>
            <h1 className="Temp">
              {temp}
              <span id="F">&#8451;</span>
            </h1>
            <Clock />
            <h1 className="Location">{data1.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;