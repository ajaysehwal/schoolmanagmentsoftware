import React, { useEffect, useState } from 'react'
import { Button, Spinner } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie'
export default function Announcement() {
  const cookies = new Cookies();
  const auth = cookies.get('_UID');
  const [load,setload]=useState(false);
  const [data,setdata]=useState([]);
  const getdata=async(auth:any)=>{
    setload(true);
      try{
     const res=await axios.get(`http://localhost:8000/schoolannouncement/${auth}`);
     setdata(res.data);

       setload(false);
      }catch(err){
        return err;
      }
  }
  useEffect(()=>{
  getdata(auth);
  },[])
  return (
     <div>
      <Link to='/operations/announcement/addnew_announcement'>
      <Button  style={{marginBottom:'10px'}}>Add New Announcement</Button>

      </Link>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
          {load?<Spinner/>:data?.map((el)=>(
           
        
           <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                 <div className='p-5'>
                   <div style={{display:'flex',alignItems:'center' ,gap:'5px'}}>
                     <div style={{display:'flex'}} >
                     <p  style={{fontSize:'20px',overflow:'hidden',height:'25px',width:'90%'}} className='font-semibold'>
                  {el.heading}
                  </p> 
                     </div>

                
                       <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                       <svg style={{cursor:'pointer'}} className="h-6 w-6 text-blue-600"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" /> 
                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
                        <svg  style={{cursor:'pointer'}} className="h-6 w-6 text-red-600"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                       </div>
                   </div>
                
                  <br />
                   <div style={{borderLeft:'5px solid silver',padding:'10px'}}>
                   {el.notice}
                    <p  className='text-blue-500 font-semibold' style={{display:'flex',alignItems:'center',gap:'3px',cursor:'pointer'}}>
                    <svg className="h-5 w-5 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>
                      <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                        Read all announcement</p>

                   </div>
                 </div>
           </div>
             ))}
           <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            
            </div>
            <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            
            </div>
            <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            
            </div>

      </div>
     </div>
 
   
  )
}
