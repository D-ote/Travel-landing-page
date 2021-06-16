const AboutCard = ({ imgUrl, carouselHeader, carouselText }) => {
    return (
        <div className="learnCard">
            <img src={imgUrl} alt="rocks" className="rocks" />
            <div className="carouselCaption">
                <div className="quote"><i className="fas fa-quote-left"></i></div>
                <p className="carouselHeader">{carouselHeader}</p>
                <p className="carosuelText">{carouselText}</p>
            </div>
        </div>
    )
}

export default AboutCard