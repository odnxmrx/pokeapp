import { useSelector, useDispatch } from 'react-redux';
import { filterByPokemonType, filterBySource, orderByPokemonName, orderByPokemonAttack, setFilterOptions } from '../../redux/actions/actions';
import style from './FilterOrder.module.css';

const FilterOrder = () => {

    const dispatch = useDispatch();
    const { allTypes, filterOptions } = useSelector(state => state); //obtener Types para dropdown menu

    const { source, type, orderByName, orderByAttack } = filterOptions;

    const listOfTypes = allTypes?.map((type, i) => {
        return <option key={i} value={type.name}>{type.name}</option>
    });

    const handleSource = (event) => {
        dispatch(filterBySource("All")); //reseteo
        dispatch(setFilterOptions({ ...filterOptions, type: "All" }));

        dispatch(setFilterOptions({ ...filterOptions, source: event.target.value }));
        dispatch(filterBySource(event.target.value));
    }

    const handleTypeFilter = (event) => {
        // dispatch(filterByPokemonType("All")); //reseteo del type
        dispatch(setFilterOptions({ ...filterOptions, type: event.target.value }));
        dispatch(filterByPokemonType(event.target.value));
    };

    const handleOrderByName = (event) => {
        dispatch(setFilterOptions({ ...filterOptions, orderByName: event.target.value }));
        dispatch(orderByPokemonName(event.target.value));
    };

    const handleOrderByAttack = (event) => {
        // const newOrderByAttack = event.target.value;
        dispatch(setFilterOptions({ ...filterOptions, orderByAttack: event.target.value }));
        dispatch(orderByPokemonAttack(event.target.value));
    };


    return (
        <span className={style.filterOrder}>

            <label htmlFor="source">Filter by source:<br />
                <select name="source" id="source" value={source} onChange={handleSource} >
                    <option value="All" >All Pokémon</option>
                    <option value="DB">My own</option>
                    <option value="API">Pokedex</option>
                </select>
            </label>

            <label htmlFor="type">Filter by type:<br />
                <select name="type" id="type" value={type} onChange={handleTypeFilter} >
                    <option value="All" >All types</option>
                    {listOfTypes}
                </select>
            </label>

            <label htmlFor="orderByName">Order by name:<br />
                <select name="orderByName" id="orderByName" value={orderByName} onChange={handleOrderByName} >
                    <option value="A">Ascendant</option>
                    <option value="D">Descendant</option>
                </select>
            </label>

            <label htmlFor="orderByAttack">Order by attack:<br />
                <select name="orderByAttack" id="orderByAttack" value={orderByAttack} onChange={handleOrderByAttack} >
                    <option value="Menor">Ascendant</option>
                    <option value="Mayor">Descendant</option>
                </select>
            </label>

        </span>
    )
}

export default FilterOrder;