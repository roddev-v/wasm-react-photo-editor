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
      const imageEl = document.getElementById('imageHolder');
      dispatch(showLoadingSpinner());
      imageEl.onload = () => {
        const {width, height} = imageEl.getBoundingClientRect();
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        context.drawImage(imageEl, 0, 0, width, height);
        const imageData = context.getImageData(0, 0, width, height);
        const data = Array.from(imageData.data);
        dispatch(storeImageBytes(data));
        dispatch(hideLoadingSpinner());
      }
    }
  }, [imageSrc]);

  return (
    <div>
      <img id="imageHolder" alt="" className="image-viewer-container" src={imageSrc}/>
    </div>
  );
}

export default ImageViewer;
