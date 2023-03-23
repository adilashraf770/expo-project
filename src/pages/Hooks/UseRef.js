import React, { useRef } from "react";
import flute from "../../assets/audio/flute.mp3";
// import { useRef} from "react";
export default function UseRef() {
  const audioplay = useRef(null);

  const Ring = () => {
    console.log(audioplay.current.play());
  };
  return (
    <div className="py-5">
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <h1 className="text-center">UseRef Hook</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="button text-center">
              <audio src={flute} ref={audioplay}></audio>
              <button className="btn btn-danger" onClick={Ring}>
                Ringtune
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
