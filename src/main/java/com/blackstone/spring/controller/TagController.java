package com.blackstone.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.blackstone.spring.exceptions.HTTP404Exception;
import com.blackstone.spring.model.Tag;
import com.blackstone.spring.service.GeneralService;

@RestController
@RequestMapping("/api/tag")
public class TagController {

	@Autowired
	private GeneralService<Tag> tagService;
	
	
	@PostMapping
	public ResponseEntity<?> createTag(@RequestBody Tag tag){
		Tag savedTag = this.tagService.save(tag);
		return ResponseEntity.ok().body("Resource has been created with an id " + savedTag.getId());
	}
	
	@GetMapping @ResponseBody Page<Tag> getTagsByPage( 
			@RequestParam(name = "pageNumber", required = true, defaultValue = "0") Integer pageNumber,
			@RequestParam(name = "pageSize", required = true, defaultValue = "10") Integer pageSize
			){
		return this.tagService.getByPage(pageNumber, pageSize);	
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Tag> getTagById(@PathVariable("id") long id){
		if(this.tagService.get(id) != null) {
			Tag tag = this.tagService.get(id);
			return ResponseEntity.ok().body(tag);
		}
		else {
			throw new HTTP404Exception("Resource could not be found with an id " + id);
		}
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateTag(@PathVariable("id") long id, @RequestBody Tag tag){
		if(this.tagService.get(id) != null) {
			this.tagService.update(tag);
			return ResponseEntity.ok().body("Resource with an id: " + id + " has been updated.");
		}
		else {
			throw new HTTP404Exception("resource not found associated with and id " + id);
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteTag(@PathVariable("id") long id){
		if(this.tagService.get(id) != null) {
			this.tagService.delete(id);
			return ResponseEntity.ok().body("Resource has been successfully deleted");
		}
		else {
			throw new HTTP404Exception("Resource not found with an id " + id);
		}
	}
	
}
