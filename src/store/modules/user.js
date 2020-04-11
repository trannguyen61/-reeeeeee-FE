// import userAxios from '../../../test/user'
import axios from 'axios'

export default {
    state: {
        token: '',
        role: '',
    },
    getters: {
        getRole(state) {
            return state.role
        },
        getToken(state) {
            return state.token !== '' ? true : false
        },
        getTokenCredential(state) {
            return state.token
        }
    },
    mutations: {
        'SET_TOKEN'(state, token) {
            state.token = token
        },
        'SET_ROLE'(state, role) {
            state.role = role
        }
    },
    actions: {
        /* 
        res form:

        data: {code: 200, token: "..."}
        status: 200
        statusText: "OK"
        headers: {content-length: "190", content-type: "application/json; charset=utf-8"}
        config: {url: "http://localhost:3000/api/signup", method: "post", data: "{"email":"patient@sample.com","name":"Tesing","phone_number":"12121","password":"1212121"}", headers: {…}, transformRequest: Array(1), …}
        request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
        
        */
        userLogin({ commit }, { email, password }) {

            return new Promise((resolve, reject) => {
                commit('TOGGLE_LOADING', { root: true })
                //userAxios.signup({ email, password })
                axios.post('http://localhost:3000/api/login', {
                    email, userPassword: password
                }).then((response) => {
                    if (response.status === 200) {
                        console.log(response)
                        const token = response.data.token
                        const role = response.data.role
                        commit('SET_TOKEN', token)
                        commit('SET_ROLE', role)
                        localStorage.setItem('access_token', token)
                        resolve('LOGIN SUCCEEDED')
                    } else throw new Error(response.data.err)
                })
                    .catch(e => {
                        console.log(e)
                        localStorage.removeItem('access_token')
                        reject(e)
                    })
                    .finally(() => {
                        commit('TOGGLE_LOADING', { root: true })
                    })
            })

        },

        userSignup({ commit }, payload) {
            //placeholder
            return new Promise((resolve, reject) => {
                commit('TOGGLE_LOADING', { root: true })
                // userAxios.signup({ email, password })
                axios.post('http://localhost:3000/api/signup', {
                    email: payload.email, 
                    userName: payload.userName, 
                    phoneNumber: payload.phoneNumber, 
                    userPassword: payload.userPassword, 
                    dateOfBirth: payload.dateOfBirth, 
                    idCardSerial: payload.idCardSerial
                }).then((response) => {
                    console.log(response)
                    if (response.status === 200) {
                        console.log(response.data)
                        const token = response.data.token
                        const role = response.data.role
                        commit('SET_TOKEN', token)
                        commit('SET_ROLE', role)
                        localStorage.setItem('access_token', token)
                        resolve('SIGNUP SUCCEEDED')
                    } else throw new Error(response.data.err)
                })
                    .catch(e => {
                        console.log(JSON.stringify(e))
                        localStorage.removeItem('access_token')
                        reject(e)
                    })
                    .finally(() => {
                        commit('TOGGLE_LOADING', { root: true })
                    })
            })
        },

        userSignout({ commit }) {
            console.log('SIGN OUT')
            commit('SET_TOKEN', '')
            commit('SET_ROLE', '')
            localStorage.removeItem('access_token')
        }
    }
}