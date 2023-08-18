package dev.invoice.service;

import dev.invoice.collection.Invoice;
import dev.invoice.repository.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvoiceService {
    @Autowired

    private InvoiceRepository invoiceRepository;

    public Invoice createInvoice(Invoice invoice){
        return invoiceRepository.save(invoice);
    }

    public List<Invoice> getAllInvoice(){
        return invoiceRepository.findAll();
    }

    public Invoice getSingleInvoice(String id){
        return invoiceRepository.findById(id).orElse(null);
    }

    public Page<Invoice> getInvoicePaginated(int page, int size){
        return invoiceRepository.findAll(PageRequest.of(page, size));
    }

    public Page<Invoice> searchInvoice(String invoiceNumber, int page, int size){
        return invoiceRepository.findByInvoiceNumberContaining(invoiceNumber, PageRequest.of(page, size));
    }
    public Invoice updateInvoice(String id, Invoice invoice){
        invoice.setId(id);
        return invoiceRepository.save(invoice);
    }

    public void deleteInvoice(String id){
         invoiceRepository.deleteById(id);
    }
}
