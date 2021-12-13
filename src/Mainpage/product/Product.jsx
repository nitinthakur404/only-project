import React from 'react'
// import Card1 from './Card1'
import Navmenubar from '../Home/Navmenubar'
import card1 from './Card1'
import Filter from './Filter'
function Product() {
   
    return (
        <div className="About">
            <Navmenubar/>
            <Filter/>
            {/* <Card1/> */}
            {/* <p>this is product page</p> */}
        </div>
    )
}

export default Product
