package com.blackstone.spring.service;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.blackstone.spring.model.Image;

public interface ImageService extends GeneralService<Image> {
	
	public String uploadFileToS3Bucket(MultipartFile multiPartFile, String imageName, boolean enablePublicReadAccess) throws FileNotFoundException, IOException;
	public void deleteFileFromS3Bucket(String fileName);
	
	
	
}
