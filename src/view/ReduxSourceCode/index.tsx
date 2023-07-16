

import React, { useEffect } from "react";
import store from "./redux_store";

export default function ReduxSourceCode() {


  // 注入依赖  修改就可以订阅到
  useEffect(() => {
    store.subscribe(() => {
      let currentData = store.getState();
      console.log("currentData", currentData);
    });
  }, []);


  function handleClick1() {
    store.dispatch({type:'addCount'});
  }

  function handleClick2() {
    store.dispatch({ type:"decreaseAge"});
  }

  return (
    <>
      <div>val  </div>
      <button onClick={handleClick1}>handleClick1</button>
      <button onClick={handleClick2}>handleClick2</button>
    </>
  );
}
