import React from 'react'

// Props Adalah Singkatan Dari Singkatan Dari Properti Seperti halnya dengan function di dalam javascript yang menerima improf

// 1. Class Component
class ButtonJsx extends React.Component {
    render() {
        return <button className='btn btn-warning'>{this.props.text}</button>
    }
}
const Button2 = () => {
    return <button  className='btn btn-danger m-5'>Btn Danger</button>
}

// Bagian Card 
class CardJsx extends React.Component {

    constructor() {
        super();
        this.state = {
            Judul : "Aku ADALAH STATE",
            Title : "Aku ADALAH SUB TITLE CARD"
        }
    }

    UbahJudul = () => {
        this.setState({
            Judul : " Aku sudah berubah jadi setState"
            
        })
    }
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.state.Judul}</h5>
                    <p className="card-text">{this.state.Title} </p>
                    <ButtonJsx text="Ini Adalah Tombol"/>
                    <button onClick={this.UbahJudul} className='btn btn-danger m-5'>Btn Danger</button>
                </div>
            </div>
        )
    }
}

const CardFunction = () => {
    const [state, setState] = React.useState('Judul Card Menggunakan React HOOKS');
    return (
        <>
        <h1>{state}</h1>

        <CardJsx/>
        <Button2/>
        </>

    )
}


export default CardFunction