import React from 'react'
import { connect } from 'react-redux'

import { fetchData } from './actions.js'

class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.query !== this.props.query) {
      this.props.setFetchedData(this.props.query)
    }
  }

  getQuery() {
    const query = this.input.value;
    return query;
  }

  getItems() {
    const items = this.props.results.items || [];

    return items.map((item, index) => {
      return (
        <li key={index}>
          <div className="thumbnail">
            <img src={item.media.m}/>
          </div>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-inverse">
          <div className="search">
            <div className="input-group">
              <input ref={(input) => this.input = input} type="text" className="form-control" placeholder="Search by tag" />
              <span className="input-group-btn">
                <button className="btn btn-danger" onClick={() => {this.props.setQuery(this.getQuery())}} type="button">
                  <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                  Search
                </button>
              </span>
            </div>
          </div>
        </div>    
        <div className="cards">
          <ul>{this.getItems()}</ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    query: state.query,
    results: state.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setQuery: (query) => {
      dispatch ({type: "SET_QUERY", query: query}) 
    },
    setFetchedData: (query) => {
      dispatch(fetchData(query))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)