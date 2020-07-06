(this["webpackJsonpzapateria-xyz"]=this["webpackJsonpzapateria-xyz"]||[]).push([[0],{122:function(e,t,n){e.exports=n(145)},127:function(e,t,n){},139:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),l=(n(127),n(70)),i=n(27),u=n.n(i),d=n(72),m=n(95),f=n(28),s=n(33),g=n(200),p=n(96),b=n(71),v=n(97),h={key:"root",storage:n.n(v).a,whitelist:[]},E=Object(s.c)({}),O=Object(b.a)(h,E),j=Object(f.a)(),y=s.d,w=Object(s.e)(O,y(Object(s.a)(p.a,Object(g.a)(j)))),C=Object(b.b)(w),x=n(103),R=n(195),S=n(74),k=n(19),N={createDB:function(){localStorage.getItem("user")||localStorage.setItem("user",JSON.stringify([])),localStorage.getItem("category")||localStorage.setItem("category",JSON.stringify([])),localStorage.getItem("product")||localStorage.setItem("product",JSON.stringify([]))},getRecordOf:function(e){try{if(!localStorage.getItem(e))throw new Error("User record not found");return JSON.parse(localStorage.getItem(e))}catch(t){console.log("DB ERROR: ",t)}},setRecordIn:function(e,t){try{if(!localStorage.getItem(e))throw new Error("User record not found");return localStorage.setItem(e,JSON.stringify(t)),"success"}catch(n){console.log("DB ERROR: ",n)}}},I={createUser:function(e){var t=N.getRecordOf("user");return t.find((function(t){return t.email===e.email}))||(t.push(Object(k.a)({},e)),N.setRecordIn("user",t)),"success"},login:function(e,t){return N.getRecordOf("user").find((function(n){return n.email===e&&n.pass===t}))?"access allowed":"user not fond"},updateUser:function(){console.log("updateUser")},getUser:function(){console.log("getUser")},getUsers:function(){console.log("getUsers")},deleteUser:function(){console.log("getUsers")}},W={getAllCategories:function(){try{if(!N.getRecordOf("category"))throw new Error("there are not categories");return N.getRecordOf("category")}catch(e){console.log(e)}},getCategory:function(e){try{if(!N.getRecordOf("category"))throw new Error("there are not categories");return N.getRecordOf("category").find((function(t){return t.id===e}))}catch(t){console.log(t)}},createCategory:function(e){var t=N.getRecordOf("category");return t.push({id:u.a.generate(),name:e}),N.setRecordIn("category",t),"success"},editCategory:function(e,t){var n=N.getRecordOf("category");(n=n.filter((function(t){return t.id!==e}))).push({id:e,name:t}),console.log(n),N.setRecordIn("category",n),document.location.reload()},deleteCategory:function(e){var t=N.getRecordOf("category");t=t.filter((function(t){return t.id!==e})),N.setRecordIn("category",t),document.location.reload()}},z={createProduct:function(e){var t=N.getRecordOf("product");return t.push(Object(k.a)({},e)),N.setRecordIn("product",t),"success"},getAllProducts:function(){return N.getRecordOf("product")},getProduct:function(e){return N.getRecordOf("product").find((function(t){return t.id_===e}))},deleteProduct:function(e){var t=N.getRecordOf("product");t=t.filter((function(t){return t.id_!==e})),N.setRecordIn("product",t)},searchProducts:function(e){var t=N.getRecordOf("product");return t=t.filter((function(t){return new RegExp("(?:".concat(e,")"),"ig").test(t.nombre)}))},editProduct:function(e,t){var n=N.getRecordOf("product");return(n=n.filter((function(t){return t.id_!==e}))).push(t),N.setRecordIn("product",n),"success"}},P={user:Object(k.a)({},I),category:Object(k.a)({},W),general:Object(k.a)({},N),product:Object(k.a)({},z)},M=n(9),_=(n(139),n(66)),U=n.n(_),q=n(201),B=n(190),T=n(185),A=n(16);Object(T.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));var J=Object(d.b)(Object(A.i)((function(e){var t=e.enqueueSnackbar,n=e.history,o=Object(a.useState)(""),c=Object(M.a)(o,2),l=c[0],i=c[1],u=Object(a.useState)(""),d=Object(M.a)(u,2),m=d[0],f=d[1];return Object(a.useEffect)((function(){localStorage.removeItem("token-valid")}),[]),r.a.createElement("div",{className:"login__container"},r.a.createElement("div",{className:"login__left-section"},r.a.createElement("img",{src:U.a,alt:"client-logo"})),r.a.createElement("div",{className:"login__right-section"},r.a.createElement("form",{className:"login__form"},r.a.createElement("h1",{className:"login__title"},"Iniciar Sesi\xf3n"),r.a.createElement("div",{className:"input-wrapper"},r.a.createElement(q.a,{label:"Usuario",fullWidth:!0,variant:"outlined",onChange:function(e){return i(e.target.value)}})),r.a.createElement("div",{className:"input-wrapper"},r.a.createElement(q.a,{label:"Contrase\xf1a",type:"password",fullWidth:!0,variant:"outlined",onChange:function(e){return f(e.target.value)}})),r.a.createElement(B.a,{variant:"contained",color:"primary",onClick:function(e){if(l.length||m.length){var a=P.user.login(l,m);console.log(a),"access allowed"===a?(localStorage.setItem("token-valid",!0),n.push("/category")):t("Usuario o contrase\xf1a incorrectos",{variant:"error"})}else t("Favor de llenar todos los campos",{variant:"error"})}},"ENTRAR"))))}))),D=n(6),H=n(7);function F(){var e=Object(D.a)(["\n  font-size: 3rem;\n  font-weight: 500;\n  color: #000000;\n"]);return F=function(){return e},e}function $(){var e=Object(D.a)(["\n  height: 100%;\n  width: 100%;\n  padding-top: 1rem;\n"]);return $=function(){return e},e}function L(){var e=Object(D.a)(["\n  height: 100%;\n  flex-grow: 1;\n  background-color: #ffffff;\n  padding: 2rem 4rem;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n"]);return L=function(){return e},e}function V(){var e=Object(D.a)(["\n  text-align: center;\n  margin: 1rem 0;\n  cursor: pointer;\n"]);return V=function(){return e},e}function G(){var e=Object(D.a)(["\n  list-style: none;\n  font-size: 1.8rem;\n  font-weight: 400;\n  color: #ffffff;\n  margin: 0;\n  padding: 0;\n"]);return G=function(){return e},e}function K(){var e=Object(D.a)(["\n  max-width: 4rem;\n  margin-bottom: 1rem;\n"]);return K=function(){return e},e}function Q(){var e=Object(D.a)(["\n  margin: 2rem 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return Q=function(){return e},e}function X(){var e=Object(D.a)(["\n  height: 100%;\n  /* width: 20rem; */\n  background-color: #2196f3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 2rem;\n"]);return X=function(){return e},e}function Y(){var e=Object(D.a)(["\n  height: 100vh;\n  width: 100vw;\n  background-color: red;\n  display: flex;\n"]);return Y=function(){return e},e}var Z=H.a.div(Y()),ee=H.a.div(X()),te=H.a.div(Q()),ne=H.a.img(K()),ae=H.a.ul(G()),re=H.a.li(V()),oe=H.a.div(L()),ce=H.a.div($()),le=H.a.h1(F()),ie=function(e){var t=e.history,n=function(e){t.push(e)};return r.a.createElement(ee,null,r.a.createElement(te,null,r.a.createElement(ne,{src:U.a}),r.a.createElement(ae,null,r.a.createElement(re,{onClick:function(e){return n("/category")}},"Categorias"),r.a.createElement(re,{onClick:function(e){return n("/catalogue")}},"Catalogo"),r.a.createElement(re,{onClick:function(e){return n("/products")}},"Producto"))),r.a.createElement(ae,null,r.a.createElement(re,{onClick:function(){localStorage.removeItem("token-valid"),t.push("/")}},"Cerrar Sesi\xf3n")))},ue=function(e){var t=e.sectionName,n=e.children;return r.a.createElement(oe,null,r.a.createElement(le,null,t),r.a.createElement(ce,null,n))},de=Object(A.i)((function(e){var t=e.sectionName,n=void 0===t?"undefined":t,a=e.children,o=e.history;return r.a.createElement(Z,null,r.a.createElement(ie,{history:o}),r.a.createElement(ue,{sectionName:n},a))})),me=n(192),fe=n(41),se=n.n(fe),ge=n(191),pe=n(104),be=n(203),ve=n(204);function he(){var e=Object(D.a)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 0.1rem;\n"]);return he=function(){return e},e}function Ee(){var e=Object(D.a)(["\n  font-size: 0.8rem;\n  font-weight: 400;\n"]);return Ee=function(){return e},e}function Oe(){var e=Object(D.a)(["\n  font-size: 1rem;\n  font-weight: 600;\n"]);return Oe=function(){return e},e}function je(){var e=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-left: 1rem;\n"]);return je=function(){return e},e}function ye(){var e=Object(D.a)(["\n  height: 3rem;\n  width: 3rem;\n  border-radius: 50%;\n  border: 1px solid #00000050;\n"]);return ye=function(){return e},e}function we(){var e=Object(D.a)(["\n  height: 4rem;\n  width: 100%;\n  box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.35);\n  display: flex;\n  /* justify-content: space-around; */\n  padding-left: 1rem;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n"]);return we=function(){return e},e}var Ce=H.a.div(we()),xe=H.a.div(ye()),Re=H.a.div(je()),Se=H.a.h1(Oe()),ke=H.a.h3(Ee()),Ne=H.a.div(he()),Ie=function(e){var t=e.id,n=e.title,a=e.subtitle,o=e.subtitle2,c=e.menuSelectHandle,l=r.a.useState(null),i=Object(M.a)(l,2),u=i[0],d=i[1],m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(e,t),d(null)};return r.a.createElement(Ce,null,r.a.createElement(Ne,null,r.a.createElement(ge.a,{color:"secondary",size:"small",onClick:function(e){return d(e.currentTarget)}},r.a.createElement(ve.a,null))),r.a.createElement(pe.a,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:Boolean(u),onClose:m},r.a.createElement(be.a,{onClick:function(e){return m("editar",{id:t})}},"Editar"),r.a.createElement(be.a,{onClick:function(e){return m("detalles",{id:t})}},"Detalles"),r.a.createElement(be.a,{onClick:function(e){return m("eliminar",{id:t})}},"Eliminar")),r.a.createElement(xe,null),r.a.createElement(Re,null,r.a.createElement(Se,null,n),r.a.createElement(ke,null,a),r.a.createElement(ke,null,o)))};function We(){var e=Object(D.a)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n"]);return We=function(){return e},e}function ze(){var e=Object(D.a)(["\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(8, 1fr);\n  gap: 1rem;\n  flex-wrap: wrap;\n  position: relative;\n"]);return ze=function(){return e},e}var Pe=H.a.div(ze()),Me=H.a.div(We()),_e=Object(A.i)((function(e){var t=e.history,n=r.a.useState([]),a=Object(M.a)(n,2),o=a[0],c=a[1];r.a.useEffect((function(){c(P.product.getAllProducts())}),[]);var l=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"detalles"===e&&t.push("/products",[n.id]),"eliminar"===e&&(P.product.deleteProduct(n.id),t.push("/category")),"editar"===e&&t.push("/products/edit/"+n.id,[n.id])};return r.a.createElement(de,{sectionName:"Catalogo"},r.a.createElement(Pe,null,o.map((function(e){return r.a.createElement(Ie,{key:e.id_,id:e.id_,title:e.nombre,subtitle:"Marca: ".concat(e.marca),subtitle2:"Modelo: ".concat(e.modelo),menuSelectHandle:l})})),r.a.createElement(Me,null,r.a.createElement(me.a,{color:"primary",onClick:function(e){return t.push("/products/create")}},r.a.createElement(se.a,null)))))})),Ue=function(){var e=Object(A.h)().path;return r.a.createElement(A.d,null,r.a.createElement(A.b,{exact:!0,path:"".concat(e),component:_e}))},qe=n(199),Be=n(194),Te=n(193),Ae=n(205);function Je(e){var t=e.open,n=e.handleClose,o=e.id,c=Object(a.useState)(""),l=Object(M.a)(c,2),i=l[0],u=l[1];return r.a.createElement("div",null,r.a.createElement(qe.a,{open:t,onClose:n,"aria-labelledby":"form-dialog-title"},r.a.createElement(Ae.a,{id:"form-dialog-title"},"Editar categoria"),r.a.createElement(Te.a,null,r.a.createElement(q.a,{autoFocus:!0,margin:"dense",id:"name",label:"Nombre",type:"text",fullWidth:!0,onChange:function(e){return u(e.target.value)}})),r.a.createElement(Be.a,null,r.a.createElement(B.a,{onClick:n,color:"primary"},"Cancel"),r.a.createElement(B.a,{onClick:function(){if(i.length>0){P.category.editCategory(o,i);n()}},color:"primary"},"Continuar"))))}function De(){var e=Object(D.a)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 0.1rem;\n"]);return De=function(){return e},e}function He(){var e=Object(D.a)(["\n  font-size: 0.9rem;\n  font-weight: 400;\n"]);return He=function(){return e},e}function Fe(){var e=Object(D.a)(["\n  font-size: 1.2rem;\n  font-weight: 600;\n"]);return Fe=function(){return e},e}function $e(){var e=Object(D.a)(["\n  text-align: center;\n  flex-grow: 1;\n  padding-top: 1rem;\n  max-width: 100%;\n"]);return $e=function(){return e},e}function Le(){var e=Object(D.a)(["\n  width: 6rem;\n  height: 6rem;\n  border-radius: 50%;\n  border: 1px solid #00000050;\n  margin-top: 1rem;\n"]);return Le=function(){return e},e}function Ve(){var e=Object(D.a)(["\n  height: 12rem;\n  width: 10rem;\n  margin: 2rem;\n  background-color: #ffffff;\n  box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.35);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  position: relative;\n"]);return Ve=function(){return e},e}var Ge=H.a.div(Ve()),Ke=H.a.div(Le()),Qe=H.a.div($e()),Xe=H.a.h2(Fe()),Ye=H.a.h4(He()),Ze=H.a.div(De()),et=function(e){var t=e.title,n=void 0===t?"title":t,a=e.subtitle,o=void 0===a?"subtitle":a,c=e.handleClick,l=e.id,i=r.a.useState(null),u=Object(M.a)(i,2),d=u[0],m=u[1],f=r.a.useState(!1),s=Object(M.a)(f,2),g=s[0],p=s[1],b=function(e){"detalles"===e&&c(l),"editar"===e&&p(!0),"eliminar"===e&&P.category.deleteCategory(l),m(null)};return r.a.createElement(Ge,null,r.a.createElement(Ze,null,r.a.createElement(ge.a,{color:"secondary",size:"small",onClick:function(e){return m(e.currentTarget)}},r.a.createElement(ve.a,null))),r.a.createElement(pe.a,{id:"simple-menu",anchorEl:d,keepMounted:!0,open:Boolean(d),onClose:b},r.a.createElement(be.a,{onClick:function(e){return b("detalles")}},"Detalles"),r.a.createElement(be.a,{onClick:function(e){return b("editar")}},"Editar"),r.a.createElement(be.a,{onClick:function(e){return b("eliminar")}},"Eliminar")),r.a.createElement(Ke,{onClick:function(e){return c(l)}}),r.a.createElement(Qe,null,r.a.createElement(Xe,null,n),r.a.createElement(Ye,null,o)),r.a.createElement(Je,{open:g,handleClose:function(e){return p(!1)},id:l}))};function tt(e){var t=e.open,n=e.handleClose,o=Object(a.useState)(""),c=Object(M.a)(o,2),l=c[0],i=c[1];return r.a.createElement("div",null,r.a.createElement(qe.a,{open:t,onClose:n,"aria-labelledby":"form-dialog-title"},r.a.createElement(Ae.a,{id:"form-dialog-title"},"Nueva categoria"),r.a.createElement(Te.a,null,r.a.createElement(q.a,{autoFocus:!0,margin:"dense",id:"name",label:"Nombre",type:"text",fullWidth:!0,onChange:function(e){return i(e.target.value)}})),r.a.createElement(Be.a,null,r.a.createElement(B.a,{onClick:n,color:"primary"},"Cancel"),r.a.createElement(B.a,{onClick:function(){if(l.length>0){P.category.createCategory(l);n()}},color:"primary"},"Crear"))))}function nt(){var e=Object(D.a)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n"]);return nt=function(){return e},e}function at(){var e=Object(D.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  /* justify-content: space-around; */\n  flex-wrap: wrap;\n  position: relative;\n"]);return at=function(){return e},e}var rt=H.a.div(at()),ot=H.a.div(nt()),ct=Object(A.i)((function(e){var t=e.history,n=Object(A.h)().path,o=Object(a.useState)([]),c=Object(M.a)(o,2),l=c[0],i=c[1],u=Object(a.useState)(!1),d=Object(M.a)(u,2),m=d[0],f=d[1];Object(a.useEffect)((function(){var e=P.category.getAllCategories();i(e)}),[]);var s=function(e){t.push("".concat(n).concat(e))};return r.a.createElement(de,{sectionName:"Categorias"},r.a.createElement(rt,null,l.map((function(e){return r.a.createElement(et,{key:e.id,handleClick:s,id:e.id,title:e.name,subtitle:""})})),r.a.createElement(ot,null,r.a.createElement(me.a,{color:"primary",onClick:function(e){return f(!0)}},r.a.createElement(se.a,null)))),r.a.createElement(tt,{open:m,handleClose:function(e){return f(!1)}}))}));function lt(){var e=Object(D.a)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n"]);return lt=function(){return e},e}function it(){var e=Object(D.a)(["\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(8, 1fr);\n  gap: 1rem;\n  flex-wrap: wrap;\n  position: relative;\n"]);return it=function(){return e},e}var ut=H.a.div(it()),dt=(H.a.div(lt()),Object(A.i)((function(e){var t=e.history,n=(Object(A.h)().path,Object(A.g)()),o=Object(a.useState)([]),c=Object(M.a)(o,2),l=(c[0],c[1],Object(a.useState)(!1)),i=Object(M.a)(l,2),u=(i[0],i[1],Object(a.useState)("")),d=Object(M.a)(u,2),m=d[0],f=d[1],s=Object(a.useState)({}),g=Object(M.a)(s,2),p=g[0],b=g[1],v=Object(a.useState)([]),h=Object(M.a)(v,2),E=h[0],O=h[1];Object(a.useEffect)((function(){f(n.pathname.match(/(\w+)$/i)[0])}),[]),Object(a.useEffect)((function(){if(m){var e=P.category.getCategory(m);b(e)}}),[m]),Object(a.useEffect)((function(){if(p){var e=P.product.getAllProducts();e=e.filter((function(e){return e.categoria===p.id})),O(e)}}),[p]);var j=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"detalles"===e&&t.push("/products",[n.id]),"eliminar"===e&&(P.product.deleteProduct(n.id),t.push("/category")),"editar"===e&&t.push("/products/edit/"+n.id,[n.id])};return r.a.createElement(de,{sectionName:"Categoria: ".concat(p.name)},r.a.createElement(ut,null,E.map((function(e){return r.a.createElement(Ie,{key:e.id_,id:e.id_,title:e.nombre,subtitle:"Marca: ".concat(e.marca),subtitle2:"Modelo: ".concat(e.modelo),menuSelectHandle:j})}))))}))),mt=function(){var e=Object(A.h)().path;return r.a.createElement(A.d,null,r.a.createElement(A.b,{exact:!0,path:"".concat(e,"/:id"),component:dt}),r.a.createElement(A.b,{exact:!0,path:"".concat(e,"/"),component:ct}))},ft=n(196);function st(){var e=Object(D.a)(["\n  font-size: 0.8rem;\n  font-weight: 500;\n  /* margin-bottom: 3rem; */\n"]);return st=function(){return e},e}function gt(){var e=Object(D.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 2.8rem);\n"]);return gt=function(){return e},e}function pt(){var e=Object(D.a)(["\n  font-size: 0.8rem;\n  font-weight: 300;\n  margin-bottom: 3rem;\n"]);return pt=function(){return e},e}function bt(){var e=Object(D.a)(["\n  font-size: 1.4rem;\n  font-weight: 600;\n  margin-top: auto;\n  margin-bottom: 1rem;\n"]);return bt=function(){return e},e}function vt(){var e=Object(D.a)(["\n  font-size: 1.6rem;\n  font-weight: 600;\n  margin-top: 1.5rem;\n  margin-bottom: 1rem;\n"]);return vt=function(){return e},e}function ht(){var e=Object(D.a)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n"]);return ht=function(){return e},e}function Et(){var e=Object(D.a)(["\n  width: 100%;\n  height: 80%;\n  box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.35);\n  padding: 0.5rem 3rem;\n  display: grid;\n  grid-template-rows: 1fr auto 1fr;\n"]);return Et=function(){return e},e}function Ot(){var e=Object(D.a)(["\n  width: 100%;\n  position: relative;\n  flex-grow: 1;\n  padding: 1rem 0;\n"]);return Ot=function(){return e},e}function jt(){var e=Object(D.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return jt=function(){return e},e}var yt=H.a.div(jt()),wt=H.a.div(Ot()),Ct=H.a.div(Et()),xt=H.a.div(ht()),Rt=H.a.h1(vt()),St=H.a.h3(bt()),kt=H.a.h1(pt()),Nt=H.a.div(gt()),It=H.a.h5(st()),Wt=Object(A.i)((function(e){var t=e.history,n=Object(A.g)(),a=r.a.useState([]),o=Object(M.a)(a,2),c=o[0],l=o[1],i=r.a.useState({}),u=Object(M.a)(i,2),d=u[0],m=u[1],f=r.a.useState({}),s=Object(M.a)(f,2),g=s[0],p=s[1],b=r.a.useState(""),v=Object(M.a)(b,2);v[0],v[1];r.a.useEffect((function(){l(P.product.getAllProducts())}),[]),r.a.useEffect((function(){n.state&&c.length>0&&m(c.find((function(e){return e.id_===n.state[0]})))}),[c]),r.a.useEffect((function(){d.id&&p(Object(k.a)(Object(k.a)({},d),{},{catName:P.category.getCategory(d.categoria).name}))}),[d]);return r.a.createElement(de,{sectionName:"Producto"},r.a.createElement(yt,null,r.a.createElement(ft.a,{id:"combo-box-demo",options:c,value:d,onChange:function(e,t){m(t)},getOptionLabel:function(e){return e.nombre},style:{width:500},renderInput:function(e){return r.a.createElement(q.a,Object.assign({},e,{label:"Productos",placeholder:"Buscar..",variant:"outlined"}))}}),r.a.createElement(wt,null,r.a.createElement(Ct,null,r.a.createElement("div",null,r.a.createElement(Rt,null,"Nombre de producto:",g.nombre),r.a.createElement(kt,null,"ID: ",g.id)),r.a.createElement(Nt,null,r.a.createElement(It,null,"Categoria: ",g.catName),r.a.createElement(It,null,"Marca: ",g.marca),r.a.createElement(It,null,"Modelo: ",g.modelo),r.a.createElement(It,null,"Materiales: ",g.materiales),r.a.createElement(It,null,"Color: ",g.color),r.a.createElement(It,null,"Medida: ",g.sizes),r.a.createElement(It,null,"Provedor: ",g.provedorNombre),r.a.createElement(It,null,"Telefono: ",g.provedorTelefono),r.a.createElement(It,null,"Email: ",g.provedorCorreo)),r.a.createElement(St,null,"Cantidad stock: ",g.cantidad)),r.a.createElement(xt,null,r.a.createElement(me.a,{color:"primary",onClick:function(e){return t.push("/products/create")}},r.a.createElement(se.a,null))))))})),zt=n(197),Pt=n(202),Mt=n(188),_t=n(73);function Ut(){var e=Object(D.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin: 1rem 0;\n"]);return Ut=function(){return e},e}function qt(){var e=Object(D.a)(["\n  padding-top: 1rem;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(120px, 1fr));\n  gap: 2rem;\n"]);return qt=function(){return e},e}function Bt(){var e=Object(D.a)(["\n  font-size: 1.6rem;\n  font-weight: 400;\n"]);return Bt=function(){return e},e}function Tt(){var e=Object(D.a)(["\n  width: 100%;\n  height: 100%;\n"]);return Tt=function(){return e},e}function At(){var e=Object(D.a)(["\n  width: 100%;\n  /* height: 95%; */\n  margin: 1rem 0;\n  box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.35);\n  display: grid;\n  /* grid-template-rows: 1fr 1fr 1fr auto; */\n  padding: 0.5rem 4rem;\n  gap: 1rem;\n"]);return At=function(){return e},e}function Jt(){var e=Object(D.a)(["\n  width: 100%;\n  /* height: 100%; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Jt=function(){return e},e}var Dt=["23.7","24.1","24.5","25\t","25.4","25.8","26.2","26.7","27.1","27.5","27.9","28.3","28.8","29.2","29.6","30\t","30.5","31.3","32.2","33\t","33.9"],Ht=H.a.div(Jt()),Ft=H.a.form(At()),$t=H.a.div(Tt()),Lt=H.a.h1(Bt()),Vt=H.a.div(qt()),Gt=H.a.div(Ut()),Kt=Object(T.a)((function(e){return{fullRow:{gridColumn:"1 / span 2"},button:{margin:e.spacing(1)}}})),Qt=Object(A.i)((function(e){var t=e.history,n=Kt(),a=Object(_t.a)(),o=a.register,c=a.handleSubmit,l=(a.watch,a.errors),i=r.a.useState([]),d=Object(M.a)(i,2),m=d[0],f=d[1],s=r.a.useState({}),g=Object(M.a)(s,2),p=g[0],b=g[1],v=r.a.useState(""),h=Object(M.a)(v,2),E=h[0],O=h[1];return r.a.useEffect((function(){var e=P.category.getAllCategories();f(e)}),[]),r.a.createElement(de,{sectionName:"Nuevo producto"},r.a.createElement(Ht,null,r.a.createElement(Ft,null,r.a.createElement($t,null,r.a.createElement(Lt,null,"Informaci\xf3n basica"),r.a.createElement(Vt,null,r.a.createElement(q.a,{label:"Nombre",name:"nombre",inputRef:o({required:!0}),variant:"outlined",fullWidth:!0,error:l.nombre}),r.a.createElement(q.a,{label:"Id",name:"id",inputRef:o({required:!0}),variant:"outlined",fullWidth:!0,error:l.id}),r.a.createElement(q.a,{label:"Marca",name:"marca",inputRef:o({required:!0}),error:l.marca,variant:"outlined",fullWidth:!0}),r.a.createElement(q.a,{label:"Modelo",variant:"outlined",name:"modelo",inputRef:o({required:!0}),error:l.modelo,fullWidth:!0}),r.a.createElement(Mt.a,{variant:"outlined",className:n.fullRow},r.a.createElement(Pt.a,{id:"categoria-select-label"},"Categoria"),r.a.createElement(zt.a,{labelId:"categoria-select-label",id:"categoria-select",inputProps:{name:"categoria",inputRef:o({required:!0})},error:l.categoria,value:p,onChange:function(e){return b(e.target.value)},fullWidth:!0},m.map((function(e){return r.a.createElement(be.a,{key:e.id,value:e.id},e.name)})))))),r.a.createElement($t,null,r.a.createElement(Lt,null,"Informaci\xf3n adicional"),r.a.createElement(Vt,null,r.a.createElement(q.a,{label:"Materiales",name:"materiales",inputRef:o(),error:l.materiales,variant:"outlined",fullWidth:!0}),r.a.createElement(q.a,{label:"Color",name:"color",inputRef:o(),variant:"outlined",fullWidth:!0}),r.a.createElement(Mt.a,{variant:"outlined"},r.a.createElement(Pt.a,{id:"medida-select-label"},"Medida"),r.a.createElement(zt.a,{labelId:"medida-select-label",id:"medida-select",inputProps:{name:"medida",inputRef:o()},error:l.medida,value:E,onChange:function(e){return O(e.target.value)},fullWidth:!0},Dt.map((function(e){return r.a.createElement(be.a,{key:e,value:e},e)})))),r.a.createElement(q.a,{label:"Cantidad",name:"cantidad",type:"number",inputRef:o(),variant:"outlined",fullWidth:!0}))),r.a.createElement($t,null,r.a.createElement(Lt,null,"Informaci\xf3n de provedor"),r.a.createElement(Vt,null,r.a.createElement(q.a,{label:"Nombre",name:"provedorNombre",inputRef:o(),variant:"outlined",fullWidth:!0}),r.a.createElement(q.a,{label:"Telefono",name:"provedorTelefono",inputRef:o(),variant:"outlined",fullWidth:!0}),r.a.createElement(q.a,{className:n.fullRow,label:"Correo",name:"provedorCorreo",inputRef:o(),variant:"outlined",fullWidth:!0}))),r.a.createElement(Gt,null,r.a.createElement(B.a,{className:n.button,variant:"contained",color:"default",onClick:function(e){return t.goBack()}},"Regregar"),r.a.createElement(B.a,{className:n.button,variant:"contained",color:"primary",onClick:c((function(e){var n=Object(k.a)(Object(k.a)({},e),{},{categoria:p,sizes:E,id_:u.a.generate()});P.product.createProduct(n),t.push("/products")}))},"Continuar")))))}));function Xt(){var e=Object(D.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin: 1rem 0;\n"]);return Xt=function(){return e},e}function Yt(){var e=Object(D.a)(["\n  padding-top: 1rem;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(120px, 1fr));\n  gap: 2rem;\n"]);return Yt=function(){return e},e}function Zt(){var e=Object(D.a)(["\n  font-size: 1.6rem;\n  font-weight: 400;\n"]);return Zt=function(){return e},e}function en(){var e=Object(D.a)(["\n  width: 100%;\n  height: 100%;\n"]);return en=function(){return e},e}function tn(){var e=Object(D.a)(["\n  width: 100%;\n  /* height: 95%; */\n  margin: 1rem 0;\n  box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.35);\n  display: grid;\n  /* grid-template-rows: 1fr 1fr 1fr auto; */\n  padding: 0.5rem 4rem;\n  gap: 1rem;\n"]);return tn=function(){return e},e}function nn(){var e=Object(D.a)(["\n  width: 100%;\n  /* height: 100%; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return nn=function(){return e},e}var an=["23.7","24.1","24.5","25\t","25.4","25.8","26.2","26.7","27.1","27.5","27.9","28.3","28.8","29.2","29.6","30\t","30.5","31.3","32.2","33\t","33.9"],rn=H.a.div(nn()),on=H.a.form(tn()),cn=H.a.div(en()),ln=H.a.h1(Zt()),un=H.a.div(Yt()),dn=H.a.div(Xt()),mn=Object(T.a)((function(e){return{fullRow:{gridColumn:"1 / span 2"},button:{margin:e.spacing(1)}}})),fn=Object(A.i)((function(e){var t=e.history,n=Object(A.g)(),a=mn(),o=Object(_t.a)(),c=o.register,l=o.handleSubmit,i=(o.watch,o.errors),d=o.setValue,m=r.a.useState(""),f=Object(M.a)(m,2),s=f[0],g=f[1],p=r.a.useState(""),b=Object(M.a)(p,2),v=b[0],h=b[1],E=r.a.useState([]),O=Object(M.a)(E,2),j=O[0],y=O[1],w=r.a.useState({}),C=Object(M.a)(w,2),x=C[0],R=C[1],S=r.a.useState(""),N=Object(M.a)(S,2),I=N[0],W=N[1];return r.a.useEffect((function(){var e=P.category.getAllCategories();y(e),g(n.pathname.match(/(\w+)$/i)[0])}),[]),r.a.useEffect((function(){j.length&&v&&R(v)}),[j,v]),r.a.useEffect((function(){if(s){var e=P.product.getProduct(s);console.log(e),h(e.categoria),d("nombre",e.nombre),d("id",e.id),d("marca",e.marca),d("modelo",e.modelo),d("materiales",e.materiales),d("color",e.color),d("cantidad",e.cantidad),d("provedorNombre",e.provedorNombre),d("provedorTelefono",e.provedorTelefono),d("provedorCorreo",e.provedorCorreo),W(e.sizes)}}),[s]),r.a.createElement(de,{sectionName:"Editar producto"},r.a.createElement(rn,null,r.a.createElement(on,null,r.a.createElement(cn,null,r.a.createElement(ln,null,"Informaci\xf3n basica"),r.a.createElement(un,null,r.a.createElement(q.a,{label:"Nombre",name:"nombre",inputRef:c({required:!0}),variant:"outlined",fullWidth:!0,error:i.nombre}),r.a.createElement(q.a,{label:"Id",name:"id",inputRef:c({required:!0}),variant:"outlined",fullWidth:!0,error:i.id}),r.a.createElement(q.a,{label:"Marca",name:"marca",inputRef:c({required:!0}),error:i.marca,variant:"outlined",fullWidth:!0}),r.a.createElement(q.a,{label:"Modelo",variant:"outlined",name:"modelo",inputRef:c({required:!0}),error:i.modelo,fullWidth:!0}),r.a.createElement(Mt.a,{variant:"outlined",className:a.fullRow},r.a.createElement(Pt.a,{id:"categoria-select-label"},"Categoria"),r.a.createElement(zt.a,{labelId:"categoria-select-label",id:"categoria-select",inputProps:{name:"categoria",inputRef:c({required:!0})},error:i.categoria,value:x,onChange:function(e){return R(e.target.value)},fullWidth:!0},j.map((function(e){return r.a.createElement(be.a,{key:e.id,value:e.id},e.name)})))))),r.a.createElement(cn,null,r.a.createElement(ln,null,"Informaci\xf3n adicional"),r.a.createElement(un,null,r.a.createElement(q.a,{label:"Materiales",name:"materiales",inputRef:c(),error:i.materiales,variant:"outlined",fullWidth:!0}),r.a.createElement(q.a,{label:"Color",name:"color",inputRef:c(),variant:"outlined",fullWidth:!0}),r.a.createElement(Mt.a,{variant:"outlined"},r.a.createElement(Pt.a,{id:"medida-select-label"},"Medida"),r.a.createElement(zt.a,{labelId:"medida-select-label",id:"medida-select",inputProps:{name:"medida",inputRef:c()},error:i.medida,value:I,onChange:function(e){return W(e.target.value)},fullWidth:!0},an.map((function(e){return r.a.createElement(be.a,{key:e,value:e},e)})))),r.a.createElement(q.a,{label:"Cantidad",name:"cantidad",type:"number",inputRef:c(),variant:"outlined",fullWidth:!0}))),r.a.createElement(cn,null,r.a.createElement(ln,null,"Informaci\xf3n de provedor"),r.a.createElement(un,null,r.a.createElement(q.a,{label:"Nombre",name:"provedorNombre",inputRef:c(),variant:"outlined",fullWidth:!0}),r.a.createElement(q.a,{label:"Telefono",name:"provedorTelefono",inputRef:c(),variant:"outlined",fullWidth:!0}),r.a.createElement(q.a,{className:a.fullRow,label:"Correo",name:"provedorCorreo",inputRef:c(),variant:"outlined",fullWidth:!0}))),r.a.createElement(dn,null,r.a.createElement(B.a,{className:a.button,variant:"contained",color:"default",onClick:function(e){return t.goBack()}},"Regregar"),r.a.createElement(B.a,{className:a.button,variant:"contained",color:"primary",onClick:l((function(e){var n=Object(k.a)(Object(k.a)({},e),{},{categoria:x,sizes:I,id_:u.a.generate()});console.log(n),P.product.editProduct(s,n),t.push("/catalogue")}))},"Continuar")))))})),sn=function(){var e=Object(A.h)().path;return r.a.createElement(A.d,null,r.a.createElement(A.b,{exact:!0,path:"".concat(e),component:Wt}),r.a.createElement(A.b,{exact:!0,path:"".concat(e,"/create"),component:Qt}),r.a.createElement(A.b,{path:"".concat(e,"/edit/:id"),component:fn}))},gn=n(105),pn=function(e){var t=e.component,n=Object(gn.a)(e,["component"]);return r.a.createElement(A.b,Object.assign({},n,{render:function(e){return localStorage.getItem("token-valid")?r.a.createElement(t,e):r.a.createElement(A.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},bn=n(21),vn=Object(x.a)({palette:{primary:S.a}});var hn=Object(l.b)((function(e){return{}}),(function(e){return{}}))((function(){return Object(a.useEffect)((function(){!function(){if(P.general.createDB(),P.user.createUser({id:u.a.generate(),name:"dev",email:"dev",pass:"123"}),P.user.createUser({id:u.a.generate(),name:"admin",email:"admin@xyz.com",pass:"123"}),0===JSON.parse(localStorage.getItem("category")).length){var e=[{id:u.a.generate(),name:"Hombre"},{id:u.a.generate(),name:"Mujer"},{id:u.a.generate(),name:"Ni\xf1o"},{id:u.a.generate(),name:"Ni\xf1a"}];localStorage.setItem("category",JSON.stringify(e))}}()}),[]),r.a.createElement(bn.a,{basename:"/zapateria-xyz"},r.a.createElement(m.a,{persistor:C},r.a.createElement(R.a,{theme:vn},r.a.createElement(d.a,{maxSnack:3},r.a.createElement(A.d,null,r.a.createElement(pn,{path:"/category",component:mt}),r.a.createElement(pn,{exact:!0,path:"/catalogue",component:Ue}),r.a.createElement(pn,{path:"/products",component:sn}),r.a.createElement(A.b,{exact:!0,path:"/login",component:J}),r.a.createElement(A.a,{from:"/",to:"/category"}))))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:w},r.a.createElement(hn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},66:function(e,t,n){e.exports=n.p+"static/media/xyz-logo.a6cd1612.png"}},[[122,1,2]]]);
//# sourceMappingURL=main.71aa4751.chunk.js.map