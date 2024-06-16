// components/MobileMenu.js

import { useState } from 'react';
import Link from 'next/link';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mobile-menu">
            <button className="menu-toggle" onClick={toggleMenu}>
                Menu
            </button>
            {isOpen && (
                <nav className="menu-items">
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                                <a>Services</a>
                            </Link>
                        </li>
                        {/* Adicione mais itens de menu conforme necessário */}
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default MobileMenu;
