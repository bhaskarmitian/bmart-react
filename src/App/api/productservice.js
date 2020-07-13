import axios from 'axios';

class ProductService {

//    retriveAllUsers(username){
//        return axios.get(`http://localhost:7070/users/${username}`);
//    }
//    deleteUser(userId){
//        return axios.delete(`http://localhost:7070/users/${userId}`);
       
//    }
//    updateUser(userId){
//        return axios.post(`http://localhost:7070/users/${userId}`);
//    }
   getAdvertisedProduct(){
       return axios.get('http://localhost:7070/products');
   }
}
export  default new ProductService()  