package dev.invoice.service;

import dev.invoice.collection.Address;
import dev.invoice.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {
    @Autowired
    private AddressRepository addressRepository;

    public Address createAddress(Address address){
        return addressRepository.save(address);
    }

    public List<Address> getAllAddress(){
        return addressRepository.findAll();
    }

    public Address getSingleAddress(String id){
        return addressRepository.findById(id).orElse(null);
    }

    public Page<Address> getAddressPaginated(int page, int size){
        return addressRepository.findAll(PageRequest.of(page, size));
    }

    public Page<Address> searchAddress(String street, int page, int size){
        return addressRepository.findByStreetContaining(street, PageRequest.of(page, size));
    }
    public Address updateAddress(String id, Address address){
        address.setId(id);
        return addressRepository.save(address);
    }

    public void deleteAddress(String id){
        addressRepository.deleteById(id);
    }
}
