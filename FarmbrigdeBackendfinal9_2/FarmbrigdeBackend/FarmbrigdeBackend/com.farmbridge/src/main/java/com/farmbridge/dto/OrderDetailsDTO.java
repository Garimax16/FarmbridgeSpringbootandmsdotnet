package com.farmbridge.dto;

import java.sql.Date;
import java.util.List;

import com.farmbridge.entities.Crop;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor

public class OrderDetailsDTO extends BaseDTO {
	
	@NotNull
    private long order_id;
	
	
	private long crop_id;
	
	private String crop_name;
	
	@NotNull
	private double quantity;
	
	
	
	
	private long farmer_id;
	private long buyer_id;
	private String farmer_name;
	
	private String buyer_name;
	
	private double totalPrice;
	
}
