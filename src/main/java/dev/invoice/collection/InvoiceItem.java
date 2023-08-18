package dev.invoice.collection;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="invoiceItem")
@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class InvoiceItem {
    @Id
    private String id;
    private String name;
    private int quantity;
    private double price;
    private double total;
    public void setId(String id) {
        this.id = id;
    }
}
