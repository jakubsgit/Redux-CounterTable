import * as actionTypes from '../actions/actionsTypes'
import {updateObject} from '../utility'


const initialState = {
    counter: 0,
}

const counter = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.INCREMENT: 
            return updateObject (state, {counter: state.counter + action.val})
            // const newState = Object.assign({}, state);
            // newState.counter = state.counter + 1;
            // return newState;
        case actionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - action.val})
        case actionTypes.ADD:
            return updateObject(state, {counter: state.counter + action.val})
        case actionTypes.SUBTRACT:
            return updateObject(state, {counter: state.counter - action.val});
        case actionTypes.CLEAR:
            return updateObject(state, {counter: action.clear})

    }
    return state;
};

export default counter;