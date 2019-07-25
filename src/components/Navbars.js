import React ,{Component} from 'react' ;
import {Navbar,Nav} from 'react-bootstrap'
import {Link}  from 'react-router-dom'
class Navbars extends Component {

render () {
            return (
                <div>
                    <Navbar bg="light" expand="lg">
                    <Navbar.Brand ><Link to="/">React-bootstrap</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Item ><Link to="/">Home</Link></Nav.Item><span>&nbsp;&nbsp;</span>
                        <Nav.Item ><Link to="/about">About</Link></Nav.Item><span>&nbsp;&nbsp;</span>
                        </Nav>
                        <Nav.Item ><Link to="/login">Sing in</Link></Nav.Item> <span>&nbsp;&nbsp;</span>
                        <Nav.Item ><Link to="/register">Sing up</Link></Nav.Item><span>&nbsp;&nbsp;</span>
                    </Navbar.Collapse>
                    </Navbar>
                </div>
            )

        }

}
export default Navbars