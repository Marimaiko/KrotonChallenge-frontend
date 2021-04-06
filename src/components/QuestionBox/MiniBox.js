import React from 'react';

export default function MiniBox(props){
    const {title}=props;
    return(
        <form className='question-minibox'>
            <label>{title}</label>
            <input type='text' placeholder='Digite a resposta'></input>
        </form>
    )
}