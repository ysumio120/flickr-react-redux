const initialState = {
  query: "",
  results: {}
}

export default function reducer(state=initialState, action) {

  switch(action.type) {
    case "SET_QUERY": {
      return Object.assign({}, state, {query: action.query})
    }
    case "SET_RESULTS": {
      console.log(action)
      return Object.assign({}, state, {results: action.results})
    }
  }

  return state;
}