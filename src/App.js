import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import CardInfo from './components/CardInfo/CardInfo';
import QuestionBox from './components/QuestionBox/QuestionBox';

import lookingFor from './assets/icons/lookingFor.svg';
import ideasMeeting from './assets/icons/ideasMeeting.svg';
import ThumbnailCards from './components/ThumbnailCard/ThumbnailCard';
function App() {
  return (
    <>
        <Header/>
        <div className='cards-info'>
          <CardInfo
            image={lookingFor}
            title='Titulo 1'
            content='content....'
          />
          <CardInfo
            image={ideasMeeting}
            title='Titulo 1'
            content='content....'
          />
        </div>

        <QuestionBox/>
        <h1 style={{margin:'30px'}}>Titulo 4</h1>
        <div className='thumbnail-cards'>
          <ThumbnailCards
            text='texto a inserir...'
            title='título a inserir...'  
          />
          <ThumbnailCards
            text='texto a inserir...'
            title='título a inserir...'  
          />
          <ThumbnailCards
            text='texto a inserir...'
            title='título a inserir...'  
          />
          <ThumbnailCards
            text='texto a inserir...'
            title='título a inserir...'  
          />
        </div>
        <a href='/'>+ Carregar mais cursos</a>
    </>
  );
}

export default App;
