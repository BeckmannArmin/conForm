(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/KanBan.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/KanBan.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
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
  components: {
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      newTask: "",
      arrBacklog: [{
        name: "Code Sign Up Page"
      }, {
        name: "Test Dashboard"
      }, {
        name: "Style Login Form"
      }, {
        name: "User Auth"
      }],
      arrInProgress: [],
      arrTested: [],
      arrDone: []
    };
  },
  methods: {
    add: function add() {
      if (this.newTask) {
        this.arrBacklog.push({
          name: this.newTask
        });
        this.newTask = "";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/KanBan.vue?vue&type=style&index=0&id=1e146514&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/KanBan.vue?vue&type=style&index=0&id=1e146514&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.kanban-column[data-v-1e146514] {\r\n    min-height: 300px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/KanBan.vue?vue&type=style&index=0&id=1e146514&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/KanBan.vue?vue&type=style&index=0&id=1e146514&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./KanBan.vue?vue&type=style&index=0&id=1e146514&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/KanBan.vue?vue&type=style&index=0&id=1e146514&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/KanBan.vue?vue&type=template&id=1e146514&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/KanBan.vue?vue&type=template&id=1e146514&scoped=true& ***!
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
  return _c("main", [
    _c("div", { staticClass: "container mt-5" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col form-inline" },
          [
            _c("b-form-input", {
              attrs: { placeholder: "Enter a task" },
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.add($event)
                }
              },
              model: {
                value: _vm.newTask,
                callback: function($$v) {
                  _vm.newTask = $$v
                },
                expression: "newTask"
              }
            }),
            _vm._v(" "),
            _c(
              "b-button",
              {
                staticClass: "ml-2",
                attrs: { variant: "primary" },
                on: { click: _vm.add }
              },
              [_vm._v("Add")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-3" }, [
        _c("div", { staticClass: "col-md-3" }, [
          _c(
            "div",
            { staticClass: "p-2 alert alert-secondary" },
            [
              _c("h3", [_vm._v("Backlog")]),
              _vm._v(" "),
              _c(
                "draggable",
                {
                  staticClass: "list-group kanban-column",
                  attrs: { list: _vm.arrBacklog, group: "tasks" }
                },
                _vm._l(_vm.arrBacklog, function(element) {
                  return _c(
                    "div",
                    { key: element.name, staticClass: "list-group-item" },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(element.name) +
                          "\n                        "
                      )
                    ]
                  )
                }),
                0
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c(
            "div",
            { staticClass: "p-2 alert alert-primary" },
            [
              _c("h3", [_vm._v("In progress")]),
              _vm._v(" "),
              _c(
                "draggable",
                {
                  staticClass: "list-group kanban-column",
                  attrs: { list: _vm.arrInProgress, group: "tasks" }
                },
                _vm._l(_vm.arrInProgress, function(element) {
                  return _c(
                    "div",
                    { key: element.name, staticClass: "list-group-item" },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(element.name) +
                          "\n                        "
                      )
                    ]
                  )
                }),
                0
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c(
            "div",
            { staticClass: "p-2 alert alert-warning" },
            [
              _c("h3", [_vm._v("Tested")]),
              _vm._v(" "),
              _c(
                "draggable",
                {
                  staticClass: "list-group kanban-column",
                  attrs: { list: _vm.arrTested, group: "tasks" }
                },
                _vm._l(_vm.arrTested, function(element) {
                  return _c(
                    "div",
                    { key: element.name, staticClass: "list-group-item" },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(element.name) +
                          "\n                        "
                      )
                    ]
                  )
                }),
                0
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c(
            "div",
            { staticClass: "p-2 alert alert-success" },
            [
              _c("h3", [_vm._v("Done")]),
              _vm._v(" "),
              _c(
                "draggable",
                {
                  staticClass: "list-group kanban-column",
                  attrs: { list: _vm.arrDone, group: "tasks" }
                },
                _vm._l(_vm.arrDone, function(element) {
                  return _c(
                    "div",
                    { key: element.name, staticClass: "list-group-item" },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(element.name) +
                          "\n                        "
                      )
                    ]
                  )
                }),
                0
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/KanBan.vue":
/*!***************************************!*\
  !*** ./resources/js/views/KanBan.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KanBan_vue_vue_type_template_id_1e146514_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KanBan.vue?vue&type=template&id=1e146514&scoped=true& */ "./resources/js/views/KanBan.vue?vue&type=template&id=1e146514&scoped=true&");
/* harmony import */ var _KanBan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KanBan.vue?vue&type=script&lang=js& */ "./resources/js/views/KanBan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _KanBan_vue_vue_type_style_index_0_id_1e146514_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KanBan.vue?vue&type=style&index=0&id=1e146514&scoped=true&lang=css& */ "./resources/js/views/KanBan.vue?vue&type=style&index=0&id=1e146514&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _KanBan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KanBan_vue_vue_type_template_id_1e146514_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _KanBan_vue_vue_type_template_id_1e146514_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1e146514",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/KanBan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/KanBan.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/KanBan.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KanBan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./KanBan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/KanBan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KanBan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/KanBan.vue?vue&type=style&index=0&id=1e146514&scoped=true&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/KanBan.vue?vue&type=style&index=0&id=1e146514&scoped=true&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KanBan_vue_vue_type_style_index_0_id_1e146514_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./KanBan.vue?vue&type=style&index=0&id=1e146514&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/KanBan.vue?vue&type=style&index=0&id=1e146514&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KanBan_vue_vue_type_style_index_0_id_1e146514_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KanBan_vue_vue_type_style_index_0_id_1e146514_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KanBan_vue_vue_type_style_index_0_id_1e146514_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KanBan_vue_vue_type_style_index_0_id_1e146514_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/KanBan.vue?vue&type=template&id=1e146514&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/KanBan.vue?vue&type=template&id=1e146514&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KanBan_vue_vue_type_template_id_1e146514_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./KanBan.vue?vue&type=template&id=1e146514&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/KanBan.vue?vue&type=template&id=1e146514&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KanBan_vue_vue_type_template_id_1e146514_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KanBan_vue_vue_type_template_id_1e146514_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);