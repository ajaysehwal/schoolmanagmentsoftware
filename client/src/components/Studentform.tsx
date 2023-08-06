import {
  Card,
  Input,
  Button,
  IconButton
} from '@material-tailwind/react';
import { useForm, Controller} from 'react-hook-form';

import { ToastContainer, toast } from 'react-toastify';

import { Link,Navigate } from 'react-router-dom';
import {useEffect, useState} from "react";

import axios from 'axios';

import Cookies from 'universal-cookie';
export default function StudentAdmissionform() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [selectedFile1, setSelectedFile1] = useState<File | null>(null);
   const [selectedFile2, setSelectedFile2] = useState<File | null>(null);
   const [selectedFile3, setSelectedFile3] = useState<File | null>(null);
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
  const handleFileChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile3(event.target.files[0]);
    }
  };

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
 
    

  
  const onSubmit = async (data: any) => {
    setload(true)
     
    if(data.student_name===''){
      notify("Please enter student name");
    }else if(data.date_of_birth===''){
      notify('Date of birth is compulsory for register new student')
    }else if(data.admission_no===''){
      notify('Admission number is compulsory for register new student');
    }else if(data.select_class===''){
         notify('Please select student class if class is not there click on add button ')
    }else if(data.student_document==''&&data.other_document===''){
      notify('Please add one student doucment as identity');
    }else{
          try{
             const res=await axios.get(`http://localhost:8000/apistudents/${data.admission_no}`);
                if(res.data.length>=1){
                   notify('This admission number already present');
                }else{
                  const formData=new FormData();
                  if(selectedFile1&&selectedFile2&&selectedFile3){
                  formData.append('file1',selectedFile1);
                  formData.append('file2',selectedFile2);
                  formData.append('file3',selectedFile3);
                  formData.append('student_name',data.student_name);
                  formData.append('date_of_birth',data.date_of_birth)
                  formData.append('father_name',data.father_name)
                  formData.append('mother_name',data.mother_name)
                  formData.append('mother_tougue',data.mother_tougue)
                  formData.append('address',data.address)
                  formData.append('nationality',data.nationality)
                  formData.append('admission_no',data.admission_no)
                  formData.append('gender',data.gender)
                  formData.append('religion',data.religion)
                  formData.append('city',data.city)
                  formData.append('age',data.age)

                  formData.append('phone',data.phone)
                  formData.append('parents_phone',data.parent_phone)
                  formData.append('previous_school_name',data.previous_school_name)
                  formData.append('class_in_which_was_studing',data.class_in_which_was_studing)
                  formData.append('email',data.email)
                  formData.append('transfer_certificate',data.transfer_certificate)
                  formData.append('physical_handicap',data.physical_handicap)
                  formData.append('house',data.house)
                  formData.append('state',data.state)
                  formData.append('admin_token',verified_token)
                  formData.append('student_category',data.student_category)
                  formData.append('select_class',data.select_class)
                  formData.append('section',data.section)

                  formData.append('place_birth',data.place_birth)
                  formData.append('blood_group',data.blood_group)
                  formData.append('dateofleaving',data.dateofleaving)
                  formData.append('birth_certificate',data.birth_certificate)
                  formData.append('additional_information',data.additional_information)

                  poststudentdata(formData) 
                  getclasses(verified_token);
                  successnotify("Student Successfully Registered")
                  setload(false);

                  }else{
                    console.log("empty files")
                    setload(true)
                  }

                }
          }catch(err){
            return err
            setload(true)

          }
    }
  }

 const poststudentdata=async(formdata:any)=>{
  try{
      const res=await axios.post('http://localhost:8000/apistudents',formdata);
            
         console.log(res.data);
         getclasses(verified_token);
         successnotify("Student Successfully Registered")
         setload(false);
    }catch(err){
      setload(true);
     
       console.log("error",err);
    }
 }
 const cookies = new Cookies();
 const auth=cookies.get('_UID');
 if(!auth){
   return <Navigate to='/signin'/>
 }
 const verified_token = cookies.get('_UID');
 const [load,setload]=useState(false);
 const [get,getdata]=useState([])
 const [gethouses,setgethouse]=useState([]);
 const getclasses=async(token:any)=>{
  setload(true)
  try{
    const res=await axios.get(`http://localhost:8000/studentclasses/${token}`);
      getdata(res.data);
        
    setload(false);
  }catch(err){
    setload(true);
     console.log("error",err);
  }
}
const gethouse=async(token:any)=>{
  setload(true)
  try{
    const res=await axios.get(`http://localhost:8000/api.studenthouses/${token}`);
       setgethouse(res.data);
    setload(false);
  }catch(err){
    setload(true);
     console.log("error",err);
  }
}
useEffect(()=>{
  getclasses(verified_token)
  gethouse(verified_token);
},[]);
const [section,setsection]=useState([]);
const getsectionbyclass=async(value:any)=>{
  try{
    const res=await axios.get(`http://localhost:8000/studentsection/${value}/${verified_token}`);
      setsection(res.data)
    setload(false);
  }catch(err){
    setload(true);
     console.log("error",err);
  }
}
  return (
    <Card
      style={{ padding: '20px' }}
      className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4"
      color="transparent"
      shadow={false}
    >
      <ToastContainer style={{zIndex:"999"}}></ToastContainer>
       <Link to='/students/detailtable'>
       <Button style={{display:'flex',alignItems:'center',justifyContent:'right',marginLeft:'auto',gap:"5px"}}>
         <svg className="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24"
          stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
           <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="2" />  
         <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  
         <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" /></svg>View table</Button>
       </Link>
    
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}

        className="mt-8 mb-2 max-w-screen-lg sm:w-96"
        style={{ width: '100%', margin: 'auto' }}
      >
        <div
             style={{marginTop:'10px'}}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input'  size="lg" label="Full Name" {...register('student_name') }  />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Birthday" type="date" {...register('date_of_birth') } />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Father name / Parent" type="text" {...register('father_name') }/>
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Mother name / Parent" type="text" {...register('mother_name') } />

          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Mother tougue"   type='text' {...register('mother_tougue') } />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Address" type='text' {...register('address') } />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input'  size="lg" label="Nationality" type='text'  {...register('nationality') }/>
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Admission no" type="number" {...register('admission_no') } />
          <Input  className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Age" type="number" {...register('age') } />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Religion" type='text' {...register('religion') } />
          <Input  className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="City" type='text' {...register('city') } />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Phone" type='number' {...register('phone') }  />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Parent Phone" type='number' {...register('parent_phone') } />

          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Previous school name" type='text' {...register('previous_school_name') }  />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Class in which was studing"  type='text'  {...register('class_in_which_was_studing') }  />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Email" type='email'  {...register('email') }  />
          <select style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'  {...register('transfer_certificate') } >
            <option value="">Transfer certificate</option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>
          <select style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'  {...register('gender') } >
            <option value="">Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value="other">Other</option>
          </select>
          <select  style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' {...register('physical_handicap') }>
            <option value="">Physical Handicap</option>
            <option value='Yes'>Yes</option>
            <option value="No">No</option>
          </select>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <select style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' {...register('house') } >
            <option value="">Select House</option>
            {gethouses?.map((el)=>(
                    
                    <option value={el.house_name}>{el.house_name}</option>
                   
                 
               ))}
          </select>
          <Link to='/studenthouses'>
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
          <select   {...register('student_category') } style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' >
            <option value="">Student Category</option>
            <option value='General'>General</option>
            <option value='OBC'>OBC</option>
            <option value='SC/ST'>SC/ST</option>
            <option value='Other'>Other</option>

            <option value='No'>No</option>
          </select>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          
          <select  style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' {...register('select_class',{
            
          onChange: (e:React.ChangeEvent<HTMLInputElement>) => {
          getsectionbyclass(e.target.value);
          }
          })} >
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <select style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' {...register('section') } >
             <option value="">Select Section</option>
                 {section?.map((el)=>(
                    
                      <option value={el.section}>{el.section}</option>
                     
                   
                 ))}
        
          </select>
          <Link to='/classes_section'>
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
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Place birth"  {...register('place_birth') } type='text'   />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="State" type='text' {...register('state') }   name='state' />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Blood group" type='text'    {...register('blood_group') } />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Date of Leaving" type="date" {...register('dateofleaving') }  />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Student Document" type="file" name="file1" onChange={handleFileChange1} />

          <select style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' {...register('birth_certificate') } >
            <option value="">Birth Certificate</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Other Document" type="file" name='file2' onChange={handleFileChange2}  multiple  />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Student Image" type='file' name='file3' onChange={handleFileChange3}  multiple  />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Additional Information" type='text' {...register('additional_information') }   />

          
        </div>

        <Button type='submit' className="mt-6" fullWidth>
        Register
        </Button>
      </form>
    </Card>
  );
}
