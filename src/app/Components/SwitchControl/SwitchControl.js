'use client'
import React, { useState, useMemo } from 'react'
import _switchControl from './_switchControl.module.css'
import Switch from '@mui/material/Switch';


let data;


const SwitchControl = (props) => {

  if(props.wsdata != undefined)
    {
      data=!data
    }

const squaredNum = useMemo(() => {

 return props.wsdata;
}, [data]);
  


return (
<div className={_switchControl.box}>
<Switch  checked={squaredNum}  color="secondary"   />
</div>
  )
}

export default SwitchControl;

