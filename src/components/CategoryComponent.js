import React from 'react';
import { sample, samples } from '../shared/more-products';

export default class Category extends React.Component {
    render() { 
        return (
            <section className="category">
                <h1 className="title">
                    Category name
                </h1>
                <div className="product-card">
                    <div className="product-image">
                        <img src={samples[0].gallery[0]} alt="product" />
                    </div>
                    <div className="product-info">
                        <h5>
                            {samples[0].name}
                        </h5>
                        <h6>
                            {samples[0].prices[0].symbol}{samples[0].prices[0].amount}
                        </h6>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={samples[1].gallery[0]} alt="product" />
                    </div>
                    <div className="product-info">
                        <h5>
                            {samples[1].name}
                        </h5>
                        <h6>
                            {samples[1].prices[0].symbol}{samples[1].prices[0].amount}
                        </h6>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={samples[2].gallery[0]} alt="product" />
                    </div>
                    <div className="product-info">
                        <h5>
                            {samples[2].name}
                        </h5>
                        <h6>
                            {samples[2].prices[0].symbol}{samples[2].prices[0].amount}
                        </h6>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={samples[3].gallery[0]} alt="product" />
                    </div>
                    <div className="product-info">
                        <h5>
                            {samples[3].name}
                        </h5>
                        <h6>
                            {samples[3].prices[0].symbol}{samples[3].prices[0].amount}
                        </h6>
                    </div>
                </div>
            </section>
    )}
}