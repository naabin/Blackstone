package com.blackstone.spring.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;


@Entity
@Table(name = "MENU")
public class Menu {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private long id;

	@Column(name = "NAME")
	private String name;

	@Column(name = "DESCRIPTION", columnDefinition = "TEXT")
	private String description;
	
	@Column(name = "PRICE")
	private double price;

	@Column(name = "ADD_EXTRA")
	private String addExtra;

	@Column(name = "ADDED_PRICE")
	private double addedPrice;
	
	@Column(name = "BREAKFAST" ,nullable = false)
	@JsonInclude(content = Include.NON_DEFAULT)
	private boolean breakFast = false;
	
	@Column(name = "SALAD", nullable = false)
	@JsonInclude(content = Include.NON_DEFAULT)
	private boolean salad = false;
	
	@Column(name = "PASTA", nullable = false)
	@JsonInclude(content = Include.NON_DEFAULT)
	private boolean pasta = false;
	
	@Column(name = "BURGER", nullable = false)
	@JsonInclude(content = Include.NON_DEFAULT)
	private boolean burger = false;

	@Column(name = "CREATED_ON")
	private Date createdOn;

	public Menu() {
		createdOn = new Date();
	}

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getDescription() {
		return description;
	}

	public double getPrice() {
		return price;
	}

	public String getAddExtra() {
		return addExtra;
	}

	public double getAddedPrice() {
		return addedPrice;
	}

	public Date getCreatedOn() {
		return createdOn;
	}

	public boolean isBreakFast() {
		return breakFast;
	}

	public boolean isSalad() {
		return salad;
	}

	public boolean isPasta() {
		return pasta;
	}

	public boolean isBurger() {
		return burger;
	}

	@Override
	public String toString() {
		return "Menu [id=" + id + ", name=" + name + ", description=" + description + ", price=" + price + ", addExtra="
				+ addExtra + ", addedPrice=" + addedPrice + ", createdOn=" + createdOn + "]";
	}

}
