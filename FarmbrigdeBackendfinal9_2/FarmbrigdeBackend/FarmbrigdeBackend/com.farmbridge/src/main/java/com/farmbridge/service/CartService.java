package com.farmbridge.service;

import java.util.List;

import com.farmbridge.dto.CartDTO;
import com.farmbridge.dto.CartItemDTO;
import com.farmbridge.entities.CartItem;
import com.farmbridge.repository.ApiResponse;

public interface CartService {
	
	   public ApiResponse add(CartItemDTO cartItem);
	   public CartDTO findById(long id);
	   public List<CartItemDTO> displayCart(long id);
		public ApiResponse deleteCartItem(long id);
	

}
