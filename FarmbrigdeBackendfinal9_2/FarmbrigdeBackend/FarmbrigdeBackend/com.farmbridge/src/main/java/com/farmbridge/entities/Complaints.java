package com.farmbridge.entities;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name="complaints")
@Getter
@Setter
@ToString(callSuper=true)
public class Complaints  extends BaseEntity{
   
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
