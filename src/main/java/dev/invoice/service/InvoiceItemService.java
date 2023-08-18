package dev.invoice.service;

import dev.invoice.collection.InvoiceItem;
import dev.invoice.repository.InvoiceItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvoiceItemService {
    @Autowired

    private InvoiceItemRepository invoiceItemRepository;

    public InvoiceItem createInvoiceItem(InvoiceItem invoiceItem){
        return invoiceItemRepository.save(invoiceItem);
    }

    public List<InvoiceItem> getAllInvoiceItem(){
        return invoiceItemRepository.findAll();
    }

    public InvoiceItem getSingleInvoiceItem(String id){
        return invoiceItemRepository.findById(id).orElse(null);
    }

    public InvoiceItem updateInvoiceItem( String id, InvoiceItem invoiceItem){
        invoiceItem.setId(id);
        return invoiceItemRepository.save(invoiceItem);
    }

    public void deleteInvoiceItem(String id){
       invoiceItemRepository.deleteById(id);
    }
}
