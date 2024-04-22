import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className="font-roboto">
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={''} className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="Choma Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Choma</span>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-0 border border-violet-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
          <div className={`w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
            <ul className="font-medium absolute md:static bg-violet-600 top-16 left-4 right-4 bottom-4 z-10 flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-white">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    onClick={closeMenu}
                    className={`block py-2 px-3 rounded md:border-0 hover:text-violet-600 md:p-0 ${name === 'Youtube Downloader' ? 'text-violet-600 bg-white md:bg-transparent md:text-violet-600' : 'text-white md:text-black'}`}
                    aria-current={name === 'Youtube Downloader' ? 'page' : undefined}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

const MenuLinks = [
  {
    id: 1,
    name: 'Youtube Downloader',
    link: 'download',
  },
  {
    id: 2,
    name: 'Youtube Converter',
    link: '',
  },
  {
    id: 3,
    name: 'Youtube to Mp3',
    link: '',
  },
  {
    id: 4,
    name: 'Language',
    link: '',
  },
];
