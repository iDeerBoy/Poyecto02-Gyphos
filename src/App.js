import './App.css';
import Header from './componets/Header/Header';
import SearchContainer from './componets/SearchContainer/SearchContainer'; 
import Results from './componets/Results/Results';
import { useEffect, useState } from 'react';

function App() {

  let [stateDark, setDark] = useState(false);
  let [searchState, setSearchState] = useState(false);
  let [searched, setSearched] = useState(false);
  let [search, setSearch] = useState("");
  let [lastSearch, setLastSearch] = useState("");
  let [gifList, setGifList] = useState([]);
  let [suggestions, setSuggestions] = useState([]);

    
  function switchDark(value){
    setDark(value)
  };

  function searchGif(){
    setSearchState(!searchState)
    setSearched(true)
    setLastSearch(search)
  };

  function clickSuggestion (value){
    setSearch(value)
    setLastSearch(value)
    setSearchState(!searchState)
    setSearched(true)
  }

  useEffect(()=>{
    if(searchState){
      let petition = fetch(`https://api.giphy.com/v1/gifs/search?api_key=aOKmBqD3QgxKVjW6X4g7DrUu3HpNM2N6&q=${search}&limit=12&offset=0&rating=g&lang=en`)
    petition
      .then((answer) => answer.json())
      .then((data) => {
        setGifList(data.data)
        setSearchState(false)
        setSearch("")
      })
    }      
  },[searchState]);

  useEffect(()=>{
    let petition = fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=aOKmBqD3QgxKVjW6X4g7DrUu3HpNM2N6&q=${search}`)
    petition
      .then((answer) => answer.json())
      .then((data) => setSuggestions(data.data))
  },[search])

  

  let switchModeApp = stateDark ? "app-dark" : "app-light";
  let switchModeAppContainer = stateDark ? "container-dark" : "container-light";

  return (
    <div className={`App ${switchModeApp}`}>      
      <div className="borderTop"></div>
      <div className={`app-container ${switchModeAppContainer}`}>
        <Header
          stateDark={stateDark}
          switchDark={switchDark}
        />
        <SearchContainer 
          stateDark={stateDark}
          search={search}
          setSearch={setSearch}
          searchGif={searchGif}
          suggestions={suggestions}
          clickSuggestion={clickSuggestion}
        />
        <Results 
          listaGifs={gifList}
          stateDark={stateDark}
          searchState={searchState}
          searched={searched}
          lastSearch={lastSearch}
        />
      </div>  
    </div>
  );
}

export default App;
