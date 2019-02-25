import { ActionTypes } from '../constants';
import AuthMiddleWare from './../middleware/authMiddleware';

export default class AuthActions {
    static getData() {
        return (dispatch) => {
            dispatch({ type: ActionTypes.GET_DATA, data: "dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" });
            AuthMiddleWare.GetData()
                .then((data) => {
                    console.log(data, "data");
                    dispatch({ type: ActionTypes.GET_DATA_SUCCESS, data: data });
                })
                .catch((err) => {
                    console.log(err, "EEORRRR");
                    dispatch({ type: ActionTypes.GET_DATA_FAIL, msg: 'err.message' });
                })
        }
    };
};