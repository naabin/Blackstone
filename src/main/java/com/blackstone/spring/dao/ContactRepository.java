package com.blackstone.spring.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blackstone.spring.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {

}
