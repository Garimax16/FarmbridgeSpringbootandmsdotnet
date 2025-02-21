package com.farmbridge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.farmbridge.dto.CartItemDTO;
import com.farmbridge.repository.ApiResponse;
import com.farmbridge.service.BuyerService;
import com.farmbridge.service.CartService;
import com.farmbridge.service.CropService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/cart")
@PreAuthorize("hasRole('ROLE_BUYER')")
public class CartController {

	@Autowired
	private CartService cartService;

	@Autowired
	private CropService cropService;

	@Autowired
	private BuyerService buyerService;

	@PostMapping("/add/items")
	@PreAuthorize("hasRole('ROLE_BUYER')")
	public ResponseEntity<?> addToCart( @RequestBody 
			@Valid CartItemDTO cartItem) {
//		BuyerDTO buyer = buyerService.findById(BuyerId);
//		long id = cartItem.getCart_id();
//
//		CartDTO cart = cartService.findById(id);
//
//		if (buyer == null || cart == null) {
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Buyer or crop");
//		}
//
//		else {
//			return ResponseEntity.status(HttpStatus.CREATED).body(cartService.add(cartItem, cart));
//		}
		return ResponseEntity.status(HttpStatus.CREATED).body(cartService.add(cartItem));

	}
	
	@GetMapping("/view/{cartId}")
	@PreAuthorize("hasRole('ROLE_BUYER')")
	public ResponseEntity<?> displayCartItems(@PathVariable long cartId) {
		return ResponseEntity.ok(cartService.displayCart(cartId));

	}
	@PreAuthorize("hasRole('ROLE_BUYER')")
	@DeleteMapping("/delete/{cartItemId}")
	public ResponseEntity<?> deleteCartItem(@PathVariable long cartItemId) {
		try {
			ApiResponse response = cartService.deleteCartItem(cartItemId);
			return ResponseEntity.ok(response);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(new ApiResponse("Error deleting cart item" + e.getMessage()));
		}

	}
}
