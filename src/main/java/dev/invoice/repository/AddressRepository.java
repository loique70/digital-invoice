package dev.invoice.repository;

import dev.invoice.collection.Address;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends MongoRepository<Address, String> {
    Page<Address> findAll(Pageable pageable);
    Page<Address> findByStreetContaining(String street, Pageable pageable);
}
