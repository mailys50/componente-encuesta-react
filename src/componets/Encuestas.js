import React from 'react';
import '../stylesheets/StylesEncuestas.css'


function Encuestas(props) {
  return (
    <div className='contenedorEnduestas'>
      <img
        className='imagen-encuestado'
        src={require(`../img/testimonio-${props.imagen}.png`)}
        alt="imagen de {props.nombre}" />
      <div className='texto'>
        <p className='nombreUbicación'>
          <strong>{props.nombre}</strong>  en {props.pais}</p>
        <p className='profesión'>
          {props.cargo} en <strong>{props.empresa}</strong> </p>
        <p className='comentaraio'>
          {props.comentario}</p>
      </div>
    </div>
  )
}

export default Encuestas;



