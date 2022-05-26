import React from 'react';
import { samples } from '../shared/more-products';
import { H2, Product, ProductCard } from "../elements/ProductCard";
import { LOAD_CATEGORIES } from '../GraphQL/Queries';

export default class Category extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            error: null,
            loading: false
        }

        this.loadCategories = this.loadCategories.bind(this);
    }

    loadCategories(){
        client.query({
            query: LOAD_CATEGORIES
        })
        .then((result) => result.data)
    }

    // componentDidMount() {
    //     client.query({ 
    //         query: LOAD_CATEGORIES 
    //     })
    //         .then((response) => {console.log(response.json())})
    //         .then(response => {
    //             this.setState({ 
    //                 loading: false,
    //                 data: response 
    //             })
    //         },
    //         error => {
    //             this.setState({ 
    //                 error,
    //                 loading: false
    //              })
    //         }
    //     )
    // }
    
    render() { 
        console.log(this.loadCategories());
        return (
            <section className="category">
                <H2 className="title">
                    Category name
                </H2>
                <Product>
                    {
                        this.state.data.map((item) => (
                            <ProductCard key={item.id}>
                                <img src={item.gallery[0]} alt={item.name} />
                                <h5>{item.name}</h5>
                                <h6>{item.prices[0].currency.symbol}{item.prices[0].amount}</h6>
                            </ProductCard>
                        ))
                    }
                </Product>
            </section>
    )}
}