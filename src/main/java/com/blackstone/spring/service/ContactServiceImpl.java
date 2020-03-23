package com.blackstone.spring.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.blackstone.spring.dao.ContactRepository;
import com.blackstone.spring.model.Contact;

@Service
public class ContactServiceImpl implements GeneralService<Contact> {
	
	private final ContactRepository contactRepository;
	
	public ContactServiceImpl(ContactRepository contactRepository) {
		this.contactRepository = contactRepository;
	}

	@Override
	public Contact save(Contact contact) {
		
		return this.contactRepository.save(contact);
	}

	@Override
	public Contact get(long id) {
		
		return this.contactRepository.findById(id).get();
	}

	@Override
	public Page<Contact> getByPage(Integer pageNumber, Integer pageSize) {
		Pageable pageable = PageRequest.of(pageNumber, pageSize);
		
		return this.contactRepository.findAll(pageable);
	}

	@Override
	public void update(Contact t) {
		this.contactRepository.save(t);
		
	}

	@Override
	public void delete(long id) {
		this.contactRepository.deleteById(id);
		
	}

}
