import {
  Card,
  Input,
  Button,
  IconButton
} from '@material-tailwind/react';

import { Link } from 'react-router-dom';
import { Select, Option } from '@material-tailwind/react';
import {useState} from "react";
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
    student_docuemnt:string;
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
      student_docuemnt:"",
      birth_certificate:"",
      student_image:"",
      additional_information:"",
      other_document:"",
      }
  })

  const handlechange=(e)=>{
    setdata({
      Allstudentdata:{
        ...data.Allstudentdata,
        [e.target.name]:e.target.value,
      }
     })
  }
 const handlesubmit=(e:React.FormEvent<HTMLFormElement>)=>{
   e.preventDefault();

 }
 console.log(data);
  return (
    <Card
      style={{ padding: '20px' }}
      className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4"
      color="transparent"
      shadow={false}
    >
      <form
      onSubmit={handlesubmit}
        className="mt-8 mb-2 max-w-screen-lg sm:w-96"
        style={{ width: '100%', margin: 'auto' }}
      >
        <div
          
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <Input size="lg" label="Full Name" name='student_name' onChange={handlechange} />
          <Input size="lg" label="Birthday" type="date" name='date_of_birth' onChange={handlechange} />
          <Input size="lg" label="Father name / Parent" type="text"  name='father_name' onChange={handlechange}/>
          <Input size="lg" label="Mother name / Parent" type="text" name='mother_name'onChange={handlechange} />

          <Input size="lg" label="Mother tougue"  name='mother_tougue' type='text' onChange={handlechange} />
          <Input size="lg" label="Address" type='text' onChange={handlechange} name='address' />
          <Input size="lg" label="Nationality" type='text' onChange={handlechange} name='nationality'/>
          <Input size="lg" label="Admission no" type="number" onChange={handlechange} name='admission_no' />
          <Input size="lg" label="Age" type="number" onChange={handlechange} name='age'  />
          <Input size="lg" label="Religion" type='text' onChange={handlechange} name='religion' />
          <Input size="lg" label="City" type='text' onChange={handlechange} name='city' />
          <Input size="lg" label="Phone" type='number' onChange={handlechange} name='phone'/>
          <Input size="lg" label="Previous school name" type='text' onChange={handlechange} name='previous_school_name'/>
          <Input size="lg" label="Class in which was studing"  name='class_in_which_was_studing' type='text' onChange={handlechange}  />
          <Input size="lg" label="Email" type='email' onChange={handlechange} name='email' />
          <Select variant="outlined" name='transfer_certificate' label="Transfer certificate" onChange={handlechange}>
            <Option value='Yes'>Yes</Option>
            <Option value='No'>No</Option>
          </Select>
          <Select variant="outlined" label="Physical handicap" name='physical_handicap' onChange={handlechange}>
            <Option value='Yes'>Yes</Option>
            <Option value="No">No</Option>
          </Select>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Select variant="outlined" size="lg" name='house'  label="Select House" onChange={handlechange}>
            <Option value='Yes'>Yes</Option>
            <Option value='Yes'>No</Option>
          </Select>
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
          <Select variant="outlined" name='house' label="Student category" onChange={handlechange}>
            <Option value='Yes'>Yes</Option>
            <Option value='No'>No</Option>
          </Select>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Select variant="outlined" size="lg" name='select_class'  label="Select class" onChange={handlechange}>
            <Option value="Yes">Yes</Option>
            <Option value='No'>No</Option>
          </Select>
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
          <Input size="lg" label="Place birth" name="place_birth" type='text'  onChange={handlechange} />
          <Input size="lg" label="State" type='text'  onChange={handlechange} name='state' />
          <Input size="lg" label="Blood group" type='text'  onChange={handlechange} name='blood_group' />
          <Input size="lg" label="Date of Leaving" type="date"  onChange={handlechange} name='dateofleaving' />
          <Input size="lg" label="Student Document" type="file"  onChange={handlechange} name='student_document'/>

          <Select variant="outlined" label="Bith certificate"  onChange={handlechange} name='birth_certificate'>
            <Option value="Yes">Yes</Option>
            <Option value="No">No</Option>
          </Select>
          <Input size="lg" label="Other Document" type="file" name='other_document'  onChange={handlechange}/>
          <Input size="lg" label="Student Image" type='file' name='student_image'  onChange={handlechange} />
          <Input size="lg" label="Additional Information" type='text' name='additional_information'  onChange={handlechange} />

          
        </div>

        <Button type='submit' className="mt-6" fullWidth>
        Register
        </Button>
      </form>
    </Card>
  );
}
