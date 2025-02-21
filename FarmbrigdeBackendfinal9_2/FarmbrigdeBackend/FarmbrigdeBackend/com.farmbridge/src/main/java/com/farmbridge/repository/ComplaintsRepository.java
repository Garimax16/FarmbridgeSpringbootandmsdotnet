package com.farmbridge.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.farmbridge.entities.Complaints;

public interface ComplaintsRepository extends JpaRepository<Complaints,Long> {

}
