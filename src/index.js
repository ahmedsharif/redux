import store from "./store/configureStore";
import getVisibleExpense from "./selectors/expenses";
import { addExpense, removeExpense, editExpense } from "./actions/expense";
import React from "react";
import ReactDOM from 'react-dom';
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount
} from "./actions/filters";

import AuthInfo from "./hoc";

// function Main() {
//   const book = {
//     title: "ego",
//     author: "ahmed sharif",
//     publisher: {
//       name: "Ilmi book depot",
//       city: "lahore"
//     }
//   };

//   const address = ['1299 juniper street', 'phiodophia', 'pennsylvania', '19147'];

//   const [street, city, state, zip] = address;

//   const { title, author } = book;
//   const { name } = book.publisher;

//   if (title && author) {
//     console.log(
//       'book title {title} and author is ${author} and publisher name ${name}'
//     );
//   }
//   var str2 = 'you are in' + city + street;

//   const add = ({ a, b}, c) => {
//     return a + b + c;
// };

// console.log(add({ a: 5, b: 2}, 100));

//   return (<div> ${str2} </div>)

// }

// ReactDOM.render(<Main />, document.getElementById("root"));
// registerServiceWorker();

// // action file
// // action generators
// const incrementCount = ({ incrementBy = 1 } = {}) => ({
//   type: "INCREMENT",
//   incrementBy
// });

// const decrementCount = ({ decrementBy = 1 } = {}) => ({
//   type: "DECREMENT",
//   decrementBy
// });

// const setCount = ({ count = 0 } = {}) => ({
//   type: "SET",
//   count
// });

// const resetCount = ({ resetCount = 0 } = {}) => ({
//   type: "RESET",
//   resetCount
// });

// const countReducers = (state = { count: 0 }, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + action.incrementBy
//       };

//     case "DECREMENT":
//       return {
//         count: state.count - action.decrementBy
//       };

//     case "SET":
//       return {
//         count: action.count
//       };

//     case "RESET":
//       return {
//         count: 0
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(countReducers);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(incrementCount({ incrementBy: 50 }));
// store.dispatch(incrementCount());
// store.dispatch(decrementCount({ decrementBy: 10 }));
// store.dispatch(setCount({ count: 20 }));
// store.dispatch(resetCount({ resetCount: 0 }));

// const demoState = {
//   expenses: [
//     {
//       id: "poijasdfhwer",
//       description: "January Rent",
//       note: "This was the final payment for that address",
//       amount: 545000,
//       createdAt: 0
//     }
//   ],
//   filters: {
//     text: "rent",
//     sortBy: "amount",
//     startDate: undefined,
//     endDate: undefined
//   }
// };

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

// // // dispatching data
// const expenseOne = store.dispatch(
//   addExpense({ description: "Water Bill", amount: 100, createdAt: 1000 })
// );
// const expenseTwo = store.dispatch(
//   addExpense({ description: "Gas Bill", amount: 500, createdAt: -1000 })
// );
// store.dispatch(setTextFilter("water"));
// const state = store.getState();
// const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
// console.log(visibleExpenses);



// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(
//   editExpense(expenseTwo.expense.id, { amount: 1500, createdAt: 200 })
// );

// store.dispatch(setTextFilter());
//store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(999));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate());

// ReactDOM.render(<AdminInfo isAdmin={true} info="this is my detail" />, document.getElementById('root'));

ReactDOM.render(<AuthInfo isAuthenticated={true} info="this is my detail" />, document.getElementById('root'));