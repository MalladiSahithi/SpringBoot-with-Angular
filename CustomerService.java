package com.cms.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cms.Entity.Customer;

@Service
public interface CustomerService {
	Customer addCustomer(Customer customer);
	List<Customer> getAllCustomers();
	Customer updateCustomerById(int id,Customer customer);
	Customer getCustomerById(int id);
	void deleteCustomerById(int id);
}
