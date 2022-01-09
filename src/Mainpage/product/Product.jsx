import React, { useState } from 'react'
import Cardcompo from './Cardcompo'
import Navmenubar from '../Home/Navmenubar'
import './Productcss.css'
import FilterdataCompo from './FilterdataCompo'
import Footer from '../Home/Footer'
import { Link } from "react-router-dom";

function Product(props) {
    const [passingData, setpassingData] = useState()
    const [inputgetdata, setinputgetdata] = useState()

    // console.log(passingData, "inside of product")
    return (<>
        <div className="About">
            <Navmenubar />

            <div className="upperHeadingPageName">
                <h1>
                    <Link to="./" className='homeLink'>Home  </Link>   /   product</h1>
            </div>

            <div className='productFlex'>
                <div className='FilterdataCompo'>
                    <FilterdataCompo setpassingData={setpassingData} setinputgetdata={setinputgetdata} />
                </div>
                <div className='Cardcompo'>

                    <Cardcompo value={passingData} inputgetdata={inputgetdata} />

                </div>
            </div>
            <div className='footerCompo' >
                <Footer />
            </div>
        </div>
    </>
    )
}

export default Product
