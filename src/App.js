import React, {useEffect} from 'react';
import './App.css';
import ActionBar from "./components/actions-bar/ActionBar";
import ImageViewer from "./components/image-viewer/ImageViewer";
import {useDispatch, useSelector} from "react-redux";
import {selectIsLoading} from "./features/core/coreSlice";
import LoadingSpinner from "./components/loading-spinner/LoadingSpinner";
import {loadWasmExample} from "./features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(loadWasmExample());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <LoadingSpinner/>}
      <ActionBar/>
      <ImageViewer/>
    </div>
  );
}

export default App;
