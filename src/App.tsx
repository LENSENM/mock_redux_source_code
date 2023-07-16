import React from 'react';

import { BrowserRouter,Route,Routes } from "react-router-dom";


// redux 源码
import ReduxSourceCode from "./view/ReduxSourceCode/connect"  


function App() {
  return (
      <BrowserRouter>
        <Routes> 
             <Route path='/reduxSourceCode' element={<ReduxSourceCode/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
