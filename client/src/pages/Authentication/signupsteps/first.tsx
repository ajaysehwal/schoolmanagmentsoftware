import React from 'react';
import { useState,useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';
import { AES, enc } from 'crypto-js';

import {
  Button,
  Dialog,
  DialogBody,
} from '@material-tailwind/react';

export default function First({form, sendemail }) {
   

  const [open, setOpen] = useState(false);
  const {verify,verified_complete,verifing}=useContext(AuthContext);
   console.log(verify);
  const handleOpen = () => setOpen(!open);

  const notify = (mess:any) =>
    toast.error(mess, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  interface FormSchema {
    verify: {
      to_email: string;
    };
  }
  const [data, setdata] = useState<FormSchema>({
    verify: {
      to_email: '',
    },
  });
  const verifychange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setdata({
      verify: {
        ...data.verify,
        [e.target.name]: e.target.value,
      },
    });
  };
  const user_email = data.verify.to_email;
  const encodedText = enc.Utf8.parse(user_email);

  const encrypted = AES.encrypt(encodedText, 'encryption-key').toString();

  const verifysubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const user_email = data.verify.to_email;
    if(user_email==''){
     notify("Please enter your email for verify");
    }else{
    emailcheck(user_email);
    }
  };
  const generateRandomToken = (): string => {
    const array = new Uint8Array(32);
    window.crypto.getRandomValues(array);
    const token = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    return token;
  };
  const token = generateRandomToken();
  const emailcheck = async (email: any) => {
    try {
      const response = await axios.get(`http://localhost:8000/signup/${email}`);
      const data = response.data;
      console.log(data.length);
      if (data.length >= 1) {
        notify("Email Already Exists");
      } else {
        handleOpen();
        verified_complete();
        const now = new Date();

        const expirationDate = new Date(now.getTime() + 20 * 60 * 1000); // 20 minutes

        const cookies = new Cookies();
        cookies.set('_Euhyeadw',email,{expires:expirationDate,path:'/'});
        cookies.set('_VU', token, { expires: expirationDate, path: '/' });
          sendemail('service_w96g6fk','template_nbn4a87','gb_cQpOFqCtwIedNT')
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  
  return (
    <div>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        style={{ padding: '20px' }}
      >
        <DialogBody
          style={{
            background: 'rgb(3,178,66)',
            color: 'white',
            padding: '10px',
            textAlign: 'center',
          }}
        >
          Thanks for your interest in ERP System, please check your email to{' '}
          <a
            style={{ color: 'blue' }}
            href="https://mail.google.com/mail/u/0/#inbox"
          >
            continue
          </a>
          .
        </DialogBody>
      </Dialog>
      <div className="mb-4">
        <ToastContainer></ToastContainer>
        <form ref={form} action="" onSubmit={verifysubmit}>
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Email
          </label>
          <div className="relative">
            <input
              name="to_email"
              onChange={verifychange}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            <input
              type="hidden"
              name="token"
            
            
                value={token}
              onChange={verifychange}
            />
            <input type="hidden" name="useremail" value={encrypted}/>
            <span className="absolute right-4 top-4">
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                    fill=""
                  />
                </g>
              </svg>
            </span>
          </div>
          <div style={{ marginTop: '20px' }} className="mb-5">
            <input
              type="submit"
              value="Verify"
              className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
