import React from "react";
import style from './TvVideo.module.css';
import pokemonintrovideo from '../../assets/opening-pokemon-t1-latino.mp4'
import oldtvfram from '../../assets/old-tv-png-photo.png';

const TvVideo = () => {

  return (
    <div className={style.videoFrame}>
      <video autoPlay muted loop id={style.myVideo}>
        <source src={pokemonintrovideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <img className={style.pokemonLogo} src={oldtvfram} alt="Pokémon logo" />
    </div>
  )
}

export default TvVideo;