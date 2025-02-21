package com.farmbridge.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class OtpDto {

	private String email;
	private String otp;
	private String role;

}
