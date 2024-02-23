import React, { useEffect } from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail } from "../../redux/actions/actions";

const Detail = () => {
  const params = useParams(); //{ id: # }
  const dispatch = useDispatch();
  const { pokemonDetail } = useSelector((state) => state);

  console.log(pokemonDetail); // obj {}

  useEffect(() => {
    dispatch(getPokemonDetail(params?.id))
  }, [params?.id])

  return (
    <div>
      <h3>Detalle</h3>
      <p>{pokemonDetail?.name}</p>
    </div>
  )
}

export default Detail;