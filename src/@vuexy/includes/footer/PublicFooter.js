import React from "react";
import ScrollToTop from "react-scroll-up";
import { Button } from "reactstrap";
import styled from "styled-components";
import { ArrowUp } from "react-bootstrap-icons";
import dayjs from "dayjs";

export const EUFlag = styled.img`
  max-width: 500px;
  width: 100%;
  display: block;
  margin: 0 auto;
`;

const PublicFooter = () => {
  return (
    <>
      <footer className="bg-primary text-white mt-auto public-footer">
        <ScrollToTop showUnder={160}>
          <Button color="primary" className="btn-icon scroll-top">
            <ArrowUp size={15} />
          </Button>
        </ScrollToTop>
        <div className="footer">
          <div className="container">
            {/* <div className="row justify-content-between">
              <div className="col-xl-12">
                <div className="row">
                  <div
                    className="col-xl-3 col-lg-4 col-md-6 wow fadeInDown"
                    data-wow-duration="0.3s"
                    data-wow-delay="0.4s"
                  >
                    <div className="footer-box">
                      <h4 className="lasthead">Company</h4>
                      <ul className="footer-link">
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-4 col-md-6 wow fadeInDown"
                    data-wow-duration="0.4s"
                    data-wow-delay="0.4s"
                  >
                    <div className="footer-box">
                      <h4 className="lasthead">Support</h4>
                      <ul className="footer-link">
                        <li>
                          <a href="#">FAQ</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                        <li>
                          <a href="#">Knowledge Base</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-4 col-md-6 wow fadeInDown"
                    data-wow-duration="0.5s"
                    data-wow-delay="0.5s"
                  >
                    <div className="footer-box">
                      <h4 className="lasthead">Policy</h4>
                      <ul className="footer-link">
                        <li>
                          <a href="#">Terms of use</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Refund Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-4 col-md-6 wow fadeInDown"
                    data-wow-duration="0.6s"
                    data-wow-delay="0.6s"
                  >
                    <div className="footer-box">
                      <h4 className="lasthead">Kontakt</h4>
                      <ul className="footer-link">
                        <li> support@mansard </li>
                        <li> +48 535-077-291 </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="row">
              <div className="col-12 text-center">
                <div className="footer-bottom">
                  <div
                    className="content wow fadeInUp"
                    data-wow-duration="0.5s"
                    data-wow-delay="0.4s"
                  >
                    <p className="text">
                      Copyright &copy; 2021. Wszelkie prawa zastrzeżone{" "}
                      <a href="#">Mansard</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PublicFooter;
