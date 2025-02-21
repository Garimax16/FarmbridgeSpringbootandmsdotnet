package com.farmbridge.entities;



import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="cart_item")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class CartItem extends BaseEntity {
    
	@NotNull
    @ManyToOne
    @JoinColumn(name = "cart_id")
    private Cart cart;

  	@NotNull
    @ManyToOne
    @JoinColumn(name = "crop_id")
  	@JsonBackReference
    private Crop crop;

  	@NotNull  
  	private int quantity;
  
  	@NotNull
    private float totalPrice;

   
}