import React from 'react';
import { samples } from '../shared/more-products';
import { H2, Product, ProductCard } from "../elements/ProductCard";

export default class Category extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            samples: samples
        }
    }
    render() { 
        return (
            <section className="category">
                <H2 className="title">
                    Category name
                </H2>
                <Product>
                    {
                        this.state.samples.map((item) => (
                            <ProductCard key={item.id}>
                                <img src={item.gallery[0]} alt={item.name} />
                                <h5>{item.name}</h5>
                                <h6>{item.prices[0].currency.symbol} {item.prices[0].amount}</h6>
                            </ProductCard>
                        ))
                    }
                    {/* <ProductCard>
                        <img src={samples[0].gallery[0]} alt="product"/>
                        <h5>
                            {samples[0].name}
                        </h5>
                        <h6>
                            {samples[0].prices[0].currency.symbol} {samples[0].prices[0].amount}
                        </h6>
                    </ProductCard>
                    <ProductCard>
                        <img src={samples[1].gallery[0]} alt="product" />
                        <h5>
                            {samples[1].name}
                        </h5>
                        <h6>
                            {samples[1].prices[0].currency.symbol} {samples[1].prices[0].amount}
                        </h6>
                    </ProductCard>
                    <ProductCard>
                        <img src={samples[2].gallery[0]} alt="product" />
                        <h5>
                            {samples[2].name}
                        </h5>
                        <h6>
                            {samples[2].prices[0].currency.symbol} {samples[2].prices[0].amount}
                        </h6>
                    </ProductCard>
                    <ProductCard>
                        <img src={samples[3].gallery[0]} alt="product" />
                        <h5>
                            {samples[3].name}
                        </h5>
                        <h6>
                            {samples[3].prices[0].currency.symbol} {samples[3].prices[0].amount}
                        </h6>
                    </ProductCard> */}
                </Product>
            </section>
    )}
}