package com.farmbridge.dto;

import com.farmbridge.entities.UserRole;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class BuyerProfileDto {
    private Long id;        // User ID
    private String name;    // Full name of the user
    private String email;   // Email address
    private String phone;   // Phone number
    private String address; // Address
    private UserRole role;  // Role of the user (e.g., ADMIN, USER)
}
