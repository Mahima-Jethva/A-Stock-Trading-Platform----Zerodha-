import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-5'>
            <div className='row mt-5'>
                <div className='col-4'>
                    <h1 className='mt-3 fs-2'>Unbeatable pricing</h1>
                    <p className='mt-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row p-2 text-center'>
                        <div className='col border'>
                            <h1 className='mt-5'><i class="fa fa-inr" aria-hidden="true"></i>0</h1>
                            <p className='p-2'>Free equity delivery and <br/> direct mutual funds</p>
                        </div>
                        <div className='col border'>
                            <h1 className='mt-5'><i class="fa fa-inr" aria-hidden="true"></i>20</h1>
                            <p className='p-2'>Intraday & F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
