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
import com.blackstone.spring.model.Drinks;
import com.blackstone.spring.service.GeneralService;

@RestController
@RequestMapping("/api/drinks")
public class DrinksController {
	
	@Autowired
	private GeneralService<Drinks> drinksService;
	
	@PostMapping
	public ResponseEntity<?> createDrinks(@RequestBody Drinks drinks){
		
		Drinks savedDrinks = drinksService.save(drinks);
		
		return ResponseEntity.ok().body("Resource has been created with an id: " + savedDrinks.getId());
		
	}
	
	@GetMapping
	public @ResponseBody Page<Drinks> getDrinksByPage(
				@RequestParam(name = "pageNumber", required = true, defaultValue = "0") Integer pageNumber,
				@RequestParam(name = "pageSize", required = true, defaultValue = "10") Integer pageSize
			){
		
		Page<Drinks> byPage = drinksService.getByPage(pageNumber, pageSize);
		return byPage;
		
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Drinks> getDrinksById(@PathVariable("id") long id){
		if(drinksService.get(id) == null) {
			throw new HTTP404Exception("Resource not found with an id: " + id);
		}
		else {
			Drinks drinks = drinksService.get(id);
			return ResponseEntity.ok().body(drinks);
		}
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateDrinks(@PathVariable("id")long id, @RequestBody Drinks drinks){
		if(drinksService.get(id) == null) {
			throw new HTTP404Exception("Resource not found with an id: " + id);
		}
		else {
			drinksService.update(drinks);
			return ResponseEntity.ok().body("Resource has been updated successfully with an id: " + drinks.getId());
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteDrinks(@PathVariable("id") long id){
		if(drinksService.get(id) == null) {
			throw new HTTP404Exception("Resource not found with an id: " + id);
		}
		else {
			drinksService.delete(id);
			return ResponseEntity.ok().body("Resource has successfully been deleted.");
		}
	}
}
