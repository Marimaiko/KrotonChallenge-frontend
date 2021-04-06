import React from 'react';
import './style.css';
import wppLogo from '../../assets/icons/wppLogo.svg'

export default function Header() {
    return(
        <div className='contactsHeader'>
            <div className='whatsapp'>
                <img src={wppLogo} alt='whatsapp logo'/>
                <a href='/' style={{color:'#219653'}}>Fale conosco</a>
             </div>
        </div>
    )
}