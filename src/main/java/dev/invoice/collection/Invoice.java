package dev.invoice.collection;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "invoice")
@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Invoice {
    @Id
    private String id;
    private String invoiceNumber;
    @Getter
    private Customer customer;
    private List<InvoiceItem> items;
    private Address billingAddress;
    private double totalAmount;

    public void setId(String id) {
        this.id = id;
    }

    public void setCustomerId(String id) {
        if (this.customer == null) {
            this.customer = new Customer();
        }
        this.customer.setId(id);
    }

    public void setBillingAddressId(String id) {
        if (this.billingAddress == null) {
            this.billingAddress = new Address();
        }
        this.billingAddress.setId(id);
    }

}
