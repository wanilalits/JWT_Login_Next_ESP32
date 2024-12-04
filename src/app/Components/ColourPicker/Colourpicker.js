'use client'
import React, { useState } from 'react'
import { SketchPicker,ChromePicker } from 'react-color';
 const Colourpicker = (props) => {
    const [color, setColor] = useState("#FF0000");
    const [hidden, setHidden] = useState(false);
    const pickerStyle = {
      default: {
        picker: {
          
          width: "100%",
          height: "100%"
        }
      }
    };
  
const RGBvalue=(rgb)=>{
  setColor(rgb)
  setHidden(rgb.r)
  
var r=rgb.r
var g=rgb.g
var b=rgb.b
  //a= a.slice(1, -3)

  

}


    return (
   
    
   
   <div>
      <ChromePicker  styles={pickerStyle}
            color={color}
            onChange={(updatedColor) => {RGBvalue(updatedColor.rgb) ,  props.action(color)} }  />
     
    </div>
  
  )
}
export default Colourpicker;