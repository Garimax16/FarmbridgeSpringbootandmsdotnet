package com.farmbridge.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.farmbridge.entities.Otp;



@Repository
public interface OtpRepository extends JpaRepository<Otp, Long>{
	
	Optional<Otp> findByEmailAndOtp(String em,String otp);
	
}
