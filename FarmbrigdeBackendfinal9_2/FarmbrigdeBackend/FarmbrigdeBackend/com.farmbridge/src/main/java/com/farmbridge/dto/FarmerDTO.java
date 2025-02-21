//package com.farmbridge.dto;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import com.farmbridge.dto.CropDTO;
//import com.farmbridge.entities.Order;
//
//import jakarta.persistence.CascadeType;
//import jakarta.persistence.Column;
//import jakarta.persistence.OneToMany;
//import jakarta.validation.constraints.NotNull;
//import jakarta.validation.constraints.Pattern;
//import jakarta.validation.constraints.Size;
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//public class FarmerDTO extends BaseDTO {
//
//	  @NotNull
//	  @Size(max = 255)
//	private String fullName;
//	  @NotNull
//	  @Size(max = 255)
//	private String address;
//	  
//	@Column(name="contact_no",unique=true)
//	@Pattern(regexp = "\\+?[0-9]{7,15}", message = "Invalid contact number")
//	  @NotNull
//	private String contact;
//	@Column(name="adharcard_no",unique=true)
//	@Pattern(regexp = "^[2-9][0-9]{11}$", message = "Invalid Aadhaar number")
//	  @NotNull
//	private String adharcard;
//	@Column(name="email_address")
//	@Pattern(
//		        regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
//		        message = "Invalid email address"
//		    )
//	
//	private String email;
//	
//	@Size(min = 6, message = "The value must have at least 6 characters")
//	  @NotNull
//	  
//	private String password;
//	 
//	
//	@Column(name="role")
//	private String role="Farmer";
//	
//}

package com.farmbridge.dto;

import jakarta.persistence.Column;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FarmerDTO extends BaseDTO {

    @NotNull
    @Size(max = 255)
    private String fullName;  // Farmer's full name

    @NotNull
    @Size(max = 255)
    private String address;

    @Column(name = "contact_no", unique = true)
    @Pattern(regexp = "\\+?[0-9]{7,15}", message = "Invalid contact number")
    @NotNull
    private String contact;

    @Column(name = "adharcard_no", unique = true)
    @Pattern(regexp = "^[2-9][0-9]{11}$", message = "Invalid Aadhaar number")
    @NotNull
    private String adharcard;

    @Column(name = "email_address")
    @Pattern(
        regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
        message = "Invalid email address"
    )
    private String email;

    @Size(min = 6, message = "The value must have at least 6 characters")
    @NotNull
    private String password;

    @Column(name = "role")
    private String role = "Farmer";

    // Add getName method
    public String getName() {
        return this.fullName;
    }

    
}

