package dev.invoice.controller;

import dev.invoice.service.InvoiceItemService;
import dev.invoice.collection.InvoiceItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/invoice-item")
public class InvoiceItemController {
    @Autowired
    private InvoiceItemService invoiceItemService;

    @PostMapping
    public ResponseEntity<InvoiceItem> createInvoiceItem(@RequestBody InvoiceItem invoiceItem){
        return  ResponseEntity.ok(invoiceItemService.createInvoiceItem(invoiceItem));
    }

    @GetMapping
    public ResponseEntity<List<InvoiceItem>> getAllInvoiceItem(){
        return ResponseEntity.ok(invoiceItemService.getAllInvoiceItem());
    }

    @GetMapping("/{id}")
    public  ResponseEntity<InvoiceItem> getSingleInvoiceItem(@PathVariable String id){
        return ResponseEntity.ok(invoiceItemService.getSingleInvoiceItem(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<InvoiceItem> updateInvoiceItem(@PathVariable String id, @RequestBody InvoiceItem invoiceItem){
        return ResponseEntity.ok(invoiceItemService.updateInvoiceItem(id, invoiceItem));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInvoiceItem(@PathVariable String id){
       invoiceItemService.deleteInvoiceItem(id);
       return ResponseEntity.noContent().build();
    }
}
