import css from './Shopcards.css'
import Card from './Card.jsx'

const carList = [
    {
      "id": 1,
      "title": "Agor",
      "description": "Agor",
      "image": "https://imgur.com/eywM8mD.png",
      "mp": 500,
      "rp": 100,
      "type": "car",
      "season": "Vida Praiana",
      "ispremium": "0"
    },
    {
      "id": 2,
      "title": "Ares7",
      "description": "Ares7",
      "image": "https://imgur.com/M8JEuAH.png",
      "mp": 100,
      "rp": 100,
      "type": "car",
      "season": "Vida Praiana",
      "ispremium": "0"
    },
    {
      "id": 3,
      "title": "DTS",
      "description": "DTS",
      "image": "https://imgur.com/S86On6d.png",
      "mp": 100,
      "rp": 100,
      "type": "car",
      "season": "Vida Praiana",
      "ispremium": "0"
    },
    {
      "id": 4,
      "title": "Juha",
      "description": "Juha",
      "image": "https://imgur.com/OIqMaRE.png",
      "mp": 100,
      "rp": 100,
      "type": "car",
      "season": "Vida Praiana",
      "ispremium": "0"
    },
    {
      "id": 5,
      "title": "Katana",
      "description": "Katana",
      "image": "https://imgur.com/3ndMIaT.png",
      "mp": 100,
      "rp": 100,
      "type": "car",
      "season": "Vida Praiana",
      "ispremium": "0"
    },
    {
      "id": 6,
      "title": "Morgan",
      "description": "Morgan",
      "image": "https://imgur.com/3xeuDW2.png",
      "mp": 100,
      "rp": 100,
      "type": "car",
      "season": "Vida Praiana",
      "ispremium": "0"
    },
    {
      "id": 8,
      "title": "P208",
      "description": "P208",
      "image": "https://imgur.com/VwOvls3.png",
      "mp": 100,
      "rp": 100,
      "type": "car",
      "season": "Vida Praiana",
      "ispremium": "0"
    },
    {
      "id": 9,
      "title": "Python",
      "description": "Python",
      "image": "https://imgur.com/vT74E8T.png",
      "mp": 100,
      "rp": 100,
      "type": "car",
      "season": "Vida Praiana",
      "ispremium": "0"
    },
    {
      "id": 10,
      "title": "Rivera",
      "description": "Rivera",
      "image": "https://imgur.com/1cWslOc.png",
      "mp": 100,
      "rp": 100,
      "type": "car",
      "season": "Vida Praiana",
      "ispremium": "0"
    },
    {
      "id": 11,
      "title": "RTX",
      "description": "RTX",
      "image": "https://imgur.com/BDx9G1p.png",
      "mp": 100,
      "rp": 100,
      "type": "car",
      "season": "Vida Praiana",
      "ispremium": "0"
    },
    {
      "id": 12,
      "title": "Tauro",
      "description": "Tauro",
      "image": "https://imgur.com/H4YhYIn.png",
      "mp": 120,
      "rp": 100,
      "type": "car",
      "season": "Vida Praiana",
      "ispremium": "0"
    }
  ]

function Shopcards(){
    return(
        <div className="cards-wrapper">
            {
                carList.map((car)=>(
                    <Card key={car.id} image={car.image} namecar={car.title} price={car.mp}/>
                ))
            }
        </div>
    )
}
export default Shopcards