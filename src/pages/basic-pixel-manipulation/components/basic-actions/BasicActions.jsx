import {useState} from "react";

function BasicActions({hasGeneratedImage, onActionSelected}) {
  const [th, setTh] = useState(0);

  return <div className="container-fluid m-4">
    <div className="row">
      <div className="col-auto">
        <button disabled={hasGeneratedImage}
                className="btn btn-primary"
                onClick={() => onActionSelected({type: 'binarization'})}>
          Binarization (th = 128)
        </button>
      </div>
      <div className="col-auto">
        <button disabled={hasGeneratedImage}
                className="btn btn-primary"
                onClick={() => onActionSelected({type: 'binarization-random'})}>
          Binarization (th = Random)
        </button>
      </div>
    </div>
    <br/>
    <div className="row">
      <div className="col">
        <div>
          <input type="range"
                 min={0}
                 max={255}
                 value={th}
                 onChange={(e) => setTh(+e.target.value)}/>
        </div>
        <button disabled={hasGeneratedImage}
                className="btn btn-primary"
                onClick={() => onActionSelected({type: 'binarization-with-value', value: th})}>
          Binarization (th = {th})
        </button>
      </div>
    </div>
  </div>
}

export default BasicActions;
