import React, { useEffect, useState } from "react";

import Card from "../Card/Card"
import Searchbar from "../Searchbar/Searchbar";
import FilterOrder from "../FilterOrder/FilterOrder";

import style from './Cards.module.css';
import PaginationBtn from "../PaginationBtn/PaginationBtn";
import { useSelector } from "react-redux";

const Cards = ({ onSearch, allPokemons }) => {

    const cardsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * cardsPerPage;
    const indexOfFirstItem = indexOfLastItem - cardsPerPage;

    const sliceOfPokemons = [...allPokemons];

    const currentItemsToDisplay = sliceOfPokemons.slice(indexOfFirstItem, indexOfLastItem);


    const { filterOptions } = useSelector(state => state);


    useEffect(() => {
        // setCurrentPage(1);
    }, [filterOptions.source])

    // console.log('los actuales currentItemsToDisplay a mstrar: ', currentItemsToDisplay);

    return (
        <div className={style.mainContainer}>
            <div className={style.filterContainer}>
                <Searchbar onSearch={onSearch} />
                <FilterOrder />
                <PaginationBtn currentPage={currentPage} cardsPerPage={cardsPerPage} setCurrentPage={setCurrentPage} currentItemsToDisplay={currentItemsToDisplay} />
            </div>

            <div className={style.container}>
                {
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
                }
            </div>
            <PaginationBtn currentPage={currentPage} cardsPerPage={cardsPerPage} setCurrentPage={setCurrentPage} currentItemsToDisplay={currentItemsToDisplay} />
        </div>
    )
}

export default Cards;