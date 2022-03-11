import axios from "axios";
const API_URL = "https://geo-brumaire-api.herokuapp.com/api/auth/";
class AuthService {
    login(data) {
        return axios
            .post(API_URL + "login", data)
            .then(response => {
                localStorage.setItem("user", JSON.stringify(response.data));
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(data) {
        return axios.post(API_URL + "register", data);
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}
export default new AuthService();