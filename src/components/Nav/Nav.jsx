import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css"
import {Link} from "react-router-dom"

export default function Nav({onSearch,logout}){
    return (
        <div className={styles.divNav}>
            <img  className={styles.navElements} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/250px-Rick_and_Morty.svg.png" alt="" />
            <Link className={styles.navElements}  to="/home" >Home</Link>
            <Link className={styles.navElements}  to="/favorites" >Favorites </Link>
            <Link className={styles.navElements}  to="/about" >About</Link>
            <button className={styles.navElements} onClick={logout}>Logout</button>
            <SearchBar className={styles.navElements} onSearch={onSearch} />
        </div>
    )
}