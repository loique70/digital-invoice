package dev.invoice.service;

import dev.invoice.collection.Customer;
import dev.invoice.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

/*
 Service allow us to write operations that should be made in the database. Here we communicate
  with our mongodb by injecting(@Autowired) our CustomerRepository define previously the repository
   folder within the CustomerRepository file.
*/
@Service
public class CustomerService {
    @Autowired

    private CustomerRepository customerRepository;

    public Customer createCustomer(Customer customer){
        return customerRepository.save(customer);
    }

    public List<Customer> getAllCustomer(){
        return  customerRepository.findAll();
    }

    public  Customer getSingleCustomer(String id){
        return  customerRepository.findById(id).orElse(null);
    }

    public Page<Customer> getCustomersPaginated(int page, int size){
        return  customerRepository.findAll(PageRequest.of(page, size));
    }

    public Page<Customer> searchCustomers(String name, int page, int size){
        return  customerRepository.findByNameContaining(name, PageRequest.of(page, size));
    }
    public Customer updateCustomer(String id, Customer customer){
        customer.setId(id);
        return customerRepository.save(customer);
    }

    public void deleteCustomer(String id){
        customerRepository.deleteById(id);
    }
}
