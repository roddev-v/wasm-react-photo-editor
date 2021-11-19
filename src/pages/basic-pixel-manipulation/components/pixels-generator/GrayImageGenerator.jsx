import {useState} from "react";

function GrayImageGenerator(props) {
  const {onGrayImageCreated} = props;

  const [width, updateWidth] = useState(0);
  const [height, updateHeight] = useState(0);

  const setWidth = (e) => {
    const value = +e.target.value;
    updateWidth(value);
  }

  const setHeight = (e) => {
    const value = +e.target.value;
    updateHeight(value);
  }

  const generateGrayImage = () => {
    const image = {
      width,
      height,
      pixels: []
    }
    const size = width * height;
    for (let i = 0; i < size; i++) {
      const value = Math.floor(Math.random() * 255);
      const pixel = {r: value, g: value, b: value};
      image.pixels.push(pixel);
    }
    onGrayImageCreated(image);
  }

  const clearImage = () => {
    updateHeight(0);
    updateWidth(0);
    onGrayImageCreated(undefined);
  }

  return <div className="container">
    <div className="form-group">
      <label htmlFor="widthInput">Width - {width}px</label>
      <input id="widthInput"
             className="form-control"
             type="range"
             value={width}
             max={10}
             onChange={(e) => setWidth(e)}/>
    </div>

    <label htmlFor="heightInput">Height - {height}px</label>
    <input id="heightInput"
           className="form-control"
           type="range"
           value={height}
           max={10}
           onChange={(e) => setHeight(e)}/>
    <button className="btn btn-primary mt-1 mr-2 mx-1"
            disabled={width === 0 || height === 0}
            onClick={() => generateGrayImage()}>
      Draw
    </button>
    <button className="btn btn-danger mt-1"
            disabled={width === 0 || height === 0}
            onClick={() => clearImage()}>
      Clear image
    </button>
  </div>
}

export default GrayImageGenerator;
