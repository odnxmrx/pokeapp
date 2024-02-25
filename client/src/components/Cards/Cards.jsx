import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllPokemons } from "../../redux/actions/actions";
import Card from "../Card/Card"
import Searchbar from "../Searchbar/Searchbar";
import FilterOrder from "../FilterOrder/FilterOrder";

import style from './Cards.module.css';

const Cards = ({onSearch, allPokemons}) => {

    const dispatch = useDispatch();
    // const { allPokemons } = useSelector((state) => state); //del estado, obtenemos allPokemons

    //   useEffect(() => {
    //     dispatch(getAllPokemons());
    //   }, [])

    // console.log(allPokemons);

    return (
        <div className={style.mainContainer}>

            <div className={style.container}>

                <div className={style.filterContainer}>
                    {/* <SourceToggle sourceToggle={sourceToggle} setSourceToggle={setSourceToggle} setPage={setPage} /> */}
                    <Searchbar onSearch={onSearch} />
                    <FilterOrder />
                </div>
                {/* <NavigateBtn page={page} setPage={setPage} allPokemonsLength={allPokemons.length} /> */}
            </div>

            <div className={style.container}>
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
            {/* <NavigatorPack page={page} setPage={setPage} setPageSize={setPageSize} allPokemonsLength={allPokemons.length} /> */}
        </div>
    )
}

export default Cards;