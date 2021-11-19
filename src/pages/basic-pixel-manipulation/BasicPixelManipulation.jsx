import GrayImageGenerator from "./components/pixels-generator/GrayImageGenerator";
import {useState} from "react";
import NoImageSelected from "../../components/no-image/NoImageSelected";
import PixelViewer from "./components/pixel-viewer/PixelViewer";

function BasicPixelManipulation() {
  const [image, setImage] = useState(undefined);

  const getImageViewer = () => {
    return <div className="container-fluid">
      <div className="row">
        <div className="col">
          <PixelViewer image={image} title="Initial image"/>
        </div>
        <div className="col"/>
      </div>
    </div>
  }

  return <>
    <GrayImageGenerator onGrayImageCreated={(image) => setImage(image)}/>
    {
      !!image ? getImageViewer() : <NoImageSelected/>
    }
  </>
}

export default BasicPixelManipulation;
