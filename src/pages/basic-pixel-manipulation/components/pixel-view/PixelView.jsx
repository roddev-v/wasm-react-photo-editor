function PixelView({pixels}) {

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

  return (
    <div style={{display: 'flex'}}>
      {generatePixels(pixels).map((color, index) => getPixel(color, index))}
    </div>
  )
}

export default PixelView;
