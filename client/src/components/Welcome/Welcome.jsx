import { useNavigate } from "react-router-dom";
import style from './Welcome.module.css';
import TvVideo from "../TvVideo/TvVideo";
import fullbackgroundimage from '../../assets/bg-image-pokemon-wallpaper-tiny.png'

const Welcome = () => {
    const navigate = useNavigate();


    function playPauseBtn() {
        if (video.paused) {
            video.play();
            // btn.innerHTML = "Pause";
        } else {
            video.pause();
            // btn.innerHTML = "Play";
        }
    }

    return (
        <main id={style.fullBgContainer}>
            <img id={style.myBgImg} src={fullbackgroundimage} />
            <div className={style.contentW}>
                <div className={style.leftContainer}>
                    <h1>PokéApp</h1>
                    <h2>Welcome to my Pokémon App.</h2>
                    <p>Here you'll find all things Pokémon. <br />Chatch 'em all! or create your own!</p>
                    <button onClick={() => navigate('/home')}>Enter →</button>
                </div>
                <div className={style.rightContainer}>
                    <TvVideo />
                </div>
            </div>
        </main>
    )
}

export default Welcome;