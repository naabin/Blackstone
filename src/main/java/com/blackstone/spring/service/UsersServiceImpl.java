package com.blackstone.spring.service;

import java.util.Set;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blackstone.spring.dao.RoleRepository;
import com.blackstone.spring.dao.UsersRepository;
import com.blackstone.spring.model.security.User;
import com.blackstone.spring.model.security.UserRole;

@Service
public class UsersServiceImpl implements UsersService {

	private static final Logger LOG = LoggerFactory.getLogger(UsersServiceImpl.class);

	@Autowired
	private UsersRepository userDao;

	@Autowired
	private RoleRepository roleDao;

	@Override
	@Transactional
	public User createUser(User user, Set<UserRole> userRoles) {
		User localUser = this.userDao.findByUsername(user.getUsername());
		if (localUser != null) {
			LOG.info("User with username {} already exist. Nothing will be done.", user.getUsername());
		} else {

			for (UserRole ur : userRoles) {
				roleDao.save(ur.getRole());
			}
			user.getUserRoles().addAll(userRoles);

			localUser = userDao.save(user);
		}
		return localUser;
	}

}
