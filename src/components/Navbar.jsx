import { Navbar as Nav } from "react-bootstrap"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav bg="dark" variant="dark" style={{ "zIndex": "100" }}>
        <div className="container">
            <Link style={{ "textDecoration": "none" }} to='/'><Nav.Brand>Pokedex</Nav.Brand></Link>
        </div>
    </Nav>
  )
}

export default Navbar