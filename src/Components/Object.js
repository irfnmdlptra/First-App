
const Object = ()=> {



const motor = {
    // 1. Property
    merek : 'Honda',//Key -- Value
    jenis : ' HDV 160',
    Warna : 'Merah',//Property
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
        <li>Merek : HONDA</li>
        <li>Jenis : ADV 160</li>
    </ul>
    </>
)
}

export default Object