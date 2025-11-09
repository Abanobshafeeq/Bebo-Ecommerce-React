import { useEffect, useState } from 'react';
import { FaUserPlus } from 'react-icons/fa6';
import { IoMdMenu } from 'react-icons/io';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { PiSignInBold } from 'react-icons/pi';
import { Link, useLocation } from 'react-router-dom';

const NavLinks = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Accessories', link: '/accessories' },
  { title: 'Blog', link: '/blog' },
  { title: 'Contact', link: '/contact' },
];

function BtmHeader() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsCategoryOpen(false);
  }, [location]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="btm_header">
      <div className="container">

        <div
          className="mobile_menu_icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <IoMdMenu />
          <span style={{color:'white'}}>Menu</span>
        </div>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>

          <div className="category_nav">
            <div
              className="category_btn"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <IoMdMenu />
              <p>Browse Category</p>
              <MdOutlineArrowDropDown />
            </div>

            <div
              className={`category_nav_list ${isCategoryOpen ? 'active' : ''}`}
            >
              {categories.map((category) => (
                <Link key={category.slug} to={`/category/${category.slug}`}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <ul className="nav_links">
            {NavLinks.map((item) => (
              <li
                key={item.link}
                className={location.pathname === item.link ? 'active' : ''}
              >
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* أيقونات الدخول */}
        <div className="sign_regs_icon">
          <Link to="/">
            <PiSignInBold />
          </Link>
          <Link to="/">
            <FaUserPlus />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BtmHeader;
