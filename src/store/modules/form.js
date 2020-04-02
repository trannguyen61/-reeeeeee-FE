import formAxios from '../../../test/form'

export default {
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {
        postForm({ commit }, { clinic, date, description }) {
            commit('TOGGLE_LOADING', { root: true })
            formAxios.post({ clinic, date, description })
                .then(response => {
                    if (response.code === 200) resolve()
                    else throw new Error(response)
                })
                .catch(e => {
                    reject(e.error)
                })
                .finally(() => {
                    commit('TOGGLE_LOADING', { root: true })
                })
        },

        searchClinic({ commit }, clinic) {
            commit('TOGGLE_LOADING', { root: true })
            formAxios.searchClinic(clinic)
                .then(response => {
                    if (response.code === 200) resolve(response.clinics)
                    else throw new Error(response)
                })
                .catch(e => {
                    reject(e.error)
                })
                .finally(() => {
                    commit('TOGGLE_LOADING', { root: true })
                })
        },

        searchForm({ commit }, date) {
            commit('TOGGLE_LOADING', { root: true })
            formAxios.searchForm(date)
                .then(response => {
                    if (response.code === 200) resolve(response.forms)
                    else throw new Error(response)
                })
                .catch(e => {
                    reject(e.error)
                })
                .finally(() => {
                    commit('TOGGLE_LOADING', { root: true })
                })
        },

        searchPatient({ commit }, email) {
            commit('TOGGLE_LOADING', { root: true })
            formAxios.searchPatient(email)
                .then(response => {
                    if (response.code === 200) resolve(response.patient)
                    else throw new Error(response)
                })
                .catch(e => {
                    reject(e.error)
                })
                .finally(() => {
                    commit('TOGGLE_LOADING', { root: true })
                })
        },

        checkForm({commit}, value) {
            //true false value?
            commit('TOGGLE_LOADING', { root: true })
            formAxios.checkForm(value)
                .then(response => {
                    if (response.code === 200) resolve()
                    else throw new Error(response)
                })
                .catch(e => {
                    reject(e.error)
                })
                .finally(() => {
                    commit('TOGGLE_LOADING', { root: true })
                })
        }
    }
}