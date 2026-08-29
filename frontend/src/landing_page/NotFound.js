import React from 'react';

function NotFound() {
    return ( 
        <div className = 'container p-5'>
            <div className = 'row text-center'>
                <h3 className = 'mt-5 fs-4'>404 Not Found</h3>
                <p className = 'mt-2 fs-5 text-muted'>
                {/* Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades. */}
                Sorry, the page u are looking for does not exist.
                </p>
                {/* <button className = 'pt-14 pb-20 btn btn-primary fs-16 mb-5 mt-3 btn-lg' 
                style = {{margin:"0 auto", height:"10%", width:"15%", 
                backgroundColor:"#4285f4", borderRadius:"4px"}}>
                Go Home</button> */}
                <hr/>
            </div>
        </div>
     );
}

export default NotFound;