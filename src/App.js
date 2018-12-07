import React from 'react';
import Loader from 'react-loader-spinner';
import GifPlayer from 'react-gif-player';
import './App.css';

function isItChristmasYet(){
  const now = new Date()
  return ((now.getMonth() === 11) && (now.getDate() === 25))
}

function Waiting(){
  return (
    <>
      <p style={{fontWeight: 'bold', fontSize : '32px'}}>Please wait...</p>
      <Loader type="Oval" color="#FF2400" height={100} width={100} />
      <p>The whole year is like a "please wait" loading spinner and then CHRISTMAS <span role="img" aria-label='christmastree'>🎄</span></p>
      <p> Matt Costello - 2018</p>
    </>
  )
}

function App(){

  const display = isItChristmasYet() ?  
    <GifPlayer gif='./giphy.gif' autoplay/> : <Waiting/>

  return (
    <div className='wrapper'>
        {display}
    </div>
  )
}

export default App;
