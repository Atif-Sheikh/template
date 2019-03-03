import {
    ActionTypes
} from '../constants';

const initialState = {
    middleData: {},
    isLoading: false,
    isError: false,
    error: null,
};
export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_MID_DATA:
            return {
                ...state,
                data: {},
                isLoading: true,
                isError: false,
                error: null
            };
        case ActionTypes.GET_MID_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoading: false
            }
        case ActionTypes.GET_MID_DATA_FAILED: 
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