import './SearchContainer.css'
import ilustrationHeader from '../../img/ilustra header.svg';
import Search from '../search/Search';

function SearchContainer({stateDark, search, setSearch, searchGif, suggestions, clickSuggestion}){
    return (
        <section 
          id="search-container"
          className={stateDark ? "dark" : "light"}
          >
            <h1>¡Inspirate y busca los mejores <span>GIFS</span>!</h1>
            <img src={ilustrationHeader} alt="ilustrationHeader"/>
            <Search 
              stateDark={stateDark}
              search={search}
              setSearch={setSearch}
              searchGif={searchGif}
              suggestions={suggestions}
              clickSuggestion={clickSuggestion}
            />
    </section>
  )
}

export default SearchContainer;