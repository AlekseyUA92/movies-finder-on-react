import Film from "./Film";

function FilmsList(props) {
    const {movies = []} = props;

    return (<div className="movies">
        {movies.length ? movies.map((film) => {
           return <Film key={film.imdbID} {...film}/>
        })
        : <h3>Nothing was found</h3> 
        }
        
    </div>)
    
    
}

export default FilmsList