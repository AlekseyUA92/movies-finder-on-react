import { Component } from "react";
import FilmsList from "../components/FilmsList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
//import { FilmsApi } from "../components/api/api";
const API_KEY = process.env.REACT_APP_API_KEY

class Main extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            loading: true
        }
    }

    componentDidMount() {
        // first fetch
        const baseUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`

        fetch(baseUrl + 's=matrix')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({movies: data.Search, loading: false})
            });
    }

    // searching with type
    findMovie(search, type = 'all') {
        this.setState({loading: true})
        const baseUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`

        fetch(baseUrl + `&s=${search}${type !== 'all' ? `&type=${type}` : ''}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({movies: data.Search, loading: false})
            });
    }



    render() {
        const {movies, loading} = this.state

        return (<main className='container content'>
            <Search findMovie={this.findMovie.bind(this)}/>
            {
                loading ? 
                    <Preloader/>
                    : <FilmsList movies={movies} />
            }
        </main>)
    }
    
}

export default Main