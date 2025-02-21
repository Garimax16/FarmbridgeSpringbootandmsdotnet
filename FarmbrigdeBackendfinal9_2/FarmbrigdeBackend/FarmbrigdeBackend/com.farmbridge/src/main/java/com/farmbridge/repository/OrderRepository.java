package com.farmbridge.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.farmbridge.entities.Order;

public interface OrderRepository extends JpaRepository<Order,Long> {
	List<Order> findByBuyerId(long buyerId);
}
