package com.blackstone.spring.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.amazonaws.services.kms.model.DisabledException;
import com.blackstone.spring.config.JwtTokenUtil;
import com.blackstone.spring.model.security.JwtRequest;
import com.blackstone.spring.model.security.JwtResponse;
import com.blackstone.spring.model.security.User;
import com.blackstone.spring.model.security.UserRole;
import com.blackstone.spring.service.CustomUserDetailService;
import com.blackstone.spring.service.UsersService;

@RestController
@CrossOrigin
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private CustomUserDetailService userDetailService;
	
	@Autowired
	private UsersService userService;
	
	@RequestMapping(path = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest user) throws Exception{
		
		authenticate(user.getUsername(), user.getPassword());
		final UserDetails userDetails = this.userDetailService.loadUserByUsername(user.getUsername());
		
		final String token = this.jwtTokenUtil.generateToken(userDetails);
		return ResponseEntity.ok(new JwtResponse(token));
		
	}
	
	@RequestMapping(path = "/logout", method = RequestMethod.POST)
	public ResponseEntity<?> logout(){
		SecurityContextHolder.clearContext();
		return ResponseEntity.ok().body("Logout successfully");
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> createUser(@RequestBody User user, @RequestBody Set<UserRole> userRole) {
		return ResponseEntity.ok(this.userService.createUser(user, userRole));
	}
	
	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		}
		catch(DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		}
		catch(BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
}
