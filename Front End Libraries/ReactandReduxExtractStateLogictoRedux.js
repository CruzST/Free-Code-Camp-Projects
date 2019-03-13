/*
React and Redux: Extract State Logic to Redux

Now that you finished the React component, you need to move the logic it's performing locally in its state into Redux. 
This is the first step to connect the simple React app to Redux. The only functionality your app has is to add new messages 
from the user to an unordered list. The example is simple in order to demonstrate how React and Redux work together.

First, define an action type 'ADD' and set it to a const ADD. Next, define an action creator addMessage() which creates the 
action to add a message. You'll need to pass a message to this action creator and include the message in the returned action.

Then create a reducer called messageReducer() that handles the state for the messages. The initial state should equal an 
empty array. This reducer should add a message to the array of messages held in state, or return the current state. 
Finally, create your Redux store and pass it the reducer.


Passed
The const ADD should exist and hold a value equal to the string ADD
Passed
The action creator addMessage should return an object with type equal to ADD and message equal to the message that is passed in.
Passed
messageReducer should be a function.
Passed
The store should exist and have an initial state set to an empty array.
Passed
Dispatching addMessage against the store should immutably add a new message to the array of messages held in state.
Passed
The messageReducer should return the current state if called with any other actions.
*/

// define ADD, addMessage(), messageReducer(), and store here

const ADD = 'ADD';

const addMessage = (message) => {
    return {
        type: ADD,
        message: message
    }
}

const messageReducer = (previousState, action) => {
    return [...previousState, action.message];
}


let store = {
  state: [],
  getState: () => store.state,
  dispatch: (action) => {
    if (action.type === ADD) {
      store.state = messageReducer(store.state, action);
    }
  }
};
