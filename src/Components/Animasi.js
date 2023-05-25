import React from "react";
import "../css/Animasi.css";
// import MotorRX from "../assets/rxbg.png";
import MotorScp from "../assets/scp.png";
class Animasi extends React.Component {
  render() {
    return (
      <>
        <div className="w-100 h-100 bg-black d-flex">
          {/* <img src={MotorRX} /> */}
          <img src={MotorScp} />
        </div>
        <div className="d-flex justify-content-center gap-3 jalan">
            <button className="btn btn-danger">Nyalakan</button>
            <button className="btn btn-danger">Gass</button>
            <button className="btn btn-danger">Matikan</button>
        </div>
      </>
    );
  }
}

export default Animasi;
