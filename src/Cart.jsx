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
    console.log(localdata)
    useEffect(() => {
        return () => {
        };
    }, [count]);

    const handleRemoveButton = (uniqueid) => {
        console.log('function work', uniqueid)
        let getDataLocalStore = JSON.parse(localStorage.getItem('cart'))
        const filtetremoveitem = getDataLocalStore.filter((item) => {
            return item.uniqueid !== uniqueid
        })
        localStorage.setItem('cart', JSON.stringify(filtetremoveitem))
        setcount(count + 1)
    }


    const itemNochangeHandle = (value, index) => {
        // console.log(value, index)
        let result = JSON.parse(localStorage.getItem('cart'))
        const indexoffilter = result.map((i) => { return (i.uniqueid) }).indexOf(index)
        // console.log(indexoffilter)
        if (indexoffilter != -1) {
            let updatelocalstore = []
            const getitem = JSON.parse(localStorage.getItem('cart'))
            const totalNoItem = (value == true) ? result[indexoffilter].nocartitem + 1 : result[indexoffilter].nocartitem - 1
            console.log(result[indexoffilter].nocartitem, "result[indexoffilter].nocartitem")

            console.log(result[indexoffilter].quantity, "result[indexoffilter].quantity")
            if (result[indexoffilter].quantity >= totalNoItem && totalNoItem > 0) {

                result[indexoffilter].nocartitem = totalNoItem
                updatelocalstore = [...result]
                localStorage.setItem('cart', JSON.stringify(result))
                setcount(count + 1)
            }

        }
    }
    console.log(localdata, 'localStorage.getItem.length')
    if (localdata.length !== 0 && localdata !== undefined) {
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
                        console.log(valueOfSubtotal, item.nocartitem)
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

