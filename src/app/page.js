'use client'
//import Head from 'next/head';
import Link from "next/link";
export default function Home() {

  
  console.log(window.location.href)
  return (
    <div>
    <h2>V1.0</h2>
<br></br>

   <Link  href="/register"> Register Link  </Link>
   <br></br>   
  
   <br></br><br></br>  
 <Link  href="/login"> Login Link  </Link> 
 

    </div>
  );
}
