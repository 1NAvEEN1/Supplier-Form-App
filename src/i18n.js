import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HTTPApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HTTPApi)
  .init({
    debug: true,
    fallbackLang: "en",
    // backend: {
    //   loadPath: "/locales/{{lng}}/translation.json",
    // },
    resources: {
        en: {
          translation: {
            heading: "Basic Details",
          },
        },
        snh: {
          translation: {
            heading: "මූලික විස්තර",
          },
        },
      },
  });

export default i18next;
