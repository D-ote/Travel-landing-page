import image from "../assets/Images/picNic2.jpg"

const Backdrop = () => {
    return (
        <div style={{ backgroundImage: `url(${image})`, height: '720px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} className="backdrop">
            <div className="backdropTextDiv">
                <p className="backdropText">Book With Us And Book It Out Of Here!</p>
            </div>
            <div className="playIcon"><i className="far fa-play-circle icon"></i>Watch Video</div>
            <ul className="count">
                <li>01</li>
                <li className="small"><i class="fas fa-circle"></i></li>
                <li><i class="far fa-dot-circle" style={{color:'orange'}}></i></li>
                <li className="small"><i className="fas fa-circle"></i></li>
                <li>05</li>
            </ul>
            <ul className="arrow">
                <li><i className="fas fa-chevron-up"></i></li>
                <li><i className="fas fa-chevron-down"></i></li>
            </ul>
            <div className="itineraryTable">
                <table>
                    <thead>
                        <tr>
                            <td>Location <i className="fas fa-chevron-down"></i></td>
                            <td>Date <i className="fas fa-chevron-down"></i></td>
                            <td>Average Price <i className="fas fa-chevron-down"></i></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Italia</th>
                            <th>Mon, 3 Nov</th>
                            <th>$400 - $600</th>
                        </tr>
                    </tbody>
                </table>
                <button className="itineraryBtn">Search</button>
            </div>
        </div>
    )
}

export default Backdrop