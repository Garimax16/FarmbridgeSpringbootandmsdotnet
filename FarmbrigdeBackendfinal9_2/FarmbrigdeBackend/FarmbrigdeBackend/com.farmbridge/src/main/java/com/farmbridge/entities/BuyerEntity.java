package com.farmbridge.entities;


import java.time.LocalDate;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity // mandatory class level annotation for hibernate , to specify
//following class represents DB entity
@Table(name = "users") // to specify name of the table
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(callSuper = true, exclude = { "password"})

public class BuyerEntity extends BaseEntity {
	@Column
	private Long id;
	@Column
	private String name;

	@Column(unique = true)
	private String email;

	@Column(unique = true)
	private String phone;
	@Column
	private String address;
	@Column
	private String password;
	@Enumerated(EnumType.STRING)
	@Column(length = 30) 
	private UserRole role;
	
	@OneToOne
    (mappedBy="buyer",cascade = CascadeType.ALL, orphanRemoval = true)
    private Cart cart;
	
}
