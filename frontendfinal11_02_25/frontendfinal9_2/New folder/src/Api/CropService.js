import axios from 'axios';

const Crops_API_BASE_URL = "http://localhost:8082/crops";

class CropService {
    // getCrop() {
    //     return axios.get(`${Crops_API_BASE_URL}/view`);
    // }

    getCrop() {
        const token = localStorage.getItem('token');
    
        return axios.get(`${Crops_API_BASE_URL}/view`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
    }



    getCropById(id) {
        return axios.get(`${Crops_API_BASE_URL}/${id}`);
    }

    addCrop(crop) {
        //   const t = localStorage.getItem('token');
        // const decodeToken = (t) => {
        //     const payload = t.split('.')[1];
        //     const decodedPayload = JSON.parse(atob(payload));
        //     return decodedPayload?.user_id;
        //   };
        
        // //   const cartId = decodeToken(t);
    
         return axios.post(`${Crops_API_BASE_URL}/add`,crop, {
            headers: {
                'Content-Type': 'application/json',
            },
        }); 
    }
    updateCrop(crop,id) {

         return axios.put(`${Crops_API_BASE_URL}/edit/${id}`,crop); 
    }

    deleteCrop(id) {
        return axios.delete(`${Crops_API_BASE_URL}/delete/${id}`);
    }
}

export default new CropService();