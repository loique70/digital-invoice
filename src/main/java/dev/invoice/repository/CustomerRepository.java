package dev.invoice.repository;

import dev.invoice.collection.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/*
The repository allow us to communicate with the database. In this particular project, we have used
MongoDb as database. We have created  a CustomerRepository which extends MongoRepository class. The
passed arguments specify that our collection is a Customer and the primary key is a String. Others
functions define in this particular class allow us to make personalize function. Here we have the findAll
function for the paginated request and findByNameContaining to make filtering tasks.
 */
@Repository
public interface CustomerRepository extends MongoRepository<Customer, String> {
    @Override
    Page<Customer> findAll(Pageable pageable);
    Page<Customer> findByNameContaining(String name, Pageable pageable);
}
