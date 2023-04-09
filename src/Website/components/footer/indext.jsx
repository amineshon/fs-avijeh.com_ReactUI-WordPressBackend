import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Logo from "../../assets/images/Logo/Logo.png";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }
  render() {
    return (
      <div className="row mt-5 ">
        <div className="container footer">
          <div className="row footer__row">
            <div className="col-sm-12 col-md-4 footer__adress">
              <p className="footer__adress__subtitle"> آدرس :</p>
              <p>
              تهران - خیابان فرجام -تقاطع حیدرخانی پلاک 706 واحد 1
              </p>
              <p className="footer__adress__subtitle">تلفن تماس: </p>
              <p>021-77035933</p>
              <p className="footer__adress__subtitle">فکس:</p>
              <p> 021-77252012</p>
            </div>
            <div className="col-sm-12 col-md-4">
              <div>
                <ul class="footer__nav-list">
                  <li class="footer__nav-item">
                    <a class="footer__link" href="#">
                      وبلاگ
                    </a>
                  </li>
                  <li class="footer__nav-item">
                    <a class="footer__link" href="#">
                      نمایندگی ها
                    </a>
                  </li>
                  <li class="footer__nav-item">
                    <a href="#" class="footer__link">
                      همکاری با فرآسازان آویژه
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 footer__flex">
              <div className="">
                <img className="header__logo" src={Logo} alt="Logo" />
              </div>
              <div className="mt-5">
                <img
                  className="footer__socilaMedia-icon"
                  src="https://fs-avijeh.com/wp-content/uploads/2020/11/instagram.svg"
                  alt=""
                />
                <img
                  className="footer__socilaMedia-icon"
                  src="https://fs-avijeh.com/wp-content/uploads/2020/11/linkedin.svg"
                  alt=""
                />
                <img
                  className="footer__socilaMedia-icon"
                  src="https://fs-avijeh.com/wp-content/uploads/2020/11/whatsapp.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container copyright">
            <div className="row">
            <div className="row">
                        <div class="col-12">
                            <p class="footer__copy-right mb-0">
                                <span>کلیه حقوق این سایت متعلق به شرکت فرآسازان آویژه می‌باشد</span>
                                <span>(fs-avijeh)</span><span> می باشد</span>
                            </p>
                            <p class="footer__copy-version mb-0">
                                <span>V</span>
                                <span>1.0.0</span>
                                <span>©</span>
                                <span>2020</span>
                                <span>fs-avijeh.com/</span>
                                </p>
                        </div>
                      </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
