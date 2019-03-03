import { ActionTypes } from '../constants';
import AuthMiddleWare from './../middleware/authMiddleware';

export default class AuthActions {
    static getData(token) {
        return (dispatch) => {
            dispatch({ type: ActionTypes.GET_DATA });
            AuthMiddleWare.GetData(token)
                .then((data) => {
                    dispatch({ type: ActionTypes.GET_DATA_SUCCESS, data: data });
                })
                .catch((err) => {
                    dispatch({ type: ActionTypes.GET_DATA_FAIL, msg: err.message });
                })
        }
    };

    static login(obj) {
        return (dispatch) => {
            dispatch({ type: ActionTypes.LOGIN });
            AuthMiddleWare.Login(obj)
                .then((token) => {
                    dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: token });
                })
                .catch((err) => {
                    dispatch({ type: ActionTypes.LOGIN_FAILED, payload: err.message });
                })
        }
    }
};