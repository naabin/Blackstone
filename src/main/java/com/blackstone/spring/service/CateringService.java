package com.blackstone.spring.service;

import java.util.List;

import com.blackstone.spring.model.Catering;


public interface CateringService {
	
	public List<Catering> findCateringByTags(String tag);

}
