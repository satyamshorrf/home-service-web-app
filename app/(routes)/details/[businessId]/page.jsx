"use client"

import GlobalApi from '@/app/_services/GlobalApi';
import { signIn, useSession, useEffect } from 'next-auth/react';
import React from 'react'


function BusinessDetails  (params)  {
    const {data, status}=useSession();
    
    if (status === "loading") {
        return <p>Loading...</p>;
      }
      if (status === "unauthenticated") {
        signIn('descope');
      }

      useEffect(()=>{
        params&&getbusineesById();
      },[params])

      const getbusineesById=()=>{
        GlobalApi.getBusinessById(params.businessId).then(resp=>{
          console.log(resp.businessList);
        })
      }
    

  return status === "authenticated" && (
    <div>BusinessDetails</div>
  )
}

export default BusinessDetails;