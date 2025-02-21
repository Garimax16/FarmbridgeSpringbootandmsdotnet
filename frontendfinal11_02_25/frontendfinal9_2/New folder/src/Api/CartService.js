import axios from 'axios';

const Cart_Base_URL="http://localhost:8082/cart";

class CartService {
    getCart() {
        const t = localStorage.getItem('authToken');
    const decodeToken = (token) => {
      const payload = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(payload));
      return decodedPayload?.user_id;
    };
  
    const cartId = decodeToken(t);
    
        return axios.get(`${Cart_Base_URL}/view/${cartId}`,{
            headers:{
                "Authorization":`Bearer ${t}`
            }
        });
    }

    addCart(cartItem) {
        const token=localStorage.getItem('authToken');
        

        return axios.post(`${Cart_Base_URL}/add/items`, cartItem,{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
    }

    deleteCartItem(id) {
        const t = localStorage.getItem('token');
    
        return axios.delete(`${Cart_Base_URL}/delete/${id}`,{
            headers:{
                "Authorization":`Bearer ${t}`
            }
        });
    }
}

export default new CartService();