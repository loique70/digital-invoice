package dev.invoice;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;


@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "Invoice APIS", version = "1.0", description = "Invoice backend Apis."))
public class InvoicingAsignmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(InvoicingAsignmentApplication.class, args);
	}

}
