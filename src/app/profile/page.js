"use client"
import { useState, useEffect, createContext } from "react";

import _profile from './_profile.module.css'
import { useRouter } from 'next/navigation';

import Pot from "../Components/Pot";
import Thermometer from "../Components/Thermometer";
import Compass from "../Components/Compass.js";
import Colourpicker from "../Components/ColourPicker/Colourpicker";
import SwitchControl from "../Components/SwitchControl/SwitchControl";
import  ButtonControl  from "../Components/ButtonControl/ButtonControl";
export const globelInfo=createContext();

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


  const  yourFunction=(data)=> {
    console.log(data)
    if (ws) {
      ws.send(JSON.stringify({
          led: data,
      }));
  }

  };


  const websocketEvents = () => {

    const websocket = new WebSocket('wss://nodejswebsocket.onrender.com/');

    websocket.onopen = () => {
      console.log('WebSocket is connected');
      // Generate a unique client ID
      const id = Math.floor(Math.random() * 1000);
      setClientId(id);
    };

    websocket.onmessage = (evt) => {
     // console.log (evt.data)
     //console.log (JSON.parse(evt.data.slice(8)))
    setWbessage(JSON.parse(evt.data.slice(8)))


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

     <div className={_profile.box231}><SwitchControl  wsdata={wbmessage.s1} ></SwitchControl> </div>
     <div className={_profile.box231}><SwitchControl  wsdata={wbmessage.s2}></SwitchControl></div>
     <div className={_profile.box231} ><SwitchControl wsdata={wbmessage.s3} ></SwitchControl></div>
     <div className={_profile.box231}><SwitchControl  wsdata={wbmessage.s4}></SwitchControl></div>

      </div>
     <div className={_profile.box24}> <Compass wsdata={wbmessage.c}></Compass> </div>
     </div>

     <div className={_profile.box3}>
     <div className={_profile.box31}><div style={{height:'120px'}}><Pot wsdata={wbmessage.p} ></Pot> </div>  </div>
     
     <div className={_profile.box32}>
      <ButtonControl wsdata={wbmessage.b}></ButtonControl>

     </div>
     </div>
    
    
     <div className={_profile.box4}>

     <div className={_profile.box41}></div>
    
     <div className={_profile.box42}>
    
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


  <globelInfo.Provider value={{yourFunction :yourFunction}}>
     <div className={_profile.box41}><Colourpicker action={'yourFunction'}></Colourpicker> </div>
     </globelInfo.Provider>



*/