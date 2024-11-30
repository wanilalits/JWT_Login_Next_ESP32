import React from 'react'
import _Buttoncontrol from './_Buttoncontrol.module.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function valuetext(value) {
    return `${value}°C`;
  }
  

const Buttoncontrol= () => {
  return (
    <> 
    <div className={_Buttoncontrol.box1}>
    <button>Buzzer</button> 
    <button>Screen</button> 
    <button>Vibrator</button>
    </div>
    <br></br>
 <br></br> 
 <br></br> 
    <Box sx={{ width: 'auto' }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        color="secondary"
           valueLabelDisplay="default"
      />
    </Box>
 
    </>
  )
}



export default Buttoncontrol