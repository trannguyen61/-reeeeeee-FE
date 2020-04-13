// import prescriptionAxios from '../../../test/prescription'
import axios from 'axios'

//under development

export default {
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {
        postPrescription({ commit }, prescription) {
            return new Promise((resolve, reject) => {
                commit('TOGGLE_LOADING', { root: true })
                axios.post( `${process.env.VUE_APP_API_URL}` ,prescription)
                    .then(response => {
                        if (response.code === 200) resolve(response.prescription)
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

        getPrescription({ commit }) {
            return new Promise((resolve, reject) => {
                commit('TOGGLE_LOADING', { root: true })
                axios.get(`${process.env.VUE_APP_API_URL}`)
                    .then(response => {
                        if (response.code === 200) resolve(response.prescriptions)
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

    }
}