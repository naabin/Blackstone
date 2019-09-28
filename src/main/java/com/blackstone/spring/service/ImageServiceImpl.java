package com.blackstone.spring.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.regions.Region;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.PutObjectRequest;

import com.blackstone.spring.dao.ImageRepository;
import com.blackstone.spring.model.Image;

@Service
public class ImageServiceImpl implements ImageService {
	
	@Autowired
	private ImageRepository imageDao;
	
	private String awsS3AudioBucket;
	private AmazonS3 amazonS3;
	
	
	
	@Autowired
	 public ImageServiceImpl(Region awsRegion, AWSCredentialsProvider awsCredentialsProvider, String awsS3AudioBucket) {
		this.amazonS3 = AmazonS3ClientBuilder
							.standard()
							.withCredentials(awsCredentialsProvider)
							.withRegion(awsRegion.getName())
							.build();
		this.awsS3AudioBucket = awsS3AudioBucket;
	}
	@Override
	public Image get(long id) {
		return imageDao.findById(id).get();
	}

	@Override
	public Page<Image> getByPage(Integer pageNumber, Integer pageSize) {
		Pageable pageable = PageRequest.of(pageNumber, pageSize, Sort.by("name"));
		return imageDao.findAll(pageable);
	}

	@Override
	@Async
	public void delete(long id) {
		Image image = get(id);
		amazonS3.deleteObject(new DeleteObjectRequest(awsS3AudioBucket, image.getName()));
		imageDao.deleteById(id);

	}

	@Async
	@Override
	public String uploadFileToS3Bucket(MultipartFile multiPartFile, String imageName, boolean enablePublicReadAccess) throws IOException {
		String fileName = multiPartFile.getOriginalFilename();
		File file = new File(fileName);
		FileOutputStream fos;

			fos = new FileOutputStream(file);
			fos.write(multiPartFile.getBytes());
			fos.close();
			
			
			PutObjectRequest putObjectRequest = new PutObjectRequest(awsS3AudioBucket, fileName, file);
			
			if(enablePublicReadAccess) {
				putObjectRequest.withCannedAcl(CannedAccessControlList.PublicRead);
				
			}
			this.amazonS3.putObject(putObjectRequest);
			file.delete();
			
			 URL url = this.amazonS3.getUrl(awsS3AudioBucket, putObjectRequest.getKey());
			 Image image = new Image();
			 image.setImageUrl(url.toString());
			 image.setName(imageName);
			 imageDao.save(image);
			 return url.getPath();
			
		
		
	}

	@Async
	@Override
	public void deleteFileFromS3Bucket(String fileName) {
		
	}
	@Override
	public Image save(Image t) {
		return null;
	}
	@Override
	public void update(Image image) {
		imageDao.save(image);
	}

}
