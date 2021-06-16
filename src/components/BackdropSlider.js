// import Backdrop from "./Backdrop";

const BackdropSlider = ( {image, text1, text2} ) => {
    let pic = 0;

    const scrollUp = () => {
        back
    }

    const scrollDown = () => {
        console.log('clicked1')
    }

    return (
        <div>
            <img src={image} alt="image" className="backdrop" />
            <div className="backdropTextDiv">
                <p className="backdropText">{text1} <p className="p2" style={{ color: 'white' }}>{text2}</p></p>
            </div>
            <div className="playIcon"><i className="far fa-play-circle icon"></i>Watch Video</div>
            <ul className="count">
                <li>01</li>
                <li className="small"><i class="fas fa-circle"></i></li>
                <li className="orangeIcon"><i class="far fa-dot-circle"></i></li>
                <li className="small"><i className="fas fa-circle"></i></li>
                <li>05</li>
            </ul>
            <ul className="arrow">
                <li><i className="fas fa-chevron-up" onClick={scrollUp}></i></li>
                <li><i className="fas fa-chevron-down" onClick={scrollDown}></i></li>
            </ul>
            <div className="itineraryTable">
                <table>
                    <tbody>
                        <tr>
                            <td>Location <i className="fas fa-chevron-down"></i></td>
                            <td>Date <i className="fas fa-chevron-down"></i></td>
                            <td>Average Price <i className="fas fa-chevron-down"></i></td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th>Italia</th>
                            <th>Mon, 3 Nov</th>
                            <th>$400 - $600</th>
                        </tr>
                    </thead>
                </table>
                <button className="itineraryBtn">Search</button>
            </div>
        </div>
    )
}

export default BackdropSlider