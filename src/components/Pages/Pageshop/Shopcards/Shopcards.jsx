import css from './Shopcards.css'
import Card from './Card.jsx'

import { useState } from 'react'

export default function Shopcards() {
  const axios = require('axios').default

  let [carList, setCarList] = useState([])

  axios.get(`localhost:4000/shop?limit=10&page=1`)
    .then(function (response) {
      setCarList(response.data.Produtos)
      console.log(carList)
    })

  return (
    <div>
      <div className="cards-wrapper">
        {
          carList.map((car) => (
            <Card key={car.id} image={car.Url} name={car.Name} price={car.Price_mp} premium={true} />
          ))
        }
      </div>
      <div className="pagination">
        <button><p>Anterior</p></button>
        <div className='page-now'><p>1</p></div>
        <button><p>Proximo</p></button>
      </div>
    </div>
  )
}