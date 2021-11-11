import './ActionBar.css';
import {useDispatch, useSelector} from "react-redux";
import {removeStoredImage, selectStoredImage, storeImageURL} from "../../features/core/coreSlice";
import {useRef} from "react";

function ActionBar() {
  const imageSrc = useSelector(selectStoredImage);
  const imageInput = useRef();
  const dispatch = useDispatch();

  const onImageSelected = (event) => {
    const [file] = event.target.files;
    const blobURL = URL.createObjectURL(file);
    dispatch(storeImageURL(blobURL));
  };

  const removedSelectedImage = () => {
    dispatch(removeStoredImage());
    imageInput.current.value = '';
  }

  return <nav className="action-bar-container">
    <ul className="action-bar-list">
      <li className="action-bar-item">
        <input ref={imageInput} type="file" accept="image/*" onChange={(e) => onImageSelected(e)}/>
        {imageSrc && <button onClick={() => removedSelectedImage()}>Clear</button>}
      </li>
    </ul>
  </nav>
}

export default ActionBar;
