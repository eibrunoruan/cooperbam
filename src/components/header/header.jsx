// Header.js
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../images/logo.png';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('/');
    const [isValidPage, setIsValidPage] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);

    useEffect(() => {
        const valid = menuItems.some(item => item.url === currentPage);
        setIsValidPage(valid);
    }, [currentPage]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const menuItems = [
        { text: 'HOME', url: '/' },
        { text: 'SOBRE NÓS', url: '/sobre-nos' },
        { text: 'NOSSA ESTRUTURA', url: '/estrutura' },
        { text: 'BANANAS', url: '/bananas' },
        { text: 'CONTATO', url: '/contato' }
    ];

    return (
        <nav className={`bg-white border-gray-200 ${isScrolled ? 'fixed top-0 left-0 right-0 shadow-md z-50' : ''}`}>
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 relative">
                <div className="flex items-center flex-shrink-0">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Logo" />
                        <span className="text-2xl font-semibold whitespace-nowrap text-black">COOPERBAM</span>
                    </Link>
                </div>
                <div className="md:hidden flex items-center justify-end w-full">
                    <button 
                        type="button" 
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
                        aria-controls="navbar-mobile"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Toggle main menu</span>
                        {isMenuOpen ? <FiX className="w-5 h-5 text-black" onClick={closeMenu} /> : <FiMenu className="w-6 h-6" />}
                    </button>
                    <div className={`absolute top-0 right-0 w-screen h-screen bg-white z-50 ${isMenuOpen ? 'flex' : 'hidden'}`} id="navbar-mobile">
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <ul className={`flex flex-col font-medium p-4 space-y-4 items-center ${isMenuOpen ? '' : 'hidden'}`}>
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        {isValidPage && (
                                            <Link 
                                                to={item.url} 
                                                className={`block py-2 px-3 text-black rounded hover:text-[#264a2b] md:hover:bg-transparent ${currentPage === item.url ? 'border-2 border-[#25492a] rounded-lg' : ''}`} 
                                                onClick={closeMenu}
                                            >
                                                {item.text}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <button 
                                type="button"
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                onClick={closeMenu}
                            >
                                <FiX className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex md:items-center md:w-auto">
                    <ul className="flex flex-row font-medium space-x-4">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                {isValidPage && (
                                    <Link 
                                        to={item.url} 
                                        className={`block py-2 px-3 text-black rounded hover:text-[#264a2b] ${currentPage === item.url ? 'border-2 border-[#25492a] rounded-lg' : ''}`}
                                        onClick={closeMenu}
                                    >
                                        {item.text}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
