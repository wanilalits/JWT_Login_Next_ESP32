'use client'
import React, { useState, useEffect,memo} from 'react'
import _colourPicker from './_colourPicker.module.css'
import {  ChromePicker } from 'react-color';
import { useScrollBlock } from '../CustomRef/CustomRef'

const Colourpicker = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const [color, setColor] = useState("#FF0000");
 
  

  

 
  useEffect(() => {
    if (isModalOpen) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [isModalOpen]);
 








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
   
      <div onTouchStart={() => setIsModalOpen(true)} onTouchEnd={() => setIsModalOpen(false)} >
        <ChromePicker
          styles={pickerStyle} className={_colourPicker.sub}
          color={color} onChange={(updatedColor) => { setColor(updatedColor.rgb), props.action(updatedColor.rgb)  }} />
      </div>
    </div>
  )
}
export default memo(Colourpicker);

