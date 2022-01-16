import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';


const NavbarArea = ({title}) => {
    const scroller =()=> title.current.scrollIntoView();

    return (
        <div className="navbar" >
              <ReactBootStrap.Navbar fixed='top'  collapseOnSelect expand="md" bg="light" variant="light" style={{justifyContent:'space-evenly'}}>
                  <ReactBootStrap.Navbar.Brand style={{fontSize:'30px',fontFamily:'arial',fontWeight:'bolder'}}>Kuber E-Bikes</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                     <ReactBootStrap.Navbar.Collapse style={{width:'80%'}} className="justify-content-end" id="responsive-navbar-nav">
                        <ReactBootStrap.Nav style={{fontSize:'20px',fontFamily:'arial',fontWeight:'bolder',backgroundColor:'whitesmoke',marginLeft:"0px", right:'10px'}} ml={10} className="mr-auto">
                         <ReactBootStrap.Nav.Link>Home</ReactBootStrap.Nav.Link>
                         <ReactBootStrap.Nav.Link onClick={scroller} >About</ReactBootStrap.Nav.Link>
                          <ReactBootStrap.NavDropdown title="Models" id="collasible-nav-dropdown">
                            <ReactBootStrap.NavDropdown.Item >Jupiner</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item >Vamos </ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item >Festiva</ReactBootStrap.NavDropdown.Item>
                        </ReactBootStrap.NavDropdown>
                        <ReactBootStrap.Nav.Link>Become a Dealer</ReactBootStrap.Nav.Link>
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                 </ReactBootStrap.Navbar>
        </div>
    )
}

export default NavbarArea
