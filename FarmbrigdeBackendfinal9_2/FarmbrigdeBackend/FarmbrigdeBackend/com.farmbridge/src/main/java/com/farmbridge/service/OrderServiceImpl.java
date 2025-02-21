package com.farmbridge.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.farmbridge.dto.CartItemDTO;
import com.farmbridge.dto.OrderDTO;
import com.farmbridge.dto.OrderDetailsDTO;
import com.farmbridge.entities.BuyerEntity;
import com.farmbridge.entities.Cart;
import com.farmbridge.entities.CartItem;
import com.farmbridge.entities.Crop;
import com.farmbridge.entities.Farmer;
import com.farmbridge.entities.Order;
import com.farmbridge.entities.OrderDetails;
import com.farmbridge.repository.BuyerEntityRepository;
import com.farmbridge.repository.CartItemRepository;
import com.farmbridge.repository.CartRepository;
import com.farmbridge.repository.CropRepository;
import com.farmbridge.repository.OrderDetailsRepository;
import com.farmbridge.repository.OrderRepository;


@Service
@Transactional
public class OrderServiceImpl implements OrderService {
	
	@Autowired
	private OrderRepository orderRepo;
	
	@Autowired
	private CartRepository cartRepo;
	@Autowired
	private CartItemRepository cartItemRepo;
	
	@Autowired
	private OrderDetailsRepository orderDetailsRepo;
	
	@Autowired
	private CropRepository cropRepo;
	
	@Autowired
	private BuyerEntityRepository buyerRepo;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public OrderDTO createOrderFromCart(long id) {
	    Order order = new Order();
	    BuyerEntity b = buyerRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid buyer ID: "+id ));
//	    order.setBuyer_id(b.getId());
//	    System.out.println(order.getBuyer_id());
	    Cart cart=cartRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid cart ID: " + id));

//	    System.out.println(cart);
//	    System.out.println(b.getId());
	    List<CartItemDTO> cDTO = cart.getCartItem().stream().map(carti -> {
	        CartItemDTO c = mapper.map(carti, CartItemDTO.class);
//	        c.setCart_id(carti.getCart().getId());
	       
	        c.setCrop_id(carti.getCrop().getId());
	        return c;
	    }).collect(Collectors.toList());
	    
//	    Order o = mapper.map(order, Order.class);
     order.setBuyer(b);
	  
	    Order saved = orderRepo.save(order);
	  OrderDTO savedO=mapper.map(saved, OrderDTO.class);
	  savedO.setBuyer_id(saved.getBuyer().getId());
	  double price=0;
	    for (CartItemDTO item : cDTO) {
	        OrderDetailsDTO details = createOrderDetails(item, id, saved.getId());
	        savedO.getOrderDetailsDTO().add(details);
	        details.setOrder_id(savedO.getId());
	        price+=item.getTotalPrice();
       //	        orderDetailsRepo.save(mapper.map(details, OrderDetails.class));
	    }

//        OrderDTO od = mapper.map(orderRepo.findById(saved.getId()).orElse(null), OrderDTO.class);
//        System.out.println(od);
//	    double price = calculateTotalPrice(saved);
	    saved.setTotalAmount(price);
	   savedO.setTotalAmount(price);
	    cart.getCartItem().clear();
	     cartRepo.save(cart);
	    return savedO;
	}

	public OrderDetailsDTO createOrderDetails(CartItemDTO itemDTO, long id, long oId) {
	    OrderDetailsDTO details = new OrderDetailsDTO();
	    
	    // Fetch Crop entity by ID and ensure it's valid
	    Crop crop = cropRepo.findById(itemDTO.getCrop_id()).orElseThrow(() -> 
	        new IllegalArgumentException("Invalid Crop ID: " + itemDTO.getCrop_id()));
	   
	    
	    // Get associated Farmer for the crop
	    Farmer f = crop.getFarmer();
	   
	    // Fetch Buyer entity by ID
	    BuyerEntity b = buyerRepo.findById(id).orElseThrow(() -> 
	        new IllegalArgumentException("Invalid Buyer ID: " + id));
	    
	    // Set DTO fields
	    details.setBuyer_id(id);
	   
//	    System.out.println(crop);
	    details.setCrop_id(crop.getId());
	    details.setCrop_name(crop.getName());
	    details.setQuantity(crop.getQuantity());
	    details.setFarmer_name(f.getFullName());
	    details.setBuyer_name(b.getName());
	    details.setTotalPrice(itemDTO.getTotalPrice());
	    details.setFarmer_id(f.getId());
	                            // Convert DTO to Entity
	    OrderDetails odetail = mapper.map(details, OrderDetails.class);

	    // Ensure that Crop and Buyer are correctly set in the OrderDetails entity
	    odetail.setCrop(crop);
	    
	    
	    // Ensuring crop is set here
	   odetail.setBuyer(b);
	   // Ensuring buyer is set here
	    odetail.setFarmer(f);       // Ensuring farmer is set here
	    
	    // Fetch Order entity by ID
	    Order order = orderRepo.findById(oId).orElseThrow(() -> 
	        new IllegalArgumentException("Invalid Order ID: " + oId));
           
	    // Set the Order entity in OrderDetails
	    odetail.setOrder(order);
	    // Save OrderDetails entity
	   OrderDetails o= orderDetailsRepo.save(odetail);
      details.setId(o.getId());
      details.setCreatedOn(o.getCreatedOn());
      details.setUpdatedOn(o.getUpdatedOn());
      
	    // Return DTO response
	    return details ;
	}


	public OrderDTO findById(long id) {
		
		Order o=orderRepo.findById(id).orElseThrow(()->new IllegalArgumentException("Invalid Order ID: " + id));
		OrderDTO oDto=mapper.map(o, OrderDTO.class);
		oDto.setBuyer_id(o.getBuyer().getId());
		oDto.setBuyer_name(o.getBuyer().getName());
		for(OrderDetails od:o.getOrderDetails()) {
			OrderDetailsDTO odd=mapper.map(od,OrderDetailsDTO.class );
			odd.setBuyer_id(od.getBuyer().getId());
			odd.setBuyer_name(od.getBuyer().getName());
			odd.setCrop_id(od.getCrop().getId());
			odd.setCrop_name(od.getCrop().getName());
			odd.setFarmer_id(od.getFarmer().getId());
			odd.setFarmer_name(od.getFarmer().getFullName());
			odd.setOrder_id(od.getOrder().getId());
			oDto.getOrderDetailsDTO().add(odd);
			
		}
		return oDto;
	}
	
//	public List<OrderDTO> findByBuyerId(long id) {
//		BuyerEntity b=buyerRepo.findById(id).orElseThrow(()->new IllegalArgumentException("Invalid buyer ID: " + id));
//		
//		List<Order> orders = orderRepo.findByBuyerId(id);  // Fetch all orders from the database
//          
//		List<OrderDTO> oDTO=orders.stream().map(o->{OrderDTO odt=mapper.map(o,OrderDTO.class);
//		odt.setBuyer_id(o.getBuyer().getId());
//		odt.setBuyer_name(o.getBuyer().getName());
//				return odt;
//		}).collect(Collectors.toList());
//		
//		for(OrderDTO o:oDTO) {
//			
//			for(OrderDetails od:orders) {
//				OrderDetailsDTO odd=mapper.map(od,OrderDetailsDTO.class );
//				odd.setBuyer_id(od.getBuyer().getId());
//				odd.setBuyer_name(od.getBuyer().getName());
//				odd.setCrop_id(od.getCrop().getId());
//				odd.setCrop_name(od.getCrop().getName());
//				odd.setFarmer_id(od.getFarmer().getId());
//				odd.setFarmer_name(od.getFarmer().getFullName());
//				odd.setOrder_id(od.getOrder().getId());
//				o.getOrderDetailsDTO().add(odd);
//				
//			}
//		}
//
//		
//	}
	
	
	    // Filter the orders based on the buyer's ID and convert them to DTOs
	   
	}

