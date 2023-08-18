package dev.invoice.controller;

import dev.invoice.service.AddressService;
import dev.invoice.collection.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/address")
public class AddressController {
    @Autowired

    private AddressService addressService;

    @PostMapping
    public ResponseEntity<Address> createAddress(@RequestBody Address address){
        return ResponseEntity.ok(addressService.createAddress(address));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Address>> getAllAddress(){
        return ResponseEntity.ok(addressService.getAllAddress());
    }

    @GetMapping("/paginated")
    public ResponseEntity<Page<Address>> getAddressPaginated(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ){
        return ResponseEntity.ok(addressService.getAddressPaginated(page, size));
    };
    @GetMapping("/search")
    public ResponseEntity<Page<Address>> searchAddress(
            @RequestParam String street,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ){
        return ResponseEntity.ok(addressService.searchAddress(street, page, size));
    };
    @GetMapping("/{id}")
    public ResponseEntity<Address> getSingleAddress(@PathVariable String id){
        return  ResponseEntity.ok(addressService.getSingleAddress(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Address> updateAddress(@PathVariable String id, @RequestBody Address address){
        return  ResponseEntity.ok(addressService.updateAddress(id, address));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAddress(@PathVariable String id){
        addressService.deleteAddress(id);
        return ResponseEntity.noContent().build();
    }
}
