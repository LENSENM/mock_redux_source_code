import { createStore, combineReducers } from "./redux";

let initState = {
  counter: { count: 0 },
  info: { age: 10 },
};

interface Ac {
  type: string | Symbol;
  [prop: string]: any;
}

function countReducer(state: any, action: Ac) {
  switch (action.type) {
    case "addCount":
      return { count: state.count + 1 };

    case "decreaseCount":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

function infoeducer(state: any, action: Ac) {
  switch (action.type) {
    case "addAge":
      return { age: state.age + 1 };

    case "decreaseAge":
      return { age: state.age - 1 };

    default:
      return state;
  }
}

const reducers = combineReducers({
  counter: countReducer,
  info: infoeducer,
});

 const store = createStore(reducers, initState);

 export default store


