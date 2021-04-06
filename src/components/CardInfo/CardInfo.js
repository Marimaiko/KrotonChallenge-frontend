import React from 'react';
import './style.css'

export default function CardInfo(props) {
    const {title, content, image} = props;
    return(
        <div className='card-info'>
            <img 
            src={image} 
            alt='imagem card'
            />
            <div className='content-card'>
                <h1 style={{color:'#005EA4'}}>{title}</h1>
                <p>{content}</p>
            </div>
            <div className='botao-info'>
                <button>Clique para detalhes...</button>
            </div>
        </div>
    )
}