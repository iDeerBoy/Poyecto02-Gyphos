import './search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search ({stateDark}){
   
    let switchMode = stateDark ? "search-dark" : "search-light"
    return (
        <div id="search">
            <input 
                type="text" 
                placeholder="Busca gifs"                
                className={stateDark ? "dark" : "light"}>
                  
            </input>
            <div className={`search-icon ${switchMode}`}><FontAwesomeIcon icon={faSearch} /></div>
        </div>
    )
}

export default Search;