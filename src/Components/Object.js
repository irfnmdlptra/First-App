import { useState } from "react";

const Object = ()=> {

    let [mtr, setMtr] = useState(
        {
            merek : 'YAMAH',//Key -- Value
            jenis : ' JUPITER MX 135',
            warna : 'Merah',//Property
            bensin : 10,
            harga : 25000000,
            plat : "DD 1945 UD",
            status : 'OFF',
        
            // 2. Metod 
            nyalakan : ()=> {
                console.log('nyalakan mesin');
                setMtr( {status : 'ON'} )
                console.log(motor.status)
            }
        }
    )


const motor = {
    // 1. Property
    merek : 'YAMAH',//Key -- Value
    jenis : ' JUPITER MX 135',
    warna : 'Merah',//Property
    bensin : 10,
    harga : 25000000,
    plat : "DD 1945 UD",
    status : 'OFF',

    // 2. Metod 
    nyalakan : ()=> {
        console.log('nyalakan mesin');
        
        motor.status = 'ON';
        console.log(mtr)
    }
}
return (
    <>
    <h1>Motor</h1>
    <ul>
        <li>Merek : {mtr.merek}</li>
        <li>Jenis : {mtr.jenis} </li>
        <li>warna : {mtr.warna} </li>
        <li>bensin : {mtr.bensin} </li>
        <li>harga : {mtr.harga} </li>
        <li>plat : {mtr.plat} </li>
        <li>status : {mtr.status} </li>
    </ul>
    <button style={{padding:'10px 20px', background:'aqua',color:'blue',borderRadius:'10px',fontFamily:'arial'}} onClick={()=> mtr.nyalakan()}>Nyalakan</button>
    </>
)
}

export default Object