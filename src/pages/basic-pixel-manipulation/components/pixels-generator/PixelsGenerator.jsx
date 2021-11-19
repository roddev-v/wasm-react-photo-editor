import {useState} from "react";

function PixelsGenerator() {
  const [state, updateState] = useState({
    width: 0,
    height: 0
  });

  const {width, height} = state;
  return <div>
    <label htmlFor="widthInput">Width</label>
    <input id="widthInput" type="range" value={width}/>

    <label htmlFor="heightInput">Height</label>
    <input id="heightInput" type="range" value={height}/>
  </div>
}

export default PixelsGenerator;
