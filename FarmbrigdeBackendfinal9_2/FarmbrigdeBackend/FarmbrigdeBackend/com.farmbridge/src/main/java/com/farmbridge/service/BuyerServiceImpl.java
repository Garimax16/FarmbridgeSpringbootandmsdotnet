package com.farmbridge.service;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.farmbridge.custom_exceptions.ApiException;
import com.farmbridge.custom_exceptions.ResourceNotFoundException;
import com.farmbridge.dto.BuyerDTO;
import com.farmbridge.dto.BuyerProfileDto;
import com.farmbridge.dto.PasswordResetRequest;
import com.farmbridge.dto.Signup;
import com.farmbridge.entities.BuyerEntity;
import com.farmbridge.entities.Cart;
import com.farmbridge.repository.BuyerEntityRepository;
import com.farmbridge.repository.CartRepository;


@Service
@Transactional
public class BuyerServiceImpl implements BuyerService {
	//dep : dao layer i/f
		@Autowired
		private BuyerEntityRepository userDao;
		
		 @Autowired 
		    private BuyerEntityRepository buyerRepo;
		 @Autowired 
		    private CartRepository cartRepo;
		//dep
		@Autowired
		private ModelMapper mapper;
		//dep 
		@Autowired
		private PasswordEncoder encoder;
	@Override
	public Signup BuyerRegistration(Signup reqDTO) {
		//dto --> entity
		Cart c=new Cart();
		BuyerEntity user=mapper.map(reqDTO, BuyerEntity.class);
		if(userDao.existsByEmail(reqDTO.getEmail()))
			throw new ApiException("Email already exists !!!");
		
		user.setPassword(encoder.encode(user.getPassword()));//pwd : encrypted using SHA
		BuyerEntity u=userDao.save(user);
		c.setId(u.getId());
        c.setBuyer(u);
        cartRepo.save(c);
		return mapper.map(u, Signup.class);
	}
	@Override
	public BuyerProfileDto getBuyerProfileByEmail(String email) {
		// TODO Auto-generated method stub
		 BuyerEntity user = userDao.findByEmail(email)
	                .orElseThrow(() -> new ApiException("User not found with email: " + email));
	        // Map entity to DTO and return
	        return mapper.map(user, BuyerProfileDto.class);
		
	}
	
	  @Override
		public BuyerDTO findById(Long id) {
			  BuyerEntity c= buyerRepo.findById(id).orElse(null);
			 BuyerDTO buyer= mapper.map(c, BuyerDTO.class);
			buyer.setFullName(c.getName());
			buyer.setContactNo(c.getPhone());
//			buyer.setPincode(c.ge);
			 buyer.setCart_id(c.getCart().getId());
			  return buyer;
			}
	
	 @Override
	    public BuyerEntity updateBuyerDetails(Long userId, BuyerEntity updatedUser) {
	        BuyerEntity existingUser = userDao.findById(userId)
	                .orElseThrow(() -> new ApiException("User not found with id: " + userId));

	        existingUser.setName(updatedUser.getName());
	        existingUser.setEmail(updatedUser.getEmail());
	        existingUser.setPhone(updatedUser.getPhone());
	        existingUser.setPassword(updatedUser.getPassword());
	        existingUser.setAddress(updatedUser.getAddress());

	        return userDao.save(existingUser);
	    }
	@Override
	public void updatePassword(PasswordResetRequest passResDTO) {
		Optional<BuyerEntity> optional = userDao.findByEmail(passResDTO.getEmail());
		BuyerEntity userEntity = optional.orElseThrow(() -> new ResourceNotFoundException("Invalid email or otp !!!!"));
		if (optional.isPresent()) {
			userEntity.setPassword(encoder.encode(passResDTO.getNewPassword()));
			
			userDao.save(userEntity);
		} else {
			throw new RuntimeException("User not found");
		}

	}
	
}
