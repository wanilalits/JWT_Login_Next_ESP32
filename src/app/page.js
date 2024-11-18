import Login from "./login/page";
//import Head from 'next/head';
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <h2>V1.0</h2>
<br></br>
    <h3><Link  href="/register"> Register Link</Link></h3>

    <h3><Link  href="/login"> Login Link</Link></h3>

    </div>
  );
}
