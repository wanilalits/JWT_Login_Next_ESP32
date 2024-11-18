"use client"

import { useState,useEffect } from "react";

import Dashboard from "./Dashboard.module.css"
import profile from '@/app/profile1/profile.module.css';
import { useRouter } from 'next/navigation';
function page(props) {
  const router = useRouter();

  const oneLogout = async (e) => {
    let response = await fetch(window.location.origin+'/api/users/profile');

   if (response.status === 200) {
    router.push('./login')
    response = await response.json()
}

}





    const [data, setData]= useState(30);
    var hei=30
      useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
          countClickHandler()
        }, 2000);
        //Clearing the interval0
        return () => clearInterval(interval);
    }, [data]);
    
    
     const countClickHandler = () => {setData (Number((Math.random() * (28.00 -30.00) + 28.00).toFixed(2))); 
     
      hei=data
    console.log(hei)
    };






    return (
        <>

<div className={profile.profile}  >
             
             <div className={profile.profile1} onClick={(e) => (oneLogout(e))}  >  </div>
          
         </div>
         <button onClick={(e) => (oneLogout(e))}>&nbsp; LogOut &nbsp;</button>  &nbsp;
         <br></br> <br></br>


  <div className={Dashboard.mainbox}>

    <div className={Dashboard.box}>
         
  
<div className={Dashboard.box1}>
<div className={Dashboard.ThermameterOBody}>
<div className={Dashboard.ThermameterTube}> <div className={Dashboard.ThermameterITube} style={{transform: 'translate(-50%,'+(250-(data*5) )+'px) ',height: data*5+'px', transition: 'transform 1s, height  1s' } }   ></div></div>
<div className={Dashboard.ThermameterBulb}></div>
<div className={Dashboard.ThermameterIBulb}></div>
<div className={Dashboard.ThermamerRuler}> 
 <>
<hr className={Dashboard.hr2}/>

<hr className={Dashboard.hr1}/>
<hr className={Dashboard.hr1}/>
<hr className={Dashboard.hr1}/>
<hr className={Dashboard.hr1}/> 
<hr className={Dashboard.hr1}/> 
<hr className={Dashboard.hr1}/> 
<hr className={Dashboard.hr1}/> 
<hr className={Dashboard.hr1}/>
<hr className={Dashboard.hr1}/> 

<hr className={Dashboard.hr2}/>

<hr className={Dashboard.hr1}/>
<hr className={Dashboard.hr1}/>
<hr className={Dashboard.hr1}/>
<hr className={Dashboard.hr1}/> 
<hr className={Dashboard.hr1}/> 
<hr className={Dashboard.hr1}/> 
<hr className={Dashboard.hr1}/> 
<hr className={Dashboard.hr1}/>
<hr className={Dashboard.hr1}/> 

<hr className={Dashboard.hr2}/>

<hr className={Dashboard.hr1}/>
<hr className={Dashboard.hr1}/>
<hr className={Dashboard.hr1}/>
<hr className={Dashboard.hr1}/> 
<hr className={Dashboard.hr1}/> 
<hr className={Dashboard.hr1}/> 
<hr className={Dashboard.hr1}/> 
<hr className={Dashboard.hr1}/>
<hr className={Dashboard.hr1}/> 

<hr className={Dashboard.hr2}/>

<hr className={Dashboard.hr1}/>
<hr className={Dashboard.hr1}/>
<hr className={Dashboard.hr1}/>
<hr className={Dashboard.hr1}/> 
<hr className={Dashboard.hr1}/> 
<hr className={Dashboard.hr1}/> 
<hr className={Dashboard.hr1}/> 
<hr className={Dashboard.hr1}/>
<hr className={Dashboard.hr1}/> 

<hr className={Dashboard.hr2}/>

<hr className={Dashboard.hr1}/>
<hr className={Dashboard.hr1}/>
<hr className={Dashboard.hr1}/>
<hr className={Dashboard.hr1}/> 
<hr className={Dashboard.hr1}/> 
<hr className={Dashboard.hr1}/> 
<hr className={Dashboard.hr1}/> 
<hr className={Dashboard.hr1}/>
<hr className={Dashboard.hr1}/>

<hr className={Dashboard.hr2}/>
</>
</div>
<div className={Dashboard.ThermamerRulerText}>
 <p >50</p> 
 <p >40</p>
 <p >30</p>
 <p >20</p>
 <p >10</p>
 <p >00</p>
 </div>
 <div className={Dashboard.ThermameterInfo}>Temprature <br></br> {data}°C <br></br> {((data*9/5)+32).toFixed(2)}°F</div>
</div>



</div>
<div>
<div className={Dashboard.box2}></div>
<div className={Dashboard.box2}>Sensor 1</div>
</div> 
 
  
  <div className={Dashboard.Controlbox}>Controlbox</div>
  <div>
<div className={Dashboard.box3}>
<div className={Dashboard.CompassBody}  style={{transform: 'rotate('+(data-28)*180+'deg)', transition: 'transform 1s' } }>
<div className={Dashboard.CompassN}>N</div>
<div className={Dashboard.CompassS}>S</div>
<div className={Dashboard.CompassE}>E</div>
<div className={Dashboard.CompassW}>W</div>


</div>
<div className={Dashboard.CompassBody1}></div>
<div className={Dashboard.CompassDot}></div>
<div className={Dashboard.CompassNeedle}  >
<div className={Dashboard.CompassNeedleN}></div>
<div className={Dashboard.CompassNeedleS}></div>
</div>


</div>
<div className={Dashboard.box3}>



  
</div>
</div>

          </div> 
          </div> 


          <div className={Dashboard.TThermamerRulerText}> ....................</div>

       
        </>
    );
}

export default page;

//