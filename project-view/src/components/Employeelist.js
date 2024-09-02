import React, { useEffect,useState } from 'react'
import {useNavigate} from 'react-router-dom'
import EmployeeService from '../service/EmployeeService';
function Employeelist() {
  const[loading,setLoading]=useState(true);
  const [employees,setEmployees]=useState(null);

  useEffect(()=>{
 const fetchData= async()=>{
  setLoading(true);
  try{
    const response= await EmployeeService.getEmployees();
    setEmployees(response.data);
  }catch(error){
    console.log(error);
  }
  setLoading(false)
 };
 fetchData();
  }, []);

  const deleteEmployee =(e,id)=>{
    e.preventDefault();
        EmployeeService.deleteEmployee(id)
        .then(()=>{
          if(employees){
            setEmployees((prevElement)=>{
              return prevElement.filter((employee) => employee.id!==id)
            })
          }
            
        })
  };
  const editEmployee = (e,id)=> {
    e.preventDefault();
    navigate(`/editEmployee/${id}`)
  };
    const navigate=useNavigate();
  return (
    <div>
       <div className="container mx-10 my-5">

<div>
    <button onClick={()=>navigate('addEmployee')} className="bg-slate-600 hover:bg-blue-700 my-auto font-bold text-gray-50 px-12 py-1 rounded"> 🧑‍💻Add Employee</button>

  </div>
  <div className="my-2">
    <table className="shadow text-gray-50">
      <thead className="bg-slate-600">
       <td className="px-6 py-3 uppercase tracking-wide">   Name   </td>
       <td className="px-6 py-3 uppercase tracking-wide">   Phone   </td>
       <td className="px-6 py-3 uppercase tracking-wide">   Gmail   </td>
       <td className="px-6 py-3 uppercase tracking-wide">   action  </td>
      </thead>
      {!loading && (
      <tbody className=" text-gray-700">
        {employees.map((employee)=>(
        <tr className="hover:bg-cyan-50 hover:text-black">
      <td className="px-3 py-3 font-semibold">  {employee.name}   </td>
          
       <td className="px-3 py-3 font-semibold">   {employee.phone}  </td>
       <td className="px-3 py-3 font-semibold">   {employee.gmail} </td>
       <td className="px-3 py-3 font-semibold">
        <a onClick={(e,id)=>editEmployee(e,employee.id)}  className="hover:text-lime-600 hover:cursor-pointer">Edit✍️</a> 
       <a onClick={(e,id)=>deleteEmployee(e,employee.id)} className="hover:text-red-600 hover:cursor-pointer">Delete🗑️</a>
       </td>
        </tr>
       ) )}
          
      </tbody>
      )}
    </table>
  </div>
</div>
    </div>
  )
}

export default Employeelist
