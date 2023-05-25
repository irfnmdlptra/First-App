
const Object = ()=> {



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
        console.log('nyalakan mesin')
    }
}
return (
    <>
    <h1>Motor</h1>
    <ul>
        <li>Merek : {motor.merek}</li>
        <li>Jenis : {motor.jenis} </li>
        <li>warna : {motor.warna} </li>
        <li>bensin : {motor.bensin} </li>
        <li>harga : {motor.harga} </li>
        <li>plat : {motor.plat} </li>
        <li>status : {motor.status} </li>
    </ul>
    <button style={{padding:'10px 20px', background:'aqua',color:'blue',borderRadius:'10px',fontFamily:'arial'}} onClick={()=> motor.nyalakan()}>Nyalakan</button>
    </>
)
}

export default Object