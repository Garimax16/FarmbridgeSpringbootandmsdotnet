package com.farmbridge.custom_exceptions;

public class ApiException extends RuntimeException {
	public ApiException(String mesg) {
		super(mesg);
	}
}
