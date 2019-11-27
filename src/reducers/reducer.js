const initialState = {
    users: [],
    loading: false
};

const reducer = (state=initialState, action) => {
    const newState = { ...state};

    switch(action.type) {
        case 'GET_USERS':
            return { ...newState, loading: true };
        case 'USERS_RECEIVED':
            return { ...newState, loading: false, users: action.value};
        default:
            return state
    }
};

export default reducer;

