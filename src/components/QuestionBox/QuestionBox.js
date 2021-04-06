import React from 'react';
import MiniBox from './MiniBox';
import './style.css';
import btnImg from '../../assets/icons/btnSearch.svg'

export default function QuestionBox(){
    return (
        <>
            <div className='question-box'>
                <h1 style={{color:'#005EA4'}}>Titulo 3</h1>
                <div className='miniBox'>
                    <MiniBox title='Pergunta 1 ?'/>
                    <MiniBox title='Pergunta 2 ?'/>
                    <MiniBox title='Pergunta 3 ?'/>                
                    <button type='image' scr={btnImg} alt='botão pesquisa'>Buscar</button>
                </div>

            </div>
        </>
    )
}