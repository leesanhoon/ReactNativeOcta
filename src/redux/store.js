import { createStore } from "redux";

const defaultStore = { transaction: null }

const reducer = (state = defaultStore, action) => {
    if (action.type == 'SAVE') {
        return { transaction: action.transaction };
    }
    return state;
}

const store = createStore(reducer);

export default store;

