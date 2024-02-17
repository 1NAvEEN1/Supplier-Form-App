import{r as c,j as e}from"./react-G0VBmWxS.js";import{u as se,a as J}from"./react-redux-3PpUptFA.js";import{b,e as ae,f as ie,g as _,h as L}from"./index-q2qLOw3t.js";import{a as oe}from"./axios-zw96FDk0.js";import{u as ne}from"./react-i18next-ErqPsgi7.js";import{B as C,G as o,T as i,D as N,R as Y,j as z,k as B,i as $,A as V,m as Q,b as R,u as U,I as X,n as le,o as de,p as ce,q as Z,t as K,v as ue}from"./@mui-sufotthT.js";import"./@babel-SkaEL2tl.js";import"./use-sync-external-store-BBrSSgse.js";import"./react-dom-wkoTY-Le.js";import"./scheduler-iwWdm5Ml.js";import"./react-router-dom-4OJrGarL.js";import"./react-router-kmEdF07T.js";import"./@remix-run-EOO7uaRF.js";import"./@reduxjs-OWLxucYK.js";import"./redux-vWdE9iQ8.js";import"./immer-2VFgZgpn.js";import"./reselect-knrTZChY.js";import"./redux-thunk-qyK_zz9Y.js";import"./prop-types-nTg9hSou.js";import"./i18next-NCffezqA.js";import"./i18next-http-backend-6HvsPMKJ.js";import"./cross-fetch-xd-Enngl.js";import"./clsx-2Jv0kmJG.js";import"./react-transition-group-NM3J4weW.js";import"./@emotion-cuKUoGzU.js";import"./hoist-non-react-statics-MGeNrgoW.js";import"./react-is-cHOZVpRJ.js";import"./stylis-UTZzoVRx.js";import"./@popperjs-zyV4rJhQ.js";const he=async()=>{const u="/Product/GetProductCategories";return oe.get(`https://supplierapi.cehub.lk/api${u}`).catch(d=>{console.log(d)})},pe=async u=>{const d=`/Product/GetProductSubCategories/${u}`;return oe.get(`https://supplierapi.cehub.lk/api${d}`).catch(n=>{console.log(n)})},ee="1px 5px 8px 5px rgba(0, 0, 0, 0.05)",te="-1px 1px 8px 5px rgba(255, 0, 0, 0.3)",re=({children:u,sx:d={},...n})=>e.jsx(C,{sx:{borderRadius:3,mt:3,pt:1,pr:0,pb:1,...d},...n,children:u}),ge=({closeDrawer:u})=>{const d=se(),{t:n,i18n:m}=ne(),x=J(t=>t.form.formData),S=J(t=>t.form.productCategoryNames),y={productOrRaw:!0,productCategoryId:0,productSubCategoryId:0,name:"",description:"",price:0,supplyQuantity:0,unitType:0,monthlySupplyQuantity:0,monthlyMinimumQuantity:0,supplyMonths:[],otherDetails:"",supplyFrequency:!0},[r,f]=c.useState(y),[v,I]=c.useState(""),[j,p]=c.useState([]),[P,w]=c.useState([]),[k,F]=c.useState(!1),[q,M]=c.useState(!1),G=async()=>{try{F(!0);const t=await he();p(t.data)}catch(t){console.error("Error fetching Categories:",t)}finally{F(!1)}};c.useEffect(()=>{G()},[]);const A=async()=>{try{M(!0);const t=await pe(r.productCategoryId);t.data.length==0?w([0]):w(t.data)}catch(t){console.error("Error fetching SubCategories:",t)}finally{M(!1)}};c.useEffect(()=>{r.productCategoryId!==0&&A()},[r.productCategoryId]),c.useEffect(()=>{var a;const t=b.getState().form.selectedProductIndex;t!==99&&f((a=b.getState().form.formData)==null?void 0:a.productDetails[t])},[b.getState().form.selectedProductIndex]);const s=(t,a,h=null)=>{I(""),f(h?g=>({...g,[t]:{...g[t],[h]:a}}):g=>({...g,[t]:a,...t==="productCategoryId"&&{productSubCategoryId:0}}))},l=t=>{const h=r.supplyMonths.includes(t)?r.supplyMonths.filter(g=>g!==t):[...r.supplyMonths,t];s("supplyMonths",h)},O=()=>{const t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return e.jsx(o,{container:!0,spacing:2,children:t.map((a,h)=>e.jsx(o,{item:!0,xs:3,display:"flex",justifyContent:"center",children:e.jsx(C,{bgcolor:r.supplyMonths.includes(a)?"#F47621":"#D5D8DC",onClick:()=>l(a),sx:{borderRadius:2,width:60,height:40,"&:hover":{cursor:"pointer",border:"2px solid #F47621"}},display:"flex",justifyContent:"center",alignItems:"center",children:e.jsx(i,{textAlign:"center",children:a})})},h))})},T=()=>r.productCategoryId==0?(L({message:"Please select a product category !",type:"error"}),I("category"),0):r.productOrRaw&&P[0]!=0&&r.productSubCategoryId==0?(L({message:"Please select a product subcategory !",type:"error"}),I("subCategory"),0):!r.supplyFrequency&&r.supplyMonths.length==0?(L({message:"Please select the month range !",type:"error"}),0):1,W=()=>{if(console.log(r),T()){const a=[...x.productDetails],h=[...S],g={category:j.find(D=>D.id===r.productCategoryId),subCategory:P.find(D=>D.id===r.productSubCategoryId)};b.getState().form.selectedProductIndex!==99?(a[b.getState().form.selectedProductIndex]=r,h[b.getState().form.selectedProductIndex]=g):(a.push(r),h.push(g)),d(ae(a)),d(ie(h)),f(y),d(_(99)),u()}},E=()=>{f(y),d(_(99)),u()};return e.jsx(C,{sx:{display:"flex",justifyContent:"center",bgcolor:"#F9FAFB"},children:e.jsxs(o,{container:!0,sx:{minHeight:"90svh",p:2,width:500,borderRadius:4},children:[e.jsxs(o,{item:!0,xs:12,children:[e.jsx(i,{textAlign:"center",fontWeight:600,mb:2,children:n("translation:AddProduct:heading")}),e.jsx(N,{style:{width:"100%",marginBottom:25}}),e.jsx(Y,{"aria-labelledby":"demo-radio-buttons-group-label",value:r.productOrRaw.toString(),onChange:t=>(s("productOrRaw",t.target.value==="true"),t.target.value==="false"&&s("productSubCategoryId",0)),name:"radio-buttons-group",children:e.jsxs(o,{container:!0,children:[e.jsx(o,{item:!0,xs:6,children:e.jsx(i,{variant:"h5",children:n("translation:AddProduct:product")})}),e.jsx(o,{item:!0,xs:6,display:"flex",justifyContent:"end",mb:2,children:e.jsx(z,{value:"true",control:e.jsx(B,{}),labelPlacement:"start"})}),e.jsx(o,{item:!0,xs:6,children:e.jsx(i,{variant:"h5",children:n("translation:AddProduct:rawMaterial")})}),e.jsx(o,{item:!0,xs:6,display:"flex",justifyContent:"end",mb:2,children:e.jsx(z,{value:"false",control:e.jsx(B,{}),labelPlacement:"start"})})]})}),e.jsxs(re,{sx:{boxShadow:v==="category"?te:ee},children:[e.jsx(i,{variant:"b1",fontWeight:500,color:"primary",pl:2,children:n("translation:AddProduct:category")}),e.jsx($,{fullWidth:!0,children:e.jsx(V,{value:j.find(t=>t.id===r.productCategoryId)||null,size:"small",options:j,getOptionLabel:t=>m.language==="en"?t.nameEnglish:m.language==="si"?t.nameSinhala:t.nameTamil,onChange:(t,a)=>{s("productCategoryId",a?a.id:0),w([])},renderInput:t=>e.jsx(Q,{...t,placeholder:n("translation:AddProduct:selectCategory"),sx:{".MuiOutlinedInput-notchedOutline":{border:0},borderRadius:3,height:40}}),loading:k})})]}),r.productOrRaw&&P[0]!=0&&e.jsx(e.Fragment,{children:e.jsxs(re,{sx:{boxShadow:v==="subCategory"?te:ee},children:[e.jsx(i,{variant:"b1",fontWeight:500,color:"primary",pl:2,children:n("translation:AddProduct:subCategory")}),e.jsx($,{fullWidth:!0,children:e.jsx(V,{value:P.find(t=>t.id===r.productSubCategoryId)||null,size:"small",options:P,getOptionLabel:t=>m.language==="en"?t.nameEnglish:m.language==="si"?t.nameSinhala:t.nameTamil,onChange:(t,a)=>{s("productSubCategoryId",a?a.id:0)},renderInput:t=>e.jsx(Q,{...t,placeholder:n("translation:AddProduct:selectSubCategory"),sx:{".MuiOutlinedInput-notchedOutline":{border:0},borderRadius:3,height:40}}),disabled:r.productCategoryId===0,loading:q})})]})})]}),e.jsxs(o,{item:!0,xs:12,mt:3,children:[e.jsx(i,{variant:"h6",fontWeight:700,mt:2,mb:2,children:n("translation:AddProduct:supplyFrequency")}),e.jsx(N,{sx:{mb:3}}),e.jsx($,{fullWidth:!0,sx:{pl:2,pr:2,mb:-2},children:e.jsx(Y,{"aria-labelledby":"demo-radio-buttons-group-label",value:r.supplyFrequency.toString(),onChange:t=>(s("supplyFrequency",t.target.value==="true"),t.target.value==="true"&&s("supplyMonths",[])),name:"radio-buttons-group",children:e.jsxs(o,{container:!0,children:[e.jsx(o,{item:!0,xs:9,children:e.jsx(i,{variant:"h5",children:n("translation:AddProduct:monthly")})}),e.jsx(o,{item:!0,xs:3,display:"flex",justifyContent:"end",mb:2,children:e.jsx(z,{value:"true",control:e.jsx(B,{}),labelPlacement:"start"})}),e.jsx(o,{item:!0,xs:9,children:e.jsx(i,{variant:"h5",children:n("translation:AddProduct:custom")})}),e.jsx(o,{item:!0,xs:3,display:"flex",justifyContent:"end",mb:2,children:e.jsx(z,{value:"false",control:e.jsx(B,{}),labelPlacement:"start"})})]})})}),!r.supplyFrequency&&e.jsxs(e.Fragment,{children:[e.jsx(i,{fontWeight:700,mt:2,mb:2,children:n("translation:AddProduct:monthRange")}),O()]}),e.jsx(N,{sx:{mt:3}})]}),e.jsxs(o,{item:!0,xs:12,mt:3,children:[e.jsx(i,{fontWeight:700,mt:2,mb:2,children:n("translation:AddProduct:otherDetails")}),e.jsx(i,{fontSize:"13px",mt:1,mb:1,children:n("translation:AddProduct:text2")}),e.jsx(Q,{fullWidth:!0,InputProps:{sx:{borderRadius:3}},multiline:!0,rows:7,value:r.otherDetails,onChange:t=>s("otherDetails",t.target.value)})]}),e.jsxs(o,{item:!0,xs:12,mt:3,children:[e.jsx(R,{variant:"contained",size:"large",fullWidth:!0,sx:{height:50,borderRadius:3,color:"white",mt:2},onClick:()=>W(),children:e.jsx(i,{textTransform:"capitalize",variant:"h6",children:"Save Product"})}),e.jsx(R,{size:"large",fullWidth:!0,sx:{height:50,borderRadius:3,color:"grey",mt:2},variant:"outlined",color:"secondary",onClick:()=>E(),children:e.jsx(i,{textTransform:"capitalize",variant:"h6",children:"Discard"})})]})]})})},Qe=()=>{const u=c.useRef(null),d=c.useRef(null),n=se(),{t:m,i18n:x}=ne(),[S,y]=c.useState(!1),[r,f]=c.useState(!1),v=U("(max-width:768px)"),I=U("(min-width:769px)"),j=b.getState().form.formData.productDetails,p=b.getState().form.productCategoryNames,[P,w]=c.useState(0),k=s=>l=>{l.type==="keydown"&&(l.key==="Tab"||l.key==="Shift")||y(s)},F=e.jsx(e.Fragment,{children:e.jsx(ge,{closeDrawer:()=>y(!1)})}),q=s=>{n(_(s)),y(!0)},M=()=>{const s=[...j];s.splice(P,1),n(ae(s)),A()};c.useEffect(()=>{S&&u.current&&(u.current.scrollTop=u.current.scrollHeight),S&&d.current&&(d.current.scrollTop=d.current.scrollHeight)},[S]);const G=s=>{w(s),f(!0)},A=()=>{f(!1)};return e.jsxs("div",{children:[e.jsx(i,{variant:"h4",fontWeight:700,mt:2,mb:2,children:m("translation:ProductDetails:heading")}),e.jsx(N,{sx:{mb:3}}),e.jsx(C,{display:"flex",flexDirection:"column",children:j.map((s,l)=>{var O,T,W,E,t,a,h,g,D,H;return e.jsx(C,{sx:{boxShadow:"1px 5px 8px 5px rgba(0, 0, 0, 0.05)",borderRadius:3,mt:2,p:3,bgcolor:"#FFFFFF"},children:e.jsxs(o,{container:!0,children:[e.jsx(o,{item:!0,xs:9,children:s.productOrRaw?e.jsx(e.Fragment,{children:e.jsxs(i,{fontWeight:600,variant:"h6",children:[x.language=="en"?(O=p[l].category)==null?void 0:O.nameEnglish:x.language=="si"?(T=p[l].category)==null?void 0:T.nameSinhala:(W=p[l].category)==null?void 0:W.nameTamil,((E=p[l].subCategory)==null?void 0:E.nameEnglish)&&" - "+(x.language=="en"?(t=p[l].subCategory)==null?void 0:t.nameEnglish:x.language=="si"?(a=p[l].subCategory)==null?void 0:a.nameSinhala:(h=p[l].subCategory)==null?void 0:h.nameTamil)]})}):e.jsx(e.Fragment,{children:e.jsxs(i,{fontWeight:600,variant:"h6",children:[x.language=="en"?(g=p[l].category)==null?void 0:g.nameEnglish:x.language=="si"?(D=p[l].category)==null?void 0:D.nameSinhala:(H=p[l].category)==null?void 0:H.nameTamil," - ",m("translation:AddProduct:rawMaterial")]})})}),e.jsxs(o,{item:!0,xs:3,display:"flex",justifyContent:"end",alignItems:"center",gap:3,children:[e.jsx(X,{size:"small",onClick:()=>G(l),children:e.jsx(le,{fontSize:"medium"})}),e.jsx(X,{size:"small",onClick:()=>q(l),children:e.jsx(de,{fontSize:"small"})})]}),e.jsx(o,{item:!0,xs:12,children:e.jsx(i,{mt:s!=null&&s.otherDetails?2:0,children:s==null?void 0:s.otherDetails})})]})},l)})}),!j.length>0&&e.jsx(e.Fragment,{children:e.jsx(i,{textAlign:"center",children:m("translation:ProductDetails:clickText")})}),e.jsxs(C,{display:"flex",justifyContent:"center",mt:2,children:[e.jsx(R,{variant:"contained",size:"medium",sx:{borderRadius:2,color:"white",ml:v?2:0},onClick:k(!0),children:e.jsx(i,{textTransform:"capitalize",variant:"b1",children:!j.length>0?"Add Product":"Add Another Product"})}),v&&e.jsx(ce,{anchor:"bottom",open:S,onClose:k(!1),slotProps:{backdrop:{sx:{background:"rgba(0,0,0,0.4)"}}},children:e.jsx("div",{ref:d,style:{overflowY:"auto",height:"100%"},children:F})}),I&&e.jsx(Z,{open:S,onClose:()=>y(!1),"aria-labelledby":"add-product-modal",fullWidth:!0,maxWidth:"md",slotProps:{backdrop:{sx:{background:"rgba(0,0,0,0.5)"}}},children:e.jsx(K,{ref:u,children:e.jsx(C,{sx:{bgcolor:"#F9FAFB",borderRadius:4,p:4},children:F})})})]}),e.jsxs(Z,{open:r,onClose:()=>A(),"aria-labelledby":"add-product-modal",maxWidth:"xs",slotProps:{backdrop:{sx:{background:"rgba(0,0,0,0.7)"}}},children:[e.jsx(ue,{children:"Are you sure to delete? "}),e.jsx(K,{ref:u,children:e.jsxs(C,{display:"flex",justifyContent:"space-between",pt:2,pl:2,pr:2,children:[e.jsx(R,{variant:"contained",color:"secondary",size:"small",onClick:()=>A(),children:"No"}),e.jsx(R,{size:"small",variant:"contained",onClick:()=>M(),children:"Yes"})]})})]})]})};export{Qe as default};