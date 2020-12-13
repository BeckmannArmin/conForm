(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PageLoader/PageLoader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PageLoader/PageLoader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    loaded: Boolean
  }
});

/***/ }),

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PageLoader_PageLoader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageLoader/PageLoader.vue */ "./resources/js/components/PageLoader/PageLoader.vue");
/* harmony import */ var _services_conceptPaper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/conceptPaper_service */ "./resources/js/services/conceptPaper_service.js");
/* harmony import */ var vue_uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-uuid */ "./node_modules/vue-uuid/dist/index.esm.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/http_service */ "./resources/js/services/http_service.js");


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





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      joinCode: this.$route.params.joincode,
      conceptPapers: [],
      conceptPaper: {
        name: "",
        course: "",
        currentSemester: "",
        idea: "",
        basics: "",
        niceToHave: "",
        technologies: "",
        team: "",
        joinCodeDB: "",
        userID: ""
      },
      isLoading: false,
      editConceptPaperData: {},
      errors: {}
    };
  },
  components: {
    PageLoader: _components_PageLoader_PageLoader_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    console.log(this.joinCode);
    this.loadConceptPaper();
  },
  methods: {
    loadConceptPaper: function () {
      var _loadConceptPaper = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.isLoading = true;
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("conceptPaper/lobby/".concat(this.joinCode));

              case 4:
                response = _context.sent;
                //const responseAllPapers = await conceptPaperService.loadConceptPaper();
                //this.conceptPapers = responseAllPapers.data;
                console.log(response.data.name);
                this.conceptPaper.name = response.data.name;
                this.conceptPaper.course = response.data.course;
                this.conceptPaper.currentSemester = response.data.currentSemester;
                this.conceptPaper.image = response.data.image;
                this.conceptPaper.idea = response.data.idea;
                this.conceptPaper.basics = response.data.basics;
                this.conceptPaper.niceToHave = response.data.niceToHave;
                this.conceptPaper.technologies = response.data.technologies;
                this.conceptPaper.team = response.data.team;
                this.conceptPaper.joinCodeDB = response.data.join_code;
                this.conceptPaper.userID = response.data.user_id;
                this.conceptPapers = response.data;
                this.editConceptPaperData = _objectSpread({}, response.data);
                console.log(this.editConceptPaperData);
                setTimeout(function () {
                  _this.isLoading = false;
                }, 500);
                _context.next = 26;
                break;

              case 23:
                _context.prev = 23;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: "Some error occured. Please refresh the page!",
                  time: 5000
                });

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 23]]);
      }));

      function loadConceptPaper() {
        return _loadConceptPaper.apply(this, arguments);
      }

      return loadConceptPaper;
    }(),
    updateConceptPaper: function () {
      var _updateConceptPaper = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                formData = new FormData();
                formData.append("name", this.editConceptPaperData.name);
                formData.append("course", this.editConceptPaperData.course);
                formData.append("currentSemester", this.editConceptPaperData.currentSemester);
                formData.append("image", this.editConceptPaperData.image);
                formData.append("idea", this.editConceptPaperData.idea);
                formData.append("basics", this.editConceptPaperData.basics);
                formData.append("niceToHave", this.editConceptPaperData.niceToHave);
                formData.append("technologies", this.editConceptPaperData.technologies);
                formData.append("team", this.editConceptPaperData.team);
                formData.append("join_code", this.conceptPaper.joinCodeDB);
                formData.append("user_id", this.conceptPaper.userID);
                formData.append("_method", "put"); //const response = await axios.post(`conceptPaper/lobby/${this.conceptPaper.joinCodeDB}`, formData);

                _context2.next = 16;
                return _services_conceptPaper_service__WEBPACK_IMPORTED_MODULE_3__["updateConceptPaper"](this.editConceptPaperData.id, formData);

              case 16:
                response = _context2.sent;
                this.conceptPapers.map(function (conceptPaper) {
                  if (conceptPaper.id == response.data.id) {
                    for (var key in response.data) {
                      conceptPaper[key] = response.data[key];
                    }
                  }
                });
                this.flashMessage.success({
                  message: "conceptPaper updated succesfully!",
                  time: 5000
                });
                _context2.next = 24;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: _context2.t0.response.data.message,
                  time: 5000
                });

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 21]]);
      }));

      function updateConceptPaper() {
        return _updateConceptPaper.apply(this, arguments);
      }

      return updateConceptPaper;
    }()
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PageLoader/PageLoader.vue?vue&type=style&index=0&id=4caf7118&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PageLoader/PageLoader.vue?vue&type=style&index=0&id=4caf7118&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pageloader[data-v-4caf7118] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(51, 51, 51, 0.5);\n  z-index: 9999;\n}\n.cube[data-v-4caf7118] {\n  width: 40px;\n  height: 40px;\n  margin-right: 10px;\n}\n.cube[data-v-4caf7118]:nth-child(1) {\n  background-color: #8CC271;\n}\n.cube[data-v-4caf7118]:nth-child(2) {\n  background-color: #69BEEB;\n}\n.cube[data-v-4caf7118]:nth-child(3) {\n  background-color: #F5AA39;\n}\n.cube[data-v-4caf7118]:nth-child(4) {\n  background-color: #E9643B;\n}\n.cube[data-v-4caf7118]:first-child {\n  -webkit-animation: left-data-v-4caf7118 1s infinite;\n          animation: left-data-v-4caf7118 1s infinite;\n}\n.cube[data-v-4caf7118]:last-child {\n  -webkit-animation: right-data-v-4caf7118 1s infinite 0.5s;\n          animation: right-data-v-4caf7118 1s infinite 0.5s;\n}\n@-webkit-keyframes left-data-v-4caf7118 {\n40% {\n    transform: translateX(-60px);\n}\n50% {\n    transform: translateX(0);\n}\n}\n@keyframes left-data-v-4caf7118 {\n40% {\n    transform: translateX(-60px);\n}\n50% {\n    transform: translateX(0);\n}\n}\n@-webkit-keyframes right-data-v-4caf7118 {\n40% {\n    transform: translateX(60px);\n}\n50% {\n    transform: translateX(0);\n}\n}\n@keyframes right-data-v-4caf7118 {\n40% {\n    transform: translateX(60px);\n}\n50% {\n    transform: translateX(0);\n}\n}", ""]);

// exports


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
exports.push([module.i, "\n.container[data-v-22c7a2ba] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  flex-flow: column;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PageLoader/PageLoader.vue?vue&type=style&index=0&id=4caf7118&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PageLoader/PageLoader.vue?vue&type=style&index=0&id=4caf7118&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageLoader.vue?vue&type=style&index=0&id=4caf7118&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PageLoader/PageLoader.vue?vue&type=style&index=0&id=4caf7118&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PageLoader/PageLoader.vue?vue&type=template&id=4caf7118&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PageLoader/PageLoader.vue?vue&type=template&id=4caf7118&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _vm.loaded
    ? _c("div", { staticClass: "pageloader" }, [
        _c("div", { staticClass: "cube" }),
        _vm._v(" "),
        _c("div", { staticClass: "cube" }),
        _vm._v(" "),
        _c("div", { staticClass: "cube" }),
        _vm._v(" "),
        _c("div", { staticClass: "cube" })
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



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
    { staticClass: "container" },
    [
      _c("PageLoader", { attrs: { loaded: _vm.isLoading } }),
      _vm._v(" "),
      _c("h2", [
        _vm._v(
          "Konzeptpapier mit der ID: " + _vm._s(_vm.conceptPaper.joinCodeDB)
        )
      ]),
      _vm._v(" "),
      _c("div", [
        _c("div", { staticClass: "form-group" }, [
          _c("table", { staticClass: "table" }, [
            _c("td", [
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
                attrs: { type: "text", id: "name", placeholder: "Name" },
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
                      "\n            " +
                        _vm._s(_vm.errors.name[0]) +
                        "\n          "
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("td", [
              _c("label", { attrs: { for: "course" } }, [
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
                attrs: { type: "text", id: "course", placeholder: "Kurs" },
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
                      "\n            " +
                        _vm._s(_vm.errors.name[0]) +
                        "\n          "
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("td", [
              _c("label", { attrs: { for: "currentSemester" } }, [
                _vm._v("Aktuelles Semester eingeben")
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
                domProps: { value: _vm.editConceptPaperData.currentSemester },
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
                      "\n            " +
                        _vm._s(_vm.errors.name[0]) +
                        "\n          "
                    )
                  ])
                : _vm._e()
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "idea" } }, [_vm._v("Grundidee")]),
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
              placeholder: "Grundidee in ganzen Sätzen beschreiben.",
              rows: "6"
            },
            domProps: { value: _vm.editConceptPaperData.idea },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.editConceptPaperData, "idea", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.name
            ? _c("div", { staticClass: "invalid-feedback" }, [
                _vm._v("\n        " + _vm._s(_vm.errors.name[0]) + "\n      ")
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "basics" } }, [
            _vm._v("Grundfunktionalitäten (Must-Have)")
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
              placeholder: "Grundfunktionalitäten in Stichpunkten beschreiben.",
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
          _vm.errors.name
            ? _c("div", { staticClass: "invalid-feedback" }, [
                _vm._v("\n        " + _vm._s(_vm.errors.name[0]) + "\n      ")
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "niceToHave" } }, [
            _vm._v("Nice-To-Have Features")
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
              placeholder: "Nice-To-Have Features in Stichpunkten beschreiben.",
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
          _vm.errors.name
            ? _c("div", { staticClass: "invalid-feedback" }, [
                _vm._v("\n        " + _vm._s(_vm.errors.name[0]) + "\n      ")
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "technologies" } }, [
            _vm._v("Technologien")
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
              id: "technologien",
              placeholder: "Technologien in Stichpunkten beschreiben.",
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
          _vm.errors.name
            ? _c("div", { staticClass: "invalid-feedback" }, [
                _vm._v("\n        " + _vm._s(_vm.errors.name[0]) + "\n      ")
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "team" } }, [_vm._v("Team")]),
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
              placeholder: "" + _vm.conceptPaper.team,
              rows: "5"
            },
            domProps: { value: _vm.editConceptPaperData.team },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.editConceptPaperData, "team", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.name
            ? _c("div", { staticClass: "invalid-feedback" }, [
                _vm._v("\n        " + _vm._s(_vm.errors.name[0]) + "\n      ")
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "text-right" }, [
          _c(
            "button",
            { staticClass: "btn btn-default", attrs: { type: "button" } },
            [_vm._v("Cancel")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              on: { click: _vm.updateConceptPaper }
            },
            [
              _c("span", { staticClass: "fa fa-check" }),
              _vm._v("\n        Save\n      ")
            ]
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/PageLoader/PageLoader.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/PageLoader/PageLoader.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageLoader_vue_vue_type_template_id_4caf7118_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageLoader.vue?vue&type=template&id=4caf7118&scoped=true& */ "./resources/js/components/PageLoader/PageLoader.vue?vue&type=template&id=4caf7118&scoped=true&");
/* harmony import */ var _PageLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageLoader.vue?vue&type=script&lang=js& */ "./resources/js/components/PageLoader/PageLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PageLoader_vue_vue_type_style_index_0_id_4caf7118_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageLoader.vue?vue&type=style&index=0&id=4caf7118&lang=scss&scoped=true& */ "./resources/js/components/PageLoader/PageLoader.vue?vue&type=style&index=0&id=4caf7118&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PageLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageLoader_vue_vue_type_template_id_4caf7118_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageLoader_vue_vue_type_template_id_4caf7118_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4caf7118",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PageLoader/PageLoader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PageLoader/PageLoader.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/PageLoader/PageLoader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageLoader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PageLoader/PageLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PageLoader/PageLoader.vue?vue&type=style&index=0&id=4caf7118&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/PageLoader/PageLoader.vue?vue&type=style&index=0&id=4caf7118&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLoader_vue_vue_type_style_index_0_id_4caf7118_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageLoader.vue?vue&type=style&index=0&id=4caf7118&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PageLoader/PageLoader.vue?vue&type=style&index=0&id=4caf7118&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLoader_vue_vue_type_style_index_0_id_4caf7118_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLoader_vue_vue_type_style_index_0_id_4caf7118_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLoader_vue_vue_type_style_index_0_id_4caf7118_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLoader_vue_vue_type_style_index_0_id_4caf7118_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/PageLoader/PageLoader.vue?vue&type=template&id=4caf7118&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/PageLoader/PageLoader.vue?vue&type=template&id=4caf7118&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLoader_vue_vue_type_template_id_4caf7118_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageLoader.vue?vue&type=template&id=4caf7118&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PageLoader/PageLoader.vue?vue&type=template&id=4caf7118&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLoader_vue_vue_type_template_id_4caf7118_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLoader_vue_vue_type_template_id_4caf7118_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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