import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import styles from "./Card.module.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export function Card(props) {

   const [isFav,setIsFav] = useState(false);

   function handleFavorite(){
      if(isFav){
         setIsFav(false);
         props.removeFav(props.id);
      }else{
         setIsFav(true);
         props.addFav({
            id:props.id,
            name:props.name,
            status:props.status,
            species:props.species,
            gender:props.gender , 
            origin:props.origin.name ,
            image:props.image ,
         })
      }
      console.log(props.favorites);
   }

   useEffect(() => {
      props.favorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.favorites]);

   return (
      <div className={styles.divCard}>
         
         <button onClick={props.onClose}>X</button>
         {isFav ? (<button onClick={handleFavorite}>❤️</button>)
         : 
         (<button onClick={handleFavorite}>🤍</button>)
         }
         <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
         </Link>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin.name}</h2>
         <img src={props.image} alt='' />
      </div>
   );
}

const mapStateToProps = (state) =>{
   return{  
      favorites: state.allCharacters,
   }
}

const mapDispatchToProps = (dispatch) =>{
   return{
      addFav: (personaje) => dispatch(addFav(personaje)),
      removeFav: (id) => dispatch(removeFav(id)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);