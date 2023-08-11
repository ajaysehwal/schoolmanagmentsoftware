import { Card, Input, Button, IconButton } from '@material-tailwind/react';
import { useForm, Controller } from 'react-hook-form';

import { ToastContainer, toast } from 'react-toastify';

import { Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';

import Cookies from 'universal-cookie';
export default function StudentAdmissionform() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const onSubmit = async (data: any) => {
    setload(true);

    if (data.student_name === '') {
      notify('Please enter student name');
    } else if (data.date_of_birth === '') {
      notify('Date of birth is compulsory for register new student');
    } else if (data.admission_no === '') {
      notify('Admission number is compulsory for register new student');
    } else if (data.select_class === '') {
      notify(
        'Please select student class if class is not there click on add button '
      );
    } else if (data.student_document == '' && data.other_document === '') {
      notify('Please add one student doucment as identity');
    } else {
      try {
        const res = await axios.get(
          `http://localhost:8000/apistudents/${data.admission_no}`
        );
        if (res.data.length >= 1) {
          notify('This admission number already present');
        } else {
          const formData = new FormData();
          if (selectedFile1 && selectedFile2 && selectedFile3) {
            formData.append('file1', selectedFile1);
            formData.append('file2', selectedFile2);
            formData.append('file3', selectedFile3);
            formData.append('student_name', data.student_name);
            formData.append('date_of_birth', data.date_of_birth);
            formData.append('father_name', data.father_name);
            formData.append('mother_name', data.mother_name);
            formData.append('mother_tougue', data.mother_tougue);
            formData.append('address', data.address);
            formData.append('nationality', data.nationality);
            formData.append('admission_no', data.admission_no);
            formData.append('gender', data.gender);
            formData.append('religion', data.religion);
            formData.append('city', data.city);
            formData.append('age', data.age);

            formData.append('phone', data.phone);
            formData.append('parents_phone', data.parent_phone);
            formData.append('previous_school_name', data.previous_school_name);
            formData.append(
              'class_in_which_was_studing',
              data.class_in_which_was_studing
            );
            formData.append('email', data.email);
            formData.append('transfer_certificate', data.transfer_certificate);
            formData.append('physical_handicap', data.physical_handicap);
            formData.append('house', data.house);
            formData.append('state', data.state);
            formData.append('admin_token', verified_token);
            formData.append('student_category', data.student_category);
            formData.append('select_class', data.select_class);
            formData.append('section', data.section);

            formData.append('place_birth', data.place_birth);
            formData.append('blood_group', data.blood_group);
            formData.append('dateofleaving', data.dateofleaving);
            formData.append('birth_certificate', data.birth_certificate);
            formData.append(
              'additional_information',
              data.additional_information
            );

            poststudentdata(formData);
            getclasses(verified_token);
            successnotify('Student Successfully Registered');
            setload(false);
          } else {
            console.log('empty files');
            setload(true);
          }
        }
      } catch (err) {
        return err;
        setload(true);
      }
    }
  };

  const poststudentdata = async (formdata: any) => {
    try {
      const res = await axios.post(
        'http://localhost:8000/apistudents',
        formdata
      );

      console.log(res.data);
      getclasses(verified_token);
      successnotify('Student Successfully Registered');
      setload(false);
    } catch (err) {
      setload(true);

      console.log('error', err);
    }
  };
  const cookies = new Cookies();
  const auth = cookies.get('_UID');
  if (!auth) {
    return <Navigate to="/signin" />;
  }
  const verified_token = cookies.get('_UID');
  const [load, setload] = useState(false);
  const [get, getdata] = useState([]);
  const [gethouses, setgethouse] = useState([]);
  const getclasses = async (token: any) => {
    setload(true);
    try {
      const res = await axios.get(
        `http://localhost:8000/studentclasses/${token}`
      );
      getdata(res.data);

      setload(false);
    } catch (err) {
      setload(true);
      console.log('error', err);
    }
  };
  const gethouse = async (token: any) => {
    setload(true);
    try {
      const res = await axios.get(
        `http://localhost:8000/api.studenthouses/${token}`
      );
      setgethouse(res.data);
      setload(false);
    } catch (err) {
      setload(true);
      console.log('error', err);
    }
  };
  useEffect(() => {
    getclasses(verified_token);
    gethouse(verified_token);
  }, []);
  const [section, setsection] = useState([]);
  const getsectionbyclass = async (value: any) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/studentsection/${value}/${verified_token}`
      );
      setsection(res.data);
      setload(false);
    } catch (err) {
      setload(true);
      console.log('error', err);
    }
  };
  return (
    <Card
      style={{ padding: '20px' }}
      className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4"
      color="transparent"
      shadow={false}
    >
      <ToastContainer style={{ zIndex: '999' }}></ToastContainer>
       <p style={{textAlign:'center',marginBottom:'30px'}} className='text-2xl font-bold dark:text-white'>Register New Student</p>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 mb-2 max-w-screen-lg sm:w-96"
        style={{ width: '100%', margin: 'auto' }}
      >
        <div
          style={{ marginTop: '10px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Student name
            </label>
            <input
              placeholder="Enter student name"
              {...register('student_name')}
              type="text"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Date of birth
            </label>
            <input
              placeholder="Enter student date of birth"
              {...register('date_of_birth')}
              type="date"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Father name / Parents
            </label>
            <input
              placeholder="Enter father name"
              {...register('father_name')}
              type="text"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Mother name / Parents
            </label>
            <input
              placeholder="Enter mother name"
              {...register('mother_name')}
              type="text"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Mother Tougue
            </label>
            <input
              placeholder="Enter mother tougue"
              {...register('mother_tougue')}
              type="text"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Full Address
            </label>
            <input
              placeholder="Enter full address"
              {...register('address')}
              type="text"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Nationality
            </label>
            <input
              placeholder="Enter nationality name"
              {...register('nationality')}
              type="text"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Admission no
            </label>
            <input
              placeholder="Enter unique admission number"
              {...register('admission_no')}
              type="number"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Student Age
            </label>
            <input
              placeholder="Enter student age"
              {...register('age')}
              type="number"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Religion
            </label>
            <input
              placeholder="Enter religion name"
              {...register('religion')}
              type="text"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              City name
            </label>
            <input
              placeholder="Enter city name"
              {...register('city')}
              type="text"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>

          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Phone number
            </label>
            <input
              placeholder="Enter phone number"
              {...register('phone')}
              type="number"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Parents phone number
            </label>
            <input
              placeholder="Enter parents phone  number"
              {...register('parent_phone')}
              type="number"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>

          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Previous school name
            </label>
            <input
              placeholder="Enter previous school name"
              {...register('previous_school_name')}
              type="text"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>

          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Class in which was studing
            </label>
            <input
              placeholder="Enter student class in which was studing"
              {...register('class_in_which_was_studing')}
              type="text"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Email Address
            </label>
            <input
              placeholder="Enter student email address"
              {...register('email')}
              type="text"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Select an option
            </label>
            <select
              {...register('transfer_certificate')}
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value="">Transfer certificate</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Select Gender
            </label>
            <select
              {...register('gender')}
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-2">
            <select
              {...register('physical_handicap')}
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value="">Physical Handicap</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <select
              {...register('house')}
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value="">Select House</option>
              {gethouses?.map((el) => (
                <option value={el.house_name}>{el.house_name}</option>
              ))}
            </select>

            <Link to="/studenthouses">
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
          <div className="mb-2">
            <select
            {...register('student_category')}
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
               <option value="">Student Category</option>
              <option value="General">General</option>
              <option value="OBC">OBC</option>
              <option value="SC/ST">SC/ST</option>
              <option value="Other">Other</option>
            </select>
          </div>

       
        
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <select
              {...register('select_class', {
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                  getsectionbyclass(e.target.value);
                },
              })}
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value="">Select Class</option>
              {get?.map((el) => (
                <option value={el.class_name}>{el.class_name}</option>
              ))}
            </select>

            <Link to="/studentclasses">
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
          <select
               {...register('section')}
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value="">Select Section</option>
              {section?.map((el) => (
                <option value={el.section}>{el.section}</option>
              ))}
            </select>
          
            <Link to="/classes_section">
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

          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Place Birth
            </label>
            <input
              placeholder="Enter Place of Birth"
              {...register('place_birth')}
              type="text"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              State
            </label>
            <input
              placeholder="Enter State name"
              {...register('state')}
              type="text"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>

          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Blood Group
            </label>
            <input
              placeholder="Enter Student Blood Group"
              {...register('blood_group')}
              type="text"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Date of Leaving
            </label>
            <input
              placeholder=""
              type="date"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
              {...register('dateofleaving')}
            />
          </div>
          <div>
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Upload Student Document
            </label>
            <input
              className="text-gray-900 border-gray-300 bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full cursor-pointer rounded-lg border text-sm focus:outline-none"
              name="file1"
              onChange={handleFileChange1}
              id="multiple_files"
              type="file"
              multiple
            />
          </div>
          <div>
            <label class="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Select Identity Document
            </label>
            <select
              id="countries"
              {...register('birth_certificate')}
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="dob">Birth Certificate</option>
              <option value="aadhar">Aadhar</option>
              <option value="passport">Passport</option>
            </select>
          </div>

          <div>
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Upload Other Document
            </label>
            <input
              className="text-gray-900 border-gray-300 bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full cursor-pointer rounded-lg border text-sm focus:outline-none"
              name="file2"
              onChange={handleFileChange2}
              id="multiple_files"
              type="file"
              multiple
            />
          </div>
          <div>
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Upload Student Image
            </label>
            <input
              className="text-gray-900 border-gray-300 bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full cursor-pointer rounded-lg border text-sm focus:outline-none"
              name="file3"
              onChange={handleFileChange3}
              id="multiple_files"
              type="file"
              multiple
            />
          </div>

          <div className="mb-2">
            <label className="text-gray-900 mb-2 block text-sm font-medium dark:text-white">
              Additional Information
            </label>
            <input
              {...register('additional_information')}
              type="text"
              id="default-input"
              className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
        </div>

        <Button type="submit" className="mt-6" fullWidth>
          Register
        </Button>
      </form>
    </Card>
  );
}
