package com.blackstone.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.blackstone.spring.dao.DaySpecialRepository;
import com.blackstone.spring.model.DaySpecial;

@Service
public class DaySpecialServiceImpl implements GeneralService<DaySpecial> {

	@Autowired
	private DaySpecialRepository daySpecialDao;

	@Override
	public DaySpecial save(DaySpecial t) {
		return daySpecialDao.save(t);
	}

	@Override
	public DaySpecial get(long id) {
		return daySpecialDao.findById(id).get();
	}

	@Override
	public Page<DaySpecial> getByPage(Integer pageNumber, Integer pageSize) {
		Pageable pageable = PageRequest.of(pageNumber, pageSize);
		return daySpecialDao.findAll(pageable);
	}

	@Override
	public void update(DaySpecial t) {
		daySpecialDao.save(t);

	}

	@Override
	public void delete(long id) {
		daySpecialDao.deleteById(id);
	}

}
