'use client'
import React, { useState } from 'react'
import { SketchPicker,ChromePicker } from 'react-color';
 const Colourpicker = () => {
    const [color, setColor] = useState("red");
    const [hidden, setHidden] = useState(false);
    const pickerStyle = {
      default: {
        picker: {
          
          width: "100%",
          height: "100%"
        }
      }
    };
   
    return (
   
    
   
   <div>
      <ChromePicker  styles={pickerStyle}
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}  />
      
    </div>
  )
}
export default Colourpicker;