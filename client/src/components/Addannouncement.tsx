import React from 'react'
import { useForm } from 'react-hook-form'
import { Textarea,Input ,Button} from "@material-tailwind/react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';



import Cookies from 'universal-cookie';
export default function Addannouncement() {
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
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
  const notify = (text: string) =>
  toast.error(text, {
    position:'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
const onSubmit=async(data:any)=>{
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
     const res=await axios.post('http://localhost:8000/schoolannouncement',send);
     console.log(res);
     successnotify("Announcement created")
  
    }catch(err){
      
      return err
    }
  }
 

}
  return (
    <div style={{padding:'20px'}} className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <p className='text-2xl font-bold text-center ' >Add Announcement</p>
 <ToastContainer></ToastContainer>
      <form action="" style={{width:'60%',margin:'auto',padding:'10px'}}>
          <div style={{marginBottom:'10px'}}>
        
          </div>
          <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Heading of Announcement</label>
    <input  {...register('heading')}  type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter heading'/>
</div>
    <div  style={{marginBottom:'10px'}}>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea id="message"  {...register('notice')} rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Start Writing new Announcement..."></textarea>
    </div>
     
     <Button onClick={handleSubmit(onSubmit)} >Add Announcement</Button>
      </form>
        
    </div>
  )
}
