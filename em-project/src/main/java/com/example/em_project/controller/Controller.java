package com.example.em_project.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.em_project.service.EmpService;
import com.example.em_project.model.Employee;

@RestController
@CrossOrigin("http://localhost:3000/")
public class Controller {
    //EmpService empService=new EmpServiceImple();
    //ArrayList<Employee> emp= new ArrayList<>();
      //depecpdency injection
     @Autowired
    EmpService empService;
    @GetMapping("/em")
    public List<Employee> getAllEmployees(){
        return empService.readEmployees();
    }
    @GetMapping("/em/{id}")
    public Employee getEmployee(@PathVariable Long id){
        return empService.readEmployee(id);
    }
@PostMapping("/em")
public String createEmployee(@RequestBody Employee empl) {
    //emp.add(empl);
    return empService.createEmployee(empl);
    
}
@DeleteMapping("/em/{id}")
public  String deleteEmployee(@PathVariable Long id){
   if( empService.deleteEmployee(id))
   return "Delete successfully";
   return "not forund";
    
}
@PutMapping("/em/{id}")
public String putMethodName(@PathVariable Long id,@RequestBody Employee empl ){
    return empService.updateEmployee(id, empl);
}





}
