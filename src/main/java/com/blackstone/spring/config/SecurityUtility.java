package com.blackstone.spring.config;

import java.security.SecureRandom;
import java.util.Random;

import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class SecurityUtility {

	private static final String SALT = "iamthehighway";
	
	@Bean
	public static BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder(12, new SecureRandom(SALT.getBytes()));
	}
	
	@Bean
	public static String randomPassword() {
		String SALTCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
		StringBuilder salt = new StringBuilder();
		
		Random random = new Random();
		
		while(salt.length() < 18) {
			int index = random.nextInt() * SALTCHARS.length();
			salt.append(index);
		}
		
		String saltString = salt.toString();
		return saltString;
	}
}
