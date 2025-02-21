//package com.farmbridge.service;
//
//import java.util.List;
//
//import com.farmbridge.dto.FarmerDTO;
//import com.farmbridge.repository.ApiResponse;
//
//public interface FarmerService {
//	
//	List<FarmerDTO> getAllFarmers();
//	ApiResponse addNewFarmer(FarmerDTO f);
//	public FarmerDTO findById(Long id);
//	ApiResponse deleteFarmer(Long id);
//	
//
//
//}

package com.farmbridge.service;

import java.util.List;

import com.farmbridge.dto.FarmerDTO;
import com.farmbridge.repository.ApiResponse;

public interface FarmerService {
	
	List<FarmerDTO> getAllFarmers();
	ApiResponse addNewFarmer(FarmerDTO f);
	FarmerDTO findById(Long id);
	ApiResponse deleteFarmer(Long id);
	ApiResponse editFarmer(Long id, FarmerDTO f);  
	
}

