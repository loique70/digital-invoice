package dev.invoice.collection;
import com.fasterxml.jackson.annotation.JsonInclude;
import dev.invoice.collection.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


/*
This class allow us to create the customer entity with his properties.
We have using lombok package to generate class methods such as getters,setters(@Data) and the constructors(@Builder)
@JsonInclude(JsonInclude.Include.NON_NULL) avoid that the document can't be empty.
@Id Specify that our primary key is id property.
* */
@Document(collection = "customer")
@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Customer {
    @Id
    private String id;
    private String name;
    private String email;
    private String phone;
    private Address address;
//    private List<Invoice> invoice;

    public void setId(String id) {
        this.id = id;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
}

