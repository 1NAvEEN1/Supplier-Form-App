import{r as d,j as e}from"./react-sra79OoS.js";import{T as r,D as j,B as s,b as a,k as b,G as o,f,i as g,M as l}from"./@mui-BMwiChaV.js";import"./@babel-SkaEL2tl.js";import"./clsx-2Jv0kmJG.js";import"./react-transition-group-KhrBO5L5.js";import"./react-dom-XK83SyjR.js";import"./scheduler-iwWdm5Ml.js";import"./@emotion-zC55prgp.js";import"./hoist-non-react-statics-MGeNrgoW.js";import"./react-is-cHOZVpRJ.js";import"./stylis-UTZzoVRx.js";import"./@popperjs-zyV4rJhQ.js";const O=()=>{const[c,h]=d.useState(!1),t=i=>n=>{n.type==="keydown"&&(n.key==="Tab"||n.key==="Shift")||h(i)},[x,u]=d.useState(10),p=i=>{u(i)},m=e.jsx(s,{sx:{display:"flex",justifyContent:"center",backgroundColor:"#DCDCDC"},children:e.jsxs(o,{container:!0,sx:{minHeight:"90svh",p:2,width:500,borderRadius:4,bgcolor:"white",opacity:1},children:[e.jsx(o,{item:!0,xs:12,children:e.jsx(r,{textAlign:"center",fontWeight:600,children:"Add new product"})}),e.jsx(o,{item:!0,xs:12,children:e.jsx(s,{role:"presentation",onKeyDown:t(!1),children:e.jsxs(s,{sx:{boxShadow:"0px 5px 8px 5px rgba(0, 0, 0, 0.03)",borderRadius:3,mt:3,pt:1,pr:2,pb:1},children:[e.jsx(r,{variant:"b1",fontWeight:600,color:"primary",pl:2,children:"Product category"}),e.jsx(f,{fullWidth:!0,children:e.jsxs(g,{id:"demo-simple-select",value:x,sx:{boxShadow:"none",".MuiOutlinedInput-notchedOutline":{border:0},borderRadius:3,height:30},onChange:i=>p(i.target.value),children:[e.jsx(l,{value:10,children:e.jsx("b",{children:"Spices"})}),e.jsx(l,{value:20,children:e.jsx("b",{children:"Oils"})}),e.jsx(l,{value:30,children:e.jsx("b",{children:"condiments"})})]})})]})})}),e.jsxs(o,{item:!0,xs:12,children:[e.jsx(a,{variant:"contained",size:"large",fullWidth:!0,sx:{height:50,borderRadius:3,color:"white",mt:2},onClick:t(!1),children:e.jsx(r,{textTransform:"capitalize",variant:"h6",children:"Save Product"})}),e.jsx(a,{size:"large",fullWidth:!0,sx:{height:50,borderRadius:3,color:"grey"},onClick:t(!1),children:e.jsx(r,{textTransform:"capitalize",variant:"h6",children:"Discard"})})]})]})});return e.jsxs("div",{children:[e.jsx(r,{variant:"h4",fontWeight:700,mt:2,mb:2,children:"Product Details"}),e.jsx(j,{sx:{mb:3}}),e.jsx(r,{textAlign:"center",children:"Click the button below to add your product"}),e.jsxs(s,{display:"flex",justifyContent:"center",mt:2,children:[e.jsx(a,{variant:"contained",size:"medium",sx:{borderRadius:2,color:"white"},onClick:t(!0),children:e.jsx(r,{textTransform:"capitalize",variant:"b1",children:"Add Product"})}),e.jsx(b,{anchor:"bottom",open:c,onClose:t(!1),sx:{opacity:0},children:m})]})]})};export{O as default};