import React from 'react';
import { Input } from '@material-tailwind/react';
import { Form, useForm } from 'react-hook-form';
import axios from 'axios';
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
export default function Managestudentfees() {
    interface RouteParams {
       id: string;
      }  
      const { id } = useParams<RouteParams>();

const [studentdata, setdata] = useState({});
  const [load, setload] = useState(false);
  const currentYear = new Date().getFullYear();

  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toDateString(); // Convert date to a human-readable string
    setCurrentDate(formattedDate);
  }, []);
      const getstudent = async (id: any) => {
        setload(true);
        try {
          const res = await axios.get(`http://localhost:8000/studentdetails/${id}`);
          setdata(res.data[0]);
          console.log(res.data);
          setload(false);
        } catch (err) {
          setload(true);
          return err;
        }
      };
      useEffect(() => {
        getstudent(id);
      }, []);
    
    
    const jan = useForm();
    const feb = useForm();
    const march = useForm();
    const april = useForm();
    const may = useForm();
    const june = useForm();
    const july = useForm();
    const august = useForm();
    const setpember = useForm();
    const october = useForm();
    const november = useForm();
    const december = useForm();

    const handlesubmit_jan = async (data: any) => {
        console.log(data);
        
        const send={
            month:data.month,
            amount:data.amount,
            fee_status:data.fee_status,
            year:data.year,
            student_id:studentdata.student_code,
            class:studentdata.select_class,
            section:studentdata.section,
            student_name:studentdata.student_name,
            school_id:studentdata.admin_token,
            date:currentDate,
            remain_balance:data.remain_balance==''?'0':remain_balance
        }

        try{
   const res=await axios.post('http://localhost:8000/studentfees',send);
   console.log(res.data);
        }catch(err){
            return err;
        }
    }
    const handlesubmit_feb = (data: any) => {
        console.log(data);
        
    }
    const handlesubmit_mar = (data: any) => {
        console.log(data);
    }
    const handlesubmit_april = (data: any) => {
        console.log(data);
    }
    const handlesubmit_may = (data: any) => {
        console.log(data);
    }
    const handlesubmit_june = (data: any) => {
        console.log(data);
    }
    const handlesubmit_july = (data: any) => {
        console.log(data);
    }
    const handlesubmit_aug = (data: any) => {
        console.log(data);
    }
    const handlesubmit_sept = (data: any) => {
        console.log(data);
    }
    const handlesubmit_oct = (data: any) => {
        console.log(data);
    }
    const handlesubmit_nov = (data: any) => {
        console.log(data);
    }
    const handlesubmit_dec = (data: any) => {
        console.log(data);
    }
  const [janstatus,setjanstatus]=useState('');
  const [febstatus,setfebstatus]=useState('');
  const [marstatus,setmarstatus]=useState('');
  const [aprilstatus,setaprilstatus]=useState('');
  const [maystatus,setmaystatus]=useState('');

  const [junestatus,setjunestatus]=useState('');
  const [julystatus,setjulystatus]=useState('');
  const [augstatus,setaugstatus]=useState('');
  const [septstatus,setseptstatus]=useState('');
  const [octstatus,setoctstatus]=useState('');
  const [novstatus,setnovstatus]=useState('');
  const [decstatus,setdecstatus]=useState('');

    const janstatuschange=(value:any)=>{
        
        setjanstatus(value);
    }
    const febstatuschange=(value:any)=>{
        
        setfebstatus(value);
        console.log(value);
    }

    const marstatuschange=(value:any)=>{
        
        setmarstatus(value);
    }
     const aprilstatuschange=(value:any)=>{
        
        setaprilstatus(value);
    }
     const maystatuschange=(value:any)=>{
        
        setmaystatus(value);
    }
    const junestatuschange=(value:any)=>{
        
        setjunestatus(value);
    }
    const julystatuschange=(value:any)=>{
        
        setjulystatus(value);
    }
    const auguststatuschange=(value:any)=>{
        
        setaugstatus(value);
    }
    const septstatuschange=(value:any)=>{
        
        setseptstatus(value);
    }
    const octstatuschange=(value:any)=>{
        
        setoctstatus(value);
    }
  
    const novstatuschange=(value:any)=>{
        
        setnovstatus(value);
    }
    const decstatuschange=(value:any)=>{
        
        setdecstatus(value);
    }


    return (
        <div
            style={{ padding: '20px' }}
            className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
        >
             <p style={{textAlign:'center',marginBottom:'20px'}} className='text-2xl font-bold'>Manage Student Fee</p>
            <div style={{ width: '50%',display:'flex',alignItems:'center',gap:'10px',marginBottom:'20px' }}>
             <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
             <p>Current year :</p>
            <p className='text-1xl font-bold'> {currentYear}</p>
             </div>
             <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
             <p>Date :</p>
            <p className='text-1xl font-bold'> {currentDate}</p>
             </div>
           
            </div>
            {/* January */}
            <form>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        margin: 'auto',
                        width: '100%',
                    }}
                >
                    <Input

                        {...jan.register('month')}
                        value="January"
                        style={{ cursor: 'pointer', fontSize: '22px', textAlign: 'center' }}
                    />


                    <Input  variant="outlined" label="₹ Fee amount" {...jan.register('amount')} />
                    <input type="hidden" {...jan.register('year')} value={currentYear} />

                    <select
                        id="small"
                        {...jan.register('fee_status',{onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
                             janstatuschange(e.target.value)
                        }})}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                        <option selected>Update Status</option>
                        <option
                            style={{ background: 'rgb(76,175,80)', color: 'white' }}
                            value="balance_clear"
                        >
                            Balance clear
                        </option>
                        <option
                            style={{ background: 'rgb(255,193,7)', color: 'white' }}
                            value="balance_remain"
                        >
                            Balance remain
                        </option>
                        <option
                            style={{ background: 'rgb(244,67,54)', color: 'white' }}
                            value="not_pay"
                        >
                            Not Pay
                        </option>
                    </select>
                     <div style={{display:janstatus=='balance_remain'?'block':'none'}}>
                     <Input   label='₹ Remain balance' {...jan.register('remain_amount')}/>

                     </div>

                    <button
                        onClick={jan.handleSubmit(handlesubmit_jan)}
                        type="button"
                        className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
                    >
                        Save
                    </button>
                </div>
            </form>
            {/* February */}
            <form>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        margin: 'auto',
                        width: '100%',
                    }}
                >
                    <Input
                        {...feb.register('month')}
                        value="February"
                        style={{ cursor: 'pointer', fontSize: '22px', textAlign: 'center' }}
                    />

                    <Input  {...feb.register('amount')} variant="outlined" label="₹ Fee amount" />
                    <input type="hidden" {...feb.register('year')} value={currentYear} />
                    <select
                        id="small"
                        {...feb.register('fee_status',{onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
                            febstatuschange(e.target.value)
                       }})}

                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                        <option selected>Update Status</option>
                        <option
                            style={{ background: 'rgb(76,175,80)', color: 'white' }}
                            value="balance_clear"
                        >
                            Balance clear
                        </option>
                        <option
                            style={{ background: 'rgb(255,193,7)', color: 'white' }}
                            value="balance_remain"
                        >
                            Balance remain
                        </option>
                        <option
                            style={{ background: 'rgb(244,67,54)', color: 'white' }}
                            value="not_pay"
                        >
                            Not Pay
                        </option>
                    </select>
                    <div style={{display:febstatus=='balance_remain'?'block':'none'}}>
                     <Input   label='₹ Remain balance' {...feb.register('remain_amount')}/>

                     </div>
                    <button
                        onClick={feb.handleSubmit(handlesubmit_feb)}
                        type="button"
                        className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
                    >
                        Save
                    </button>
                </div>
            </form>
            {/* March */}
            <form>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        margin: 'auto',
                        width: '100%',
                    }}
                >
                    <Input
                        {...march.register('month')}
                        value="March"
                        style={{ cursor: 'pointer', fontSize: '22px', textAlign: 'center' }}
                    />
                    <input type="hidden" {...march.register('year')} value={currentYear} />

                    <Input variant="outlined"   {...march.register('amount')} label="₹ Fee amount" />
                    <select
                        {...march.register('fee_status',{onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
                            marstatuschange(e.target.value)
                       }})}
                        id="small"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                        <option selected>Update Status</option>
                        <option
                            style={{ background: 'rgb(76,175,80)', color: 'white' }}
                            value="balance_clear"
                        >
                            Balance clear
                        </option>
                        <option
                            style={{ background: 'rgb(255,193,7)', color: 'white' }}
                            value="balance_remain"
                        >
                            Balance remain
                        </option>
                        <option
                            style={{ background: 'rgb(244,67,54)', color: 'white' }}
                            value="not_pay"
                        >
                            Not Pay
                        </option>
                    </select>
                    <div style={{display:marstatus=='balance_remain'?'block':'none'}}>
                     <Input   label='₹ Remain balance' {...march.register('remain_amount')}/>

                     </div>
                    <button
                        onClick={march.handleSubmit(handlesubmit_mar)}
                        type="button"
                        className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
                    >
                        Save
                    </button>
                </div>
            </form>
            {/* April */}
            <form >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        margin: 'auto',
                        width: '100%',
                    }}
                >
                    <Input
                        {...april.register('month')}
                        value="April"
                        style={{ cursor: 'pointer', fontSize: '22px', textAlign: 'center' }}
                    />
                    <input type="hidden" {...april.register('year')} value={currentYear} />

                    <Input  {...april.register('amount')} variant="outlined" label="₹ Fee amount" />
                    <select
                        {...april.register('fee_status',{onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
                            aprilstatuschange(e.target.value)
                       }})}
                        id="small"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                        <option selected>Update Status</option>
                        <option
                            style={{ background: 'rgb(76,175,80)', color: 'white' }}
                            value="balance_clear"
                        >
                            Balance clear
                        </option>
                        <option
                            style={{ background: 'rgb(255,193,7)', color: 'white' }}
                            value="balance_remain"
                        >
                            Balance remain
                        </option>
                        <option
                            style={{ background: 'rgb(244,67,54)', color: 'white' }}
                            value="not_pay"
                        >
                            Not Pay
                        </option>
                    </select>
                    <div style={{display:aprilstatus=='balance_remain'?'block':'none'}}>
                     <Input   label='₹ Remain balance' {...april.register('remain_amount')}/>

                     </div>
                    <button
                        onClick={april.handleSubmit(handlesubmit_april)}
                        type="button"
                        className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
                    >
                        Save
                    </button>
                </div>
            </form>
            {/* May */}
            <form >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        margin: 'auto',
                        width: '100%',
                    }}
                >
                    <Input
                        {...may.register('month')}
                        value="May"
                        style={{ cursor: 'pointer', fontSize: '22px', textAlign: 'center' }}
                    />
                    <input type="hidden" {...may.register('year')} value={currentYear} />


                    <Input {...may.register('amount')} variant="outlined" label="₹ Fee amount" />
                    <select
                        id="small"
                        {...may.register('fee_status',{onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
                            maystatuschange(e.target.value)
                       }})}

                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                        <option selected>Update Status</option>
                        <option
                            style={{ background: 'rgb(76,175,80)', color: 'white' }}
                            value="balance_clear"
                        >
                            Balance clear
                        </option>
                        <option
                            style={{ background: 'rgb(255,193,7)', color: 'white' }}
                            value="balance_remain"
                        >
                            Balance remain
                        </option>
                        <option
                            style={{ background: 'rgb(244,67,54)', color: 'white' }}
                            value="not_pay"
                        >
                            Not Pay
                        </option>
                    </select>
                    <div style={{display:maystatus=='balance_remain'?'block':'none'}}>
                     <Input   label='₹ Remain balance' {...may.register('remain_amount')}/>

                     </div>
                    <button
                        onClick={may.handleSubmit(handlesubmit_may)}
                        type="button"
                        className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
                    >
                        Save
                    </button>
                </div>
            </form>
            {/* June */}
            <form >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        margin: 'auto',
                        width: '100%',
                    }}
                >
                    <Input
                        {...june.register('month')}
                        value="June"
                        style={{ cursor: 'pointer', fontSize: '22px', textAlign: 'center' }}
                    />
                    <input type="hidden" {...june.register('year')} value={currentYear} />

                    <Input {...june.register('amount')} variant="outlined" label="₹ Fee amount" />
                    <select
                        {...june.register('fee_status',{onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
                            junestatuschange(e.target.value)
                       }})}
                        id="small"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                        <option selected>Update Status</option>
                        <option
                            style={{ background: 'rgb(76,175,80)', color: 'white' }}
                            value="balance_clear"
                        >
                            Balance clear
                        </option>
                        <option
                            style={{ background: 'rgb(255,193,7)', color: 'white' }}
                            value="balance_remain"
                        >
                            Balance remain
                        </option>
                        <option
                            style={{ background: 'rgb(244,67,54)', color: 'white' }}
                            value="not_pay"
                        >
                            Not Pay
                        </option>
                    </select>
                    <div style={{display:junestatus=='balance_remain'?'block':'none'}}>
                     <Input   label='₹ Remain balance' {...june.register('remain_amount')}/>

                     </div>
                    <button
                        onClick={june.handleSubmit(handlesubmit_june)}
                        type="button"
                        className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
                    >
                        Save
                    </button>
                </div>
            </form>
            {/* july */}
            <form >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        margin: 'auto',
                        width: '100%',
                    }}
                >
                    <Input
                        {...july.register('month')}
                        value="July"
                        style={{ cursor: 'pointer', fontSize: '22px', textAlign: 'center' }}
                    />
                    <input type="hidden" {...july.register('year')} value={currentYear} />

                    <Input variant="outlined" label="₹ Fee amount" />
                    <select
                        {...july.register('fee_status',{onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
                            julystatuschange(e.target.value)
                       }})}
                        id="small"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                        <option selected>Update Status</option>
                        <option
                            style={{ background: 'rgb(76,175,80)', color: 'white' }}
                            value="balance_clear"
                        >
                            Balance clear
                        </option>
                        <option
                            style={{ background: 'rgb(255,193,7)', color: 'white' }}
                            value="balance_remain"
                        >
                            Balance remain
                        </option>
                        <option
                            style={{ background: 'rgb(244,67,54)', color: 'white' }}
                            value="not_pay"
                        >
                            Not Pay
                        </option>
                    </select>
                    <div style={{display:julystatus=='balance_remain'?'block':'none'}}>
                     <Input   label='₹ Remain balance' {...july.register('remain_amount')}/>

                     </div>
                    <button
                      onClick= {july.handleSubmit(handlesubmit_july)}
                        type="button"
                        className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
                    >
                        Save
                    </button>
                </div>
            </form>
            {/* August */}
            <form>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        margin: 'auto',
                        width: '100%',
                    }}
                >
                    <Input
                        {...august.register('month')}
                        value="August"
                        style={{ cursor: 'pointer', fontSize: '22px', textAlign: 'center' }}
                    />
                    <input type="hidden" {...august.register('year')} value={currentYear} />

                    <Input {...august.register('amount')} variant="outlined" label="₹ Fee amount" />
                    <select
                        {...august.register('fee_status',{onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
                            auguststatuschange(e.target.value)
                       }})}
                        id="small"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                        <option selected>Update Status</option>
                        <option
                            style={{ background: 'rgb(76,175,80)', color: 'white' }}
                            value="balance_clear"
                        >
                            Balance clear
                        </option>
                        <option
                            style={{ background: 'rgb(255,193,7)', color: 'white' }}
                            value="balance_remain"
                        >
                            Balance remain
                        </option>
                        <option
                            style={{ background: 'rgb(244,67,54)', color: 'white' }}
                            value="not_pay"
                        >
                            Not Pay
                        </option>
                    </select>
                    <div style={{display:augstatus=='balance_remain'?'block':'none'}}>
                     <Input   label='₹ Remain balance' {...august.register('remain_amount')}/>

                     </div>
                    <button
                        onClick={august.handleSubmit(handlesubmit_aug)}
                        type="button"
                        className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
                    >
                        Save
                    </button>
                </div>
            </form>
            {/* September */}
            <form >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        margin: 'auto',
                        width: '100%',
                    }}
                >
                    <input type="hidden" {...setpember.register('year')} value={currentYear} />

                    <Input
                        {...setpember.register('month')}
                        value="September"
                        style={{ cursor: 'pointer', fontSize: '22px', textAlign: 'center' }}
                    />

                    <Input     {...setpember.register('month')} variant="outlined" label="₹ Fee amount" />
                    <select
                        {...setpember.register('fee_status',{onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
                            septstatuschange(e.target.value)
                       }})}
                        id="small"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                        <option selected>Update Status</option>
                        <option
                            style={{ background: 'rgb(76,175,80)', color: 'white' }}
                            value="balance_clear"
                        >
                            Balance clear
                        </option>
                        <option
                            style={{ background: 'rgb(255,193,7)', color: 'white' }}
                            value="balance_remain"
                        >
                            Balance remain
                        </option>
                        <option
                            style={{ background: 'rgb(244,67,54)', color: 'white' }}
                            value="not_pay"
                        >
                            Not Pay
                        </option>
                    </select>
                    <div style={{display:septstatus=='balance_remain'?'block':'none'}}>
                     <Input   label='₹ Remain balance' {...setpember.register('remain_amount')}/>

                     </div>
                    <button
                        onClick={setpember.handleSubmit(handlesubmit_sept)}
                        type="button"
                        className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
                    >
                        Save
                    </button>
                </div>
            </form>
            {/* October */}
            <form >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        margin: 'auto',
                        width: '100%',
                    }}
                >
                    <Input
                        {...october.register('month')}
                        value="October"
                        style={{ cursor: 'pointer', fontSize: '22px', textAlign: 'center' }}
                    />
                    <input type="hidden" {...october.register('year')} value={currentYear} />

                    <Input   {...october.register('amount')} variant="outlined" label="₹ Fee amount" />
                    <select
                        {...october.register('fee_status',{onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
                            octstatuschange(e.target.value)
                       }})}

                        id="small"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                        <option selected>Update Status</option>
                        <option
                            style={{ background: 'rgb(76,175,80)', color: 'white' }}
                            value="balance_clear"
                        >
                            Balance clear
                        </option>
                        <option
                            style={{ background: 'rgb(255,193,7)', color: 'white' }}
                            value="balance_remain"
                        >
                            Balance remain
                        </option>
                        <option
                            style={{ background: 'rgb(244,67,54)', color: 'white' }}
                            value="not_pay"
                        >
                            Not Pay
                        </option>
                    </select>
                    <div style={{display:octstatus=='balance_remain'?'block':'none'}}>
                     <Input   label='₹ Remain balance' {...october.register('remain_amount')}/>

                     </div>
                    <button
                        onClick={october.handleSubmit(handlesubmit_oct)}
                        type="button"
                        className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
                    >
                        Save
                    </button>
                </div>
            </form>
            {/* November */}
            <form >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        margin: 'auto',
                        width: '100%',
                    }}
                >
                    <Input
                        {...november.register('month')}
                        value="November"
                        style={{ cursor: 'pointer', fontSize: '22px', textAlign: 'center' }}
                    />
                    <input type="hidden" {...november.register('year')} value={currentYear} />

                    <Input    {...november.register('amount')}
                        variant="outlined" label="₹ Fee amount" />
                    <select
                        {...november.register('fee_status',{onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
                            novstatuschange(e.target.value)
                       }})}

                        id="small"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                        <option selected>Update Status</option>
                        <option
                            style={{ background: 'rgb(76,175,80)', color: 'white' }}
                            value="balance_clear"
                        >
                            Balance clear
                        </option>
                        <option
                            style={{ background: 'rgb(255,193,7)', color: 'white' }}
                            value="balance_remain"
                        >
                            Balance remain
                        </option>
                        <option
                            style={{ background: 'rgb(244,67,54)', color: 'white' }}
                            value="not_pay"
                        >
                            Not Pay
                        </option>
                    </select>
                    <div style={{display:novstatus=='balance_remain'?'block':'none'}}>
                     <Input   label='₹ Remain balance' {...november.register('remain_amount')}/>

                     </div>
                    <button
                        onClick={november.handleSubmit(handlesubmit_nov)}
                        type="button"
                        className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
                    >
                        Save
                    </button>
                </div>
            </form>
            {/* December */}
            <form >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        margin: 'auto',
                        width: '100%',
                    }}
                >
                    <input type="hidden" {...december.register('year')} value={currentYear} />

                    <Input

                        {...december.register('month')}
                        value="December"
                        style={{ cursor: 'pointer', fontSize: '22px', textAlign: 'center' }}
                    />

                    <Input  {...december.register('amount')}
                        variant="outlined" label="₹ Fee amount" />
                    <select
                        {...december.register('fee_status',{onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{
                            decstatuschange(e.target.value)
                       }})}

                        id="small"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                        <option selected>Update Status</option>
                        <option
                            style={{ background: 'rgb(76,175,80)', color: 'white' }}
                            value="balance_clear"
                        >
                            Balance clear
                        </option>
                        <option
                            style={{ background: 'rgb(255,193,7)', color: 'white' }}
                            value="balance_remain"
                        >
                            Balance remain
                        </option>
                        <option
                            style={{ background: 'rgb(244,67,54)', color: 'white' }}
                            value="not_pay"
                        >
                            Not Pay
                        </option>
                    </select>

                    <div style={{display:decstatus=='balance_remain'?'block':'none'}}>
                     <Input   label='₹ Remain balance' {...december.register('remain_amount')}/>

                     </div>
                    <button
                        onClick={december.handleSubmit(handlesubmit_dec)}
                        type="button"
                        className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
