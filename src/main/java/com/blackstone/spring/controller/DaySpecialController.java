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
import com.blackstone.spring.model.DaySpecial;
import com.blackstone.spring.service.GeneralService;

@RestController
@RequestMapping("/api/special")
public class DaySpecialController {
	
	@Autowired
	private GeneralService<DaySpecial> daySpecialService;

	@PostMapping
	public ResponseEntity<?> createSpecialOfTheDay(@RequestBody DaySpecial special){
		DaySpecial savedSPecial = this.daySpecialService.save(special);
		return ResponseEntity.ok().body("Resource has been created with an id: " + savedSPecial.getId());
	}
	
	
	@GetMapping
	public @ResponseBody Page<DaySpecial> getSpecialByPage(
			@RequestParam(name = "pageNumber", required = true, defaultValue = "0") Integer pageNumber,
			@RequestParam(name = "pageSize", required = true, defaultValue = "10") Integer pageSize
			
			){
		return daySpecialService.getByPage(pageNumber, pageSize);
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity<DaySpecial> getSpecialOfTheDayById(@PathVariable("id") long id){
		if(this.daySpecialService.get(id) != null) {
			return ResponseEntity.ok().body(this.daySpecialService.get(id));
		}
		else {
			throw new HTTP404Exception("Content not found with an id " + id);
		}
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateSpecialOfTheDay(
				@PathVariable("id") long id,
				@RequestBody DaySpecial daySpecial
			){
		if(this.daySpecialService.get(id) != null) {
			this.daySpecialService.update(daySpecial);
			return ResponseEntity.ok().body("Resource has been updated with and id: " + daySpecial.getId());
		}
		else {
			throw new HTTP404Exception("Resource not found.");
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteMapping(
			@PathVariable("id") long id
			){
		if(this.daySpecialService.get(id) != null) {
			return ResponseEntity.ok().body("Resource has been successfully deleted.");
		}
		else {
			throw new HTTP404Exception("Resource not found.");
		}
	}
}
