package com.blackstone.spring.exceptions;

public class ApiExceptionInfo {
	private final String message;
	private final String details;
	
	public ApiExceptionInfo() {
		message = null;
		details = null;
	}
	
	public ApiExceptionInfo(String message, String details) {
		this.message = message;
		this.details = details;
		
	}

	public String getMessage() {
		return message;
	}

	public String getDetails() {
		return details;
	}
	
}
