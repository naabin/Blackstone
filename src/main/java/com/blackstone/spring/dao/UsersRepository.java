package com.blackstone.spring.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.blackstone.spring.model.security.User;
@Repository
public interface UsersRepository extends JpaRepository<User, Long> {
	
	User findByUsername(String name);
}
