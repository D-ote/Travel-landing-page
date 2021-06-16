const Destination = ({imgUrl, price, caption, location}) => {
    return (
        <div className="sliderCard">
            <img src={imgUrl} alt="horyuji" className="imgPic"/>
            <div className="price"><p>{price}</p></div>
            <div className="imgDescription">
                <p className="imgCaption">{caption}</p>
                <p className="location">{location}</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
            </div>
        </div>  
    )
}

export default Destination