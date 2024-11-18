import Login from "./login/page";
//import Head from 'next/head';
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <h2>V1.1</h2>
<br></br>
    <Link  href="/register"> Register Link</Link>

    <Link  href="/login"> Login Link</Link>

    </div>
  );
}
