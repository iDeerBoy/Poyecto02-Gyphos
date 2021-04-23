import './results.css'
import Card from '../Card/Card'

function Results({listaGifs, stateDark}){
    return (
        <section id="results">
        <h2 className={stateDark ? "dark-h2" : "light-h2"}
        >Resultados de la búsqueda</h2>
        <div className={`results-container ${stateDark ? "dark-results" : "light-results"}`}>
          {listaGifs.map((i, index)=>{
            return <Card {...i} key={index}/>
          })}
        </div>
      </section>
    )
}

export default Results;