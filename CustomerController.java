package com.cms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cms.Entity.Customer;
import com.cms.service.CustomerService;
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	
	@PostMapping("/addCustomers")
	ResponseEntity<Customer> addCustomer(@RequestBody Customer customer){
		return new ResponseEntity<Customer>(customerService.addCustomer(customer),HttpStatus.CREATED);
		
	}
	@GetMapping("/getAllCustomers")
	List<Customer> getAllCustomers(){
		return customerService.getAllCustomers();
	}
	@PutMapping("/updateCustomer/{id}")
	ResponseEntity<Customer> updateCustomerById(@PathVariable("id") int id,@RequestBody Customer customer){
		return new ResponseEntity<Customer>(customerService.updateCustomerById(id, customer),HttpStatus.OK);
	}
	@GetMapping("/getCustomerById/{id}")
	ResponseEntity<Customer> getCustomerById(@PathVariable int id){
		return new ResponseEntity<Customer>(customerService.getCustomerById(id),HttpStatus.OK);
	}
	@DeleteMapping("/deleteCustomer/{id}")
	void deleteCustomerById(@PathVariable("id") int id) {
		customerService.deleteCustomerById(id);
	}
}
