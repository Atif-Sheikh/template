import { ActionTypes } from '../constants';
import AuthMiddleWare from './../middleware/authMiddleware';

export default class AuthActions {
    static getData(token) {
        return (dispatch) => {
            dispatch({ type: ActionTypes.GET_DATA });
            AuthMiddleWare.GetData(token)
                .then((data) => {
                    console.log(data, "data");
                    dispatch({ type: ActionTypes.GET_DATA_SUCCESS, data: data });
                })
                .catch((err) => {
                    console.log(err, "EEORRRR");
                    dispatch({ type: ActionTypes.GET_DATA_FAIL, msg: err.message });
                })
        }
    };

    static login(obj) {
        console.log(obj, "MAAAAAA KAAAAAAAAAAA")
        return (dispatch) => {
            dispatch({ type: ActionTypes.LOGIN });
            AuthMiddleWare.Login(obj)
                .then((token) => {
                    console.log(token, "adddddddddddddddddddddddddddddddddddddddddddd")
                    dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: token });
                })
                .catch((err) => {
                    console.log("ye dekhooooooo", err);
                    dispatch({ type: ActionTypes.LOGIN_FAILED, payload: err.message });
                })
        }
    }
};