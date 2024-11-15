
import mongoose from "mongoose";
import { Log } from "@/database/userSchema";
import { NextResponse } from "next/server";
import bcryprjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
const connectionStr = "mongodb+srv://lalilswani:KrGXqcaDbahGMmaL@cluster0.ygf21f6.mongodb.net/loginDatabase?retryWrites=true&w=majority&appName=Cluster0";

export const POST = async (reqest) => {
    let payload = await reqest.json();

    if (!payload.username || !payload.password) {
        return NextResponse.json("enter all data ", { status: 202 })
    }
    await mongoose.connect(connectionStr)
    let log = await Log.findOne({ username: payload.username });

    if (!log) {
        return NextResponse.json('user is not found', { status: 202 })
    }

    const validpassword = await bcryprjs.compare(payload.password, log.password)
    if (!validpassword) {
        return NextResponse.json('password is not valid', { status: 202 })
    }

    const tokenData = { username: payload.username, passward: log.password}
    let jwtSecretKey = 'lalit';
   
   const token = jwt.sign(tokenData, jwtSecretKey, { expiresIn: '1d' });    ///generate token
   const verified = jwt.verify(token, jwtSecretKey);
   
   if (verified)
   { console.log('ok1')
    console.log(jwt.decode(token))
   }
//
    

    const arrayToken = token.split('.');
    const tokenPayload = JSON.parse(atob(arrayToken[1]));




    const response = NextResponse.json({ data: [payload.username, log.name], status: 202 })

    response.cookies.set('token', token, { httpOnly: true });
   

    return response;

}

