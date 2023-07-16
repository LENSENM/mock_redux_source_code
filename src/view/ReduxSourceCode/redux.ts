// 以下 为 redux 的核心源码
export const createStore = function (reducer: any, initState: any) {
  // 原数据
  let state: any = initState;

  // 依赖 监听更改
  let listeners: (() => void)[] = [];

  function getState() {
    return state;
  }

  // 修改数据就执行依赖
  function dispatch(action: { type: string | Symbol }) {
    state = reducer(state, action);
    listeners.forEach((fn) => fn());
  }

  dispatch({ type: Symbol() });

  function subscribe(cb: () => void): void {
    listeners.push(cb);
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
};


// 合并 reducer
export const combineReducers = function (reducers: any) {
  const keys = Object.keys(reducers); // [counter,info]

  return function (state: any, action: any) {
    const nextState: any = {};

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]; // counter info
      const reducer = reducers[key]; // countReducer infoeducer
      const prev = state[key]; // { count: 0 }  { age: 10 }
      const next = reducer(prev, action);
      nextState[key] = next;
    }
    return nextState;
  };
};
