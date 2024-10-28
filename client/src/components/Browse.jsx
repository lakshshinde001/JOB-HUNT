import React from 'react'
import Job from './Job'
import Navbar from './shared/Navbar'

const allJobs = [1,2,3,4,5]

function Browse() {
  return (
    <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        allJobs.map((job) => {
                            return (
                                <Job key={job._id} job={job}/>
                            )
                        })
                    }
                </div>

            </div>
        </div>
  )
}

export default Browse