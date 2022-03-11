import axios from 'axios';
import AuthHeader from '../AuthHeader';
const API_URL = 'https://geo-brumaire-api.herokuapp.com/api/';
class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'user/');
    }

    getUserPoint(id) {
        return axios.get(API_URL + `user/${id}`, { headers: AuthHeader() });
    }

    postTicket(point) {
        return axios.put(API_URL + `purchase_ticket/point`, { headers: AuthHeader() });
    }

    updateUser(user){
        return axios.put(API_URL + `purchase_ticket/point`, { headers: AuthHeader(),body: {
            username : user.username,
            password : user.password,
            mail: user.email,
            scooter: user.scooter
        } });
    }

    deleteUserById(id){
        return axios.delete(API_URL + `user/${id}`, { headers: AuthHeader() });
    }

    getScooter(){
        return axios.get(API_URL + `scooter/`, { headers: AuthHeader() });
    }

    deleteScooter(id){
        return axios.delete(API_URL + `scooter/${id}`, { headers: AuthHeader() });
    }

    addScooterToUser(id){
        return axios.put(API_URL + `scooter/addUser/${id}`, { headers: AuthHeader() });
    }

    deleteScooterToUser(id){
        return axios.delete(API_URL + `scooter/deleteUser/${id}`, { headers: AuthHeader() });
    }


}
export default new UserService();