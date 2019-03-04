import { ActionTypes } from '../constants';
import ProjectMiddleware from './../middleware/projectMiddleware';

export default class ProjectActions {
    static getMidData() {
        return (dispatch) => {
            dispatch({ type: ActionTypes.GET_MID_DATA });
            ProjectMiddleware.GetMiddleData()
                .then((data) => {
                    dispatch({ type: ActionTypes.GET_MID_DATA_SUCCESS, data: data });
                })
                .catch((err) => {
                    dispatch({ type: ActionTypes.GET_MID_DATA_FAILED, msg: err.message });
                })
        }
    };

    static sendEmailMessage(data) {
        return (dispatch) => {
            dispatch({ type: ActionTypes.SEND_EMAIL_MESSAGE, payload: data });
        }
    }
};