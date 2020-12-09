(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PusherExample.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PusherExample.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-uuid */ "./node_modules/vue-uuid/dist/index.esm.js");
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
  data: function data() {
    return {
      users: null,
      uuid: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    Echo.join('users').here(function (users) {
      _this.users = users;
      console.log(users);
    }).joining(function (user) {
      console.log(user.name);

      _this.users.push(user);
    }).leaving(function (user) {
      console.log(user.name);

      _this.users.splice(_this.users.indexOf(user), 1);
    });
  },
  methods: {
    generateUUID: function generateUUID() {
      this.uuid = vue_uuid__WEBPACK_IMPORTED_MODULE_0__["uuid"].v1();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PusherExample.vue?vue&type=template&id=2e8d1f70&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PusherExample.vue?vue&type=template&id=2e8d1f70& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("Example Comp")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            _vm._l(_vm.users, function(user) {
              return _c("li", { key: user.id }, [
                _vm._v("\n            " + _vm._s(user.name) + "\n          ")
              ])
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c("div", [
          _c(
            "button",
            { staticClass: "btn btn-primary", on: { click: _vm.generateUUID } },
            [_vm._v("Generate join code")]
          ),
          _vm._v(" "),
          _c("h3", { staticClass: "uuid" }, [_vm._v(_vm._s(_vm.uuid))])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/PusherExample.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/PusherExample.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PusherExample_vue_vue_type_template_id_2e8d1f70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PusherExample.vue?vue&type=template&id=2e8d1f70& */ "./resources/js/components/PusherExample.vue?vue&type=template&id=2e8d1f70&");
/* harmony import */ var _PusherExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PusherExample.vue?vue&type=script&lang=js& */ "./resources/js/components/PusherExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PusherExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PusherExample_vue_vue_type_template_id_2e8d1f70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PusherExample_vue_vue_type_template_id_2e8d1f70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PusherExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PusherExample.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/PusherExample.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PusherExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PusherExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PusherExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PusherExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PusherExample.vue?vue&type=template&id=2e8d1f70&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/PusherExample.vue?vue&type=template&id=2e8d1f70& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PusherExample_vue_vue_type_template_id_2e8d1f70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PusherExample.vue?vue&type=template&id=2e8d1f70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PusherExample.vue?vue&type=template&id=2e8d1f70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PusherExample_vue_vue_type_template_id_2e8d1f70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PusherExample_vue_vue_type_template_id_2e8d1f70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);