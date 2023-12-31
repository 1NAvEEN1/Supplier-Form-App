import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HTTPApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLang: "en",
  // backend: {
  //   loadPath: "/locales/{{lng}}/translation.json",
  // },
  whitelist: ["en", "si", "ta"],
  nonExplicitWhitelist: true,
  lng: "en",
  resources: {
    en: {
      translation: {
        LanguageSelect: {
          heading: "Please select language",
          English: "English",
          Sinhala: "සිංහල",
          Tamil: "தமிழ்",
          Continue: "Continue",
          Back: "Back",
        },
        BasicDetails: {
          heading: "Basic Details",
          province: "Province",
          district: "District",
          city: "City",
          name: "Your Name",
          number: "Contact Number",
          number2: "Secondary Contact Number (Optional)",
          email: "Email (Optional)",
        },
        ProductDetails: {
          heading: "Product Details",
          clickText: "Click the button below to add your product",
          button: "Add Product",
        },
        AddProduct: {
          heading: "Add new product",
          product: "Product",
          rawMaterial: "Raw Material",
          category: "Product category",
          subCategory: "Product sub category",
          name: "Product name",
          pricing: "Pricing range",
          text1:
            "Please select the units of quantity when adding price.\n(For example: per kg, per liter, per gram, per one piece, etc.)",
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
        CertificatesDetails: {
          heading: "Do you have any quality certificates?",
          yes: "Yes",
          no: "No",
          note: "If Yes, please note them here",
        },
        ExportingDetails: {
          heading: "Are you presently exporting your product?",
          yes: "Yes",
          no: "No",
          note: "If Yes, which countries are you exporting to?",
        },
        AskForExport: {
          heading:
            "Would you be open to supplying your product for us to handle the export?",
          yes: "Yes",
          no: "No",
        },
        Summary: {
          heading: "Summary",
          certificates: "Certificates",
          countries: "Countries",
        },
        FinalPage: {
          heading1: "Thank you for submitting",
          heading2: "your application!",
          text: "Our Ceylon Exports Hub Supply Management Team\nwill contact you after reviewing your details.\nFor further assistance, feel free to reach out to us via\nemail at info.cehub@gmail.lk or contact us on WhatsApp at\n0702300325.",
        },
      },
    },
    si: {
      translation: {
        LanguageSelect: {
          heading: "කරුණාකර භාෂාව තෝරන්න",
          English: "English",
          Sinhala: "සිංහල",
          Tamil: "தமிழ்",
          Continue: "ඉදිරියට",
          Back: "ආපසු",
        },
        BasicDetails: {
          heading: "නිෂ්පාදන විස්තර",
          province: "පළාත",
          district: "දිස්ත්‍රික්කය",
          city: "නගරය",
          name: "නම",
          number: "ඇමතුම් අංකය",
          number2: "දෙවැනි ඇමතුම් අංකය (Optional)",
          email: "Email ලිපිනය (Optional)",
        },
        ProductDetails: {
          heading: "නිෂ්පාදන විස්තර",
          clickText:
            "පහත සඳහන් 'Add Product' ක්ලික් කර ඔබ සපයන නිෂ්පාදන වල තොරතුරු ඇතුලත් කරන්න",
        },
        AddProduct: {
          heading: "නිෂ්පාදනයක් එකතු කරන්න",
          product: "නිෂ්පාදනය",
          rawMaterial: "අමුද්‍රව්‍ය",
          category: "නිෂ්පාදන කාණ්ඩය",
          subCategory: "නිෂ්පාදන උප කාණ්ඩය",
          name: "නිෂ්පාදනයේ නම",
          pricing: "මිල පරාසය",
          text1:
            "මිල සඳහන් කිරීමේදී කරුණාකර මිනුම් ඒකක තෝරන්න. \n(උදාහරණයක් ලෙස: කිලෝග්‍රෑමයකට, ලීටරයකට, ග්‍රෑම් එකකට, එක් අයිතමයක්, ආදිය)",
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
        CertificatesDetails: {
          heading: "ඔබට තත්ත්ව සහතික තිබේද?",
          yes: "ඔව්",
          no: "නැත",
          note: "ඔව් නම්, තත්ත්ව සහතික පහතින් සඳහන් කරන්න.",
        },
        ExportingDetails: {
          heading: "ඔබ දැනටත් ඔබේ නිෂ්පාදනය අපනයනය කරනවාද?",
          yes: "ඔව්",
          no: "නැත",
          note: "ඔව් නම් කුමන රටවල් වලටද?",
        },
        AskForExport: {
          heading: "ඔබේ නිෂ්පාදනය අප ආයතනය හරහා අපනයනය කිරීමට කැමතිද?",
          yes: "ඔව්",
          no: "නැත",
        },
        Summary: {
          heading: "සාරාංශය",
          certificates: "සහතික",
          countries: "රටවල්",
        },
        FinalPage: {
          heading1: "ඔබගේ අයදුම්පත ඉදිරිපත් කිරීම ගැන",
          heading2: "ඔබට ස්තුතියි!",
          text: "ඔබගේ අයදුම්පත විශ්ලේෂණය කිරීමෙන් පසුව\n Exports Hub සැපයුම් කළමනාකරණ කණ්ඩායම\nඔබ හා සම්බන්ධ වනු ඇත. ඔබට අමතර සහාය අවශ්‍ය නම්,\nකරුණාකර info.cehub@gmail.lk විද්‍යුත් තැපෑලෙන්\nහෝ 0702300325 WhatsApp හරහා\nඅප හා සම්බන්ධ වන්න",
        },
      },
    },
    ta: {
      translation: {
        LanguageSelect: {
          heading: "மொழியைத் தேர்ந்தெடுக்கவும்",
          English: "English",
          Sinhala: "සිංහල",
          Tamil: "தமிழ்",
          Continue: "தொடரவும்",
          Back: "மீண்டும்",
        },
        BasicDetails: {
          heading: "அடிப்படை விவரங்கள்",
          province: "மாகாணம்",
          district: "மாவட்டம்",
          city: "நகரம்",
          name: "உங்கள் பெயர்",
          number: "தொடர்பு எண்",
          number2: "இரண்டாம் நிலை தொடர்பு எண் (Optional)",
          email: "மின்னஞ்சல் (விரும்பினால்)",
        },
        ProductDetails: {
          heading: "பொருள் விவரங்கள்",
          clickText: "உங்கள் பொருளை சேர்க்க கீழே உள்ள பட்டனை அழுத்துங்கள்",
          button: "பொருள் சேர்க்க",
        },
        AddProduct: {
          heading: "புதிய பொருள் சேர்க்க",
          category: "பொருள் வகை",
          product: "தயாரிப்பு",
          rawMaterial: "மூல பொருட்கள்",
          subCategory: "பொருள் துணை வகை",
          name: "பொருள் பெயர்",
          pricing: "விலை வரம்பு",
          text1:
            "விலையை சேர்க்கும்போது அளவுகளை தேர்ந்தெடுக்கவும். \n (உதாரணம்: ஒரு கிலோவுக்கு, ஒரு லிட்டருக்கு, ஒரு கிராமுக்கு, ஒரு காய்கறி, போன்றவை)",
          supplyQuantity: "மாதாந்திர வழங்கும் அளவு",
          orderQuantity: "மாதாந்திர ஆர்டர் அளவு (இருந்தால்)",
          supplyFrequency: "வழங்கும் அளவுகள்?",
          otherDetails: "பிற பொருள் விவரங்கள்",
          monthRange: "ஒரு மாதம் இடம் தேர்வு செய்க",
          text2:
            "(கடந்துப்போக விவரங்கள், உறைந்த அளவுகள் போன்றவை போல பிற செய்திகள்)",
          monthly: "மாதாந்திர",
          custom: "கஸ்டம்",
        },
        BusinessDetails: {
          heading: "உங்கள் வணிகத்தை பதிவு செய்துள்ளீர்களா?",
          yes: "ஆம்",
          no: "இல்லை",
          type: "ஆம் என்றால், உங்கள் வணிக வகை என்ன?",
          pvt: "தனிப்பட்ட கம்பெனி",
          partnership: "இணையம்",
          solo: "தனியார் சொந்தம்",
          name: "உங்கள் வணிக பெயரை குறிப்பிடுக",
        },
        CertificatesDetails: {
          heading: "உங்களிடம் அதிகார சான்றிதழ்கள் உள்ளனவா?",
          yes: "ஆம்",
          no: "இல்லை",
          note: "ஆம் என்றால், அவைகளை இங்கே குறிக்கவும்",
        },
        ExportingDetails: {
          heading:
            "உங்கள் தற்போதைய உற்பத்தியை ஏதேனும் நாடுகளுக்கு வழங்குகின்றீர்களா?",
          yes: "ஆம்",
          no: "இல்லை",
          note: "ஆம் என்றால், நீங்கள் எந்த நாடுகளுக்கு வழங்குகிறீர்கள்?",
        },
        AskForExport: {
          heading: "உங்கள் பொருளை நாங்கள் வர்த்தகம் செய்வது ஏன்?",
          yes: "ஆம்",
          no: "இல்லை",
        },
        Summary: {
          heading: "சுருக்கம்",
          certificates: "சான்றிதழ்கள்",
          countries: "நாடுகள்",
        },
        FinalPage: {
          heading1: "சமர்ப்பிக்கும் முடிவுகள் க்கு நன்றி",
          heading2: "உங்கள் விண்ணப்பை!",
          text: "எங்கள் சீலன் எக்ஸ்போர்ட்ஸ் ஹப் வழங்கும் பொருள் மேலாண்மை குழு\nஉங்கள் விவரங்களை பராமரித்துப் பிறகு உங்களை தொடர்பு கொள்ளும்.\nமேலும் உதவி தேவைப்பட்டால், நீங்கள் எங்களுடைய மின்னஞ்சலில்\ninfo.cehub@gmail.lk இல் அல்லது வாட்ஸ்அப்பில் 0702300325 எண்ணில் தொடர்பு கொள்ளலாம்.",
        },
      },
    },
  },
});

export default i18next;
