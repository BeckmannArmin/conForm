(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ActiveUsers.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ActiveUsers.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
//
//
//
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
      showUsers: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    Echo.join("users").here(function (users) {
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
    showActiveUsersList: function showActiveUsersList() {}
  }
});

/***/ }),

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
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var docx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! docx */ "./node_modules/docx/build/index.js");
/* harmony import */ var docx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(docx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_conceptPaperGenerator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/conceptPaperGenerator_service */ "./resources/js/services/conceptPaperGenerator_service.js");
/* harmony import */ var _components_ActiveUsers_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ActiveUsers.vue */ "./resources/js/components/ActiveUsers.vue");


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
    PageLoader: _components_PageLoader_PageLoader_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ActiveUsers: _components_ActiveUsers_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  mounted: function mounted() {
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
                _context.next = 25;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: "Oops, etwas ist schiefgelaufen. Bitte lade die Seite neu.",
                  time: 5000
                });

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 22]]);
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
                  message: "Konzeptpapier wurde erfolgreich geupdated!",
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
    }(),
    editAttachedImage: function editAttachedImage() {
      this.editConceptPaperData.image = this.$refs.editConceptPaperImage.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.$refs.editConceptPaperImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.editConceptPaperData.image);
    },
    copyTestingCode: function copyTestingCode() {
      var testingCodeToCopy = document.querySelector("#testing-code");
      testingCodeToCopy.setAttribute("type", "text");
      testingCodeToCopy.select();

      try {
        var successful = document.execCommand("copy");
        var msg = successful ? this.flashMessage.success({
          message: "Join Code erfolgreich generiert",
          time: 5000
        }) : this.flashMessage.error({
          message: "Oops, etwas ist schiefgelaufen",
          time: 5000
        });
      } catch (err) {
        alert("Oops, kopieren nicht möglich");
      }
      /* unselect the range */


      testingCodeToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    },
    exportAsDOCX: function exportAsDOCX() {
      var _this2 = this;

      var documentCreator = new _services_conceptPaperGenerator_service__WEBPACK_IMPORTED_MODULE_8__["DocumentCreator"]();
      var _this$editConceptPape = this.editConceptPaperData,
          name = _this$editConceptPape.name,
          course = _this$editConceptPape.course,
          currentSemester = _this$editConceptPape.currentSemester,
          idea = _this$editConceptPape.idea,
          basics = _this$editConceptPape.basics,
          niceToHave = _this$editConceptPape.niceToHave,
          technologies = _this$editConceptPape.technologies,
          team = _this$editConceptPape.team;
      var document = documentCreator.create([name, course, currentSemester, idea, basics, niceToHave, technologies, team]);
      docx__WEBPACK_IMPORTED_MODULE_7__["Packer"].toBlob(document).then(function (blob) {
        console.log(blob);
        Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(blob, "Konzeptpapier_" + _this2.editConceptPaperData.name + ".docx");
        console.log("Document created successfully");
      });
    }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ActiveUsers.vue?vue&type=template&id=19dd6c87&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ActiveUsers.vue?vue&type=template&id=19dd6c87& ***!
  \**************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "card-header" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                on: {
                  click: function($event) {
                    _vm.showUsers = !_vm.showUsers
                  }
                }
              },
              [_c("i", { staticClass: "fas fa-users" })]
            )
          ]),
          _vm._v(" "),
          _vm.showUsers
            ? _c(
                "div",
                { staticClass: "card-body" },
                _vm._l(_vm.users, function(user) {
                  return _c("li", { key: user.id }, [
                    _vm._v(
                      "\n            " + _vm._s(user.name) + "\n          "
                    )
                  ])
                }),
                0
              )
            : _vm._e()
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



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
          _vm._v(_vm._s(_vm.$t("conceptPaper.conceptPaper")))
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container" },
        [
          _c("ActiveUsers"),
          _vm._v(" "),
          _c("h1", { staticClass: "mt-4" }, [
            _vm._v(
              _vm._s(_vm.$t("conceptPaper.conceptPaper")) +
                ": " +
                _vm._s(_vm.conceptPaper.name)
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card mb-4" }, [
            _c("div", { staticClass: "card-header d-flex" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-info text-white copy-btn ml-auto",
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.copyTestingCode($event)
                    }
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
              _c("input", {
                attrs: { type: "hidden", id: "testing-code" },
                domProps: { value: _vm.conceptPaper.joinCodeDB }
              })
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
                          placeholder: _vm.$t(
                            "conceptPaper.placeholders.course"
                          )
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
                          placeholder: _vm.$t(
                            "conceptPaper.placeholders.semester"
                          )
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
                          _vm.editConceptPaperData.image
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
                      placeholder: _vm.$t(
                        "conceptPaper.placeholders.niceToHave"
                      ),
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
                    { staticClass: "button", on: { click: _vm.exportAsDOCX } },
                    [_vm._v(_vm._s(_vm.$t("conceptPaper.exportDocx")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default",
                      attrs: { type: "button" }
                    },
                    [_vm._v(_vm._s(_vm.$t("conceptPaper.cancel")))]
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
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ActiveUsers.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ActiveUsers.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActiveUsers_vue_vue_type_template_id_19dd6c87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActiveUsers.vue?vue&type=template&id=19dd6c87& */ "./resources/js/components/ActiveUsers.vue?vue&type=template&id=19dd6c87&");
/* harmony import */ var _ActiveUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActiveUsers.vue?vue&type=script&lang=js& */ "./resources/js/components/ActiveUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ActiveUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActiveUsers_vue_vue_type_template_id_19dd6c87___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ActiveUsers_vue_vue_type_template_id_19dd6c87___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ActiveUsers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ActiveUsers.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ActiveUsers.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActiveUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ActiveUsers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ActiveUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActiveUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ActiveUsers.vue?vue&type=template&id=19dd6c87&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ActiveUsers.vue?vue&type=template&id=19dd6c87& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActiveUsers_vue_vue_type_template_id_19dd6c87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ActiveUsers.vue?vue&type=template&id=19dd6c87& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ActiveUsers.vue?vue&type=template&id=19dd6c87&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActiveUsers_vue_vue_type_template_id_19dd6c87___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActiveUsers_vue_vue_type_template_id_19dd6c87___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/services/conceptPaperGenerator_service.js":
/*!****************************************************************!*\
  !*** ./resources/js/services/conceptPaperGenerator_service.js ***!
  \****************************************************************/
/*! exports provided: DocumentCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentCreator", function() { return DocumentCreator; });
/* harmony import */ var docx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! docx */ "./node_modules/docx/build/index.js");
/* harmony import */ var docx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(docx__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var DocumentCreator = /*#__PURE__*/function () {
  function DocumentCreator() {
    _classCallCheck(this, DocumentCreator);
  }

  _createClass(DocumentCreator, [{
    key: "create",
    // tslint:disable-next-line: typedef
    value: function create(_ref) {
      var _ref2 = _slicedToArray(_ref, 8),
          name = _ref2[0],
          course = _ref2[1],
          currentSemester = _ref2[2],
          idea = _ref2[3],
          basics = _ref2[4],
          niceToHave = _ref2[5],
          technologies = _ref2[6],
          team = _ref2[7];

      var document = new docx__WEBPACK_IMPORTED_MODULE_0__["Document"](); //const image = Media.addImage(document, );

      console.log(basics);
      document.addSection({
        children: [new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
          children: [new docx__WEBPACK_IMPORTED_MODULE_0__["TextRun"]({
            text: name,
            bold: true,
            size: 28
          }), new docx__WEBPACK_IMPORTED_MODULE_0__["TextRun"]({
            text: course,
            bold: false,
            size: 28
          })["break"](), new docx__WEBPACK_IMPORTED_MODULE_0__["TextRun"]({
            text: currentSemester,
            bold: false,
            size: 28
          })["break"]()],
          spacing: {
            after: 200
          }
        }), //new Paragraph(image),
        this.createHeading("Grundidee"), new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
          children: [new docx__WEBPACK_IMPORTED_MODULE_0__["TextRun"]({
            text: idea,
            size: 22
          })],
          spacing: {
            after: 200
          }
        }), this.createHeading("Features"), this.createSubHeading("\tGrundfunktionalitäten"), this.createList(basics, true), this.createSubHeading("\tNice-To-Have Features"), this.createList(niceToHave, true), this.createHeading("Technologien"), this.createList(technologies, false), this.createHeading("Team"), this.createList(team, false)]
      });
      return document;
    }
  }, {
    key: "createList",
    value: function createList(stringArrayInput, tabBool) {
      var stringArray = stringArrayInput.split("\n");
      var children = new Array();
      var i;

      for (i = 0; i < stringArray.length; i++) {
        if (i == 0) {
          if (tabBool == true) {
            var text = new docx__WEBPACK_IMPORTED_MODULE_0__["TextRun"]({
              text: "\t" + "\t" + stringArray[i],
              size: 22
            });
          } else {
            var text = new docx__WEBPACK_IMPORTED_MODULE_0__["TextRun"]({
              text: "\t" + stringArray[i],
              size: 22
            });
          }
        } else {
          if (tabBool == true) {
            var text = new docx__WEBPACK_IMPORTED_MODULE_0__["TextRun"]({
              text: "\t" + "\t" + stringArray[i],
              size: 22
            })["break"]();
          } else {
            var text = new docx__WEBPACK_IMPORTED_MODULE_0__["TextRun"]({
              text: "\t" + stringArray[i],
              size: 22
            })["break"]();
          }
        }

        console.log(text);
        children.push(text);
      }

      return new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
        children: children,
        spacing: {
          after: 200
        }
      });
    }
  }, {
    key: "createSubHeading",
    value: function createSubHeading(text) {
      return new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
        text: text,
        heading: docx__WEBPACK_IMPORTED_MODULE_0__["HeadingLevel"].HEADING_2
      });
    }
  }, {
    key: "createHeading",
    value: function createHeading(text) {
      return new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
        text: text,
        heading: docx__WEBPACK_IMPORTED_MODULE_0__["HeadingLevel"].HEADING_1
      });
    }
  }, {
    key: "createSpace",
    value: function createSpace() {
      return new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({});
    }
  }]);

  return DocumentCreator;
}();

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