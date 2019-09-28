package com.blackstone.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.blackstone.spring.dao.DrinksRepository;
import com.blackstone.spring.model.Drinks;

@Service
public class DrinksServiceImpl implements GeneralService<Drinks> {

	@Autowired
	private DrinksRepository drinksDao;

	@Override
	public Drinks save(Drinks drinks) {
		return drinksDao.save(drinks);
	}

	@Override
	public Drinks get(long id) {
		return drinksDao.findById(id).get();
	}

	@Override
	public Page<Drinks> getByPage(Integer pageNumber, Integer pageSize) {
		Pageable pageable = PageRequest.of(pageNumber, pageSize, Sort.by("name"));
		Page<Drinks> foundByPage = drinksDao.findAll(pageable);
		return foundByPage;
	}

	@Override
	public void update(Drinks drinks) {
		drinksDao.save(drinks);

	}

	@Override
	public void delete(long id) {
		drinksDao.deleteById(id);

	}

}
