package com.blackstone.spring.dao;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.blackstone.spring.model.DaySpecial;

public interface DaySpecialRepository extends PagingAndSortingRepository<DaySpecial, Long> {
	
}
