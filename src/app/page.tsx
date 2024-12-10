import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href='/pages/account/login'>Login</Link>
      <br />
      <Link href='/pages/account/register'>Register</Link>
    </div>
  );
}
