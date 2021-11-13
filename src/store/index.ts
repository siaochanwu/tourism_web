import { createStore } from "vuex";

export default createStore({
    state: {
        selectType: '',
        selectCountry: '',
        allSpotData: [],
        allFoodData: [],
        allHotelData: [],
        allActivityData: []
    },
    mutations: {
        SELECTTYPE(state, payload) {
            state.selectType = payload
        },
        SELECTCOUNTRY(state, payload) {
            state.selectCountry = payload
        },
        SAVEALLSPOT(state, payload) {
            state.allSpotData = payload
        },
        SAVEALLFOOD(state, payload) {
            state.allFoodData = payload
        },
        SAVEALLHOTEL(state, payload) {
            state.allHotelData = payload
        },
        SAVEALLACTIVITY(state, payload) {
            state.allActivityData = payload
        }
    },
    actions: {
        selecttype(context, payload) {
            context.commit('SELECTTYPE', payload)
        },
        selectcountry(context, payload) {
            context.commit('SELECTCOUNTRY', payload)
        },
        saveallspot(context, payload) {
            context.commit('SAVEALLSPOT', payload)
        },
        saveallfood(context, payload) {
            context.commit('SAVEALLFOOD', payload)
        },
        saveallhotel(context, payload) {
            context.commit('SAVEALLHOTEL', payload)
        },
        saveallactivity(context, payload) {
            context.commit('SAVEALLACTIVITY', payload)
        }

    }
})