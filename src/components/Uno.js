import React from 'react'
import fon from '../assets/fon.jpg'


const Uno = () => {
    return(
        <div className='todo'>
        <div className="card text-center bg-dark animate__animated animate__bounce">
            <div className='overflow'>
    <img src={fon} alt ="" className='card-img-top'/>
    </div>
    <div className='card-body text-light'>
        <h4 className='card-title'> GAMER</h4>
        <p className='card-text text-secondary'>       
        LOL  ríendome a carcajadas.
        AFK  lejos del teclado.
        BRB  ya regreso.
        FYI  para tu información.</p>

        <a href='#!' className='btn btn-outline-secondary rounded-0'>
            Go to this website
        </a>
    </div>
    
</div> 
</div>
    )
}
export default Uno