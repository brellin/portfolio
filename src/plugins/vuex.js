import { createStore } from 'vuex';

const store = createStore({
    state: {
        isWill: false
    },
    mutations: {
        login(state) {
            state.isWill = true;
        }
    }
});

export default store;
