import rocks from "../assets/Images/manRocks.jpg"
import bike from "../assets/Images/bike.jpg"
import desert from "../assets/Images/desertd.jpg"
import driving from "../assets/Images/driving.jpg"
import horyuji from "../assets/Images/horyuji.jpg"
import lonelyRoad from "../assets/Images/lonelyRoad.jpg"
import cityView1 from "../assets/Images/cityView1.jpg"
import boatRide from "../assets/Images/boatRide.jpg"
import Button from "./Button"

const About = () => {
    return (
        <div className="aboutSection">
            <div className="flex">
                <div className="about">
                    <p className="aboutUs">About us</p>
                    <p className="aboutText">Explore All Corners Of The World With Us</p>
                </div>
                <div className="learn">
                    <p className="learnMore">We always make our customers happy by providing as many choices as possible for top tourist destinations for you with advantages that have never been seen anywhere else as below.</p>
                    <Button buttonText="Learn More" className="learnMoreBtn" />
                </div>
            </div>
            <div className="carousel">
                <div className="learnCard">
                    <img src={rocks} alt="rocks" className="rocks" />
                </div>
                <div className="learnCard1">
                    <div>
                        <img src={bike} alt="bike" className="rocks" />
                    <div className="carouselCaption">
                        <div className="quote"><i class="fas fa-quote-left"></i></div>
                        <p className="carouselHeader">Faroe Islands</p>
                        <p className="carosuelText">We always make our customers happy by providing as many choices as possible for top tourist destinations for you with advantages that have never been seen anywhere else as below.</p>
                    </div>
                    </div>
                    <div>
                            <img src={desert} alt="rocks" className="rocks" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About 