package com.blackstone.spring.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "TAG")
public class Tag implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6251142630980391110L;

	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "NAME", unique = true)
	private String name;

	@JsonIgnore
	@ManyToMany(mappedBy = "tags", cascade = CascadeType.MERGE)
	private List<Catering> caterings = new ArrayList<Catering>();

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setId(long id) {
		this.id = id;
	}

	public List<Catering> getCaterings() {
		return caterings;
	}

	public void setCaterings(List<Catering> caterings) {
		this.caterings = caterings;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	

}
