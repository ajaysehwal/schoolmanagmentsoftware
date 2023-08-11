import React from 'react'

export default function Announcementbox() {
  return (
    <div className='col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8'>
         <p className='text-1xl font-bold' style={{display:'flex',alignItems:'center',gap:'5px',fontSize:'18px'}}>
         Latest Announcement 
         <svg className="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>
           <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />  <path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>

         </p>
         
           <br />
           <hr />
           <br />
            <div>
                <p style={{fontSize:'20px'}} className='font-semibold'>Welcome onboard, feel free to enjoy the software withou ...</p>
                <br />
                   <div style={{borderLeft:'5px solid silver',padding:'10px'}}>
                   My name is Segun, CEO and co-founder of GOSFEM.
                    Thank you for signing up for GOSFEM - we’re delighted to have
                     you on board! We started GOSFEM with a simple goal: to help educators,
                      school owners, teachers to manage their schools anywhere in the world no
                    matter their size or resources they have, with the systems they need for effective teaching and learning. To ..
                    <p  className='text-blue-500 font-semibold' style={{display:'flex',alignItems:'center',gap:'3px',cursor:'pointer'}}>
                    <svg className="h-5 w-5 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>
                      <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                        Read all announcement</p>

                   </div>
            </div>

    </div>
  )
}
