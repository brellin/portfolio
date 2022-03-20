import { createStore } from 'vuex';

const store = createStore({
    state: {
        isWill: false
    },
    mutations: {
        login(state, proof) {
            state.isWill = true;
            sessionStorage.setItem('proof', JSON.stringify(proof));
        }
    },

});

export default store;
