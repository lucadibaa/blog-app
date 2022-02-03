import { authTypes } from "../constants/types"

const initialState = {
    user: {},
    errors: {},
    loading: false
}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        // register
        case authTypes.REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
                errors: {}
            }
        case authTypes.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload
            }
        case authTypes.REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                errors: payload
            }
        // login
        case authTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                errors: {}
            }
        case authTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload
            }
        case authTypes.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                errors: payload
            }
        // logout
        case authTypes.LOGOUT:
            return {
                ...state,
                user: {},
                loading: false,
                errors: {}
            }
        // default
        default:
            return state
    }
}

export default authReducer
