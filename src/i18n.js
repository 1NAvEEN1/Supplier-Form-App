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
          BasicDetails: {
            heading: "Basic Details",
            province: "Province",
            district:"District",
            city:"City",
            name:"Your Name",
            number:"Contact Number",
            email:"Email (Optional)"
          },
        },
      },
      snh: {
        translation: {
          BasicDetails: {
            heading: "මූලික විස්තර",
            province: "පළාත",
            district:"දිස්ත්‍රික්කය",
            city:"නගරය",
            name:"නම",
            number:"ඇමතුම් අංකය",
            email:"Email ලිපිනය (Optional)"
          },
        },
      },
    },
  });

export default i18next;
