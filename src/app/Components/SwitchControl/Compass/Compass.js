"use client"
import React from 'react'
import compass from "./compass.module.css"
const Compass = (props) => {
  var data=props.wsdata
    return (
  
<div className={compass.box3}>
<div className={compass.CompassBody}  >
<div className={compass.CompassN}>N</div>
<div className={compass.CompassS}>S</div>
<div className={compass.CompassE}>E</div>
<div className={compass.CompassW}>W</div>


</div>
<div className={compass.CompassBody1}></div>
<div className={compass.CompassDot}></div>
<div className={compass.CompassNeedle} style={{transform: 'rotate('+data+'deg)', transition: 'transform 1s' } } >
<div className={compass.CompassNeedleN}></div>
<div className={compass.CompassNeedleS}></div>
</div>


</div>

  )
}

export default Compass