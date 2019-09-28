package com.blackstone.spring.dao;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.blackstone.spring.model.Menu;

@Repository
public interface MenuRepository extends PagingAndSortingRepository<Menu, Long> {

}
