package com.blackstone.spring.dao;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.blackstone.spring.model.Drinks;

public interface DrinksRepository extends PagingAndSortingRepository<Drinks, Long> {

}
