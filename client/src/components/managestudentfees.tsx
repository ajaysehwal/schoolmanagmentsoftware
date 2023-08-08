import React from 'react';
import { Input } from '@material-tailwind/react';
import { Form, useForm } from 'react-hook-form';
export default function Managestudentfees() {

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

    const handlesubmit_jan = (data: any) => {
        console.log(data);
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




    return (
        <div
            style={{ padding: '10px' }}
            className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
        >
            <div style={{ width: '50%' }}>
                <select
                    style={{ marginBottom: '20px' }}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                >
                    <option value="">2020</option>
                    <option value="">2023</option>
                    <option value="">2024</option>
                </select>
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


                    <Input variant="outlined" label="₹ Fee amount" {...jan.register('amount')} />
                    <input type="hidden" {...jan.register('year')} value='2023' />

                    <select
                        id="small"
                        {...jan.register('fee_status')}
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
                    <input type="hidden" {...feb.register('year')} value='2023' />
                    <select
                        id="small"
                        {...feb.register('fee_status')}

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
                    <input type="hidden" {...march.register('year')} value='2023' />

                    <Input variant="outlined"   {...march.register('amount')} label="₹ Fee amount" />
                    <select
                        {...march.register('fee_status')}
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
                    <input type="hidden" {...april.register('year')} value='2023' />

                    <Input  {...april.register('amount')} variant="outlined" label="₹ Fee amount" />
                    <select
                        {...april.register('fee_status')}
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
                    <input type="hidden" {...may.register('year')} value='2023' />


                    <Input {...may.register('amount')} variant="outlined" label="₹ Fee amount" />
                    <select
                        id="small"
                        {...may.register('fee_status')}

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
                    <input type="hidden" {...june.register('year')} value='2023' />

                    <Input {...june.register('amount')} variant="outlined" label="₹ Fee amount" />
                    <select
                        {...june.register('fee_status')}
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
                    <input type="hidden" {...july.register('year')} value='2023' />

                    <Input variant="outlined" label="₹ Fee amount" />
                    <select
                        {...july.register('fee_status')}
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
                    <input type="hidden" {...august.register('year')} value='2023' />

                    <Input {...august.register('amount')} variant="outlined" label="₹ Fee amount" />
                    <select
                        {...august.register('fee_status')}
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
                    <input type="hidden" {...setpember.register('year')} value='2023' />

                    <Input
                        {...setpember.register('month')}
                        value="September"
                        style={{ cursor: 'pointer', fontSize: '22px', textAlign: 'center' }}
                    />

                    <Input     {...setpember.register('month')} variant="outlined" label="₹ Fee amount" />
                    <select
                        {...setpember.register('fee_status')}
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
                    <input type="hidden" {...october.register('year')} value='2023' />

                    <Input   {...october.register('amount')} variant="outlined" label="₹ Fee amount" />
                    <select
                        {...october.register('fee_status')}

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
                    <input type="hidden" {...november.register('year')} value='2023' />

                    <Input    {...november.register('amount')}
                        variant="outlined" label="₹ Fee amount" />
                    <select
                        {...november.register('fee_status')}

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
                    <input type="hidden" {...december.register('year')} value='2023' />

                    <Input

                        {...december.register('month')}
                        value="December"
                        style={{ cursor: 'pointer', fontSize: '22px', textAlign: 'center' }}
                    />

                    <Input  {...december.register('amount')}
                        variant="outlined" label="₹ Fee amount" />
                    <select
                        {...december.register('fee_status')}

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
