import React from 'react';
import '../product/detailsprice.css'

function PriceDetails() {
    
    return <section className='priceDetailscontainer'>
        <div className='Subtotal' >
            <h5 className='SubtotalTag' >Subtotal :</h5>
            <p className='Subtotalprice' >$401</p>
        </div>
        <div className='Subtotal' >
            <h5 className='SubtotalTag' >Subtotal :</h5>
            <p className='Subtotalprice' >$401</p>
        </div>
        <hr className='hrpriceLine'></hr>
        <div className='Subtotal' >
            <h5 className='SubtotalTag' >Subtotal :</h5>
            <p className='Subtotalprice' >$401</p>
        </div>
    </section>
}

export default PriceDetails;
