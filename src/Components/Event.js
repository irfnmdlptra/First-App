import React from "react";
class Event extends React.Component {
    kirimPesan(nama) {
        alert('hallo nama aku ' + nama)
    }

    ubahTulisan(e) {
        e.target.innerHTML= 'Kirim Pesan'
    }
    ubahLagi(e) {
        e.target.innerHTML = 'click me'
    }
    render() {
        return(
            <>

            <button className="btn btn-outline-primary" onClick={(e)=> this.kirimPesan('gasss', e)}>click me</button>
            <button className="btn -btn-outline-secondary" onClick={ this.kirimPesan.bind(this, 'agus')}>click me</button>
            <button className="btn btn-outline-primary" onMouseEnter={(e)=> this.ubahTulisan(e)}>click me</button>
            <button className="btn btn-outline-primary" onMouseOut={(e)=> this.ubahLagi(e)}>click me</button>
            </>
        )
    }
}

export default Event