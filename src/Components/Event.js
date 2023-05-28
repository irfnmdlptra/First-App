import React from "react";


class Event extends React.Component {
    constructor() {
        super();
        this.state =  {
            nama 
        }
    }
    kirimPesan(nama) {
        alert('hallo nama aku ' + nama)
    }

    ubahTulisan(e) {
        e.target.innerHTML= 'Kirim Pesan'
    }
    ubahLagi(e) {
        e.target.innerHTML = 'click me'
    }

    sapa() {

    }
    render() {
        return(
            <>

            <button className="btn btn-outline-primary" onClick={(e)=> this.kirimPesan('gasss', e)}>click me</button>
            <button className="btn btn-outline-primary"  onClick={ this.kirimPesan.bind(this, 'agus')}  onMouseOut={(e)=> this.ubahLagi(e)} onMouseEnter={(e)=> this.ubahTulisan(e)}>click me</button>


            <h1>hello : </h1>
            <input type="text" onChange={}/>
            </>

        )
    }
}

export default Event