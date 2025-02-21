import axios from 'axios';

const Order_Base_URL="http://localhost:8082/orders";

class OrderService {
    getOrder(orderId) {
        const t = localStorage.getItem('authToken');
        // const decodeToken = (t) => {
        //     const payload = t.split('.')[1];
        //     const decodedPayload = JSON.parse(atob(payload));
        //     return decodedPayload?.user_id;
        //   };
        
        //   const cartId = decodeToken(t);
    
        return axios.get(`${Order_Base_URL}/view/${orderId}`,{
            headers:{
                "Authorization":`Bearer ${t}`
            }
        });
    }

    addOrder() {
        const t=localStorage.getItem('token');
        const decodeToken = (t) => {
            const payload = t.split('.')[1];
            const decodedPayload = JSON.parse(atob(payload));
            return decodedPayload?.user_id;
          };
        
          const cartId = decodeToken(t);
          console.log(cartId);
          return axios.post(`${Order_Base_URL}/add/${cartId}`,{},{
            headers:{
                "Authorization":`Bearer ${t}`
            }
        });
    }

    getOrdersByBuyer(){
        const t=localStorage.getItem('token');
        const decodeToken = (t) => {
            const payload = t.split('.')[1];
            const decodedPayload = JSON.parse(atob(payload));
            return decodedPayload?.user_id;
          };
        
          const user= decodeToken(t);
          
          return axios.get(`${Order_Base_URL}/get/${user}`,{
            headers:{
                "Authorization":`Bearer ${t}`
            }
        });

    }




    // deleteCartItem(id) {
    //     const t = localStorage.getItem('token');
    
    //     return axios.delete(`${Cart_Base_URL}/delete/${id}`,{
    //         headers:{
    //             "Authorization":`Bearer ${t}`
    //         }
    //     });
    // }
}

export default new OrderService();