package com.farmbridge.service;


import java.security.SecureRandom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.farmbridge.dto.OtpDto;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String sender;
    
    @Autowired
    private OtpService otpService;

    
	@Override
	public void sendOTP(String email) {
		String otp = generateOtp();
		
		try {
			sendOtpToMail(email,otp);
			storeOtpToDb(email,otp);
		}catch(MessagingException e) {
			throw new RuntimeException("enable to send otp!!");
		}
		
	}
	
	private String generateOtp() {
		System.out.println("generateotp");
		SecureRandom random = new SecureRandom();
		int otp = 100000 + random.nextInt(900000);
		return String.valueOf(otp);
	}
	
	private void sendOtpToMail(String email ,String otp) throws MessagingException{
	
		
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);
		mimeMessage.setFrom(sender);
		mimeMessageHelper.setTo(email);
		mimeMessageHelper.setSubject("Farmbridge");
		mimeMessageHelper.setText("Your otp for forgotPassword is : " + otp + " valid until  5 mins only !!! ");
		javaMailSender.send(mimeMessage);
	}
	
	private void storeOtpToDb(String email,String otp) {
		
		OtpDto otpDto = new OtpDto();
		otpDto.setEmail(email);
		otpDto.setOtp(otp);
		otpService.addOTP(otpDto);
		
	}

	
}
