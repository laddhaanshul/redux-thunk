export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const setIncrementCounter = () => {
    // return {
    //     type: INCREMENT_COUNTER,
    // }
    return dispatch => {     
        console.log('Perform some async task')   
        dispatch({
            type: INCREMENT_COUNTER,
        })
    }
}

export const setDecrementCounter = () => {
    // return {
    //     type: DECREMENT_COUNTER,
    // }
    return dispatch => {
        console.log('Perform some async task')
        dispatch({
            type: DECREMENT_COUNTER
        })
    }
}