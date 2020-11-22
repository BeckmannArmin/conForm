(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginPage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoginPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login_animation */ "./resources/js/login_animation.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    _login_animation__WEBPACK_IMPORTED_MODULE_0__["addLoginEventListener"]();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginPage.vue?vue&type=style&index=0&id=29a807bd&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoginPage.vue?vue&type=style&index=0&id=29a807bd&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap);", ""]);

// module
exports.push([module.i, "*[data-v-29a807bd] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody[data-v-29a807bd],\ninput[data-v-29a807bd] {\n  font-family: \"Poppins\", sans-serif;\n}\n.container[data-v-29a807bd] {\n  position: relative;\n  width: 100%;\n  background-color: #fff;\n  min-height: 100vh;\n  overflow: hidden;\n}\n.forms-container[data-v-29a807bd] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.signin-signup[data-v-29a807bd] {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 75%;\n  width: 50%;\n  transition: 1s 0.7s ease-in-out;\n  display: grid;\n  grid-template-columns: 1fr;\n  z-index: 5;\n}\nform[data-v-29a807bd] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0rem 5rem;\n  transition: all 0.2s 0.7s;\n  overflow: hidden;\n  grid-column: 1/2;\n  grid-row: 1/2;\n}\nform.sign-up-form[data-v-29a807bd] {\n  opacity: 0;\n  z-index: 1;\n}\nform.sign-in-form[data-v-29a807bd] {\n  z-index: 2;\n}\n.title[data-v-29a807bd] {\n  font-size: 2.2rem;\n  color: #444;\n  margin-bottom: 10px;\n}\n.input-field[data-v-29a807bd] {\n  max-width: 380px;\n  width: 100%;\n  background-color: #f0f0f0;\n  margin: 10px 0;\n  height: 55px;\n  border-radius: 55px;\n  display: grid;\n  grid-template-columns: 15% 85%;\n  padding: 0 0.4rem;\n  position: relative;\n}\n.input-field i[data-v-29a807bd] {\n  text-align: center;\n  line-height: 55px;\n  color: #acacac;\n  transition: 0.5s;\n  font-size: 1.1rem;\n}\n.input-field input[data-v-29a807bd] {\n  background: none;\n  outline: none;\n  border: none;\n  line-height: 1;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: #333;\n}\n.input-field input[data-v-29a807bd]::-moz-placeholder {\n  color: #aaa;\n  font-weight: 500;\n}\n.input-field input[data-v-29a807bd]:-ms-input-placeholder {\n  color: #aaa;\n  font-weight: 500;\n}\n.input-field input[data-v-29a807bd]::placeholder {\n  color: #aaa;\n  font-weight: 500;\n}\n.social-text[data-v-29a807bd] {\n  padding: 0.7rem 0;\n  font-size: 1rem;\n}\n.social-media[data-v-29a807bd] {\n  display: flex;\n  justify-content: center;\n}\n.social-icon[data-v-29a807bd] {\n  height: 46px;\n  width: 46px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0.45rem;\n  color: #333;\n  border-radius: 50%;\n  border: 1px solid #333;\n  text-decoration: none;\n  font-size: 1.1rem;\n  transition: 0.3s;\n}\n.social-icon[data-v-29a807bd]:hover {\n  color: #4481eb;\n  border-color: #4481eb;\n}\n.btn[data-v-29a807bd] {\n  width: 150px;\n  background-color: #5995fd;\n  border: none;\n  outline: none;\n  height: 49px;\n  border-radius: 49px;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin: 10px 0;\n  cursor: pointer;\n  transition: 0.5s;\n}\n.btn[data-v-29a807bd]:hover {\n  background-color: #4d84e2;\n}\n.panels-container[data-v-29a807bd] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.container[data-v-29a807bd]:before {\n  content: \"\";\n  position: absolute;\n  height: 2000px;\n  width: 2000px;\n  top: -10%;\n  right: 48%;\n  transform: translateY(-50%);\n  background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);\n  transition: 1.8s ease-in-out;\n  border-radius: 50%;\n  z-index: 6;\n}\n.image[data-v-29a807bd] {\n  width: 100%;\n  transition: transform 1.1s ease-in-out;\n  transition-delay: 0.4s;\n}\n.panel[data-v-29a807bd] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-around;\n  text-align: center;\n  z-index: 6;\n}\n.left-panel[data-v-29a807bd] {\n  pointer-events: all;\n  padding: 3rem 17% 2rem 12%;\n}\n.right-panel[data-v-29a807bd] {\n  pointer-events: none;\n  padding: 3rem 12% 2rem 17%;\n}\n.panel .content[data-v-29a807bd] {\n  color: #fff;\n  transition: transform 0.9s ease-in-out;\n  transition-delay: 0.6s;\n}\n.panel h3[data-v-29a807bd] {\n  font-weight: 600;\n  line-height: 1;\n  font-size: 1.5rem;\n}\n.panel p[data-v-29a807bd] {\n  font-size: 0.95rem;\n  padding: 0.7rem 0;\n}\n.btn.transparent[data-v-29a807bd] {\n  margin: 0;\n  background: none;\n  border: 2px solid #fff;\n  width: 130px;\n  height: 41px;\n  font-weight: 600;\n  font-size: 0.8rem;\n}\n.right-panel .image[data-v-29a807bd],\n.right-panel .content[data-v-29a807bd] {\n  transform: translateX(800px);\n}\n\n/* ANIMATION */\n.container.sign-up-mode[data-v-29a807bd]:before {\n  transform: translate(100%, -50%);\n  right: 52%;\n}\n.container.sign-up-mode .left-panel .image[data-v-29a807bd],\n.container.sign-up-mode .left-panel .content[data-v-29a807bd] {\n  transform: translateX(-800px);\n}\n.container.sign-up-mode .signin-signup[data-v-29a807bd] {\n  left: 25%;\n}\n.container.sign-up-mode form.sign-up-form[data-v-29a807bd] {\n  opacity: 1;\n  z-index: 2;\n}\n.container.sign-up-mode form.sign-in-form[data-v-29a807bd] {\n  opacity: 0;\n  z-index: 1;\n}\n.container.sign-up-mode .right-panel .image[data-v-29a807bd],\n.container.sign-up-mode .right-panel .content[data-v-29a807bd] {\n  transform: translateX(0%);\n}\n.container.sign-up-mode .left-panel[data-v-29a807bd] {\n  pointer-events: none;\n}\n.container.sign-up-mode .right-panel[data-v-29a807bd] {\n  pointer-events: all;\n}\n@media (max-width: 870px) {\n.container[data-v-29a807bd] {\n    min-height: 800px;\n    height: 100vh;\n}\n.signin-signup[data-v-29a807bd] {\n    width: 100%;\n    top: 95%;\n    transform: translate(-50%, -100%);\n    transition: 1s 0.8s ease-in-out;\n}\n.signin-signup[data-v-29a807bd],\n.container.sign-up-mode .signin-signup[data-v-29a807bd] {\n    left: 50%;\n}\n.panels-container[data-v-29a807bd] {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 2fr 1fr;\n}\n.panel[data-v-29a807bd] {\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    padding: 2.5rem 8%;\n    grid-column: 1/2;\n}\n.right-panel[data-v-29a807bd] {\n    grid-row: 3/4;\n}\n.left-panel[data-v-29a807bd] {\n    grid-row: 1/2;\n}\n.image[data-v-29a807bd] {\n    width: 200px;\n    transition: transform 0.9s ease-in-out;\n    transition-delay: 0.6s;\n}\n.panel .content[data-v-29a807bd] {\n    padding-right: 15%;\n    transition: transform 0.9s ease-in-out;\n    transition-delay: 0.8s;\n}\n.panel h3[data-v-29a807bd] {\n    font-size: 1.2rem;\n}\n.panel p[data-v-29a807bd] {\n    font-size: 0.7rem;\n    padding: 0.5rem 0;\n}\n.btn.transparent[data-v-29a807bd] {\n    width: 110px;\n    height: 35px;\n    font-size: 0.7rem;\n}\n.container[data-v-29a807bd]:before {\n    width: 1500px;\n    height: 1500px;\n    transform: translateX(-50%);\n    left: 30%;\n    bottom: 68%;\n    right: initial;\n    top: initial;\n    transition: 2s ease-in-out;\n}\n.container.sign-up-mode[data-v-29a807bd]:before {\n    transform: translate(-50%, 100%);\n    bottom: 32%;\n    right: initial;\n}\n.container.sign-up-mode .left-panel .image[data-v-29a807bd],\n.container.sign-up-mode .left-panel .content[data-v-29a807bd] {\n    transform: translateY(-300px);\n}\n.container.sign-up-mode .right-panel .image[data-v-29a807bd],\n.container.sign-up-mode .right-panel .content[data-v-29a807bd] {\n    transform: translateY(0px);\n}\n.right-panel .image[data-v-29a807bd],\n.right-panel .content[data-v-29a807bd] {\n    transform: translateY(300px);\n}\n.container.sign-up-mode .signin-signup[data-v-29a807bd] {\n    top: 5%;\n    transform: translate(-50%, 0);\n}\n}\n@media (max-width: 570px) {\nform[data-v-29a807bd] {\n    padding: 0 1.5rem;\n}\n.image[data-v-29a807bd] {\n    display: none;\n}\n.panel .content[data-v-29a807bd] {\n    padding: 0.5rem 1rem;\n}\n.container[data-v-29a807bd] {\n    padding: 1.5rem;\n}\n.container[data-v-29a807bd]:before {\n    bottom: 72%;\n    left: 50%;\n}\n.container.sign-up-mode[data-v-29a807bd]:before {\n    bottom: 28%;\n    left: 50%;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginPage.vue?vue&type=style&index=0&id=29a807bd&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoginPage.vue?vue&type=style&index=0&id=29a807bd&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./LoginPage.vue?vue&type=style&index=0&id=29a807bd&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginPage.vue?vue&type=style&index=0&id=29a807bd&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginPage.vue?vue&type=template&id=29a807bd&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoginPage.vue?vue&type=template&id=29a807bd&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "forms-container" }, [
        _c("div", { staticClass: "signin-signup" }, [
          _c("form", { staticClass: "sign-in-form", attrs: { action: "#" } }, [
            _c("h2", { staticClass: "title" }, [_vm._v("Sign in")]),
            _vm._v(" "),
            _c("div", { staticClass: "input-field" }, [
              _c("i", { staticClass: "fas fa-user" }),
              _vm._v(" "),
              _c("input", { attrs: { type: "text", placeholder: "Username" } })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-field" }, [
              _c("i", { staticClass: "fas fa-lock" }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "password", placeholder: "Password" }
              })
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "btn solid",
              attrs: { type: "submit", value: "Login" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "social-media" }, [
              _c("a", { staticClass: "social-icon", attrs: { href: "#" } }, [
                _c("i", { staticClass: "fab fa-github" })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("form", { staticClass: "sign-up-form", attrs: { action: "#" } }, [
            _c("h2", { staticClass: "title" }, [_vm._v("Sign up")]),
            _vm._v(" "),
            _c("div", { staticClass: "input-field" }, [
              _c("i", { staticClass: "fas fa-user" }),
              _vm._v(" "),
              _c("input", { attrs: { type: "text", placeholder: "Username" } })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-field" }, [
              _c("i", { staticClass: "fas fa-envelope" }),
              _vm._v(" "),
              _c("input", { attrs: { type: "email", placeholder: "Email" } })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-field" }, [
              _c("i", { staticClass: "fas fa-lock" }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "password", placeholder: "Password" }
              })
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "btn",
              attrs: { type: "submit", value: "Sign up" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "social-media" }, [
              _c("a", { staticClass: "social-icon", attrs: { href: "#" } }, [
                _c("i", { staticClass: "fab fa-github" })
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "panels-container" }, [
        _c("div", { staticClass: "panel left-panel" }, [
          _c("div", { staticClass: "content" }, [
            _c("h3", [_vm._v("New here ?")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,\n          ex ratione. Aliquid!\n        "
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn transparent", attrs: { id: "sign-up-btn" } },
              [_vm._v("\n          Sign up\n        ")]
            )
          ]),
          _vm._v(" "),
          _c("img", {
            staticClass: "image",
            attrs: { src: __webpack_require__(/*! ../../assets/log.svg */ "./resources/assets/log.svg"), alt: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "panel right-panel" }, [
          _c("div", { staticClass: "content" }, [
            _c("h3", [_vm._v("One of us ?")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum\n          laboriosam ad deleniti.\n        "
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn transparent", attrs: { id: "sign-in-btn" } },
              [_vm._v("\n          Sign in\n        ")]
            )
          ]),
          _vm._v(" "),
          _c("img", {
            staticClass: "image",
            attrs: { src: __webpack_require__(/*! ../../assets/register.svg */ "./resources/assets/register.svg"), alt: "" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/log.svg":
/*!**********************************!*\
  !*** ./resources/assets/log.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/log.svg?797bb3689f2760bfdd192ee58b815d7d";

/***/ }),

/***/ "./resources/assets/register.svg":
/*!***************************************!*\
  !*** ./resources/assets/register.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/register.svg?993f7d292006f5b823f666d3fcb0733b";

/***/ }),

/***/ "./resources/js/components/LoginPage.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/LoginPage.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginPage_vue_vue_type_template_id_29a807bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginPage.vue?vue&type=template&id=29a807bd&scoped=true& */ "./resources/js/components/LoginPage.vue?vue&type=template&id=29a807bd&scoped=true&");
/* harmony import */ var _LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginPage.vue?vue&type=script&lang=js& */ "./resources/js/components/LoginPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LoginPage_vue_vue_type_style_index_0_id_29a807bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginPage.vue?vue&type=style&index=0&id=29a807bd&lang=scss&scoped=true& */ "./resources/js/components/LoginPage.vue?vue&type=style&index=0&id=29a807bd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginPage_vue_vue_type_template_id_29a807bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoginPage_vue_vue_type_template_id_29a807bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "29a807bd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LoginPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/LoginPage.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/LoginPage.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LoginPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/LoginPage.vue?vue&type=style&index=0&id=29a807bd&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/LoginPage.vue?vue&type=style&index=0&id=29a807bd&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_style_index_0_id_29a807bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./LoginPage.vue?vue&type=style&index=0&id=29a807bd&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginPage.vue?vue&type=style&index=0&id=29a807bd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_style_index_0_id_29a807bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_style_index_0_id_29a807bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_style_index_0_id_29a807bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_style_index_0_id_29a807bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/LoginPage.vue?vue&type=template&id=29a807bd&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/LoginPage.vue?vue&type=template&id=29a807bd&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_template_id_29a807bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LoginPage.vue?vue&type=template&id=29a807bd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginPage.vue?vue&type=template&id=29a807bd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_template_id_29a807bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_template_id_29a807bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/login_animation.js":
/*!*****************************************!*\
  !*** ./resources/js/login_animation.js ***!
  \*****************************************/
/*! exports provided: addLoginEventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLoginEventListener", function() { return addLoginEventListener; });
var sign_in_btn = document.querySelector("#sign-in-btn");
var sign_up_btn = document.querySelector("#sign-up-btn");
var container = document.querySelector(".container");
function addLoginEventListener() {
  sign_up_btn.addEventListener("click", function () {
    container.classList.add("sign-up-mode");
  });
  sign_in_btn.addEventListener("click", function () {
    container.classList.remove("sign-up-mode");
  });
}
;

/***/ })

}]);