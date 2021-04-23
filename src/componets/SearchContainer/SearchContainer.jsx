import './SearchContainer.css'
import ilustrationHeader from '../../img/ilustra header.svg';
import Search from '../search/Search';

function SearchContainer({stateDark}){
    return (
        <section 
          id="search-container"
          className={stateDark ? "dark" : "light"}
          >
            <h1>¡Inspirate y busca los mejores <span>GIFS</span>!</h1>
            <img src={ilustrationHeader} alt="ilustrationHeader"/>
            <Search stateDark={stateDark}/>
    </section>
  )
}

export default SearchContainer;