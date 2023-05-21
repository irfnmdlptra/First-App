import React from 'react'


// 1. Class Component
class ButtonJsx extends React.Component {
    render() {
        return <button className='btn btn-primary'>Tombol</button>
    }
}
// 2. Function Component 
function Card() {
    const Btn = () => {
        return ButtonJsx
    }
    return (
        Btn,
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Saya Card</h2>
                <h5 className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, maxime!</h5>
                <a href="#" className="btn btn-danger">Click</a>
            </div>
        </div>

    )
    }

export default Card