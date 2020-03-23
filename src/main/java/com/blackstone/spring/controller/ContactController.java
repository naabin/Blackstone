package com.blackstone.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.blackstone.spring.model.Contact;
import com.blackstone.spring.service.GeneralService;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

	private final GeneralService<Contact> contactService;
	
	@Autowired
	public ContactController(GeneralService<Contact> contactService) {
		this.contactService = contactService;
	}
	
	
	@PostMapping("/new")
	public ResponseEntity<?> postContact(@RequestBody Contact contact){
		this.contactService.save(contact);
		return ResponseEntity.ok().body("Enquiry has been successfully posted");
	}
	
	@GetMapping("/all")
	public @ResponseBody Page<Contact> getContactsByPage(
			@RequestParam(name = "pageNumber", required = true, defaultValue = "0") int pageNumber,
			@RequestParam(name = "pageSize", required = true, defaultValue = "10") int pageSize
			){
		return this.contactService.getByPage(pageNumber, pageSize);
		
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Contact> getContactById(@PathVariable("id") long id){
		return ResponseEntity.ok().body(this.contactService.get(id));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteContactById(@PathVariable("id") Long id){
		this.contactService.delete(id);
		return ResponseEntity.ok().body("Successfully deleted contact");
	}
	
	
}
