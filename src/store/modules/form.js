// import formAxios from '../../../test/form'
import axios from 'axios' 

export default {
    state: {
        forms: []
    },
    getters: {
        getForm(state) {
            return state.forms
        }
    },
    mutations: {
        'SET_FORM'(state, forms) {
            state.forms = forms
        }
    },
    actions: {
        getForm({commit, rootGetters}) {
            return new Promise((resolve, reject) => {
                commit('TOGGLE_LOADING', { root: true })
                axios.get(`${process.env.VUE_APP_API_URL}/api/form`, {
                    headers: {
                        'Authorization': `Bearer ${rootGetters.getTokenCredential}`
                    }
                })
                .then(response => {
                    console.log(response)
                    if (response.data.code === 200) {
                        commit('SET_FORM', response.data.forms)
                        resolve()
                    }
                    else throw new Error(response.data.err)
                }).catch(e => reject(e))
            })
        },

        postForm({ commit, rootGetters }, payload) {
            return new Promise((resolve, reject) => {
                commit('TOGGLE_LOADING', { root: true })
                axios.post(`${process.env.VUE_APP_API_URL}/api/form`, 
                    {patient: payload.patient, 
                    clinic: payload.clinic, 
                    checkUpDate: payload.checkUpDate, 
                    description: payload.description}, {
                        headers: {
                            'Authorization': `Bearer ${rootGetters.getTokenCredential}`
                        }})
                    .then(response => {
                        if (response.data.code === 200) resolve()
                        else throw new Error(response.data.err)
                    })
                    .catch(e => {
                        reject(e)
                    })
                    .finally(() => {
                        commit('TOGGLE_LOADING', { root: true })
                    })
            })
            
        },

        checkForm({commit, rootGetters}, payload) {
            //true false value?
            return new Promise((resolve, reject) => {
                commit('TOGGLE_LOADING', { root: true })
                axios.patch(`${process.env.VUE_APP_API_URL}/api/form`, {
                    formID: payload.formID,
                    value: payload.value
                }, {
                    headers: {
                        'Authorization': `Bearer ${rootGetters.getTokenCredential}`
                    }})
                    .then(response => {
                        if (response.data.code === 200) resolve('CHECK FORM SUCCEEDED')
                        else throw new Error(response.data.err)
                    })
                    .catch(e => {
                        reject(e)
                    })
                    .finally(() => {
                        commit('TOGGLE_LOADING', { root: true })
                    })
            })
            
        },

        searchData({commit, rootGetters}, payload) {
            return new Promise((resolve, reject) => {
                commit('TOGGLE_LOADING', { root: true })
                console.log(payload)
                axios.post(`${process.env.VUE_APP_API_URL}/api/search`, null, {
                    params: {
                        search: payload.search,
                        data: payload.data
                    },
                        headers: {
                            'Authorization': `Bearer ${rootGetters.getTokenCredential}`
                        }
                }).then(response => {
                        if (response.data.code === 200) resolve(response.data.result)
                        else throw new Error(response.data.err)
                    })
                    .catch(e => {
                        reject(e)
                    })
                    .finally(() => {
                        commit('TOGGLE_LOADING', { root: true })
                    })
            })
        }
    }
}