import React, { useState, useEffect } from 'react';
import Navmenubar from './Mainpage/Home/Navmenubar'
import './Cart.css'
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import Footer from './Mainpage/Home/Footer';
import PriceDetails from './Mainpage/product/PriceDetails';

function Cart() {
    const [count, setcount] = useState(0)
    const localdata = JSON.parse(localStorage.getItem('cart'))
    useEffect(() => {
        return () => {
        };
    }, [count]);

    const handleRemoveButton = (uniqueid) => {
        let getDataLocalStore = JSON.parse(localStorage.getItem('cart'))
        const filtetremoveitem = getDataLocalStore.filter((item) => {
            return item.uniqueid !== uniqueid
        })
        localStorage.setItem('cart', JSON.stringify(filtetremoveitem))
        setcount(count + 1)
    }


    const itemNochangeHandle = (value, index) => {

        let result = JSON.parse(localStorage.getItem('cart'))
        const indexoffilter = result.map((i) => { return (i.uniqueid) }).indexOf(index)
        if (indexoffilter !== -1) {

            const totalNoItem = (value === true) ? result[indexoffilter].nocartitem + 1 : result[indexoffilter].nocartitem - 1

            if (result[indexoffilter].quantity >= totalNoItem && totalNoItem > 0) {
                result[indexoffilter].nocartitem = totalNoItem
                // updatelocalstore = [...result]
                localStorage.setItem('cart', JSON.stringify(result))
                setcount(count + 1)
            }
        }
    }

    if (localdata !== null && localdata.length !== 0) {
        return <section className='Cart_Maincontainer'>
            <Navmenubar />
            <div className="upperHeadingPageName">
                <h1>
                    <Link to="./" className='homeLink'>Home</Link>/Cart</h1>
            </div>
            <div className='contant_table'>
                <table>
                    <thead>
                        <tr>
                            <th className='thitem'>Item</th>
                            <th className='thprice'>Price</th>
                            <th className='thquantity'>Quantity</th>
                            <th className='thSubtotal'>Subtotal</th>
                        </tr>
                    </thead>
                </table>
                <hr className='hrCartLine1'></hr>
                {
                    localdata.map((item, index) => {
                        const valueOfSubtotal = item.nocartitem * item.price
                        return (
                            <div className='dynamicItemshow' key={index}>
                                <div className='itemimage'>
                                    <img src={item.image} alt="photo"></img>
                                    <div className='itemname'>{item.name}</div>
                                </div>
                                <div className='itemprice'>${item.price.toLocaleString('en-IN')}</div>

                                <div className='itemNochangeButton'>

                                    <button className='increment' onClick={() => {
                                        itemNochangeHandle(false, item.uniqueid)
                                    }} >-</button>
                                    <div className='noOfquantity'>{item.nocartitem} </div>

                                    <button className='decrement' onClick={() => {
                                        itemNochangeHandle(true, item.uniqueid)
                                    }}>+</button>
                                </div>
                                <div className='subtotal'>$
                                    {valueOfSubtotal.toLocaleString('en-IN')}</div>
                                <div className='divRemoveButton' >
                                    <button className='Removebutton' onClick={() => {
                                        handleRemoveButton(item.uniqueid)
                                    }}>
                                        <AiFillDelete /></button>
                                </div>
                            </div>
                        )
                    })
                }
                <hr className='hrCartLine1'></hr>
            </div>
            <div className='pricedetailsdiv'>
                <PriceDetails />
            </div>
            <Footer />
        </section>
    }
    else {
        return <section className='Cart_Maincontainer'>
            <Navmenubar />
            <div className="upperHeadingPageName">
                <h1>
                    <Link to="./" className='homeLink'>Home</Link>/Cart</h1>
            </div>
            <div className='cartEmpty'>
                <h1 className='cartEmptyheading'>Your cart is cart Empty</h1>
                <Link to="/Product">  <button className='cartEmptyBtn'>Fill IT</button>
                </Link>
            </div>

            <Footer />

        </section>
    }
}
export default Cart;

