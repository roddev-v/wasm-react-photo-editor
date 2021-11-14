import {useState} from "react";
import {ExampleWrapper} from "../../wasm-wrappers/example-wrapper";

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

  const getPixel = (color, index) => {
    return <div key={index} style={{backgroundColor: color, height: '30px', width: '30px'}}/>
  };

  const generatePixels = (pixelsInput) => {
    const pixels = [];
    for (let i = 0; i <= pixelsInput.length - 3; i += 3) {
      const r = pixelsInput[i];
      const g = pixelsInput[i + 1];
      const b = pixelsInput[i + 2];
      const color = `rgb(${r}, ${g}, ${b})`;
      pixels.push(color);
    }
    return pixels;
  }

  const applyTh = (e) => {
    const value = +e.target.value;
    const newPixelSet = ExampleWrapper.applyTh(defaultPixels, value);
    updatePixels(newPixelSet);
  }

  return (
    <div>
      <input type="range" id="volume" name="volume"
             min="0" max="255" onChange={(e) => applyTh(e)}/>
      <div style={{display: 'flex'}}>
        {generatePixels(defaultPixels).map((color, index) => getPixel(color, index))}
      </div>
      <br/>
      <div style={{display: 'flex'}}>
        {generatePixels(pixels).map((color, index) => getPixel(color, index))}
      </div>
    </div>
  )
}

export default DemoPixels;
