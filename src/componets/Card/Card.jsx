function Card({id, url, title}){
    return (
        <a href={url} target="_blank">
            <img src={url} alt={title} key={id}/>
        </a>
    )
}

export default Card;