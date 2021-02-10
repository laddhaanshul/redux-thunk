import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../actions/CounterActions'

const initialState = {
    counter: 0
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER: 
            const finalIncValue = state.counter + 1
            return {...state, counter: finalIncValue}
        case DECREMENT_COUNTER: 
            const finalDecValue = state.counter === 0 ? state.counter : state.counter - 1
            return {...state, counter: finalDecValue}
        default: 
            return state    
    }
}

export default CounterReducer