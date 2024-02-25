import React, { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAllPokemons, getAllTypes } from './redux/actions/actions';

import './App.css';

import Cards from './components/Cards/Cards';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Welcome from './components/Welcome/Welcome';
import PokemonCreate from './components/PokemonCreate/PokemonCreate';

function App() {

  const URL_BASE = 'http://localhost:3001/pokemonapi';

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(()=> {
    //componentDidMout
    dispatch(getAllPokemons());
    dispatch(getAllTypes());
  }, [])


  //traer 'types' del estado global
  const allTypes = useSelector((state) => state.allTypes);
  // console.log('todos los tipos', allTypes);
  const allPokemons = useSelector(state => state.allPokemons);
  console.log('todos los allPokemons', allPokemons);


  //onSearch function for searchbar
  function onSearch(name) {
    if (!name) return alert('Please, enter Pokémon name.');

    axios(`${URL_BASE}/pokemons/?name=${name}`)
      //.then((response) => { console.log('que es response??: ', response)}, (reason) => { console.log('ques reason??: ', reason);
      .then(({ data }) => {
        if (data?.id) { //verificar si obtuvimos la info
          navigate(`/detail/${data.id}`);
        }
        else {
          alert('Pokémon not found.');
        }
      }
      )// catch respuesta (error) del servidor:
      .catch(err => alert(err.message))
  }


  return (
    <div className='pagecontainer'>
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Cards allPokemons={allPokemons} onSearch={onSearch} />} />
        <Route path="/create" element={<PokemonCreate allTypes={allTypes} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
