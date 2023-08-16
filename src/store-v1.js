import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/CustomerSlice";

const rootStore = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootStore, applyMiddleware(thunk));

export default store;

// ***** Without using a Action Creater Function *****
// store.dispatch({ type: "account/deposit", payload: 500 });
// console.log(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 10000, purpose: "Buy a home" },
// });
// console.log(store.getState());

// store.dispatch({
//   type: "account/withdraw",
//   payload: 500,
// });
// console.log(store.getState());

// store.dispatch({
//   type: "account/payLoan",
// });

// console.log(store.getState());

// ***** With using a Action Creater Function *****

// store.dispatch(deposit(4000));
// console.log(store.getState());

// store.dispatch(withdraw(1000));
// console.log(store.getState());

// store.dispatch(requestLoan(10000, "buy a house"));
// console.log(store.getState());

// store.dispatch(payLoan());
// console.log(store.getState());

// store.dispatch(createCustomer("Pratik Gurav", "101010"));

// console.log(store.getState());
