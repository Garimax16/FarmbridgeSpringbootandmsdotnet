package com.farmbridge.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="orders_details")
@Getter
@Setter
@ToString(callSuper=true)

public class OrderDetails extends BaseEntity {
	
	@ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name="crop_id")
	@JsonBackReference
	private Crop crop;
	
	
	
	@NotNull
	private double quantity;
	

	@ManyToOne
	@JoinColumn(name="farmer_id",nullable = false)
	@JsonBackReference
	private Farmer farmer;
	
	@ManyToOne
	@JoinColumn(name="buyer_id",nullable=false)
	@JsonBackReference
	private BuyerEntity buyer;
	
	private double totalPrice;
}
