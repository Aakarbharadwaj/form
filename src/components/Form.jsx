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
        <div>
            <input className="bg-slate-200 m-5 py-2" placeholder='First name' type='text' name='fname' onChange={changeHandler} />
            <input className="bg-slate-200 m-5 py-2" placeholder='Last name' type='text' name='lname' onChange={changeHandler} />
            <input className="bg-slate-200 m-5 py-2" placeholder='email' type='email' name='email' onChange={changeHandler} />
        </div>
    )
}

export default Form