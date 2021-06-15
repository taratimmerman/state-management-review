const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1 >= 0 ? state - 1 : 0;
        default:
            return state;
    }
};

export default reducer;