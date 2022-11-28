"use strict";(self.webpackChunkwatermelon_slimmom=self.webpackChunkwatermelon_slimmom||[]).push([[223],{8624:function(e,n,t){var i=t(5777),r=t(184);n.Z=function(e){var n=e.type,t=e.id,s=e.onClick,a=e.text,l=e.isOpen;return(0,r.jsx)(i.zx,{type:n,id:t,onClick:s,minW:"181px",w:"min-content",py:"13px",px:"25px",open:l,background:"#FC842D",color:"#FFFFFF",boxShadow:"0px 4px 10px rgba(252, 132, 45, 0.5)",rounded:"30px",_hover:{background:"#c0580f"},children:a})}},5492:function(e,n,t){t.d(n,{Z:function(){return E}});var i,r,s,a,l,d,o,x=t(9090),h=t(2831),p=t(8624),u=t(168),c=t(225),g=c.Z.form(i||(i=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 60px;\n\n  width: 100%;\n  padding-bottom: 41px;\n\n  @media screen and (min-width: 768px) {\n    align-items: start;\n\n    width: 512px;\n    padding-bottom: 48px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    align-items: end;\n    /* padding-bottom: 111px; */\n  }\n"]))),m=c.Z.h1(r||(r=(0,u.Z)(["\n  width: 100%;\n  margin-top: 72px;\n  margin-bottom: 10px;\n\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.44;\n\n  color: #212121;\n\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    margin-top: 140px;\n    margin-bottom: 48px;\n\n    font-size: 34px;\n    line-height: 1.2;\n  }\n"]))),b=c.Z.p(s||(s=(0,u.Z)(["\n  margin-top: 5px;\n  margin-bottom: 8px;\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.21;\n  letter-spacing: 0.04em;\n\n  color: #fc842d;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 12px;\n  }\n"]))),f=c.Z.label(a||(a=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  @media screen and (min-width: 768px) {\n    gap: 4px;\n  }\n"]))),j=c.Z.input(l||(l=(0,u.Z)(["\n  /* display: none; */\n  position: absolute;\n  width: 0px;\n  height: 0px;\n\n  &&:checked ~ span {\n    font-weight: 700;\n\n    color: #fc842d;\n  }\n  &&:checked + div div {\n    background-color: #fc842d;\n  }\n"]))),w=c.Z.span(d||(d=(0,u.Z)(["\n  font-size: 14px;\n  line-height: 1.21;\n  letter-spacing: 0.04em;\n\n  color: #9b9faa;\n  transition: color 300ms ease, font-size 300ms ease, font-weight 300ms ease;\n"]))),y=c.Z.div(o||(o=(0,u.Z)(["\n  width: 10px;\n  height: 10px;\n  border-radius: 50px;\n\n  background-color: transparent;\n\n  transition: background-color 300ms ease;\n"]))),v=t(8096),F="CalculatorAddProductForm_alert_box__ZY1oT",Z="CalculatorAddProductForm_alert_title__dmR1c",k=t(184);function C(){return(0,k.jsxs)(v.bZ,{status:"error",className:F,position:"absolute",top:{xs:"calc(-100% - 30px)",md:"calc(-100% - 10px)"},left:{xs:"calc(100% - 30px)",md:"calc(100% + 5px)"},display:"flex",flexDirection:"column",gap:"4px",w:{xs:"100px",lg:"120px"},p:{xs:"5px",lg:"7px"},fontSize:{xs:"8px",lg:"10px"},background:"#ffffff",rounded:"10px",boxShadow:"0px 4px 10px rgba(252, 132, 45, 0.5)",children:[(0,k.jsxs)("div",{className:Z,children:[(0,k.jsx)(v.zM,{m:"0"}),(0,k.jsx)(v.Cd,{lineHeight:"10px",m:"0",children:"Input fields are empty!"})]}),(0,k.jsx)(v.X,{lineHeight:"10px",fontSize:"8px",textAlign:"center",children:"Enter your details and try again."})]})}t(2791);function U(e){var n=e.text;return(0,k.jsx)(x.xv,{fontSize:"8px",m:"0",position:"absolute",top:{xs:"48px",md:"63px"},color:"red",children:n})}function E(e){var n=e.handleSubmit,t=e.handleChange,i=e.handleInputBlur,r=e.renderAlert,s=e.showValidationInput,a=e.blurOnInput,l=e.dataUser,d=e.bloodTypeUser;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(m,{children:"Calculate your daily calorie intake right now"}),(0,k.jsxs)(g,{onSubmit:n,children:[(0,k.jsxs)(x.xu,{display:"flex",gap:{md:"32px"},flexDirection:{xs:"column",md:"row"},width:{xs:"100%"},children:[(0,k.jsxs)(x.xu,{display:"flex",flexDirection:"column",gap:"10px",minWidth:{xs:"100%",md:"240px"},pb:{xs:"10px",md:"0px"},children:[(0,k.jsxs)(x.xu,{position:"relative",children:[(0,k.jsx)(h.Z,{labelName:"Height *",type:"number",name:"heightUser",handlerEvent:t,onBlur:i,width:"100%"}),a&&s&&(0===l.height||null===l.height)&&(0,k.jsx)(U,{text:"Please, enter your height"}),s&&0!==l.height&&null!==l.height&&(l.height<140||l.height>220)&&(0,k.jsx)(U,{text:"The height must be between 140cm and 220cm."})]}),(0,k.jsxs)(x.xu,{position:"relative",children:[(0,k.jsx)(h.Z,{labelName:"Age *",type:"number",name:"ageUser",handlerEvent:t,onBlur:i,width:"100%"}),a&&s&&(0===l.age||null===l.age)&&(0,k.jsx)(U,{text:"Please enter your age"}),s&&0!==l.age&&null!==l.age&&(l.age<16||l.age>120)&&(0,k.jsx)(U,{text:"The age should be between 16 years and 120 years."})]}),(0,k.jsxs)(x.xu,{position:"relative",children:[(0,k.jsx)(h.Z,{labelName:"Current weight *",type:"number",name:"currentWeightUser",handlerEvent:t,onBlur:i,width:"100%"}),a&&s&&(0===l.weight||null===l.weight)&&(0,k.jsx)(U,{text:"Please enter your current weight"}),s&&0!==l.weight&&null!==l.weight&&(l.weight<40||l.weight>150)&&(0,k.jsx)(U,{text:"The current weight should be between 40kg and 150kg."})]})]}),(0,k.jsxs)(x.xu,{display:"flex",flexDirection:"column",gap:"10px",minWidth:{xs:"100%",md:"240px"},children:[(0,k.jsxs)(x.xu,{position:"relative",children:[(0,k.jsx)(h.Z,{labelName:"Desired weight *",type:"number",name:"desiredWeightUser",handlerEvent:t,onBlur:i,width:"100%"}),a&&s&&(0===l.desiredWeight||null===l.desiredWeight)&&(0,k.jsx)(U,{text:"Please enter your desired weight"}),s&&0!==l.desiredWeight&&null!==l.desiredWeight&&(l.desiredWeight<40||l.desiredWeight>150)&&(0,k.jsx)(U,{text:"The desired weight should be between 40kg and 150kg."})]}),(0,k.jsxs)(x.xu,{children:[(0,k.jsx)(b,{children:"Blood type *"}),(0,k.jsxs)(x.xu,{display:"flex",gap:{xs:"24px",md:"28px"},children:[(0,k.jsxs)(f,{children:[(0,k.jsx)(j,{type:"radio",name:"bloodTypeUser",value:"1",checked:1===d,onChange:t}),(0,k.jsx)(x.xu,{display:"flex",justifyContent:"center",alignItems:"center",w:"20px",h:"20px",background:"#FFFFFF",border:"1px solid #E0E0E0",borderRadius:"50%",children:(0,k.jsx)(y,{})}),(0,k.jsx)(w,{children:"1"})]}),(0,k.jsxs)(f,{children:[(0,k.jsx)(j,{type:"radio",name:"bloodTypeUser",value:"2",onChange:t,checked:2===d}),(0,k.jsx)(x.xu,{display:"flex",justifyContent:"center",alignItems:"center",w:"20px",h:"20px",background:"#FFFFFF",border:"1px solid #E0E0E0",borderRadius:"50%",children:(0,k.jsx)(y,{})}),(0,k.jsx)(w,{children:"2"})]}),(0,k.jsxs)(f,{children:[(0,k.jsx)(j,{type:"radio",name:"bloodTypeUser",value:"3",onChange:t,checked:3===d}),(0,k.jsx)(x.xu,{display:"flex",justifyContent:"center",alignItems:"center",w:"20px",h:"20px",background:"#FFFFFF",border:"1px solid #E0E0E0",borderRadius:"50%",children:(0,k.jsx)(y,{})}),(0,k.jsx)(w,{children:"3"})]}),(0,k.jsxs)(f,{children:[(0,k.jsx)(j,{type:"radio",name:"bloodTypeUser",value:"4",onChange:t,checked:4===d}),(0,k.jsx)(x.xu,{display:"flex",justifyContent:"center",alignItems:"center",w:"20px",h:"20px",background:"#FFFFFF",border:"1px solid #E0E0E0",borderRadius:"50%",children:(0,k.jsx)(y,{})}),(0,k.jsx)(w,{children:"4"})]})]})]})]})]}),(0,k.jsxs)(x.xu,{position:"relative",children:[(0,k.jsx)(p.Z,{type:"submit",text:"Start losing weight"}),r&&(0,k.jsx)(C,{})]})]})]})}},223:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var i=t(9439),r=t(2791),s=t(9434),a=t(5492),l=t(5272),d=t(7746),o=t(9090),x=t(7872),h=t(4289),p=t(184);function u(){var e=(0,s.v9)(h.u.userId),n=(0,s.I0)(),t=(0,r.useState)(null),u=(0,i.Z)(t,2),c=u[0],g=u[1],m=(0,r.useState)(null),b=(0,i.Z)(m,2),f=b[0],j=b[1],w=(0,r.useState)(null),y=(0,i.Z)(w,2),v=y[0],F=y[1],Z=(0,r.useState)(null),k=(0,i.Z)(Z,2),C=k[0],U=k[1],E=(0,r.useState)(1),S=(0,i.Z)(E,2),W=S[0],I=S[1],T=(0,r.useState)(!1),_=(0,i.Z)(T,2),z=_[0],A=_[1],B=(0,r.useState)(!1),D=(0,i.Z)(B,2),N=D[0],P=D[1],R=(0,r.useState)(!1),O=(0,i.Z)(R,2),V=O[0],H=O[1],M={weight:v,height:c,age:f,desiredWeight:C,bloodType:W};return(0,p.jsxs)(d.i,{children:[(0,p.jsx)(o.xu,{children:(0,p.jsx)(a.Z,{handleSubmit:function(t){if(t.preventDefault(),P(!0),H(!0),A(!1),Object.values(M).some((function(e){return 0===e||null===e})))return A(!0),void setTimeout((function(){A(!1)}),3500);if(!(c<140||c>220||f<16||f>120||v<40||v>150||C<40||C>150)){var i={userId:e,dataUser:M};n((0,x.W)(i))}},handleChange:function(e){var n=e.target.name,t=Number(e.target.value);switch(n){case"heightUser":g(t);break;case"ageUser":j(t);break;case"currentWeightUser":F(t);break;case"desiredWeightUser":U(t);break;case"bloodTypeUser":I(t)}},handleInputBlur:function(){H(!1)},bloodTypeUser:W,renderAlert:z,showValidationInput:N,blurOnInput:V,dataUser:M})}),(0,p.jsxs)(o.xu,{position:"relative",children:[(0,p.jsx)(l.Z,{}),(0,p.jsx)(d.A,{})]})]})}}}]);
//# sourceMappingURL=223.8c37abff.chunk.js.map