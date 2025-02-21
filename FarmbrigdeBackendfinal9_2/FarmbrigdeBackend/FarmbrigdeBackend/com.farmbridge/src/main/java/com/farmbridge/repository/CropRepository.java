package com.farmbridge.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.farmbridge.entities.Crop;

public interface CropRepository extends JpaRepository<Crop,Long>{

}
