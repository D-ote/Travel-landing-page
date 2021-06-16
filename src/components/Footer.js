const Footer = () => {
    return (
            <footer>
                <div className="footer">
                    <p className="footerHead">Subscribe To Get The Latest News About Us</p>
                    <p className="footerFoot">We recommend you subscribe to our newspaper. Enter your email below to get daily updates about us.</p>
                    <form className="input">
                        <input type="email" placeholder="Enter your email address" className="email" />
                        <div className="btnDiv">
                        <button className="subscribeBtn" type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
                <div className="footerBase">
                    <p>JALANIN 2020. All rights reserved.</p>
                    <ul className="footerList">
                        <li><i className="fab fa-whatsapp"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                    </ul>
                </div>
            </footer> 
    )
}

export default Footer