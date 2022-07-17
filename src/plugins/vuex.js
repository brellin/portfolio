import { createStore } from 'vuex';

const store = createStore({
    state: {
        isWill: false,
        categories: [],
    },
    mutations: {
        login(state, proof) {
            state.isWill = true;
            sessionStorage.setItem('proof', JSON.stringify(proof));
        },
        populateCategories(state, cats) {
            state.categories = cats;
        }
    }
});

export default store;
