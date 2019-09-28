package com.blackstone.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.blackstone.spring.dao.MenuRepository;
import com.blackstone.spring.model.Menu;

@Service
public class MenuServiceImpl implements GeneralService<Menu> {
	
	@Autowired
	private MenuRepository menuDao;

	@Override
	public Menu save(Menu menu) {
		Menu savedMenu = menuDao.save(menu);
		return savedMenu;
	}

	@Override
	public Menu get(long id) {
		Menu menu = menuDao.findById(id).get();
		return menu;
	}

	@Override
	public Page<Menu> getByPage(Integer pageNumber, Integer pageSize) {
		Pageable pageable = PageRequest.of(pageNumber, pageSize, Sort.by("name"));
		Page<Menu> foundByPage = menuDao.findAll(pageable);
		return foundByPage;
	}

	@Override
	public void update(Menu menu) {
		menuDao.save(menu);
		
	}

	@Override
	public void delete(long id) {
		menuDao.deleteById(id);
		
	}

}
