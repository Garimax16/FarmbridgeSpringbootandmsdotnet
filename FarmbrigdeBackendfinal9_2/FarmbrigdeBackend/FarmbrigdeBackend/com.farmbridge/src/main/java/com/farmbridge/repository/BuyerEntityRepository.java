package com.farmbridge.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.farmbridge.entities.BuyerEntity;

public interface BuyerEntityRepository extends JpaRepository<BuyerEntity, Long> {
//finder (derived)
	Optional<BuyerEntity>  findByEmail(String email);
	//derived query method
		boolean existsByEmail(String email);
		
	Optional<BuyerEntity> findByEmailAndPassword(String em,String pwd);

		

}
