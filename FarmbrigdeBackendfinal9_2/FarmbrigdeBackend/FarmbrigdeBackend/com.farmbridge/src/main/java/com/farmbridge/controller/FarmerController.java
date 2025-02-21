package com.farmbridge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.farmbridge.dto.FarmerDTO;
import com.farmbridge.repository.ApiResponse;
import com.farmbridge.service.FarmerService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/farmers")
@CrossOrigin(origins = "http://localhost:3000")
public class FarmerController {
	
	@Autowired
	private FarmerService farmerService;
	
	@GetMapping("/view")
	public ResponseEntity<?> viewFarmers(){
		
		return ResponseEntity.ok(farmerService.getAllFarmers());
	}
	
	
	

	@PostMapping("/add")
	public ResponseEntity<?> addFarmer(@RequestBody @Valid FarmerDTO f) {
	    try {
	        System.out.println(f); // Logs the incoming request
	        return ResponseEntity.status(HttpStatus.CREATED).body(farmerService.addNewFarmer(f));
	    } catch (Exception e) {
	        System.err.println("Error during farmer registration: " + e.getMessage());
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
	    }
	}
	
//	@DeleteMapping("/delete/{id}")
//	public ResponseEntity<?> deleteFarmer(@PathVariable Long id) {
//	    try {
//	        ApiResponse response = farmerService.deleteFarmer(id);
//	        return ResponseEntity.ok(response);
//	    } catch (Exception e) {
//	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("Error deleting farmer: " + e.getMessage()));
//	    }
//	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteFarmer(@PathVariable Long id) {
	    try {
	        ApiResponse response = farmerService.deleteFarmer(id);
	        return ResponseEntity.ok(response);
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("Error deleting farmer: " + e.getMessage()));
	    }
	}

	
	
	

}
