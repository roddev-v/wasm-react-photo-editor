import {useDispatch, useSelector} from "react-redux";
import {
  hideLoadingSpinner,
  selectStoredImage,
  showLoadingSpinner,
  storeImageBytes
} from "../../features/core/coreSlice";
import './ImageViewer.css';
import {useEffect} from "react";

function ImageViewer() {
  const imageSrc = useSelector(selectStoredImage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (imageSrc) {
      const img = new Image();
      img.src = imageSrc;
      dispatch(showLoadingSpinner());
      img.onload = () => {
        const data = getImageData(img);
        dispatch(storeImageBytes(data));
        dispatch(hideLoadingSpinner());
      }
    }
  }, [imageSrc, dispatch]);

  const getImageData = (image) => {
    const canvas = document.getElementById('canvasHolder');
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    context.drawImage(image, 0, 0, width, height);
    const imageData = context.getImageData(0, 0, width, height);
    return Array.from(imageData.data);
  }

  const getImageView = () => {
    if (imageSrc) {
      return <canvas id="canvasHolder"/>;
    }
    return <p>No Image available</p>
  }

  return (
    <div className="image-viewer-container">
      {getImageView()}
    </div>
  );
}

export default ImageViewer;
