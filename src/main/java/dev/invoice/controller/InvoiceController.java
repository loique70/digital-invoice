package dev.invoice.controller;

import dev.invoice.collection.Customer;
import dev.invoice.service.AddressService;
import dev.invoice.service.CustomerService;
import dev.invoice.service.InvoiceItemService;
import dev.invoice.service.InvoiceService;
import dev.invoice.collection.Address;
import dev.invoice.collection.Invoice;
import dev.invoice.collection.InvoiceItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/invoice")
public class InvoiceController {
    @Autowired
    private InvoiceService invoiceService;
    @Autowired
    private CustomerService customerService;
    @Autowired
    private InvoiceItemService invoiceItemService;

    @Autowired
    private AddressService addressService;

    @PostMapping
    public ResponseEntity<Invoice> createInvoice(@RequestBody Invoice invoice){

        Customer customer = invoice.getCustomer();
        customer = customerService.createCustomer(customer);
        invoice.setCustomerId(customer.getId());

        List<InvoiceItem> invoiceItems = invoice.getItems();
        for (InvoiceItem invoiceItem : invoiceItems) {
            invoiceItem = invoiceItemService.createInvoiceItem(invoiceItem);
//            invoice.setInvoiceNumber(invoiceItem.getId());
        }


        Address address = invoice.getBillingAddress();
        address = addressService.createAddress(address);
        invoice.setBillingAddressId(address.getId());

        return  ResponseEntity.ok(invoiceService.createInvoice(invoice));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Invoice>> getAllInvoice(){
        return ResponseEntity.ok(invoiceService.getAllInvoice());
    }

    @GetMapping("/paginated")
    public  ResponseEntity<Page<Invoice>> getInvoicePaginated(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ){
        return ResponseEntity.ok(invoiceService.getInvoicePaginated(page, size));
    };

    @GetMapping("/search")
    public ResponseEntity<Page<Invoice>> searchInvoice(
            @RequestParam String invoiceNumber,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ){
        return ResponseEntity.ok(invoiceService.searchInvoice(invoiceNumber, page, size));
    };
    @GetMapping("/{id}")
    public ResponseEntity<Invoice> getSingleInvoice(@PathVariable String id){
        return  ResponseEntity.ok(invoiceService.getSingleInvoice(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Invoice> updateInvoice(@PathVariable String id, @RequestBody Invoice invoice){
        return  ResponseEntity.ok(invoiceService.updateInvoice(id, invoice));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInvoice(@PathVariable String id){
        invoiceService.deleteInvoice((id));
        return ResponseEntity.noContent().build();
    }
}
