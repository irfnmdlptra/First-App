import { useState } from "react";

const Object = () => {
  let [mtr, setMtr] = useState({
    merek: "YAMAHA", //Key -- Value
    jenis: " JUPITER MX 135",
    warna: "Merah", //Property
    bensin: 10,
    harga: 25000000,
    plat: "DD 1945 UD",
    status: "OFF",

    // 2. Metod
    nyalakan: () => {
      console.log("nyalakan mesin");
      setMtr((data) => {
        return {
          ...data,
          status: "ON",
          bensin: data.bensin - 5,
        };
      });
    },
    matikan: () => {
      setMtr((data) => {
        return {
          ...data,
          status: "OFF",
        };
      });
    },
    isibensin: () => {
      setMtr((data) => {
        return {
          ...data,
          bensin: data.bensin + 5,
        };
      });
    },
  });

//   const motor = {
//     // 1. Property
//     merek: "YAMAH", //Key -- Value
//     jenis: " JUPITER MX 135",
//     warna: "Merah", //Property
//     bensin: 10,
//     harga: 25000000,
//     plat: "DD 1945 UD",
//     status: "OFF",

//     // 2. Metod
//     nyalakan: () => {
//       console.log("nyalakan mesin");

//       motor.status = "ON";
//       console.log(mtr);
//     },
//     matikan: () => {
//       console.log("matikan mesin");
//       setMtr;
//     },
//   }
  return (
    <>
      <h1>Motor</h1>
      <ul>
        <li>Merek : {mtr.merek}</li>
        <li>Jenis : {mtr.jenis} </li>
        <li>warna : {mtr.warna} </li>
        <li>bensin : {mtr.bensin} L </li>
        <li>harga : {mtr.harga} </li>
        <li>plat : {mtr.plat} </li>
        <li>status : {mtr.status} </li>
      </ul>
      <button style={{ padding: "10px 20px", background: "red", color: "white", borderRadius: "10px", fontFamily: "arial" }} onClick={() => mtr.nyalakan()}>
        Nyalakan
      </button>
      <button style={{ padding: "10px 20px", background: "yellow", color: "white", borderRadius: "10px", fontFamily: "arial" }} onClick={() => mtr.matikan()}>
        Matikan
      </button>
      <button style={{ padding: "10px 20px", background: "green", color: "white", borderRadius: "10px", fontFamily: "arial" }} onClick={() => mtr.isibensin()}>
        Isi Bensin
      </button>
    </>
  );
};

export default Object;
