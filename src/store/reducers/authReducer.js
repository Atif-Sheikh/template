import {
    ActionTypes
} from '../constants';

const initialState = {
    data: {},
    isLoading: false,
    isError: false,
    error: null,
    token: null,
    loginLoading: false,
    loginError: ''
};
export default function authReducer(state = initialState, action) {
    console.log(action, "ACtionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
    switch (action.type) {
        case ActionTypes.LOGIN:
            return {
                ...state,
                loginLoading: true,
                token: null,
                loginError: ''
            };
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loginLoading: false,
                token: action.payload,
                loginError: ''
            }
        case ActionTypes.LOGIN_FAILED:
            return {
                ...state,
                loginLoading: false,
                token: null,
                loginError: action.payload
            }
        case ActionTypes.GET_DATA:
            return {
                ...state,
                data: {},
                isLoading: true,
                isError: false,
                error: null
            };
        case ActionTypes.GET_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoading: false
            }
        case ActionTypes.GET_DATA_FAIL:
            console.log(action.msg, " ????????????????????????????????????")
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.msg
            }

        default:
            return state;
    }
}