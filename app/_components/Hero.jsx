import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center gap-3 flex-col justify-center pt-14 pb-7'>
        <h2 className='font-bold text-[46px] text-center'>
            Find Home
            <span className='text-primary'> Service/Repair</span> 
            <br/> Near You</h2>
        {/* <p>Get the best service from the best professionals</p> */}
        <h2 className='text-xl text-gray-400'>Explore Best Home Service & Repair near you</h2>
        <div className='mt-4 flex gap-4 items-center'>
            <Input placeholder='Search Services' className='rounded-full md:w-[350px]' />
            <Button className='rounded-full h-[45px]'>
                <Search className='w-4 h-4' />
            </Button>
        </div>
    </div>
  )
}

export default Hero;