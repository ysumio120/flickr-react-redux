import $ from 'jquery'

function setResults(results) {
  return {
    type: "SET_RESULTS",
    results
  }
}

export function fetchData(query) {


  return (dispatch) => {
  console.log("here")

  $.ajax({
    url: `https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${query}&jsoncallback=?`,
    method: "GET",
    dataType: "jsonp"
  })
  .done(function (response) {
    console.log(response);
    dispatch(setResults(response));
  })

  }
}