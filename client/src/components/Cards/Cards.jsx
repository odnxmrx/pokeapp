import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions/actions";
import Card from "../Card/Card"

const Cards = () => {

  const dispatch = useDispatch();
  const { allPokemons } = useSelector((state) => state); //del estado, obtenemos allPokemons

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [])

  console.log(allPokemons);

  return (
    <div>
      <h2>Cardsss</h2>
      {
        allPokemons?.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              hp={pokemon.hp}
              attack={pokemon.attack}
              types={pokemon.types}
            />
          )
        })
      }
    </div>
  )
}

export default Cards;