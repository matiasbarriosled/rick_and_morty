import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards({characters, onClose}) {
   return (
   <div className={styles.gridContainer}>
      {characters.map((character) =>
      
      <Card className={styles.gridItem}
      /* name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      origin={character.origin.name}
      image={character.image}
      key={character.id} */
      id={character.id}
      key={character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      origin={character.origin}
      image={character.image}
      onClose={() => onClose(character.id)}
      />
      )}

   </div>
   );
}
