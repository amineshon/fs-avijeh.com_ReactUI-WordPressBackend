import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../assets/stayle/css/color-palet.scss";
import "./index.css";
import Logo from "../../assets/images/Logo/Logo.png";
import { Nav } from "react-bootstrap";
import Burgermenu from "../../assets/images/img/menu.svg";
import Costomer from "../../assets/images/img/customer-service.svg"

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }
  render() {
    return (
      <div className="row header-box">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div class="header-box__crm CRM">
                <a className="header-box__CRM__phone" href="tel:+982191020345">
                <img className="header-box__CRM__logo" src={Costomer} alt=""/>
                  <span>021-91020345</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container header">
          <div className="row header__container mt-3">
            <div className="">
              <img className="header__logo" src={Logo} alt="Logo" />
            </div>
            <div className=" d-md-none d-lg-none d-sm-block">
              <div className="header__burger-menu">
                <img
                  onClick={() => {
                    this.setState({ toggle: !this.state.toggle });
                  }}
                  className="header__burger-menu__img"
                  src="https://fs-avijeh.com/wp-content/uploads/2020/11/menu.svg"
                  alt="Burgermenu"
                />
              </div>
              {this.state.toggle ? (
                <div className="ul header__menu">
                  {/*
                                <div className="li">
                                    <NavDropdown title="Contact Us" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </div>
*/}
                  <Nav.Link href="https://fs-avijeh.com/%d8%aa%d9%85%d8%a7%d8%b3-%d8%a8%d8%a7-%d9%85%d8%a7/ ">
                    تماس با ما
                  </Nav.Link>
                  <Nav.Link href="https://fs-avijeh.com/list-price-products/">
                    قیمت محصول
                  </Nav.Link>
                  <Nav.Link href="https://fs-avijeh.com/%d9%86%d9%85%d8%a7%db%8c%d9%86%d8%af%da%af%d8%a7%d9%86/">
                    نمایندگان
                  </Nav.Link>
                  <Nav.Link href="https://fs-avijeh.com/%d9%be%d8%b1%d9%88%da%98%d9%87_%d9%87%d8%a7/">
                    پروژه ها
                  </Nav.Link>
                  <Nav.Link href="https://fs-avijeh.com/%d9%85%d8%b3%d8%aa%d9%86%d8%af%d8%a7%d8%aa/">
                    مستندات
                  </Nav.Link>
                  <Nav.Link href="https://fs-avijeh.com">خانه</Nav.Link>
                </div>
              ) : null}
            </div>
            <div className="header__dis-des">
              <div className="header__burger-menu">
                <img
                  className="header__burger-menu__img"
                  src={Burgermenu}
                  alt="Burgermenu"
                />
              </div>
              <div className="ul header__menu">
                <Nav.Link href="https://fs-avijeh.com/%d8%aa%d9%85%d8%a7%d8%b3-%d8%a8%d8%a7-%d9%85%d8%a7/ ">
                  تماس با ما
                </Nav.Link>
                <Nav.Link href="https://fs-avijeh.com/list-price-products/">
                  قیمت محصول
                </Nav.Link>
                <Nav.Link href="https://fs-avijeh.com/%d9%86%d9%85%d8%a7%db%8c%d9%86%d8%af%da%af%d8%a7%d9%86/">
                  نمایندگان
                </Nav.Link>
                <Nav.Link href="https://fs-avijeh.com/%d9%be%d8%b1%d9%88%da%98%d9%87_%d9%87%d8%a7/">
                  پروژه ها
                </Nav.Link>
                <Nav.Link href="https://fs-avijeh.com/%d9%85%d8%b3%d8%aa%d9%86%d8%af%d8%a7%d8%aa/">
                  مستندات
                </Nav.Link>
                <Nav.Link href="https://fs-avijeh.com">خانه</Nav.Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
