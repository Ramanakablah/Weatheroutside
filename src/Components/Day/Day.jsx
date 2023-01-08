import React from 'react'
import styles from "./Day.module.css"

const Day = (props) => {
  const {item} = props;

  return (<div className={styles.Day}>
    <img src="https://cdn.weatherapi.com/weather/64x64/night/116.png" alt=""/>
    <div className={styles.Stats}>
       <div className={styles.C_Tile}>
       <div className={styles.C_TileL} title="Tempratue"><i className="fa-solid fa-temperature-three-quarters"></i> Max {item.day.maxtemp_c} C </div>
       <div className={styles.C_TileL} title="Tempratue"><i className="fa-solid fa-temperature-three-quarters"></i> Min {item.day.mintemp_c} C </div>
        <div className={styles.date}>Date: {item.date} </div>
       </div>
    </div>
    </div>
  )
}

export default Day