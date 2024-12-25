'use client'
import React from "react";
import { Button } from "antd";
import Link from 'next/link'

export default function Home() {
  return (
   <div className="bg-blue-900  w-full h-screen flex flex-row items-center justify-center gap-5">
      <Button className="text-blue-900 font-semibold">
        <Link href='/login'>Daxil ol</Link>
      </Button>
      <span className="text-white">/</span>
      <Button className="text-blue-900 font-semibold">
        <Link href='/registerAll'>Qeydiyyatdan keç</Link>
      </Button>
   </div>
  );
}
