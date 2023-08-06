import axios from 'axios';
import React, { useEffect, useState,useRef } from 'react'
import Cookies from 'universal-cookie'
import { useForm } from 'react-hook-form';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
import emptyfolder from "./images/emptyfolder.png";
import { useReactToPrint } from 'react-to-print';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
export default function Schooltimetable() {
  const {register,handleSubmit,watch,formState:{errors}}=useForm();
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  const [getclass,setclass]=useState([]);
  const [section,setsection]=useState([]);
    const cookies = new Cookies();
    const auth=cookies.get('_UID');
    const [timetable,settimetable]=useState([]);
    const coverttopdf=useRef();
    const generatepdf=useReactToPrint({
      content:()=>coverttopdf.current,
      documentTitle:"Teachers Table",
    })
    const getsectionbyclass=async(value:any,verified_token:any)=>{
      try{
        const res=await axios.get(`http://localhost:8000/studentsection/${value}/${verified_token}`);
          setsection(res.data)
        
      }catch(err){
       
         console.log("error",err);
      }
    }
    const getclasses=async(token:any)=>{
 
  try{
    const res=await axios.get(`http://localhost:8000/studentclasses/${token}`);
      setclass(res.data);
          console.log(res.data);
    
  }catch(err){
   ;
     console.log("error",err);
  }
}
    const gettimetable=async(classes:any,section:any,school_id:any)=>{
        try{
            const res=await axios.get(`http://localhost:8000/schooltimetablebyclasses/${classes}/${section}/${school_id}`);
              if(res.data.length===0){
                handleOpen();
              }else{
                settimetable(res.data);
              }
        }catch(err){
          settimetable([]);
          handleOpen();
            return err;
        }
      
    }
    useEffect(()=>{
     getclasses(auth);
     const storedDataString = localStorage.getItem("color-theme");
if (storedDataString) {
  const storedData = JSON.parse(storedDataString);
  console.log(storedData);
}

    },[])
    const onSubmit=(data:any)=>{
      console.log(data);
        gettimetable(data.class,data.section,auth);
       
    }
  return (
      <div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"  style={{width:'100%',margin:'auto',display:'flex',alignItems:'center',justifySelf:'center',gap:'10px',padding:'20px'}} >
        <select  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"  {...register('class',{onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
                   getsectionbyclass(e.target.value,auth);}}) } >
            <option value="">Select Class</option>

       {getclass?.map((el)=>(
          <option value={el.class_name}>
              {el.class_name}
          </option>
       ))}
       
       
      </select>
      <select   className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" color="teal" label="select Class" {...register('section') } >
      <option value="">Select Section</option>

        {section?.map((el)=>(

         <option value={el.section}>{el.section}</option>

        ))}
       
      </select>
      <Button onClick={handleSubmit(onSubmit)} color="green" style={{display:'flex',alignItems:'center',gap:'3px'}}>
        
        <p>Get</p>
       <svg className="h-4 w-4"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/> 
         <circle cx="10" cy="10" r="7" /> 
          <line x1="7" y1="10" x2="13" y2="10" />  
          <line x1="10" y1="7" x2="10" y2="13" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
      </Button>
        </div>
       
         <div style={{marginTop:'10px'}} className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        
        <Button onClick={generatepdf} style={{display:'flex',alignItems:'center',justifyContent:'center',gap:"5px",marginLeft:'auto'}}>
         <svg className="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
          <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 3v4a1 1 0 0 0 1 1h4" />  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  
         <line x1="12" y1="11" x2="12" y2="17" />  <polyline points="9 14 12 17 15 14" /></svg>Download as Pdf</Button>
                <div  style={{width:"100%"}} ref={coverttopdf}  className="max-w-full overflow-x-auto">
          <table style={{marginTop:'10px'}}  className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Class
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                   Section
                  </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Start Day
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                 End Day
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Starting time
                </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Ending time
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Teacher
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                   Subject
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {timetable.length==0?
                <div style={{textAlign:'center',margin:'auto',width:"100%",display:'grid',alignItems:'center',justifyContent:'center',position:'absolute',padding:'20px'}}>
                   <img style={{width:'140px',margin:'auto'}} src={emptyfolder} alt="" />
                 <p className='text-2xl font-bold' style={{textAlign:'center',margin:'auto'}}>No Timetable Found</p>
                 <p style={{textAlign:'center',margin:'auto'}}>Select Class And Section to view Timetable.</p>
                 </div>
             :timetable.map((el,i) => (
                <tr className="text-black dark:text-black" style={{backgroundColor:i%2===0?"#e2e8f0":"white"}} key={el.id}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                      {el.class}
                    </h5>                 
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {el.section}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {el.startday}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {el.endday}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {el.startingtime}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {el.endingtime}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                     <Link to={`/academics/schooltimetable/${el.teacher_id}`}>
                       {el.assign_teacher}</Link>
                     
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {el.subject}
                    </h5>
                  </td>
                 
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <Link to={`/studentdetails/${el.id}`}>
                      <button className="hover:text-primary">
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                            fill=""
                          />
                          <path
                            d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                            fill=""
                          />
                        </svg>
                      </button>
                      </Link>
                    
                      <button className="hover:text-primary">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>

                      </button>
                      <button className="hover:text-primary">
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22227C1.96914 15.2719 1.77227 15.075 1.77227 14.8219V12.3187C1.77227 11.9812 1.49102 11.6719 1.12539 11.6719C0.759766 11.6719 0.478516 11.9531 0.478516 12.3187V14.8219C0.478516 15.7781 1.23789 16.5375 2.19414 16.5375H15.7785C16.7348 16.5375 17.4941 15.7781 17.4941 14.8219V12.3187C17.5223 11.9531 17.2129 11.6719 16.8754 11.6719Z"
                            fill=""
                          />
                          <path
                            d="M8.55074 12.3469C8.66324 12.4594 8.83199 12.5156 9.00074 12.5156C9.16949 12.5156 9.31012 12.4594 9.45074 12.3469L13.4726 8.43752C13.7257 8.1844 13.7257 7.79065 13.5007 7.53752C13.2476 7.2844 12.8539 7.2844 12.6007 7.5094L9.64762 10.4063V2.1094C9.64762 1.7719 9.36637 1.46252 9.00074 1.46252C8.66324 1.46252 8.35387 1.74377 8.35387 2.1094V10.4063L5.40074 7.53752C5.14762 7.2844 4.75387 7.31252 4.50074 7.53752C4.24762 7.79065 4.27574 8.1844 4.50074 8.43752L8.55074 12.3469Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>

              ))}

            </tbody>
          </table>
        </div>
        </div>
        <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        style={{textAlign:'center',margin:'auto',display:'grid',alignItems:'center',width:'200px',padding:'20px'}}
      >
        {/* <DialogHeader style={{textAlign:'center',margin:'auto'}}>Error Message</DialogHeader>
        <DialogBody style={{textAlign:'center',margin:'auto'}} >
        Ensure you fill all required fields
 
        </DialogBody> */}
          <div>
            <h1 className='text-3xl font-bold'>Error Message</h1> 
            <p>
            Ensure you fill all required fields

            </p>
            <Button style={{width:'100px',margin:'10px'}} variant="gradient" color="green" onClick={handleOpen}>
            <span>Ok</span>
          </Button>
          </div>
       
        
      </Dialog>
      </div>

   
  )
}
