import horyujii from "../assets/Images/horyujii.jpg"
import dewata from "../assets/Images/dewata.jpg"
import desert from "../assets/Images/desert.jpg"
import Destination from "./Destination"
import { useState } from "react"

const Slider = () => {
    const [destinations, setDestination] = useState([
        {
            image: horyujii,
            price: '$450',
            caption: 'Enjoy the beauty of horyuji temple Japan',
            location: 'Ikagura, Japan'
        },
        {
            image: dewata,
            price: '$550',
            caption: 'Enjoy the beauty of horyuji temple Japan',
            location: 'Ikagura, Japan'
        },
        {
            image: desert,
            price: '$450',
            caption: 'Enjoy the beauty of horyuji temple Japan',
            location: 'Ikagura, Japan'
        },
        {
            image: horyujii,
            price: '$250',
            caption: 'Enjoy the beauty of horyuji temple Japan',
            location: 'Ikagura, Japan'
        },
        {
            image: dewata,
            price: '$350',
            caption: 'Enjoy the beauty of horyuji temple Japan',
            location: 'Ikagura, Japan'
        },
        {
            image: desert,
            price: '$350',
            caption: 'Enjoy the beauty of horyuji temple Japan',
            location: 'Ikagura, Japan'
        }
    ])

    const leftSlider = (e) => {
        console.log(e.target)
    }
    const rightSlider = (e) => {
        console.log(e.target)
    }

    return (
        <div>
            <div className="slider">
                <div className="sliderDiv">
                    <p className="sliderHeader">What we serve</p>
                    <p className="sliderText">We Provide Top Destinations Expecially For You</p>
                </div>
                <div className="arrowClass">
                    <i className="fas fa-long-arrow-alt-left arrowRight" onClick={leftSlider}></i>
                    <i className="fas fa-long-arrow-alt-right arrowLeft" onClick={rightSlider}></i>
                </div>
            </div>
            <div className="sliderPics">
                {
                    destinations.map((destination, index) => {
                        return (
                            <Destination imgUrl={destination.image} price={destination.price} caption={destination.caption} location={destination.location} />
                        )
                    })
                }

                {/* <div className="sliderCard">
                    <img src={horyujii} alt="horyuji" className="imgPic"/>
                    <div className="price"><p>$450</p></div>
                    <div className="imgDescription">
                        <p className="imgCaption">Enjoy the beauty of horyuji temple Japan</p>
                        <p className="location">Ikagura, Japan</p>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="sliderCard">
                    <img src ={dewata} alt ="dewata" className="imgPic" />
                    <div className="price"><p>$550</p></div>
                    <div className="imgDescription">
                        <p className="imgCaption">Enjoy the beauty of the Dewata Bali Beach</p>
                        <p className="location">Bali, Indonesia</p>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="sliderCard">
                    <img src={desert} alt="horyuji" className="imgPic"/>
                    <div className="price"><p>$350</p></div>
                    <div className="imgDescription">
                        <p className="imgCaption">Travel through the desert and enjoy beautiful views
                        </p>
                        <p className="location">Skye, Scotlandia</p>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="sliderCard">
                    <img src={horyujii} alt="horyuji" className="imgPic"/>
                    <div className="price"><p>$450</p></div>
                    <div className="imgDescription">
                        <p className="imgCaption">Enjoy the beauty of horyuji temple Japan</p>
                        <p className="location">Ikagura, Japan</p>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="sliderCard">
                    <img src ={dewata} alt ="dewata" className="imgPic" />
                    <div className="price"><p>$550</p></div>
                    <div className="imgDescription">
                        <p className="imgCaption">Enjoy the beauty of the Dewata Bali Beach</p>
                        <p className="location">Bali, Indonesia</p>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="sliderCard">
                    <img src={desert} alt="horyuji" className="imgPic"/>
                    <div className="price"><p>$350</p></div>
                    <div className="imgDescription">
                        <p className="imgCaption">Travel through the desert and enjoy beautiful views
                        </p>
                        <p className="location">Skye, Scotlandia</p>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Slider