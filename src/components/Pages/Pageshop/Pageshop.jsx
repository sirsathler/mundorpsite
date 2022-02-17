import css from './Pageshop.css'
import React, { useState, useEffect } from "react"
import Bannercarrousel from './Shopbanner/Bannercarrousel.jsx'
import Shopcards from './Shopcards/Shopcards.jsx'
import Shopfilter from './Shopfilter/Shopfilter.jsx'
import Shoppacks from './Shoppacks/Shoppacks'
import axios from 'axios'


function scrollToElement(props) {
    window.scrollTo({ behavior: 'smooth', top: props.offsetTop });
}

export default function Pageshop() {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const myRef = React.createRef();

    const nextPage = () => {
        setPage(page + 1)
        scrollToElement(myRef.current)
    }
    const previousPage = () => {
        setPage(page - 1)
        scrollToElement(myRef.current)
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/shop?page=${page}&limit=${limit}`)
            .then(response => {
                setProducts(response.data.Prod)
            })
    }, [page])

    return (
        <div className="page-shop">
            <Bannercarrousel />
            <div ref={myRef} className="container">
                <Shopfilter />
                <Shopcards cards={products} />
                <div className="pagination">
                    <button onClick={page == 1 ? null : () => previousPage()}><p>Anterior</p></button>
                    <div className='page-now'><p>{page}</p></div>
                    <button onClick={() => nextPage()}><p>Proximo</p></button>
                </div>
            </div>
            <Shoppacks sectionSelect='premium' title='assine o premium!' />
            <Shoppacks title='mundopoints' />
        </div>
    )
}
