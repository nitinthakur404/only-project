import React, { useState } from 'react'
import Navmenubar from '../Home/Navmenubar'
import Data from '../Data'
import './CompleterDetails.css'
import { Link } from 'react-router-dom'


function CompleterDetails({ match }) {
    const images = ['', '../image/z-extra-1.jpg', "../image/z-extra-2.jpg", "../image/z-extra-3.jpg", "../image/z-extra-4.jpg"]
    const filterdData = Data.filter((filterdata) => {
        return (filterdata.id === Number(match.params.id))
    })
    images[0] = filterdData[0].image
    // console.log()
    const [changeImage, setchangeImage] = useState(images[0])
    const [noOfitems, setnoOfitems] = useState(1)
    const [storeInLocal, setstoreInLocal] = useState([])
    const filtereddata = filterdData[0]
    let detailsObject = {
        uniqueid: filtereddata.id,
        image: filtereddata.image,
        name: filtereddata.name,
        nocartitem: noOfitems,
        price: filtereddata.price,
        quantity: filtereddata.quantity
    }
    // console.log(obj1, "obj1")

    const handlecartaddbutton = (obj) => {

        if ((localStorage.cart) == null || (localStorage.cart) == '[]') {
            storeInLocal.push(obj)
            localStorage.setItem('cart', JSON.stringify(storeInLocal))
            setstoreInLocal([])

        }
        else {
            let result = JSON.parse(localStorage.getItem('cart'))
            const indexoffilter = result.map((i) => { return (i.uniqueid) }).indexOf(obj.uniqueid)

            if (indexoffilter != -1) {
                const getitem = JSON.parse(localStorage.getItem('cart'))
                const totalNoItem = result[indexoffilter].nocartitem + obj.nocartitem
                let updatelocalstore = []

                if (result[indexoffilter].quantity <= result[indexoffilter].nocartitem) {

                }
                else {
                    result[indexoffilter].nocartitem = totalNoItem
                    updatelocalstore = [...result]
                    localStorage.setItem('cart', JSON.stringify(result))
                }

            }
            else {
                console.log("we are in the right path")
                // console.log(result, "result else")
                result.push(obj)
                localStorage.setItem('cart', JSON.stringify(result))

            }


        }
    }

    return (
        <section className='completerDetailsCompo'>
            <Navmenubar />

            <article className='upperheading'>
                <h1> <Link to="/" className='homeLink'>Home </Link>  / <Link to="/Product" className='homeLink'>Product</Link>/ {filtereddata.name}  </h1>
            </article>
            <article className='completerDetailsSection'>
                <div className='completerDetailsSection-RightSection'>
                    <div className='backToProduct'>
                        <Link to="/Product" >   <button className='backToProductBtn'>
                            Back To Product   </button></Link>
                    </div>
                    <div className='RightSectionImg'>
                        <img src={changeImage}></img>
                    </div>
                    <div className='slideImageShow'>
                        {
                            images.map((image, index) => {
                                {/* console.log("images", image) */ }
                                return (
                                    <div className='slideImageShowInMap' key={index}>
                                        <img src={image} className={(changeImage == images[index]) ? 'activeed' : 'nulled'} onClick={() => {
                                            setchangeImage(images[index])
                                        }}></img>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='completerDetailsSection-LeftSection'>
                    <div className='nameHeading'>
                        <p>{filtereddata.name}</p>
                    </div>
                    <div className='price'>
                        <p> ${filtereddata.price}</p>
                    </div>
                    <div className='productDetails'>
                        <p>{filtereddata.info}</p>
                    </div>
                    <div className='stockcheck'>
                        <p><span className='span1'>Available : </span>{(filtereddata.Available == true) ? 'in stock' : 'out of stock'}</p>
                    </div>
                    <div className='stockcheck'>
                        <p><span className='span1'>Brand : </span>{filtereddata.Brand}</p>
                    </div>
                    <hr className='horizantalline'></hr>
                    <div className='addToCartShowToggle'>
                        {
                            (filtereddata.Available == true) ?
                                <div>
                                    <div className='addToCartShowDiv '>

                                        <button className='removebutton samebutton' onClick={() => {
                                            return (noOfitems > 1) ? setnoOfitems(noOfitems - 1) : null

                                        }}>-</button>

                                        <div className='itemNoShow'>{noOfitems}</div>
                                        <button className='addbutton samebutton'
                                            onClick={() => {
                                                return (noOfitems < filtereddata.quantity) ? setnoOfitems(noOfitems + 1) : null
                                            }}>+</button>
                                    </div>
                                    <button className='addtocartbutton' onClick={() => { handlecartaddbutton(detailsObject) }}>
                                        Add to cart</button>


                                </div>
                                : null
                        }

                    </div>
                </div>

            </article>

        </section>
    )
}

export default CompleterDetails

//  <div className='addToCartShowDiv '>

// <button className='removebutton samebutton' onClick={() => {
//     return (noOfitems > 0) ? setnoOfitems(noOfitems - 1) : null

// }}>-</button>

// <div className='itemNoShow'>{noOfitems}</div>


// <button className='addbutton samebutton'
//     onClick={() => {
//         return (noOfitems < filtereddata.quantity) ? setnoOfitems(noOfitems + 1) : null
//     }}>+</button>

// </div>




// filter


        //     result.filter((element, index) => {

                // if (obj.uniqueid == element.uniqueid) {
                //     let updatelocalstore = []
                //     const getitem = JSON.parse(localStorage.getItem('cart'))
                //     const totalNoItem = result[index].nocartitem + obj.nocartitem
                //     result[index].nocartitem = totalNoItem
                //     // updatelocalstore = [...result]
                //     localStorage.setItem('cart', JSON.stringify(result))

                // }
                // if (element.uniqueid != obj.uniqueid) {
                //     // console.log(result, "result else")
                //     result.push(obj)
                //     localStorage.setItem('cart', JSON.stringify(result))
                // }
            // })
            // console.log(JSON.parse(localStorage.cart))
        // }