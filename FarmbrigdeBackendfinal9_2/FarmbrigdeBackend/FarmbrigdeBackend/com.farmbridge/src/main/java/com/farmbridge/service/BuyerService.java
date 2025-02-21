package com.farmbridge.service;


import org.springframework.boot.autoconfigure.security.SecurityProperties.User;

import com.farmbridge.dto.PasswordResetRequest;
import com.farmbridge.dto.Signup;
import com.farmbridge.dto.BuyerDTO;
import com.farmbridge.dto.BuyerProfileDto;
import com.farmbridge.entities.BuyerEntity;


public interface BuyerService {
	//add signup method
	Signup BuyerRegistration(Signup reqDTO);

    BuyerProfileDto getBuyerProfileByEmail(String email);
    
    // Method to update user details
    BuyerEntity updateBuyerDetails(Long userId, BuyerEntity updatedUser);
    
    public void updatePassword(PasswordResetRequest passResDTO) ;

    public BuyerDTO findById(Long id);
    
}
