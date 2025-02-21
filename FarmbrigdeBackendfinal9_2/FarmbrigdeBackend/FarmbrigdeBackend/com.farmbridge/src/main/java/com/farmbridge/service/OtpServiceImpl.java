package com.farmbridge.service;

import java.time.LocalDateTime;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.farmbridge.custom_exceptions.ResourceNotFoundException;
import com.farmbridge.dto.OtpDto;
import com.farmbridge.dto.OtpResDto;
import com.farmbridge.dto.PasswordResetRequest;
import com.farmbridge.entities.Otp;
import com.farmbridge.entities.BuyerEntity;
import com.farmbridge.repository.OtpRepository;
import com.farmbridge.repository.BuyerEntityRepository;



@Service
@Transactional
public class OtpServiceImpl implements OtpService {

	@Autowired
	OtpRepository otpRepository;

	@Autowired
	private BuyerEntityRepository userEntityRepository;

	@Autowired
	private ModelMapper mapper;

	@Override
	public String addOTP(OtpDto otpDto) {
		System.out.println("Adding OTP for email: " + otpDto.getEmail() + " and otp: " + otpDto.getOtp());
		Otp otp = new Otp();
		otp.setEmail(otpDto.getEmail());
		otp.setOtp(otpDto.getOtp());
		otp.setGenerationTime(LocalDateTime.now());
		otp.setExpirationTime(otp.getGenerationTime().plusMinutes(5));
		Otp otp2 = otpRepository.save(otp);
		return "otp sending done !!";
	}

	@Override
	public OtpResDto verifyOtp(OtpDto dto) {
		Optional<Otp> optional = otpRepository.findByEmailAndOtp(dto.getEmail(), dto.getOtp());
		BuyerEntity optional2 = userEntityRepository.findByEmail(dto.getEmail())
				.orElseThrow(() -> new ResourceNotFoundException("invalid email"));
		System.out.println(optional2.getRole());
		Otp otp = optional.orElseThrow(() -> new ResourceNotFoundException("invalid email or otp !"));
		otp.setRole(optional2.getRole().toString());
		if (otp.getExpirationTime().isBefore(LocalDateTime.now())) {
			throw new ResourceNotFoundException("OTP has expired !!! ");
		}
		return mapper.map(otp, OtpResDto.class);
	}

	@Override
	public boolean verifyResetOtp(PasswordResetRequest passwordResetRequest) {
		Optional<Otp> optional = otpRepository.findByEmailAndOtp(passwordResetRequest.getEmail(),passwordResetRequest.getOtp());
		System.out.println(optional);
		BuyerEntity optional2 = userEntityRepository.findByEmail(passwordResetRequest.getEmail())
				.orElseThrow(() -> new ResourceNotFoundException("invalid email or otp !!"));	
		if(optional2.getEmail() != null) {
			return true;
		}
		return false;
		
	}
}
