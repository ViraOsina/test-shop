import React from 'react';
import './Currency.css';

class Currency extends React.Component {
    constructor () {
        super ();
    }

    render(){
        return(
            <div className="currency__cover">
                <div className="currency__dropdown">
                    <button className="currency">$ USD</button>
                    <button className="currency">€ EUR</button>
                    <button className="currency">¥ JPY</button>
                </div>
            </div>
        )
    }
}

export default Currency;