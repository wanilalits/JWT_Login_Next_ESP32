
import React, { useRef } from 'react'
//import _buttonControl from './_buttonControl.module.css'
import _buttonControlfrom from './_buttonControl.module.css'


let data;

const ButtonControl = (props) => {


    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);
    const inputRef5 = useRef(null);
    const inputRef6 = useRef(null);
    const inputRef7 = useRef(null);
    const inputRef8 = useRef(null);



    let c1 = 'rgb(231, 227, 202)', c2 = "rgb(168, 19, 91)"
    let bf, bl


    if (props.wsdata != undefined) {
        bf = props.wsdata.charAt(0)
        bl = props.wsdata.charAt(1)
        console.log(bf)
        if (bf == 1) {
            if (bl == 1) {
                inputRef1.current.style.backgroundColor = c2;
            }
            else {
                inputRef1.current.style.backgroundColor = c1;
            }
        }

        if (bf == 2) {
            if (bl == 1) {
                inputRef2.current.style.backgroundColor = c2;
            }
            else {
                inputRef2.current.style.backgroundColor = c1;
            }
        }

        if (bf == 3) {
            if (bl == 1) {
                inputRef3.current.style.backgroundColor = c2;
            }
            else {
                inputRef3.current.style.backgroundColor = c1;
            }
        }

        if (bf == 4) {
            if (bl == 1) {
                inputRef4.current.style.backgroundColor = c2;
            }
            else {
                inputRef4.current.style.backgroundColor = c1;
            }
        }

        if (bf == 5) {
            if (bl == 1) {
                inputRef5.current.style.backgroundColor = c2;
            }
            else {
                inputRef5.current.style.backgroundColor = c1;
            }
        }

        if (bf == 6) {
            if (bl == 1) {
                inputRef6.current.style.backgroundColor = c2;
            }
            else {
                inputRef6.current.style.backgroundColor = c1;
            }
        }

        if (bf == 7) {
            if (bl == 1) {
                inputRef7.current.style.backgroundColor = c2;
            }
            else {
                inputRef7.current.style.backgroundColor = c1;
            }
        }


        
        if (bf == 8) {
            if (bl == 1) {
                inputRef8.current.style.backgroundColor = c2;
            }
            else {
                inputRef8.current.style.backgroundColor = c1;
            }
        }


      if (bf == 0) {
            if (bl == 1) {
                inputRef1.current.style.backgroundColor = c2;
                inputRef2.current.style.backgroundColor = c2;
                inputRef3.current.style.backgroundColor = c2;
                inputRef4.current.style.backgroundColor = c2;
                inputRef5.current.style.backgroundColor = c2;
                inputRef6.current.style.backgroundColor = c2;
                inputRef7.current.style.backgroundColor = c2;
                inputRef8.current.style.backgroundColor = c2;
            }
            else {
                inputRef1.current.style.backgroundColor = c1;
                inputRef2.current.style.backgroundColor = c1;
                inputRef3.current.style.backgroundColor = c1;
                inputRef4.current.style.backgroundColor = c1;
                inputRef5.current.style.backgroundColor = c1;

                inputRef6.current.style.backgroundColor = c1;
                inputRef7.current.style.backgroundColor = c1;
                inputRef8.current.style.backgroundColor = c1;
            }
        }
       

    }









    return (
        <>
            <div className={_buttonControl.b321} ref={inputRef1}></div>
            <div className={_buttonControl.b322} ref={inputRef8}></div>
            <div className={_buttonControl.b323} ref={inputRef3}></div>
            <div className={_buttonControl.b324} ref={inputRef2}> </div>
            <div className={_buttonControl.b325} ref={inputRef4} ></div>
            <div className={_buttonControl.b326} ref={inputRef5} ></div>
            <div className={_buttonControl.b327} ref={inputRef6}> </div>
            <div className={_buttonControl.b328} ref={inputRef7}></div>
        </>

    )
}
export default ButtonControl;