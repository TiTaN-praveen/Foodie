(this.webpackJsonpfoodie=this.webpackJsonpfoodie||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1NYMe",summary:"CartItem_summary__3ykol",price:"CartItem_price__2JRQM",amount:"CartItem_amount__3Natx",actions:"CartItem_actions__w1Tp-"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1Vj6Y",total:"Cart_total__1c0bG",actions:"Cart_actions__1dZkV","button--alt":"Cart_button--alt__38EMh",button:"Cart_button__2a2Lz"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3Vg9P",icon:"HeaderCartButton_icon__1Go8H",badge:"HeaderCartButton_badge__3Fhq2",bump:"HeaderCartButton_bump__SJtY2"}},,function(e,t,n){e.exports={meal:"MealItem_meal__3pcyR",description:"MealItem_description__3mqt-",price:"MealItem_price__pp9Jm"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3YjIv",modal:"Modal_modal__3KUBL","slide-down":"Modal_slide-down__2JgTw"}},,function(e,t,n){e.exports={meals:"AvailableMeals_meals__3n-R0","meals-appear":"AvailableMeals_meals-appear__2D_5_"}},function(e,t,n){e.exports={header:"Header_header__I5DWJ","main-image":"Header_main-image__uo7I0"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__XgDCz"}},function(e,t,n){e.exports={card:"Card_card__1s4UQ"}},function(e,t,n){e.exports={form:"MealItemForm_form__1as3a"}},function(e,t,n){e.exports={input:"Input_input__3-9m3"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(6),r=n.n(i),s=(n(24),n(3)),o=n(16),l=n.n(o),d=n(0),u=function(){return Object(d.jsxs)("section",{className:l.a.summary,children:[Object(d.jsx)("h2",{children:"Delicious Food, Delivered to you"}),Object(d.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(d.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},m=n(13),j=n.n(m),b=n(17),h=n.n(b),x=function(e){return Object(d.jsx)("div",{className:h.a.card,children:e.children})},O=n(10),p=n.n(O),f=a.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),_=n(18),v=n.n(_),C=n(2),g=n(19),N=n.n(g),I=a.a.forwardRef((function(e,t){return Object(d.jsxs)("div",{className:N.a.input,children:[Object(d.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(d.jsx)("input",Object(C.a)({ref:t},e.input))]})})),y=function(e){var t=Object(c.useState)(!0),n=Object(s.a)(t,2),a=n[0],i=n[1],r=Object(c.useRef)();return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=r.current.value,c=+n;0===n.trim().length||c<1||c>6?i(!1):e.onAddHandler(c)},className:v.a.form,children:[Object(d.jsx)(I,{ref:r,label:"amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"6",step:"1",defaultValue:"1"}}),Object(d.jsx)("button",{children:"+ Add"}),!a&&Object(d.jsx)("p",{children:"Please Enter a valid amount"})]})},A=function(e){var t=Object(c.useContext)(f),n="\u20b9".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:p.a.meal,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("div",{classes:p.a.description,children:e.description}),Object(d.jsx)("div",{className:p.a.price,children:n})]}),Object(d.jsx)("div",{children:Object(d.jsx)(y,{id:e.id,onAddHandler:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},k=[{id:"m1",name:"Chicken Biryani",description:"Finest Rice and 3 Chicken Pieces",price:182.99},{id:"m2",name:"Maha-Burger",description:"A special double-decker burger with chicken",price:166.5},{id:"m3",name:"Bahubali Roll",description:"The biggest double egg chicken roll",price:148.99},{id:"m4",name:"Icecream",description:"Tastiest scoops of 3 different flavoured icecream",price:180.99}],M=function(){var e=k.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(A,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)})}));return Object(d.jsx)("section",{className:j.a.meals,children:Object(d.jsx)(x,{children:Object(d.jsx)("ul",{className:j.a.list,children:e})})})},w=function(){return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)(u,{}),Object(d.jsx)(M,{})]})},H=n.p+"static/media/meals.2971f633.jpg",F=n(14),B=n.n(F),R=function(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},S=n(8),D=n.n(S),T=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),a=n[0],i=n[1],r=Object(c.useContext)(f),o=r.items.reduce((function(e,t){return e+t.amount}),0),l=r.items,u="".concat(D.a.button," ").concat(a?D.a.bump:"");return Object(c.useEffect)((function(){if(0!==l.length){i(!0);var e=setTimeout((function(){i(!1)}),100);return function(){clearTimeout(e)}}}),[l]),Object(d.jsxs)("button",{className:u,onClick:e.onShows,children:[Object(d.jsx)("span",{className:D.a.icon,children:Object(d.jsx)(R,{})}),Object(d.jsx)("span",{children:"Your Cart"}),Object(d.jsx)("span",{className:D.a.badge,children:o})]})},E=function(e){return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsxs)("header",{className:B.a.header,children:[Object(d.jsx)("h2",{children:"Foodie"}),Object(d.jsx)(T,{onShows:e.onShow})]}),Object(d.jsx)("div",{className:B.a["main-image"],children:Object(d.jsx)("img",{src:H,alt:"A table full of Tastes"})})]})},P=n(11),J=n.n(P),V=function(e){return Object(d.jsx)("div",{className:J.a.backdrop,onClick:e.onClick})},z=function(e){return Object(d.jsx)("div",{className:J.a.modal,children:Object(d.jsx)("div",{className:J.a.content,children:e.children})})},Y=document.getElementById("overlays"),L=function(e){return Object(d.jsxs)(c.Fragment,{children:[r.a.createPortal(Object(d.jsx)(V,{onClick:e.onClick}),Y),";",r.a.createPortal(Object(d.jsx)(z,{children:e.children}),Y)]})},q=n(4),G=n.n(q),Q=function(e){var t="\u20b9".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:G.a["cart-item"],children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsxs)("div",{className:G.a.summary,children:[Object(d.jsx)("span",{className:G.a.price,children:t}),Object(d.jsxs)("span",{className:G.a.amount,children:["x ",e.amount]})]})]}),Object(d.jsxs)("div",{className:G.a.actions,children:[Object(d.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(d.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},U=n(5),K=n.n(U),W=function(e){var t=Object(c.useContext)(f),n="\u20b9".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,i=function(e){t.removeItem(e)},r=function(e){t.addItem(Object(C.a)(Object(C.a)({},e),{},{amount:1}))},s=Object(d.jsx)("ul",{className:K.a["cart-items"],children:t.items.map((function(e){return Object(d.jsx)(Q,{name:e.name,amount:e.amount,price:e.price,onRemove:i.bind(null,e.id),onAdd:r.bind(null,e)},e.id)}))});return Object(d.jsxs)(L,{onClick:e.onHide,children:[s,Object(d.jsxs)("div",{className:K.a.total,children:[Object(d.jsx)("span",{children:"Total"}),Object(d.jsx)("span",{children:n})]}),Object(d.jsxs)("div",{className:K.a.actions,children:[Object(d.jsx)("button",{className:K.a["button--alt"],onClick:e.onHide,children:"Cancel"}),a&&Object(d.jsx)("button",{className:K.a.button,children:"Order"})]})]})},X=n(15),Z={items:[],totalAmount:0},$=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.amount*t.item.price,a=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[a];if(i){var r=Object(C.a)(Object(C.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(X.a)(e.items))[a]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],d=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(C.a)(Object(C.a)({},l),{},{amount:l.amount-1});(s=Object(X.a)(e.items))[o]=u}return{items:s,totalAmount:d}}return Z},ee=function(e){var t=Object(c.useReducer)($,Z),n=Object(s.a)(t,2),a=n[0],i=n[1],r={items:a.items,totalAmount:a.totalAmount,addItem:function(e){i({type:"ADD",item:e})},removeItem:function(e){i({type:"REMOVE",id:e})}};return Object(d.jsx)(f.Provider,{value:r,children:e.children})};var te=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)(ee,{children:[n&&Object(d.jsx)(W,{onHide:function(){a(!1)}}),Object(d.jsx)(E,{onShow:function(){a(!0)}}),Object(d.jsx)("main",{children:Object(d.jsx)(w,{})})]})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(te,{})}),document.getElementById("root")),ne()}],[[26,1,2]]]);
//# sourceMappingURL=main.44d0144b.chunk.js.map