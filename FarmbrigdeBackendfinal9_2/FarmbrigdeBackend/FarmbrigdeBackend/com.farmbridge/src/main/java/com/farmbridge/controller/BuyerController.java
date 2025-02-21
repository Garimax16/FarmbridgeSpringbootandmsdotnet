//package com.farmbridge.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.farmbridge.dto.BuyerDTO;
//import com.farmbridge.service.BuyerService;
//
//import jakarta.validation.Valid;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:3000")
//@RequestMapping("/api/buyers")  
//public class BuyerController {
//    
//    @Autowired
//    private BuyerService buyerService;
//    
//    @GetMapping("/view")  
//    public ResponseEntity<?> viewBuyers() {
//        return ResponseEntity.ok(buyerService.getAllBuyers());
//    }
//    
//    @PostMapping("/add")  
//    public ResponseEntity<?> addBuyer(@RequestBody @Valid BuyerDTO b) {
//        System.out.println(b);
//        return ResponseEntity.status(HttpStatus.CREATED).body(buyerService.addNewBuyer(b));
//    }    
//}
//
package com.farmbridge.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.farmbridge.dto.ApiResponse;
import com.farmbridge.dto.BuyerDTO;
import com.farmbridge.dto.BuyerProfileDto;
import com.farmbridge.dto.PasswordResetRequest;
import com.farmbridge.dto.SigninRequest;
import com.farmbridge.dto.SigninResponse;
import com.farmbridge.dto.Signup;
import com.farmbridge.entities.BuyerEntity;
import com.farmbridge.security.JwtUtils;
import com.farmbridge.service.BuyerService;
import com.farmbridge.service.EmailService;
import com.farmbridge.service.OtpService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/users")
//@CrossOrigin(origins = "*")
@CrossOrigin(origins = "http://localhost:3000")
public class BuyerController {
	@Autowired
	private BuyerService userService;

	@Autowired
	private JwtUtils jwtUtils;

	@Autowired
	private AuthenticationManager authMgr;
	
	@Autowired
	private EmailService emailService;
	
	@Autowired
	private OtpService otpService;

	@PostMapping("/signup")
	public ResponseEntity<?> userSignup(@RequestBody @Valid Signup dto) {
		System.out.println("in sign up " + dto);
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(userService.BuyerRegistration(dto));
	}

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody 
			@Valid SigninRequest request) {
		System.out.println("in sign in" + request);//=> email n password : valid(P.L)
		UsernamePasswordAuthenticationToken token = 
				new UsernamePasswordAuthenticationToken(request.getEmail(),
				request.getPassword());
		Authentication verifiedToken = authMgr.authenticate(token);
		SigninResponse resp = new SigninResponse
				(jwtUtils.generateJwtToken(verifiedToken), "Successful Auth!!!!");
		return ResponseEntity.status(HttpStatus.CREATED).body(resp);
	}
		
	@GetMapping("/profile")
	public ResponseEntity<BuyerProfileDto> getUserProfile(Principal principal) {
	    // Fetch the authenticated user's email
	    String email = principal.getName();

	    // Fetch the user profile details from the service layer
	    BuyerProfileDto userProfile = userService.getBuyerProfileByEmail(email);

	    // Return the user profile
	    return ResponseEntity.ok(userProfile);
	}
	
	
	@GetMapping("/view/{userId}")
	@PreAuthorize("hasRole('ROLE_BUYER')")
	public ResponseEntity<BuyerDTO> getBuyerById(@PathVariable long userId) {
	    // Fetch the authenticated user's email
	    

	    // Fetch the user profile details from the service layer
	    BuyerDTO userProfile = userService.findById(userId);

	    // Return the user profile
	    return ResponseEntity.ok(userProfile);
	}
	
//	@PutMapping("/{userId}")
//    public ApiResponse updateUserDetails(@PathVariable Long userId, @RequestBody UserEntity updatedUser) {
//        // Call service to update user details
//        UserEntity updated = userService.updateUserDetails(userId, updatedUser);
//        return new ApiResponse();
//    }
	
	 @PutMapping("/{userId}")
	    public ResponseEntity<ApiResponse> updateUserDetails(
	            @PathVariable Long userId, 
	            @RequestBody BuyerEntity updatedUser) {
	        BuyerEntity updated = userService.updateBuyerDetails(userId, updatedUser);
	        return ResponseEntity.ok(new ApiResponse("User updated successfully"));
	        
	 }
	 
	 @PostMapping("/forgotpass/{email}")
		public String forgotPassMail(@PathVariable("email") String email) {
			emailService.sendOTP(email);
			return "otp send successfully";
		}
	 
	 @PostMapping("/reset-password")
		public ResponseEntity<?> resetPassword(@RequestBody PasswordResetRequest passwordResetRequest) {
			try {
				boolean otpVerified = otpService.verifyResetOtp(passwordResetRequest);
				if (otpVerified) {
					userService.updatePassword(passwordResetRequest);
					return ResponseEntity.ok("Password updated successfully.");
				} else {
					return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid OTP.");
				}
			} catch (Exception e) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
						.body("Error resetting password: " + e.getMessage());
			}
	 }


	

}


