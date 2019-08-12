import * as actionTypes from './actionsTypes'

export const clear = (clear) => {
    return {
        type: actionTypes.CLEAR,
        clear: clear
    };
};

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}
export const storeResult = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(res));
        }, 1000);
    }
};
export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};