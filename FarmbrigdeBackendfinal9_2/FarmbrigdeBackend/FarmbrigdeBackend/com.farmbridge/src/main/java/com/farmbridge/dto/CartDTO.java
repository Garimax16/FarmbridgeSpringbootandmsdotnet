package com.farmbridge.dto;

import java.util.ArrayList;
import java.util.List;

import com.farmbridge.entities.BuyerEntity;
import com.farmbridge.entities.Cart;
import com.farmbridge.entities.CartItem;
import com.farmbridge.entities.Crop;

import jakarta.persistence.CascadeType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CartDTO extends BaseDTO{
	
	@NotNull
    private Long buyer_id;
 
    
    private List<CartItemDTO> cartItem=new ArrayList<>();

    @NotNull
    public double totalAmount;

}
