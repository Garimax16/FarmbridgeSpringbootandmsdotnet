// import axios from 'axios';

// const Farmers_API_BASE_URL = "http://localhost:9090/farmers";

// class FarmerService {
//     getFarmers() {
//         return axios.get(`${Farmers_API_BASE_URL}/view`);
//     }

//     addFarmer(farmer) {
//         return axios.post(`${Farmers_API_BASE_URL}/add`, farmer); // Fixed URL syntax
//     }
// }

// export default new FarmerService();
import axios from 'axios';

const Farmers_API_BASE_URL = "http://localhost:8082/farmers";

class FarmerService {
    getFarmers() {
        return axios.get(`${Farmers_API_BASE_URL}/view`);
    }

    // addFarmer(farmer) {
    //     const t = localStorage.getItem('authToken');
    //     // const decodeToken = (t) => {
    //     //     const payload = t.split('.')[1];
    //     //     const decodedPayload = JSON.parse(atob(payload));
    //     //     return decodedPayload?.user_id;
    //     //   };
        
    //     //   const cartId = decodeToken(t);
    
    //     return axios.get(`${Order_Base_URL}/view/${orderId}`,{
    //         headers:{
    //             "Authorization":`Bearer ${t}`
    //         }
    //     });
    // }

    deleteFarmer(id) {
        return axios.delete(`${Farmers_API_BASE_URL}/delete/${id}`);
    }
}

export default new FarmerService();
