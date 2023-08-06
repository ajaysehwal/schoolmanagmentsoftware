import {
    Card,
    Input,
    Button,
    IconButton
  } from '@material-tailwind/react';
 
  import { useForm } from 'react-hook-form';
  import { ToastContainer, toast } from 'react-toastify';
  import { Spinner } from "@material-tailwind/react";

  import { Link,Navigate} from 'react-router-dom';
  import {useEffect, useState} from "react";
  import axios from 'axios';
   
  import Cookies from 'universal-cookie';
  export default function TearcherAdmissionform() {
   

 
   const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [load,setload]=useState(false);
   const cookies = new Cookies();
   const auth=cookies.get('_UID');
   if(!auth){
     return <Navigate to='/signin'/>
   }
   const verified_token = cookies.get('_UID');
   
   const [selectedFile1, setSelectedFile1] = useState<File | null>(null);
   const [selectedFile2, setSelectedFile2] = useState<File | null>(null);
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
 
    

   const handleFileChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile1(event.target.files[0]);
    }
  };

  const handleFileChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile2(event.target.files[0]);
    }
  };

  
  const onSubmit = async (data: any) => {
    //  console.log(data.teacherimage['0'].name)
      setload(true);
    if (selectedFile1 && selectedFile2) {
      const formData = new FormData();
      formData.append('file1', selectedFile1);
      formData.append('file2', selectedFile2);
      formData.append('teacher_name', data.teacher_name);
      formData.append('date_of_birth',data.date_of_birth);
      formData.append('facebook', data.facebook);
      formData.append('twitter', data.twitter);
      formData.append('linkedin', data.linkedin);
      formData.append('gender', data.gender);
      formData.append('address', data.address);
      formData.append('religion', data.religion);
      formData.append('city', data.city);
      formData.append('phone', data.phone);
      formData.append('email', data.email);
      formData.append('martial_status', data.martial_status);
      formData.append('qualification', data.qualification);
      formData.append('role', data.role);
      formData.append('department', data.qualification);
      formData.append('status', data.status);
      formData.append('accountholdername', data.accountholdername);
      formData.append('accountnumber', data.accountnumber);
      formData.append('bankname', data.bankname);
      formData.append('branch', data.branch);
      formData.append('dateofleaving', data.dateofleaving);
      formData.append('googleplus', data.googleplus);
      formData.append('admin_token',verified_token);
   try {
   const response = await axios.post('http://localhost:8000/apiteacher',formData,{
    headers: {
      'Content-Type': 'multipart/form-data',
    },
   });
   console.log(response.data);
     successnotify("Registered Successfully");
       setload(false);
    } catch (error) {
      notify('Something went wrong please try again')
      console.error(error);
    }
  }
  };

    return (
      <Card
        style={{ padding: '20px' }}
        className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4"
        color="transparent"
        shadow={false}
      >
          <ToastContainer></ToastContainer>
         {/* <Link to='/teacherstable'>
        
         <Button style={{display:'flex',alignItems:'center',justifyContent:'right',marginLeft:'auto',gap:"5px"}}>
         <svg className="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24"
          stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
           <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="2" />  
         <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  
         <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" /></svg>View table</Button>
         </Link> */}
       
        <form
          encType="multipart/form-data"
         onSubmit={handleSubmit(onSubmit)}
         method='post'
          className="mt-8 mb-2 max-w-screen-lg sm:w-96"
          style={{ width: '100%', margin: 'auto'}}
        >
          <div
              style={{marginTop:'10px'}}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input'  size="lg" label="Name *"  {...register('teacher_name') }  />
            <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Birthday" type="date" {...register('date_of_birth') }  />
            <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Facebook" type="text" {...register('facebook') }  />
            <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Twitter" type="text"  {...register('twitter') } />
            <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Linkedin" type="text"  {...register('linkedin') }  />


            <select style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' {...register('gender') }  >
              <option value="">Select Gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Other'>Other</option>

            </select>
            <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Address" type='text'   {...register('address') }  />
            <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Religion" type='text'    {...register('religion') }  />
            <Input  className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="City" type='text'   {...register('city') }  />
            <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Phone" type='number'  {...register('phone') } />
                <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Email" type='email'   {...register('email') }  />
            <select style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' {...register('martial_status') }  >
              <option value="">Marital Status</option>
              <option value='Married'>Married</option>
              <option value='Single'>Single</option>
              <option value='Divorced'>Divorced</option>
              <option value='Engaged'>Engaged</option>
              </select>
              <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Qualification" type='text' {...register('qualification') } />

            <select  style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' {...register('role') }  >
              <option value="">Role</option>
              <option value='Subject Teacher'>Subject Teacher</option>
              <option value="Class Teacher">Class Teacher</option>
            </select>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <select style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'  {...register('department') }   >
              <option value="">Select a Department</option>
              <option value="Yes">Yes</option>
              <option value="no">No</option>

            </select>
            <Link to='/teacherdepartment'>
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
            </IconButton></Link>
           
          </div>
            {/* <select  name='student_category' style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' >
              <option value="">Student Category</option>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select> */}
            {/* <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <select style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'  name='select_class'  >
               <option value="">Select Class</option>
                   {get?.map((el)=>(
                      
                        <option value={el.class_name}>{el.class_name}</option>
                       
                     
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
   */}
            <select style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'   {...register('status') }  >
              <option value="">Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">No</option>
            </select>
             <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Account Holder Name" type='text'   {...register('accountholdername') }  />
             <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Account Number" type='text'   {...register('accountnumber') }  />
             <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Bank Name" type='text'  {...register('bankname') }  />
             <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Branch" type='text' {...register('branch') } />
             <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Date of Leaving" type='text'   {...register('dateofleaving') }  />
             <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Googleplus" type='text'  {...register('googleplus') }   />
             <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Teacher files" type='file'  onChange={handleFileChange1} name='file1' />

            <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Teacher Image" type='file' onChange={handleFileChange2}  id='teacherimage' name='file2'  multiple />
  
            
          </div>
  
          <Button type='submit' className="mt-6" fullWidth>
              {load?<Spinner style={{margin:'auto'}}  className="h-6 w-6"/>:"Register"}     
          </Button>
        </form>
      </Card>
    );
  }
  