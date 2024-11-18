"use client"

import { useState,useEffect } from "react";
import styles from "./styles.module.css"








function Page1() {
  
  const [data, setData]= useState(30);
var hei=30
  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      countClickHandler()
    }, 1000);
    //Clearing the interval0
    return () => clearInterval(interval);
}, [data]);


 const countClickHandler = () => {setData (Math.floor(Math.random() * (60 - 50 + 1)) + 50); 
  hei=data
console.log(hei)
};


  return (
  <div>
 

<button   onClick={()=>countClickHandler()}> Click Me </button>
{data}  
{hei}
<br></br>
.............................
<br></br>
<div className={styles.TempBox}>
<div className={styles.TempouterCapillary}>     <div className={styles.temp1} ></div>       <div className={styles.TempBulb}></div></div>
<div className={styles.TempOuterBulb}></div>
<div className={styles.Temp} style={{ height: data+'px' }}></div>
<div  style={{transform: 'translate(-27%,'+data*1+'px)' } } className={styles.TempTriangle}></div>
</div>



</div>

//



  );
}

export default Page1;
