package com.farmbridge.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="admin")
@Getter
@Setter
@ToString

public class Admin extends BaseEntity {
   
    
    @Email
    private String email;

    @NotNull
    @Size(min = 6)
    private String password;
    @Column(name="role")
	private String role="Admin";
    
}