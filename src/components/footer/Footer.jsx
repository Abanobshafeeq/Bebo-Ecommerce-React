import "./footer.css"
import Logo from "../../img/white_logo.png";
import pm from "../../img/payment_method.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="big_row">
            <img className="logo_footer" src={Logo} alt="logo" />

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
              vero?
            </p>

            <div className="icons_footer">
              <a href="#"><i className="fa-solid fa-phone"></i></a>
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>

          <div className="row">
            <h4>Find It Fast</h4>

            <div className="links">
              <a href="#"><i className="fa-solid fa-caret-right"></i> Laptops & Computers</a>
              <a href="#"><i className="fa-solid fa-caret-right"></i> Smart Phones & Tablets</a>
              <a href="#"><i className="fa-solid fa-caret-right"></i> TV & Audio</a>
              <a href="#"><i className="fa-solid fa-caret-right"></i> Appliances</a>
              <a href="#"><i className="fa-solid fa-caret-right"></i> Jewelry & Watches</a>
            </div>
          </div>

          <div className="row">
            <h4>Quick Links</h4>

            <div className="links">
              <a href="#"><i className="fa-solid fa-caret-right"></i> Your Account</a>
              <a href="#"><i className="fa-solid fa-caret-right"></i> Returns & Exchanges</a>
              <a href="#"><i className="fa-solid fa-caret-right"></i> Shipping & Delivery</a>
              <a href="#"><i className="fa-solid fa-caret-right"></i> Estimated Delivery Time</a>
              <a href="#"><i className="fa-solid fa-caret-right"></i> Purchase History</a>
            </div>
          </div>

          <div className="row">
            <h4>Service Us</h4>

            <div className="links">
              <a href="#"><i className="fa-solid fa-caret-right"></i> Support Center</a>
              <a href="#"><i className="fa-solid fa-caret-right"></i> Terms & Conditions</a>
              <a href="#"><i className="fa-solid fa-caret-right"></i> Privacy Policy</a>
              <a href="#"><i className="fa-solid fa-caret-right"></i> Help</a>
              <a href="#"><i className="fa-solid fa-caret-right"></i> FAQS</a>
            </div>
          </div>
        </div>

        <div className="bottom_footer">
          <div className="container">
            <p>
              &copy; <span>Bebo Store.</span> All Rights Reserved.
            </p>

            <div className="payment_img">
              <img src={pm} alt="payment methods" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
