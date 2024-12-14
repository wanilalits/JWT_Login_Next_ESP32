import React from 'react'
import thermometer from './thermometer.module.css'
let data 
 const Thermometer = (props) => {
if (props.wsdata)

{  data =props.wsdata}

   return (
<div className={thermometer.ThermameterOBody}>
<div className={thermometer.ThermameterTube}> 
<div className={thermometer.ThermameterITube}   ></div>
<div className={thermometer.ThermameterIBulb}></div>
</div>
<div className={thermometer.ThermameterBulb}></div>

<div className={thermometer.ThermamerRuler}> 
 
 <hr className={thermometer.hr2}/>

<hr className={thermometer.hr1}/>
<hr className={thermometer.hr1}/>
<hr className={thermometer.hr1}/>
<hr className={thermometer.hr1}/> 
<hr className={thermometer.hr1}/> 
<hr className={thermometer.hr1}/> 
<hr className={thermometer.hr1}/> 
<hr className={thermometer.hr1}/>
<hr className={thermometer.hr1}/> 

<hr className={thermometer.hr2}/>

<hr className={thermometer.hr1}/>
<hr className={thermometer.hr1}/>
<hr className={thermometer.hr1}/>
<hr className={thermometer.hr1}/> 
<hr className={thermometer.hr1}/> 
<hr className={thermometer.hr1}/> 
<hr className={thermometer.hr1}/> 
<hr className={thermometer.hr1}/>
<hr className={thermometer.hr1}/> 

<hr className={thermometer.hr2}/>

<hr className={thermometer.hr1}/>
<hr className={thermometer.hr1}/>
<hr className={thermometer.hr1}/>
<hr className={thermometer.hr1}/> 
<hr className={thermometer.hr1}/> 
<hr className={thermometer.hr1}/> 
<hr className={thermometer.hr1}/> 
<hr className={thermometer.hr1}/>
<hr className={thermometer.hr1}/> 

<hr className={thermometer.hr2}/>

<hr className={thermometer.hr1}/>
<hr className={thermometer.hr1}/>
<hr className={thermometer.hr1}/>
<hr className={thermometer.hr1}/> 
<hr className={thermometer.hr1}/> 
<hr className={thermometer.hr1}/> 
<hr className={thermometer.hr1}/> 
<hr className={thermometer.hr1}/>
<hr className={thermometer.hr1}/> 

<hr className={thermometer.hr2}/>

<hr className={thermometer.hr1}/>
<hr className={thermometer.hr1}/>
<hr className={thermometer.hr1}/>
<hr className={thermometer.hr1}/> 
<hr className={thermometer.hr1}/> 
<hr className={thermometer.hr1}/> 
<hr className={thermometer.hr1}/> 


</div>
<div className={thermometer.ThermamerRulerText}>
 <p >50</p> 
 <p >40</p>
 <p >30</p>
 <p >20</p>
 <p >10</p>
 <p >00</p>
 </div>
 <div className={thermometer.ThermameterInfo1}>Sensor-1<br></br>Temprature <br></br> {data}°C <br></br> {((data*9/5)+32).toFixed(2)}°F <br></br>Feels like {data} </div>
 
 <div className={thermometer.ThermameterInfo2}>Sensor-2<br></br>Temprature <br></br> {data}°C <br></br> {((data*9/5)+32).toFixed(2)}°F</div>

</div>
  )
}
export default Thermometer;