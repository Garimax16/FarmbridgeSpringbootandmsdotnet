package com.farmbridge.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.farmbridge.entities.OrderDetails;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails,Long> {

}
