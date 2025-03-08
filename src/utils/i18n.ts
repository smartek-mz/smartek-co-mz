import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEn from '../locales/en/common.json';
import commonPt from '../locales/pt/common.json';

import segitEn from '../locales/en/segit.json';
import segitPt from '../locales/pt/segit.json';


i18n.use(initReactI18next).init({
    resources: {
        en: {
            common: commonEn,
            segit: segitEn,
        },
        pt: {
            common: commonPt,
            segit: segitPt,
        },
    },
    lng: 'pt',
    fallbackLng: 'en',
    ns: ['common', 'segit'],
    defaultNS: 'common',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
