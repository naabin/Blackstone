package com.blackstone.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.blackstone.spring.dao.TagRepository;
import com.blackstone.spring.model.Tag;

@Service
public class TagServiceImpl implements GeneralService<Tag> {

	@Autowired
	private TagRepository tagDao;

	@Override
	public Tag save(Tag tag) {
		return this.tagDao.save(tag);

	}

	@Override
	public Tag get(long id) {
		return this.tagDao.findById(id).get();
	}

	@Override
	public Page<Tag> getByPage(Integer pageNumber, Integer pageSize) {
		Pageable pageable = PageRequest.of(pageNumber, pageSize, Sort.by("name"));
		return this.tagDao.findAll(pageable);
	}

	@Override
	public void update(Tag tag) {
		this.tagDao.save(tag);

	}

	@Override
	public void delete(long id) {
		this.tagDao.deleteById(id);
	}

}
