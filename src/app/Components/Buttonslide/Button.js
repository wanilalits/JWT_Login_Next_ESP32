'use client'
import React, { useState, useMemo } from 'react'
import button from './button.module.css'
import Switch from '@mui/material/Switch';



let state
let data=0;

const Button1 = (props) => {
 
if(props.wsdata != undefined)
{
  data=!data
}
  const squaredNum = useMemo(() => {
 return state = props.wsdata;
}, [data]);
  


return (
<div className={button.box}>
<Switch    checked={squaredNum}  color="secondary"   />
</div>
  )
}

export default Button1;

//<input   > </input> 
//<span  className={[button.slider, button.round] .join(" ")} ></span>