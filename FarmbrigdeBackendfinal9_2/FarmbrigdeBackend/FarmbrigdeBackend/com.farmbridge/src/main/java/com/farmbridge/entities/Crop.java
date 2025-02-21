package com.farmbridge.entities;



import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="crop")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper=true ,exclude={"img","orderDetails_id","cart_id","farmer"})
public class Crop extends BaseEntity {
    @NotNull
	@Size(max = 255)
	private String name;
    @NotNull
	
    @Enumerated(EnumType.STRING)
	private Season season;
    @NotNull
	private double quantity;
    
    @Enumerated(EnumType.STRING)
	private Status status;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name="farmer_id",nullable=false)
	@JsonBackReference
	private Farmer farmer;
	
	
	@OneToMany
	(mappedBy="crop", cascade = CascadeType.ALL,orphanRemoval=true)
	@JsonManagedReference
	private List<CartItem> cartItems;
	
	@OneToMany(mappedBy="crop",cascade=CascadeType.ALL,orphanRemoval=true)
	@JsonManagedReference
	private List<OrderDetails> orderDetails_id;
	
	private byte[] img;
	
	
	@NotNull
	private float price;

    
	public enum Season {
        RABI, KHARIF, ZAID,Perennial
    }

    public enum Status {
        PENDING, APPROVED, REJECTED
    }

	  
	
}
