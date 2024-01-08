import{r as j,j as t}from"./react-G0VBmWxS.js";import{a as i,s as S}from"./index-zbrcSfav.js";import{u as y}from"./react-redux-3PpUptFA.js";import{u as C}from"./react-i18next-Ld4qvRaQ.js";import{T as p,D as W,B as d,g as u,j as h,k as o,m as c}from"./@mui-yOQ-dzD9.js";import"./@babel-SkaEL2tl.js";import"./react-dom-wkoTY-Le.js";import"./scheduler-iwWdm5Ml.js";import"./react-router-dom-8rnrgVg8.js";import"./react-router-mRKdHBLr.js";import"./@remix-run-EOO7uaRF.js";import"./@reduxjs-OWLxucYK.js";import"./redux-vWdE9iQ8.js";import"./immer-2VFgZgpn.js";import"./reselect-knrTZChY.js";import"./redux-thunk-qyK_zz9Y.js";import"./prop-types-nTg9hSou.js";import"./i18next-NCffezqA.js";import"./i18next-http-backend-6HvsPMKJ.js";import"./cross-fetch-xd-Enngl.js";import"./clsx-2Jv0kmJG.js";import"./react-transition-group-NM3J4weW.js";import"./@emotion-cuKUoGzU.js";import"./hoist-non-react-statics-MGeNrgoW.js";import"./react-is-cHOZVpRJ.js";import"./stylis-UTZzoVRx.js";import"./@popperjs-zyV4rJhQ.js";import"./use-sync-external-store-BBrSSgse.js";import"./html-parse-stringify-gNhRsLCw.js";import"./void-elements-KNW2nDh4.js";const ia=()=>{var v,D,f;const{t:r,i18n:w}=C(),x=y(),[e,b]=j.useState({province:i.getState().form.formData.basicDetails.province,district:i.getState().form.formData.basicDetails.district,city:i.getState().form.formData.basicDetails.city,name:i.getState().form.formData.basicDetails.name,phone:i.getState().form.formData.basicDetails.contactNo,phone2:i.getState().form.formData.basicDetails.contactNo2,email:i.getState().form.formData.basicDetails.email});j.useState();const s=(a,l)=>{b({...e,[a]:l}),x(S({...e,[a]:l}))},g=(a,l)=>{const m=l.replace(/\D/g,"").slice(0,10);console.log(m),b({...e,[a]:m}),x(S({...e,[a]:m}))},n={Western:{Colombo:["Colombo City","Dehiwala","Mount Lavinia"],Gampaha:["Gampaha","Negombo","Kadawatha"],Kalutara:["Kalutara","Panadura","Horana"]},Central:{Kandy:["Kandy","Peradeniya","Gampola"],Matale:["Matale","Dambulla","Galewela"],"Nuwara Eliya":["Nuwara Eliya","Hatton","Maskeliya"]}};return t.jsxs("div",{children:[t.jsx(p,{variant:"h4",fontWeight:700,mt:2,mb:2,children:r("translation:BasicDetails:heading")}),t.jsx(W,{sx:{mb:3}}),t.jsxs(d,{sx:{boxShadow:"0px 5px 8px 5px rgba(0, 0, 0, 0.03)",borderRadius:3,pt:1,pr:2,pb:1},children:[t.jsx(p,{variant:"b1",fontWeight:600,color:"primary",pl:2,children:r("translation:BasicDetails:province")}),t.jsx(u,{fullWidth:!0,children:t.jsxs(h,{value:e.province,onChange:a=>s("province",a.target.value),sx:{boxShadow:"none",".MuiOutlinedInput-notchedOutline":{border:0},borderRadius:3,height:30},placeholder:"Select a Province",children:[t.jsx(o,{value:"0",children:"Select a Province"}),Object.keys(n).map(a=>t.jsx(o,{value:a,children:a},a))]})})]}),t.jsxs(d,{sx:{boxShadow:"0px 5px 8px 5px rgba(0, 0, 0, 0.03)",borderRadius:3,pt:1,pr:2,mt:3,pb:1},children:[t.jsx(p,{variant:"b1",fontWeight:600,color:"primary",pl:2,children:r("translation:BasicDetails:district")}),t.jsx(u,{fullWidth:!0,children:t.jsxs(h,{value:e.district,onChange:a=>s("district",a.target.value),disabled:e.province==="0",sx:{boxShadow:"none",".MuiOutlinedInput-notchedOutline":{border:0},borderRadius:3,height:30},children:[t.jsx(o,{value:"0",children:"Select a District"}),e.province!=="0"&&Object.keys(n[e.province]||{}).map(a=>t.jsx(o,{value:a,children:a},a))]})})]}),t.jsxs(d,{sx:{boxShadow:"0px 5px 8px 5px rgba(0, 0, 0, 0.03)",borderRadius:3,mt:3,pt:1,pr:2,pb:1},children:[t.jsx(p,{variant:"b1",fontWeight:600,color:"primary",pl:2,children:r("translation:BasicDetails:city")}),t.jsx(u,{fullWidth:!0,children:t.jsxs(h,{value:e.city,onChange:a=>s("city",a.target.value),disabled:e.district==="0",sx:{boxShadow:"none",".MuiOutlinedInput-notchedOutline":{border:0},borderRadius:3,height:30},children:[t.jsx(o,{value:"0",children:"Select a City"}),e.district!=="0"&&Array.isArray((v=n[e.province])==null?void 0:v[e.district])&&((f=(D=n[e.province])==null?void 0:D[e.district])==null?void 0:f.map(a=>t.jsx(o,{value:a,children:a},a)))]})})]}),t.jsx(c,{fullWidth:!0,InputProps:{sx:{borderRadius:3,mt:4}},placeholder:r("translation:BasicDetails:name"),value:e.name,onChange:a=>s("name",a.target.value)}),t.jsx(c,{fullWidth:!0,InputProps:{sx:{borderRadius:3,mt:4},inputProps:{inputMode:"numeric",pattern:"[0-9]*",maxLength:10}},plac:!0,placeholder:r("translation:BasicDetails:number"),value:e.phone,onChange:a=>g("phone",a.target.value)}),t.jsx(c,{fullWidth:!0,InputProps:{sx:{borderRadius:3,mt:4},inputProps:{inputMode:"numeric",pattern:"[0-9]*",maxLength:10}},plac:!0,placeholder:r("translation:BasicDetails:number2"),value:e.phone2,onChange:a=>g("phone2",a.target.value)}),t.jsx(c,{fullWidth:!0,InputProps:{sx:{borderRadius:3,mt:4}},placeholder:r("translation:BasicDetails:email"),value:e.email,onChange:a=>s("email",a.target.value)})]})};export{ia as default};
