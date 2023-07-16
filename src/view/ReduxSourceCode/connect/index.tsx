
// 使用页面
import React from "react";
import {connect} from "./connect"

type CounterType = {
  counter:any
  hanlerChange: () => void;
};

function ConnectPage({counter,hanlerChange}:CounterType) {

  return (
    <>
      <div>val {counter.count} </div>
      <button onClick={()=>hanlerChange()}>handleClick2</button>
    </>
  );
}

const mapStateToProps=(state:any)=>{
    return{
        counter:state.counter
    }
}

const mapDispatchToProps=(dispatch:any)=>({
    hanlerChange(){
        dispatch({type:"addCount"})
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(ConnectPage)
