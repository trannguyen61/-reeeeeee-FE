// import formAxios from '../../../test/form'
import axios from 'axios'

export default {
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {
        getForm({commit}) {
            return new Promise((resolve, reject) => {
                commit('TOGGLE_LOADING', { root: true })
                axios.get('http://localhost:3000/api/form')
                .then(response => {
                    if (response.data.code === 200) resolve(response.data.forms)
                    else throw new Error(response)
                }).catch(e => reject(e))
            })
        },

        postForm({ commit }, payload) {
            return new Promise((resolve, reject) => {
                commit('TOGGLE_LOADING', { root: true })
                axios.post('http://localhost:3000/api/form', 
                    {patient: payload.patient, 
                    clinic: payload.clinic, 
                    checkUpDate: payload.checkUpDate, 
                    description: payload.description})
                    .then(response => {
                        if (response.data.code === 200) resolve()
                        else throw new Error(response)
                    })
                    .catch(e => {
                        reject(e)
                    })
                    .finally(() => {
                        commit('TOGGLE_LOADING', { root: true })
                    })
            })
            
        },

        // searchClinic({ commit }, clinic) {
        //     return new Promise((resolve, reject) => {
        //         commit('TOGGLE_LOADING', { root: true })
        //         formAxios.searchClinic(clinic)
        //             .then(response => {
        //                 if (response.code === 200) resolve(response.clinics)
        //                 else throw new Error(response)
        //             })
        //             .catch(e => {
        //                 reject(e.error)
        //             })
        //             .finally(() => {
        //                 commit('TOGGLE_LOADING', { root: true })
        //             })
        //     })
            
        // },

        // searchForm({ commit }, date) {
        //     return new Promise((resolve, reject) => {
        //         commit('TOGGLE_LOADING', { root: true })
        //         formAxios.searchForm(date)
        //             .then(response => {
        //                 if (response.code === 200) resolve(response.forms)
        //                 else throw new Error(response)
        //             })
        //             .catch(e => {
        //                 reject(e.error)
        //             })
        //             .finally(() => {
        //                 commit('TOGGLE_LOADING', { root: true })
        //             })
        //     })
            
        // },

        // searchPatient({ commit }, email) {
        //     return new Promise((resolve, reject) => {
        //         commit('TOGGLE_LOADING', { root: true })
        //         prescriptionAxios.searchPatient(email)
        //             .then(response => {
        //                 if (response.code === 200) resolve(response.patient)
        //                 else throw new Error(response)
        //             })
        //             .catch(e => {
        //                 reject(e.error)
        //             })
        //             .finally(() => {
        //                 commit('TOGGLE_LOADING', { root: true })
        //             })
        //     })
            
        // },

        checkForm({commit}, payload) {
            //true false value?
            return new Promise((resolve, reject) => {
                commit('TOGGLE_LOADING', { root: true })
                axios.patch('http://localhost:3000/api/form', {
                    formID: payload.formID,
                    value: payload.value
                })
                    .then(response => {
                        if (response.data.code === 200) resolve('CHECK FORM SUCCEEDED')
                        else throw new Error(response)
                    })
                    .catch(e => {
                        reject(e.error)
                    })
                    .finally(() => {
                        commit('TOGGLE_LOADING', { root: true })
                    })
            })
            
        },

        searchData({commit}, payload) {
            return new Promise((resolve, reject) => {
                commit('TOGGLE_LOADING', { root: true })
                axios.post('http://localhost:3000/api/search', {
                    params: {
                        search: payload.search,
                        data: payload.data
                    }
                }).then(response => {
                        if (response.data.code === 200) resolve(response.data.result)
                        else throw new Error(response)
                    })
                    .catch(e => {
                        reject(e.error)
                    })
                    .finally(() => {
                        commit('TOGGLE_LOADING', { root: true })
                    })
            })
        }
    }
}