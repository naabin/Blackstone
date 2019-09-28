package com.blackstone.spring.service;

import org.springframework.data.domain.Page;

public interface GeneralService<T> {
	public T save(T t);
	public T get(long id);
	public Page<T> getByPage(Integer pageNumber, Integer pageSize);
	public void update(T t);
	public void delete(long id);
	
}
