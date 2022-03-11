export default function AuthHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.cookie.connect.sid) {
        return { Cookie: 'connect_sid =' + user.cookie.connect.sid };
    } else {
        return {};
    }
}