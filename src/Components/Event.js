import React from "react";


class Event extends React.Component {
    constructor() {
        super();
        this.state =  {
            nama : 'ippamz'
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

    sapa(e) {
        this.setState({nama : e.target.value})
    }
    render() {
        return(
            <>

            <button className="btn btn-outline-primary" onClick={(e)=> this.kirimPesan('gasss', e)}>click me</button>
            <button className="btn btn-outline-primary"  onClick={ this.sapa.bind(this)}  onMouseOut={(e)=> this.ubahLagi(e)} onMouseEnter={(e)=> this.ubahTulisan(e)}>click me</button>


            <h1>halo : {this.state.nama}</h1>
            <input onChange={(e)=> this.sapa(e)} className="form-control-lg bg-body-tertiary" type="text" />
            </>

        )
    }
}

export default Event