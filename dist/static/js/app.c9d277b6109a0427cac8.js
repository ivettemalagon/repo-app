webpackJsonp([1],{"+FJC":function(t,e,n){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"Inventory"}},[e("div",{staticClass:"container_inventory"},[this._m(0),this._v(" "),e("button",{on:{click:this.getSearch}},[this._v(" BUSCAR PRODUCTO ")]),this._v(" "),e("button",{on:{click:this.getModify}},[this._v(" MODIFICAR PRODUCTO ")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[this._v("¿Que desea hacer?"),e("br")])}]};var r=n("VU/8")({name:"Inventory",data:function(){return{}},methods:{getSearch:function(){this.$router.push({name:"buscar"})},getModify:function(){this.$router.push({name:"modificar"})}},created:function(){}},a,!1,function(t){n("lRhG")},null,null);e.a=r.exports},"/KFX":function(t,e,n){"use strict";var a=n("mtWM"),r=n.n(a),o={name:"Search",data:function(){return{nombre_producto:"",cantidad:0,precio_compra:0,pvp:0,fecha_vencimiento:""}},methods:{processBuscar:function(){var t=this;this.nombre_producto;r.a.get("http://127.0.0.1:8000/inventory/product/"+this.nombre_producto).then(e=>{t.nombre_producto=e.data.nombre_producto,t.cantidad=e.data.cantidad,t.precio_compra=e.data.precio_compra,t.pvp=e.data.pvp,t.fecha_vencimiento=e.data.fecha_vencimiento}).catch(t=>{"404"==t.response.status&&alert("ERROR 404: Producto no encontrado.")})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search_product",attrs:{id:"Search"}},[n("div",{staticClass:"container_search_product"},[n("h2",[t._v(" Buscar Producto")]),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.processBuscar(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.nombre_producto,expression:"nombre_producto"}],attrs:{type:"tetx",placeholder:"Nombre del producto"},domProps:{value:t.nombre_producto},on:{input:function(e){e.target.composing||(t.nombre_producto=e.target.value)}}}),t._v(" "),n("br"),t._v(" "),n("button",{attrs:{type:"submit"}},[t._v("Buscar")])])]),t._v(" "),n("div",{staticClass:"container_data"},[n("h2",[t._v("INFORMACIÓN DEL PRODUCTO")]),t._v(" "),n("h3",[t._v("Nombre: "+t._s(t.nombre_producto)),n("br"),t._v("\n            Cantidad: "+t._s(t.cantidad)+" "),n("br"),t._v("\n            Precio de compra: "+t._s(t.precio_compra)+" "),n("br"),t._v("\n            Precio al publico: "+t._s(t.pvp)+" "),n("br"),t._v("\n            Fecha de vencimiento: "+t._s(t.fecha_vencimiento)+"\n        ")])])])},staticRenderFns:[]};var s=n("VU/8")(o,i,!1,function(t){n("UpoZ")},null,null);e.a=s.exports},"7G8s":function(t,e){},M93x:function(t,e,n){"use strict";n("/ocq");var a={name:"App",data:function(){return{is_auth:localStorage.getItem("isAuth")||!1}},components:{},methods:{updateAuth:function(){if(this.is_auth=localStorage.getItem("isAuth")||!1,0==this.is_auth)this.$router.push({name:"user_auth"});else{let t=localStorage.getItem("current_username");this.$router.push({name:"user",params:{username:t}})}},logIn:function(t){localStorage.setItem("current_username",t),localStorage.setItem("isAuth",!0),this.updateAuth()},logOut:function(){localStorage.removeItem("isAuth"),localStorage.removeItem("current_username"),this.updateAuth()},init:function(){if("user"!=this.$route.name){let t=localStorage.getItem("current_username");this.$router.push({name:"user",params:{username:t}})}},getInventory:function(){"current_username"!=this.$route.name&&this.$router.push({name:"inventory"})},doTransaction:function(){let t=localStorage.getItem("current_username");this.$router.push({name:"user_transaction",params:{username:t}})}},created:function(){this.$router.push({name:"root"}),this.updateAuth()}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("img",{staticClass:"logo",attrs:{src:"https://anima-uploads.s3.amazonaws.com/projects/5fdc158d8688b1df3f41bd9a/releases/5fdc15ff302a7106407a24bf/img/logo@1x.png"}}),t._v(" "),n("nav",[t.is_auth?n("button",{on:{click:t.init}},[t._v(" INICIO ")]):t._e(),t._v(" "),t.is_auth?n("button",{on:{click:t.getInventory}},[t._v(" INVENTARIO ")]):t._e(),t._v(" "),t.is_auth?n("button",[t._v(" VENTAS ")]):t._e(),t._v(" "),t.is_auth?n("button",{on:{click:t.logOut}},[t._v("SALIR")]):t._e()])]),t._v(" "),n("div",{staticClass:"main-component"},[n("router-view",{on:{"log-in":t.logIn}})],1),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("h2",[e("br"),this._v("Ivette Malagon"),e("br"),this._v("G1M2"),e("br")]),this._v(" "),e("img",{staticClass:"mintic",attrs:{src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/32f16345-b125-4b8e-8f3d-065d7c4aeab2/deat8kp-fb0aa021-718c-4eb2-9e56-864ece5ab5ce.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMzJmMTYzNDUtYjEyNS00YjhlLThmM2QtMDY1ZDdjNGFlYWIyXC9kZWF0OGtwLWZiMGFhMDIxLTcxOGMtNGViMi05ZTU2LTg2NGVjZTVhYjVjZS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.62CkIKNcdlbto5GY9z31IpU4EoEdrmmdafWOPbrbLEY"}})])}]};var o=n("VU/8")(a,r,!1,function(t){n("cXhQ")},null,null);e.a=o.exports},N6IS:function(t,e,n){"use strict";var a=n("mtWM"),r=n.n(a),o={name:"UserAuth",data:function(){return{user_in:{username:"",password:""}}},methods:{processAuthUser:function(){var t=this;r.a.post("http://127.0.0.1:8000/user/auth/",t.user_in,{headers:{}}).then(e=>{alert("Autenticación Exitosa"),t.$emit("log-in",t.user_in.username)}).catch(t=>{"404"==t.response.status&&alert("ERROR 404: Usuario no encontrado."),"403"==t.response.status&&alert("ERROR 403: Contraseña Erronea.")})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auth_user",attrs:{id:"AuthUser"}},[n("div",{staticClass:"container_auth_user"},[n("h2",[t._v("INICIAR SESIÓN")]),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.processAuthUser(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user_in.username,expression:"user_in.username"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:t.user_in.username},on:{input:function(e){e.target.composing||t.$set(t.user_in,"username",e.target.value)}}}),t._v(" "),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user_in.password,expression:"user_in.password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.user_in.password},on:{input:function(e){e.target.composing||t.$set(t.user_in,"password",e.target.value)}}}),t._v(" "),n("br"),t._v(" "),n("button",{attrs:{type:"submit"}},[t._v("Iniciar Sesion")])])])])},staticRenderFns:[]};var s=n("VU/8")(o,i,!1,function(t){n("tWiW")},null,null);e.a=s.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r=n("M93x"),o=n("/ocq"),i=n("cHtD");a.a.use(o.a),a.a.config.productionTip=!1,new a.a({router:i.a,el:"#app",components:{App:r.a},template:"<App/>"})},UpoZ:function(t,e){},W4bV:function(t,e,n){"use strict";var a=n("mtWM"),r=n.n(a),o={name:"UserAuth",data:function(){return{nombre_producto:"",cantidad:"",precio_compra:"",pvp:"",fecha_vencimiento:""}},methods:{processModify(){let t={nombre_producto:this.nombre_producto,cantidad:this.cantidad,precio_compra:this.precio_compra,pvp:this.pvp,fecha_vencimiento:this.fecha_vencimiento};r.a.put("http://127.0.0.1:8000/inventory/product/modify/",t).then(t=>{alert("Producto modificado exitosamente")}).catch(t=>{alert("ERROR 404: Producto no encontrado.")})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modify_product",attrs:{id:"Modify"}},[n("div",{staticClass:"container_modify_product"},[n("h2",[t._v("Modificar Producto")]),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.processModify(e)}}},[t._m(0),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.cantidad,expression:"cantidad"}],attrs:{type:"text",placeholder:"Cantidad"},domProps:{value:t.cantidad},on:{input:function(e){e.target.composing||(t.cantidad=e.target.value)}}}),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.precio_compra,expression:"precio_compra"}],attrs:{type:"text",placeholder:"Precio de compra"},domProps:{value:t.precio_compra},on:{input:function(e){e.target.composing||(t.precio_compra=e.target.value)}}}),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pvp,expression:"pvp"}],attrs:{type:"text",placeholder:"Precio al publico"},domProps:{value:t.pvp},on:{input:function(e){e.target.composing||(t.pvp=e.target.value)}}}),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fecha_vencimiento,expression:"fecha_vencimiento"}],attrs:{type:"text",placeholder:"Fecha de vencimiento"},domProps:{value:t.fecha_vencimiento},on:{input:function(e){e.target.composing||(t.fecha_vencimiento=e.target.value)}}}),t._v(" "),n("button",{attrs:{type:"submit"}},[t._v("Modificar")])])]),t._v(" "),n("div",{staticClass:"container_data"},[n("h2",[t._v("INFORMACIÓN DEL PRODUCTO")]),t._v(" "),n("h3",[t._v("Nombre: "+t._s(t.nombre_producto)),n("br"),t._v("\n            Cantidad: "+t._s(t.cantidad)+" "),n("br"),t._v("\n            Precio de compra: "+t._s(t.precio_compra)+" "),n("br"),t._v("\n            Precio al publico: "+t._s(t.pvp)+" "),n("br"),t._v("\n            Fecha de vencimiento: "+t._s(t.fecha_vencimiento)+"\n        ")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",{attrs:{name:"Nombre del producto"}},[n("option",{attrs:{selected:"",value:"0"}},[t._v(" Nombre del producto ")]),t._v(" "),n("option",{attrs:{value:"Pan_Bimbo"}},[t._v("Pan_Bimbo")]),t._v(" "),n("option",{attrs:{value:"Jabon_Ariel"}},[t._v("Jabon_Ariel")]),t._v(" "),n("option",{attrs:{value:"Margarina_Gustosita"}},[t._v("Margarina_Gustosita")]),t._v(" "),n("option",{attrs:{value:"Jugo_DelValle"}},[t._v("Jugo_DelValle")]),t._v(" "),n("option",{attrs:{value:"Huevo"}},[t._v("Huevo")]),t._v(" "),n("option",{attrs:{value:"Agua_Botella"}},[t._v("Agua_Botella")]),t._v(" "),n("option",{attrs:{value:"Arroz_Libra"}},[t._v("Arroz_Libra")])])}]};var s=n("VU/8")(o,i,!1,function(t){n("7G8s")},null,null);e.a=s.exports},cHtD:function(t,e,n){"use strict";(function(t){var a=n("/ocq"),r=n("jyJz"),o=n("N6IS"),i=n("+FJC"),s=n("/KFX"),c=n("W4bV"),u=n("M93x");const p=new a.a({mode:"history",base:t,routes:[{path:"/",name:"root",component:u.a},{path:"/user/:username",name:"user",component:r.a},{path:"/user/auth",name:"user_auth",component:o.a},{path:"/inventory",name:"inventory",component:i.a},{path:"/inventory/product/",name:"buscar",component:s.a},{path:"/inventory/product/modify/",name:"modificar",component:c.a}]});e.a=p}).call(e,"/")},cXhQ:function(t,e){},jyJz:function(t,e,n){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"User"}},[e("h2",[this._v("¡Bienvenido(a) de nuevo "),e("br"),this._v(" "),e("span",[this._v(" "+this._s(this.username))]),this._v("!")])])},staticRenderFns:[]};var r=n("VU/8")({name:"User",data:function(){return{username:"none"}},created:function(){this.username=this.$route.params.username}},a,!1,function(t){n("xBjS")},null,null);e.a=r.exports},lRhG:function(t,e){},tWiW:function(t,e){},xBjS:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c9d277b6109a0427cac8.js.map