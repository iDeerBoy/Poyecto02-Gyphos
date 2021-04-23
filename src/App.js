import './App.css';
import listaGifs from './data/data';
import Header from './componets/Header/Header';
import SearchContainer from './componets/SearchContainer/SearchContainer'; 
import Results from './componets/Results/Results';
import { useState } from 'react';

function App() {

  let [stateDark, setDark] = useState(false);
  
  function switchDark(value){
    setDark(value)
  };
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
        <SearchContainer stateDark={stateDark}/>
        <Results 
          listaGifs={listaGifs}
          stateDark={stateDark}
        />
      </div>  
    </div>
  );
}

export default App;
