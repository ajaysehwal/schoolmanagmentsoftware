import {
  Card,
  Input,
  Button,
  IconButton
} from '@material-tailwind/react';

import { Link,Navigate } from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from 'axios';
import Cookies from 'universal-cookie';
export default function StudentAdmissionform() {
  interface studentdata{
    Allstudentdata:{
    student_name:string;
    date_of_birth:string;
    father_name:string;
    mother_name:string;
    mother_tougue:string;
    address:string;
    nationality:string;
    admission_no:string;
    age:string;
    religion:string;
    city:string;
    phone:number;
    parents_phone:number;
    previous_school_name:string;
    class_in_which_was_studing:string;
    email:string;
    transfer_certificate:string;
    physical_handicap:string;
    house:string;
    student_category:string;
    select_class:string;
    place_birth:string;
    state:string;
    blood_group:string;
    dateofleaving:string;
    student_document:string;
    birth_certificate:string;
    student_image:string;
    additional_information:string;
    other_document:string;
    }
  }
  const [data,setdata]=useState<studentdata>({
    Allstudentdata:{
      student_name:"",
      date_of_birth:"",
      father_name:"",
      mother_name:"",
      mother_tougue:"",
      address:"",
      nationality:"",
      admission_no:"",
      age:"",
      religion:"",
      city:"",
      phone:0,
      parents_phone:0,
      previous_school_name:"",
      class_in_which_was_studing:"",
      email:"",
      transfer_certificate:"",
      physical_handicap:"",
      house:"",
      student_category:"",
      select_class:"",
      place_birth:"",
      state:"",
      blood_group:"",
      dateofleaving:"",
      student_document:"",
      birth_certificate:"",
      student_image:"",
      additional_information:"",
      other_document:"",
      }
  })

  const handlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setdata({
      Allstudentdata:{
        ...data.Allstudentdata,
        [e.target.name]:e.target.value,
      }
     })
     
  }
 const handlesubmit=(e:React.FormEvent<HTMLFormElement>)=>{
   e.preventDefault();
   const formdata=data.Allstudentdata;
         poststudentdata(formdata) 
 }
 const poststudentdata=async(formdata:any)=>{
  setload(true)
  try{
      const res=await axios.post('http://localhost:8000/apistudents',formdata);
            
         console.log(res.data);
         getclasses(verified_token);
         setload(false);
    }catch(err){
      setload(true);
     
       console.log("error",err);
    }
 }
 console.log(data);
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
  return (
    <Card
      style={{ padding: '20px' }}
      className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4"
      color="transparent"
      shadow={false}
    >
      <form
        encType="multipart/form-data"
      onSubmit={handlesubmit}
        className="mt-8 mb-2 max-w-screen-lg sm:w-96"
        style={{ width: '100%', margin: 'auto' }}
      >
        <div
          
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input'  size="lg" label="Full Name" name='student_name' onChange={handlechange} />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Birthday" type="date" name='date_of_birth' onChange={handlechange} />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Father name / Parent" type="text"  name='father_name' onChange={handlechange}/>
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Mother name / Parent" type="text" name='mother_name'onChange={handlechange} />

          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Mother tougue"  name='mother_tougue' type='text' onChange={handlechange} />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Address" type='text' onChange={handlechange} name='address' />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input'  size="lg" label="Nationality" type='text' onChange={handlechange} name='nationality'/>
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Admission no" type="number" onChange={handlechange} name='admission_no' />
          <Input  className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Age" type="number" onChange={handlechange} name='age'  />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Religion" type='text' onChange={handlechange} name='religion' />
          <Input  className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="City" type='text' onChange={handlechange} name='city' />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Phone" type='number' onChange={handlechange} name='phone'/>
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Parent Phone" type='number' onChange={handlechange} name='parents_phone'/>

          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Previous school name" type='text' onChange={handlechange} name='previous_school_name'/>
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Class in which was studing"  name='class_in_which_was_studing' type='text' onChange={handlechange}  />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Email" type='email' onChange={handlechange} name='email' />
          <select style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' name='transfer_certificate' onChange={handlechange}>
            <option value="">Transfer certificate</option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>
          <select  style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' name='physical_handicap' onChange={handlechange}>
            <option value="">Physical Handicap</option>
            <option value='Yes'>Yes</option>
            <option value="No">No</option>
          </select>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <select style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' name='house'  onChange={handlechange}>
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
          <select  name='student_category' style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' onChange={handlechange}>
            <option value="">Student Category</option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <select style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'  name='select_class'  onChange={handlechange}>
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
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Place birth" name="place_birth" type='text'  onChange={handlechange} />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="State" type='text'  onChange={handlechange} name='state' />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Blood group" type='text'  onChange={handlechange} name='blood_group' />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Date of Leaving" type="date"  onChange={handlechange} name='dateofleaving' />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Student Document" type="file"  onChange={handlechange} name='student_document'/>

          <select style={{border:'1px solid rgb(176,190,197)'}} className='w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'  onChange={handlechange} name='birth_certificate'>
            <option value="">Birth Certificate</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Other Document" type="file" name='other_document' multiple  onChange={handlechange}/>
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Student Image" type='file' name='student_image'  multiple onChange={handlechange} />
          <Input className='w-full rounded-lg bg-transparent py-2 pl-6 pr-10 outline-none focus-visible:shadow-none dark:bg-form-input' size="lg" label="Additional Information" type='text' name='additional_information'  onChange={handlechange} />

          
        </div>

        <Button type='submit' className="mt-6" fullWidth>
        Register
        </Button>
      </form>
    </Card>
  );
}
