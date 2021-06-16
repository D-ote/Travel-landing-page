import image from "../assets/Images/yellowBus.jpg"
import Button from "./Button"

const Experience = () => {
    return (
        <div className="experience">
            <div className="firstDiv">
                <p className="experienceIntro">our experience</p>
                <div className="topicDiv"><p className="experienceTopic">With Our Experience We Will Serve You</p>
                <p className="experienceText">Since we first opened, we have always patronized the convinience of our users by providing low prices and with a fast and easy process ensuring the utmost satisfaction of our customers.</p></div>
                <Button className="experienceBtn" buttonText="Learn More" />
                <table>
                    <thead>
                        <tr>
                            <th>20</th>
                            <th>65</th>
                            <th>500+</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="firstRow">
                            <td>Years</td>
                            <td>Destination</td>
                            <td>Tourist</td>
                        </tr>
                        <tr>
                            <td>Experience</td>
                            <td>Collaboration</td>
                            <td>Destination</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="secondDiv">
                {/* <div className="travelPic"> */}
                    <img src={image} alt="travel" className="imageClass" />
                {/* </div> */}
                <div className="travelTag">
                    <div className="travelIcon"><i className="fas fa-quote-left"></i></div>
                    <p>The health benefits of traveling have been scientifically proven. Traveling can reduce stress and depression.</p>
                </div>
            </div>
        </div>
    )
}

export default Experience