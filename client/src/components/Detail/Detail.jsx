import React, { useEffect } from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail, cleanDetail } from "../../redux/actions/actions";
import BackButton from "../BackButton/BackButton";
import style from './Detail.module.css';

const Detail = () => {
  const { id } = useParams(); // params, { id: # }
  const dispatch = useDispatch();
  const { pokemonDetail } = useSelector((state) => state);

  console.log(pokemonDetail); // obj {}

  useEffect(() => {
    dispatch(getPokemonDetail(id))
    return () => dispatch(cleanDetail()) //al desmontaje, limpiar el estado
  }, [id])

  const pokemonTypes = pokemonDetail?.types?.map((type, i) => {
    return (<span className={style.roundCircle} key={i}>{type?.name} </span>)
  })

  const handleDelete = async () => {
    try { //DELETE
        const response = await axios.delete(`${API_URL}/${id}`);
        alert(response.data);
        navigate('/home');
        setPage(0); //reset de page view (will dispatch getAllPokemon)
    } catch (error) {
        alert(error);
    }
}

return (
    <div className={style.mainContainer}>
        <BackButton />
        <article className={style.detailContainer}>
            <div className={style.leftContainer}>
                <h2>{pokemonDetail?.name}</h2>
                <small>ID: {pokemonDetail?.id}</small>


                <ul>
                    <li>
                        <label for="hp">
                            <span>HP</span><span>{pokemonDetail?.hp}</span>
                        </label>
                        <meter
                            id="hp"
                            min="0"
                            max="255"
                            low="63"
                            high="191"
                            optimum="127"
                            value={pokemonDetail?.hp}
                        >
                            {pokemonDetail?.hp}
                        </meter>
                    </li>

                    <li>
                        <label for="attack">
                            <span>Attack</span> <span>{pokemonDetail?.attack}</span>
                        </label>
                        <meter
                            id="attack"
                            min="0"
                            max="180"
                            low="45"
                            high="135"
                            optimum="90"
                            value={pokemonDetail?.attack}
                        >
                            {pokemonDetail?.attack}
                        </meter>
                    </li>

                    <li>
                        <label for="defense">
                            <span>Defense</span> <span>{pokemonDetail?.defense}</span>
                        </label>
                        <meter
                            id="defense"
                            min="0"
                            max="230"
                            low="57"
                            high="172"
                            optimum="115"
                            value={pokemonDetail?.defense}
                        >
                            {pokemonDetail?.defense}
                        </meter>
                    </li>

                    <li>
                        <label for="speed">
                            <span>Speed:</span> <span>{pokemonDetail?.speed}</span>
                        </label>
                        <meter
                            id="speed"
                            min="0"
                            max="180"
                            low="45"
                            high="135"
                            optimum="90"
                            value={pokemonDetail?.speed}
                        >
                            {pokemonDetail?.speed}
                        </meter>
                    </li>

                </ul>
                <br />
                <div className={style.pokemonTypeSection}>
                    <br />Type: {pokemonTypes}
                </div>
                {/* DELETE */}
                {pokemonDetail?.id?.length > 8 ?
                    (<div>
                        <button type="button" onClick={handleDelete}>✖ Delete</button>
                    </div>) : null
                }
            </div>
            <div className={style.rightContainer}>
                <img src={pokemonDetail?.image} alt={`${pokemonDetail?.name} pokémon picture`} />
            </div>
        </article>
    </div>
)
}

export default Detail;