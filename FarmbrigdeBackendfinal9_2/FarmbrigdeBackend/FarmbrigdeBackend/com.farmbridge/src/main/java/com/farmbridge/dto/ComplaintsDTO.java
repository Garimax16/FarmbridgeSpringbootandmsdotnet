package com.farmbridge.dto;

import java.sql.Date;

import com.farmbridge.entities.BaseEntity;
import com.farmbridge.entities.Complaints.Status;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter

public class ComplaintsDTO  extends BaseDTO{
   
    @NotNull
    @Size(max = 255)
    private String name;

    @NotNull
    @Email
    private String email;

    @NotNull
    @Size(max = 255)
    private String subject;

    @NotNull
    @Size(max = 255)
    private String message;

    @NotNull
    private Date date;

    @NotNull
    @Enumerated(EnumType.STRING)
    private Status status;

    public enum Status {
        PENDING, RESOLVED
    }

}

