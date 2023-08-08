import React from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Select,
  Option,
  Typography,
} from '@material-tailwind/react';
import { ToastContainer, toast } from 'react-toastify';

import { useForm } from 'react-hook-form';

import { useState ,useEffect} from 'react';
import { IconButton } from '@material-tailwind/react';
import axios from 'axios';
import Cookies from 'universal-cookie';
export default function Excelupload() {
  const [selectedFile1, setSelectedFile1] = useState<File | null>(null);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const successnotify = (text: string) =>
  toast.success(text, {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
  const notify = (text: string) =>
  toast.error(text, {
    position:'bottom-center',
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
 
  const handleFileChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile1(event.target.files[0]);
    }
  };
          const Onsubmit=(data:any)=>{
           
             if(selectedFile1){
              const formData=new FormData();
               formData.append('file',selectedFile1);
               formData.append('admin_token',auth);
               formData.append('class',data.class);
               formData.append('section',data.section);
                  postexcelfile(formData);
             }else{
                notify("Please Upload Excel File Only")
             }
           
          }
          const postexcelfile=async(data:any)=>{
             try{
              const res=await axios.post('http://localhost:8000/apiexceldata',data,{
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
               successnotify('New student list successfully added')
             }catch(err){
               notify('Please Upload Excel File Only');
              return err;
             }
          }
          const [classes, setgetclasses] = useState([]);
  const [section,setsection]=useState([]);
const [load,setload]=useState(false);
  const getclasses = async (token: any) => {
    setload(true);
    try {
      const res = await axios.get(
        `http://localhost:8000/studentclasses/${token}`
      );
      setgetclasses(res.data);

      setload(false);
    } catch (err) {
      setload(true);
      console.log('error', err);
    }
  };
  const getsectionbyclass=async(value:any,verified_token:any)=>{
    try{
      const res=await axios.get(`http://localhost:8000/studentsection/${value}/${verified_token}`);
        setsection(res.data)

      
    }catch(err){
     
       console.log("error",err);
    }
  }
 
  useEffect(() => {
    getclasses(auth);
  }, []);
  return (
    <div>
      {/*  */}
      <form  style={{ display: 'grid', gap: '10px' }} method="post" encType="multipart/form-data" onSubmit={handleSubmit(Onsubmit)}>
      <ToastContainer></ToastContainer>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          
        <select  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"  
        {...register('class',{onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
                   getsectionbyclass(e.target.value,auth);}}) } >
            <option value="">Select Class</option>

       {classes?.map((el)=>(
          <option value={el.class_name}>
              {el.class_name}
          </option>
       ))}
       
       
      </select>
          <IconButton className="rounded-full">
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
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <select   className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" color="teal" {...register('section') } >
      <option value="">Select Section</option>

        {section?.map((el)=>(

         <option value={el.section}>{el.section}</option>

        ))}
       
      </select>
          <IconButton  className="rounded-full">
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
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload excel file only</label>
<input onChange={handleFileChange1} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
<p className="mt-1 text-sm text-red-500 dark:text-red-300" id="file_input_help">* Please follow proper sequences of excel data</p>

        <Button
          type="submit"
          className="mt-6"
          fullWidth
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: 'auto',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
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
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          Upload
        </Button>
      </form>
    </div>
 
  );
}
