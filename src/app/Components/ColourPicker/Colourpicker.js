'use client'
import React, { useState, useEffect } from 'react'
import _colourPicker from './_colourPicker.module.css'
import { SketchPicker,ChromePicker } from 'react-color';
import {useScrollBlock} from '../CustomRef/CustomRef'
 const Colourpicker = (props) => {
    
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

	useEffect(() => {
		if (isModalOpen) {
			blockScroll();
		} else {
			allowScroll();
		}
	}, [isModalOpen, blockScroll, allowScroll]);
  
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


  

}


    return (
   
    
   
   <div>
   <div onTouchStart={()=>setIsModalOpen(true)} onTouchEnd={()=>setIsModalOpen(false)} >
      <ChromePicker 
       styles={pickerStyle}  className={_colourPicker.sub}
            color={color}  onChange={(updatedColor) => {RGBvalue(updatedColor.rgb) ,  props.action(color) } } />
     </div>

    </div>
  
  )
}
export default Colourpicker;

//  onChange={(updatedColor) => {RGBvalue(updatedColor.rgb) ,  props.action(color)} }  />

//pointer-events: none;