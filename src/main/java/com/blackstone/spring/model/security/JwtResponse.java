package com.blackstone.spring.model.security;

import java.io.Serializable;

public class JwtResponse implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3351928333225799274L;
	
	private final String jwtToken;
	
	public JwtResponse(String jwtToken) {
		this.jwtToken = jwtToken;
	}
	
	public String getToken() {
		return this.jwtToken;
	}
	
}
