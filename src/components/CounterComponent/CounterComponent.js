import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types'
import './CounterComponent.css'

import {setIncrementCounter, setDecrementCounter} from '../../store/actions/CounterActions'

const CounterComponent = props => {

    const counter = useSelector(state => state.counterReducer.counter)

    const dispatch = useDispatch();
    // const [counterValue, setCounterValue] = React.useState(counter)

    const increaseCounter = React.useCallback(() => {
        //setCounterValue(prevCount => prevCount + 1)
        dispatch(setIncrementCounter())
    }, [dispatch])

    const decreaseCounter = React.useCallback(() => {
        //setCounterValue(prevCount => prevCount - 1)
        dispatch(setDecrementCounter())
    }, [dispatch])

    return <div className="MainView">
        <h3>{props.name}</h3>
        <div className="SubView">
            <button className="Buttons" onClick={increaseCounter}>+</button>
            <h4>{/*counterValue*/ counter}</h4>
            <button className="Buttons" onClick={decreaseCounter}>-</button>
        </div>
    </div>

}

CounterComponent.prototype = {
    name: PropTypes.string
}

export default CounterComponent;