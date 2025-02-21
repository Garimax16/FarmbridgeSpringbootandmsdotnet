package com.farmbridge.dto;

import com.farmbridge.entities.UserRole;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Signup {
	@JsonProperty(access = Access.READ_ONLY) // this property only used during ser.
	private Long id;

    @NotBlank(message = "Name is required")
    private String name;

    @Email(message = "Invalid email format")
    private String email;

    @NotBlank(message = "Password is required")
    @JsonProperty(access = Access.WRITE_ONLY) // Used only during deserialization
    private String password;

    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "\\d{10}", message = "Phone number must be 10 digits")
    private String phone;

    private String address;

    private UserRole role;

    // Constructor
    public Signup(String name, String email, String password, String phone, String address, UserRole role) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.role = role;
    }
	
}
