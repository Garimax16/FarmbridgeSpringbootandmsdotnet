package com.farmbridge.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper=true)
public class OrderDTO extends BaseDTO {
    

	
	@Enumerated(EnumType.STRING)
	private Status status=Status.PENDING;
	
	@NotNull
	@CreationTimestamp
	private LocalDate date;
	
	
	
	@NotNull
	private long buyer_id;
	
	@NotNull
	private String buyer_name;
	
	private List<OrderDetailsDTO> orderDetailsDTO=new ArrayList<OrderDetailsDTO>();
	
	public enum Status {
        PENDING,DELIVERED
    }
	  
	@NotNull
	private double totalAmount;
}
