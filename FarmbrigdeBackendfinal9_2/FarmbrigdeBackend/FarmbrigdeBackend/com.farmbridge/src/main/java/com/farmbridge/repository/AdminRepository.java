package com.farmbridge.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.farmbridge.entities.Admin;

public interface AdminRepository extends JpaRepository<Admin,Long> {

}
