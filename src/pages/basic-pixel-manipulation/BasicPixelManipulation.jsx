import {useState} from "react";
import NoImageSelected from "../../components/no-image/NoImageSelected";
import PixelViewer from "./components/pixel-viewer/PixelViewer";
import BasicActions from "./components/basic-actions/BasicActions";
import GrayImageGenerator from "./components/pixels-generator/GrayImageGenerator";

function BasicPixelManipulation() {
  const [image, setImage] = useState(undefined);
  const [modifiedImage, setModifiedImage] = useState(undefined);

  const applyChanges = (a) => {
    console.log(a);
  }

  const getImageViewer = () => {
    return <div className="container-fluid">
      <div className="row">
        <div className="col">
          <PixelViewer image={image} title="Initial image"/>
        </div>
        <div className="col-6">
          {modifiedImage && <PixelViewer image={modifiedImage} title="Modified image"/>}
        </div>
      </div>
    </div>
  }

  return <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <GrayImageGenerator onGrayImageCreated={(image) => setImage(image)}/>
        </div>
      </div>
    </div>
    <BasicActions hasGeneratedImage={!image} onActionSelected={(a) => applyChanges(a)}/>
    {
      !!image ? getImageViewer() : <NoImageSelected/>
    }
  </>
}

export default BasicPixelManipulation;
