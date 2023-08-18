package dev.invoice.controller;

import dev.invoice.collection.Customer;
import dev.invoice.service.AddressService;
import dev.invoice.service.CustomerService;
import dev.invoice.collection.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

/*
 The controller allow us to make HTTP requests. We have to inject the service before makes
 the operations. Before started, we ha to define the controller root as we can see here:
 @RequestMapping("/api/customer"). We need also to add @CrossOrigin(origins = "http://localhost:5173")
 which allows to communicate with our frontend.
* */
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/customer")
public class CustomerController {
    @Autowired
    private CustomerService customerService;
    @Autowired
    private AddressService addressService;

    @PostMapping
    public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer){

        Address address = customer.getAddress();
        address = addressService.createAddress(address);
        customer.setAddress(address);

        return  ResponseEntity.ok(customerService.createCustomer(customer));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Customer>> getAllCustomer(){
        return ResponseEntity.ok(customerService.getAllCustomer());
    }

    @GetMapping("/paginated")
    public ResponseEntity<Page<Customer>> getCustomersPaginated(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ){
        return  ResponseEntity.ok(customerService.getCustomersPaginated(page, size));
    }

    @GetMapping("/search")
    public ResponseEntity<Page<Customer>> searchCustomers(
            @RequestParam String name,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ){
        return ResponseEntity.ok(customerService.searchCustomers(name,page, size));
    };
    @GetMapping("/{id}")
    public ResponseEntity<Customer> getSingleCustomer(@PathVariable String id){
        return  ResponseEntity.ok(customerService.getSingleCustomer(id));
    }

    @PutMapping("/{id}")
    public  ResponseEntity<Customer> updateCustomer(@PathVariable String id, @RequestBody Customer customer){
        return  ResponseEntity.ok(customerService.updateCustomer(id, customer));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable String id){
        customerService.deleteCustomer(id);
        return ResponseEntity.noContent().build();
    }
}
