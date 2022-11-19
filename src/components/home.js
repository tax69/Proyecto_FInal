import estilo from '../assets/Estilo.css'
import  React from "react"
import imagen1 from '../assets/uno.jpg';
import imagen2 from '../assets/dos.jpg';
import imagen3 from '../assets/tres.jpg';
import imagen5 from '../assets/cinco.jpg';
import imagen6 from '../assets/seis.jpg';
import imagen7 from '../assets/ocho.jpg'



const Home = () => {
    return(
    
        <div className=''>
            <h1>GAMER</h1>
            <h1>PERIFÉRICOS Y ACCESORIOS</h1>
            <h1>OTRA EXPERIENCIA DE JUEGO </h1>
<div className='estilo'>
            <nav className="imagenes animate__animated animate__bounce">
            <h1>opcion 1</h1>
            <h5>internet pc gamer </h5>
            <img src={imagen1} alt={"img_"} key={"img_"} width="230" />
            </nav>

            <nav className="ima1 animate__animated animate__bounce">
            <h1>opcion 2</h1>
            <h5>Pc gamer en casa </h5>
            <img src={imagen2} alt={"img_"} key={"img_"} width="210"/>
            </nav>



            </div>


        </div>

        
    )

}
export default Home;