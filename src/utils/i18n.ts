import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import commonEn from '@/locales/en/common.json';
// import commonPt from '@/locales/pt/common.json';
import commonEn from '../locales/en/common.json';
import commonPt from '../locales/pt/common.json';


i18n.use(initReactI18next).init({
    resources: {
        en: { common: commonEn },
        pt: { common: commonPt },
    },
    lng: 'pt',
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
