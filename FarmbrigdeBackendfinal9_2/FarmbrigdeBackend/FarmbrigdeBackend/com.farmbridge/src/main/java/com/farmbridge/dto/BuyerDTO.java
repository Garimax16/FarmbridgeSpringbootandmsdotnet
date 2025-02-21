package com.farmbridge.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(callSuper=true)
public class BuyerDTO extends BaseDTO {
   
    @NotNull
    @Size(max = 255)
    private String fullName;

    @NotNull
    @Size(max = 255)
    private String address;

    @NotNull
    @Column(unique = true)
    @Pattern(
        regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
        message = "Invalid email address"
    )
    private String email;

    @NotNull
    @Size(min = 6, max = 6)
    private String pincode;

    @NotNull
    @Size(min = 10, max = 10)
    @Column(name="contact_no", unique=true)
    @Pattern(regexp = "\\+?[0-9]{7,15}", message = "Invalid contact number")
    private String contactNo;
    
  
    private long cart_id ;
    
}

