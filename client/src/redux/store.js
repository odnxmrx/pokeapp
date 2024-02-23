import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer';

const store = createStore(rootReducer, applyMiddleware(thunk))
//dejamos a disposicion
export default store;
//para envolver la app, en componente que brinda la libreria react-redux