function Footer() {
  return (
    <>
      <div className="footer-top section">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img
                src="./assets/images/logo.svg"
                width="160"
                height="50"
                alt="Footcap logo"
              />
            </a>

            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-pinterest"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-link-box">
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Contact Us</p>
              </li>

              <li>
                <address className="footer-link">
                  <ion-icon name="location"></ion-icon>

                  <span className="footer-link-text">
                    2751 S Parker Rd, Aurora, CO 80014, United States
                  </span>
                </address>
              </li>

              <li>
                <a href="tel:+557343673257" className="footer-link">
                  <ion-icon name="call"></ion-icon>

                  <span className="footer-link-text">+557343673257</span>
                </a>
              </li>

              <li>
                <a href="mailto:footcap@help.com" className="footer-link">
                  <ion-icon name="mail"></ion-icon>

                  <span className="footer-link-text">footcap@help.com</span>
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">My Account</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward-outline"></ion-icon>

                  <span className="footer-link-text">My Account</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward-outline"></ion-icon>

                  <span className="footer-link-text">View Cart</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward-outline"></ion-icon>

                  <span className="footer-link-text">Wishlist</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward-outline"></ion-icon>

                  <span className="footer-link-text">Compare</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward-outline"></ion-icon>

                  <span className="footer-link-text">New Products</span>
                </a>
              </li>
            </ul>

            <div className="footer-list">
              <p className="footer-list-title">Opening Time</p>

              <table className="footer-table">
                <tbody>
                  <tr className="table-row">
                    <th className="table-head" scope="row">
                      Mon - Tue:
                    </th>

                    <td className="table-data">8AM - 10PM</td>
                  </tr>

                  <tr className="table-row">
                    <th className="table-head" scope="row">
                      Wed:
                    </th>

                    <td className="table-data">8AM - 7PM</td>
                  </tr>

                  <tr className="table-row">
                    <th className="table-head" scope="row">
                      Fri:
                    </th>

                    <td className="table-data">7AM - 12PM</td>
                  </tr>

                  <tr className="table-row">
                    <th className="table-head" scope="row">
                      Sat:
                    </th>

                    <td className="table-data">9AM - 8PM</td>
                  </tr>

                  <tr className="table-row">
                    <th className="table-head" scope="row">
                      Sun:
                    </th>

                    <td className="table-data">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="footer-list">
              <p className="footer-list-title">Newsletter</p>

              <p className="newsletter-text">
                Authoritatively morph 24/7 potentialities with error-free
                partnerships.
              </p>

              <form action="" className="newsletter-form">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="newsletter-input"
                />

                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024{" "}
            <a href="#" className="copyright-link">
              Mubin Akib
            </a>
            . All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
