import css from './Shopcards.css'
import Card from './Card.jsx'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'

const apiUrl = process.env.REACT_APP_API_URL
const apiPort = process.env.REACT_APP_API_PORT

let page = 1;
let limit = 6;

//http://localhost:4000/shop?page=1&limit=5

export default function Shopcards() {
  const [productList, setproductlist] = useState([])
  
  useEffect(() => {
    getProductList()
  }, [])
  
  
  async function getProductList() {
    await Axios.get(`http://${apiUrl}:${apiPort}/shop?page=${page}&limit=${limit}`)
    .then(Response => { setproductlist(Response.data.Produtos) })
  }

  function previousPage(){
    page--
    getProductList()
  }
  
  function nextPage(){
    page++
    getProductList()
  }

  return (
    <div className="cards-wrapper">
      <div className="cards-container">
        {
          productList.map((product) => (
            <Card key={product.Id} image={product.Image} name={product.Name} price={product.Price} premium={true} />
          ))
        }
      </div>

      <div className="pagination">
        <button onClick={()=>previousPage()}><p>Anterior</p></button>
        <div className='page-now'><p>{page}</p></div>
        <button onClick={()=>nextPage()}><p>Proximo</p></button>
      </div>

    </div>
  )
}