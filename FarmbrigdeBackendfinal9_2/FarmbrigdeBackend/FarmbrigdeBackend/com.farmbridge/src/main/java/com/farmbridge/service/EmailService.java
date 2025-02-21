package com.farmbridge.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public interface EmailService {

	public void sendOTP(String email);
	

}
