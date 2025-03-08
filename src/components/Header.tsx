import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { FaChevronDown, FaBars, FaTimes, FaCog } from "react-icons/fa";
import ConfigModal from "./header_comps/ConfigModal";

interface NavLink {
  label: string;
  path?: string;
  dropdown?: { label: string; path: string }[];
}

interface ButtonProps {
  label: string;
  onClick?: () => void;
  isLink?: boolean;
  path?: string;
}

interface HeaderProps {
  logoUrl?: string;
  logoText?: string;
  logoRedirect?: string;
  backgroundColor?: string;
  textColor?: string;
  links?: NavLink[];
  buttons?: ButtonProps[];
  showCTA?: boolean;
  ctaLabel?: string;
  ctaPath?: string;
  showConfig?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  logoUrl,
  logoText,
  logoRedirect = "/",
  backgroundColor = "#1a1a1a",
  textColor = "#ffffff",
  links = [],
  buttons = [],
  showCTA = false,
  ctaLabel = "Fale Conosco",
  ctaPath = "/contato",
  showConfig = true,
}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isConfigOpen, setConfigOpen] = useState(false);

  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash) {
        const id = window.location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  return (
    <header className="header" style={{ backgroundColor, color: textColor }}>
      <div className="header-container">
        <Link to={logoRedirect} className="logo">
            {logoUrl ? (
                <img src={logoUrl} alt="Logo" />
            ) : logoText ? (
                <span className="logoText">{logoText}</span>
            ) : (
                <img src="/assets/img/logo/logo-nobg-w1h1.webp" alt="Logo Padrão" />
            )}
        </Link>


        <nav className="nav-links">
          {links.map((link, index) =>
            link.dropdown ? (
              <Menu as="div" key={index} className="dropdown">
                <Menu.Button className="dropdown-button">
                  {link.label} <FaChevronDown className="icon" />
                </Menu.Button>
                <Transition
                  enter="dropdown-enter"
                  enterFrom="dropdown-enter-from"
                  enterTo="dropdown-enter-to"
                  leave="dropdown-leave"
                  leaveFrom="dropdown-leave-from"
                  leaveTo="dropdown-leave-to"
                >
                  <Menu.Items className="dropdown-menu">
                    {link.dropdown.map((item, subIndex) => (
                      <Menu.Item key={subIndex}>
                        <Link to={item.path?.startsWith("#") ? "#" : item.path || "#"} 
                            onClick={(e) => {
                                if (item.path?.startsWith("#")) {
                                e.preventDefault();
                                document.getElementById(item.path.substring(1))?.scrollIntoView({ behavior: "smooth" });
                                }
                            }} className="dropdown-item">
                          {item.label}
                        </Link>
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <Link key={index}
              to={link.path?.startsWith("#") ? "#" : link.path || "#"} 
                onClick={(e) => {
                    if (link.path?.startsWith("#")) {
                    e.preventDefault();
                    document.getElementById(link.path.substring(1))?.scrollIntoView({ behavior: "smooth" });
                    }
                }}
               className="nav-item">
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="buttons">
          {buttons.map((btn, index) =>
            btn.isLink ? (
              <Link key={index} 
              to={btn.path?.startsWith("#") ? "#" : btn.path || "#"} 
                onClick={(e) => {
                    if (btn.path?.startsWith("#")) {
                    e.preventDefault();
                    document.getElementById(btn.path.substring(1))?.scrollIntoView({ behavior: "smooth" });
                    }
                }}
               className="btn">
                {btn.label}
              </Link>
            ) : (
              <button key={index} onClick={btn.onClick} className="btn">
                {btn.label}
              </button>
            )
          )}
        </div>

        {showCTA && (
          <Link to={ctaPath} className="cta-button">
            {ctaLabel}
          </Link>
        )}

        {showConfig && (
          <button className="config-button" onClick={() => setConfigOpen(true)}>
            <FaCog />
          </button>
        )}

        <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
      </div>

      {isMobileMenuOpen && (
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        {links.map((link, index) => (
          <Link key={index} 
          to={link.path?.startsWith("#") ? "#" : link.path || "#"}
          className="mobile-menu-item"
          onClick={(e) => {
                setMobileMenuOpen(false)
                if (link.path?.startsWith("#")) {
                  e.preventDefault();
                  document.getElementById(link.path.substring(1))?.scrollIntoView({ behavior: "smooth" });
                }
            }}
          >
            {link.label}
          </Link>
        ))}
        {showConfig && (
          <button className="mobile-config-button" onClick={() => { setConfigOpen(true); setMobileMenuOpen(false); }}>
            <FaCog /> Configurações
          </button>
        )}
      </div>      
      )}

      {isConfigOpen && <ConfigModal isOpen={isConfigOpen} onClose={() => setConfigOpen(false)} />}
    </header>
  );
};

export default Header;
