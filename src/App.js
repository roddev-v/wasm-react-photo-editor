import React from 'react';
import './App.css';
import ActionBar from "./components/actions-bar/ActionBar";
import ImageViewer from "./components/image-viewer/ImageViewer";

import {useSelector} from "react-redux";
import {selectIsLoading} from "./features/core/coreSlice";

function App() {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div>
      {isLoading ? <p>Loading...</p> : null}
      <ActionBar/>
      <ImageViewer/>
    </div>
  );
}

export default App;
