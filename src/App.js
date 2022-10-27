import React, { useEffect, useState } from 'react'

function App() {
  const [results, setResults] = useState({})
  const teemillAPI = (process.env.NODE_ENV == 'production') ? process.env.REACT_APP_LIVE_TEEMILL_URL : process.env.REACT_APP_DEV_TEEMILL_URL

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.TEEMILL_API_KEY
    }
  };

  const fetchData = async () => {
    try {
      const res = await fetch(teemillAPI, options)
      const data = await res.json();
      setResults(data)
    }
    catch(err){
      console.error(err)
    }
  }
 
  useEffect(() => {
    fetchData()
  }, [])

  return (
        <div className="App">
          <h1>She Techs React Front End</h1>
          <ul>
            {results && results.products && results.products.map(product => {
            const {id, images, description, slug, tags, title, url, variants} = product
              return (
              <li key={id}>
                <a href={url}>{title}</a>
                <p>{description}</p>
                <a href={url}>
                  <img src={images[0].src} width="100" alt={description} />
                </a>
                {tags && <ul id="tags"> {tags.map(tag => <li>{tag}</li>)} </ul>}
              </li>
              )})}
          </ul>
        </div>
      );
}

export default App;
