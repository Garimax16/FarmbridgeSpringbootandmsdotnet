package com.farmbridge.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="cart")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Cart{
 
	@Id
	private long id;
	
     @NotNull
     @OneToOne
     @JoinColumn(name="buyer_id")
     private BuyerEntity buyer;
  
     @NotNull
     @OneToMany(mappedBy="cart", cascade=CascadeType.ALL ,orphanRemoval=true)
     private List<CartItem> cartItem=new ArrayList<>();

     @NotNull
      public double totalAmount;
   
}
