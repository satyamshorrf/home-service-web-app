"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  const { data } = useSession();

  useEffect(() => {
    console.log(data);
  }, [data]);

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
        {data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              {" "}
              <Image
                src={data?.user?.image}
                alt="profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>My Booking</DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem> 
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={() => signIn("descope")}> Login / Sign Up</Button>
        )}
      </div>
    </div>
  );
}

export default Header;
