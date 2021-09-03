import { Component } from "react"

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            type: 'all',
        }
    }

    handleKey = (event) => {
        if(event.key === 'Enter') {
            this.props.findMovie(this.state.search, this.state.type)
        }
    }
    handleButton = () => {
            this.props.findMovie(this.state.search, this.state.type)
    }


    
    handleFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.findMovie(this.state.search, this.state.type)
        })
        
    // Обработчик на все формы:
    // onChange={(e) => this.setState({type: e.target.value})}
    }

    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        placeholder="search" type="search" className="validate"
                        value={this.state.search}
                        onChange={(e) => this.setState({search: e.target.value})}
                        onKeyDown={this.handleKey}
                        />
                        <button className='btn search-btn' onClick={this.handleButton}>find</button>
                        <div className="radioTypes" >
                            <p>
                                <label className='typeButton'>
                                    <input  name="group1" type="radio" value="all" data-type="all" onChange={this.handleFilter}
                                    checked={this.state.type === 'all'} />
                                    <span>All</span>
                                </label>
                            </p>
                            <p>
                                <label className='typeButton'>
                                    <input  name="group1" value="movie" type="radio" data-type="movie" onChange={this.handleFilter}
                                    checked={this.state.type === 'movie'}     
                                    />
                                    <span>Movies</span>
                                </label>
                            </p>
                            <p>
                                <label className='typeButton'>
                                    <input   name="group1" value="series" type="radio" data-type="series" onChange={this.handleFilter}
                                    checked={this.state.type === 'series'}  />
                                    <span>Serials</span>
                                </label>
                            </p>
                        </div>
                </div>
            </div>
        )
    }
    
}

export default Search