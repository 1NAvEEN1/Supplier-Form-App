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
            district: "District",
            city: "City",
            name: "Your Name",
            number: "Contact Number",
            email: "Email (Optional)",
          },
          ProductDetails: {
            heading: "Product Details",
            clickText: "Click the button below to add your product",
            button: "Add Product",
          },
          AddProduct: {
            heading: "Add new product",
            category: "Product category",
            subCategory: "Product sub category",
            name: "Product name",
            pricing: "Pricing range",
            text1:
              "Please select the units of quantity when adding price. <br />(For example: per kg, per liter, per gram, per one piece, etc.)",
            supplyQuantity: "Monthly Supply Quantity",
            orderQuantity: "Monthly Order Quantity (If any)",
            supplyFrequency: "SupplyFrequency?",
            otherDetails: "Other Product Details",
            monthRange: "Select a month range",
            text2:
              " (Any additional relevant details about the product, such as expiration details, packaging sizes, etc)",
            monthly: "Monthly",
            custom: "Custom",
          },
          BusinessDetails: {
            heading: "Have you registered your business?",
            yes: "Yes",
            no: "No",
            type: "If Yes, what is the type of your business?",
            pvt: "Private Limited Company",
            partnership: "Partnership",
            solo: "Solo Proprietor",
            name: "Please mention your business name",
          },
        },
      },
      snh: {
        translation: {
          BasicDetails: {
            heading: "නිෂ්පාදන විස්තර",
            province: "පළාත",
            district: "දිස්ත්‍රික්කය",
            city: "නගරය",
            name: "නම",
            number: "ඇමතුම් අංකය",
            email: "Email ලිපිනය (Optional)",
          },
          ProductDetails: {
            heading: "නිෂ්පාදන විස්තර",
            clickText:
              "පහත සඳහන් 'Add Product' ක්ලික් කර ඔබ සපයන නිෂ්පාදන වල තොරතුරු ඇතුලත් කරන්න",
          },
          AddProduct: {
            heading: "නිෂ්පාදනයක් එකතු කරන්න",
            category: "නිෂ්පාදන කාණ්ඩය",
            subCategory: "නිෂ්පාදන උප කාණ්ඩය",
            name: "නිෂ්පාදනයේ නම",
            pricing: "මිල පරාසය",
            text1:
              "මිල සඳහන් කිරීමේදී කරුණාකර මිනුම් ඒකක තෝරන්න. <br />(උදාහරණයක් ලෙස: කිලෝග්‍රෑමයකට, ලීටරයකට, ග්‍රෑම් එකකට, එක් අයිතමයක්, ආදිය)",
            supplyQuantity: "මසකට සැපයීමට හැකි ප්‍රමාණය",
            orderQuantity: "අවම ඇණවුම් ප්‍රමාණය (එවැන්නක් තිබේනම්)",
            supplyFrequency: "සැපයුම් හැකියාව",
            otherDetails: "නිෂ්පාදනයේ අනෙකුත් විස්තර",
            monthRange: "මාස පරාසයක් තෝරන්න",
            text2:
              " (කල් ඉකුත් වීමේ විස්තර, ඇසුරුම් ප්‍රමාණයන් යනාදී නිෂ්පාදනය පිළිබඳ ඕනෑම අමතර අදාළ විස්තර)",
            monthly: "සෑම මසකම සැපයීමට හැක",
            custom: "මාස කිහිපයක පමණක් සැපයීමට හැක",
          },
          BusinessDetails: {
            heading: "ඔබගේ ව්‍යාපාරය ලියාපදිංචි කර තිබේද?",
            yes: "ඔව්",
            no: "නැත",
            type: "ඔව් නම්, ලියාපදිංචි කරන ලද්දේ",
            pvt: "සීමාසහිත පුද්ගලික සමාගම",
            partnership: "හවුල්ව්‍යාපාරයක්",
            solo: "තනි පුද්ගල ව්‍යාපාරයක්",
            name: "කරුණාකර ඔබේ ව්‍යාපාරයේ නම සඳහන් කරන්න",
          },
        },
      },
    },
  });

export default i18next;
