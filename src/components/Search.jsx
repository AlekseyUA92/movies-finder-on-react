import { Component, useState } from "react"

const Search = (props) => {
   const {
       // Приравнивается по умолчанию пустой функции
       findMovie = Function.prototype,
    } = props 
   const [search, setSearch] = useState('')
   const [type, setType] = useState('all')

    
    const handleKey = (event) => {
        if(event.key === 'Enter') {
            findMovie(search, type)
        }
    }
    const handleButton = () => {
            findMovie(search, type)
    }

    const handleFilter = (event) => {
        setType(event.target.dataset.type)
        findMovie(search, event.target.dataset.type)
    }

        return (
            <div className="row">
                <div className="input-field">
                    <input
                        placeholder="search" type="search" className="validate"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKey}
                        />
                        <button className='btn search-btn' onClick={handleButton}>find</button>
                        <div className="radioTypes" >
                            <p>
                                <label className='typeButton'>
                                    <input  name="group1" type="radio" value="all" data-type="all" onChange={handleFilter}
                                    checked={type === 'all'} />
                                    <span>All</span>
                                </label>
                            </p>
                            <p>
                                <label className='typeButton'>
                                    <input  name="group1" value="movie" type="radio" data-type="movie" onChange={handleFilter}
                                    checked={type === 'movie'}     
                                    />
                                    <span>Movies</span>
                                </label>
                            </p>
                            <p>
                                <label className='typeButton'>
                                    <input   name="group1" value="series" type="radio" data-type="series" onChange={handleFilter}
                                    checked={type === 'series'}  />
                                    <span>Serials</span>
                                </label>
                            </p>
                        </div>
                </div>
            </div>
        )
    
    
}

export default Search