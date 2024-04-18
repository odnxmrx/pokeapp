import React from "react";
import pokeballgif from '../../assets/pokeball-d5s04qj-d26a072a-3294-4da7-8ab9-a1be78141275.gif'
import style from "./LoadingMessage.module.css";

const LoadingMessage = () => {
  return(<div className={style.loadingContent}>
    <img id={style.pokeimg} src={pokeballgif} alt="Pokeball loading gif" width="200" height="auto" />
    <p>Loading...</p>
  </div>)
}

/*
as found on DeviantArt
https://www.deviantart.com/zel-duh/art/Pokeball-349366267
*/
export default LoadingMessage;