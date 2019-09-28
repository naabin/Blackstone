package com.blackstone.spring.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import javax.persistence.Table;

@Entity
@Table(name = "CATERING")
public class Catering {

	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "NAME", columnDefinition = "TEXT")
	private String name;

	@Column(name = "MINIMUM_NO")
	private int minimumNo;

	@Column(name = "PRICE_PER_PERSON")
	private double pricePerPerson;
	
	@Column(name = "DESCRIPTION", columnDefinition = "TEXT")
	private String description;
	
	@Column(name = "CREATED_ON")
	private Date createdOn;

	public String getDescription() {
		return description;
	}

	public Date getCreatedOn() {
		return createdOn;
	}

	@ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	@JoinTable(name = "catering_tag", 
	joinColumns = @JoinColumn(referencedColumnName = "ID"), 
	inverseJoinColumns = @JoinColumn(referencedColumnName = "ID"))
	private Set<Tag> tags = new HashSet<Tag>();

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public int getMinimumNo() {
		return minimumNo;
	}

	public double getPricePerPerson() {
		return pricePerPerson;
	}

	public Set<Tag> getTags() {
		return tags;
	}

	public void setTags(Set<Tag> tags) {
		this.tags = tags;
	}
	
	
	

}
