package com.blackstone.spring.dao;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.blackstone.spring.model.Image;

public interface ImageRepository extends PagingAndSortingRepository<Image, Long> {

}
