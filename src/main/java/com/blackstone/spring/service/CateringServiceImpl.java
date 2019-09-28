package com.blackstone.spring.service;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.blackstone.spring.dao.CateringRepository;
import com.blackstone.spring.dao.TagRepository;
import com.blackstone.spring.model.Catering;
import com.blackstone.spring.model.Tag;

@Service
public class CateringServiceImpl implements GeneralService<Catering>, CateringService {
	
	@Autowired
	private CateringRepository cateringDao;
	
	@Autowired
	private TagRepository tagDao;
	


	@Override
	public Catering save(Catering catering) {
		return this.cateringDao.save(catering);
	}

	@Override
	public Catering get(long id) {
		Catering catering = this.cateringDao.findById(id).get();
		catering.setTags(catering.getTags());
		return catering;
	}

	@Override
	public Page<Catering> getByPage(Integer pageNumber, Integer pageSize) {
		Pageable pageable = PageRequest.of(pageNumber, pageSize);
		return this.cateringDao.findAll(pageable);
	}
	

	@Override
	public void update(Catering catering) {
		this.cateringDao.save(catering);
		
	}

	@Override
	public void delete(long id) {
		this.cateringDao.deleteById(id);
	}
	
	@Override
	public ArrayList<Catering> findCateringByTags(String tagName){
		if(this.tagDao.getTagByName(tagName) != null) {
			Tag tag = this.tagDao.getTagByName(tagName);
			return (ArrayList<Catering>) this.cateringDao.findCateringByTags(tag);
		}
		return null;
		
	}

}
