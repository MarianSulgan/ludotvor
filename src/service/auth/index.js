/**
 * Authentication service
 * 
 * For now, simulated by local storing password and username
 * 
 * @todo: Implement facebook, twitter and google login
 * @todo: change overall implementation with redux
 * 
 */

import { Store } from 'service/store';
import users from 'data/users';

function getNamesAndPasswords() {
    let names = [], passwords = [];
    for (let i = 0; i < users.length; i++) {
        names.push(users[i].username);
        passwords.push(users[i].password);
    }
    return { usernames: names, passwords: passwords };
}

function login(username, password) {
    let data = getNamesAndPasswords();
    let index = data.usernames.indexOf(username);
    if (index === -1)
        return false;
    if (password === data.passwords[index]) {
        Store.set("isLoggedIn", true);
        Store.set("user", username);
        return true;
    } else {
        return false;
    }
}

function logout() {
    Store.set("isLoggedIn", false);
    Store.remove("user");
    return true;
}

function isLoggedIn() {
    return JSON.parse(localStorage.getItem("isLoggedIn"));
}

function getCurrentUser() {
    let username = Store.get("user");
    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username)
            return users[i];
    }
    return false;
}

const Auth = {
    login: login,
    logout: logout,
    isLoggedIn: isLoggedIn,
    getCurrentUser: getCurrentUser
}

export default Auth;