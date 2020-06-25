(this["webpackJsonpzapateria-xyz"]=this["webpackJsonpzapateria-xyz"]||[]).push([[0],{122:function(e,t,n){e.exports=n(145)},127:function(e,t,n){},139:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),l=(n(127),n(69)),i=n(33),u=n.n(i),m=n(71),d=n(91),f=n(26),s=n(31),g=n(200),p=n(92),b=n(70),h=n(93),E={key:"root",storage:n.n(h).a,whitelist:[]},v=Object(s.c)({}),O=Object(b.a)(E,v),j=Object(f.a)(),y=s.d,w=Object(s.e)(O,y(Object(s.a)(p.a,Object(g.a)(j)))),C=Object(b.b)(w),x=n(99),k=n(195),S=n(72),R=n(32),N={createDB:function(){localStorage.getItem("user")||localStorage.setItem("user",JSON.stringify([])),localStorage.getItem("category")||localStorage.setItem("category",JSON.stringify([])),localStorage.getItem("product")||localStorage.setItem("product",JSON.stringify([]))},getRecordOf:function(e){try{if(!localStorage.getItem(e))throw new Error("User record not found");return JSON.parse(localStorage.getItem(e))}catch(t){console.log("DB ERROR: ",t)}},setRecordIn:function(e,t){try{if(!localStorage.getItem(e))throw new Error("User record not found");return localStorage.setItem(e,JSON.stringify(t)),"success"}catch(n){console.log("DB ERROR: ",n)}}},I={createUser:function(e){var t=N.getRecordOf("user");return t.find((function(t){return t.email===e.email}))||(t.push(Object(R.a)({},e)),N.setRecordIn("user",t)),"success"},login:function(e,t){return N.getRecordOf("user").find((function(n){return n.email===e&&n.pass===t}))?"access allowed":"user not fond"},updateUser:function(){console.log("updateUser")},getUser:function(){console.log("getUser")},getUsers:function(){console.log("getUsers")},deleteUser:function(){console.log("getUsers")}},z={getAllCategories:function(){try{if(!N.getRecordOf("category"))throw new Error("there are not categories");return N.getRecordOf("category")}catch(e){console.log(e)}},createCategory:function(e){var t=N.getRecordOf("category");return t.push({id:u.a.generate(),name:e}),N.setRecordIn("category",t),"success"},editCategory:function(e,t){var n=N.getRecordOf("category");(n=n.filter((function(t){return t.id!==e}))).push({id:e,name:t}),console.log(n),N.setRecordIn("category",n),document.location.reload()},deleteCategory:function(e){var t=N.getRecordOf("category");t=t.filter((function(t){return t.id!==e})),N.setRecordIn("category",t),document.location.reload()}},W={createProduct:function(e){var t=N.getRecordOf("product");return t.push(Object(R.a)({},e)),N.setRecordIn("product",t),"success"},getAllProducts:function(){return N.getRecordOf("product")},deleteProduct:function(e){var t=N.getRecordOf("product");t=t.filter((function(t){return t.id_!==e})),N.setRecordIn("product",t)},searchProducts:function(e){var t=N.getRecordOf("product");return t=t.filter((function(t){return new RegExp("(?:".concat(e,")"),"ig").test(t.nombre)}))}},_={user:Object(R.a)({},I),category:Object(R.a)({},z),general:Object(R.a)({},N),product:Object(R.a)({},W)},M=n(12),P=(n(139),n(65)),U=n.n(P),J=n(201),B=n(190),A=n(185),D=n(16);Object(A.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));var T=Object(m.b)(Object(D.i)((function(e){var t=e.enqueueSnackbar,n=e.history,o=Object(a.useState)(""),c=Object(M.a)(o,2),l=c[0],i=c[1],u=Object(a.useState)(""),m=Object(M.a)(u,2),d=m[0],f=m[1];return Object(a.useEffect)((function(){localStorage.removeItem("token-valid")}),[]),r.a.createElement("div",{className:"login__container"},r.a.createElement("div",{className:"login__left-section"},r.a.createElement("img",{src:U.a,alt:"client-logo"})),r.a.createElement("div",{className:"login__right-section"},r.a.createElement("form",{className:"login__form"},r.a.createElement("h1",{className:"login__title"},"Iniciar Sesi\xf3n"),r.a.createElement("div",{className:"input-wrapper"},r.a.createElement(J.a,{label:"Usuario",fullWidth:!0,variant:"outlined",onChange:function(e){return i(e.target.value)}})),r.a.createElement("div",{className:"input-wrapper"},r.a.createElement(J.a,{label:"Contrase\xf1a",type:"password",fullWidth:!0,variant:"outlined",onChange:function(e){return f(e.target.value)}})),r.a.createElement(B.a,{variant:"contained",color:"primary",onClick:function(e){if(l.length||d.length){var a=_.user.login(l,d);console.log(a),"access allowed"===a?(localStorage.setItem("token-valid",!0),n.push("/category")):t("Usuario o contrase\xf1a incorrectos",{variant:"error"})}else t("Favor de llenar todos los campos",{variant:"error"})}},"ENTRAR"))))}))),q=n(7),F=n(8);function H(){var e=Object(q.a)(["\n  font-size: 3rem;\n  font-weight: 500;\n  color: #000000;\n"]);return H=function(){return e},e}function L(){var e=Object(q.a)(["\n  height: 100%;\n  width: 100%;\n  padding-top: 1rem;\n"]);return L=function(){return e},e}function K(){var e=Object(q.a)(["\n  height: 100%;\n  flex-grow: 1;\n  background-color: #ffffff;\n  padding: 2rem 4rem;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n"]);return K=function(){return e},e}function $(){var e=Object(q.a)(["\n  text-align: center;\n  margin: 1rem 0;\n  cursor: pointer;\n"]);return $=function(){return e},e}function G(){var e=Object(q.a)(["\n  list-style: none;\n  font-size: 1.8rem;\n  font-weight: 400;\n  color: #ffffff;\n  margin: 0;\n  padding: 0;\n"]);return G=function(){return e},e}function Q(){var e=Object(q.a)(["\n  max-width: 4rem;\n  margin-bottom: 1rem;\n"]);return Q=function(){return e},e}function V(){var e=Object(q.a)(["\n  margin: 2rem 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return V=function(){return e},e}function X(){var e=Object(q.a)(["\n  height: 100%;\n  /* width: 20rem; */\n  background-color: #2196f3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 2rem;\n"]);return X=function(){return e},e}function Y(){var e=Object(q.a)(["\n  height: 100vh;\n  width: 100vw;\n  background-color: red;\n  display: flex;\n"]);return Y=function(){return e},e}var Z=F.a.div(Y()),ee=F.a.div(X()),te=F.a.div(V()),ne=F.a.img(Q()),ae=F.a.ul(G()),re=F.a.li($()),oe=F.a.div(K()),ce=F.a.div(L()),le=F.a.h1(H()),ie=function(e){var t=e.history,n=function(e){t.push(e)};return r.a.createElement(ee,null,r.a.createElement(te,null,r.a.createElement(ne,{src:U.a}),r.a.createElement(ae,null,r.a.createElement(re,{onClick:function(e){return n("/category")}},"Categorias"),r.a.createElement(re,{onClick:function(e){return n("/catalogue")}},"Catalogo"),r.a.createElement(re,{onClick:function(e){return n("/products")}},"Producto"))),r.a.createElement(ae,null,r.a.createElement(re,{onClick:function(){localStorage.removeItem("token-valid"),t.push("/")}},"Cerrar Sesi\xf3n")))},ue=function(e){var t=e.sectionName,n=e.children;return r.a.createElement(oe,null,r.a.createElement(le,null,t),r.a.createElement(ce,null,n))},me=Object(D.i)((function(e){var t=e.sectionName,n=void 0===t?"undefined":t,a=e.children,o=e.history;return r.a.createElement(Z,null,r.a.createElement(ie,{history:o}),r.a.createElement(ue,{sectionName:n},a))})),de=n(192),fe=n(47),se=n.n(fe),ge=n(191),pe=n(101),be=n(203),he=n(204);function Ee(){var e=Object(q.a)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 0.1rem;\n"]);return Ee=function(){return e},e}function ve(){var e=Object(q.a)(["\n  font-size: 0.8rem;\n  font-weight: 400;\n"]);return ve=function(){return e},e}function Oe(){var e=Object(q.a)(["\n  font-size: 1rem;\n  font-weight: 600;\n"]);return Oe=function(){return e},e}function je(){var e=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-left: 1rem;\n"]);return je=function(){return e},e}function ye(){var e=Object(q.a)(["\n  height: 3rem;\n  width: 3rem;\n  border-radius: 50%;\n  border: 1px solid #00000050;\n"]);return ye=function(){return e},e}function we(){var e=Object(q.a)(["\n  height: 4rem;\n  width: 100%;\n  box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.35);\n  display: flex;\n  /* justify-content: space-around; */\n  padding-left: 1rem;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n"]);return we=function(){return e},e}var Ce=F.a.div(we()),xe=F.a.div(ye()),ke=F.a.div(je()),Se=F.a.h1(Oe()),Re=F.a.h3(ve()),Ne=F.a.div(Ee()),Ie=function(e){var t=e.id,n=e.title,a=e.subtitle,o=e.subtitle2,c=e.menuSelectHandle,l=r.a.useState(null),i=Object(M.a)(l,2),u=i[0],m=i[1],d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(e,t),m(null)};return r.a.createElement(Ce,null,r.a.createElement(Ne,null,r.a.createElement(ge.a,{color:"secondary",size:"small",onClick:function(e){return m(e.currentTarget)}},r.a.createElement(he.a,null))),r.a.createElement(pe.a,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:Boolean(u),onClose:d},r.a.createElement(be.a,{onClick:function(e){return d("detalles",{id:t})}},"Detalles"),r.a.createElement(be.a,{onClick:function(e){return d("eliminar",{id:t})}},"Eliminar")),r.a.createElement(xe,null),r.a.createElement(ke,null,r.a.createElement(Se,null,n),r.a.createElement(Re,null,a),r.a.createElement(Re,null,o)))};function ze(){var e=Object(q.a)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n"]);return ze=function(){return e},e}function We(){var e=Object(q.a)(["\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(8, 1fr);\n  gap: 1rem;\n  flex-wrap: wrap;\n  position: relative;\n"]);return We=function(){return e},e}var _e=F.a.div(We()),Me=F.a.div(ze()),Pe=Object(D.i)((function(e){var t=e.history,n=r.a.useState([]),a=Object(M.a)(n,2),o=a[0],c=a[1];r.a.useEffect((function(){c(_.product.getAllProducts())}),[]);var l=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"detalles"===e&&t.push("/products",[n.id]),"eliminar"===e&&(_.product.deleteProduct(n.id),t.push("/category"))};return r.a.createElement(me,{sectionName:"Catalogo"},r.a.createElement(_e,null,o.map((function(e){return r.a.createElement(Ie,{key:e.id_,id:e.id_,title:e.nombre,subtitle:"Marca: ".concat(e.marca),subtitle2:"Modelo: ".concat(e.modelo),menuSelectHandle:l})})),r.a.createElement(Me,null,r.a.createElement(de.a,{color:"primary",onClick:function(e){return t.push("/products/create")}},r.a.createElement(se.a,null)))))})),Ue=function(){var e=Object(D.h)().path;return r.a.createElement(D.d,null,r.a.createElement(D.b,{exact:!0,path:"".concat(e),component:Pe}))},Je=n(199),Be=n(194),Ae=n(193),De=n(205);function Te(e){var t=e.open,n=e.handleClose,o=e.id,c=Object(a.useState)(""),l=Object(M.a)(c,2),i=l[0],u=l[1];return r.a.createElement("div",null,r.a.createElement(Je.a,{open:t,onClose:n,"aria-labelledby":"form-dialog-title"},r.a.createElement(De.a,{id:"form-dialog-title"},"Editar categoria"),r.a.createElement(Ae.a,null,r.a.createElement(J.a,{autoFocus:!0,margin:"dense",id:"name",label:"Nombre",type:"text",fullWidth:!0,onChange:function(e){return u(e.target.value)}})),r.a.createElement(Be.a,null,r.a.createElement(B.a,{onClick:n,color:"primary"},"Cancel"),r.a.createElement(B.a,{onClick:function(){if(i.length>0){_.category.editCategory(o,i);n()}},color:"primary"},"Continuar"))))}function qe(){var e=Object(q.a)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 0.1rem;\n"]);return qe=function(){return e},e}function Fe(){var e=Object(q.a)(["\n  font-size: 0.9rem;\n  font-weight: 400;\n"]);return Fe=function(){return e},e}function He(){var e=Object(q.a)(["\n  font-size: 1.2rem;\n  font-weight: 600;\n"]);return He=function(){return e},e}function Le(){var e=Object(q.a)(["\n  text-align: center;\n  flex-grow: 1;\n  padding-top: 1rem;\n  max-width: 100%;\n"]);return Le=function(){return e},e}function Ke(){var e=Object(q.a)(["\n  width: 6rem;\n  height: 6rem;\n  border-radius: 50%;\n  border: 1px solid #00000050;\n  margin-top: 1rem;\n"]);return Ke=function(){return e},e}function $e(){var e=Object(q.a)(["\n  height: 12rem;\n  width: 10rem;\n  margin: 2rem;\n  background-color: #ffffff;\n  box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.35);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  position: relative;\n"]);return $e=function(){return e},e}var Ge=F.a.div($e()),Qe=F.a.div(Ke()),Ve=F.a.div(Le()),Xe=F.a.h2(He()),Ye=F.a.h4(Fe()),Ze=F.a.div(qe()),et=function(e){var t=e.title,n=void 0===t?"title":t,a=e.subtitle,o=void 0===a?"subtitle":a,c=e.handleClick,l=e.id,i=r.a.useState(null),u=Object(M.a)(i,2),m=u[0],d=u[1],f=r.a.useState(!1),s=Object(M.a)(f,2),g=s[0],p=s[1],b=function(e){"detalles"===e&&c(l),"editar"===e&&p(!0),"eliminar"===e&&_.category.deleteCategory(l),d(null)};return r.a.createElement(Ge,null,r.a.createElement(Ze,null,r.a.createElement(ge.a,{color:"secondary",size:"small",onClick:function(e){return d(e.currentTarget)}},r.a.createElement(he.a,null))),r.a.createElement(pe.a,{id:"simple-menu",anchorEl:m,keepMounted:!0,open:Boolean(m),onClose:b},r.a.createElement(be.a,{onClick:function(e){return b("detalles")}},"Detalles"),r.a.createElement(be.a,{onClick:function(e){return b("editar")}},"Editar"),r.a.createElement(be.a,{onClick:function(e){return b("eliminar")}},"Eliminar")),r.a.createElement(Qe,{onClick:function(e){return c(l)}}),r.a.createElement(Ve,null,r.a.createElement(Xe,null,n),r.a.createElement(Ye,null,o)),r.a.createElement(Te,{open:g,handleClose:function(e){return p(!1)},id:l}))};function tt(e){var t=e.open,n=e.handleClose,o=Object(a.useState)(""),c=Object(M.a)(o,2),l=c[0],i=c[1];return r.a.createElement("div",null,r.a.createElement(Je.a,{open:t,onClose:n,"aria-labelledby":"form-dialog-title"},r.a.createElement(De.a,{id:"form-dialog-title"},"Nueva categoria"),r.a.createElement(Ae.a,null,r.a.createElement(J.a,{autoFocus:!0,margin:"dense",id:"name",label:"Nombre",type:"text",fullWidth:!0,onChange:function(e){return i(e.target.value)}})),r.a.createElement(Be.a,null,r.a.createElement(B.a,{onClick:n,color:"primary"},"Cancel"),r.a.createElement(B.a,{onClick:function(){if(l.length>0){_.category.createCategory(l);n()}},color:"primary"},"Crear"))))}function nt(){var e=Object(q.a)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n"]);return nt=function(){return e},e}function at(){var e=Object(q.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  /* justify-content: space-around; */\n  flex-wrap: wrap;\n  position: relative;\n"]);return at=function(){return e},e}var rt=F.a.div(at()),ot=F.a.div(nt()),ct=Object(D.i)((function(e){var t=e.history,n=Object(D.h)().path,o=Object(a.useState)([]),c=Object(M.a)(o,2),l=c[0],i=c[1],u=Object(a.useState)(!1),m=Object(M.a)(u,2),d=m[0],f=m[1];Object(a.useEffect)((function(){var e=_.category.getAllCategories();i(e)}),[]);var s=function(e){t.push("".concat(n).concat(e))};return r.a.createElement(me,{sectionName:"Categorias"},r.a.createElement(rt,null,l.map((function(e){return r.a.createElement(et,{key:e.id,handleClick:s,id:e.id,title:e.name,subtitle:""})})),r.a.createElement(ot,null,r.a.createElement(de.a,{color:"primary",onClick:function(e){return f(!0)}},r.a.createElement(se.a,null)))),r.a.createElement(tt,{open:d,handleClose:function(e){return f(!1)}}))})),lt=function(){var e=Object(D.h)().path;return r.a.createElement(D.d,null,r.a.createElement(D.b,{exact:!0,path:"".concat(e,"/:id"),render:function(){return r.a.createElement("h1",null,"LKJADLFKJAD")}}),r.a.createElement(D.b,{exact:!0,path:"".concat(e,"/"),component:ct}))},it=n(196);function ut(){var e=Object(q.a)(["\n  font-size: 0.8rem;\n  font-weight: 500;\n  /* margin-bottom: 3rem; */\n"]);return ut=function(){return e},e}function mt(){var e=Object(q.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 2.8rem);\n"]);return mt=function(){return e},e}function dt(){var e=Object(q.a)(["\n  font-size: 0.8rem;\n  font-weight: 300;\n  margin-bottom: 3rem;\n"]);return dt=function(){return e},e}function ft(){var e=Object(q.a)(["\n  font-size: 1.4rem;\n  font-weight: 600;\n  margin-top: auto;\n  margin-bottom: 1rem;\n"]);return ft=function(){return e},e}function st(){var e=Object(q.a)(["\n  font-size: 1.6rem;\n  font-weight: 600;\n  margin-top: 1.5rem;\n  margin-bottom: 1rem;\n"]);return st=function(){return e},e}function gt(){var e=Object(q.a)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n"]);return gt=function(){return e},e}function pt(){var e=Object(q.a)(["\n  width: 100%;\n  height: 80%;\n  box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.35);\n  padding: 0.5rem 3rem;\n  display: grid;\n  grid-template-rows: 1fr auto 1fr;\n"]);return pt=function(){return e},e}function bt(){var e=Object(q.a)(["\n  width: 100%;\n  position: relative;\n  flex-grow: 1;\n  padding: 1rem 0;\n"]);return bt=function(){return e},e}function ht(){var e=Object(q.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return ht=function(){return e},e}var Et=F.a.div(ht()),vt=F.a.div(bt()),Ot=F.a.div(pt()),jt=F.a.div(gt()),yt=F.a.h1(st()),wt=F.a.h3(ft()),Ct=F.a.h1(dt()),xt=F.a.div(mt()),kt=F.a.h5(ut()),St=Object(D.i)((function(e){var t=e.history,n=Object(D.g)(),a=r.a.useState([]),o=Object(M.a)(a,2),c=o[0],l=o[1],i=r.a.useState({}),u=Object(M.a)(i,2),m=u[0],d=u[1],f=r.a.useState({}),s=Object(M.a)(f,2),g=s[0],p=s[1];r.a.useEffect((function(){l(_.product.getAllProducts())}),[]),r.a.useEffect((function(){n.state&&c.length>0&&d(c.find((function(e){return e.id_===n.state[0]})))}),[c]),r.a.useEffect((function(){m.id&&p(m)}),[m]);return r.a.createElement(me,{sectionName:"Producto"},r.a.createElement(Et,null,r.a.createElement(it.a,{id:"combo-box-demo",options:c,value:m,onChange:function(e,t){d(t)},getOptionLabel:function(e){return e.nombre},style:{width:500},renderInput:function(e){return r.a.createElement(J.a,Object.assign({},e,{label:"Productos",placeholder:"Buscar..",variant:"outlined"}))}}),r.a.createElement(vt,null,r.a.createElement(Ot,null,r.a.createElement("div",null,r.a.createElement(yt,null,"Nombre de producto:",g.nombre),r.a.createElement(Ct,null,"ID: ",g.id)),r.a.createElement(xt,null,r.a.createElement(kt,null,"Categoria: ",g.categoria),r.a.createElement(kt,null,"Marca: ",g.marca),r.a.createElement(kt,null,"Modelo: ",g.modelo),r.a.createElement(kt,null,"Materiales: ",g.materiales),r.a.createElement(kt,null,"Color: ",g.color),r.a.createElement(kt,null,"Medida: ",g.sized),r.a.createElement(kt,null,"Provedor: ",g.provedorNombre),r.a.createElement(kt,null,"Telefono: ",g.provedorTelefono),r.a.createElement(kt,null,"Email: ",g.provedorCorreo)),r.a.createElement(wt,null,"Cantidad stock: ",g.cantidad)),r.a.createElement(jt,null,r.a.createElement(de.a,{color:"primary",onClick:function(e){return t.push("/products/create")}},r.a.createElement(se.a,null))))))})),Rt=n(197),Nt=n(202),It=n(188),zt=n(100);function Wt(){var e=Object(q.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin: 1rem 0;\n"]);return Wt=function(){return e},e}function _t(){var e=Object(q.a)(["\n  padding-top: 1rem;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(120px, 1fr));\n  gap: 2rem;\n"]);return _t=function(){return e},e}function Mt(){var e=Object(q.a)(["\n  font-size: 1.6rem;\n  font-weight: 400;\n"]);return Mt=function(){return e},e}function Pt(){var e=Object(q.a)(["\n  width: 100%;\n  height: 100%;\n"]);return Pt=function(){return e},e}function Ut(){var e=Object(q.a)(["\n  width: 100%;\n  /* height: 95%; */\n  margin: 1rem 0;\n  box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.35);\n  display: grid;\n  /* grid-template-rows: 1fr 1fr 1fr auto; */\n  padding: 0.5rem 4rem;\n  gap: 1rem;\n"]);return Ut=function(){return e},e}function Jt(){var e=Object(q.a)(["\n  width: 100%;\n  /* height: 100%; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Jt=function(){return e},e}var Bt=["23.7","24.1","24.5","25\t","25.4","25.8","26.2","26.7","27.1","27.5","27.9","28.3","28.8","29.2","29.6","30\t","30.5","31.3","32.2","33\t","33.9"],At=F.a.div(Jt()),Dt=F.a.form(Ut()),Tt=F.a.div(Pt()),qt=F.a.h1(Mt()),Ft=F.a.div(_t()),Ht=F.a.div(Wt()),Lt=Object(A.a)((function(e){return{fullRow:{gridColumn:"1 / span 2"},button:{margin:e.spacing(1)}}})),Kt=Object(D.i)((function(e){var t=e.history,n=Lt(),a=Object(zt.a)(),o=a.register,c=a.handleSubmit,l=(a.watch,a.errors),i=r.a.useState([]),m=Object(M.a)(i,2),d=m[0],f=m[1],s=r.a.useState({}),g=Object(M.a)(s,2),p=g[0],b=g[1],h=r.a.useState(""),E=Object(M.a)(h,2),v=E[0],O=E[1];return r.a.useEffect((function(){var e=_.category.getAllCategories();f(e)}),[]),r.a.createElement(me,{sectionName:"Nuevo producto"},r.a.createElement(At,null,r.a.createElement(Dt,null,r.a.createElement(Tt,null,r.a.createElement(qt,null,"Informaci\xf3n basica"),r.a.createElement(Ft,null,r.a.createElement(J.a,{label:"Nombre",name:"nombre",inputRef:o({required:!0}),variant:"outlined",fullWidth:!0,error:l.nombre}),r.a.createElement(J.a,{label:"Id",name:"id",inputRef:o({required:!0}),variant:"outlined",fullWidth:!0,error:l.id}),r.a.createElement(J.a,{label:"Marca",name:"marca",inputRef:o({required:!0}),error:l.marca,variant:"outlined",fullWidth:!0}),r.a.createElement(J.a,{label:"Modelo",variant:"outlined",name:"modelo",inputRef:o({required:!0}),error:l.modelo,fullWidth:!0}),r.a.createElement(It.a,{variant:"outlined",className:n.fullRow},r.a.createElement(Nt.a,{id:"categoria-select-label"},"Categoria"),r.a.createElement(Rt.a,{labelId:"categoria-select-label",id:"categoria-select",inputProps:{name:"categoria",inputRef:o({required:!0})},error:l.categoria,value:p,onChange:function(e){return b(e.target.value)},fullWidth:!0},d.map((function(e){return r.a.createElement(be.a,{key:e.id,value:e.id},e.name)})))))),r.a.createElement(Tt,null,r.a.createElement(qt,null,"Informaci\xf3n adicional"),r.a.createElement(Ft,null,r.a.createElement(J.a,{label:"Materiales",name:"materiales",inputRef:o(),error:l.materiales,variant:"outlined",fullWidth:!0}),r.a.createElement(J.a,{label:"Color",name:"color",inputRef:o(),variant:"outlined",fullWidth:!0}),r.a.createElement(It.a,{variant:"outlined"},r.a.createElement(Nt.a,{id:"medida-select-label"},"Medida"),r.a.createElement(Rt.a,{labelId:"medida-select-label",id:"medida-select",inputProps:{name:"medida",inputRef:o()},error:l.medida,value:v,onChange:function(e){return O(e.target.value)},fullWidth:!0},Bt.map((function(e){return r.a.createElement(be.a,{key:e,value:e},e)})))),r.a.createElement(J.a,{label:"Cantidad",name:"cantidad",type:"number",inputRef:o(),variant:"outlined",fullWidth:!0}))),r.a.createElement(Tt,null,r.a.createElement(qt,null,"Informaci\xf3n de provedor"),r.a.createElement(Ft,null,r.a.createElement(J.a,{label:"Nombre",name:"provedorNombre",inputRef:o(),variant:"outlined",fullWidth:!0}),r.a.createElement(J.a,{label:"Telefono",name:"provedorTelefono",inputRef:o(),variant:"outlined",fullWidth:!0}),r.a.createElement(J.a,{className:n.fullRow,label:"Correo",name:"provedorCorreo",inputRef:o(),variant:"outlined",fullWidth:!0}))),r.a.createElement(Ht,null,r.a.createElement(B.a,{className:n.button,variant:"contained",color:"default",onClick:function(e){return t.goBack()}},"Regregar"),r.a.createElement(B.a,{className:n.button,variant:"contained",color:"primary",onClick:c((function(e){var n=Object(R.a)(Object(R.a)({},e),{},{categoria:p,sizes:p,id_:u.a.generate()});_.product.createProduct(n),t.push("/products")}))},"Continuar")))))})),$t=function(){var e=Object(D.h)().path;return r.a.createElement(D.d,null,r.a.createElement(D.b,{exact:!0,path:"".concat(e),component:St}),r.a.createElement(D.b,{exact:!0,path:"".concat(e,"/create"),component:Kt}))},Gt=n(102),Qt=function(e){var t=e.component,n=Object(Gt.a)(e,["component"]);return r.a.createElement(D.b,Object.assign({},n,{render:function(e){return localStorage.getItem("token-valid")?r.a.createElement(t,e):r.a.createElement(D.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},Vt=n(24),Xt=Object(x.a)({palette:{primary:S.a}});var Yt=Object(l.b)((function(e){return{}}),(function(e){return{}}))((function(){return Object(a.useEffect)((function(){!function(){if(_.general.createDB(),_.user.createUser({id:u.a.generate(),name:"dev",email:"dev",pass:"123"}),0===JSON.parse(localStorage.getItem("category")).length){var e=[{id:u.a.generate(),name:"Hombre"},{id:u.a.generate(),name:"Mujer"},{id:u.a.generate(),name:"Ni\xf1o"},{id:u.a.generate(),name:"Ni\xf1a"}];localStorage.setItem("category",JSON.stringify(e))}}()}),[]),r.a.createElement(Vt.a,null,r.a.createElement(d.a,{persistor:C},r.a.createElement(k.a,{theme:Xt},r.a.createElement(m.a,{maxSnack:3},r.a.createElement(D.d,null,r.a.createElement(Qt,{path:"/category",component:lt}),r.a.createElement(Qt,{exact:!0,path:"/catalogue",component:Ue}),r.a.createElement(Qt,{path:"/products",component:$t}),r.a.createElement(D.b,{exact:!0,path:"/login",component:T}),r.a.createElement(D.a,{from:"/",to:"/category"}))))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:w},r.a.createElement(Yt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,n){e.exports=n.p+"static/media/xyz-logo.a6cd1612.png"}},[[122,1,2]]]);
//# sourceMappingURL=main.6c256f37.chunk.js.map