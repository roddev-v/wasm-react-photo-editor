import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {loadWasmExample} from "./features/core/wasmSlice";
import {Route, Switch} from "react-router-dom";
import './App.css';

import BasicPixelManipulation from "./pages/basic-pixel-manipulation/BasicPixelManipulation";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadWasmExample());
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route path="/" exact component={BasicPixelManipulation}/>
      </Switch>
    </div>
  );
}

export default App;
