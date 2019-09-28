package com.blackstone.spring.service;



import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.blackstone.spring.dao.UsersRepository;
import com.blackstone.spring.model.security.User;

@Service
public class CustomUserDetailService implements UserDetailsService {
	
	private static final Logger LOG = LoggerFactory.getLogger(CustomUserDetailService.class);

	
	@Autowired
	private UsersRepository usersRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = usersRepository.findByUsername(username);
		if(user == null) {
			LOG.warn("User {} not found with username", username);
			throw new UsernameNotFoundException("Username " + username + " not found.");
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), new ArrayList<>());
	}
}
