import{r as m,j as s}from"./react-G0VBmWxS.js";import{a as B,h as l}from"./index-jo0I7i86.js";import{u as C}from"./react-redux-3PpUptFA.js";import{u as v}from"./react-i18next-Ld4qvRaQ.js";import{T as r,D,i as R,R as T,G as o,j as x,k as b,B as d,m as W}from"./@mui-lgJpmoNL.js";import"./@babel-SkaEL2tl.js";import"./react-dom-wkoTY-Le.js";import"./scheduler-iwWdm5Ml.js";import"./react-router-dom-8rnrgVg8.js";import"./react-router-mRKdHBLr.js";import"./@remix-run-EOO7uaRF.js";import"./@reduxjs-OWLxucYK.js";import"./redux-vWdE9iQ8.js";import"./immer-2VFgZgpn.js";import"./reselect-knrTZChY.js";import"./redux-thunk-qyK_zz9Y.js";import"./axios-zw96FDk0.js";import"./prop-types-nTg9hSou.js";import"./i18next-NCffezqA.js";import"./i18next-http-backend-6HvsPMKJ.js";import"./cross-fetch-xd-Enngl.js";import"./clsx-2Jv0kmJG.js";import"./react-transition-group-NM3J4weW.js";import"./@emotion-cuKUoGzU.js";import"./hoist-non-react-statics-MGeNrgoW.js";import"./react-is-cHOZVpRJ.js";import"./stylis-UTZzoVRx.js";import"./@popperjs-zyV4rJhQ.js";import"./use-sync-external-store-BBrSSgse.js";import"./html-parse-stringify-gNhRsLCw.js";import"./void-elements-KNW2nDh4.js";const os=()=>{var g;const a=C(),n=(g=B.getState().form.formData)==null?void 0:g.businessRegDetails;console.log(n);const{t}=v(),[i,p]=m.useState(n.businessType),[h,j]=m.useState(n.registered!==0),[f,c]=m.useState(n.businessName),y=e=>{j(e.target.value==="true"),a(l({registered:e.target.value==="true"?1:0})),e.target.value==="false"&&(a(l({businessType:"",businessName:""})),c(""),p(""))},u=e=>{p(e),a(l({businessType:e}))};return s.jsxs("div",{children:[s.jsx(r,{variant:"h6",fontWeight:700,mt:2,mb:2,children:t("translation:BusinessDetails:heading")}),s.jsx(D,{sx:{mb:3}}),s.jsx(R,{fullWidth:!0,sx:{pl:2,pr:2},children:s.jsx(T,{"aria-labelledby":"demo-radio-buttons-group-label",value:h.toString(),onChange:y,name:"radio-buttons-group",children:s.jsxs(o,{container:!0,children:[s.jsx(o,{item:!0,xs:6,children:s.jsx(r,{variant:"h5",children:t("translation:BusinessDetails:yes")})}),s.jsx(o,{item:!0,xs:6,display:"flex",justifyContent:"end",mb:2,children:s.jsx(x,{value:"true",control:s.jsx(b,{}),labelPlacement:"start"})}),s.jsx(o,{item:!0,xs:6,children:s.jsx(r,{variant:"h5",children:t("translation:BusinessDetails:no")})}),s.jsx(o,{item:!0,xs:6,display:"flex",justifyContent:"end",mb:2,children:s.jsx(x,{value:"false",control:s.jsx(b,{}),labelPlacement:"start"})})]})})}),h&&s.jsxs(s.Fragment,{children:[s.jsx(r,{fontWeight:700,mt:2,mb:2,children:t("translation:BusinessDetails:type")}),s.jsx(d,{sx:{borderRadius:2,border:i===2?2:1,p:1,borderColor:i===2?"#F47621":"lightgrey",mt:4,"&:hover":{backgroundColor:"lightgray",cursor:"pointer"}},onClick:()=>u(2),children:s.jsx(r,{fontWeight:500,children:t("translation:BusinessDetails:pvt")})}),s.jsx(d,{sx:{borderRadius:2,border:i===1?2:1,p:1,borderColor:i===1?"#F47621":"lightgrey",mt:2,mb:2,"&:hover":{backgroundColor:"lightgray",cursor:"pointer"}},onClick:()=>u(1),children:s.jsx(r,{fontWeight:500,children:t("translation:BusinessDetails:partnership")})}),s.jsx(d,{sx:{borderRadius:2,border:i===0?2:1,p:1,borderColor:i===0?"#F47621":"lightgrey","&:hover":{backgroundColor:"lightgray",cursor:"pointer"}},onClick:()=>u(0),children:s.jsx(r,{fontWeight:500,children:t("translation:BusinessDetails:solo")})}),s.jsx(r,{fontWeight:700,mt:4,mb:2,children:t("translation:BusinessDetails:name")}),s.jsx(W,{fullWidth:!0,InputProps:{sx:{borderRadius:3}},placeholder:"ABC Private Limited",multiline:!0,value:f,rows:4,maxRows:4,onChange:e=>{c(e.target.value),a(l({businessName:e.target.value}))}})]})]})};export{os as default};
