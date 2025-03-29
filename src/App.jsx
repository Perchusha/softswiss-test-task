import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/svgs/logo.svg';
import menu from './assets/svgs/menu.svg';
import close from './assets/svgs/close.svg';
import rocket from './assets/images/rocket.webp';
import { ReactComponent as CartIcon } from './assets/svgs/cart.svg';
import './App.scss';

function App() {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const burgerRef = useRef(null);

  const toggleBurger = () => setBurgerOpen(prev => !prev);
  const closeBurger = () => setBurgerOpen(false);

  useEffect(() => {
    const handleClickOutside = event => {
      if (burgerRef.current && !burgerRef.current.contains(event.target)) {
        setBurgerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="app">
      <header className="header">
        <div className="header__container container">
          <img src={logo} alt="Logo" className="header__logo" />

          <nav className="header__nav" role="navigation" aria-label="Main navigation">
            <Link to="/" className="header__link">
              Home
            </Link>
            <Link to="/products" className="header__link">
              Products
            </Link>
            <Link to="/cart" className="header__link" aria-label="Cart">
              <CartIcon className="cart-icon" />
            </Link>
          </nav>

          <div className="header__burger" ref={burgerRef}>
            <button
              className="burger__icon"
              onClick={toggleBurger}
              aria-label={isBurgerOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isBurgerOpen}
              aria-controls="mobile-menu"
            >
              <span className={`burger__icon-img ${isBurgerOpen ? 'hidden' : 'visible'}`}>
                <img src={menu} alt="" aria-hidden="true" />
              </span>
              <span className={`burger__icon-img ${isBurgerOpen ? 'visible' : 'hidden'}`}>
                <img src={close} alt="" aria-hidden="true" />
              </span>
            </button>

            <div
              className={`burger__menu ${isBurgerOpen ? 'open' : ''}`}
              id="mobile-menu"
              role="menu"
            >
              <Link to="/" className="burger__link" onClick={closeBurger} role="menuitem">
                Home
              </Link>
              <Link to="/products" className="burger__link" onClick={closeBurger} role="menuitem">
                Products
              </Link>
              <Link to="/cart" className="burger__link" onClick={closeBurger} role="menuitem">
                Cart
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero__container container">
          <div className="hero__content">
            <span className="hero__title">
              Discover the vast expanses of <span className="pink">space</span>
            </span>
            <span className="hero__subtitle">
              Where the possibilities are <span className="yellow">endless!</span>
            </span>
            <button className="hero__button">Learn more</button>
          </div>
        </div>
      </section>

      <section className="offers container">
        <span className="offers__title">Offers</span>
        <div className="offers__container">
          <div className="offers__card">
            <span className="offers__card__title">Move the borders of reality!</span>
            <span className="offers__card__subtitle">
              Go on a space adventure - it's possible with us!
            </span>
            <button className="offers__card__button">Learn more</button>
          </div>
          <div className="offers__card">
            <span className="offers__card__title">Space is not just stars and planets</span>
            <span className="offers__card__subtitle">Go on a space adventure</span>
            <button className="offers__card__button">Learn more</button>
          </div>
          <div className="offers__card">
            <span className="offers__card__title">For those who dream of stars</span>
            <span className="offers__card__subtitle">Our offer: make your dream come true</span>
            <button className="offers__card__button">Learn more</button>
          </div>
          <div className="offers__card">
            <span className="offers__card__title">Fulfill your fantastic dreams</span>
            <span className="offers__card__subtitle">Space has never been so close</span>
            <button className="offers__card__button">Learn more</button>
          </div>
        </div>
      </section>

      <section className="cta container">
        <span className="cta__title">Embark on a space journey</span>
        <span className="cta__text">
          Travelling into space is one of the most exciting and unforgettable adventures that can
          change your life forever. And if you have ever dreamed of exploring stars, planets and
          galaxies, then our company is ready to help you realize this dream. We offer a unique
          experience that will allow you to go on a space journey and see all the secrets of the
          universe. We guarantee that every moment in space will be filled with incredible
          impressions, excitement and new discoveries. Our team of professionals takes care of your
          safety and comfort so that you can fully enjoy your adventure in space. We offer various
          options for space excursions.
        </span>
        <Link to="/journey" className="cta__link">
          Read more
        </Link>
      </section>

      <footer className="footer">
        <img className="footer__icon" src={rocket} alt="Rocker" />
        <span className="footer__text">Exciting space adventure!</span>
      </footer>
    </div>
  );
}

export default App;
