import { createStore } from "vuex";

export default createStore({
    state: {
        selectType: '',
        selectCountry: ''
    },
    mutations: {
        SELECTTYPE(state, payload) {
            state.selectType = payload
        },
        SELECTCOUNTRY(state, payload) {
            state.selectCountry = payload
        }
    },
    actions: {
        selecttype(context, payload) {
            context.commit('SELECTTYPE', payload)
        },
        selectcountry(context, payload) {
            context.commit('SELECTCOUNTRY', payload)
        }
    }
})