import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// import { getAllPokemons } from "../../redux/actions/actions";
import Card from "../Card/Card"
import Searchbar from "../Searchbar/Searchbar";
import FilterOrder from "../FilterOrder/FilterOrder";

import style from './Cards.module.css';
import PaginationBtn from "../PaginationBtn/PaginationBtn";

const Cards = ({ onSearch, allPokemons }) => {

    const dispatch = useDispatch();
    const cardsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * cardsPerPage;
    const indexOfFirstItem = indexOfLastItem - cardsPerPage;

    const sliceOfPokemons = [...allPokemons];

    const currentItemsToDisplay = sliceOfPokemons.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        setCurrentPage(1);
        //     dispatch(getAllPokemons());
    }, [])

    // console.log(currentItemsToDisplay);


    return (
        <div className={style.mainContainer}>
            <div className={style.container}>
                <div className={style.filterContainer}>
                    <Searchbar onSearch={onSearch} />
                    <FilterOrder />
                    <PaginationBtn currentPage={currentPage} cardsPerPage={cardsPerPage} setCurrentPage={setCurrentPage} currentItemsToDisplay={currentItemsToDisplay} />
                </div>
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