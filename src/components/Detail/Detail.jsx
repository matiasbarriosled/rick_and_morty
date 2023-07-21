import axios from 'axios';
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import styles from "./Detail.module.css"

export default function Detail(){
    const{id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then( ({data}) => {
            if(data.name) setCharacter(data);
            else window.alert('no es un ID valido para el personaje');
        });
        return setCharacter({});
    },[id]);

    return (
        <>
            <div className={styles.divDetail}>
                <div className={styles.detail}>
                    {/* <p>name: {character.name}</p>
                    <p>status: {character.status}</p>
                    <p>species: {character.species}</p>
                    <p>gender: {character.gender}</p>
                    <p>origin: {character.origin.name}</p> */}

                    {character.name && <p>name: {character.name}</p>}
                    {character.status && <p>status: {character.status}</p>}
                    {character.species && <p>species: {character.species}</p>}
                    {character.gender && <p>gender: {character.gender}</p>}
                    {character.origin && <p>origin: {character.origin.name}</p>}
                </div>
                <img src={character.image} alt="" />
            </div>
        </>
    )
}