package com.blackstone.spring.dao;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.blackstone.spring.model.Tag;

@Repository
public interface TagRepository extends PagingAndSortingRepository<Tag, Long> {

	Tag getTagByName(String tagName);
}
