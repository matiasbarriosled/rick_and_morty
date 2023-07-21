import Card from "../Card/Card";
import { connect } from "react-redux";
import { orderCards,filterCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import {useState} from "react"


export function Favorites({favorites}){
    const dispatch = useDispatch();

    let [aux,setAux] = useState(false);

    function handleOrder(event){
        if(event.target.value === "A" || event.target.value === "D" ){
            dispatch(orderCards(event.target.value));
            setAux(!aux)
        }
    }

    function handleFilter(event){
        dispatch(filterCards(event.target.value));
    }

    return(
        <>
            <select onChange={handleOrder}>
                <option value="">Order:</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="">Gender:</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>

            {favorites.map( elemento =>
                <Card 
                name={elemento.name}
                status={elemento.status}
                species={elemento.species}
                gender={elemento.gender}
                origin={elemento.origin}
                image={elemento.image}
                id={elemento.id}
                key={elemento.id}
                />
            

            )}
        </>
    )
}

export function mapStateToProps(state){
    return {favorites: state.favorites,}
}

export default connect(mapStateToProps,null)(Favorites);