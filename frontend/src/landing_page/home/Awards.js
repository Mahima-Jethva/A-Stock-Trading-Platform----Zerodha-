import React from 'react';

function Awards() {
    return (
        <div className = 'container p-5 mb-5'>
            <div className = 'row'>
                <div className= 'col-6 p-5 '>
                <img src='/images/largestBroker.svg' alt='Largest Broker'/>
                </div>
                <div className= 'col-6'>
                <h1 className = 'mb-4 mt-5'>Largest StockBroker in India</h1>
                <p className='mb-5'>2+ million clients contribute around 15% of the total trading volume.
                In India, Zerodha is the largest stockbroker in terms of active clients and daily trading volume. The company has over 2 million clients 
                and contributes around 15% of the total trading volume in India.
                </p>
                <div className='row'>
                    <div className='col-6'>
                        <ul>
                    <li>
                        <p>Future and Options</p>
                    </li>
                    <li>
                        <p>Commodity derivatives</p>
                    </li>
                    <li>
                        <p>Currency derivatives</p>
                    </li>
                </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                    <li>
                        <p>Stocks & IPO's</p>
                    </li>
                    <li>
                        <p>Direct Mutual Funds</p>
                    </li>
                    <li>
                        <p>Bonds and Fundings</p>
                    </li>
                </ul>
                    </div>
                </div>
                    <img src='/images/pressLogos.png' alt='awards' style={{ width: '85%' }}/>
                </div>
            </div>
        </div>
    );
}
export default Awards;