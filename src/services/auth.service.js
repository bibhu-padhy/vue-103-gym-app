import {
    auth
} from '../firebase'


class AuthClass {
    async logIn(email, password) {
        return await auth.createUserWithEmailAndPassword(email, password)
    }

    async getLogedInUser() {
        return auth.currentUser
    }
}

export default new AuthClass();