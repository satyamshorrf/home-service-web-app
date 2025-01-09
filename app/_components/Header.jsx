"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";

const Header = () => {

  const {data}=useSession();

  useEffect(()=>{
    console.log(data);
  },[data])

  if(data){
    if(data.user){
      console.log(data.user);
      
  }
  }



  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        {/* Logo Section */}
        <Image src="/logo.svg" alt="logo" width={180} height={100} />

        {/* Navigation Links */}
        <div className="md:flex items-center gap-6 hidden">
          <h2
            className="hover:scale-105 hover:text-primary
            cursor-pointer"
          >
            Home
          </h2>
          <h2
            className="hover:scale-105 hover:text-primary
            cursor-pointer"
          >
            Services
          </h2>
          <h2
            className="hover:scale-105 hover:text-primary
            cursor-pointer"
          >
            About Us
          </h2>
        </div>
      </div>

      {/* Button Section */}
      <div>
        <Button onClick={() =>signIn('descope')}> Login / Sign Up</Button>
      </div>
    </div>
  );
};

export default Header;
