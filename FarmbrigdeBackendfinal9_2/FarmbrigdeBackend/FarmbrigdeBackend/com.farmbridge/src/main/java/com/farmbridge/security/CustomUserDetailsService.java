//package com.farmbridge.security;
//
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.farmbridge.entities.BuyerEntity;
//import com.farmbridge.repository.BuyerEntityRepository;
//
//import lombok.AllArgsConstructor;
//
//@Service
//@Transactional
//@AllArgsConstructor
//public class CustomUserDetailsService implements UserDetailsService {
//	// depcy
//	private BuyerEntityRepository userEntityRepository;
//
//	@Override
//	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//		BuyerEntity user = userEntityRepository.findByEmail(email)
//				.orElseThrow(() -> new UsernameNotFoundException("Invalid Email !!!"));
//		return new CustomUserDetails(user);
//		
//		
//	}
//	
//}



package com.farmbridge.security;

import com.farmbridge.entities.Farmer;
import com.farmbridge.entities.BuyerEntity;
import com.farmbridge.repository.FarmerRepository;
import com.farmbridge.repository.BuyerEntityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final FarmerRepository farmerRepository;
    private final BuyerEntityRepository buyerRepository;

    @Override
    public UserDetails loadUserByUsername(String identifier) throws UsernameNotFoundException {
        // First, check if the identifier is a contact number for a Farmer
        Optional<Farmer> farmerOptional = farmerRepository.findByContact(identifier);
        if (farmerOptional.isPresent()) {
            Farmer farmer = farmerOptional.get();
            return User.builder()
                    .username(farmer.getContact())
                    .password(farmer.getPassword())
                    .roles(farmer.getRole()) // Ensure roles are correctly stored
                    .build();
        }

        // If not a Farmer, check if the identifier is an email for a BuyerEntity
        Optional<BuyerEntity> buyerOptional = buyerRepository.findByEmail(identifier);
        if (buyerOptional.isPresent()) {
            BuyerEntity buyer = buyerOptional.get();
            return new CustomUserDetails(buyer); // Assuming you have a CustomUserDetails class
        }

        throw new UsernameNotFoundException("User not found with contact or email: " + identifier);
    }
}
