import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './actions'

const initialState = {
    favorites:[],
    allCharacters:[],
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
            const addFavorites = [...state.allCharacters, payload]
            return {...state,
                favorites:[...addFavorites],
                allCharacters: [...addFavorites],
            } 
            
        case REMOVE_FAV:
            return {...state,
                favorites: state.favorites.filter(elemento => elemento.id !== payload ),
                allCharacters: state.allCharacters.filter(elemento => elemento.id !== payload ),
            }
            
        case FILTER:
            return {...state,
                favorites: state.allCharacters.filter( elemento => elemento.gender === payload)
            }

        case ORDER:
            let orderFavorites;
            if(payload === "A"){
                orderFavorites = state.favorites.sort((a,b) => a.id > b.id ? 1 : -1);
                // esto es lo mismo que este codigo
                /* orderFavorites = state.favorites.sort((a,b) => a.id > b.id); */
            }
            else if(payload === "D"){
                orderFavorites = state.favorites.sort((a,b) => a.id < b.id ? 1 : -1);
            }
            return {
                ...state,
                favorites: [...orderFavorites],
            }

        default:
            return {...state};
    }
}

export default reducer;