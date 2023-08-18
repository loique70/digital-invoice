package dev.invoice.repository;

import dev.invoice.collection.InvoiceItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvoiceItemRepository extends MongoRepository<InvoiceItem, String> {
}
