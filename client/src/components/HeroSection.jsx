import { Image } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    
    const navigate = useNavigate();

    return (
        <>
        <div className='text-center mt-10'>
        <span className=' mx-auto px-4 py-2 rounded-full  bg-gray-100 text-[#F83002] text-3xl'>Modern Website for modern jobs</span>
        </div>

        <div className='flex items-center justify-center h-[500px]'>
            <div className='flex flex-col gap-5 my-10'>
                
                <h1 className='text-6xl font-bold'>Search, Apply  <br /> Get Your <br/> <span className='text-[#F83002]'>Dream Jobs</span></h1>
                <p>Register, Update Profile, Search Jobs, Apply in single click. get Selected!!</p>

                <Button 
                    className='w-[200px]'   
                    onClick={()=> navigate('/jobs')}
                
                >
                    Browse Jobs
                </Button>

            </div>
            <div>
                <img
                    src="https://www.flexjobs.com/blog/wp-content/uploads/2021/09/10045333/Job-Searching-Online-11-Best-Practices-You-Need-to-Know-2-2.jpg?w=1024"
                    alt="image search"
                    className='rounded-full w-[700px]'
                    
                />
            </div>
        </div>
        </>
    )
}

export default HeroSection