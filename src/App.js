
import React, { useEffect, useState } from "react";
import Weather from "./components/weather";
import Loading from "./components/loading";
import Footer from "./components/footer";

{/* https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={long}&appid=${process.env.REACT_APP_API_KEY} */}


export default function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result)
        }).catch(err => console.log(err));
    };
    fetchData();
  }, [lat, long]);


  
  return (
    <div className="App">
      {typeof data.current != "undefined" ? (
        <>
          <Weather weatherData={data} />
          <Footer />
        </>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
}
