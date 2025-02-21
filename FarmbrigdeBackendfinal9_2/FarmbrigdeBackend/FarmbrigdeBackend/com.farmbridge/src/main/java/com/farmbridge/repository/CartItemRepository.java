package com.farmbridge.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.farmbridge.entities.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem,Long>
{

}
