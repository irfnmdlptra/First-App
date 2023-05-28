import React from "react";
class Event extends React.Component {
    kirimPesan(nama) {
        alert('hallo nama aku ' + nama)
    }
    render() {
        return(
            <>

            <button className="btn btn-outline-primary" onClick={()=> alert('gasss')}>click me</button>
            <button className="btn btn-btn-outline-secondary" onClick={()=> this.kirimPesan.bind('agus')}>click me</button>
            </>
        )
    }
}

export default Event