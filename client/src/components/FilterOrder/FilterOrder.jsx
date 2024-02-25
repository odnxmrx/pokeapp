import { useSelector, useDispatch } from 'react-redux';
import { getAllPokemons, filterByPokemonType, orderByPokemonName, orderByPokemonAttack, setFilterOptions } from '../../redux/actions/actions';
import { useEffect } from 'react';
import style from './FilterOrder.module.css';


const FilterOrder = () => {

    const dispatch = useDispatch();
    const { allTypes } = useSelector(state => state); //obtener Types para dropdown menu
    const { filterOptions } = useSelector(state => state);
    const { type, orderByName, orderByAttack } = useSelector(state => state.filterOptions);

    const listOfTypes = allTypes?.map((type, i) => {
        return <option key={i} value={type.name}>{type.name}</option>
    });

    const handleTypeFilter = (event) => {
        dispatch(setFilterOptions({ ...filterOptions, type: event.target.value }));
        dispatch(filterByPokemonType(event.target.value));
    };

    const handleOrderByName = (event) => {
        dispatch(orderByPokemonName(event.target.value));
        dispatch(setFilterOptions({ ...filterOptions, orderByName: event.target.value }));
    };

    const handleOrderByAttack = (event) => {
        const newOrderByAttack = event.target.value;
        dispatch(setFilterOptions({ ...filterOptions, orderByAttack: event.target.value }));
        dispatch(orderByPokemonAttack(newOrderByAttack));
    };

    return (
        <span className={style.filterOrder}>

            <label for="type">Filter by type:<br />
                <select name="type" id="type" value={type} onChange={handleTypeFilter} >
                    <option value="All" >All types</option>
                    {listOfTypes}
                </select>
            </label>

            <label for="orderByName">Order by name:<br />
                <select name="orderByName" id="orderByName" value={orderByName} onChange={handleOrderByName} >
                    <option value="A">Ascendant</option>
                    <option value="D">Descendant</option>
                </select>
            </label>

            <label for="orderByAttack">Order by attack:<br />
                <select name="orderByAttack" id="orderByAttack" value={orderByAttack} onChange={handleOrderByAttack} >
                    <option value="Menor">Ascendant</option>
                    <option value="Mayor">Descendant</option>
                </select>
            </label>

        </span>
    )
}

export default FilterOrder;