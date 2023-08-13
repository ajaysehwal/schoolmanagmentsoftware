import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Cookies from 'universal-cookie';
import { ToastContainer, toast } from 'react-toastify';
import {Spinner} from "@material-tailwind/react";
import { Navigate } from 'react-router-dom';
import axios from 'axios';
export default function LoginLoadingpage() {
  const notify = (text:string) =>
  toast.warning(text, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
  const searchParams = new URLSearchParams(window.location.search);
  const register_token = searchParams.get('id') || null;
  const cookies = new Cookies();
  const verified_token = cookies.get('_VU');

  if (verified_token != register_token) {
    notify('Session expired please verify your email');
    return <Navigate to="/signup" />;
  } 
  const [emailmess, setemailmess] = useState({
    schoolname: '',
    schoolurl: '',
    email: '',
  });
  const [emailmess1, setemailmess1] = useState({
    admin_name: '',
    admin_email: '',
    admin_password: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setemailmess((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleChange1 = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setemailmess1((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const admindata = async (token: any) => {
    try {
      const res = await axios.get(`http://localhost:8000/admindata/${token}`);
      console.log(res.data);
      setemailmess1(res.data[0]);
    } catch (err) {
      console.log('Error:', err);
    }
  };

  const getdata = async (token: any) => {
    try {
      const res = await axios.get(`http://localhost:8000/apisignup/${token}`);
      console.log(res.data);
      setemailmess(res.data[0]);
    } catch (err) {
      console.log('Error:', err);
    }
  };
  useEffect(() => {
    getdata(register_token);
    admindata(register_token);
  }, []);
  const form = useRef();
  const sendemail = (
    service_id: any,
    template_id: any,
    public_key: any
  ): void => {
    emailjs.sendForm(service_id, template_id, form.current, public_key).then(
      (result) => {
        if (result.text == 'OK') {
        
            document.location.href = '/signin';
        
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  console.log(emailmess.email);
  useEffect(() => {
    sendemail('service_w96g6fk', 'template_wntlu12', 'gb_cQpOFqCtwIedNT');
  }, []);
  console.log(emailmess, emailmess1);

  return (
    <div>
       <ToastContainer></ToastContainer>
        <Spinner color="blue" className='w-16 h-16' style={{margin:"auto",display:'flex',alignItems:'center',justifyContent:'center',position:"absolute",left:'47%',marginTop:'300px'}}/>
      <form ref={form} style={{ display: 'none' }}>
        <input
          type="text"
          name="schoolname"
          value={emailmess.schoolname}
          onChange={handleChange}
          placeholder="kdsjc"
        />
        <input
          type="text"
          name="from_name"
          value="ajaysehwal000@gmail.com"
          onChange={handleChange}
          placeholder="kdsjc"
        />
        <input
          type="text"
          name="to_email"
          value={emailmess.email}
          placeholder="kdsjc"
          onChange={handleChange}
        />
        <input
          type="text"
          name="admin_name"
          value={emailmess1.admin_name}
          placeholder="kdsjc"
          onChange={handleChange1}
        />
        <input
          type="text"
          name="admin_email"
          value={emailmess1.admin_email}
          placeholder="kdsjc"
          onChange={handleChange1}
        />
        <input
          type="text"
          name="admin_password"
          value={emailmess1.admin_password}
          placeholder="kdsjc"
          onChange={handleChange1}
        />
        <input
          type="text"
          name="replay_to"
          value="erp.system@gmail.com"
          placeholder="kdsjc"
          onChange={handleChange1}
        />
        <input type="submit" value="test" />
      </form>
    </div>
  );
}
