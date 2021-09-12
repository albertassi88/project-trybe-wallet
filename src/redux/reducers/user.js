const INITIAL_STATE = {
    user: ''
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER':
            return { ...state, user: action.value };
        default:
            return state;
    }
}

export default userReducer;