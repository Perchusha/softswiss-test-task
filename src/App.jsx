import { useEffect, useRef, useState } from 'react';
import logo from './assets/svgs/logo.svg';
import menu from './assets/svgs/menu.svg';
import close from './assets/svgs/close.svg';
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
        closeBurger();
      }
    };

    if (isBurgerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isBurgerOpen]);

  return (
    <div className="app">
      <header className="header">
        <div className="header__container container">
          <img src={logo} alt="Logo" className="header__logo" />

          <nav className="header__nav">
            <a href="/" className="header__link">
              Home
            </a>
            <a href="/products" className="header__link">
              Products
            </a>
            <a href="/cart" className="header__link">
              <CartIcon className="cart-icon" />
            </a>
          </nav>

          <div className="header__burger">
            <button className="burger__icon" onClick={toggleBurger} ref={burgerRef}>
              <span className={`burger__icon-img ${isBurgerOpen ? 'hidden' : 'visible'}`}>
                <img src={menu} alt="Open menu" />
              </span>
              <span className={`burger__icon-img ${isBurgerOpen ? 'visible' : 'hidden'}`}>
                <img src={close} alt="Close menu" />
              </span>
            </button>

            <div className={`burger__menu ${isBurgerOpen ? 'open' : ''}`}>
              <a href="#" className="burger__link" onClick={closeBurger}>
                Home
              </a>
              <a href="#" className="burger__link" onClick={closeBurger}>
                Products
              </a>
              <a href="#" className="burger__link" onClick={closeBurger}>
                Cart
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero__container container"></div>
      </section>
      <section className="offers"></section>
      <section className="cta"></section>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
