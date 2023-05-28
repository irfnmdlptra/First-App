import React from "react";

class Event extends React.Component {
    render() {
        return(
            <>

            <button className="btn btn-outline-primary" onClick={()=> alert('gasss')}>click me</button>
            </>
        )
    }
}

export default Event