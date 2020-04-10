import prescriptionAxios from '../../../test/prescription'

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
                prescriptionAxios.post(prescription)
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
                prescriptionAxios.get()
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