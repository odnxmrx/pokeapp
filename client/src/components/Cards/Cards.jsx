import React, { useEffect, useState } from "react";

import Card from "../Card/Card"
import Searchbar from "../Searchbar/Searchbar";
import FilterOrder from "../FilterOrder/FilterOrder";

import style from './Cards.module.css';
import pokeballgif from '../../assets/pokeball-d5s04qj-d26a072a-3294-4da7-8ab9-a1be78141275.gif'
import PaginationBtn from "../PaginationBtn/PaginationBtn";
import { useSelector } from "react-redux";
import LoadingMessage from "../LoadingMessage/LoadingMessage";

const Cards = ({ onSearch }) => {

    const cardsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const { allPokemons, filterOptions } = useSelector(state => state);

    const indexOfLastItem = currentPage * cardsPerPage;
    const indexOfFirstItem = indexOfLastItem - cardsPerPage;

    // const sliceOfPokemons = [...allPokemons];
    const currentItemsToDisplay = allPokemons.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        // setCurrentPage(1);
        checkForObjectsOnGlobalState(); //check if there are objects to work on
    }, [filterOptions, allPokemons])

    function checkForObjectsOnGlobalState() {
        if(allPokemons.length > 1) {
            setIsLoading(false);
        }
    }

    return (
        <div className={style.mainContainer}>
            <div className={style.filterContainer}>
                <Searchbar onSearch={onSearch} />
                <FilterOrder />
                <PaginationBtn currentPage={currentPage} cardsPerPage={cardsPerPage} setCurrentPage={setCurrentPage} currentItemsToDisplay={currentItemsToDisplay} />
            </div>

            <div className={style.container}>
                {
                    isLoading ? (<LoadingMessage />) : (
                        currentItemsToDisplay?.map((pokemon) => {
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
                    )
                }
            </div>
            <PaginationBtn currentPage={currentPage} cardsPerPage={cardsPerPage} setCurrentPage={setCurrentPage} currentItemsToDisplay={currentItemsToDisplay} />
        </div>
    )
}

export default Cards;