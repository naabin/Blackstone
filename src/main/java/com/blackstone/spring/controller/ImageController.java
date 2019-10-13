package com.blackstone.spring.controller;

import java.io.FileNotFoundException;
import java.io.IOException;

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
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.blackstone.spring.exceptions.HTTP404Exception;
import com.blackstone.spring.model.Image;
import com.blackstone.spring.service.ImageService;

@RestController
@RequestMapping("/api/images")
public class ImageController {
	
	@Autowired
	private ImageService imageService;

	@PostMapping
	public ResponseEntity<?> uploadImage(
				@RequestPart(value = "file") MultipartFile multiPartFile, 
				@RequestParam(name="imageName", defaultValue = "image", required = true) String imageName) throws FileNotFoundException, IOException{
		
		imageService.uploadFileToS3Bucket(multiPartFile,imageName, true);
		
		return ResponseEntity.ok().body("Image has been saved in S3 bucket ");
		
		
	}
	
	@GetMapping
	public @ResponseBody Page<Image> getImageByPage(
			@RequestParam(name = "pageNumber", defaultValue = "0", required = true) Integer pageNumber,
			@RequestParam(name = "pageSize", defaultValue = "10", required = true) Integer pageSize
			){
		
		return imageService.getByPage(pageNumber, pageSize);
		
		
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Image> getImageById(@PathVariable("id") long id){
		if(this.imageService.get(id) == null) {
			throw new HTTP404Exception("Could not find resource with an id: " + id);
			
		}
		else {
			Image image = this.imageService.get(id);
			return ResponseEntity.ok().body(image);
		}
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateImageName(@PathVariable("id") long id, @RequestBody Image image){
		if(this.imageService.get(id) == null) {
			throw new HTTP404Exception("Could not find resource with an id: " + id);
		}
		else {
			Image updatedImage = this.imageService.save(image);
			return ResponseEntity.ok().body("Resource has been updated with an id: " + updatedImage.getId());
			
		}
		
	}
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteImage(@PathVariable("id") long id){
		
		if(this.imageService.get(id) == null) {
			throw new HTTP404Exception("Could not find resource with an id: " + id);
		}
		else {
			Image image = this.imageService.get(id);
			this.imageService.delete(id);
			this.imageService.deleteFileFromS3Bucket(image.getName());
			return ResponseEntity.ok().body("Image has been successfully deleted.");
		}
		
		
		
	}
}
