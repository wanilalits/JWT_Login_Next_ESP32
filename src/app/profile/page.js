"use client"
import { useState, useEffect } from "react";

import Dashboard from "./Dashboard.module.css"
import _profile from './_profile.module.css'


import { useRouter } from 'next/navigation';

import Pot from "../Components/Pot";
import Thermometer from "../Components/Thermometer";
import Compass from "../Components/Compass.js";
import Button1  from "../Components/Buttonslide/Button.js";
import Colourpicker from "../Components/ColourPicker/Colourpicker";
import Buttoncontrol from "../Components/ButtonControl/ButtonControl";


function page(props) {

  
  const router = useRouter();
 
  const [ws, setWs] = useState(null);
  const [wbmessage, setWbessage] = useState('');
  const [clientId, setClientId] = useState('');
  const [data, setData] = useState(30);
  var hei = 30
  
  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      // countClickHandler()
    }, 5000);
    //Clearing the interval0
    return () => clearInterval(interval);
  }, [data]);


  useEffect(() => {
    websocketEvents()

  }, []
  )




  const websocketEvents = () => {

    const websocket = new WebSocket('wss://nodejswebsocket.onrender.com/');

    websocket.onopen = () => {
      console.log('WebSocket is connected');
      // Generate a unique client ID
      const id = Math.floor(Math.random() * 1000);
      setClientId(id);
    };

    websocket.onmessage = (evt) => {
      console.log (evt.data)

    setWbessage(JSON.parse(evt.data.slice(8)))
//console.log (JSON.parse(evt.data.slice(8)).s1)

};

    websocket.onclose = () => {
    };

    setWs(websocket);
    return () => { websocket.close(); };
  }

  const oneLogout = async (e) => {
    let response = await fetch(window.location.origin + '/api/users/profile');
    if (response.status === 200) {
      router.push('./login')
      response = await response.json()
    }
  }

  const countClickHandler = () => {
    setData(Number((Math.random() * (28.00 - 30.00) + 28.00).toFixed(2)));
    hei = data
  };

  return (
    <div>



<div className={_profile.main}>
     <div className={_profile.box1}>  <Thermometer wsdata={wbmessage.t}></Thermometer> </div>
   
     <div className={_profile.box2}>  
     <div className={_profile.box21}>Humidity </div>
     <div className={_profile.box22}>Air Pr </div>
     <div className={_profile.box23}>

     <div className={_profile.box231} id="1"><Button1  wsdata={wbmessage.s1} ></Button1> </div>
     <div className={_profile.box231}id="2"><Button1  wsdata={wbmessage.s2}></Button1></div>
     <div className={_profile.box231} id="3"><Button1 wsdata={wbmessage.s3} ></Button1></div>
     <div className={_profile.box231}id="4"><Button1  wsdata={wbmessage.s4}></Button1></div>

      </div>
     <div className={_profile.box24}> <Compass wsdata={wbmessage.c}></Compass> </div>
     </div>

     <div className={_profile.box3}>
     <div className={_profile.box31}><div style={{height:'120px'}}><Pot wsdata={wbmessage.p} ></Pot> </div>  </div>
     <div className={_profile.box32}>
     <div></div>
   

     <div className={_profile.b321}></div>
     <div className={_profile.b322}></div>
     <div className={_profile.b323}></div>

     <div className={_profile.b324}></div>
     <div className={_profile.b325}></div>
     <div className={_profile.b326}></div>
     <div className={_profile.b327}></div>
     <div className={_profile.b328}></div>
     </div>
     </div>
    
    
     <div className={_profile.box4}>
     <div className={_profile.box41}><Colourpicker></Colourpicker> </div>
     <div className={_profile.box42}>
    <Buttoncontrol></Buttoncontrol>
      </div>
 </div>
      
      </div>



   

    
        <div onClick={(e) => (oneLogout(e))}  >  </div>
    

      <button onClick={(e) => (oneLogout(e))}>&nbsp; LogOut &nbsp;</button>  &nbsp;
      <br></br> <br></br>



    </div>
  );
}

export default page;

/*


   <div className={Dashboard.mainbox}>
        <div className={Dashboard.box}>
          <div className={Dashboard.box1}>
            <Thermometer wsdata={wbmessage.t}></Thermometer>
          </div>

          <div>
            <div className={Dashboard.box2}> box2</div>
            <div className={Dashboard.box2}>
              <Pot wsdata={wbmessage.p} ></Pot>
            </div>
          </div>

          <div className={Dashboard.Controlbox}>Controlbox</div>

          <div>
            <>
              <Compass wsdata={wbmessage.c}></Compass>
            </>
            <div className={Dashboard.box3}>
            </div>
          </div>

        </div>
      </div>




*/