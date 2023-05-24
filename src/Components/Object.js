


const Motor = {
    merek : 'Honda HDV 160',//Key -- Value
    jenis : 'Matic',
    Warna : 'Merah',//Property
    bensin : 10,
    harga : 30000000,
    plat : "DD 1945 UD",
    status : 'OFF',

    nyalakan : ()=> {
        setMotor( data => {
            return {
                ...data,
                status : 'ON',
                bensin : data.bensin - 5
            }
        })
    }
}