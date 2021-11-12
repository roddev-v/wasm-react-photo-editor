import React from 'react';
import './App.css';
import ActionBar from "./components/actions-bar/ActionBar";
import ImageViewer from "./components/image-viewer/ImageViewer";
import {useSelector} from "react-redux";
import {selectIsLoading} from "./features/core/coreSlice";
import LoadingSpinner from "./components/loading-spinner/LoadingSpinner";

function App() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      {isLoading && <LoadingSpinner/>}
      <ActionBar/>
      <ImageViewer/>
    </div>
  );
}

export default App;
