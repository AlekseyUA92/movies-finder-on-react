import { useState, useEffect } from "react";
import FilmsList from "../components/FilmsList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
//import { FilmsApi } from "../components/api/api";
const API_KEY = process.env.REACT_APP_API_KEY

function Main() {
    const [movies, setMovies] = useState([]) 
    const [loading, setLoading] = useState(true)    

    // searching with type
    const findMovie = (search, type = 'all') => {
        setLoading(true)
        const baseUrl = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`

        fetch(baseUrl + `&s=${search}${type !== 'all' ? `&type=${type}` : ''}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMovies(data.Search)
                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
                setLoading(false)
            })
    }

    useEffect(() => {
        const baseUrl = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`

        fetch(baseUrl + '&s=matrix')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMovies(data.Search)
                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
                setLoading(false)
            })
    }, [])

        return (
            <main className='container content'>
                <Search findMovie={findMovie}/>
                {
                    loading ? 
                        <Preloader/>
                        : <FilmsList movies={movies} />
                }
            </main>
        )
}

export default Main