package com.blackstone.spring.controller;

import java.util.List;

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
import com.blackstone.spring.model.Catering;
import com.blackstone.spring.service.CateringService;
import com.blackstone.spring.service.GeneralService;


@RestController
@RequestMapping("/catering")
public class CateringController {
	
	@Autowired
	private GeneralService<Catering> cateringService;
	
	@Autowired
	private CateringService cateringService1;
	
	@PostMapping
	public ResponseEntity<?> createCatering(@RequestBody Catering catering){
		Catering savedCatering = this.cateringService.save(catering);
		return ResponseEntity.ok().body("Catering has been created with an id " + savedCatering.getId());
	}
	
	@GetMapping
	public @ResponseBody Page<Catering> getCateringByPage(
			@RequestParam(name = "pageNumber", required = true, defaultValue = "0") Integer pageNumber,
			@RequestParam(name = "pageSize", required = true, defaultValue = "10") Integer pageSize
			){
		return this.cateringService.getByPage(pageNumber, pageSize);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Catering> getCateringByPage(
				@PathVariable("id") long id
			){
		if(this.cateringService.get(id) != null) {
			Catering catering = this.cateringService.get(id);
			return ResponseEntity.ok().body(catering);
		}
		else {
			throw new HTTP404Exception("Resource not available associated with an id " + id);
		}
	}
	
	@GetMapping("/tagName")
	public @ResponseBody List<Catering> getCateringByTag(
				@RequestParam(name = "tagName", required = true) String tagName
			){
		
		if(this.cateringService1.findCateringByTags(tagName) != null) {
			return this.cateringService1.findCateringByTags(tagName);
		}
		else {
			throw new HTTP404Exception("Could not find the resources with the name " + tagName);
		}
		
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateCatering(
			@PathVariable("id") long id,
			@RequestBody Catering catering
			){
		
		if(this.cateringService.get(id) != null) {
			this.cateringService.update(catering);
			return ResponseEntity.ok().body("Resource has been updated with an id " + catering.getId());
		}
		else {
			throw new HTTP404Exception("Resource not found with an id " + id);
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteCatering(@PathVariable("id") long id){
		if(this.cateringService.get(id) != null) {
			this.cateringService.delete(id);
			return ResponseEntity.ok().body("Resource has been deleted successfully.");
		}
		else {
			throw new HTTP404Exception("Resource has not been found with an id " + id);
		}
	}
}
