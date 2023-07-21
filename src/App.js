/* import Card from './components/Card.jsx'; */
/* import SearchBar from './components/SearchBar/SearchBar.jsx'; */
/* import characters from './data.js'; */
/* import {Rick} from './data.js'; */
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Route,Routes,useLocation, useNavigate} from "react-router-dom";
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/forms/Form';
import Favorites from './components/Favorites/Favorites';

function App() {
   const [characters,setCharacters] = useState([]);

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'fbiopenthedoor@gmail.com';
   const PASSWORD = 'Holass1@';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   function logout() {
      setAccess(false);
   }

   /*si la condicion de access es true, se negara y no se redirigira a la ruta raiz '/'
   */
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name){
            characters.find( objetoDevuelto => objetoDevuelto.name === data.name) === undefined
            ?setCharacters([data, ...characters]): alert('personaje ya ingresado, intente con otro ID')
         }
         else window.alert('¡No hay personajes con este ID!');
      });
   }

   function onClose(id) {
      setCharacters(characters.filter((char) => char.id !== id));
   }

   const location = useLocation();

   return (
      <div className='App'>
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> 
         */
         }
         {/* <Cards characters={characters} onClose={onClose}/> */}
         {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>}
         
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/> } />
            <Route path='/about' element={<About />} />
            <Route path='/favorites' element={<Favorites />}/>
            <Route path='/detail/:id' element={<Detail />}/>
         </Routes>
      </div>
   );
}

export default App; 