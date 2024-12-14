'use client'
import Link from "next/link";






export default function Home() {
const url='https://lsw-kappa.vercel.app/'
  return (

    <>      
    <div>
    <h2>V1.0</h2>
<br></br>

   <Link  href="/register"> Register Link  </Link>
   <br></br>   
   or goto
   <br></br>
   {url+'register'}
   <br></br><br></br>   <br></br>
 <Link  href="/login"> Login Link  </Link> 
 <br></br> 
   or goto
   <br></br>
   {url+'login'}
   <br></br>
<div>
  
</div>
    </div>
    </>
  );
}
