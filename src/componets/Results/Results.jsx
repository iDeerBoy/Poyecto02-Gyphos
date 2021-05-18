import './results.css'
import startGif from '../../img/inicial.gif';
import startGifDark from '../../img/inicialDark.gif';
import noResultsGif from '../../img/404.gif';
import noResultsGifDark from '../../img/404dark.gif';
import loadingGif from '../../img/cargando.gif'
import loadingGifDark from '../../img/cargandoDark.gif'
import Card from '../Card/Card'

function Results({listaGifs, stateDark, searchState, searched, lastSearch}){
  
    return (
        <section id="results">
        <h2 className={stateDark ? "dark-h2" : "light-h2"}>
          {searched && listaGifs.length === 0 ? "Busca otra categoria, no se encontraron resultados" : searched ? `Resultados de tu búsqueda: ${lastSearch}.` : "Inicia buscando un gif."}
        </h2>
        <div className={`results-container ${stateDark ? "dark-results" : "light-results"}`}>
          {!searched && <img src={stateDark ? startGifDark : startGif} alt="pikachuGifos" id="gif"></img>}
          {searchState && <img src={stateDark ? loadingGifDark : loadingGif} alt="loadingGif" id="gif"></img>}
          {searched && listaGifs.length === 0 && !searchState && <img src={stateDark ? noResultsGifDark : noResultsGif} alt="404gif" id="gif"></img>}
          {!searchState && listaGifs.map((i, index)=>{
            return <Card 
                      url={i.images.original.url}
                      title={i.title} 
                      key={index}
                    />
          })}
        </div>
      </section>
    )
}

export default Results;