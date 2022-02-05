import React, { useState } from 'react';
import '../product/detailsprice.css'

function PriceDetails(props) {
    const [totalprice, settotalprice] = useState(0);
    const getlocaldata = JSON.parse(localStorage.getItem('cart'))
    let add = 0

    let subtotalprice = getlocaldata.map((item) => { return item.nocartitem * item.price }).reduce((total, price) => {
        return total + price
    })
    let toalvalue = subtotalprice + 5
    return <section className='priceDetailscontainer'>
        <div className='Subtotal' >
            <p className='SubtotalTag' >Subtotal :</p>
            <p className='Subtotalprice' >${subtotalprice.toLocaleString('en-IN')}</p>
        </div>
        <div className='Shipping' >
            <p className='ShippingTag' >Shipping Fee :</p>
            <p className='Shippingprice' >$5</p>
        </div>
        <hr className='hrpriceLine'></hr>
        <div className='total' >
            <h5 className='totalTag' >Order Total :</h5>
            <p className='totalprice' >${toalvalue.toLocaleString('en-IN')}</p>
        </div>
    </section>
}

export default PriceDetails;
