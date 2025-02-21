package com.farmbridge.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CartItemDTO extends BaseDTO{

	@NotNull
    private long cart_id;

	private long buyer_id;
	
  	@NotNull
    private long crop_id;
  	
  	private String crop_name;

  	@NotNull  
  	private int quantity;
  
  	@NotNull
    private float totalPrice;
   
}
