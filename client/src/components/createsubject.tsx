import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {useState,useEffect} from "react";
import { useForm } from 'react-hook-form';
import {Spinner} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { IconButton } from '@material-tailwind/react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Subjectlist from './subjectlist';
export default function Createsubject() {
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
    const cookies = new Cookies();
    const auth=cookies.get('_UID');
    const [load,setload]=useState(false);
    const [listload,setlistload]=useState(false);
    const {register,handleSubmit,watch,formState:{errors}}=useForm();

    const [getclass,setgetclasses]=useState([]);
    const getclasses=async(token:any)=>{
        setload(true)
        try{
          const res=await axios.get(`http://localhost:8000/studentclasses/${token}`);
            setgetclasses(res.data);
                console.log(res.data);
          setload(false);
        }catch(err){
          setload(true);
           console.log("error",err);
        }
      }
      useEffect(()=>{
      getclasses(auth);
      getsubjectsdata("",auth);
      },[]);
    const onSubmit=async(data:any)=>{
       if(data.subject===''){
          notify('Please enter subject name');
       }else{
          if(data.class==''){
             notify('Please select class');
          }else{
            try{
              const res=await axios.post('http://localhost:8000/schoolsubjects',data);
                console.log(res);
                getsubjectsdata(data.class,auth);
                successnotify('New Subject Successfully Added');
             }catch(err){
                notify('Please try again')
              return err;
             }
          }
       }
    }
    const [getsubjects,setgetsubjects]=useState([]);
    const getsubjectsdata=async(classes:any,user_id:any)=>{
         setlistload(true)
      try{
        const res=await axios.get(`http://localhost:8000/schoolsubjects/${classes}/${user_id}`);
          console.log(res);
          setgetsubjects(res.data);
          setlistload(false);
       }catch(err){
        setload(false);
        return err;
       }

    }
  return (
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
           <div className="flex flex-col gap-9">
           <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3
                style={{ display: 'flex', alignItems: 'center', gap: '1px' }}
                className="font-medium text-black dark:text-white"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: '25px' }}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  ></path>
                </svg>{' '}
                Add Subjects
              </h3>
            </div>
            <form 
             encType="multipart/form-data"
             method='post'
              onSubmit={handleSubmit(onSubmit)}
              style={{ width: '100%', margin: 'auto'}}
             >

              <div className="p-6.5"> 
              <input type="hidden" {...register('admin_id')} value={auth}  />
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div style={{display:'flex',alignItems:'center',gap:'5px'}} className="w-full xl:w-10/12">
                  <select {...register('class')} style={{border:'1px solid rgb(176,190,197)'}}  className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'  >
             <option value="">Select Class</option>
                 {getclass?.map((el)=>(
                    
                      <option key={el.id} value={el.class_name}>{el.class_name}</option>
                     
                   
                 ))}
        
          </select>
          <Link to='/studentclasses'>
          <IconButton className="rounded-full" fullWidth>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </IconButton>
          </Link>
                   
                  </div>
                </div>
                <div className="w-full xl:w-10/12">
                  <label className="mb-2.5 block text-black dark:text-white">
                  Subject Name
                  </label>
                  <input
                    type="text"
                    {...register('subject')}
                    placeholder="Eg: Math, Science, History"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <ToastContainer></ToastContainer>

                <button
                  type='submit'
                  style={{ marginTop: '10px' }}
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
           </div>
      
    

        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div
              className="border-b border-stroke py-4 px-6.5 dark:border-strokedark"
              style={{ display: 'flex', alignItems: 'center', gap: '50px' }}
            >
              <h3
                style={{ display: 'flex', alignItems: 'center', gap: '1px' }}
                className="font-medium text-black dark:text-white"
              >
                <svg
                  style={{ width: '25px' }}
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  ></path>
                </svg>
                List
              </h3>
              <select style={{border:'1px solid rgb(176,190,197)'}}  {...register('classes',{
                    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
                      getsubjectsdata(e.target.value,auth);
                    }
                   }) }  className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' >
             <option value="">Select Class</option>
                 {getclass.length==0?"Empty":getclass.map((el)=>(
                    
                      <option value={el.class_name}>{el.class_name}</option>
                     
                   
                 ))}
        
          </select>
              {/* <Input size="lg" value={filterval} label="Search" name='text' onInput={(e)=>searchbarchange(e)} /> */}
            </div>
            <Subjectlist data={[getsubjects,getclasses,listload]}/>
          </div>
        </div>
      
    </div>
  )
}
