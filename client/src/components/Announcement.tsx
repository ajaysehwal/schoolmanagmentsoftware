import React, { useEffect, useState } from 'react'
import { Button, Spinner } from '@material-tailwind/react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'

import {

  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography
 
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { ToastContainer, toast } from 'react-toastify';

import axios from 'axios'
import Cookies from 'universal-cookie'
export default function Announcement() {
  const cookies = new Cookies();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [viewdataheading,setviewdataheading]=useState('');
  const [viewdatanotice,setviewdatanotice]=useState('');
  const [open3, setOpen3] = React.useState(false);
 
  const handleOpen3 = (Key:any) =>{
    setOpen3(true)
    getdatabyid_for_view(auth,Key);
    console.log(viewdataheading);
  } 
  const close3=()=>{
    setOpen3(false);
  }
 
  const notify = (text: string) =>
    toast.error(text, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
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
  const [open1, setOpen1] = React.useState(false);
  const [open,setOpen]=useState(false);
  const [keyupdate,setkeyupdate]=useState(false);
  const [pastdataheading,setpastdataheading]=useState('')
  const [pastdatanotice,setpastdatanotice]=useState('')

  const auth = cookies.get('_UID');

  const handleOpen=(key:any)=>{
    setOpen(true);
   
    getdatabyid(auth,key);
    setkeyupdate(key)
  }
  const close0=()=>{
    setOpen(false);
  }
   const [key,setkey]=useState(0);
  const handleOpen1 = (key:any) =>{
    setOpen1(true);
    
    setkey(key);
  }
  const close=()=>{
    setOpen1(false)
  }
   
  const sendkeytobox=async(Key:any)=>{
     try{
         const res=await axios.delete(`http://localhost:8000/schoolannouncement/${Key}`);
         if(res.status===200){
          successnotify('Delete Successfully');
          close();
          getdata(auth);
         }else{
          notify("Something went wrong please try again later");

         }
         
              
     }catch(err){
      return err;
     }
  }
 
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
  const getdatabyid=async(auth:any,id:any)=>{
  
   
      try{
     const res=await axios.get(`http://localhost:8000/schoolannouncement/${auth}/${id}`);
      const data=res.data[0];
      
      setpastdataheading(data.heading);
      setpastdatanotice(data.notice);

      
      }catch(err){
        return err;
      }
  }
  const getdatabyid_for_view=async(auth:any,id:any)=>{
  
   
    try{
   const res=await axios.get(`http://localhost:8000/schoolannouncement/${auth}/${id}`);
    const data=res.data[0];
     setviewdataheading(data.heading);
     setviewdatanotice(data.notice);
  

    
    }catch(err){
      return err;
    }
}
  const OnSubmit=async(data:any)=>{
    console.log(data);
    if(data.heading===''&& data.notice===''){
      notify("All input fields are required");
   }else{
     const cookies = new Cookies();
     const auth=cookies.get('_UID');
     const date = new Date();
     const formattedDate = date.toDateString();
     const send={
       heading:data.heading,
       notice:data.notice,
       date:formattedDate,
       school_id:auth
     }
     try{
      const res=await axios.put(`http://localhost:8000/schoolannouncement/${keyupdate}`,send);
      console.log(res);
      if(res.status===200){
        getdata(auth)
        setpastdataheading('');
        setpastdatanotice('');
        successnotify("Announcement Successfully Updated")
        close0();

      }else{
        notify("Something went wrong please try again later");
      }
   
     }catch(err){
       
       return err
     }
    }
  }
 
  return (
     <div>
      <Link to='/operations/announcement/addnew_announcement'>
      <Button  style={{marginBottom:'10px'}}>Add New Announcement</Button>
      </Link>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
          {data?.map((el)=>(
           
        
           <div key={el.id} className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                 <div className='p-5'>
                   <div style={{display:'flex',alignItems:'center' ,gap:'5px'}}>
                     <div style={{display:'flex'}} >
                     <p  style={{fontSize:'20px',overflow:'hidden',height:'25px',width:'90%'}} className='font-semibold'>
                  {el.heading}
                  </p> 
                     </div>

                
                       <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                       <svg onClick={()=>handleOpen(el.id)} style={{cursor:'pointer'}} className="h-6 w-6 text-blue-600"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" /> 
                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
                        <svg  onClick={()=>handleOpen1(el.id)}  style={{cursor:'pointer'}} className="h-6 w-6 text-red-600"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                       </div>
                   </div>
                
                  <br />
                   <div >
                      <div style={{borderLeft:'5px solid silver',padding:'10px',height:'300px',overflow:'hidden',overflowY:"auto"}}>
                      {el.notice}
                      </div>
                  
                    <p onClick={()=>handleOpen3(el.id)}  className='text-blue-500 font-semibold' style={{display:'flex',alignItems:'center',gap:'3px',cursor:'pointer'}}>
                    <svg className="h-5 w-5 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>
                      <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                        Read announcement</p>

                   </div>
                 </div>
           </div>
             ))}
              <ToastContainer></ToastContainer>


      </div>
      <Dialog
        className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
        open={open1}
        handler={handleOpen1}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="mb-2.5 block text-black dark:text-white">Delete Confirmation</DialogHeader>
        <DialogBody divider>
         Are you sure you want to delete ?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="blue"
            onClick={close}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="red" onClick={()=>sendkeytobox(key)}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <Dialog   className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
 open={open} handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="mb-2.5 block text-black dark:text-white">Edit Announcement</DialogHeader>
          <XMarkIcon className="mr-3 h-5 w-5" onClick={close0} />
        </div>
        <DialogBody divider>
          <div className="grid gap-6">
            <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title of Announcement</label>
    <input type="text" value={pastdataheading} {...register('heading',{
                    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
                    setpastdataheading(e.target.value);
                  }
                   })} id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea value={pastdatanotice} id="message" {...register('notice',{
                    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
                    setpastdatanotice(e.target.value);
                  }
                   })}  rows="10" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Start writing announcement message..."/>
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="red" onClick={close0}>
            close
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit(OnSubmit)}>
            Edit
          </Button>
        </DialogFooter>
      </Dialog>
      <Dialog className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1" open={open3} handler={handleOpen3}>
     
<div className="flex items-center justify-between">
          <DialogHeader className="mb-2.5 block text-black dark:text-white">{viewdataheading}</DialogHeader>
          <XMarkIcon className="mr-3 h-6 w-6 text-black dark:text-white" onClick={close3} />
        </div>
        <DialogBody divider className="h-[40rem] overflow-scroll">
        <Typography className="font-normal dark:text-whiten">
         {viewdatanotice}
        </Typography>
        </DialogBody>
     
        </Dialog>
     </div>
 
   
  )
}
