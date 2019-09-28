package com.blackstone.spring.exceptions;

public class HTTP400Exception extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	public HTTP400Exception() {

	}
	
	public HTTP400Exception(String message, Throwable cause) {
		super(message, cause);
	}
	
	public HTTP400Exception(String message) {
		super(message);
	}
	
	public HTTP400Exception(Throwable cause) {
		super(cause);
	}

}
