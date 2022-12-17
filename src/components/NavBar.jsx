import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { getAllMovie, searchMovie } from "../redux/actions/movieActions";
import logo from "../images/logo.png";
import "./Navbar.css"

export default function NavBar() {
  const dispatch = useDispatch();
  const onSearch = (word) => {
    search(word);
  };

  // Get Searched Movies
  const search = async (word) => {
    if (word === "") {
      dispatch(getAllMovie());
    } else {
      dispatch(searchMovie(word));
    }
  };

  return (
    // <nav className="navbar nav py-3 " style={{backgroundColor:"#301A59"}}>
    //   <div className="row w-100">
    //     <div className=" container d-flex align-items-center  justify-content-center ">
    //       <div className="col-4">
    //         <span className="fs-4 fw-bold text-white">Movie App</span>
    //       </div>
    //       <div className="col-6">
    //         <form className="d-flex  align-items-center bg-white px-2" style={{borderRadius:"20px"}}>
    //           <i className="fa fa-search me-1" />
    //           <input
    //             type="text"
    //             onChange={(e)=> onSearch(e.target.value)}
    //             placeholder="Search"
    //             className=" border-0 outline-none "
    //             style={{outline:"none" , height:"35px" , borderRadius:"20px"}}
    //           />
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </nav>

    /// ================== New Navbar==============

    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <NavDropdown title="MOVIE" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Movie</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Movie Details
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#tvShow">TV SHOW</Nav.Link>
            <Nav.Link href="#pricing">PRICING</Nav.Link>
            <NavDropdown title="BLOG" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Our Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Blog Details
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">CONTACTS</Nav.Link>
            <Form
              className="d-flex  align-items-center px-2"
            >
              <i className="fa fa-search me-1" ></i>
              <input
                type="text"
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search"
              />
            </Form>
            <Button>Sing in</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
