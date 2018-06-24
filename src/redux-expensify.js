import { createStore, combineReducers } from "redux";

const demoState = {
  expenses: [
    {
      id: "poijasdfhwer",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 545000,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};

const expensesReducerDefaultState = [];

const expensesReducers = (state = expensesReducerDefaultState, action) => {
  // switch(action) {
  //     default:
  //         return state;
  // }
  return
};

const store = createStore(expensesReducers);
