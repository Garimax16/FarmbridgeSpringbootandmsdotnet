package com.farmbridge.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.farmbridge.dto.LoginRequest;
import com.farmbridge.entities.Farmer;
import com.farmbridge.service.FarmerServiceImpl;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    private final FarmerServiceImpl farmerService;

    public AuthController(FarmerServiceImpl farmerService) {
        this.farmerService = farmerService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Farmer token = farmerService.authenticateFarmer(loginRequest.getContact(), loginRequest.getPassword());
        return ResponseEntity.ok(token);
    }
}
