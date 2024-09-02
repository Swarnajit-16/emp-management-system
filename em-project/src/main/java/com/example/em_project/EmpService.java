package com.example.em_project;

import java.util.List;


public interface EmpService {
     String createEmployee(Employee employee);
     List<Employee>readEmployees();
     boolean deleteEmployee(Long id);
     String updateEmployee(Long id, Employee employee);
     Employee readEmployee(Long id);




     
}
