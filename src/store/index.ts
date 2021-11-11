import { createStore } from "vuex";


export interface State{
    selectType: string,
    selectCountry: string
  }


export default createStore<State>({
    state() {
        return {
            selectType: '',
            selectCountry: ''
        }
    },
    mutations: {
        SELECTTYPE(state, payload) {
            state.selectType = payload
        }
    },
    actions: {
        selecttype(context, payload) {
            context.commit('SELECTTYPE', payload)
        }
    }
})