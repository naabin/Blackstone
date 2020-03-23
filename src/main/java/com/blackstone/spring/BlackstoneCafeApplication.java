package com.blackstone.spring;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.blackstone.spring.config.SecurityUtility;
import com.blackstone.spring.model.Contact;
import com.blackstone.spring.model.security.Role;
import com.blackstone.spring.model.security.User;
import com.blackstone.spring.model.security.UserRole;
import com.blackstone.spring.service.GeneralService;
import com.blackstone.spring.service.UsersService;

@SpringBootApplication
public class BlackstoneCafeApplication implements CommandLineRunner {
	
	@Autowired
	private UsersService userService;
	
	@Autowired
	private GeneralService<Contact> contactService;
	
	

	public static void main(String[] args) {
		SpringApplication.run(BlackstoneCafeApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		User user1 = new User();
		
		user1.setFirstName("Sav");
		user1.setUsername("Sav");
		user1.setPassword(SecurityUtility.passwordEncoder().encode("Mary@sav"));
		
		Set<UserRole> userRoles = new HashSet<>();
		Role role = new Role();
		role.setRole("ROLE_ADMIN");
		
		userRoles.add(new UserRole(user1, role));
		
		this.userService.createUser(user1, userRoles);
		
		userRoles.clear();
		
		Contact contact = new Contact();
		contact.setName("Nabin Karki");
		contact.setEmail("naabin@outlook.com");
		contact.setMessage("Hi i was just wondering where i can make the order online");
		
		this.contactService.save(contact);
	}

}
