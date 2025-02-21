package com.farmbridge.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.farmbridge.entities.Cart;

public interface CartRepository extends JpaRepository<Cart,Long> {

}
