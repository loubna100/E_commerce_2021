import 'bootstrap/dist/css/bootstrap.min.css'; // npm install bootstrap 
import '@fortawesome/fontawesome-free/css/all.min.css'; // npm install @fortawesome/fontawesome-free
import { NavDropdown, Nav } from 'react-bootstrap';// npm install react-bootstrap
import './css/styleHeader.css' //  importer fichier  style.css  
import About from './About'; // importer About.js 
import Home from './PageHome/Home';// importer Home.js
import Shop from './PageShop/Shop';
import Detail from './PageDescription/Detail';
import Panier from './pagePanier/Panier';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";//npm install --save react-router-dom


function Header() {

    const navDropdownTitle = (   <i className="fa fa-user"></i>);
  return (
   <div>
    <div className="top-bar">
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-6">
                <i className="fa fa-envelope"></i>
                support@email.com
            </div>
            <div className="col-sm-6">
                <i className="fa fa-phone-alt"></i>
                +012-345-6789
            </div>
        </div>
    </div>
    </div>

 <Router>
<div className="nav">
<div className="container-fluid">
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a href="#" className="navbar-brand">MENU</a>
    
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav mr-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
               
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>

            <Nav.Link as={Link} to="/about">About</Nav.Link>
 
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
 
        </div>
            <div className="navbar-nav ml-auto">
            <NavDropdown  title={navDropdownTitle} id="basic-nav-dropdown">
          
          <NavDropdown.Item className="LinkNave" href="#action/3.1">Login</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Register</NavDropdown.Item>
        </NavDropdown>
            </div>
        </div>
    </nav>
</div>
</div>
<div className="bottom-bar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <div className="logo">
                            <a href="">
                               <img src="images\logo.jpg" />
                                <span className="siteName">E-Shop</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="search">
                            <input type="text" placeholder="Search"/>
                            <button><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="user">
                        <Link to="/favoris" className="btn wishlist">
                                <i className="fa fa-heart"></i>
                                <span>(0)</span>
                            </Link>
                            <Link to="/panier" className="btn wishlist">
                                <i className="fa fa-shopping-cart"></i>
                                <span>(0))</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
</div>
<div><div>
                       
                </div>
                <Switch>
           
                <Route path="/panier">
                            <Panier/>
                        </Route>
                      <Route path="/detail">
                            <Detail />
                        </Route>
                       <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/shop">
                            <Shop />
                            </Route>
                            <Route path="/">
                            <Home />
                        </Route>
                   </Switch>
                </div>
</Router>


</div>
  );
}

export default Header;