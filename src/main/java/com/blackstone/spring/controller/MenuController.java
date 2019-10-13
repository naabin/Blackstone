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
import com.blackstone.spring.model.Menu;
import com.blackstone.spring.service.GeneralService;

@RestController
@RequestMapping("/api/menu")
public class MenuController {
	
	@Autowired
	private GeneralService<Menu> menuService;
	
	
	@PostMapping
	public ResponseEntity<?> createMenu(@RequestBody Menu menu){
		Menu savedMenu = menuService.save(menu);
		return ResponseEntity.ok().body("Menu created with an id: " + savedMenu.getId());
	}
	
	@GetMapping
	public @ResponseBody Page<Menu> getMenuByPage(
				@RequestParam(name = "pageNumber", required = true, defaultValue = "0") Integer pageNumber,
				@RequestParam(name = "pageSize", required = true, defaultValue = "10") Integer pageSize
			){
		
		Page<Menu> byPage = menuService.getByPage(pageNumber, pageSize);
		return byPage;
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Menu> getMenuById(@PathVariable("id") long id){
		if(menuService.get(id) == null) {
			throw new HTTP404Exception("Resource not found with given id " + id);
		}
		else {
			Menu menu = menuService.get(id);
			return ResponseEntity.ok().body(menu);
		}
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateMenu(@PathVariable("id") long id, @RequestBody Menu menu){
		if(menuService.get(id) == null) {
			throw new HTTP404Exception("Resource not found with given id " + id);
		}
		else {
			menuService.update(menu);
			return ResponseEntity.ok().body("Resouce with an id: " + id + " has been updated successfully");
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteMenu(@PathVariable("id") long id){
		if(menuService.get(id) == null) {
			throw new HTTP404Exception("Resource not found with given id " + id);
		}
		else {
			menuService.delete(id);
			return ResponseEntity.ok().body("Resourse with an id: " + "has been deleted successfully");
		}
	}
	
}
