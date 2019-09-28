package com.blackstone.spring.service;

import java.util.Set;

import com.blackstone.spring.model.security.User;
import com.blackstone.spring.model.security.UserRole;

public interface UsersService {

	User createUser(User user, Set<UserRole> userRoles);
}
