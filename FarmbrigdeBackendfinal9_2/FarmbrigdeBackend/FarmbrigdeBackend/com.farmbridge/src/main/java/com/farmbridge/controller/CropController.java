package com.farmbridge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.farmbridge.dto.CropDTO;
import com.farmbridge.dto.FarmerDTO;
import com.farmbridge.repository.ApiResponse;
import com.farmbridge.service.CropService;
import com.farmbridge.service.FarmerService;

import jakarta.validation.Valid;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/crops")
public class CropController {

	@Autowired
	private CropService cropService;
	

	@Autowired
	private FarmerService farmerService;
	

	@GetMapping("/view")
//	@PreAuthorize("hasRole('ROLE_BUYER')")
	public ResponseEntity<?> viewCrops(){
		
		return ResponseEntity.ok(cropService.getAllCrops());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getCropById(@PathVariable long id){
		
		
		return ResponseEntity.ok(cropService.getCropById(id));
	}
	
	@PostMapping("/add")
//	@PreAuthorize("hasRole('ROLE_FARMER')")
	public ResponseEntity<?> addCrop(@RequestBody @Valid CropDTO c)
	{
		FarmerDTO farmerDTO = farmerService.findById(c.getFarmerId());
		if (farmerDTO == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid farmer ID: Farmer not found.");
        }


		return ResponseEntity.status(HttpStatus.CREATED).body(cropService.addNewCrop(c, farmerDTO));
	}	
	@PutMapping("/edit/{id}")
//	@PreAuthorize("hasRole('ROLE_FARMER')")
	public ResponseEntity<?> updateCrop(@RequestBody @Valid CropDTO c,long id)
	{
		 try {
		        ApiResponse response = cropService.updateCrop(c,id);
		        return ResponseEntity.ok(response);
		    } catch (Exception e) {
		        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("Error deleting crop: " + e.getMessage()));
		    }
		
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteCrop(@PathVariable Long id) {
	    try {
	        ApiResponse response = cropService.deleteCrop(id);
	        return ResponseEntity.ok(response);
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("Error deleting crop: " + e.getMessage()));
	    }
	}
}
