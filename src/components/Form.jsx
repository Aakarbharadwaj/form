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
            <div className='border-solid border-slate-500 border-2 w-1/5 m-auto'>
                <input className="bg-slate-200 m-2 py-2" placeholder='First name' type='text' name='fname' onChange={changeHandler} /> <br />
                <input className="bg-slate-200 m-2 py-2" placeholder='Last name' type='text' name='lname' onChange={changeHandler} /> <br />
                <input className="bg-slate-200 m-2 py-2" placeholder='email' type='email' name='email' onChange={changeHandler} /> <br />
            </div>
            <div>
                
            </div>
        </>
    )
}

export default Form