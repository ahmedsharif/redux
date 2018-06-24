import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ setCount = 0 } = {}) => ({
  type: "SET",
  setCount
});

const resetCount = ({ resetCount = 0 } = {}) => ({
  type: "RESET",
  resetCount
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };

    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };

    case "SET":
      return {
        count: action.count
      };

    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
});

store.subscribe(() => {
    console.log(store.getStore());
});

store.dispatch(incrementCount({ incrementBy: 50 }));
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({ setCount: 20 }));
store.dispatch(resetCount({ resetCount: 0 }));
