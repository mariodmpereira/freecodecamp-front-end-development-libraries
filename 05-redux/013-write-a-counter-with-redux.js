const INCREMENT = "INCREMENT"; // Define a constant for increment action types
const DECREMENT = "DECREMENT"; // Define a constant for decrement action types

// Define the counter reducer which will increment or decrement the state based on the action it receives
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return ++state;
        case DECREMENT:
            return --state;
        default:
            return state;
    }
}; 

// define an action creator for incrementing
const incAction = () => {
    return {
        type: INCREMENT
    };
};

// define an action creator for decrementing
const decAction = () => {
    return {
        type: DECREMENT
    };
};

// define the Redux store here, passing in your reducers
const store = Redux.createStore(counterReducer);