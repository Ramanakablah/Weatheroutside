import React, { useEffect, useState } from "react";
import styles from "./Weather.module.css";
import Sun from "../../Components/Sun.png";
import Day from "../../Components/Day/Day";
import moon from "../../Components/moon.png";

const Weather = () => {
  const [Wether, setWether] = useState({});
  const [Location, setLocation] = useState("New Delhi");
  const [isday, setisday] = useState(false);

  const getwether = async () => {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=6cbbb287df064a81bc4190257230301&q=${Location}&days=10&aqi=no&alerts=no`
    );
    const data = await res.json();
    setisday(data.current.is_day);
    console.log(data, "From get wether function");
    setWether(data);
  };


  useEffect(() => {
    
     getwether();

      // const Star = document.getElementById("Stars");
      // const wind = document.getElementById("Screen");
      // let s = setInterval(() => {
      //   let sta = Star.cloneNode(true);
      //   sta.style.top = Math.random() * wind.clientHeight + "px";
      //   sta.style.left = Math.random() * wind.clientWidth + "px";
      //   sta.style.animationDuration = 1 + Math.random() * 6 + "s";
      //   wind.append(sta);
      // }, 100);
      
      // setTimeout(() => {
      //   clearInterval(s);
      // }, 4000);
    
      
  }, []);

  return (
    <div
      className={styles.Weather}
      id="Screen"
      style={{
        background:
          isday === 1
            ? "linear-gradient(#87CEEB,#087fef)"
            : "linear-gradient(#030933,#03117a,#03437e)",
      }}
    >

      {/* <div className={styles.Star} id="Stars">
        <i class="fa-sharp fa-solid fa-star"></i>
      </div> */}

      <div className={styles.Search_Box}>
        <input
          type="text"
          value={Location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <i onClick={getwether()} className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className={styles.Daily_Bulletin}>
        <div className={styles.Location}>
          <img src={isday === 1 ? Sun : moon} alt="" className={styles.Sun} />
          {/* <img src="https://cdn.weatherapi.com/weather/64x64/night/116.png" alt="" className={styles.Wicon}/> */}
          <div className={styles.Geographical_Location}>
            <h1>{Wether?.location?.name}</h1>
            <div>
              City of {Wether?.location?.country}, {Wether?.location?.region}
            </div>
            <div>{Wether?.location?.country}</div>
          </div>
        </div>
        <div className={styles.Daily_Bulletin_Container}>
          <div className={styles.C_TileL}>{Wether?.location?.localtime}</div>
          <div className={styles.C_TileL} title="Tempratue">
            <i className="fa-solid fa-temperature-three-quarters"></i>{" "}
            {Wether?.current?.temp_c} C / {Wether?.current?.temp_f} F
          </div>
          <div className={styles.C_Tile}>
            {" "}
            <i className="fa-solid fa-temperature-three-quarters"></i> Feels
            Like {Wether?.current?.feelslike_c} C /{" "}
            {Wether?.current?.feelslike_f} F
          </div>
          <div className={styles.C_Tile} title="Wind">
            <i className="fa-solid fa-wind"></i> {Wether?.current?.wind_mph} mph
            / {Wether?.current?.wind_kph} kph
          </div>
          <div className={styles.C_Tile} title="Cloud">
            <i className="fa-solid fa-cloud"></i> {Wether?.current?.cloud}{" "}
          </div>
          <div className={styles.C_Tile} title="Humidity">
            <i className="fa-solid fa-droplet"></i> {Wether?.current?.humidity}{" "}
          </div>
        </div>
      </div>
      <div className={styles.Forcast_Holder}>
        <div className={styles.Forcast}>
          {Wether?.forecast?.forecastday?.map((day, ind) => {
            return <Day key={ind} item={day} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Weather;
