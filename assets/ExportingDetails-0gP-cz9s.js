import{r as l,j as t}from"./react-G0VBmWxS.js";import{a as g,j as p}from"./index-dtzAblCF.js";import{u as j}from"./react-redux-3PpUptFA.js";import{u as f}from"./react-i18next-Ld4qvRaQ.js";import{T as o,D as b,i as v,R as D,G as e,j as m,k as u,m as C}from"./@mui-lgJpmoNL.js";import"./@babel-SkaEL2tl.js";import"./react-dom-wkoTY-Le.js";import"./scheduler-iwWdm5Ml.js";import"./react-router-dom-8rnrgVg8.js";import"./react-router-mRKdHBLr.js";import"./@remix-run-EOO7uaRF.js";import"./@reduxjs-OWLxucYK.js";import"./redux-vWdE9iQ8.js";import"./immer-2VFgZgpn.js";import"./reselect-knrTZChY.js";import"./redux-thunk-qyK_zz9Y.js";import"./prop-types-nTg9hSou.js";import"./i18next-NCffezqA.js";import"./i18next-http-backend-6HvsPMKJ.js";import"./cross-fetch-xd-Enngl.js";import"./clsx-2Jv0kmJG.js";import"./react-transition-group-NM3J4weW.js";import"./@emotion-cuKUoGzU.js";import"./hoist-non-react-statics-MGeNrgoW.js";import"./react-is-cHOZVpRJ.js";import"./stylis-UTZzoVRx.js";import"./@popperjs-zyV4rJhQ.js";import"./use-sync-external-store-BBrSSgse.js";import"./html-parse-stringify-gNhRsLCw.js";import"./void-elements-KNW2nDh4.js";const $=()=>{let a=g.getState().form.formData.exportingDetails;const s=j(0),{t:i}=f(),[n,x]=l.useState(a.exporting!==0),[d,c]=l.useState(a.countries),h=r=>{x(r.target.value==="true"),s(p({exporting:r.target.value==="true"?1:0}))};return t.jsxs("div",{children:[t.jsx(o,{variant:"h6",fontWeight:700,mt:2,mb:2,children:i("translation:ExportingDetails:heading")}),t.jsx(b,{sx:{mb:3}}),t.jsx(v,{fullWidth:!0,sx:{pl:2,pr:2},children:t.jsx(D,{"aria-labelledby":"demo-radio-buttons-group-label",value:n.toString(),onChange:h,name:"radio-buttons-group",children:t.jsxs(e,{container:!0,children:[t.jsx(e,{item:!0,xs:6,children:t.jsx(o,{variant:"h5",children:i("translation:ExportingDetails:yes")})}),t.jsx(e,{item:!0,xs:6,display:"flex",justifyContent:"end",mb:2,children:t.jsx(m,{value:"true",control:t.jsx(u,{}),labelPlacement:"start"})}),t.jsx(e,{item:!0,xs:6,children:t.jsx(o,{variant:"h5",children:i("translation:ExportingDetails:no")})}),t.jsx(e,{item:!0,xs:6,display:"flex",justifyContent:"end",mb:2,children:t.jsx(m,{value:"false",control:t.jsx(u,{}),labelPlacement:"start"})})]})})}),n&&t.jsxs(t.Fragment,{children:[t.jsx(o,{fontWeight:700,mt:2,mb:2,children:i("translation:ExportingDetails:note")}),t.jsx(C,{fullWidth:!0,InputProps:{sx:{borderRadius:3}},placeholder:"USA, UK ,Canada, Japan , India",multiline:!0,rows:7,value:d,onChange:r=>{c(r.target.value),s(p({countries:r.target.value}))}})]})]})};export{$ as default};