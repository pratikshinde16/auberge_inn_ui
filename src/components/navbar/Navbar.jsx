import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">I am Booking</span>
            <div className="navItems">
                <button className="navbutton">Register</button>
                <button className="navbutton">Log in</button>

            </div>
        </div>
    </div>
  )
}

export default Navbar