package com.farmbridge.service;

import com.farmbridge.dto.OtpDto;
import com.farmbridge.dto.OtpResDto;
import com.farmbridge.dto.PasswordResetRequest;

public interface OtpService {
	
	String addOTP(OtpDto otpDto);
	
	public OtpResDto verifyOtp(OtpDto dto);
	
	public boolean verifyResetOtp(PasswordResetRequest passwordResetRequest) ;
	

}
