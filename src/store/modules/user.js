import userAxios from '../../../test/user'

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
        userLogin({ commit }, { email, password }) {

            return new Promise((resolve, reject) => {
                commit('TOGGLE_LOADING', {root: true})
                userAxios.signup({ email, password })
                    .then((response) => {
                        if (response.code === 200) {
                            const token = response.token
                            const role = response.role
                            commit('SET_TOKEN', token)
                            commit('SET_ROLE', role)
                            localStorage.setItem('access_token', token)
                            resolve('LOGIN SUCCEEDED')
                        } else throw new Error(response.error)
                    })
                    .catch(e => {
                        localStorage.removeItem('access_token')
                        reject(e)
                    })
                    .finally(() => {
                        commit('TOGGLE_LOADING', {root: true})
                    })
            })

        },

        userSignup({ commit }, { email, password }) {
            //placeholder
            return new Promise((resolve, reject) => {
                commit('TOGGLE_LOADING', {root: true})
                userAxios.signup({ email, password })
                    .then((response) => {
                        if (response.code === 200) {
                            const token = response.token
                            const role = response.role
                            commit('SET_TOKEN', token)
                            commit('SET_ROLE', role)
                            localStorage.setItem('access_token', token)
                            resolve('SIGNUP SUCCEEDED')
                        } else throw new Error(response)
                    })
                    .catch(e => {
                        localStorage.removeItem('access_token')
                        reject(e)
                    })
                    .finally(() => {
                        commit('TOGGLE_LOADING', {root: true})
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