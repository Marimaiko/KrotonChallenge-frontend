import React from 'react';
import './style.css';
import imgCard from '../../assets/icons/imgClass.jpeg';

export default function ThumbnailCards(props){
    const {text, title}=props;
    return(
        <div className='main-BoxCards'>
            <div className='cards'>
                <img src={imgCard} alt='sala de aula' ></img>
                <p>{text}</p>
                <h3>{title}</h3>
                <button>Acessar</button>
            </div>
        </div>
    )
}