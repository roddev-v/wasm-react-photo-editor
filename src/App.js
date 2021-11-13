import React, {useEffect} from 'react';
import './App.css';
import ActionBar from "./components/actions-bar/ActionBar";
import ImageViewer from "./components/image-viewer/ImageViewer";
import {useDispatch, useSelector} from "react-redux";
import {selectIsLoading} from "./features/core/coreSlice";
import {loadWasmExample} from "./features/core/wasmSlice";
import LoadingSpinner from "./components/loading-spinner/LoadingSpinner";
import Demo from "./components/demo/Demo";

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

      <Demo/>
    </div>
  );
}

export default App;
