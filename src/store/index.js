// redux

import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

///////////////////////////////
///////////////////////////////
// import { createSlice, configureStore } from '@reduxjs/toolkit';

// const initialState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const store = configureStore({
//   reducer: counterSlice.reducer,
// });

// export const counterActions = counterSlice.actions;

// export default store;

////////////////////////////////
///////////////////////////////
///////////////////////////////
// import { createStore } from 'redux';

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { counter: state.counter + 1, showCounter: state.showCounter };
//     case 'INCREASE':
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter,
//       };
//     case 'DECREMENT':
//       return { counter: state.counter - 1, showCounter: state.showCounter };
//     case 'TOGGLE':
//       return { counter: state.counter, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };
// const store = createStore(counterReducer);
