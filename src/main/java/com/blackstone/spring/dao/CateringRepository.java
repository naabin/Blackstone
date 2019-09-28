package com.blackstone.spring.dao;

import java.util.List;

//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.blackstone.spring.model.Catering;
import com.blackstone.spring.model.Tag;

@Repository
public interface CateringRepository extends PagingAndSortingRepository<Catering, Long> {

//	@Query("select c FROM Catering c JOIN c.tags t WHERE lower(t)=:lower(tag)")
	List<Catering> findCateringByTags(@Param("tag")Tag tag);
}
