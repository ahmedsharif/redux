import { createStore, combineReducers } from "redux";
import expensesReducers from "../reducers/expenses";
import filtersReducers from "../reducers/filters";

const store = createStore(
  combineReducers({
    expenses: expensesReducers,
    filters: filtersReducers
  })
);

export default store;
