package com.farmbridge.security;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component // A Spring Bean that can be injected into other Spring Beans as a dependency
public class CustomJwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtils utils; // JWT Utility for token validation

    @Override
    protected void doFilterInternal(HttpServletRequest request, 
                                    HttpServletResponse response, 
                                    FilterChain filterChain)
            throws ServletException, IOException {

        // Check Authorization header from incoming request
        String authHeader = request.getHeader("Authorization");
        System.out.println("Authorization header: " + authHeader); // Log header

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            // Extract JWT token
            String jwt = authHeader.substring(7);
            System.out.println("Extracted JWT: " + jwt); // Log JWT token

            try {
                // Validate and get Authentication object
                Authentication authentication = utils.populateAuthenticationTokenFromJWT(jwt);

                if (authentication != null) {
                    // Set the authentication in the security context if valid
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                    System.out.println("Saved auth token in Security Context");
                } else {
                    System.out.println("JWT validation failed, no authentication set.");
                    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                    response.getWriter().write("Invalid JWT token.");
                    return; // End the filter chain
                }

            } catch (Exception e) {
                // Error occurred during JWT validation
                System.out.println("Error validating JWT: " + e.getMessage());
                SecurityContextHolder.clearContext(); // Clear authentication in case of invalid token
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.getWriter().write("Invalid or expired JWT token.");
                return; // End the filter chain
            }
        } else {
            System.out.println("No JWT token found in request header");
        }

        // Continue with the filter chain
        filterChain.doFilter(request, response);
    }
}
