package com.farmbridge.repository;

import com.farmbridge.entities.Farmer;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface FarmerRepository extends JpaRepository<Farmer, Long> {
    Optional<Farmer> findByContact(String contact);  // Finding by contact (username)
}
