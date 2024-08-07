import BackButton from '../BackButton/BackButton';
import style from './About.module.css';
import TvVideo from '../TvVideo/TvVideo';

const About = () => {

    return (
        <div>
            <BackButton />
            <div className={style.aboutContainer}>
                <div className={style.leftContainer}>
                    <h2>About</h2>
                    <p>Pokémon is an animated series that tells the story of <em>Ash Ketchum</em>,<br />a young Pokémon trainer from <em>Pallet Town</em> who begins a journey<br />to achieve his dream, to be a Pokémon Master.</p>
                    <p>This SPA (<em>Single Page Application</em>) gathers all things Pokémon <br />for you to explore, or let your imagination fly and create your own!</p>
                    <br />
                    <h3>
                        Implementations:
                    </h3>
                    <p>Front-End: <br />
                        React - Vite | Redux | Router DOM | Axios
                    </p>
                    <p>Back-End: <br />
                        Express | Morgan | Pg | Sequelize | Cors
                    </p>
                    <br />
                    <small>Developed by</small>
                    <h3>Armando Pineda Gama</h3>
                    <p><em>Full-Stack Developer</em></p>
                </div>
                <div className={style.rightContainer}>
                    <TvVideo />
                </div>
            </div>
        </div>
    )
}

export default About;