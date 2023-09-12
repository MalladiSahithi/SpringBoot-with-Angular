package com.cms.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.Entity.Customer;
import com.cms.repository.CustomerRepository;
import com.cms.service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService{
	
	@Autowired
	CustomerRepository customerRepository;
	
	@Override
	public Customer addCustomer(Customer customer) {
	
		return customerRepository.save(customer);
	}

	@Override
	public List<Customer> getAllCustomers() {
		return customerRepository.findAll();
	}

	@Override
	public Customer updateCustomerById(int id, Customer customer) {
		Customer c=customerRepository.findById(id).get();
		c.setName(customer.getName());
		c.setAddress(customer.getAddress());
		c.setEmail(customer.getEmail());
		return customerRepository.save(c);
		
	}

	@Override
	public Customer getCustomerById(int id) {
		
		return customerRepository.findById(id).get();
	}

	@Override
	public void deleteCustomerById(int id) {
		// TODO Auto-generated method stub
	customerRepository.deleteById(id);
	}


}
