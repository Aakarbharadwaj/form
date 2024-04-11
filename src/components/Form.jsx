import React from 'react'
import { useState } from 'react'


const Form = () => {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
    });

    const changeHandler = (e) => {
        setFormData((prevData) => {

            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <>
            <div className='border-solid border-slate-500 border-2 w-1/5 m-auto p-5'>
                <input className="bg-slate-200 m-2 py-2" placeholder='First name' type='text' name='fname' value={formData.fname} onChange={changeHandler} /> <br />

                <input className="bg-slate-200 m-2 py-2" placeholder='Last name' type='text' name='lname' value={formData.lname} onChange={changeHandler} /> <br />

                <input className="bg-slate-200 m-2 py-2" placeholder='email' type='email' name='email' value={formData.email} onChange={changeHandler} /> <br />

                <div>
                    <input className="rounded-full px-6 py-1 text-sky-100 m-2 bg-sky-600 " type='submit' placeholder='submit' />
                </div>
            </div>
        </>
    )
}

export default Form