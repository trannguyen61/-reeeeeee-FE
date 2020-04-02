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
            commit('TOGGLE_LOADING', { root: true })
            prescription.post(prescription)
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
        },

        getPrescription({ commit }) {
            commit('TOGGLE_LOADING', { root: true })
            formAxios.searchForm(date)
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
        }
    }
}