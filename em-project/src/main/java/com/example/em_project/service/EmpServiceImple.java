package com.example.em_project.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.em_project.entity.EmployeeEntity;
import com.example.em_project.model.Employee;
import com.example.em_project.repository.EmployeeRepository;

@Service
public class EmpServiceImple implements EmpService{

    @Autowired
    private EmployeeRepository employeeRepository;
    //ArrayList<Employee> emp= new ArrayList<>();
    

    @Override
    public String createEmployee(Employee empl) {
        EmployeeEntity employeeEntity=new EmployeeEntity();
        BeanUtils.copyProperties(empl, employeeEntity);
        employeeRepository.save(employeeEntity);
       //emp.add(empl);
       return "saved successfully";
    }

    @Override
    public List<Employee> readEmployees() {
       List<EmployeeEntity> employeeList= employeeRepository.findAll();
       List<Employee> emp= new ArrayList<>();
       for (EmployeeEntity employeeEntity : employeeList) {
        Employee emply=new Employee();
        emply.setId(employeeEntity.getId());
        emply.setName(employeeEntity.getName());
        emply.setPhone(employeeEntity.getPhone());
        emply.setGmail(employeeEntity.getGmail());
        emp.add(emply);
       }
       return emp; 
    }

    @Override
    public boolean deleteEmployee(Long id) {
        //emp.remove(id);
        EmployeeEntity emp=employeeRepository.findById(id).get();
        employeeRepository.delete(emp);
        return true;
        
    }

    @Override
    public String updateEmployee(Long id, Employee employee) {
        EmployeeEntity existingEmployee =employeeRepository.findById(id).get();
        existingEmployee.setName(employee.getName());
        existingEmployee.setPhone(employee.getPhone());
        existingEmployee.setGmail(employee.getGmail());
        employeeRepository.save(existingEmployee);
        return "Update Successfully";
    }

    @Override
    public Employee readEmployee(Long id) {
        EmployeeEntity employeeEntity =employeeRepository.findById(id).get();
        Employee employee=new Employee();
        BeanUtils.copyProperties(employeeEntity, employee);
        return employee;
    }

    

}
