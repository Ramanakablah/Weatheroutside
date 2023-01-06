import React from 'react'
import styles from "./Day.module.css"

const Day = () => {
  return (<div className={styles.Day}>
    <img src="https://cdn.weatherapi.com/weather/64x64/night/116.png" alt=""/>
    <div className={styles.Stats}>
       <div className={styles.C_Tile}>
       <div className={styles.C_TileL} title="Tempratue"><i className="fa-solid fa-temperature-three-quarters"></i> Max 11.4 C </div>
       <div className={styles.C_TileL} title="Tempratue"><i className="fa-solid fa-temperature-three-quarters"></i> Min 8.6 C </div>
       </div>
    </div>
    </div>
  )
}

export default Day