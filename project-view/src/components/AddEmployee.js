import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../service/EmployeeService'
const AddEmployee = () => {
    const [employee,setEmployee]=useState({
        id:"",
        name:"",
        phone:"",
        gmail:"",
    });

    const handleChange=(e)=>{
        const value=e.target.value;
        setEmployee({...employee,[e.target.name]:value})
    }

    const saveEmployee=(e)=>{
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
        .then((response)=>{
            console.log("saved",response);
            navigate("/")
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    const reset=(e)=>{
        e.preventDefault();
        setEmployee({
            id:"",
            name:"",
            phone:"",
            gmail:"",
        });
    }
    const navigate=useNavigate();
  return (
    <div className='bg-slate-800 mx-10 my-5 px-8 py-5 rounded max-w-xl '>
      <div className='text-3xl text-white font-semibold text-center px-9 tracking-wider'>
        <p>AddEmployee🤝</p>
        </div>
      <div className='py-2 pr-16'>
        <input type='text' name='name' value={employee.name} onChange={(e)=>handleChange(e)} className='w-full  rounded py-2 mx-6 pl-2'placeholder='Name'></input>
      <input type='number'name='phone'value={employee.phone} onChange={(e)=>handleChange(e)} className='w-full rounded  py-2 my-1 mx-6 pl-2 ' placeholder='Phone'></input>
      <input type='gmail'name='gmail'value={employee.gmail} onChange={(e)=>handleChange(e)} className='w-full rounded  py-2 mx-6 pl-2' placeholder='Gmail'></input>
      </div>
      <div className='mx-28'>
        <button onClick={saveEmployee} className='mx-3 bg-green-500 hover:bg-green-800 text-white rounded px-3 py-1 tracking-wide font-bold'>Save</button>
      <button onClick={reset} className='mx-3 bg-blue-300 hover:bg-blue-600 text-white rounded px-3 py-1 tracking-wide font-bold'>Clear</button>
      <button onClick={()=>navigate("/")} className='mx-3 bg-red-600 hover:bg-red-800 text-white rounded px-3 py-1 tracking-wide font-bold'>Cancel</button>
      </div>
      
    </div>
  )
}

export default AddEmployee
