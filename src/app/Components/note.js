import React from 'react'
import thermometer from '../Components/thermometer.module.css'

 const Thermometer = (props) => {
var data =props.wsdata
   
   return (
<div className={thermometer.ThermameterOBody}>
<div className={thermometer.ThermameterTube}> 
<div className={thermometer.ThermameterITube} style={{transform: 'translate(-50%,'+(250-(data*5) )+'px) ',height: data*5+'px', transition: 'transform 1s, height  1s' } }   ></div></div>
<div className={thermometer.ThermameterBulb}></div>
<div className={thermometer.ThermameterIBulb}></div>
<div className={thermometer.ThermamerRuler}> 
 <>
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
<hr className={thermometer.hr1}/>
<hr className={thermometer.hr1}/>

<hr className={thermometer.hr2}/>
</>
</div>
<div className={thermometer.ThermamerRulerText}>
 <p >50</p> 
 <p >40</p>
 <p >30</p>
 <p >20</p>
 <p >10</p>
 <p >00</p>
 </div>
 <div className={thermometer.ThermameterInfo}>Temprature <br></br> {data}°C <br></br> {((data*9/5)+32).toFixed(2)}°F</div>
</div>
  )
}
export default Thermometer;


/*

.ThermameterOBody
{position: relative;
height: 95%;
width: 90%;
background-color: aliceblue;
left: 5%;
top: 2.5%;
border-radius: 10px;
}

.ThermameterTube{
 height: 280px;
width: 18px;
background-color: rgb(201, 210, 218);
border: 1px solid rgb(0, 0, 0);
transform: translate(40px, 5px);
border-radius: 17px;
}

.ThermameterBulb{
height: 40px;
width: 40px;
border: 1px solid rgb(0, 0, 0);
background-color: rgb(201, 210, 218);
border-radius: 20px;
transform: translate(29px, -30px);
position: relative;
z-index: -1;
}

.ThermameterITube{
  width: 10px;
  margin-left: 50%;
  background-color: rgb(175, 9, 9);
  border-radius: 10px;
  height: 250px;
  transform: translate(-50%,0px);
}

.ThermameterIBulb
{
  height: 30px;
  width: 30px;
  background-color: rgb(175, 9, 9);
  border-radius: 15px;
  transform: translate(112%, -65px);
}

.ThermamerRuler{
  height: 250px;
  width: 15px;
  transform: translate(20px,-345px);
}

.ThermamerRulerText{
transform: translate(6px,-620px);
line-height: 50px;
color: rgb(0, 9, 129);
font-size: 10px;
}


.hr1{
  border: none;
  border-top: 1px solid red;
  margin-bottom: 1px;
 width: 40%;
 transform: translateX(90%);
}

.hr2{
  box-sizing: border-box;
  border: none;
  border-top: 1px solid rgb(97, 19, 199);
  margin-bottom: 4px;
}

.ThermameterInfo
{
  position: absolute;
  border: 1px solid rgb(97, 19, 199);
 top :20%;
 left: 40%;
 line-height: 130%;
font-weight: 600;
text-align: center;
}

*/