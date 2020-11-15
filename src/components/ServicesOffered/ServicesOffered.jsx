import React, { Fragment } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faNotesMedical,faHospital,faStethoscope} from '@fortawesome/free-solid-svg-icons'

import './ServicesOffered.scss'

const ServicesOffered = () => {
    return ( 
        <Fragment>
    <div id="start" class="hero animate__animated animate__bounce animate__fadeIn">
        <div class="contenedor">
            <div class="contenido">
                <h1 class="titulo" style={{color:'#FCE9E9'}}>Safe Delivery</h1>
                {/* <p class="subtitulo" style={{color:'#8BC9DC'}}>Your favourites products ready 4 you</p> */}
                <p class="subtitulo" style={{color:'#8BC9DC'}}>Your favourites products ready 4 you</p>

            </div>
        </div>
    </div>

    <div class="servicios contenedor">
    <div class="servicio">
        <h2>Pediatría</h2>
        {/* <FontAwesomeIcon icon={faMedkit} color="#8BC9DC" style={{fontSize:"32px"}} size="lg"/> */}
        <FontAwesomeIcon icon={faNotesMedical} color="#8BC9DC" style={{fontSize:"32px"}} size="lg"/>

        <p className="mt-3">Atención para diversas obras sociales medicas</p>
    </div>

    <div class="servicio">
        <h2>Centros de salud</h2>
        <FontAwesomeIcon icon={faHospital} color="#8BC9DC" style={{fontSize:"32px"}} size="lg"/>
        <p className="mt-3">Atención medica en CEOM <br/>Consultorios de la Recta<br/>Consultorio privado Sucre 5 </p>
    </div>

    <div class="servicio">
        <h2>Consulta medica</h2>
        <FontAwesomeIcon icon={faStethoscope} color="#8BC9DC" style={{fontSize:"32px"}} size="lg"/>
        <p className="mt-3">Consultas, diagnosticos, tratamientos, fichas medicas</p>
    </div>
    </div>
    </Fragment>
     );
}
 
export default ServicesOffered;