package com.farmbridge.dto;

import com.farmbridge.entities.Farmer;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CropDTO extends BaseDTO {
    @NotNull
	@Size(max = 255)
	private String name;
    @NotNull
	
    @Enumerated(EnumType.STRING)
	private Season season;
    
    @NotNull
	private double quantity;
    
    @Enumerated(EnumType.STRING)
	private Status status;
	

	@NotNull
    private Long farmerId;
	
//	@NotNull
//    private String farmer_name;
	
//	@NotNull
    private String contact;
//	@ManyToOne
//	@JoinColumn(name="farmer_id",nullable=false)
//	private Farmer farmer;
//	@NotNull
	private byte[] img;
	
	@NotNull
	private float price;

    public enum Season {
    	RABI, KHARIF, ZAID,Perennial
    }

    public enum Status {
        PENDING, APPROVED, REJECTED
    }

	  
	
}
