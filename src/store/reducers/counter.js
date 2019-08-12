import * as actionTypes from '../actions/actionsTypes'


const initialState = {
    counter: 0,
}

const counter = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.INCREMENT: 
            return {
            ...state,
            counter: state.counter + 1
        }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter -1
        }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
        }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
        }
        case actionTypes.CLEAR:
            return {
                ...state,
                counter: action.clear
        }

    }
    return state;
};

export default counter;