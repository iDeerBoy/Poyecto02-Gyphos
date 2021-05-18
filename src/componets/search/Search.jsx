import './search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search ({stateDark, search, setSearch, searchGif, suggestions, clickSuggestion}){
   
    let switchMode = stateDark ? "search-dark" : "search-light"
    function userSearch (e) {
        setSearch(e.target.value)
    }
    return (
        <>
            <div id="search">
                <input 
                    type="text" 
                    placeholder="Busca gifs"
                    value={search}                
                    className={stateDark ? "dark" : "light"}
                    onChange={userSearch}
                ></input>
                <div className={`search-icon ${switchMode}`} onClick={searchGif}><FontAwesomeIcon icon={faSearch} /></div>
            </div>
            <div className={`suggestions ${stateDark ? "suggestionsDark" : ""}`}>
                {suggestions.map((i) => {

                    return <p key={i.name} onClick={() => clickSuggestion(i.name)}>{i.name}</p>
                    
                })}
            </div>
        </>
    )
}

export default Search;