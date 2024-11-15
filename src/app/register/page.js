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

    const onchangevalue = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }

    const onregister = async (e) => {
        if ((!data.name && (error = 'name')) || (!data.username && (error = 'user ID')) || (!data.password && (error = 'password'))) {
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
                console.log(response.result)
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
            <div className={login.box}>
                <label className={login.title}>Register</label>
                <label className={login.label3}>Name</label>
                <input className={login.textBox} id='1' type="text" autoComplete="off" name="name" placeholder="name" onChange={(e) => onchangevalue(e)} ></input>
                <label className={login.label3}>User Id</label>
                <input className={login.textBox} id='3' type="text" autoComplete="off" name="username" placeholder="ID" onChange={(e) => onchangevalue(e)}></input>
                <label className={login.label3}>Password</label>
                <input className={login.textBox} id='2' type="password" autoComplete='off' name="password" placeholder="Password" onChange={(e) => onchangevalue(e)}></input>
                <button className={login.button} onClick={(e) => (onregister(e))}>&nbsp; Register &nbsp;</button> <br></br>
                <label className={login.lebel2}>Already have an account?</label> <Link className={login.link} href="/login"> Login</Link>
                <br></br>
                <label className={register.errorBox}>{message}</label>
            </div>
        </>
    );
}

export default Register;