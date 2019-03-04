import {
    ActionTypes
} from '../constants';

const initialState = {
    middleData: {},
    isLoading: false,
    isError: false,
    error: null,

    sendEmailLoading: false,
    sendEmail: false,
    sendEmailError: null
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
        case ActionTypes.SEND_EMAIL_MESSAGE:
            return {
                ...state,
                sendEmailLoading: true,
                sendEmailError: null
            }
        case ActionTypes.SEND_EMAIL_MESSAGE_SUCCESS:
            return {
                ...state,
                sendEmailLoading: false,
                sendEmailError: null,
                sendEmail: true
            }
        case ActionTypes.SEND_EMAIL_MESSAGE_FAILED:
            return {
                ...state,
                sendEmailLoading: false,
                sendEmailError: action.payload,
                sendEmail: false
            }

        default:
            return state;
    }
}