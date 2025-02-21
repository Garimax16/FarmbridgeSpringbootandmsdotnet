package com.farmbridge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.farmbridge.dto.CartDTO;
import com.farmbridge.dto.CartItemDTO;
import com.farmbridge.dto.OrderDTO;
import com.farmbridge.dto.OrderDetailsDTO;
import com.farmbridge.service.CartService;
import com.farmbridge.service.OrderService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/orders")
//@PreAuthorize("hasRole('ROLE_BUYER')")
public class OrderController {

	
	
	@Autowired
	OrderService orderService;
	
	
	@Autowired
	CartService cartService;
	
//	
//	@GetMapping("/view")
//	public ResponseEntity<?> getAllOrders(){
//		
//		return ResponseEntity.ok(orderService.getAllOrders());
//	}
	
	
	@PostMapping("/add/{cartId}")
	@PreAuthorize("hasRole('ROLE_BUYER')")
	public ResponseEntity<?> addOrder(@PathVariable long cartId){
//		System.out.println(cartId);
		CartDTO cart = cartService.findById(cartId);
//		System.out.println(cart.getCartItem());
		if (cart == null) {
		    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cart not found with ID: " + cartId);
		}

		
		OrderDTO order=orderService.createOrderFromCart(cartId);
		
		
		
	
		return ResponseEntity.status(HttpStatus.CREATED).body(order);
		
	}
	
	@GetMapping("/view/{orderId}")
	@PreAuthorize("hasRole('ROLE_BUYER')")
	public ResponseEntity<?> viewOrder(@PathVariable long orderId)
	{
		OrderDTO order=orderService.findById(orderId);
		if (order == null) {
		    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cart not found with ID: " + orderId);
		}

		return ResponseEntity.status(HttpStatus.OK).body(order);
}
	
//	@GetMapping("/get/{userId}")
//	@PreAuthorize("hasRole('ROLE_BUYER')")
//	public ResponseEntity<?> viewBuyerOrders(@PathVariable long userId)
//	{
//		OrderDTO order=orderService.findByBuyerId(userId);
//		if (order == null) {
//		    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cart not found with ID: " + orderId);
//		}
//
//		return ResponseEntity.status(HttpStatus.OK).body(order);
//}
}
