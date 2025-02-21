// import axios from 'axios';


// const Buyers_API_BASE_URL = "http://localhost:9090/api/buyers";

// class BuyerService {
//     getBuyers() {
//         return axios.get(`${Buyers_API_BASE_URL}/view`); // Matches "/view" in the backend
//     }

//     addBuyer(buyer) {
//         return axios.post(`${Buyers_API_BASE_URL}/add`, buyer); // Matches "/add" in the backend
//     }
// }

// export default new BuyerService();
import axios from 'axios';

const Buyers_API_BASE_URL = "http://localhost:8082/users"; // Matches the backend controller

class BuyerService {
    getBuyers() {
        // Backend has GET /api/buyers (no /view)
        return axios.get(Buyers_API_BASE_URL); 
    }

    addBuyer(buyer) {
        // Backend has POST /api/buyers (no /add)
        return axios.post(Buyers_API_BASE_URL, buyer); 
    }
    updateBuyer(id,buyer) {
        // Backend has POST /api/buyers (no /add)
        return axios.put(`${Buyers_API_BASE_URL}/${id}`,buyer ); 
    }


    getBuyerById(){

        const t = localStorage.getItem('token');
    const decodeToken = (token) => {
      const payload = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(payload));
      return decodedPayload?.user_id;
    };
  
    const user = decodeToken(t);
    
        return axios.get(`${Buyers_API_BASE_URL}/view/${user}`,{
            headers:{
                "Authorization":`Bearer ${t}`
            }
        });
    }
}

export default new BuyerService();
