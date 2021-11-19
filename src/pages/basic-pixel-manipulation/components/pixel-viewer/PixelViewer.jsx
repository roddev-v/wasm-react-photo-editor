function PixelViewer({image, title}) {

  const {width, height, pixels} = image;

  const getPixel = (pixel, index) => {
    const {r, g, b} = pixel;
    const color = `rgb(${r}, ${g}, ${b})`;
    const pixelStyle = {
      padding: '20px 10px',
      backgroundColor: color,
      aspectRatio: 1
    }
    return <div key={index} style={pixelStyle}>
    </div>
  };

  const gridStyle = {
    gridTemplateColumns: `repeat(${width}, 1fr)`,
    gridTemplateRows: `repeat(${height}, 1fr)`
  }

  return (
    <div className="container">
      {title && <h1>{title}</h1>}
      <div className="d-grid" style={gridStyle}>
        {pixels.map((pixel, index) => getPixel(pixel, index))}
      </div>
    </div>
  )
}

export default PixelViewer;
