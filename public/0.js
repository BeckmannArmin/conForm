(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ConceptPaper.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ConceptPaper.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Armin\\conForm\\resources\\js\\views\\ConceptPaper.vue: 'await' is only allowed within async functions and at the top levels of modules (293:23)\n\n\u001b[0m \u001b[90m 291 | \u001b[39m  methods\u001b[33m:\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 292 | \u001b[39m    fetchData(){\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 293 | \u001b[39m      \u001b[36mconst\u001b[39m response \u001b[33m=\u001b[39m await axios\u001b[33m.\u001b[39mget(\u001b[32m`conceptPaper/lobby/${this.joinCode}`\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 294 | \u001b[39m      console\u001b[33m.\u001b[39mlog(response)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 295 | \u001b[39m      \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mjsonData \u001b[33m=\u001b[39m response\u001b[33m.\u001b[39mdata\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 296 | \u001b[39m    }\u001b[33m,\u001b[39m\u001b[0m\n    at Parser._raise (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:748:17)\n    at Parser.raiseWithData (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:741:17)\n    at Parser.raise (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:735:17)\n    at Parser.checkReservedWord (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:11386:14)\n    at Parser.parseIdentifierName (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:11350:12)\n    at Parser.parseIdentifier (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:11317:23)\n    at Parser.parseExprAtom (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:10408:27)\n    at Parser.parseExprSubscripts (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:10150:23)\n    at Parser.parseUpdate (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:10130:21)\n    at Parser.parseMaybeUnary (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:10119:17)\n    at Parser.parseExprOps (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:9989:23)\n    at Parser.parseMaybeConditional (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:9963:23)\n    at Parser.parseMaybeAssign (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:9926:21)\n    at C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:9893:39\n    at Parser.allowInAnd (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:11541:16)\n    at Parser.parseMaybeAssignAllowIn (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:9893:17)\n    at Parser.parseVar (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:12339:70)\n    at Parser.parseVarStatement (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:12151:10)\n    at Parser.parseStatementContent (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:11743:21)\n    at Parser.parseStatement (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:11676:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:12258:25)\n    at Parser.parseBlockBody (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:12249:10)\n    at Parser.parseBlock (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:12233:10)\n    at Parser.parseFunctionBody (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:11221:24)\n    at Parser.parseFunctionBodyAndFinish (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:11205:10)\n    at Parser.parseMethod (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:11155:10)\n    at Parser.parseObjectMethod (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:11084:19)\n    at Parser.parseObjPropValue (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:11117:23)\n    at Parser.parsePropertyDefinition (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:11041:10)\n    at Parser.parseObjectLike (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:10931:25)\n    at Parser.parseExprAtom (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:10491:23)\n    at Parser.parseExprSubscripts (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:10150:23)\n    at Parser.parseUpdate (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:10130:21)\n    at Parser.parseMaybeUnary (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:10119:17)\n    at Parser.parseExprOps (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:9989:23)\n    at Parser.parseMaybeConditional (C:\\Users\\Armin\\conForm\\node_modules\\@babel\\parser\\lib\\index.js:9963:23)");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-invite[data-v-22c7a2ba],\r\n.btn-pdf[data-v-22c7a2ba],\r\n.btn-docx[data-v-22c7a2ba] {\r\n  color: #fff;\n}\n.btn-invite[data-v-22c7a2ba] {\r\n  background-color: #5c55ba;\n}\n.btn-pdf[data-v-22c7a2ba],\r\n.btn-docx[data-v-22c7a2ba] {\r\n  background-color: #ff7e85;\n}\n.container[data-v-22c7a2ba] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  flex-flow: column;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ConceptPaper.vue?vue&type=template&id=22c7a2ba&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ConceptPaper.vue?vue&type=template&id=22c7a2ba&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "container-fluid",
      staticStyle: { "margin-top": "160px !important" }
    },
    [
      _c("PageLoader", { attrs: { loaded: _vm.isLoading } }),
      _vm._v(" "),
      _c("h1", { staticClass: "mt-4" }),
      _vm._v(" "),
      _c("ol", { staticClass: "breadcrumb mb-4" }, [
        _c(
          "li",
          { staticClass: "breadcrumb-item" },
          [_c("router-link", { attrs: { to: "/" } }, [_vm._v("conForm")])],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "breadcrumb-item" },
          [
            _c("router-link", { attrs: { to: "/conceptPaperCreator" } }, [
              _vm._v("Konzeptpapier Creator")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", { staticClass: "breadcrumb-item active" }, [
          _vm._v(
            "\n      " + _vm._s(_vm.$t("conceptPaper.conceptPaper")) + "\n    "
          )
        ])
      ]),
      _vm._v(" "),
      _c("RightSideBar"),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("h1", { staticClass: "mt-4" }, [
          _vm._v(
            "\n      " +
              _vm._s(_vm.$t("conceptPaper.conceptPaper")) +
              ": " +
              _vm._s(_vm.conceptPaper.name) +
              "\n    "
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card mb-4" }, [
          _c("div", { staticClass: "card-header d-flex flex-row-reverse" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-invite",
                attrs: {
                  type: "button",
                  "data-toggle": "modal",
                  "data-target": "#inviteModal"
                }
              },
              [
                _vm._v(
                  "\n          " +
                    _vm._s(_vm.$t("conceptPaper.inviteTeam")) +
                    "\n        "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticStyle: { "padding-right": "20px" } },
              [
                _c(
                  "downloadexcel",
                  {
                    staticClass: "btn",
                    attrs: { fetch: _vm.fetchData, type: "csv" }
                  },
                  [_vm._v("\n    Download Excel\n  ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-json",
                    on: { click: _vm.exportAsJSON }
                  },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.$t("conceptPaper.jsonExport")) +
                        "\n          "
                    )
                  ]
                ),
                _vm._v(" "),
                _vm.isLoggedIn
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-pdf",
                        on: { click: _vm.exportAsPDF }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.$t("conceptPaper.pdfExport")) +
                            "\n          "
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                !_vm.isLoggedIn
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-pdf",
                        on: {
                          click: function($event) {
                            _vm.showWatermark = true
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.$t("conceptPaper.pdfExport")) +
                            "\n          "
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                !_vm.isLoggedIn
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-docx",
                        on: {
                          click: function($event) {
                            _vm.showDocxWatermark = true
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.$t("conceptPaper.exportDocx")) +
                            "\n          "
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.isLoggedIn
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-docx",
                        on: { click: _vm.exportAsDOCX }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.$t("conceptPaper.exportDocx")) +
                            "\n          "
                        )
                      ]
                    )
                  : _vm._e()
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", [
              _c("div", { staticClass: "form-group" }, [
                _c("table", { staticClass: "table" }, [
                  _c("td", [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v(_vm._s(_vm.$t("conceptPaper.projectName")))
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editConceptPaperData.name,
                          expression: "editConceptPaperData.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "name",
                        placeholder: _vm.$t("conceptPaper.placeholders.name")
                      },
                      domProps: { value: _vm.editConceptPaperData.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editConceptPaperData,
                            "name",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.name
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "\n                  " +
                              _vm._s(_vm.errors.name[0]) +
                              "\n                "
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("label", { attrs: { for: "course" } }, [
                      _vm._v(_vm._s(_vm.$t("conceptPaper.courseName")))
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editConceptPaperData.course,
                          expression: "editConceptPaperData.course"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "course",
                        placeholder: _vm.$t("conceptPaper.placeholders.course")
                      },
                      domProps: { value: _vm.editConceptPaperData.course },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editConceptPaperData,
                            "course",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.course
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "\n                  " +
                              _vm._s(_vm.errors.course[0]) +
                              "\n                "
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("label", { attrs: { for: "currentSemester" } }, [
                      _vm._v(_vm._s(_vm.$t("conceptPaper.semester")))
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editConceptPaperData.currentSemester,
                          expression: "editConceptPaperData.currentSemester"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "currentSemester",
                        placeholder:
                          _vm.$store.state.serverPath +
                          "/storage/" +
                          _vm.editConceptPaperData.image
                      },
                      domProps: {
                        value: _vm.editConceptPaperData.currentSemester
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editConceptPaperData,
                            "currentSemester",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.currentSemester
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "\n                  " +
                              _vm._s(_vm.errors.currentSemester[0]) +
                              "\n                "
                          )
                        ])
                      : _vm._e()
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "image" } }, [
                  _vm._v(_vm._s(_vm.$t("conceptPaper.logo")))
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("img", {
                    ref: "editConceptPaperImageDisplay",
                    staticClass: "image-wd",
                    attrs: {
                      src:
                        _vm.$store.state.serverPath +
                        "/storage/" +
                        _vm.editConceptPaperData.image,
                      id: "logo_image"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("input", {
                  ref: "editConceptPaperImage",
                  staticClass: "form-control",
                  attrs: { type: "file", id: "image" },
                  on: { change: _vm.editAttachedImage }
                }),
                _vm._v(" "),
                _vm.errors.image
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.errors.image[0]) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "idea" } }, [
                  _vm._v(_vm._s(_vm.$t("conceptPaper.idea")))
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.editConceptPaperData.idea,
                      expression: "editConceptPaperData.idea"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "idea",
                    placeholder: _vm.$t("conceptPaper.placeholders.idea"),
                    rows: "6"
                  },
                  domProps: { value: _vm.editConceptPaperData.idea },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.editConceptPaperData,
                        "idea",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.idea
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.errors.idea[0]) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "basics" } }, [
                  _vm._v(_vm._s(_vm.$t("conceptPaper.mustHave")))
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.editConceptPaperData.basics,
                      expression: "editConceptPaperData.basics"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "basics",
                    placeholder: _vm.$t("conceptPaper.placeholders.basics"),
                    rows: "8"
                  },
                  domProps: { value: _vm.editConceptPaperData.basics },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.editConceptPaperData,
                        "basics",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.basics
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.errors.basics[0]) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "niceToHave" } }, [
                  _vm._v(_vm._s(_vm.$t("conceptPaper.niceToHave")))
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.editConceptPaperData.niceToHave,
                      expression: "editConceptPaperData.niceToHave"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "niceToHave",
                    placeholder: _vm.$t("conceptPaper.placeholders.niceToHave"),
                    rows: "8"
                  },
                  domProps: { value: _vm.editConceptPaperData.niceToHave },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.editConceptPaperData,
                        "niceToHave",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.niceToHave
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.errors.niceToHave[0]) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "technologies" } }, [
                  _vm._v(_vm._s(_vm.$t("conceptPaper.technologies")))
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.editConceptPaperData.technologies,
                      expression: "editConceptPaperData.technologies"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "technologies",
                    placeholder: _vm.$t("conceptPaper.placeholders.tech"),
                    rows: "5"
                  },
                  domProps: { value: _vm.editConceptPaperData.technologies },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.editConceptPaperData,
                        "technologies",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.technologies
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.errors.technologies[0]) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "team" } }, [
                  _vm._v(_vm._s(_vm.$t("conceptPaper.team")))
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.editConceptPaperData.team,
                      expression: "editConceptPaperData.team"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "team",
                    placeholder: _vm.$t("conceptPaper.placeholders.team"),
                    rows: "5"
                  },
                  domProps: { value: _vm.editConceptPaperData.team },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.editConceptPaperData,
                        "team",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.team
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.errors.team[0]) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-right" }, [
                _c(
                  "button",
                  { staticClass: "btn btn-default", attrs: { type: "button" } },
                  [
                    _vm._v(
                      "\n              " +
                        _vm._s(_vm.$t("conceptPaper.cancel")) +
                        "\n            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { id: "notifyBtn" },
                    on: { click: _vm.updateConceptPaper }
                  },
                  [
                    _c("span", { staticClass: "fa fa-check" }),
                    _vm._v(
                      "\n              " +
                        _vm._s(_vm.$t("conceptPaper.update")) +
                        "\n            "
                    )
                  ]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("InviteTeam", { attrs: { joinCode: _vm.conceptPaper.joinCodeDB } }),
      _vm._v(" "),
      _vm.showModal
        ? _c("CreateAccountModal", {
            on: {
              close: function($event) {
                _vm.showModal = false
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.showWatermark
        ? _c("PDFWatermark", {
            on: {
              close: function($event) {
                _vm.showWatermark = false
              },
              downloadpdf: _vm.exportAsPDFWithWatermark
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.showDocxWatermark
        ? _c("DOCXWatermark", {
            on: {
              close: function($event) {
                _vm.showDocxWatermark = false
              },
              downloaddocx: _vm.exportAsDOCXWithWatermark
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("img", {
        staticStyle: { display: "none" },
        attrs: {
          src: __webpack_require__(/*! ../../assets/conForm_watermark.png */ "./resources/assets/conForm_watermark.png"),
          id: "docx_watermark"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/conForm_watermark.png":
/*!************************************************!*\
  !*** ./resources/assets/conForm_watermark.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/conForm_watermark.png?da852b39f7b72e6e53ac4b2b70621355";

/***/ }),

/***/ "./resources/js/views/ConceptPaper.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/ConceptPaper.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConceptPaper_vue_vue_type_template_id_22c7a2ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConceptPaper.vue?vue&type=template&id=22c7a2ba&scoped=true& */ "./resources/js/views/ConceptPaper.vue?vue&type=template&id=22c7a2ba&scoped=true&");
/* harmony import */ var _ConceptPaper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConceptPaper.vue?vue&type=script&lang=js& */ "./resources/js/views/ConceptPaper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ConceptPaper_vue_vue_type_style_index_0_id_22c7a2ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&scoped=true&lang=css& */ "./resources/js/views/ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ConceptPaper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConceptPaper_vue_vue_type_template_id_22c7a2ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ConceptPaper_vue_vue_type_template_id_22c7a2ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "22c7a2ba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ConceptPaper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ConceptPaper.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/ConceptPaper.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptPaper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ConceptPaper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ConceptPaper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptPaper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptPaper_vue_vue_type_style_index_0_id_22c7a2ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptPaper_vue_vue_type_style_index_0_id_22c7a2ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptPaper_vue_vue_type_style_index_0_id_22c7a2ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptPaper_vue_vue_type_style_index_0_id_22c7a2ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptPaper_vue_vue_type_style_index_0_id_22c7a2ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/ConceptPaper.vue?vue&type=template&id=22c7a2ba&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/ConceptPaper.vue?vue&type=template&id=22c7a2ba&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptPaper_vue_vue_type_template_id_22c7a2ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ConceptPaper.vue?vue&type=template&id=22c7a2ba&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ConceptPaper.vue?vue&type=template&id=22c7a2ba&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptPaper_vue_vue_type_template_id_22c7a2ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptPaper_vue_vue_type_template_id_22c7a2ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);