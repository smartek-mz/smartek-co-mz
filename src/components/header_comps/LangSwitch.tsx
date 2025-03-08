import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import i18n from 'i18next';

const MozambiqueFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path fill="#fce100" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z" /><path fill="#141414" d="M0 13h36v10H0z" /><path fill="#007168" d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4" /><path fill="#eee" d="M0 13h36v1H0zm0 9h36v1H0z" /><path fill="#dd2e44" d="m1.313 29.945l15.719-11.881L1.33 6.041A3.98 3.98 0 0 0 0 9v18c0 1.171.512 2.214 1.313 2.945" /><path fill="#fce100" d="m9.478 23.062l-3.271-2.395l-3.267 2.395l1.267-3.851L.92 16.845l4.054.015l1.234-3.858l1.239 3.86l4.05-.018l-3.288 2.371z" /><path fill="#141414" d="M3.369 20.702h2.356c.19.213.613.3 1.016-.002c.738-.404 2.167.002 2.167.002l.281-.299l-.686-2.25l-.246-.264s-.528-.317-1.53-.211s-1.354-.036-1.354-.036s-.879.106-1.125.229c-.027.022-.282.281-.282.281z" /><path fill="#fff" d="M3.369 20.376h2.356c.19.213.613.3 1.016-.002c.738-.404 2.167.002 2.167.002l.281-.299l-.686-2.25l-.246-.264s-.528-.317-1.53-.211c-1.002.105-1.354-.036-1.354-.036s-.879.106-1.125.229c-.027.022-.282.281-.282.281z" /><path fill="#141414" d="m2.213 17.012l1.263-1.851l.773.124l.446-.46l1.541 1.888l1.236-.878l.757-.632l.454.279l1.607-1.036l-1.453 1.362l-1.205.856l-.959.432l3.242 3.822l-.424.301l-3.091-3.75l-1.002.805l1.317.421l-.042.631l-1.85-.51l.083 1.309l-.427.185l-.378-.755l-1.635 1.917l-.589-1.01l1.851-1.557l.042-.547l1.01-.925l.294-.042l.842-.337l-1.263-1.346l-1.686 2.352l-.722-.87" /></svg>
);

const USAFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path fill="#b22334" d="M35.445 7C34.752 5.809 33.477 5 32 5H18v2zM0 25h36v2H0zm18-8h18v2H18zm0-4h18v2H18zM0 21h36v2H0zm4 10h28c1.477 0 2.752-.809 3.445-2H.555c.693 1.191 1.968 2 3.445 2M18 9h18v2H18z" /><path fill="#eee" d="M.068 27.679q.025.14.059.277q.04.15.092.296c.089.259.197.509.333.743L.555 29h34.89l.002-.004a4 4 0 0 0 .332-.741a4 4 0 0 0 .152-.576c.041-.22.069-.446.069-.679H0c0 .233.028.458.068.679M0 23h36v2H0zm0-4v2h36v-2H18zm18-4h18v2H18zm0-4h18v2H18zM.555 7l-.003.005zM.128 8.044c.025-.102.06-.199.092-.297a4 4 0 0 0-.092.297M18 9h18c0-.233-.028-.459-.069-.68a3.6 3.6 0 0 0-.153-.576A4 4 0 0 0 35.445 7H18z" /><path fill="#3c3b6e" d="M18 5H4a4 4 0 0 0-4 4v10h18z" /><path fill="#fff" d="m2.001 7.726l.618.449l-.236.725L3 8.452l.618.448l-.236-.725L4 7.726h-.764L3 7l-.235.726zm2 2l.618.449l-.236.725l.617-.448l.618.448l-.236-.725L6 9.726h-.764L5 9l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L9 9l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L13 9l-.235.726zm-8 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L5 13l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L9 13l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L13 13l-.235.726zm-6-6l.618.449l-.236.725L7 8.452l.618.448l-.236-.725L8 7.726h-.764L7 7l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 7l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 7l-.235.726zm-12 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L3 11l-.235.726zM6.383 12.9L7 12.452l.618.448l-.236-.725l.618-.449h-.764L7 11l-.235.726h-.764l.618.449zm3.618-1.174l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 11l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 11l-.235.726zm-12 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L3 15l-.235.726zM6.383 16.9L7 16.452l.618.448l-.236-.725l.618-.449h-.764L7 15l-.235.726h-.764l.618.449zm3.618-1.174l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 15l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 15l-.235.726z" /></svg>
);

const LangSwitch = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  
  const getInitialLang = () => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang === 'pt' || savedLang === 'en') return savedLang;
    return i18n.language === 'pt' || i18n.language === 'en' ? i18n.language : 'pt';
  };

  const [currentLang, setCurrentLang] = useState<'pt' | 'en'>(getInitialLang);

  useEffect(() => {
    const urlParams = new URLSearchParams(search);
    const langParam = urlParams.get('lang');
    if (langParam === 'pt' || langParam === 'en') {
      setCurrentLang(langParam);
      i18n.changeLanguage(langParam);
      localStorage.setItem('lang', langParam);
    }
  }, [search]);

  const toggleLang = () => {
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    setCurrentLang(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);

    const urlParams = new URLSearchParams(search);
    urlParams.set('lang', newLang);
    navigate(`?${urlParams.toString()}`, { replace: true });
  };

  return (
    <div className="lang-switch">
      <button className="lang-button" onClick={toggleLang}>
        <div className="lang-icon">{currentLang === 'pt' ? <MozambiqueFlag /> : <USAFlag />}</div>
      </button>
    </div>
  );  
};

export default LangSwitch;