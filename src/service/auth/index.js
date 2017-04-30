/**
 * Authentication service
 * 
 * For now, simulated by local storing password and username
 * 
 * @todo: Implement facebook, twitter and google login
 * @todo: change overall implementation with redux
 * 
 */


function login(username, password) {
    if (username === "john.doe" && password === "123") {
        localStorage.setItem("isLoggedIn", true);
        return true;
    } else {
        return false;
    }
}

function logout() {
    localStorage.setItem("isLoggedIn", false);
    return true;
}

function isLoggedIn() {
    return JSON.parse(localStorage.getItem("isLoggedIn"));
}

const Auth = {
    login: login,
    logout: logout,
    isLoggedIn: isLoggedIn
}

export default Auth;