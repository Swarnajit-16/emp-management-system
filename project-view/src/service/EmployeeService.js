import axios from 'axios'
const EMPLOYEE_SPRINGBOOT_API_URL ="http://localhost:9090/em"
class EmployeeService{
    saveEmployee(employee){
        return axios.post(EMPLOYEE_SPRINGBOOT_API_URL,employee)
     
    }
    getEmployees(){
        return axios.get(EMPLOYEE_SPRINGBOOT_API_URL)
    }
    getEmployeeById(id){
        return axios.get(EMPLOYEE_SPRINGBOOT_API_URL+"/"+id)
    }
    deleteEmployee(id){
        return axios.delete(EMPLOYEE_SPRINGBOOT_API_URL+"/"+id)
    }
    updateEmployee(employee,id){
        return axios.put(EMPLOYEE_SPRINGBOOT_API_URL+"/"+id,employee)
    }
}
export default new EmployeeService();