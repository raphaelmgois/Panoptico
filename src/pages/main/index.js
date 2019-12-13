import React, { Component } from 'react'
import api from '../../Services/Api'

export default class Main extends Component {

    state = {
        products: [],
    }

    componentDidMount () {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get( '/questions' );

        this.setState( { products: response.data } );
        console.log( response.data )
    }

    render () {

        let products = this.state


        return (

            // <div> tem mais de { this.state.products.length }</div>

            <div> tem mais de { this.state.products.map( product => (
                <h1>esse é { product.name }</h1>
            ) ) }</div>

            // <div>{ products.map( product => (
            //     <article key={ product.id }><h1>{ product.name }</h1></article>
            //     // <h1>{ product.atual }</h1>
            //     // <h1>{ product.anterior }</h1>
            //     // <h1>{ product.amt }</h1>

            //     // <h2>{ product.atual }</h2>
            //     // <h3>{ product.anterio }r</h3>
            //     // <h3>{ product.amt }</h3>
            // ) ) }
            // </div>



        )
    }

}