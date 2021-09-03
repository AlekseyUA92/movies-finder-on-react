function Film(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = props
    
        return (
            <div id={id} className="movie">
                    <div className="card ">
                        <div className="card-image">
                        {
                            poster !== 'N/A' ? 
                            <img src={poster}/>
                            : <img src={`https://via.placeholder.com/300x400?text=${title}`}/>
                        }
                            
                        </div>
                        <div className="card-content">
                        <span className="card-title">{title}</span>
                            <p>
                            {year} 
                            <span className={"right"}>{type}</span>
                            </p>
                        </div> 
                    </div>
            </div>
            
        )
    
    
}

export default Film