package com.farmbridge.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="orders")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper=true,exclude={"orderDetails","buyer"})
public class Order extends BaseEntity {
    

	
	@Enumerated(EnumType.STRING)
	private Status status=Status.PENDING;
	
	
	@CreationTimestamp
	private LocalDate date;
	
//	@NotNull
//	@ManyToOne
//	@JoinColumn(name="farmer_id",nullable = false)
//	private Farmer farmer;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name="buyer_id",nullable=false)
	private BuyerEntity buyer;
	
	
	@OneToMany(mappedBy="order",cascade=CascadeType.ALL,orphanRemoval=true)
	private List<OrderDetails> orderDetails=new ArrayList<>();
	
	public enum Status {
        PENDING,DELIVERED
    }
	  
	@NotNull
	private double totalAmount;
	
}
