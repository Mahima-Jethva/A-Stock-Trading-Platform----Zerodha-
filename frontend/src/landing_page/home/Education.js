import React from 'react';

function Education() {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <div className='col-6'>
                    <img src='/images/index-education.svg' alt='education'/>
                </div>
                <div className='col-6'>
                    <h3 className='mt-5'>Free and open market education</h3>
                    <p className='p-1 mt-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:"none"}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <h1 className='mt-3'></h1>
                    <p className='p-1'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration:"none"}}>Trading Q&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;
