package dev.invoice.collection;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "address")
@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Address {
    @Id
    private String id;
    private String street;
    private String city;
    private String state;
    private String zipCode;
    private String country;
    public void setId(String id) {
        this.id = id;
    }
}
