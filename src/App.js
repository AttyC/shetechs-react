import React, { useEffect, useState } from 'react'

import productsPresenter from "./Products/ProductsPresenter"

function App() {
  // const [results, setResults] = useState({})

  const [viewMod, copyViewModelToComponentState] = useState({})
  // const teemillAPI = (process.env.NODE_ENV === 'production') ? process.env.REACT_APP_LIVE_TEEMILL_URL : process.env.REACT_APP_DEV_TEEMILL_URL

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: process.env.REACT_APP_TEEMILL_API_KEY
  //   }
  // };

  // const options = {method: 'GET', headers: {'Content-Type': 'application/json'}};

  // const fetchData = async () => {
  //   try {
  //     await fetch('https://teemill.com/omnis/v3/product/options', options)
  //     .then(response => response.json())
  //     .then(response => console.log(response.data))
  //     .then(response =>   setResults(response))
  //   }
  //   catch(err){
  //     console.error(err)
  //   }
  // }

  // const fetchData = async () => {
  //   try {
  //     const res = await fetch(teemillAPI, options)
  //     const data = await res.json();

  //     console.log('data', data)
  //     setResults(data)
  //   }
  //   catch(err){
  //     console.error(err)
  //   }
  // }
 
  useEffect(() => {
    console.log('hello')
    async function load() {
      await productsPresenter.load(viewModel => {
        copyViewModelToComponentState(viewModel)
      })
    }
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
        <div className="App">
          <h1>She Techs React Front End</h1>

          <ul>
            {/* {viewMod.map(product => {
            const {id, images, description, tags, title, url} = product
              return (
              <li key={id}>
                <a href={url}>{title}</a>
                <p>{description}</p>
                <a href={url}>
                  <img src={images[0].src} width="100" alt={description} />
                </a>
                {tags && <ul id="tags"> {tags.map(tag => <li>{tag}</li>)} </ul>}
              </li>
              )})} */}
          </ul>
          {/* <ul>
            {results && results.products && results.products.map(product => {
            const {id, images, description, tags, title, url} = product
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
          </ul> */}
        </div>
      );
}

export default App;
