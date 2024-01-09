import{r as g,j as e}from"./react-G0VBmWxS.js";import{u as J,a as _}from"./react-redux-3PpUptFA.js";import{a as A,c as N,d as B,e as v}from"./index-Q7kQOGj2.js";import{u as Y,T as K}from"./react-i18next-Ld4qvRaQ.js";import{B as y,G as n,T as s,D as z,R as U,h as M,i as Q,g as I,j as q,k as x,m as w,b as W,u as V,I as E,n as L,o as $,p as X,q as G,t as H,v as Z}from"./@mui-yOQ-dzD9.js";import"./@babel-SkaEL2tl.js";import"./use-sync-external-store-BBrSSgse.js";import"./react-dom-wkoTY-Le.js";import"./scheduler-iwWdm5Ml.js";import"./react-router-dom-8rnrgVg8.js";import"./react-router-mRKdHBLr.js";import"./@remix-run-EOO7uaRF.js";import"./@reduxjs-OWLxucYK.js";import"./redux-vWdE9iQ8.js";import"./immer-2VFgZgpn.js";import"./reselect-knrTZChY.js";import"./redux-thunk-qyK_zz9Y.js";import"./prop-types-nTg9hSou.js";import"./i18next-NCffezqA.js";import"./i18next-http-backend-6HvsPMKJ.js";import"./cross-fetch-xd-Enngl.js";import"./clsx-2Jv0kmJG.js";import"./react-transition-group-NM3J4weW.js";import"./@emotion-cuKUoGzU.js";import"./hoist-non-react-statics-MGeNrgoW.js";import"./react-is-cHOZVpRJ.js";import"./stylis-UTZzoVRx.js";import"./@popperjs-zyV4rJhQ.js";import"./html-parse-stringify-gNhRsLCw.js";import"./void-elements-KNW2nDh4.js";const C="1px 5px 8px 5px rgba(0, 0, 0, 0.05)",D="-1px 1px 8px 5px rgba(255, 0, 0, 0.3)",P=({children:d,sx:c={},...i})=>e.jsx(y,{sx:{borderRadius:3,mt:3,pt:1,pr:0,pb:1,...c},...i,children:d}),ee=({closeDrawer:d})=>{const c=J(),{t:i}=Y(),F=_(t=>t.form.formData),p={productOrRaw:!0,category:0,subCategory:0,name:"",pricing:{price:"",priceQtyUnitValue:"",priceQtyUnit:10},supplyQty:"",orderQty:"",supplyFrequency:!0,selectedMonths:[],otherDetails:""},[r,f]=g.useState(p),[m,u]=g.useState("");g.useEffect(()=>{var l;const t=A.getState().form.selectedProductIndex;t!==99&&f((l=A.getState().form.formData)==null?void 0:l.productDetails[t])},[A.getState().form.selectedProductIndex]);const a=(t,l,j=null)=>{u(""),f(j?h=>({...h,[t]:{...h[t],[j]:l}}):h=>({...h,[t]:l,...t==="category"&&{subCategory:0}}))},S=t=>{const j=r.selectedMonths.includes(t)?r.selectedMonths.filter(h=>h!==t):[...r.selectedMonths,t];a("selectedMonths",j)},k=()=>{const t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return e.jsx(n,{container:!0,spacing:2,children:t.map((l,j)=>e.jsx(n,{item:!0,xs:3,display:"flex",justifyContent:"center",children:e.jsx(y,{bgcolor:r.selectedMonths.includes(l)?"#F47621":"#D5D8DC",onClick:()=>S(l),sx:{borderRadius:2,width:60,height:40,"&:hover":{cursor:"pointer",border:"2px solid #F47621"}},display:"flex",justifyContent:"center",alignItems:"center",children:e.jsx(s,{textAlign:"center",children:l})})},j))})},T=()=>{if(r.productOrRaw){if(r.category==0)return v({message:"Please select a product category !",type:"error"}),u("category"),0;if(r.subCategory==0)return v({message:"Please select a product subcategory !",type:"error"}),u("subCategory"),0}return r.name==""?(v({message:"Please enter the product name !",type:"error"}),u("name"),0):r.pricing.price==""?(v({message:"Please enter the product price !",type:"error"}),u("price"),0):r.pricing.priceQtyUnitValue==""?(v({message:"Please enter the price unit quantity!",type:"error"}),u("unit"),0):r.supplyQty==""?(v({message:"Please enter the monthly supply quantity !",type:"error"}),u("supplyQty"),0):!r.supplyFrequency&&r.selectedMonths.length==0?(v({message:"Please select the month range !",type:"error"}),0):1},R=()=>{if(console.log(r),T()){const l=[...F.productDetails];A.getState().form.selectedProductIndex!==99?l[A.getState().form.selectedProductIndex]=r:l.push(r),c(N(l)),f(p),c(B(99)),d()}},O=()=>{f(p),c(B(99)),d()};return e.jsx(y,{sx:{display:"flex",justifyContent:"center",bgcolor:"#F9FAFB"},children:e.jsxs(n,{container:!0,sx:{minHeight:"90svh",p:2,width:500,borderRadius:4},children:[e.jsxs(n,{item:!0,xs:12,children:[e.jsx(s,{textAlign:"center",fontWeight:600,mb:2,children:i("translation:AddProduct:heading")}),e.jsx(z,{style:{width:"100%",marginBottom:25}}),e.jsx(U,{"aria-labelledby":"demo-radio-buttons-group-label",value:r.productOrRaw.toString(),onChange:t=>a("productOrRaw",t.target.value==="true"),name:"radio-buttons-group",children:e.jsxs(n,{container:!0,children:[e.jsx(n,{item:!0,xs:6,children:e.jsx(s,{variant:"h5",children:i("translation:AddProduct:product")})}),e.jsx(n,{item:!0,xs:6,display:"flex",justifyContent:"end",mb:2,children:e.jsx(M,{value:"true",control:e.jsx(Q,{}),labelPlacement:"start"})}),e.jsx(n,{item:!0,xs:6,children:e.jsx(s,{variant:"h5",children:i("translation:AddProduct:rawMaterial")})}),e.jsx(n,{item:!0,xs:6,display:"flex",justifyContent:"end",mb:2,children:e.jsx(M,{value:"false",control:e.jsx(Q,{}),labelPlacement:"start"})})]})}),r.productOrRaw&&e.jsxs(e.Fragment,{children:[" ",e.jsxs(P,{sx:{boxShadow:m==="category"?D:C},children:[e.jsx(s,{variant:"b1",fontWeight:500,color:"primary",pl:2,children:i("translation:AddProduct:category")}),e.jsx(I,{fullWidth:!0,children:e.jsxs(q,{id:"demo-simple-select",value:r.category,sx:{boxShadow:"none",".MuiOutlinedInput-notchedOutline":{border:0},borderRadius:3,height:30},onChange:t=>a("category",t.target.value),children:[e.jsx(x,{value:0,children:"Select a product category"}),e.jsx(x,{value:10,children:"Spices"}),e.jsx(x,{value:20,children:"Oils"}),e.jsx(x,{value:30,children:"condiments"})]})})]}),e.jsxs(P,{sx:{boxShadow:m==="subCategory"?D:C},children:[e.jsx(s,{variant:"b1",fontWeight:500,color:"primary",pl:2,children:i("translation:AddProduct:subCategory")}),e.jsx(I,{fullWidth:!0,children:e.jsxs(q,{id:"demo-simple-select",value:r.subCategory,sx:{boxShadow:"none",".MuiOutlinedInput-notchedOutline":{border:0},borderRadius:3,height:30},disabled:r.category==0,onChange:t=>a("subCategory",t.target.value),children:[e.jsx(x,{value:0,children:"Select a product sub category"}),e.jsx(x,{value:10,children:"Cinnamon"}),e.jsx(x,{value:20,children:"Turmeric"}),e.jsx(x,{value:30,children:"Pepper"})]})})]})]}),e.jsxs(P,{sx:{boxShadow:m==="name"?D:C},children:[e.jsx(s,{color:"primary",pl:2,children:i("translation:AddProduct:name")}),e.jsx(w,{size:"small",sx:{boxShadow:"none",".MuiOutlinedInput-notchedOutline":{border:0}},placeholder:"Product Name ABC",fullWidth:!0,value:r.name,onChange:t=>a("name",t.target.value)})]})]}),e.jsxs(n,{item:!0,xs:12,mt:3,children:[e.jsx(s,{fontWeight:600,children:i("translation:AddProduct:pricing")}),e.jsx(s,{fontSize:"13px",mt:1,children:e.jsxs(K,{i18nKey:"AddProduct.text1",children:["Please select the units of quantity when adding price. ",e.jsx("br",{}),"(For example: per kg, per liter, per gram, per one piece, etc.)"]})}),e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,xs:6,children:e.jsxs(P,{sx:{boxShadow:m==="price"?D:C},children:[e.jsx(s,{color:"primary",pl:2,children:"Price (Rupees)"}),e.jsx(w,{size:"small",sx:{boxShadow:"none",".MuiOutlinedInput-notchedOutline":{border:0}},placeholder:"0000",fullWidth:!0,type:"number",inputProps:{style:{fontWeight:"bold"}},value:r.pricing.price,onChange:t=>a("pricing",t.target.value,"price")})]})}),e.jsx(n,{item:!0,xs:6,children:e.jsxs(P,{height:85,sx:{boxShadow:m==="unit"?D:C},children:[e.jsx(s,{color:"primary",pl:2,mb:1,children:"Quantity unit"}),e.jsxs(n,{container:!0,children:[e.jsx(n,{item:!0,xs:5,mb:3,children:e.jsx(w,{size:"small",sx:{boxShadow:"none",".MuiOutlinedInput-notchedOutline":{border:0}},placeholder:"00",fullWidth:!0,type:"number",inputProps:{style:{fontWeight:"bold"}},value:r.pricing.priceQtyUnitValue,onChange:t=>a("pricing",t.target.value,"priceQtyUnitValue")})}),e.jsx(n,{item:!0,xs:7,mt:.5,children:e.jsx(I,{fullWidth:!0,children:e.jsxs(q,{id:"demo-simple-select",sx:{boxShadow:"none",".MuiOutlinedInput-notchedOutline":{border:0},borderRadius:3,height:30},fullWidth:!0,value:r.pricing.priceQtyUnit,onChange:t=>a("pricing",t.target.value,"priceQtyUnit"),children:[e.jsx(x,{value:10,children:"kg"}),e.jsx(x,{value:20,children:"gram"})]})})})]})]})})]})]}),e.jsxs(n,{item:!0,xs:12,mt:3,children:[e.jsx(s,{fontWeight:600,children:i("translation:AddProduct:supplyQuantity")}),e.jsx(n,{container:!0,spacing:2,children:e.jsx(n,{item:!0,xs:12,children:e.jsxs(P,{sx:{boxShadow:m==="supplyQty"?D:C},children:[e.jsx(s,{color:"primary",pl:2,children:"Quantity"}),e.jsx(w,{size:"small",sx:{boxShadow:"none",".MuiOutlinedInput-notchedOutline":{border:0}},placeholder:"0000",fullWidth:!0,type:"number",inputProps:{style:{fontWeight:"bold"}},value:r.supplyQty,onChange:t=>a("supplyQty",t.target.value)})]})})})]}),e.jsxs(n,{item:!0,xs:12,mt:3,children:[e.jsx(s,{fontWeight:600,children:i("translation:AddProduct:orderQuantity")}),e.jsx(n,{container:!0,spacing:2,children:e.jsx(n,{item:!0,xs:12,children:e.jsxs(P,{sx:{boxShadow:C},children:[e.jsx(s,{color:"primary",pl:2,children:"Quantity"}),e.jsx(w,{size:"small",sx:{boxShadow:"none",".MuiOutlinedInput-notchedOutline":{border:0}},placeholder:"0000",fullWidth:!0,type:"number",inputProps:{style:{fontWeight:"bold"}},value:r.orderQty,onChange:t=>a("orderQty",t.target.value)})]})})})]}),e.jsxs(n,{item:!0,xs:12,mt:3,children:[e.jsx(s,{variant:"h6",fontWeight:700,mt:2,mb:2,children:i("translation:AddProduct:supplyFrequency")}),e.jsx(z,{sx:{mb:3}}),e.jsx(I,{fullWidth:!0,sx:{pl:2,pr:2},children:e.jsx(U,{"aria-labelledby":"demo-radio-buttons-group-label",value:r.supplyFrequency.toString(),onChange:t=>a("supplyFrequency",t.target.value==="true"),name:"radio-buttons-group",children:e.jsxs(n,{container:!0,children:[e.jsx(n,{item:!0,xs:9,children:e.jsx(s,{variant:"h5",children:i("translation:AddProduct:monthly")})}),e.jsx(n,{item:!0,xs:3,display:"flex",justifyContent:"end",mb:2,children:e.jsx(M,{value:"true",control:e.jsx(Q,{}),labelPlacement:"start"})}),e.jsx(n,{item:!0,xs:9,children:e.jsx(s,{variant:"h5",children:i("translation:AddProduct:custom")})}),e.jsx(n,{item:!0,xs:3,display:"flex",justifyContent:"end",mb:2,children:e.jsx(M,{value:"false",control:e.jsx(Q,{}),labelPlacement:"start"})})]})})}),!r.supplyFrequency&&e.jsxs(e.Fragment,{children:[e.jsx(s,{fontWeight:700,mt:2,mb:2,children:i("translation:AddProduct:monthRange")}),k()]}),e.jsx(z,{sx:{mt:3}})]}),e.jsxs(n,{item:!0,xs:12,mt:3,children:[e.jsx(s,{fontWeight:700,mt:2,mb:2,children:i("translation:AddProduct:otherDetails")}),e.jsx(s,{fontSize:"13px",mt:1,mb:1,children:i("translation:AddProduct:text2")}),e.jsx(w,{fullWidth:!0,InputProps:{sx:{borderRadius:3}},multiline:!0,rows:7,value:r.otherDetails,onChange:t=>a("otherDetails",t.target.value)})]}),e.jsxs(n,{item:!0,xs:12,children:[e.jsx(W,{variant:"contained",size:"large",fullWidth:!0,sx:{height:50,borderRadius:3,color:"white",mt:2},onClick:()=>R(),children:e.jsx(s,{textTransform:"capitalize",variant:"h6",children:"Save Product"})}),e.jsx(W,{size:"large",fullWidth:!0,sx:{height:50,borderRadius:3,color:"grey",mt:2},variant:"outlined",color:"secondary",onClick:()=>O(),children:e.jsx(s,{textTransform:"capitalize",variant:"h6",children:"Discard"})})]})]})})},Oe=()=>{const d=g.useRef(null),c=g.useRef(null),i=J(),{t:F}=Y(),[p,r]=g.useState(!1),[f,m]=g.useState(!1),u=V("(max-width:768px)"),a=V("(min-width:769px)"),S=A.getState().form.formData.productDetails,[k,T]=g.useState(0),R=o=>b=>{b.type==="keydown"&&(b.key==="Tab"||b.key==="Shift")||r(o)},O=e.jsx(e.Fragment,{children:e.jsx(ee,{closeDrawer:()=>r(!1)})}),t=o=>{i(B(o)),r(!0)},l=()=>{const o=[...S];o.splice(k,1),i(N(o)),h()};g.useEffect(()=>{p&&d.current&&(d.current.scrollTop=d.current.scrollHeight),p&&c.current&&(c.current.scrollTop=c.current.scrollHeight)},[p]);const j=o=>{T(o),m(!0)},h=()=>{m(!1)};return e.jsxs("div",{children:[e.jsx(s,{variant:"h4",fontWeight:700,mt:2,mb:2,children:F("translation:ProductDetails:heading")}),e.jsx(z,{sx:{mb:3}}),e.jsx(y,{display:"flex",flexDirection:"column",children:S.map((o,b)=>e.jsx(y,{sx:{boxShadow:"1px 5px 8px 5px rgba(0, 0, 0, 0.05)",borderRadius:3,mt:2,p:3,bgcolor:"#FFFFFF"},children:e.jsxs(n,{container:!0,children:[e.jsxs(n,{item:!0,xs:7,children:[e.jsx(s,{fontWeight:600,variant:"h6",children:o.name}),o.productOrRaw?e.jsx(e.Fragment,{children:e.jsx(s,{children:"Spices - Cinnamon"})}):e.jsx(e.Fragment,{children:e.jsx(s,{children:F("translation:AddProduct:rawMaterial")})})]}),e.jsxs(n,{item:!0,xs:5,display:"flex",justifyContent:"end",alignItems:"center",gap:3,children:[e.jsx(E,{size:"small",onClick:()=>j(b),children:e.jsx(L,{fontSize:"medium"})}),e.jsx(E,{size:"small",onClick:()=>t(b),children:e.jsx($,{fontSize:"small"})})]}),e.jsx(n,{item:!0,xs:12,children:e.jsx(s,{mt:2,children:o.pricing.priceQtyUnitValue+(o.pricing.priceQtyUnit==10?"Kg":"gram")+" at Rs."+o.pricing.price+" can supply "+o.supplyQty+" units monthly."})})]})},b))}),!S.length>0&&e.jsx(e.Fragment,{children:e.jsx(s,{textAlign:"center",children:F("translation:ProductDetails:clickText")})}),e.jsxs(y,{display:"flex",justifyContent:"center",mt:2,children:[e.jsx(W,{variant:"contained",size:"medium",sx:{borderRadius:2,color:"white",ml:u?2:0},onClick:R(!0),children:e.jsx(s,{textTransform:"capitalize",variant:"b1",children:!S.length>0?"Add Product":"Add Another Product"})}),u&&e.jsx(X,{anchor:"bottom",open:p,onClose:R(!1),children:e.jsx("div",{ref:c,style:{overflowY:"auto",height:"100%"},children:O})}),a&&e.jsx(G,{open:p,onClose:()=>r(!1),"aria-labelledby":"add-product-modal",fullWidth:!0,maxWidth:"md",children:e.jsx(H,{ref:d,children:e.jsx(y,{sx:{bgcolor:"#F9FAFB",borderRadius:4,p:4},children:O})})})]}),e.jsxs(G,{open:f,onClose:()=>h(),"aria-labelledby":"add-product-modal",maxWidth:"xs",children:[e.jsx(Z,{children:"Are you sure to delete? "}),e.jsx(H,{ref:d,children:e.jsxs(y,{display:"flex",justifyContent:"space-between",pl:2,pr:2,children:[e.jsx(W,{variant:"contained",color:"warning",size:"small",onClick:()=>h(),children:"No"}),e.jsx(W,{size:"small",color:"error",variant:"contained",onClick:()=>l(),children:"Yes"})]})})]})]})};export{Oe as default};
