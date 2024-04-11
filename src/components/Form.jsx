import React from 'react'
import { useState } from 'react'


const Form = () => {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        visible: true,
        mode: ""
    });

    console.log(formData);
    const changeHandler = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? (checked) : (value)
            }
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("finally printing formData");
        console.log(formData);

    }
    return (
        <>
            <div className='border-solid border-slate-500 border-2 w-1/5 m-auto p-5'>
                <form onSubmit={submitHandler}>

                    <input className="bg-slate-200 m-2 py-2" placeholder='First name' type='text' name='fname' value={formData.fname} onChange={changeHandler} /> <br />

                    <input className="bg-slate-200 m-2 py-2" placeholder='Last name' type='text' name='lname' value={formData.lname} onChange={changeHandler} /> <br />

                    <input className="bg-slate-200 m-2 py-2" placeholder='email' type='email' name='email' value={formData.email} onChange={changeHandler} /> <br />

                    <input className="bg-slate-200 m-2 py-2" type='checkbox' name='visible' id='visible' checked={formData.visible} onChange={changeHandler} />
                    <label htmlFor='visible'>Is it visible</label> <br />
                    <fieldset className='border-solid border-slate-500 border-2'>
                        <legend>Mode</legend>
                        <input className="bg-slate-200 m-2 py-2" type='radio' name='mode' id='online' value="online-mode" onChange={changeHandler} />
                        <label htmlFor='Online'>Online mode </label> <br />
                        <input className="bg-slate-200 m-2 py-2" type='radio' name='mode' id='Offline' value="offline-mode" onChange={changeHandler} />
                        <label htmlFor='Offline'>Offline mode </label>
                    </fieldset>
                    <div>
                        {/* <input className="rounded-full px-6 py-1 text-sky-100 m-2 bg-sky-600 " type='submit' placeholder='submit' /> */}
                        <button className="rounded-full px-6 py-1 text-sky-100 m-2 bg-sky-600 ">Submit</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Form