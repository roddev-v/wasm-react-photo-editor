import {useState} from "react";
import {ExampleWrapper} from "../../wasm-wrappers/example-wrapper";
import PixelView from "../pixels/pixel-view/PixelView";

function DemoPixels() {
  const defaultPixels = [
    100, 100, 100,
    99, 99, 99,
    87, 87, 87,
    90, 90, 90,
    101, 101, 101,
    40, 40, 40,
    200, 200, 200,
    32, 32, 32,
    19, 19, 19
  ];
  const [pixels, updatePixels] = useState(defaultPixels);

  const applyTh = (e) => {
    const value = +e.target.value;
    const newPixelSet = ExampleWrapper.applyTh(defaultPixels, value);
    updatePixels(newPixelSet);
  }

  return (
    <div>
      <input type="range" id="volume" name="volume"
             min="0" max="255" onChange={(e) => applyTh(e)}/>
      <PixelView pixels={defaultPixels}/>
      <br/>
      <PixelView pixels={pixels}/>
    </div>
  )
}

export default DemoPixels;
