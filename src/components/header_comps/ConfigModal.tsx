import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "lucide-react";
import { Link } from "react-router-dom";
import LangSwitch from "./LangSwitch";
import ThemeSwitch from "./ThemeSwitch";

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConfigModal: React.FC<ConfigModalProps> = ({ isOpen, onClose }) => {
    return (
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="config-modal-overlay" onClose={onClose}>
          <Transition.Child
            as={React.Fragment}
            enter="fade-in 300ms ease-out"
            leave="fade-out 200ms ease-in"
          >
            <div className="config-modal-backdrop" />
          </Transition.Child>
  
          <div className="config-modal-container">
            <Transition.Child
              as={React.Fragment}
              enter="scale-in 300ms ease-out"
              leave="scale-out 200ms ease-in"
            >
              <Dialog.Panel className="config-modal-content">
                <div className="config-modal-header">
                  <Dialog.Title className="config-modal-title">
                    Configurações
                  </Dialog.Title>
                  <button className="close-button" onClick={onClose}>
                    <XIcon size={20} />
                  </button>
                </div>
  
                <div className="config-modal-options">
                <div className="config-option">
                    <LangSwitch />
                    <span 
                        className="config-label"
                        onClick={() => {
                            const langButton = document.querySelector('.lang-button') as HTMLButtonElement | null;
                            if (langButton) {
                                langButton.click();
                            }
                        }}
                    >
                        Idioma / Language
                    </span>
                </div>

                <div className="config-option">
                    <ThemeSwitch />
                    <span 
                        className="config-label"
                        onClick={() => {
                            const themeButton = document.querySelector('.theme-button') as HTMLButtonElement | null;
                            if (themeButton) {
                                themeButton.click();
                            }
                        }}
                    >
                        Light & Dark Theme
                    </span>
                </div>

                    <div className="config-option">
                        <Link to="/politicas" className="config-modal-link">
                        <span className="config-icon">📜</span>
                        <span className="config-label">Políticas / Our Policies</span>
                        </Link>
                    </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };
  
export default ConfigModal;
