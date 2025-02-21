//
//
//package com.farmbridge.service;
//
//import java.util.List;
//import java.util.stream.Collectors;
//
//import org.modelmapper.ModelMapper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.farmbridge.dto.FarmerDTO;
//import com.farmbridge.entities.Farmer;
//import com.farmbridge.repository.ApiResponse;
//import com.farmbridge.repository.FarmerRepository;
//
//@Service
//@Transactional
//public class FarmerServiceImpl implements FarmerService {
//
//	
//	@Autowired
//	private FarmerRepository farmerRepo;
//	
//	@Autowired
//	private ModelMapper mapper;
//	
//	@Override
//	public List<FarmerDTO> getAllFarmers() {
//	return farmerRepo.findAll().stream().map(farmer->mapper.map(farmer,FarmerDTO.class)).collect(Collectors.toList());
//	}
//
//	@Override
//	public ApiResponse addNewFarmer(FarmerDTO f) {
//		Farmer farmer=mapper.map(f,Farmer.class); 
//		Farmer savedFarmer=farmerRepo.save(farmer);
//		
//		return new ApiResponse("Added succesfully"+savedFarmer.getId());
//		
//	}
//
//	@Override
//	public ApiResponse deleteFarmer(Long id) {
//	    Farmer farmer = farmerRepo.findById(id).orElseThrow(() -> 
//	        new IllegalArgumentException("Farmer with ID " + id + " not found.")
//	    );
//	    farmerRepo.delete(farmer);
//	    return new ApiResponse("Farmer with ID " + id + " deleted successfully.");
//	}
//
//	public FarmerDTO findById(Long id) {
//		  Farmer f= farmerRepo.findById(id).orElse(null);
//		  return mapper.map(f, FarmerDTO.class);
//		}
//}
//
//
//
//
//

package com.farmbridge.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.farmbridge.dto.FarmerDTO;
import com.farmbridge.entities.Farmer;
import com.farmbridge.repository.ApiResponse;
import com.farmbridge.repository.FarmerRepository;


@Service
@Transactional
public class FarmerServiceImpl implements FarmerService {

    @Autowired
    private FarmerRepository farmerRepo;

    @Autowired
    private ModelMapper mapper;

//    @Autowired
//    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;  // ✅ Inject password encoder

    @Override
    public List<FarmerDTO> getAllFarmers() {
        return farmerRepo.findAll().stream()
                .map(farmer -> mapper.map(farmer, FarmerDTO.class))
                .collect(Collectors.toList());
    }
    
    @Override
    public FarmerDTO findById(Long id) {  
        Farmer farmer = farmerRepo.findById(id).orElse(null);
        return mapper.map(farmer, FarmerDTO.class);
    }

    @Override
    public ApiResponse editFarmer(Long id, FarmerDTO farmerDTO) {
        // Find the existing farmer by ID
        Farmer farmer = farmerRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Farmer with ID " + id + " not found."));
        
        // Update only provided fields
        farmer.setFullName(farmerDTO.getFullName()); 
        farmer.setContact(farmerDTO.getContact());
        farmer.setAddress(farmerDTO.getAddress());
        farmer.setAdharcard(farmerDTO.getAdharcard());
        farmer.setEmail(farmerDTO.getEmail());
        
        // ✅ Only update password if a new one is provided
        if (farmerDTO.getPassword() != null && !farmerDTO.getPassword().isEmpty()) {
            farmer.setPassword(passwordEncoder.encode(farmerDTO.getPassword())); // Hash password
        }

        farmer.setRole(farmerDTO.getRole());

        // Save the updated farmer
        farmerRepo.save(farmer);
        
        return new ApiResponse("Farmer with ID " + id + " updated successfully.");
    }

    @Override
    public ApiResponse addNewFarmer(FarmerDTO f) {
        Farmer farmer = mapper.map(f, Farmer.class);
        
        // ✅ Encrypt password before saving
        farmer.setPassword(passwordEncoder.encode(f.getPassword()));

        Farmer savedFarmer = farmerRepo.save(farmer);
        return new ApiResponse("Farmer registered successfully with ID: " + savedFarmer.getId());
    }

    @Override
    public ApiResponse deleteFarmer(Long id) {
        Farmer farmer = farmerRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Farmer with ID " + id + " not found."));
        farmerRepo.delete(farmer);
        return new ApiResponse("Farmer with ID " + id + " deleted successfully.");
    }

//    public String authenticateFarmer(String contact, String password) {
//        // Fetch farmer by contact number
//        Farmer farmer = farmerRepo.findByContact(contact)
//                .orElseThrow(() -> new BadCredentialsException("Farmer not found"));
//
//        // ✅ Check password using BCrypt
//        if (!passwordEncoder.matches(password, farmer.getPassword())) {
//            throw new BadCredentialsException("Invalid password");
//        }
//
//        // Generate JWT token
//        UserDetails userDetails = userDetailsService.loadUserByUsername(contact);
//        return jwtUtil.generateToken(userDetails.getUsername());
//    }
    public Farmer authenticateFarmer(String contact, String password) {
        Farmer farmer = farmerRepo.findByContact(contact)
                .orElseThrow(() -> new BadCredentialsException("Farmer not found"));

        // ✅ Verify password using BCrypt
        if (!passwordEncoder.matches(password, farmer.getPassword())) {
            throw new BadCredentialsException("Invalid password");
        }

        // ✅ Pass the `Farmer` object instead of a string
        return farmer;
    }

}

