
const Object = ()=> {



const motor = {
    // 1. Property
    merek : 'yamaha',//Key -- Value
    jenis : ' HDV 160',
    warna : 'Merah',//Property
    bensin : 10,
    harga : 30000000,
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
        <li>Jenis : {motor.plat} </li>
        <li>Jenis : {motor.status} </li>
    </ul>
    </>
)
}

export default Object