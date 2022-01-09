import React, { useState } from 'react'
import Navmenubar from '../Home/Navmenubar'
import Data from '../Data'
import './CompleterDetails.css'
import { Link } from 'react-router-dom'
import { RiCreativeCommonsZeroLine } from 'react-icons/ri'
function CompleterDetails({ match }) {
    const images = ['', '../image/z-extra-1.jpg', "../image/z-extra-2.jpg", "../image/z-extra-3.jpg", "../image/z-extra-4.jpg"]
    const filterdData = Data.filter((filterdata) => {
        return (filterdata.id === Number(match.params.id))
    })
    images[0] = filterdData[0].image
    console.log()
    const [changeImage, setchangeImage] = useState(images[0])



    return (
        <section className='completerDetailsCompo '>
            <Navmenubar />
            <article className='upperheading'>
                <h1> <Link to="/" className='homeLink'>Home  </Link>  / <Link to="/Product" className='homeLink'>Product  </Link>/  </h1>
            </article>
            <article className='completerDetailsSection'>
                <div className='completerDetailsSection-RightSection'>
                    <div className='backToProduct'>
                        <button className='backToProductBtn'>Back To Product</button>
                    </div>
                    <div className='RightSectionImg'>
                        <img src={changeImage}></img>
                    </div>
                    <div className='slideImageShow'>
                        {
                            images.map((image, index) => {
                                console.log("images", image)
                                return (
                                    <div className='slideImageShowInMap' key={index}>
                                        <img src={image} className='slideImageShowMapImg' onClick={() => {
                                            setchangeImage(images[index])
                                            console.log(changeImage, index)
                                        }}></img>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='completerDetailsSection-LeftSection'></div>
            </article>

        </section>
    )
}
export default CompleterDetails
