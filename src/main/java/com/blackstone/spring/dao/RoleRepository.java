package com.blackstone.spring.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blackstone.spring.model.security.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

}
