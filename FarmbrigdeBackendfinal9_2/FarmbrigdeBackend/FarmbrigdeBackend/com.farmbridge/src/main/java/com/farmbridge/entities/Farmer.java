package com.farmbridge.entities;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="farmer")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper=true ,exclude={"password","crops","orders"})
public class Farmer extends BaseEntity {

	@Column(name="fullname")
	  @NotNull
	  @Size(max = 255)
	private String fullName;
	  @NotNull
	  @Size(max = 255)
	private String address;
	  
	@Column(name="contact_no",unique=true)
	@Pattern(regexp = "\\+?[0-9]{7,15}", message = "Invalid contact number")
	  @NotNull
	private String contact;
	@Column(name="adharcard_no",unique=true)
	@Pattern(regexp = "^[2-9][0-9]{11}$", message = "Invalid Aadhaar number")
	  @NotNull
	private String adharcard;
	@Column(name="email_address")
	@Pattern(
		        regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
		        message = "Invalid email address"
		    )
	
	private String email;
	
	
	@Size(min = 6, message = "The value must have at least 6 characters")
	  @NotNull
	  
	private String password;
	
	@OneToMany(mappedBy="farmer", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonManagedReference
	private List<Crop> crops=new ArrayList<Crop>();
	
	@OneToMany(mappedBy="farmer", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonManagedReference
	private List<OrderDetails> orders=new ArrayList<OrderDetails>();
//	  
	@Column(name="role")
	private String role="ROLE_Farmer";
	
}
