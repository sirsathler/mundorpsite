import css from './Pageshop.css'
import React, { useState } from "react"
import Bannercarrousel from './Shopbanner/Bannercarrousel.jsx'
import Shopcards from './Shopcards/Shopcards.jsx'
import Shopfilter from './Shopfilter/Shopfilter.jsx'
import Shoppacks from './Shoppacks/Shoppacks'
import axios from 'axios'


class Pageshop extends React.Component {
    fetchProducts() {
        axios.get(`${process.env.REACT_APP_API_URL}/shop?page=${this.state.page}&limit=${this.state.limit}`)
            .then(response => {
                let responseData = response.data.Prod
                this.setState({products: responseData})
            })
    }

    nextPage(){
        this.setState({page: this.state.page + 1})
        // this.fetchProducts()
    }
    previousPage(){
        this.setState({page: this.state.page - 1})
        // this.fetchProducts()
    }

    constructor() {
        super()
        this.state = {
            products : [],
            page: 1,
            limit: 10
        }

    }

    // componentDidMount() {
    //     this.fetchProducts();
    // }

    // shouldComponentUpdate()
    
    render() {
        this.fetchProducts()
        return (
            <div className="page-shop">
                <Bannercarrousel />
                <div className="container">
                    <Shopfilter />
                    <Shopcards cards={this.state.products} />
                    <div className="pagination">
                        <button onClick={this.state.page == 1 ? null : ()=>this.previousPage()}><p>Anterior</p></button>
                        <div className='page-now'><p>{this.state.page}</p></div>
                        <button onClick={()=>this.nextPage()}><p>Proximo</p></button>
                    </div>
                </div>
                <Shoppacks sectionSelect='premium' title='assine o premium!' />
                <Shoppacks title='mundopoints' />
            </div>
        )
    }
}

export default Pageshop