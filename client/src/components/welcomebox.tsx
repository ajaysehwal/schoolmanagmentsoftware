import React from 'react'
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from "universal-cookie";

export default function Welcomebox() {
    const cookies = new Cookies();
  const auth = cookies.get('_UID');
    const successnotify = (text: string) =>
    toast.success(text, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
     const comingsoon=()=>{
        successnotify("Coming Soon");
     }
    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000); // Update every second
    
        return () => clearInterval(intervalId);
      }, []);
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentDate(new Date());
        }, 1000); // Update every second
    
        return () => clearInterval(intervalId);
      }, []);
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
      const currentDay = daysOfWeek[currentDate.getDay()];
      const currentMonth = monthsOfYear[currentDate.getMonth()];
    
      const currentFormattedDate = `${currentDate.getDate()}, ${currentMonth}  ${currentDate.getFullYear()}`;
  return (
    
    <div >
         <div style={{display:'flex',alignItems:'center',gap:'5px',width:'100%'}}>
            <ToastContainer></ToastContainer>
             <p className="text-1xl font-bold">Your school code:</p>
            <p style={{width:'100px',overflow:'hidden'}}>{auth}</p>
           
            <p className="text-1xl font-bold">School website:</p>
            <p onClick={comingsoon} style={{color:"blue",cursor:'pointer'}}>Here</p>
           
         </div>
         <div style={{display:'flex',alignItems:'center',gap:'5px',width:'100%',marginTop:'5px'}} >
         <svg className="h-5 w-5"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>
           <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <rect x="10" y="12" width="4" height="4" /></svg> 
           <p className="font-semibold">
           / Welcome to dashboard 
           </p>
           <p>/  {currentDay} / {currentFormattedDate} / {currentTime.toLocaleTimeString()}</p>

         </div>
         
    </div>
  )
}
