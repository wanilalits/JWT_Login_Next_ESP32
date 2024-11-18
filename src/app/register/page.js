'use client'
import React, { useState, useRef } from 'react';
import login from '@/app/login/login.module.css'
import register from './register.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Register(props) {
    const [data, setData] = useState({ name: '', username: '', password: '' })
    const [message, setMssage] = useState("")
    var error
    const router = useRouter();
    const inputRef1 = useRef('');
    const inputRef2 = useRef('');
    const inputRef3 = useRef('');
    const inputRef4 = useRef('');
    const inputRef5 = useRef('');
    const onchangevalue = (e) => {
        console.log(data)
        setData({ ...data, [e.target.name]: e.target.value })
     
    }
    const onchangevalue1 = (e) => {
        setData({...data, [e.target.name]: e.target.checked })
        
    }

    const onregister = async (e) => {
        inputRef5.current.style.outline = 'none'
        if ( (!data.name && (error = 'name') + (inputRef1.current.focus()) ) || (!data.username && (error = 'user ID') + (inputRef2.current.focus()) )|| (!data.password && (error = 'password')+ (inputRef3.current.focus()))  || (!data.Repassword && (error = 'Retype Passwors')+ (inputRef4.current.focus()) ) || ((data.Repassword != data.password) && (error = 'same password')) || (!data.checkbox && (error = 'terms & conditions') + 
        (inputRef5.current.style.outline = '1px solid red') ))      {
           setMssage('Please fill ' + error)
            return;
        }
        else {
            setMssage('Please wait...')

            try {
                let response = await fetch(window.location.origin + '\/api/users/register', {
                    method: 'POST',
                    body: JSON.stringify(data)
                });
                response = await response.json();
                console.log(response.sucess)
                if (response.result == 'user exit') {
                    setMssage('user already exists')
                }

                else {
                    router.push('./login')
                }

            }
            catch (error) {
                setMssage('Please Retray')
                return;
            }

        }
    }
    return (
        <>
            <div className={register.box}>
               <div className={register.title}><label >Register</label></div> 
                <br></br>
                <label className={register.label}>Name</label>
                <input className={register.textBox} id='1' type="text" autoComplete="off" name="name" placeholder="name" onChange={(e) => onchangevalue(e)} ref={inputRef1} ></input>
                <label className={register.label}>User Id</label>
                <input className={register.textBox} id='3' type="text" autoComplete="off" name="username" placeholder="ID" onChange={(e) => onchangevalue(e)} ref={inputRef2}></input>
                <label className={register.label}>Password</label>
                <input className={register.textBox} id='2' type="password" autoComplete='off' name="password" placeholder="Password" onChange={(e) => onchangevalue(e)} ref={inputRef3}></input>
                <label className={register.label}>Retype Password</label>
                <input className={register.textBox} id='4' type="password" autoComplete='off' name="Repassword" placeholder="Retype Password" onChange={(e) => onchangevalue(e)} ref={inputRef4}></input>
                
                <input className={register.checkbox} id='5' type="checkbox" name="checkbox" onChange={(e) => onchangevalue1(e)} ref={inputRef5}></input> 
                <label className={register.label2}> &nbsp;  I agree to terms and conditions</label>
                <br></br>
                <br></br>
                <button className={register.button} onClick={(e) => (onregister(e))}>&nbsp; Register &nbsp;</button> <br></br>
                <br></br>
                <label className={register.label2}>Already have an account?  <span></span><Link className={register.link} href="/login"> Login</Link> </label>
                <br></br>
                <label className={register.errorBox}>{message}</label>
            </div>
<br></br>
            <div className={register.info}>NextJs -- middleware -- app/api -- JWT-- bcryprjs -- Validation -- Reactjs -- React Ref -- CSS -- Mongodb -- Click events -- Vercel</div>
        </>
    );
}

export default Register;