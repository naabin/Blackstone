package com.blackstone.spring.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "IMAGE")
public class Image {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private long id;

	@Column(name = "NAME")
	private String name;

	@Column(name = "IMAGE_URL")
	private String imageUrl;

	@Column(name = "CREATED_ON")
	private Date createdOn;
	
	public Image() {
		createdOn = new Date();
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public Date getCreatedOn() {
		return createdOn;
	}

	@Override
	public String toString() {
		return "Image [id=" + id + ", name=" + name + ", imageUrl=" + imageUrl + ", createdOn=" + createdOn + "]";
	}

}
