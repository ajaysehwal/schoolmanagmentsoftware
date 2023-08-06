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

import { useState } from 'react';
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
               console.log(res.data)
             }catch(err){
               notify('Please Upload Excel File Only');
              return err;
             }
          }
  return (
    <div>
      {/*  */}
      <form  style={{ display: 'grid', gap: '10px' }} method="post" encType="multipart/form-data" onSubmit={handleSubmit(Onsubmit)}>
      <ToastContainer></ToastContainer>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          
          <Select variant="outlined" label="Select class"  {...register('class') }>
            <Option>Yes</Option>
            <Option>No</Option>
          </Select>
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
          <Select variant="outlined" label="Select section"  {...register('section') } >
            <Option>Yes</Option>
            <Option>No</Option>
          </Select>
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
        <Input  size="lg" label="Select excel file only"  name='file' type="file" onChange={handleFileChange1} />

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
