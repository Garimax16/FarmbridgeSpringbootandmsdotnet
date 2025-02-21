package com.farmbridge.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.farmbridge.dto.CartDTO;
import com.farmbridge.dto.CropDTO;
import com.farmbridge.dto.FarmerDTO;
import com.farmbridge.entities.Cart;
import com.farmbridge.entities.Crop;
import com.farmbridge.entities.Crop.Status;
import com.farmbridge.entities.Farmer;
import com.farmbridge.repository.ApiResponse;
import com.farmbridge.repository.CropRepository;

@Service
@Transactional
public class CropServiceImpl implements CropService{
	
	


	@Autowired
	private CropRepository cropRepo;
	
	@Autowired
	private ModelMapper mapper;

	
	
	@Override
	public ApiResponse updateCrop(CropDTO  c ,long id) {
		Crop crop=cropRepo.findById(id).orElseThrow(()->new IllegalArgumentException("Crop with ID " + c.getId() + " not found."));
		crop.setName(c.getName());
		crop.setPrice(c.getPrice());
		crop.setQuantity(c.getQuantity());
		crop.setSeason(Crop.Season.valueOf(c.getSeason().name()));
		return new ApiResponse("Updated crop with ID"+id);
	}
	@Override
	public List<CropDTO> getAllCrops() {

		return cropRepo.findAll().stream().filter(crop->crop.getStatus()==Status.APPROVED).map(crop->{ CropDTO cropDTO = mapper.map(crop, CropDTO.class);
        
        // Set additional farmer details
        cropDTO.setFarmerId(crop.getFarmer().getId());
//        cropDTO.setFarmer_name(crop.getFarmer().getFullName());
        cropDTO.setContact(crop.getFarmer().getContact());
        return cropDTO;
    }).collect(Collectors.toList());
		
	}
//	   public List<CropDTO> getApprovedCrops() {
//	        List<Crop> crops = cropRepo.findByStatus("APPROVED");
//       return crops.stream().map(crop ->mapper.map(crop,CropDTO.class) ).collect(Collectors.toList());
//	    }

	@Override
	public ApiResponse addNewCrop(CropDTO c,FarmerDTO f) {
		Crop crop=mapper.map(c, Crop.class);
		Farmer farmer=mapper.map(f, Farmer.class);
		crop.setFarmer(farmer);
		Crop savedCrop=cropRepo.save(crop);
		return new ApiResponse("Added new product with ID"+savedCrop.getId());
	
	}

	

	@Override
	public ApiResponse deleteCrop(Long id) {
	Crop crop=cropRepo.findById(id).orElseThrow(()->new IllegalArgumentException("Crop with ID " + id + " not found."));
	cropRepo.delete(crop);	
	return new ApiResponse("Crop with id "+id+"deleted");
	}

	@Override
	public CropDTO getCropById(Long id) {
		Crop c=cropRepo.findById(id).orElseThrow(()->new IllegalArgumentException("Crop with ID " + id + " not found."));
		CropDTO crop=mapper.map(c,CropDTO.class);
		return crop;
	}

	@Override
	public ApiResponse changeCropStatus(long id) {
	       
		Crop c=cropRepo.findById(id).orElseThrow(()->new IllegalArgumentException("Crop with ID"+ id +"not found"));
//		c.setStatus().;
		return null;
	}


	public CropDTO findById(Long id) {
		  Crop c= cropRepo.findById(id).orElse(null);
		  return mapper.map(c, CropDTO.class);
		}
	
}
