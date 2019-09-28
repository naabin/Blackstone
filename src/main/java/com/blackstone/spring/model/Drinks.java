package com.blackstone.spring.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "DRINKS")
public class Drinks {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private int id;
	
	@Column(name = "PRICE")
	private double price;
	
	@Column(name = "IS_COFFEE")
	private boolean isCoffee;
	
	@Column(name = "IS_TEA")
	private boolean isTea;
	
	@Column(name = "IS_SHAKE")
	private boolean isShake;
	
	@Column(name = "CUP_PRICE")
	private double cupPrice;
	
	@Column(name = "MUG_PRICE")
	private double mugPrice;

	@Column(name = "NAME")
	private String name;

	@Column(name = "CREATED_ON")
	private Date createdOn;

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public Date getCreatedOn() {
		return createdOn;
	}
	
	public Drinks() {
		createdOn = new Date();
	}
	
	public double getPrice() {
		return price;
	}

	public boolean isCoffee() {
		return isCoffee;
	}

	public boolean isTea() {
		return isTea;
	}

	public boolean isShake() {
		return isShake;
	}

	public double getCupPrice() {
		return cupPrice;
	}

	public double getMugPrice() {
		return mugPrice;
	}

	@Override
	public String toString() {
		return "Drinks [id=" + id + ", name=" + name + ", createdOn=" + createdOn + "]";
	}
	

}
