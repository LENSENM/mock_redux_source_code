import { useContext, useEffect, useState } from "react";
import ReduxContext from "./ReduxContext";

interface storeType {
  getState: () => any;
  dispatch: (action: { type: string | Symbol }) => void;
  subscribe: (cb: () => void) => void;
}

export const connect =
  (
    mapStateToProps: (state: any) => any,
    mapDispatchToProps: (dispatch: any) => any
  ) =>
  (Component: React.ComponentType<any>) => {

    // Component  就是 ConnectPage组件 或者 connect 的第二个参数
  
    function Connect(props: any) {
      
      const store = useContext(ReduxContext) as storeType;

      const [, setBool] = useState(true);
      const forceUpdate = () => setBool((val) => !val);

      useEffect(() => {
        store.subscribe(forceUpdate);
      }, []);

      // 注入到props
      return (
        <ReduxContext.Consumer>
          {(store) => (
            <>
              <Component
                {...props}
                {...mapStateToProps((store as storeType).getState())}
                {...mapDispatchToProps((store as storeType).dispatch)}
              />
            </>
          )}
        </ReduxContext.Consumer>
      );
    }

    return Connect;
  };
