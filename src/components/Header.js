import Button from "./Button"

const Header = () => {
    return (
        <div>
            <header>
                <div className="logoDiv">
                    <p>Jalanin</p>
                </div>
                <ul className="headerUl">
                    <li>Home</li>
                    <li>About</li>
                    <li>Features</li>
                    <li>News</li>
                    <li>Contact</li>
                    <li><Button className="headerBtn" buttonText="Login" /></li>
                </ul>
      <div className="burger">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
            </header>
        </div>
    )
}

export default Header