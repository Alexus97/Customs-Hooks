import { useState } from "react";
//import PropTypes from 'prop-types';
export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = ( value = 1) => {
        setCounter( (current) => current + value );
    }

    const decrement = (value = 1) => {
        // if( counter === 0) return; 
        // setCounter( counter -1 );
        setCounter( ( current ) => current - value );
    }

    const reset = () => {

        setCounter( initialValue);

    }

    return{
        counter,
        increment,
        decrement,
        reset,

    }
}

// useCounter.PropTypes = {
//     initialValue: PropTypes.number.isRequired
// }