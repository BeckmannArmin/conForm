(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ConceptPaper.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ConceptPaper.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_conceptPaper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/conceptPaper_service */ "./resources/js/services/conceptPaper_service.js");
/* harmony import */ var vue_uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-uuid */ "./node_modules/vue-uuid/dist/index.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "conceptPaper",
  data: function data() {
    return {
      conceptPapers: [],
      conceptPaperData: {
        name: "",
        course: "",
        currentSemester: "",
        image: "",
        uuid: ""
      },
      moreExists: false,
      nextPage: 0,
      editConceptPaperData: {},
      errors: {}
    };
  },
  mounted: function mounted() {
    this.loadConceptPaper();
  },
  methods: {
    generateUUID: function generateUUID() {
      this.conceptPaperData.uuid = vue_uuid__WEBPACK_IMPORTED_MODULE_2__["uuid"].v1();
      console.log(this.conceptPaperData.uuid);
    },
    loadConceptPaper: function () {
      var _loadConceptPaper = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_conceptPaper_service__WEBPACK_IMPORTED_MODULE_1__["loadConceptPaper"]();

              case 3:
                response = _context.sent;
                console.log(response);
                this.conceptPapers = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: "Some error occured. Please refresh the page!",
                  time: 5000
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function loadConceptPaper() {
        return _loadConceptPaper.apply(this, arguments);
      }

      return loadConceptPaper;
    }(),
    attachImage: function attachImage() {
      this.conceptPaperData.image = this.$refs.newconceptPaperImage.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.$refs.newconceptPaperImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.conceptPaperData.image);
    },
    hideNewconceptPaperModal: function hideNewconceptPaperModal() {
      this.$refs.newconceptPaperModal.hide();
    },
    showNewconceptPaperModal: function showNewconceptPaperModal() {
      this.generateUUID();
      this.$refs.newconceptPaperModal.show();
    },
    createConceptPaper: function () {
      var _createConceptPaper = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                formData.append("name", this.conceptPaperData.name);
                formData.append("course", this.conceptPaperData.course);
                formData.append("currentSemester", this.conceptPaperData.currentSemester);
                formData.append("image", this.conceptPaperData.image);
                formData.append("uuid", this.conceptPaperData.uuid);
                _context2.prev = 6;
                _context2.next = 9;
                return _services_conceptPaper_service__WEBPACK_IMPORTED_MODULE_1__["createConceptPaper"](formData);

              case 9:
                response = _context2.sent;
                this.conceptPapers.unshift(response.data);
                this.hideNewconceptPaperModal();
                this.flashMessage.success({
                  message: "Paper stored succesfully!",
                  time: 5000
                });
                this.conceptPaperData = {
                  name: "",
                  course: "",
                  currentSemester: "",
                  image: ""
                };
                _context2.next = 26;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](6);
                console.log(_context2.t0.response.status);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 422 ? 22 : 24;
                break;

              case 22:
                this.errors = _context2.t0.response.data.errors;
                return _context2.abrupt("break", 26);

              case 24:
                this.flashMessage.error({
                  message: "Some error occured. Please try again!",
                  time: 5000
                });
                return _context2.abrupt("break", 26);

              case 26:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 16]]);
      }));

      function createConceptPaper() {
        return _createConceptPaper.apply(this, arguments);
      }

      return createConceptPaper;
    }(),
    deleteConceptPaper: function () {
      var _deleteConceptPaper = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(conceptPaper) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (window.confirm("Are you sure you want to delete ".concat(conceptPaper.name, "?"))) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.prev = 2;
                _context3.next = 5;
                return _services_conceptPaper_service__WEBPACK_IMPORTED_MODULE_1__["deleteConceptPaper"](conceptPaper.id);

              case 5:
                /**
                 * filtr the conceptPapers array and match the id of each conceptPaper
                 */
                this.conceptPapers = this.conceptPapers.filter(function (obj) {
                  return obj.id != conceptPaper.id;
                });
                this.flashMessage.success({
                  message: "Paper deleted succesfully!",
                  time: 5000
                });
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](2);
                this.flashMessage.error({
                  message: _context3.t0.response.data.message,
                  time: 5000
                });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 9]]);
      }));

      function deleteConceptPaper(_x) {
        return _deleteConceptPaper.apply(this, arguments);
      }

      return deleteConceptPaper;
    }(),
    hideEditconceptPaperModal: function hideEditconceptPaperModal() {
      this.$refs.editconceptPaperModal.hide();
    },
    showEditconceptPaperModal: function showEditconceptPaperModal() {
      this.$refs.editconceptPaperModal.show();
    },
    editAttachedImage: function editAttachedImage() {
      this.editConceptPaperData.image = this.$refs.editconceptPaperImage.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.$refs.editconceptPaperImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.editConceptPaperData.image);
    },
    updateConceptPaper: function () {
      var _updateConceptPaper = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                formData = new FormData();
                formData.append('name', this.editConceptPaperData.name);
                formData.append('image', this.editConceptPaperData.image);
                formData.append('course', this.editConceptPaperData.course);
                formData.append('currentSemester', this.editConceptPaperData.currentSemester); //formData.append('uuid', this.editConceptPaperData.uuid);

                formData.append('_method', 'put');
                _context4.next = 9;
                return _services_conceptPaper_service__WEBPACK_IMPORTED_MODULE_1__["updateConceptPaper"](this.editConceptPaperData.id, formData);

              case 9:
                response = _context4.sent;
                this.conceptPapers.map(function (conceptPaper) {
                  if (conceptPaper.id == response.data.id) {
                    for (var key in response.data) {
                      conceptPaper[key] = response.data[key];
                    }
                  }
                });
                this.hideEditconceptPaperModal();
                this.flashMessage.success({
                  message: "conceptPaper updated succesfully!",
                  time: 5000
                });
                _context4.next = 18;
                break;

              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4["catch"](0);
                this.flashMessage.error({
                  message: _context4.t0.response.data.message,
                  time: 5000
                });

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 15]]);
      }));

      function updateConceptPaper() {
        return _updateConceptPaper.apply(this, arguments);
      }

      return updateConceptPaper;
    }(),
    editconceptPaper: function editconceptPaper(conceptPaper) {
      this.editConceptPaperData = _objectSpread({}, conceptPaper);
      this.showEditconceptPaperModal();
    },
    loadMore: function () {
      var _loadMore = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _this = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _services_conceptPaper_service__WEBPACK_IMPORTED_MODULE_1__["loadMore"](this.nextPage);

              case 3:
                response = _context5.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                response.data.data.forEach(function (data) {
                  _this.conceptPapers.push(data);
                });
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred during loading more conceptPapers',
                  time: 5000
                });

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      function loadMore() {
        return _loadMore.apply(this, arguments);
      }

      return loadMore;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ConceptPaper.vue?vue&type=template&id=22c7a2ba&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ConceptPaper.vue?vue&type=template&id=22c7a2ba& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "container-fluid" },
      [
        _c("h1", { staticClass: "mt-4" }, [_vm._v("Dashboard")]),
        _vm._v(" "),
        _c("ol", { staticClass: "breadcrumb mb-4" }, [
          _c(
            "li",
            { staticClass: "breadcrumb-item" },
            [_c("router-link", { attrs: { to: "/" } }, [_vm._v("conForm")])],
            1
          ),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item active" }, [
            _vm._v("Konzeptpapiere")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card mb-4" }, [
          _c("div", { staticClass: "card-header d-flex" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-sm ml-auto",
                on: { click: _vm.showNewconceptPaperModal }
              },
              [
                _vm._m(1),
                _vm._v("\n                    Hinzufügen\n                ")
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("table", { staticClass: "table" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.conceptPapers, function(conceptPaper, index) {
                  return _c("tr", { key: index }, [
                    _c("td", [_vm._v(_vm._s(conceptPaper.id))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(conceptPaper.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(conceptPaper.course))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(conceptPaper.currentSemester))]),
                    _vm._v(" "),
                    _c("td", [
                      _c("img", {
                        staticClass: "image-wd",
                        attrs: {
                          src:
                            _vm.$store.state.serverPath +
                            "/storage/" +
                            conceptPaper.image
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-sm",
                          on: {
                            click: function($event) {
                              return _vm.editconceptPaper(conceptPaper)
                            }
                          }
                        },
                        [_c("span", { staticClass: "fa fa-edit" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger btn-sm",
                          on: {
                            click: function($event) {
                              return _vm.deleteConceptPaper(conceptPaper)
                            }
                          }
                        },
                        [_c("span", { staticClass: "fa fa-trash" })]
                      )
                    ])
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.moreExists,
                    expression: "moreExists"
                  }
                ],
                staticClass: "text-center"
              },
              [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-sm",
                    attrs: { type: "button" },
                    on: { click: _vm.loadMore }
                  },
                  [
                    _c("span", { staticClass: "fa fa-arrow-down" }),
                    _vm._v("Load more")
                  ]
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "b-modal",
          {
            ref: "newconceptPaperModal",
            attrs: { "hide-footer": "", title: "Add new concept paper" }
          },
          [
            _c("div", { staticClass: "d-block" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.createConceptPaper($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Projektname eingeben")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.conceptPaperData.name,
                          expression: "conceptPaperData.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "name",
                        placeholder: "Name des Projektes"
                      },
                      domProps: { value: _vm.conceptPaperData.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.conceptPaperData,
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
                            "\n                            " +
                              _vm._s(_vm.errors.name[0]) +
                              "\n                        "
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Kurs eingeben")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.conceptPaperData.course,
                          expression: "conceptPaperData.course"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "course",
                        placeholder: "Kurs"
                      },
                      domProps: { value: _vm.conceptPaperData.course },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.conceptPaperData,
                            "course",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.name
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.errors.name[0]) +
                              "\n                        "
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Aktuelles currentSemester eingeben")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.conceptPaperData.currentSemester,
                          expression: "conceptPaperData.currentSemester"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "currentSemester",
                        placeholder: "Bsp.: WS20/21"
                      },
                      domProps: { value: _vm.conceptPaperData.currentSemester },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.conceptPaperData,
                            "currentSemester",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.name
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.errors.name[0]) +
                              "\n                        "
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "image" } }, [
                      _vm._v("Logo hochladen (Optional)")
                    ]),
                    _vm._v(" "),
                    _vm.conceptPaperData.image.name
                      ? _c("div", [
                          _c("img", {
                            ref: "newconceptPaperImageDisplay",
                            staticClass: "image-wd",
                            attrs: { src: "" }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("input", {
                      ref: "newconceptPaperImage",
                      staticClass: "form-control",
                      attrs: { type: "file", id: "image" },
                      on: { change: _vm.attachImage }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "name" } }, [_vm._v("UUID")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.conceptPaperData.uuid,
                          expression: "conceptPaperData.uuid"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "uuid", readonly: "" },
                      domProps: { value: _vm.conceptPaperData.uuid },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.conceptPaperData,
                            "uuid",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default",
                        attrs: { type: "button" },
                        on: { click: _vm.hideNewconceptPaperModal }
                      },
                      [
                        _vm._v(
                          "\n                            Cancel\n                        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-check" }),
                        _vm._v("Save\n                        ")
                      ]
                    )
                  ])
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "b-modal",
          {
            ref: "editconceptPaperModal",
            attrs: { "hide-footer": "", title: "Edit conceptPaper" }
          },
          [
            _c("div", { staticClass: "d-block" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.updateConceptPaper($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Projektname eingeben")
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
                        placeholder: "Name des Projektes"
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
                            "\n                            " +
                              _vm._s(_vm.errors.name[0]) +
                              "\n                        "
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Kurs eingeben")
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
                        placeholder: "Kurs"
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
                    _vm.errors.name
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.errors.name[0]) +
                              "\n                        "
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Aktuelles currentSemester eingeben")
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
                        placeholder: "Bsp.: WS20/21"
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
                    _vm.errors.name
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.errors.name[0]) +
                              "\n                        "
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "image" } }, [
                      _vm._v("Choose an image")
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("img", {
                        ref: "editconceptPaperImageDisplay",
                        staticClass: "image-wd",
                        attrs: {
                          src:
                            _vm.$store.state.serverPath +
                            "/storage/" +
                            _vm.editConceptPaperData.image
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      ref: "editconceptPaperImage",
                      staticClass: "form-control",
                      attrs: { type: "file", id: "image" },
                      on: { change: _vm.editAttachedImage }
                    })
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default",
                        attrs: { type: "button" },
                        on: { click: _vm.hideEditconceptPaperModal }
                      },
                      [
                        _vm._v(
                          "\n                            Cancel\n                        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-check" }),
                        _vm._v("Update\n                        ")
                      ]
                    )
                  ])
                ]
              )
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", { staticClass: "fas fa-chart-area mr-1" }),
      _vm._v("\n                    Übersicht\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "fa fa-plus" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td", [_vm._v("#id")]),
        _vm._v(" "),
        _c("td", [_vm._v("Name")]),
        _vm._v(" "),
        _c("td", [_vm._v("Kurs")]),
        _vm._v(" "),
        _c("td", [_vm._v("Aktuelles currentSemester")]),
        _vm._v(" "),
        _c("td", [_vm._v("Image")]),
        _vm._v(" "),
        _c("td", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/conceptPaper_service.js":
/*!*******************************************************!*\
  !*** ./resources/js/services/conceptPaper_service.js ***!
  \*******************************************************/
/*! exports provided: createConceptPaper, loadConceptPaper, deleteConceptPaper, updateConceptPaper, loadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConceptPaper", function() { return createConceptPaper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadConceptPaper", function() { return loadConceptPaper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConceptPaper", function() { return deleteConceptPaper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateConceptPaper", function() { return updateConceptPaper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createConceptPaper(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/conceptPaper', data);
}
function loadConceptPaper() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/conceptPaper');
}
function deleteConceptPaper(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("conceptPaper/".concat(id));
}
function updateConceptPaper(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("conceptPaper/".concat(id), data);
}
function loadMore(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("conceptPaper?page=".concat(nextPage));
}

/***/ }),

/***/ "./resources/js/views/ConceptPaper.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/ConceptPaper.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConceptPaper_vue_vue_type_template_id_22c7a2ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConceptPaper.vue?vue&type=template&id=22c7a2ba& */ "./resources/js/views/ConceptPaper.vue?vue&type=template&id=22c7a2ba&");
/* harmony import */ var _ConceptPaper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConceptPaper.vue?vue&type=script&lang=js& */ "./resources/js/views/ConceptPaper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ConceptPaper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConceptPaper_vue_vue_type_template_id_22c7a2ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ConceptPaper_vue_vue_type_template_id_22c7a2ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./resources/js/views/ConceptPaper.vue?vue&type=template&id=22c7a2ba&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/ConceptPaper.vue?vue&type=template&id=22c7a2ba& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptPaper_vue_vue_type_template_id_22c7a2ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ConceptPaper.vue?vue&type=template&id=22c7a2ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ConceptPaper.vue?vue&type=template&id=22c7a2ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptPaper_vue_vue_type_template_id_22c7a2ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptPaper_vue_vue_type_template_id_22c7a2ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);