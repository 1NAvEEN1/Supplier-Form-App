import{j as s,r as c,a as j}from"./react-G0VBmWxS.js";import{c as O}from"./react-dom-wkoTY-Le.js";import{s as A,L as C,G as D,B as v,l as z,I as M,d as V,b as P,T as S,c as H,S as $,e as W,C as Y,M as q,f as Q}from"./@mui-yOQ-dzD9.js";import{c as G,R as U}from"./react-router-dom-8rnrgVg8.js";import{O as _,b as K}from"./react-router-mRKdHBLr.js";import{c as b,a as J}from"./@reduxjs-OWLxucYK.js";import{u as R,a as T,P as X}from"./react-redux-3PpUptFA.js";import{u as Z,i as ee}from"./react-i18next-Ld4qvRaQ.js";import{P as te}from"./prop-types-nTg9hSou.js";import{i as ie}from"./i18next-NCffezqA.js";import"./i18next-http-backend-6HvsPMKJ.js";import"./@babel-SkaEL2tl.js";import"./scheduler-iwWdm5Ml.js";import"./clsx-2Jv0kmJG.js";import"./react-transition-group-NM3J4weW.js";import"./@emotion-cuKUoGzU.js";import"./hoist-non-react-statics-MGeNrgoW.js";import"./react-is-cHOZVpRJ.js";import"./stylis-UTZzoVRx.js";import"./@popperjs-zyV4rJhQ.js";import"./@remix-run-EOO7uaRF.js";import"./redux-vWdE9iQ8.js";import"./immer-2VFgZgpn.js";import"./reselect-knrTZChY.js";import"./redux-thunk-qyK_zz9Y.js";import"./use-sync-external-store-BBrSSgse.js";import"./html-parse-stringify-gNhRsLCw.js";import"./void-elements-KNW2nDh4.js";import"./cross-fetch-xd-Enngl.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();const se="modulepreload",ae=function(e){return"/Supplier-Form-App/"+e},F={},m=function(i,o,a){if(!o||o.length===0)return i();const r=document.getElementsByTagName("link");return Promise.all(o.map(t=>{if(t=ae(t),t in F)return;F[t]=!0;const n=t.endsWith(".css"),u=n?'[rel="stylesheet"]':"";if(!!a)for(let d=r.length-1;d>=0;d--){const f=r[d];if(f.href===t&&(!n||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${u}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":se,n||(l.as="script",l.crossOrigin=""),l.href=t,document.head.appendChild(l),n)return new Promise((d,f)=>{l.addEventListener("load",d),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>i()).catch(t=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=t,window.dispatchEvent(n),!n.defaultPrevented)throw t})},re=A("div")(({theme:e})=>({position:"fixed",top:0,left:0,zIndex:2001,width:"100%","& > * + *":{marginTop:e.spacing(2)}})),oe=()=>s.jsx(re,{children:s.jsx(C,{color:"primary"})}),g=e=>i=>s.jsx(c.Suspense,{fallback:s.jsx(oe,{}),children:s.jsx(e,{...i})}),ne=()=>s.jsx(D,{container:!0,sx:{justifyContent:"center",alignItems:"center",minHeight:"100svh",bgcolor:"white"},children:s.jsx(v,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:{sm:"100vw",xs:"100vw"},minHeight:{lg:"100svh",sm:"100svh",xs:"100svh"}},children:s.jsx(_,{})})}),w=b({name:"successMessage",initialState:{isVisible:!1,message:"",type:""},reducers:{showMessage:(e,i)=>{e.isVisible=i.payload.isVisible,e.type=i.payload.type,e.message=i.payload.message}}}),{showMessage:k}=w.actions,le=w.reducer,N=b({name:"form",initialState:{navigateToPage:99,initialRender:0,selectedProductIndex:99,formData:{language:"en",basicDetails:{province:"0",district:"0",city:"0",name:"",contactNo:"",contactNo2:"",email:""},productDetails:[],businessRegDetails:{registered:0,businessType:"pvt",businessName:""},certificatesDetails:{certificates:0,certificatesNames:""},exportingDetails:{exporting:0,countries:""},askForExporting:1}},reducers:{setFormData:(e,i)=>{const{province:o,district:a,city:r,name:t,phone:n,phone2:u,email:h}=i.payload;e.formData.basicDetails={...e.formData.basicDetails,province:o!==void 0?o:e.formData.basicDetails.province,district:a!==void 0?a:e.formData.basicDetails.district,city:r!==void 0?r:e.formData.basicDetails.city,name:t!==void 0?t:e.formData.basicDetails.name,contactNo:n!==void 0?n:e.formData.basicDetails.contactNo,contactNo2:u!==void 0?u:e.formData.basicDetails.contactNo2,email:h!==void 0?h:e.formData.basicDetails.email}},setNavigateToPage:(e,i)=>{e.navigateToPage=i.payload},setProductDetails:(e,i)=>{e.formData.productDetails=i.payload},setSelectedProductIndex:(e,i)=>{e.selectedProductIndex=i.payload},setBusinessRegDetails:(e,i)=>{const{registered:o,businessType:a,businessName:r}=i.payload;e.formData.businessRegDetails={...e.formData.businessRegDetails,registered:o!==void 0?o:e.formData.businessRegDetails.registered,businessType:a!==void 0?a:e.formData.businessRegDetails.businessType,businessName:r!==void 0?r:e.formData.businessRegDetails.businessName}},setCertificatesDetails:(e,i)=>{const{certificates:o,certificatesNames:a}=i.payload;e.formData.certificatesDetails={...e.formData.certificatesDetails,certificates:o!==void 0?o:e.formData.certificatesDetails.certificates,certificatesNames:a!==void 0?a:e.formData.certificatesDetails.certificatesNames}},setExportingDetails:(e,i)=>{const{exporting:o,countries:a}=i.payload;e.formData.exportingDetails={...e.formData.exportingDetails,exporting:o!==void 0?o:e.formData.exportingDetails.exporting,countries:a!==void 0?a:e.formData.exportingDetails.countries}},setAskForExporting:(e,i)=>{e.formData.askForExporting=i.payload}}}),{setFormData:ut,setProductDetails:mt,setBusinessRegDetails:gt,setCertificatesDetails:ht,setExportingDetails:ft,setAskForExporting:yt,setSelectedProductIndex:xt,setNavigateToPage:ce}=N.actions,de=N.reducer,B=b({name:"loader",initialState:{isVisible:!1,message:""},reducers:{showLoading:(e,i)=>{e.isVisible=i.payload.isVisible,e.message=i.payload.message},hideLoading:e=>{e.isVisible=!1,e.message=""},setMessage:(e,i)=>{e.message=i.payload}}});B.actions;const pe=B.reducer,L=b({name:"error",initialState:{basicDetails:[]},reducers:{setErrorsBasicDetails:(e,i)=>{e.basicDetails=i.payload}}}),{setErrorsBasicDetails:ue,setCurrentPage:Dt,setInitialRender:vt}=L.actions,me=L.reducer,x=J({reducer:{form:de,loader:pe,errors:me,alertMessage:le}}),p=({message:e,type:i})=>{x.dispatch(k({isVisible:!0,message:e,type:i}))},ge=(e,i,o)=>{let a=1;const r=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);if(e===2){const t=x.getState().form.formData.basicDetails;let n="";const u=(h,l)=>{h&&(h.length!==10||!/^\d+$/.test(h))&&(n=l,p({message:l,type:"error"}),a=0)};console.log(t),t.province==0&&t.district==0&&t.city==0&&t.name==""&&t.contactNo==""?(p({message:"Please fill the form",type:"error"}),a=0):t.province==0?(p({message:"select a province",type:"error"}),n="province",a=0):t.district==0?(n="district",p({message:"Please select a district",type:"error"}),a=0):t.city==0?(n="city",p({message:"select a city",type:"error"}),a=0):t.name==""?(n="name",p({message:"Please fill the name",type:"error"}),a=0):t.contactNo==""?(n="number",p({message:"Please fill the contact number",type:"error"}),a=0):(u(t.contactNo,"Invalid Contact Number"),u(t.contactNo2,"Invalid Secondary Contact Number")),t.email==""||r(t.email)||(n="email",p({message:"Please enter a valid email address",type:"error"}),a=0),console.log(n),i(o({error:n}))}if(e===3&&(x.getState().form.formData.productDetails.length===0?(a=0,p({message:"Add a product first",type:"error"})):a=1),e===4){let t=x.getState().form.formData.businessRegDetails;t.registered===1?t.businessName==""&&(a=0,p({message:"Please enter the business name !",type:"error"})):a=1}if(e===5){let t=x.getState().form.formData.certificatesDetails;t.certificates===1?t.certificatesNames==""&&(a=0,p({message:"Please enter the certificates names !",type:"error"})):a=1}if(e===6){let t=x.getState().form.formData.exportingDetails;t.exporting===1?t.countries==""&&(a=0,p({message:"Please enter countries !",type:"error"})):a=1}return a},he=A(C)(({theme:e})=>({height:7,borderRadius:5,[`&.${z.colorPrimary}`]:{backgroundColor:e.palette.grey[e.palette.mode==="light"?200:800]}})),fe=()=>{const{t:e}=Z(),i=K(),o=R(),a=["","LangSelect","BasicDetails","ProductDetails","BusinessDetails","CertificatesDetails","ExportingDetails","AskForExport","Summary"],[r,t]=c.useState(1),n=()=>{if(ge(r,o,ue)){const f=r+1;f<a.length?(t(f),i(`/Supplier-Form-App/${a[f]}`)):i("/Supplier-Form-App/FinalPage")}},u=()=>{const d=r-1;d>=0&&(t(d),i(`/Supplier-Form-App/${a[d]}`))},h=c.useRef();c.useEffect(()=>{(()=>{window.scrollTo({top:0,behavior:"smooth"})})()},[r]);const l=T(d=>d.form.navigateToPage);return c.useEffect(()=>{console.log(l),l!==99&&(console.log("sdfd",l),t(l+1),i(`/Supplier-Form-App/${a[l+1]}`),o(ce(99)))},[l]),s.jsx(v,{bgcolor:"#F9FAFB",width:"98dvw",sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsxs(v,{height:"100svh",minHeight:600,maxWidth:700,bgcolor:"#F9FAFB",children:[s.jsx(v,{ref:h}),s.jsxs(D,{container:!0,p:2,display:"flex",children:[s.jsx(D,{item:!0,xs:2,sx:{height:{lg:"5svh",xs:"5svh"}},children:s.jsx(M,{onClick:u,children:s.jsx(V,{style:{color:"black"}})})}),s.jsx(D,{item:!0,xs:8,pt:2,sx:{height:{lg:"5svh",xs:"5svh"}},children:s.jsx(he,{variant:"determinate",value:r/8*100})}),s.jsx(D,{item:!0,xs:12,sx:{minHeight:{lg:"80svh",xs:"80svh"}},children:s.jsx(_,{})}),s.jsxs(D,{item:!0,xs:12,display:"flex",alignItems:"end",justifyContent:"center",sx:{height:{lg:"10svh",xs:"10svh"},gap:{sm:5,xs:0}},children:[s.jsx(P,{variant:"contained",size:"large",fullWidth:!0,sx:{height:50,borderRadius:3,width:{sm:200,xs:"100%"},display:{sm:"inherit",xs:"none"}},color:"secondary",onClick:u,children:s.jsx(S,{textTransform:"capitalize",variant:"h6",children:e("translation:LanguageSelect:Back")})}),s.jsx(P,{variant:"contained",size:"large",fullWidth:!0,sx:{height:50,borderRadius:3,color:"white",width:{sm:200,xs:"100%"}},onClick:n,children:s.jsx(S,{textTransform:"capitalize",variant:"h6",children:r==8?s.jsx(s.Fragment,{children:"Submit"}):s.jsx(s.Fragment,{children:e("translation:LanguageSelect:Continue")})})})]})]})]})})},ye={lighter:"#F47621",light:"#F47621",main:"#F47621",dark:"#F47621",darker:"#F47621"},xe={lighter:"#F5F5F5",light:"#E5E4E2",main:"#C0C0C0",dark:"#696969",darker:"#555555"},De={0:"#FFFFFF",100:"#F9FAFB",200:"#F4F6F8",300:"#DFE3E8",400:"#C4CDD5",500:"#919EAB",600:"#637381",700:"#454F5B",800:"#212B36",900:"#161C24"},ve={grey:De},be={...ve,primary:ye,secondary:xe};function y(e){return`${e/16}rem`}function E({sm:e,md:i,lg:o}){return{"@media (min-width:600px)":{fontSize:y(e)},"@media (min-width:900px)":{fontSize:y(i)},"@media (min-width:1200px)":{fontSize:y(o)}}}const Pe={fontFamily:["sans-serif",'"Noto Sans Sinhala"',"Nunito"],h4:{fontWeight:400,lineHeight:1.5,fontSize:y(22),...E({sm:22,md:24,lg:24})},h5:{fontWeight:400,lineHeight:1.5,fontSize:y(20),...E({sm:20,md:20,lg:20})},body1:{lineHeight:1.5,fontSize:y(18)},body2:{lineHeight:22/14,fontSize:y(14)},smallText:{lineHeight:22/14,fontSize:y(11)}},Se={values:{xs:0,sm:600,md:900,lg:1200,xl:1536}};I.propTypes={children:te.node};function I({children:e}){const i="light",o=c.useMemo(()=>({palette:be,typography:Pe,breakpoints:Se,shadows:0}),[i]),a=H(o);return s.jsx($,{injectFirst:!0,children:s.jsxs(W,{theme:a,children:[s.jsx(Y,{}),e]})})}const Fe=j.forwardRef(function(i,o){return s.jsx(q,{elevation:6,ref:o,variant:"filled",...i})}),Ee=()=>{const e=R(),{isVisible:i,message:o,type:a}=T(t=>t.alertMessage),r=()=>{e(k({isVisible:!1,message:""}))};return i?s.jsx(Q,{anchorOrigin:{vertical:"top",horizontal:"center"},open:i,autoHideDuration:6e3,onClose:()=>r(),children:s.jsx(Fe,{onClose:()=>r(),severity:a,sx:{width:"100%"},children:o})}):null},je=g(c.lazy(()=>m(()=>import("./Home-On8WG-45.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])))),Ae=g(c.lazy(()=>m(()=>import("./LanguageSelect-bn_kGcay.js"),__vite__mapDeps([22,1,2,23,24,13,14,25,26,27,10,11,12,15,16,17,18,19,28,20,21,29,30,31,32,33,34,35,36,37])))),Ce=g(c.lazy(()=>m(()=>import("./BasicDetails-SXZWg9ol.js"),__vite__mapDeps([38,1,2,23,24,13,14,25,26,27,10,11,12,15,16,17,18,19,28,20,21,29,30,31,32,33,34,35,36,37])))),_e=g(c.lazy(()=>m(()=>import("./ProductDetails-oabiFret.js"),__vite__mapDeps([39,1,2,23,24,13,14,25,26,27,10,11,12,15,16,17,18,19,28,20,21,29,30,31,32,33,34,35,36,37])))),Re=g(c.lazy(()=>m(()=>import("./BusinessDetails-fCOOwY__.js"),__vite__mapDeps([40,1,2,23,24,13,14,25,26,27,10,11,12,15,16,17,18,19,28,20,21,29,30,31,32,33,34,35,36,37])))),Te=g(c.lazy(()=>m(()=>import("./CertificatesDetails-zHccvwWs.js"),__vite__mapDeps([41,1,2,23,24,13,14,25,26,27,10,11,12,15,16,17,18,19,28,20,21,29,30,31,32,33,34,35,36,37])))),we=g(c.lazy(()=>m(()=>import("./ExportingDetails-3eVfmfSS.js"),__vite__mapDeps([42,1,2,23,24,13,14,25,26,27,10,11,12,15,16,17,18,19,28,20,21,29,30,31,32,33,34,35,36,37])))),ke=g(c.lazy(()=>m(()=>import("./AskForExport-vjZ-plXm.js"),__vite__mapDeps([43,1,2,23,24,13,14,25,26,27,10,11,12,15,16,17,18,19,28,20,21,29,30,31,32,33,34,35,36,37])))),Ne=g(c.lazy(()=>m(()=>import("./Summary-eNnugNOZ.js"),__vite__mapDeps([44,1,2,23,24,13,14,10,11,12,15,16,17,18,19,25,26,27,28,20,21,29,30,31,32,33,34,35,36,37])))),Be=g(c.lazy(()=>m(()=>import("./FinalPage-IGQA3H_y.js"),__vite__mapDeps([45,1,2,25,26,27,10,11,12,13,14,15,16,17,18,19]))));function Le(){const e=G([{path:"/Supplier-Form-App",element:s.jsx(ne,{}),children:[{path:"/Supplier-Form-App",element:s.jsx(je,{})},{path:"/Supplier-Form-App/FinalPage",element:s.jsx(Be,{})},{path:"/Supplier-Form-App",element:s.jsx(fe,{}),children:[{path:"/Supplier-Form-App/LangSelect",element:s.jsx(Ae,{})},{path:"/Supplier-Form-App/BasicDetails",element:s.jsx(Ce,{})},{path:"/Supplier-Form-App/ProductDetails",element:s.jsx(_e,{})},{path:"/Supplier-Form-App/BusinessDetails",element:s.jsx(Re,{})},{path:"/Supplier-Form-App/CertificatesDetails",element:s.jsx(Te,{})},{path:"/Supplier-Form-App/ExportingDetails",element:s.jsx(we,{})},{path:"/Supplier-Form-App/Summary",element:s.jsx(Ne,{})},{path:"/Supplier-Form-App/AskForExport",element:s.jsx(ke,{})}]}]}]);return s.jsx(X,{store:x,children:s.jsxs(I,{children:[s.jsx(Ee,{}),s.jsx(U,{router:e})]})})}ie.use(ee).init({debug:!0,fallbackLang:"en",whitelist:["en","si","ta"],nonExplicitWhitelist:!0,lng:"en",resources:{en:{translation:{LanguageSelect:{heading:"Please select language",English:"English",Sinhala:"සිංහල",Tamil:"தமிழ்",Continue:"Continue",Back:"Back"},BasicDetails:{heading:"Basic Details",province:"Province",district:"District",city:"City",name:"Your Name",number:"Contact Number",number2:"Secondary Contact Number (Optional)",email:"Email (Optional)"},ProductDetails:{heading:"Product Details",clickText:"Click the button below to add your product",button:"Add Product"},AddProduct:{heading:"Add new product",product:"Product",rawMaterial:"Raw Material",category:"Product category",subCategory:"Product sub category",name:"Product name",pricing:"Pricing range",text1:`Please select the units of quantity when adding price.
(For example: per kg, per liter, per gram, per one piece, etc.)`,supplyQuantity:"Monthly Supply Quantity",orderQuantity:"Monthly Order Quantity (If any)",supplyFrequency:"SupplyFrequency?",otherDetails:"Other Product Details",monthRange:"Select a month range",text2:" (Any additional relevant details about the product, such as expiration details, packaging sizes, etc)",monthly:"Monthly",custom:"Custom"},BusinessDetails:{heading:"Have you registered your business?",yes:"Yes",no:"No",type:"If Yes, what is the type of your business?",pvt:"Private Limited Company",partnership:"Partnership",solo:"Solo Proprietor",name:"Please mention your business name"},CertificatesDetails:{heading:"Do you have any quality certificates?",yes:"Yes",no:"No",note:"If Yes, please note them here"},ExportingDetails:{heading:"Are you presently exporting your product?",yes:"Yes",no:"No",note:"If Yes, which countries are you exporting to?"},AskForExport:{heading:"Would you be open to supplying your product for us to handle the export?",yes:"Yes",no:"No"},Summary:{heading:"Summary",certificates:"Certificates",countries:"Countries"},FinalPage:{heading1:"Thank you for submitting",heading2:"your application!",text:`Our Ceylon Exports Hub Supply Management Team
will contact you after reviewing your details.
For further assistance, feel free to reach out to us via
email at info.cehub@gmail.lk or contact us on WhatsApp at
0702300325.`}}},si:{translation:{LanguageSelect:{heading:"කරුණාකර භාෂාව තෝරන්න",English:"English",Sinhala:"සිංහල",Tamil:"தமிழ்",Continue:"ඉදිරියට",Back:"ආපසු"},BasicDetails:{heading:"නිෂ්පාදන විස්තර",province:"පළාත",district:"දිස්ත්‍රික්කය",city:"නගරය",name:"නම",number:"ඇමතුම් අංකය",number2:"දෙවැනි ඇමතුම් අංකය (Optional)",email:"Email ලිපිනය (Optional)"},ProductDetails:{heading:"නිෂ්පාදන විස්තර",clickText:"පහත සඳහන් 'Add Product' ක්ලික් කර ඔබ සපයන නිෂ්පාදන වල තොරතුරු ඇතුලත් කරන්න"},AddProduct:{heading:"නිෂ්පාදනයක් එකතු කරන්න",product:"නිෂ්පාදනය",rawMaterial:"අමුද්‍රව්‍ය",category:"නිෂ්පාදන කාණ්ඩය",subCategory:"නිෂ්පාදන උප කාණ්ඩය",name:"නිෂ්පාදනයේ නම",pricing:"මිල පරාසය",text1:`මිල සඳහන් කිරීමේදී කරුණාකර මිනුම් ඒකක තෝරන්න. 
(උදාහරණයක් ලෙස: කිලෝග්‍රෑමයකට, ලීටරයකට, ග්‍රෑම් එකකට, එක් අයිතමයක්, ආදිය)`,supplyQuantity:"මසකට සැපයීමට හැකි ප්‍රමාණය",orderQuantity:"අවම ඇණවුම් ප්‍රමාණය (එවැන්නක් තිබේනම්)",supplyFrequency:"සැපයුම් හැකියාව",otherDetails:"නිෂ්පාදනයේ අනෙකුත් විස්තර",monthRange:"මාස පරාසයක් තෝරන්න",text2:" (කල් ඉකුත් වීමේ විස්තර, ඇසුරුම් ප්‍රමාණයන් යනාදී නිෂ්පාදනය පිළිබඳ ඕනෑම අමතර අදාළ විස්තර)",monthly:"සෑම මසකම සැපයීමට හැක",custom:"මාස කිහිපයක පමණක් සැපයීමට හැක"},BusinessDetails:{heading:"ඔබගේ ව්‍යාපාරය ලියාපදිංචි කර තිබේද?",yes:"ඔව්",no:"නැත",type:"ඔව් නම්, ලියාපදිංචි කරන ලද්දේ",pvt:"සීමාසහිත පුද්ගලික සමාගම",partnership:"හවුල්ව්‍යාපාරයක්",solo:"තනි පුද්ගල ව්‍යාපාරයක්",name:"කරුණාකර ඔබේ ව්‍යාපාරයේ නම සඳහන් කරන්න"},CertificatesDetails:{heading:"ඔබට තත්ත්ව සහතික තිබේද?",yes:"ඔව්",no:"නැත",note:"ඔව් නම්, තත්ත්ව සහතික පහතින් සඳහන් කරන්න."},ExportingDetails:{heading:"ඔබ දැනටත් ඔබේ නිෂ්පාදනය අපනයනය කරනවාද?",yes:"ඔව්",no:"නැත",note:"ඔව් නම් කුමන රටවල් වලටද?"},AskForExport:{heading:"ඔබේ නිෂ්පාදනය අප ආයතනය හරහා අපනයනය කිරීමට කැමතිද?",yes:"ඔව්",no:"නැත"},Summary:{heading:"සාරාංශය",certificates:"සහතික",countries:"රටවල්"},FinalPage:{heading1:"ඔබගේ අයදුම්පත ඉදිරිපත් කිරීම ගැන",heading2:"ඔබට ස්තුතියි!",text:`ඔබගේ අයදුම්පත විශ්ලේෂණය කිරීමෙන් පසුව
 Exports Hub සැපයුම් කළමනාකරණ කණ්ඩායම
ඔබ හා සම්බන්ධ වනු ඇත. ඔබට අමතර සහාය අවශ්‍ය නම්,
කරුණාකර info.cehub@gmail.lk විද්‍යුත් තැපෑලෙන්
හෝ 0702300325 WhatsApp හරහා
අප හා සම්බන්ධ වන්න`}}},ta:{translation:{LanguageSelect:{heading:"மொழியைத் தேர்ந்தெடுக்கவும்",English:"English",Sinhala:"සිංහල",Tamil:"தமிழ்",Continue:"தொடரவும்",Back:"மீண்டும்"},BasicDetails:{heading:"அடிப்படை விவரங்கள்",province:"மாகாணம்",district:"மாவட்டம்",city:"நகரம்",name:"உங்கள் பெயர்",number:"தொடர்பு எண்",number2:"இரண்டாம் நிலை தொடர்பு எண் (Optional)",email:"மின்னஞ்சல் (விரும்பினால்)"},ProductDetails:{heading:"பொருள் விவரங்கள்",clickText:"உங்கள் பொருளை சேர்க்க கீழே உள்ள பட்டனை அழுத்துங்கள்",button:"பொருள் சேர்க்க"},AddProduct:{heading:"புதிய பொருள் சேர்க்க",category:"பொருள் வகை",product:"தயாரிப்பு",rawMaterial:"மூல பொருட்கள்",subCategory:"பொருள் துணை வகை",name:"பொருள் பெயர்",pricing:"விலை வரம்பு",text1:`விலையை சேர்க்கும்போது அளவுகளை தேர்ந்தெடுக்கவும். 
 (உதாரணம்: ஒரு கிலோவுக்கு, ஒரு லிட்டருக்கு, ஒரு கிராமுக்கு, ஒரு காய்கறி, போன்றவை)`,supplyQuantity:"மாதாந்திர வழங்கும் அளவு",orderQuantity:"மாதாந்திர ஆர்டர் அளவு (இருந்தால்)",supplyFrequency:"வழங்கும் அளவுகள்?",otherDetails:"பிற பொருள் விவரங்கள்",monthRange:"ஒரு மாதம் இடம் தேர்வு செய்க",text2:"(கடந்துப்போக விவரங்கள், உறைந்த அளவுகள் போன்றவை போல பிற செய்திகள்)",monthly:"மாதாந்திர",custom:"கஸ்டம்"},BusinessDetails:{heading:"உங்கள் வணிகத்தை பதிவு செய்துள்ளீர்களா?",yes:"ஆம்",no:"இல்லை",type:"ஆம் என்றால், உங்கள் வணிக வகை என்ன?",pvt:"தனிப்பட்ட கம்பெனி",partnership:"இணையம்",solo:"தனியார் சொந்தம்",name:"உங்கள் வணிக பெயரை குறிப்பிடுக"},CertificatesDetails:{heading:"உங்களிடம் அதிகார சான்றிதழ்கள் உள்ளனவா?",yes:"ஆம்",no:"இல்லை",note:"ஆம் என்றால், அவைகளை இங்கே குறிக்கவும்"},ExportingDetails:{heading:"உங்கள் தற்போதைய உற்பத்தியை ஏதேனும் நாடுகளுக்கு வழங்குகின்றீர்களா?",yes:"ஆம்",no:"இல்லை",note:"ஆம் என்றால், நீங்கள் எந்த நாடுகளுக்கு வழங்குகிறீர்கள்?"},AskForExport:{heading:"உங்கள் பொருளை நாங்கள் வர்த்தகம் செய்வது ஏன்?",yes:"ஆம்",no:"இல்லை"},Summary:{heading:"சுருக்கம்",certificates:"சான்றிதழ்கள்",countries:"நாடுகள்"},FinalPage:{heading1:"சமர்ப்பிக்கும் முடிவுகள் க்கு நன்றி",heading2:"உங்கள் விண்ணப்பை!",text:`எங்கள் சீலன் எக்ஸ்போர்ட்ஸ் ஹப் வழங்கும் பொருள் மேலாண்மை குழு
உங்கள் விவரங்களை பராமரித்துப் பிறகு உங்களை தொடர்பு கொள்ளும்.
மேலும் உதவி தேவைப்பட்டால், நீங்கள் எங்களுடைய மின்னஞ்சலில்
info.cehub@gmail.lk இல் அல்லது வாட்ஸ்அப்பில் 0702300325 எண்ணில் தொடர்பு கொள்ளலாம்.`}}}}});O.createRoot(document.getElementById("root")).render(s.jsx(j.StrictMode,{children:s.jsx(c.Suspense,{fallback:"Loading",children:s.jsx(Le,{})})}));export{x as a,ue as b,mt as c,xt as d,p as e,gt as f,ht as g,ft as h,yt as i,ce as j,ut as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Home-On8WG-45.js","assets/react-G0VBmWxS.js","assets/@babel-SkaEL2tl.js","assets/react-material-ui-carousel-QTvEzrJh.js","assets/framer-motion-l-wR5QWs.js","assets/tslib-k87c9z7b.js","assets/hey-listen-HbYZzxJK.js","assets/style-value-types-q0ooMh1B.js","assets/popmotion-1KgIVb-U.js","assets/framesync-WrSsKRXI.js","assets/@mui-yOQ-dzD9.js","assets/clsx-2Jv0kmJG.js","assets/react-transition-group-NM3J4weW.js","assets/react-dom-wkoTY-Le.js","assets/scheduler-iwWdm5Ml.js","assets/@emotion-cuKUoGzU.js","assets/hoist-non-react-statics-MGeNrgoW.js","assets/react-is-cHOZVpRJ.js","assets/stylis-UTZzoVRx.js","assets/@popperjs-zyV4rJhQ.js","assets/react-router-mRKdHBLr.js","assets/@remix-run-EOO7uaRF.js","assets/LanguageSelect-bn_kGcay.js","assets/react-redux-3PpUptFA.js","assets/use-sync-external-store-BBrSSgse.js","assets/react-i18next-Ld4qvRaQ.js","assets/html-parse-stringify-gNhRsLCw.js","assets/void-elements-KNW2nDh4.js","assets/react-router-dom-8rnrgVg8.js","assets/@reduxjs-OWLxucYK.js","assets/redux-vWdE9iQ8.js","assets/immer-2VFgZgpn.js","assets/reselect-knrTZChY.js","assets/redux-thunk-qyK_zz9Y.js","assets/prop-types-nTg9hSou.js","assets/i18next-NCffezqA.js","assets/i18next-http-backend-6HvsPMKJ.js","assets/cross-fetch-xd-Enngl.js","assets/BasicDetails-SXZWg9ol.js","assets/ProductDetails-oabiFret.js","assets/BusinessDetails-fCOOwY__.js","assets/CertificatesDetails-zHccvwWs.js","assets/ExportingDetails-3eVfmfSS.js","assets/AskForExport-vjZ-plXm.js","assets/Summary-eNnugNOZ.js","assets/FinalPage-IGQA3H_y.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}