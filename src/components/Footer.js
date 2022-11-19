import React from "react";
import im from '../assets/Otr/6.png'
import color from '../assets/Foo.css'


const Footer = () => {
    return(
        <div className="main-footer">
           <div className="container">
            <div className="row">
                {/* columna 1 */}

                <div className="col">
                    <h4>CONTACTOS</h4>
                    <ul className="list-unstyled">
                        <li>Numero</li>
                        <li>Email</li>
                        <li>whatsapp</li>
                    </ul>
                </div>

        <div className="col" style={{listStyleType:'none'}}>
            <h4>REDES SOCIALES</h4>
            <ul className="list-unstuled" style={{listStyleType:'none'}}>
                <li>facebook</li>
                <li>instagram</li>
                <li>Tiktok</li>
            </ul>
        </div>

        <div className="col">
            <h4>DIRECCION</h4>

            <ul className="list-unstuled" style={{listStyleType:'none'}}>
                <li>LOCAL 1</li>
                <li>LOCAL 2</li>
                <li>LOCAL 3</li>
            </ul>
        </div>

            </div>
           </div>
        </div>
    )
}
export default Footer;
