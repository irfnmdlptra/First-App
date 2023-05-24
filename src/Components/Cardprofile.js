import React from "react";

const Cardprofile = ()=> {
    return (
        // 1 inline css
        <div style={{
            background: 'aqua', 
            width: '100%', 
            height: '100vh',
            display : "flex",
            justifyContent : 'center',
            alignItems : 'center',
            }}>
            <div className="card">
                <img />
                <div>Frontend Developer</div>
                <h2>Irfan Syahputra</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque beatae minima veniam libero at! Fugit ipsum quos inventore excepturi aspernatur.</p>
                <button>Contact Me</button>
            </div>
        </div>
    )
}

export default Cardprofile