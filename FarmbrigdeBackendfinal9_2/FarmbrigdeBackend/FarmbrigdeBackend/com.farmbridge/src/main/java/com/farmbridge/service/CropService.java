package com.farmbridge.service;

import java.util.List;

import com.farmbridge.dto.CartDTO;
import com.farmbridge.dto.CropDTO;
import com.farmbridge.dto.FarmerDTO;
import com.farmbridge.repository.ApiResponse;

public interface CropService {
	
	public List<CropDTO> getAllCrops();
	public ApiResponse addNewCrop(CropDTO c,FarmerDTO f);
	public ApiResponse deleteCrop(Long id);
	public CropDTO getCropById(Long id);
	public ApiResponse changeCropStatus(long id);
	 public CropDTO findById(Long id);
	 public ApiResponse updateCrop(CropDTO c,long id);
}
