(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/DocxWatermark.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/DocxWatermark.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  methods: {
    downloadDOCX: function downloadDOCX() {
      this.$emit('downloaddocx');
      this.$emit('close');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/InviteYourTeam.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/InviteYourTeam.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var qrcode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qrcode.vue */ "./node_modules/qrcode.vue/dist/qrcode.vue.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['joinCode'],
  data: function data() {
    return {
      isToggled: false,
      generated: false
    };
  },
  components: {
    QrcodeVue: qrcode_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    copyLink: function copyLink() {
      var _this = this;

      this.isToggled = true;
      setTimeout(function () {
        _this.isToggled = false;
      }, 2000);
      var copyText = document.getElementById('join-code');
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand('copy');
    },
    generateQRCode: function generateQRCode() {
      this.generated = !this.generated;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/PdfWatermark.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/PdfWatermark.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  methods: {
    downloadPDF: function downloadPDF() {
      this.$emit('downloadpdf');
      this.$emit('close');
    }
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
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router */ "./resources/js/router.js");
/* harmony import */ var _components_PageLoader_PageLoader_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PageLoader/PageLoader.vue */ "./resources/js/components/PageLoader/PageLoader.vue");
/* harmony import */ var _services_conceptPaper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/conceptPaper_service */ "./resources/js/services/conceptPaper_service.js");
/* harmony import */ var vue_uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-uuid */ "./node_modules/vue-uuid/dist/index.esm.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/http_service */ "./resources/js/services/http_service.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var docx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! docx */ "./node_modules/docx/build/index.js");
/* harmony import */ var docx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(docx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_conceptPaperDOCXGenerator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/conceptPaperDOCXGenerator_service */ "./resources/js/services/conceptPaperDOCXGenerator_service.js");
/* harmony import */ var _services_conceptPaperDOCXGeneratorWithWatermark_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/conceptPaperDOCXGeneratorWithWatermark_service */ "./resources/js/services/conceptPaperDOCXGeneratorWithWatermark_service.js");
/* harmony import */ var _services_conceptPaperPDFGenerator_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/conceptPaperPDFGenerator_service */ "./resources/js/services/conceptPaperPDFGenerator_service.js");
/* harmony import */ var _services_conceptPaperPDFGeneratorWithWatermark_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/conceptPaperPDFGeneratorWithWatermark_service */ "./resources/js/services/conceptPaperPDFGeneratorWithWatermark_service.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var _components_modals_InviteYourTeam_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/modals/InviteYourTeam.vue */ "./resources/js/components/modals/InviteYourTeam.vue");
/* harmony import */ var _components_modals_CreateAccountModal_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/modals/CreateAccountModal.vue */ "./resources/js/components/modals/CreateAccountModal.vue");
/* harmony import */ var _components_modals_PdfWatermark_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/modals/PdfWatermark.vue */ "./resources/js/components/modals/PdfWatermark.vue");
/* harmony import */ var _components_modals_DocxWatermark_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/modals/DocxWatermark.vue */ "./resources/js/components/modals/DocxWatermark.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      errors: {},
      showModal: false,
      showWatermark: false,
      showDocxWatermark: false,
      isLoggedIn: null,
      fields: ["name", "course", "currentSemester", "idea", "basics", "niceToHave", "technologies", "team"],
      cachedFormData: null,
      conceptPaperName: ''
    };
  },
  components: {
    PageLoader: _components_PageLoader_PageLoader_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    InviteTeam: _components_modals_InviteYourTeam_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    CreateAccountModal: _components_modals_CreateAccountModal_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
    PDFWatermark: _components_modals_PdfWatermark_vue__WEBPACK_IMPORTED_MODULE_16__["default"],
    DOCXWatermark: _components_modals_DocxWatermark_vue__WEBPACK_IMPORTED_MODULE_17__["default"]
  },
  created: function created() {
    // Create a cache when component/app is created
    document.addEventListener("beforeunload", this.handlerClose);
  },
  computed: {
    // Compares cached user data to live data
    hasChanged: function hasChanged() {
      return this.cachedFormData !== this.formDataForComparison();
    }
  },
  mounted: function mounted() {
    this.loadConceptPaper();
    this.isLoggedIn = localStorage.getItem("jwt");
  },
  methods: {
    // Callback handler
    handlerClose: function handlerClose() {
      if (this.hasChanged) {// Logic when change is detected
        // e.g. you can show a confirm() dialog to ask if user wants to proceed
      } else {// Logic when no change is detected
        }
    },
    // Helper method that generates JSON for string comparison
    formDataForComparison: function formDataForComparison() {
      return JSON.stringify({
        name: this.conceptPaper.name,
        course: this.conceptPaper.course,
        idea: this.conceptPaper.idea,
        basics: this.conceptPaper.basics,
        niceToHave: this.conceptPaper.niceToHave,
        technologies: this.conceptPaper.technologies,
        team: this.conceptPaper.team
      });
    },
    loadConceptPaper: function loadConceptPaper() {
      var _this = this;

      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("conceptPaper/lobby/".concat(this.joinCode)).then(function (response) {
        _this.conceptPaperName = response.data.name;
        _this.conceptPaper.name = response.data.name;
        _this.conceptPaper.course = response.data.course;
        _this.conceptPaper.currentSemester = response.data.currentSemester;
        _this.conceptPaper.image = response.data.image;
        _this.conceptPaper.idea = response.data.idea;
        _this.conceptPaper.basics = response.data.basics;
        _this.conceptPaper.niceToHave = response.data.niceToHave;
        _this.conceptPaper.technologies = response.data.technologies;
        _this.conceptPaper.team = response.data.team;
        _this.conceptPaper.joinCodeDB = response.data.join_code;
        _this.conceptPaper.userID = response.data.user_id;
        _this.conceptPapers = response.data;
        _this.editConceptPaperData = _objectSpread({}, response.data);
        console.log(_this.editConceptPaperData);
        setTimeout(function () {
          _this.isLoading = false;
        }, 500);
        _this.cachedFormData = _this.formDataForComparison();
      })["catch"](function (error) {
        if (error.response.status === 404) {
          _router__WEBPACK_IMPORTED_MODULE_2__["default"].push("/notFound");
        }
      });
    },
    loadEditConceptPaperData: function loadEditConceptPaperData() {
      this.editConceptPaperData.name = this.conceptPaper.name;
      this.editConceptPaperData.course = this.conceptPaper.course;
      this.editConceptPaperData.idea = this.conceptPaper.idea;
      this.editConceptPaperData.basics = this.conceptPaper.basics;
      this.editConceptPaperData.niceToHave = this.conceptPaper.niceToHave;
      this.editConceptPaperData.technologies = this.conceptPaper.technologies;
      this.editConceptPaperData.team = this.conceptPaper.team;
      this.updateConceptPaper();
    },
    updateConceptPaper: function () {
      var _updateConceptPaper = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
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
                formData.append("_method", "put");
                _context.next = 16;
                return _services_conceptPaper_service__WEBPACK_IMPORTED_MODULE_4__["updateConceptPaper"](this.editConceptPaperData.id, formData);

              case 16:
                response = _context.sent;

                /**
                this.conceptPapers.map((conceptPaper) => {
                  if (conceptPaper.id == response.data.id) {
                    for (let key in response.data) {
                      conceptPaper[key] = response.data[key];
                    }
                  }
                }); */
                this.flashMessage.success({
                  message: "Konzeptpapier wurde erfolgreich geupdated!",
                  time: 5000
                });
                _context.next = 23;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](0);

                switch (_context.t0.response.status) {
                  case 401:
                    this.showModal = true;

                  case 422:
                    this.errors = _context.t0.response.data.errors;

                  default:
                    this.flashMessage.error({
                      message: _context.t0.response.data.message,
                      time: 5000
                    });
                }

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 20]]);
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
    exportAsDOCX: function () {
      var _exportAsDOCX = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this2 = this;

        var img, calculateAspectRatioFit, _calculateAspectRatio, widthImg, heightImg, hskl_branding, calculateAspectRatioFitHSKLBranding, _calculateAspectRatio2, widthHSKL, heightHSKL, imageToUint8Array, _imageToUint8Array, logo, hskl_branding_logo, documentCreator, _this$editConceptPape, name, course, currentSemester, idea, basics, niceToHave, technologies, team, doc;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _imageToUint8Array = function _imageToUint8Array3() {
                  _imageToUint8Array = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(image, width, height) {
                    var canvas, context;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            canvas = document.createElement("canvas");
                            context = canvas.getContext("2d");
                            return _context2.abrupt("return", new Promise(function (resolve, reject) {
                              canvas.width = width;
                              canvas.height = height;
                              context.width = width;
                              context.height = height;
                              context.drawImage(image, 0, 0, width, height);
                              context.canvas.toBlob(function (blob) {
                                return blob.arrayBuffer().then(function (buffer) {
                                  return resolve(new Uint8Array(buffer));
                                })["catch"](reject);
                              });
                            }));

                          case 3:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));
                  return _imageToUint8Array.apply(this, arguments);
                };

                imageToUint8Array = function _imageToUint8Array2(_x, _x2, _x3) {
                  return _imageToUint8Array.apply(this, arguments);
                };

                calculateAspectRatioFitHSKLBranding = function _calculateAspectRatio4(srcWidth, srcHeight, maxWidth, maxHeight) {
                  var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
                  return {
                    widthHSKL: srcWidth * ratio,
                    heightHSKL: srcHeight * ratio
                  };
                };

                calculateAspectRatioFit = function _calculateAspectRatio3(srcWidth, srcHeight, maxWidth, maxHeight) {
                  var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
                  return {
                    widthImg: srcWidth * ratio,
                    heightImg: srcHeight * ratio
                  };
                };

                img = document.getElementById("logo_image");
                _calculateAspectRatio = calculateAspectRatioFit(img.naturalWidth || img.width, img.naturalHeight || img.height, 540, 120), widthImg = _calculateAspectRatio.widthImg, heightImg = _calculateAspectRatio.heightImg;
                hskl_branding = document.getElementById("hskl_branding");
                console.log(widthImg, heightImg, img.naturalWidth, img.naturalHeight);
                _calculateAspectRatio2 = calculateAspectRatioFitHSKLBranding(hskl_branding.naturalWidth || hskl_branding.width, hskl_branding.naturalHeight || hskl_branding.height, 540, 100), widthHSKL = _calculateAspectRatio2.widthHSKL, heightHSKL = _calculateAspectRatio2.heightHSKL;
                _context3.next = 11;
                return imageToUint8Array(img, widthImg, heightImg);

              case 11:
                logo = _context3.sent;
                _context3.next = 14;
                return imageToUint8Array(hskl_branding, widthHSKL, heightHSKL);

              case 14:
                hskl_branding_logo = _context3.sent;
                documentCreator = new _services_conceptPaperDOCXGenerator_service__WEBPACK_IMPORTED_MODULE_9__["DocumentCreatorDOCX"]();
                _this$editConceptPape = this.editConceptPaperData, name = _this$editConceptPape.name, course = _this$editConceptPape.course, currentSemester = _this$editConceptPape.currentSemester, idea = _this$editConceptPape.idea, basics = _this$editConceptPape.basics, niceToHave = _this$editConceptPape.niceToHave, technologies = _this$editConceptPape.technologies, team = _this$editConceptPape.team;
                doc = documentCreator.create([name, course, currentSemester, logo, widthImg, heightImg, idea, basics, niceToHave, technologies, team, hskl_branding_logo, widthHSKL, heightHSKL]);
                docx__WEBPACK_IMPORTED_MODULE_8__["Packer"].toBlob(doc).then(function (blob) {
                  console.log(blob);
                  Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(blob, "Konzeptpapier_" + _this2.editConceptPaperData.name + ".docx");

                  _this2.flashMessage.success({
                    message: "DOCX Document created successfully",
                    time: 5000
                  });
                });

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function exportAsDOCX() {
        return _exportAsDOCX.apply(this, arguments);
      }

      return exportAsDOCX;
    }(),
    exportAsPDF: function exportAsPDF() {
      var logo = document.getElementById("logo_image");
      var hskl_branding = document.getElementById("hskl_branding");
      var documentCreatorPDF = new _services_conceptPaperPDFGenerator_service__WEBPACK_IMPORTED_MODULE_11__["DocumentCreatorPDF"]();
      var _this$editConceptPape2 = this.editConceptPaperData,
          name = _this$editConceptPape2.name,
          course = _this$editConceptPape2.course,
          currentSemester = _this$editConceptPape2.currentSemester,
          image = _this$editConceptPape2.image,
          idea = _this$editConceptPape2.idea,
          basics = _this$editConceptPape2.basics,
          niceToHave = _this$editConceptPape2.niceToHave,
          technologies = _this$editConceptPape2.technologies,
          team = _this$editConceptPape2.team;
      var doc = documentCreatorPDF.create([name, course, currentSemester, logo, idea, basics, niceToHave, technologies, team, hskl_branding]);
      doc.save("Konzeptpapier_" + name + ".pdf");
      this.flashMessage.success({
        message: "PDF Document created successfully",
        time: 5000
      });
    },
    exportAsPDFWithWatermark: function exportAsPDFWithWatermark() {
      var logo = document.getElementById("logo_image");
      var hskl_branding = document.getElementById("hskl_branding");
      var watermark = document.getElementById("watermark");
      var documentCreatorPDF = new _services_conceptPaperPDFGeneratorWithWatermark_service__WEBPACK_IMPORTED_MODULE_12__["DocumentCreatorPDFWithWatermark"]();
      var _this$editConceptPape3 = this.editConceptPaperData,
          name = _this$editConceptPape3.name,
          course = _this$editConceptPape3.course,
          currentSemester = _this$editConceptPape3.currentSemester,
          image = _this$editConceptPape3.image,
          idea = _this$editConceptPape3.idea,
          basics = _this$editConceptPape3.basics,
          niceToHave = _this$editConceptPape3.niceToHave,
          technologies = _this$editConceptPape3.technologies,
          team = _this$editConceptPape3.team;
      var doc = documentCreatorPDF.create([name, course, currentSemester, logo, watermark, idea, basics, niceToHave, technologies, team]);
      doc.save("Konzeptpapier_" + name + ".pdf");
      this.flashMessage.success({
        message: "PDF Document created successfully",
        time: 5000
      });
    },
    exportAsDOCXWithWatermark: function () {
      var _exportAsDOCXWithWatermark = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _this3 = this;

        var img, calculateAspectRatioFit, _calculateAspectRatio5, widthImg, heightImg, hskl_branding, calculateAspectRatioFitHSKLBranding, _calculateAspectRatio6, widthHSKL, heightHSKL, wartermark, calculateAspectRatioFitWatermark, _calculateAspectRatio7, widthWatermark, heightWatermark, imageToUint8Array, _imageToUint8Array4, logo, hskl_branding_logo, watermark_logo, documentCreator, _this$editConceptPape4, name, course, currentSemester, idea, basics, niceToHave, technologies, team, doc;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _imageToUint8Array4 = function _imageToUint8Array6() {
                  _imageToUint8Array4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(image, width, height) {
                    var canvas, context;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            canvas = document.createElement("canvas");
                            context = canvas.getContext("2d");
                            return _context4.abrupt("return", new Promise(function (resolve, reject) {
                              canvas.width = width;
                              canvas.height = height;
                              context.width = width;
                              context.height = height;
                              context.drawImage(image, 0, 0, width, height);
                              context.canvas.toBlob(function (blob) {
                                return blob.arrayBuffer().then(function (buffer) {
                                  return resolve(new Uint8Array(buffer));
                                })["catch"](reject);
                              });
                            }));

                          case 3:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));
                  return _imageToUint8Array4.apply(this, arguments);
                };

                imageToUint8Array = function _imageToUint8Array5(_x4, _x5, _x6) {
                  return _imageToUint8Array4.apply(this, arguments);
                };

                calculateAspectRatioFitWatermark = function _calculateAspectRatio10(srcWidth, srcHeight, maxWidth, maxHeight) {
                  var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
                  return {
                    widthWatermark: srcWidth * ratio,
                    heightWatermark: srcHeight * ratio
                  };
                };

                calculateAspectRatioFitHSKLBranding = function _calculateAspectRatio9(srcWidth, srcHeight, maxWidth, maxHeight) {
                  var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
                  return {
                    widthHSKL: srcWidth * ratio,
                    heightHSKL: srcHeight * ratio
                  };
                };

                calculateAspectRatioFit = function _calculateAspectRatio8(srcWidth, srcHeight, maxWidth, maxHeight) {
                  var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
                  return {
                    widthImg: srcWidth * ratio,
                    heightImg: srcHeight * ratio
                  };
                };

                img = document.getElementById("logo_image");
                _calculateAspectRatio5 = calculateAspectRatioFit(img.naturalWidth || img.width, img.naturalHeight || img.height, 540, 120), widthImg = _calculateAspectRatio5.widthImg, heightImg = _calculateAspectRatio5.heightImg;
                hskl_branding = document.getElementById("hskl_branding");
                _calculateAspectRatio6 = calculateAspectRatioFitHSKLBranding(hskl_branding.naturalWidth || hskl_branding.width, hskl_branding.naturalHeight || hskl_branding.height, 540, 100), widthHSKL = _calculateAspectRatio6.widthHSKL, heightHSKL = _calculateAspectRatio6.heightHSKL;
                wartermark = document.getElementById("watermark");
                console.log(widthWatermark, heightWatermark, watermark.naturalWidth, wartermark.naturalHeight);
                _calculateAspectRatio7 = calculateAspectRatioFitWatermark(watermark.naturalWidth || wartermark.width, watermark.naturalHeight || wartermark.height, 400, 400), widthWatermark = _calculateAspectRatio7.widthWatermark, heightWatermark = _calculateAspectRatio7.heightWatermark;
                _context5.next = 14;
                return imageToUint8Array(img, widthImg, heightImg);

              case 14:
                logo = _context5.sent;
                _context5.next = 17;
                return imageToUint8Array(hskl_branding, widthHSKL, heightHSKL);

              case 17:
                hskl_branding_logo = _context5.sent;
                _context5.next = 20;
                return imageToUint8Array(watermark, widthWatermark, heightWatermark);

              case 20:
                watermark_logo = _context5.sent;
                documentCreator = new _services_conceptPaperDOCXGeneratorWithWatermark_service__WEBPACK_IMPORTED_MODULE_10__["DocumentCreatorDOCXWithWatermark"]();
                _this$editConceptPape4 = this.editConceptPaperData, name = _this$editConceptPape4.name, course = _this$editConceptPape4.course, currentSemester = _this$editConceptPape4.currentSemester, idea = _this$editConceptPape4.idea, basics = _this$editConceptPape4.basics, niceToHave = _this$editConceptPape4.niceToHave, technologies = _this$editConceptPape4.technologies, team = _this$editConceptPape4.team;
                doc = documentCreator.create([name, course, currentSemester, logo, widthImg, heightImg, idea, basics, niceToHave, technologies, team, hskl_branding_logo, widthHSKL, heightHSKL, watermark_logo, widthWatermark, heightWatermark]);
                docx__WEBPACK_IMPORTED_MODULE_8__["Packer"].toBlob(doc).then(function (blob) {
                  console.log(blob);
                  Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(blob, "Konzeptpapier_" + _this3.editConceptPaperData.name + ".docx");

                  _this3.flashMessage.success({
                    message: "DOCX Document created successfully",
                    time: 5000
                  });
                });

              case 25:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function exportAsDOCXWithWatermark() {
        return _exportAsDOCXWithWatermark.apply(this, arguments);
      }

      return exportAsDOCXWithWatermark;
    }(),
    exportAsJSON: function exportAsJSON() {
      console.log("json");
    },
    undoChanges: function undoChanges() {
      window.location.reload();
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (this.hasChanged) {
      var answer = window.confirm(this.$t('conceptPaper.leave'));

      if (answer) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/CreateAccountModal.vue?vue&type=style&index=0&id=5df182ca&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/CreateAccountModal.vue?vue&type=style&index=0&id=5df182ca&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal .modal-dialog[data-v-5df182ca] {\n  max-width: 600px;\n}\n.modal .modal-dialog .modal-content[data-v-5df182ca] {\n  border-radius: 24px;\n}\n.modal .modal-dialog .modal-content .modal-header[data-v-5df182ca] {\n  flex-flow: column;\n  border: none;\n}\n.modal .modal-dialog .modal-content .modal-header img[data-v-5df182ca] {\n  width: 150px;\n}\n.modal .modal-dialog .modal-content .modal-header .text-muted[data-v-5df182ca] {\n  margin: 0;\n  font-weight: 700;\n  color: #b3b3b3;\n}\n.modal .modal-dialog .modal-content .modal-header .button-close[data-v-5df182ca] {\n  position: absolute;\n  right: 42px;\n  top: 10px;\n  color: #333;\n  background-color: #ededed;\n  width: 44px;\n  height: 44px;\n  padding: 0;\n  border-radius: 24px;\n}\n.modal .modal-dialog .modal-content .modal-header .button-close.r-10[data-v-5df182ca] {\n  right: 10px;\n}\n.modal .modal-dialog .modal-content .modal-body[data-v-5df182ca] {\n  margin-top: -40px;\n}\n.modal .modal-dialog .modal-content .modal-footer .btn-primary[data-v-5df182ca] {\n  background-color: #6c72ae;\n  border-color: #6c72ae;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/DocxWatermark.vue?vue&type=style&index=0&id=90c62b74&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/DocxWatermark.vue?vue&type=style&index=0&id=90c62b74&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal .modal-dialog[data-v-90c62b74] {\n  max-width: 600px;\n}\n.modal .modal-dialog .modal-content[data-v-90c62b74] {\n  border-radius: 24px;\n}\n.modal .modal-dialog .modal-content .modal-header[data-v-90c62b74] {\n  font-size: 32px;\n  flex-flow: column;\n  border: none;\n}\n.modal .modal-dialog .modal-content .modal-header .text-muted[data-v-90c62b74] {\n  margin: 0;\n  font-weight: 700;\n  color: #b3b3b3;\n}\n.modal .modal-dialog .modal-content .modal-header .button-close[data-v-90c62b74] {\n  position: absolute;\n  right: 42px;\n  top: 10px;\n  color: #333;\n  background-color: #ededed;\n  width: 44px;\n  height: 44px;\n  padding: 0;\n  border-radius: 24px;\n}\n.modal .modal-dialog .modal-content .modal-header .button-close.r-10[data-v-90c62b74] {\n  right: 10px;\n}\n.modal .modal-dialog .modal-content .modal-footer .btn-primary[data-v-90c62b74] {\n  background-color: #6c72ae;\n  border-color: #6c72ae;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/PdfWatermark.vue?vue&type=style&index=0&id=d6b34f80&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/PdfWatermark.vue?vue&type=style&index=0&id=d6b34f80&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal .modal-dialog[data-v-d6b34f80] {\n  max-width: 600px;\n}\n.modal .modal-dialog .modal-content[data-v-d6b34f80] {\n  border-radius: 24px;\n}\n.modal .modal-dialog .modal-content .modal-header[data-v-d6b34f80] {\n  font-size: 32px;\n  flex-flow: column;\n  border: none;\n}\n.modal .modal-dialog .modal-content .modal-header .text-muted[data-v-d6b34f80] {\n  margin: 0;\n  font-weight: 700;\n  color: #b3b3b3;\n}\n.modal .modal-dialog .modal-content .modal-header .button-close[data-v-d6b34f80] {\n  position: absolute;\n  right: 42px;\n  top: 10px;\n  color: #333;\n  background-color: #ededed;\n  width: 44px;\n  height: 44px;\n  padding: 0;\n  border-radius: 24px;\n}\n.modal .modal-dialog .modal-content .modal-header .button-close.r-10[data-v-d6b34f80] {\n  right: 10px;\n}\n.modal .modal-dialog .modal-content .modal-footer .btn-primary[data-v-d6b34f80] {\n  background-color: #6c72ae;\n  border-color: #6c72ae;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-invite[data-v-22c7a2ba],\n.btn-pdf[data-v-22c7a2ba],\n.btn-docx[data-v-22c7a2ba] {\n  color: #fff;\n}\n.btn-invite[data-v-22c7a2ba] {\n  background-color: #5c55ba;\n}\n.btn-json[data-v-22c7a2ba] {\n  border: 0.5px solid rgba(0, 0, 0, 0.5);\n}\n.btn-pdf[data-v-22c7a2ba],\n.btn-docx[data-v-22c7a2ba] {\n  background-color: #ff7e85;\n}\n.container[data-v-22c7a2ba] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-flow: column;\n}\n.dark .breadcrumb[data-v-22c7a2ba] {\n  background-color: #20232a;\n}\n.dark .breadcrumb a[data-v-22c7a2ba] {\n  color: #fff;\n}\n.dark .bg-main[data-v-22c7a2ba] {\n  background-color: #121212 !important;\n}\n.dark .card[data-v-22c7a2ba] {\n  background: #20232a !important;\n}\n.dark table td label[data-v-22c7a2ba] {\n  color: #fff;\n}\n.dark .btn-json[data-v-22c7a2ba] {\n  color: #fff;\n  border: 0.5px solid rgba(255, 255, 255, 0.5);\n}\n.dark .content[data-v-22c7a2ba] {\n  background-color: #20232a;\n}\n.dark .form-group label[data-v-22c7a2ba] {\n  color: #fff;\n}\n.dark .form-group input[data-v-22c7a2ba] {\n  background-color: #20232a !important;\n  color: #f3f3f3 !important;\n}\n.dark .form-group textarea[data-v-22c7a2ba] {\n  background-color: #20232a !important;\n  color: #f3f3f3 !important;\n}\n.breadcrumb a[data-v-22c7a2ba] {\n  color: #212529;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/InviteYourTeam.vue?vue&type=style&index=0&id=4bdf7707&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/InviteYourTeam.vue?vue&type=style&index=0&id=4bdf7707&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-primary[data-v-4bdf7707] {\r\n    background-color: #6c72ae;\r\n    border-color: #6c72ae;\n}\n.button-close[data-v-4bdf7707] {\r\n    position: absolute;\r\n    right: 42px;\r\n    top: 10px;\r\n    color: #333;\r\n    background-color: #EDEDED;\r\n    width: 44px;\r\n    height: 44px;\r\n    padding: 0;\r\n    border-radius: 24px;\n}\n.button-close.r-10[data-v-4bdf7707] {\r\n    right: 10px;\n}\n.modal-popup .modal-content-qr[data-v-4bdf7707] {\r\n    max-width: 320px;\r\n    max-height: 320px;\r\n    width: 100%;\r\n    display: block;\n}\n.modal-body[data-v-4bdf7707] {\r\n    display: block;\r\n    flex: 1 1 auto;\r\n    padding: 1rem;\r\n    position: unset;\n}\n.modal-popup.isvisible[data-v-4bdf7707] {\r\n    display: flex;\n}\n.modal-popup[data-v-4bdf7707] {\r\n    display: none;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background: rgba(255,255,255,.95);\r\n    border-radius: 24px;\r\n    z-index: 300;\r\n    justify-content: center;\r\n    align-items: center;\n}\n.input-readonly[data-v-4bdf7707] {\r\n    color: #000;\r\n    background-color: #f8f8f8;\n}\n.input[data-v-4bdf7707] {\r\n    width: 90%;\r\n    padding: 0 16px;\r\n    font-size: 15px;\r\n    height: 40px;\r\n    color: #b3b3b3;\r\n    background-color: #fff;\r\n    font-family: inherit;\r\n    border-color: #ddd;\r\n    border-radius: 8px;\r\n    line-height: 1;\r\n    width: 100%;\n}\n.btn-copy[data-v-4bdf7707] {\r\n    color: #fff;\r\n    background-color: #6c72ae ;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    text-decoration: none;\r\n    outline: 0;\r\n    overflow: hidden;\r\n    min-width: 90px;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    border-radius: 24px;\r\n    transition: .6s cubic-bezier(.165,.84,.44,1);\n}\n.text-muted[data-v-4bdf7707] {\r\n    margin: 0;\r\n    font-weight: 700;\r\n    color: #b3b3b3;\n}\n.grid-column-2[data-v-4bdf7707] {\r\n    flex-basis: 16.66667%;\r\n    max-width: 16.66667%;\r\n    justify-content: flex-end;\n}\n.grid-column-7[data-v-4bdf7707] {\r\n    flex-basis: 58.33333%;\r\n    max-width: 58.33333%;\n}\n.grid-column-3[data-v-4bdf7707] {\r\n    flex-basis: 25%;\r\n    max-width: 25%;\r\n    justify-content: flex-start;\n}\n.grid-column-35[data-v-4bdf7707] {\r\n    flex-basis: 35%;\r\n    max-width: 35%;\n}\n.modal[data-v-4bdf7707] {\r\n    border-radius: 24px;\n}\n.modal-dialog[data-v-4bdf7707] {\r\n    max-width: 800px;\n}\n.modal-content[data-v-4bdf7707] {\r\n    border-radius: 24px;\r\n    height: 450px;\n}\n.modal-header[data-v-4bdf7707] {\r\n    display: flex;\r\n    flex-flow: column;\n}\n.modal-body[data-v-4bdf7707] {\r\n    display: flex;\n}\n.modal-body .grid[data-v-4bdf7707]  {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin: 0 -4px;\r\n    width: 100%;\n}\n.modal-title[data-v-4bdf7707] {\r\n    font-size: 32px;\r\n    font-weight: 400;\r\n    color: #191919;\r\n    margin-right: 20px;\n}\n.grid .flex-middle[data-v-4bdf7707] {\r\n    display: flex!important;\r\n    justify-content: center;\r\n    align-items: center;\n}\n.wh-100[data-v-4bdf7707] {\r\n    width: 100%;\n}\r\n\r\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/CreateAccountModal.vue?vue&type=style&index=0&id=5df182ca&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/CreateAccountModal.vue?vue&type=style&index=0&id=5df182ca&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateAccountModal.vue?vue&type=style&index=0&id=5df182ca&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/CreateAccountModal.vue?vue&type=style&index=0&id=5df182ca&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/DocxWatermark.vue?vue&type=style&index=0&id=90c62b74&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/DocxWatermark.vue?vue&type=style&index=0&id=90c62b74&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DocxWatermark.vue?vue&type=style&index=0&id=90c62b74&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/DocxWatermark.vue?vue&type=style&index=0&id=90c62b74&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/PdfWatermark.vue?vue&type=style&index=0&id=d6b34f80&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/PdfWatermark.vue?vue&type=style&index=0&id=d6b34f80&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PdfWatermark.vue?vue&type=style&index=0&id=d6b34f80&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/PdfWatermark.vue?vue&type=style&index=0&id=d6b34f80&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/InviteYourTeam.vue?vue&type=style&index=0&id=4bdf7707&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/InviteYourTeam.vue?vue&type=style&index=0&id=4bdf7707&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./InviteYourTeam.vue?vue&type=style&index=0&id=4bdf7707&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/InviteYourTeam.vue?vue&type=style&index=0&id=4bdf7707&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/CreateAccountModal.vue?vue&type=template&id=5df182ca&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/CreateAccountModal.vue?vue&type=template&id=5df182ca&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      staticClass: "modal",
      staticStyle: { display: "block" },
      attrs: {
        id: "createAccountModal",
        tabindex: "-1",
        "aria-labelledby": "createAccountModalLabel",
        "aria-hidden": "true"
      }
    },
    [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content" }, [
          _c("div", { staticClass: "modal-header" }, [
            _c("img", {
              attrs: { src: __webpack_require__(/*! ../../../assets/conForm_logo.png */ "./resources/assets/conForm_logo.png") }
            }),
            _vm._v(" "),
            _c("p", { staticClass: "text-muted" }, [
              _vm._v(_vm._s(_vm.$t("conceptPaper.notloggedin")) + ".")
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "button-close r-10",
                attrs: {
                  type: "button",
                  "data-dismiss": "modal",
                  "aria-label": "Close"
                },
                on: {
                  click: function($event) {
                    return _vm.$emit("close")
                  }
                }
              },
              [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "modal-footer" },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button", "data-dismiss": "modal" },
                  on: {
                    click: function($event) {
                      return _vm.$emit("close")
                    }
                  }
                },
                [_vm._v("\n          Cancel\n        ")]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary",
                  attrs: { to: { name: "register" } }
                },
                [_vm._v(_vm._s(_vm.$t("conceptPaper.signup")) + "\n        ")]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary",
                  attrs: { to: { name: "login" } }
                },
                [_vm._v(_vm._s(_vm.$t("conceptPaper.signin")) + "\n        ")]
              )
            ],
            1
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/DocxWatermark.vue?vue&type=template&id=90c62b74&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/DocxWatermark.vue?vue&type=template&id=90c62b74&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      staticClass: "modal",
      staticStyle: { display: "block" },
      attrs: {
        id: "watermarkDocx",
        tabindex: "-1",
        "aria-labelledby": "watermarkDocxLabel",
        "aria-hidden": "true"
      }
    },
    [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content" }, [
          _c("div", { staticClass: "modal-header" }, [
            _c("p", { staticClass: "text-muted" }, [
              _vm._v(_vm._s(_vm.$t("conceptPaper.docxwatermark")) + ".")
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "button-close r-10",
                attrs: {
                  type: "button",
                  "data-dismiss": "modal",
                  "aria-label": "Close"
                },
                on: {
                  click: function($event) {
                    return _vm.$emit("close")
                  }
                }
              },
              [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c("p", { staticClass: "text-muted" }, [
              _vm._v(_vm._s(_vm.$t("conceptPaper.docxdefault")) + ".")
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "modal-footer" },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button", "data-dismiss": "modal" },
                  on: {
                    click: function($event) {
                      return _vm.$emit("close")
                    }
                  }
                },
                [_vm._v("\n          Cancel\n        ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  on: { click: _vm.downloadDOCX }
                },
                [
                  _vm._v(
                    _vm._s(_vm.$t("conceptPaper.downloadDocx")) + "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary",
                  attrs: { to: { name: "register" } }
                },
                [_vm._v(_vm._s(_vm.$t("conceptPaper.signup")) + "\n        ")]
              )
            ],
            1
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/InviteYourTeam.vue?vue&type=template&id=4bdf7707&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/InviteYourTeam.vue?vue&type=template&id=4bdf7707&scoped=true& ***!
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
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        id: "inviteModal",
        tabindex: "-1",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true"
      }
    },
    [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content" }, [
          _c("div", { staticClass: "modal-header" }, [
            _c(
              "h5",
              {
                staticClass: "modal-title",
                attrs: { id: "exampleModalLabel" }
              },
              [_vm._v(_vm._s(_vm.$t("inviteTeam.share")))]
            ),
            _vm._v(" "),
            _c("p", { staticClass: "text-muted" }, [
              _vm._v(_vm._s(_vm.$t("inviteTeam.shareText")))
            ]),
            _vm._v(" "),
            _vm._m(0)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c("div", { staticClass: "grid" }, [
              _c("div", { staticClass: "flex-middle wh-100 mb-2" }, [
                _c("div", { staticClass: "grid grid-column-3" }, [
                  _c("p", { staticClass: "text-muted" }, [
                    _vm._v(" " + _vm._s(_vm.$t("inviteTeam.shareLink")) + ":")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "grid grid-column-7" }, [
                  _c("input", {
                    staticClass: "input js-board-link input-readonly",
                    attrs: { id: "join-code", type: "text", readonly: "" },
                    domProps: {
                      value:
                        _vm.$store.state.serverPath +
                        "/#/conceptPaper/lobby/" +
                        _vm.joinCode
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "grid grid-column-2" }, [
                  _c(
                    "button",
                    {
                      ref: "btnCopy",
                      staticClass: "btn btn-sm btn-copy",
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          $event.preventDefault()
                          return _vm.copyLink($event)
                        }
                      }
                    },
                    [
                      !_vm.isToggled
                        ? _c("span", [
                            _vm._v(_vm._s(_vm.$t("inviteTeam.copyLink")))
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isToggled
                        ? _c("span", [
                            _vm._v(_vm._s(_vm.$t("inviteTeam.copied")))
                          ])
                        : _vm._e()
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex-middle wh-100 mb-2" }, [
                _c("div", { staticClass: "grid grid-column-35" }, [
                  _c("p", { staticClass: "text-muted" }, [
                    _vm._v(" " + _vm._s(_vm.$t("inviteTeam.shareQr")) + ":")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "grid grid-column-7" }),
                _vm._v(" "),
                _c("div", { staticClass: "grid grid-column-2" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-copy",
                      on: { click: _vm.generateQRCode }
                    },
                    [_vm._v(_vm._s(_vm.$t("inviteTeam.generateQr")))]
                  )
                ]),
                _vm._v(" "),
                _vm.generated
                  ? _c(
                      "div",
                      {
                        staticClass: "modal-popup js-qr-popup",
                        class: { isvisible: _vm.generated }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "modal-content-qr" },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "button-close",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    _vm.generated = false
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-times" })]
                            ),
                            _vm._v(" "),
                            _c("qrcode-vue", {
                              attrs: {
                                value:
                                  _vm.$store.state.serverPath +
                                  "/#/conceptPaper/lobby/" +
                                  _vm.joinCode,
                                size: 320,
                                level: "H",
                                foreground: "#6c72ae",
                                renderAs: "svg"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    )
                  : _vm._e()
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-secondary",
                attrs: { type: "button", "data-dismiss": "modal" }
              },
              [_vm._v(_vm._s(_vm.$t("inviteTeam.close")))]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: { type: "button", "data-dismiss": "modal" }
              },
              [_vm._v(_vm._s(_vm.$t("inviteTeam.save")))]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "button-close r-10",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("i", { staticClass: "fas fa-times" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/PdfWatermark.vue?vue&type=template&id=d6b34f80&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/PdfWatermark.vue?vue&type=template&id=d6b34f80&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      staticClass: "modal",
      staticStyle: { display: "block" },
      attrs: {
        id: "watermarkPDF",
        tabindex: "-1",
        "aria-labelledby": "watermarkPDFLabel",
        "aria-hidden": "true"
      }
    },
    [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content" }, [
          _c("div", { staticClass: "modal-header" }, [
            _c("p", { staticClass: "text-muted" }, [
              _vm._v(_vm._s(_vm.$t("conceptPaper.pdfwatermark")) + ".")
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "button-close r-10",
                attrs: {
                  type: "button",
                  "data-dismiss": "modal",
                  "aria-label": "Close"
                },
                on: {
                  click: function($event) {
                    return _vm.$emit("close")
                  }
                }
              },
              [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c("p", { staticClass: "text-muted" }, [
              _vm._v(_vm._s(_vm.$t("conceptPaper.pdfdefault")) + ".")
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "modal-footer" },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button", "data-dismiss": "modal" },
                  on: {
                    click: function($event) {
                      return _vm.$emit("close")
                    }
                  }
                },
                [_vm._v("\n          Cancel\n        ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  on: { click: _vm.downloadPDF }
                },
                [
                  _vm._v(
                    _vm._s(_vm.$t("conceptPaper.downloadPdf")) + "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary",
                  attrs: { to: { name: "register" } }
                },
                [_vm._v(_vm._s(_vm.$t("conceptPaper.signup")) + "\n        ")]
              )
            ],
            1
          )
        ])
      ])
    ]
  )
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
      staticClass: "container-fluid bg-main",
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
      _c("div", { staticClass: "container" }, [
        _c("h1", { staticClass: "mt-4" }, [
          _vm._v(
            "\n      " +
              _vm._s(_vm.$t("conceptPaper.conceptPaper")) +
              ": " +
              _vm._s(_vm.conceptPaperName) +
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
                  "download-csv",
                  {
                    staticClass: "btn btn-json",
                    attrs: {
                      data: [_vm.editConceptPaperData],
                      fields: _vm.fields,
                      "separator-excel": true,
                      name: _vm.conceptPaper.name + ".csv"
                    }
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
                          value: _vm.conceptPaper.name,
                          expression: "conceptPaper.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "name",
                        placeholder: _vm.$t("conceptPaper.placeholders.name")
                      },
                      domProps: { value: _vm.conceptPaper.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.conceptPaper,
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
                          value: _vm.conceptPaper.course,
                          expression: "conceptPaper.course"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "course",
                        placeholder: _vm.$t("conceptPaper.placeholders.course")
                      },
                      domProps: { value: _vm.conceptPaper.course },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.conceptPaper,
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
                          value: _vm.conceptPaper.currentSemester,
                          expression: "conceptPaper.currentSemester"
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
                      domProps: { value: _vm.conceptPaper.currentSemester },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.conceptPaper,
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
                  _vm.editConceptPaperData.image
                    ? _c("img", {
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
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.editConceptPaperData.image
                    ? _c("img", {
                        staticClass: "image-wd img-h",
                        attrs: {
                          id: "logo_image",
                          src: __webpack_require__(/*! ../../assets/conForm_logo.png */ "./resources/assets/conForm_logo.png")
                        }
                      })
                    : _vm._e()
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
                          _vm._s(_vm.errors.image[1]) +
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
                      value: _vm.conceptPaper.idea,
                      expression: "conceptPaper.idea"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "idea",
                    placeholder: _vm.$t("conceptPaper.placeholders.idea"),
                    rows: "6"
                  },
                  domProps: { value: _vm.conceptPaper.idea },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.conceptPaper, "idea", $event.target.value)
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
                      value: _vm.conceptPaper.basics,
                      expression: "conceptPaper.basics"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "basics",
                    placeholder: _vm.$t("conceptPaper.placeholders.basics"),
                    rows: "8"
                  },
                  domProps: { value: _vm.conceptPaper.basics },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.conceptPaper, "basics", $event.target.value)
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
                      value: _vm.conceptPaper.niceToHave,
                      expression: "conceptPaper.niceToHave"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "niceToHave",
                    placeholder: _vm.$t("conceptPaper.placeholders.niceToHave"),
                    rows: "8"
                  },
                  domProps: { value: _vm.conceptPaper.niceToHave },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.conceptPaper,
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
                      value: _vm.conceptPaper.technologies,
                      expression: "conceptPaper.technologies"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "technologies",
                    placeholder: _vm.$t("conceptPaper.placeholders.tech"),
                    rows: "5"
                  },
                  domProps: { value: _vm.conceptPaper.technologies },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.conceptPaper,
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
                      value: _vm.conceptPaper.team,
                      expression: "conceptPaper.team"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "team",
                    placeholder: _vm.$t("conceptPaper.placeholders.team"),
                    rows: "5"
                  },
                  domProps: { value: _vm.conceptPaper.team },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.conceptPaper, "team", $event.target.value)
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
                  {
                    staticClass: "btn btn-default",
                    attrs: { type: "button" },
                    on: { click: _vm.undoChanges }
                  },
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
                    on: { click: _vm.loadEditConceptPaperData }
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
          id: "watermark"
        }
      }),
      _vm._v(" "),
      _c("img", {
        staticClass: "image-wd",
        staticStyle: { display: "none" },
        attrs: {
          src: __webpack_require__(/*! ../../assets/Logo_of_Hochschule_Kaiserslautern.png */ "./resources/assets/Logo_of_Hochschule_Kaiserslautern.png"),
          id: "hskl_branding"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/Logo_of_Hochschule_Kaiserslautern.png":
/*!****************************************************************!*\
  !*** ./resources/assets/Logo_of_Hochschule_Kaiserslautern.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Logo_of_Hochschule_Kaiserslautern.png?aced7e1e0d4300f1512cfd6eac577932";

/***/ }),

/***/ "./resources/assets/conForm_logo.png":
/*!*******************************************!*\
  !*** ./resources/assets/conForm_logo.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/conForm_logo.png?32c3ac79cc655cf0574e7496e3fbb122";

/***/ }),

/***/ "./resources/assets/conForm_watermark.png":
/*!************************************************!*\
  !*** ./resources/assets/conForm_watermark.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/conForm_watermark.png?da852b39f7b72e6e53ac4b2b70621355";

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

/***/ "./resources/js/components/modals/CreateAccountModal.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/modals/CreateAccountModal.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateAccountModal_vue_vue_type_template_id_5df182ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateAccountModal.vue?vue&type=template&id=5df182ca&scoped=true& */ "./resources/js/components/modals/CreateAccountModal.vue?vue&type=template&id=5df182ca&scoped=true&");
/* harmony import */ var _CreateAccountModal_vue_vue_type_style_index_0_id_5df182ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateAccountModal.vue?vue&type=style&index=0&id=5df182ca&lang=scss&scoped=true& */ "./resources/js/components/modals/CreateAccountModal.vue?vue&type=style&index=0&id=5df182ca&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _CreateAccountModal_vue_vue_type_template_id_5df182ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateAccountModal_vue_vue_type_template_id_5df182ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5df182ca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modals/CreateAccountModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/CreateAccountModal.vue?vue&type=style&index=0&id=5df182ca&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/modals/CreateAccountModal.vue?vue&type=style&index=0&id=5df182ca&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAccountModal_vue_vue_type_style_index_0_id_5df182ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateAccountModal.vue?vue&type=style&index=0&id=5df182ca&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/CreateAccountModal.vue?vue&type=style&index=0&id=5df182ca&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAccountModal_vue_vue_type_style_index_0_id_5df182ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAccountModal_vue_vue_type_style_index_0_id_5df182ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAccountModal_vue_vue_type_style_index_0_id_5df182ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAccountModal_vue_vue_type_style_index_0_id_5df182ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/modals/CreateAccountModal.vue?vue&type=template&id=5df182ca&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/modals/CreateAccountModal.vue?vue&type=template&id=5df182ca&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAccountModal_vue_vue_type_template_id_5df182ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateAccountModal.vue?vue&type=template&id=5df182ca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/CreateAccountModal.vue?vue&type=template&id=5df182ca&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAccountModal_vue_vue_type_template_id_5df182ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAccountModal_vue_vue_type_template_id_5df182ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/modals/DocxWatermark.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/modals/DocxWatermark.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DocxWatermark_vue_vue_type_template_id_90c62b74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocxWatermark.vue?vue&type=template&id=90c62b74&scoped=true& */ "./resources/js/components/modals/DocxWatermark.vue?vue&type=template&id=90c62b74&scoped=true&");
/* harmony import */ var _DocxWatermark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocxWatermark.vue?vue&type=script&lang=js& */ "./resources/js/components/modals/DocxWatermark.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DocxWatermark_vue_vue_type_style_index_0_id_90c62b74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DocxWatermark.vue?vue&type=style&index=0&id=90c62b74&lang=scss&scoped=true& */ "./resources/js/components/modals/DocxWatermark.vue?vue&type=style&index=0&id=90c62b74&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DocxWatermark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocxWatermark_vue_vue_type_template_id_90c62b74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DocxWatermark_vue_vue_type_template_id_90c62b74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "90c62b74",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modals/DocxWatermark.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/DocxWatermark.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/modals/DocxWatermark.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocxWatermark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DocxWatermark.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/DocxWatermark.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocxWatermark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/DocxWatermark.vue?vue&type=style&index=0&id=90c62b74&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/modals/DocxWatermark.vue?vue&type=style&index=0&id=90c62b74&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DocxWatermark_vue_vue_type_style_index_0_id_90c62b74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DocxWatermark.vue?vue&type=style&index=0&id=90c62b74&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/DocxWatermark.vue?vue&type=style&index=0&id=90c62b74&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DocxWatermark_vue_vue_type_style_index_0_id_90c62b74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DocxWatermark_vue_vue_type_style_index_0_id_90c62b74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DocxWatermark_vue_vue_type_style_index_0_id_90c62b74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DocxWatermark_vue_vue_type_style_index_0_id_90c62b74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/modals/DocxWatermark.vue?vue&type=template&id=90c62b74&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/modals/DocxWatermark.vue?vue&type=template&id=90c62b74&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocxWatermark_vue_vue_type_template_id_90c62b74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DocxWatermark.vue?vue&type=template&id=90c62b74&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/DocxWatermark.vue?vue&type=template&id=90c62b74&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocxWatermark_vue_vue_type_template_id_90c62b74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocxWatermark_vue_vue_type_template_id_90c62b74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/modals/InviteYourTeam.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/modals/InviteYourTeam.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InviteYourTeam_vue_vue_type_template_id_4bdf7707_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InviteYourTeam.vue?vue&type=template&id=4bdf7707&scoped=true& */ "./resources/js/components/modals/InviteYourTeam.vue?vue&type=template&id=4bdf7707&scoped=true&");
/* harmony import */ var _InviteYourTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InviteYourTeam.vue?vue&type=script&lang=js& */ "./resources/js/components/modals/InviteYourTeam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _InviteYourTeam_vue_vue_type_style_index_0_id_4bdf7707_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InviteYourTeam.vue?vue&type=style&index=0&id=4bdf7707&scoped=true&lang=css& */ "./resources/js/components/modals/InviteYourTeam.vue?vue&type=style&index=0&id=4bdf7707&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InviteYourTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InviteYourTeam_vue_vue_type_template_id_4bdf7707_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InviteYourTeam_vue_vue_type_template_id_4bdf7707_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4bdf7707",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modals/InviteYourTeam.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/InviteYourTeam.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/modals/InviteYourTeam.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteYourTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InviteYourTeam.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/InviteYourTeam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteYourTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/InviteYourTeam.vue?vue&type=style&index=0&id=4bdf7707&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/modals/InviteYourTeam.vue?vue&type=style&index=0&id=4bdf7707&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteYourTeam_vue_vue_type_style_index_0_id_4bdf7707_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./InviteYourTeam.vue?vue&type=style&index=0&id=4bdf7707&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/InviteYourTeam.vue?vue&type=style&index=0&id=4bdf7707&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteYourTeam_vue_vue_type_style_index_0_id_4bdf7707_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteYourTeam_vue_vue_type_style_index_0_id_4bdf7707_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteYourTeam_vue_vue_type_style_index_0_id_4bdf7707_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteYourTeam_vue_vue_type_style_index_0_id_4bdf7707_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/modals/InviteYourTeam.vue?vue&type=template&id=4bdf7707&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/modals/InviteYourTeam.vue?vue&type=template&id=4bdf7707&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteYourTeam_vue_vue_type_template_id_4bdf7707_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InviteYourTeam.vue?vue&type=template&id=4bdf7707&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/InviteYourTeam.vue?vue&type=template&id=4bdf7707&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteYourTeam_vue_vue_type_template_id_4bdf7707_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteYourTeam_vue_vue_type_template_id_4bdf7707_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/modals/PdfWatermark.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/modals/PdfWatermark.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PdfWatermark_vue_vue_type_template_id_d6b34f80_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PdfWatermark.vue?vue&type=template&id=d6b34f80&scoped=true& */ "./resources/js/components/modals/PdfWatermark.vue?vue&type=template&id=d6b34f80&scoped=true&");
/* harmony import */ var _PdfWatermark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PdfWatermark.vue?vue&type=script&lang=js& */ "./resources/js/components/modals/PdfWatermark.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PdfWatermark_vue_vue_type_style_index_0_id_d6b34f80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PdfWatermark.vue?vue&type=style&index=0&id=d6b34f80&lang=scss&scoped=true& */ "./resources/js/components/modals/PdfWatermark.vue?vue&type=style&index=0&id=d6b34f80&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PdfWatermark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PdfWatermark_vue_vue_type_template_id_d6b34f80_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PdfWatermark_vue_vue_type_template_id_d6b34f80_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d6b34f80",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modals/PdfWatermark.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/PdfWatermark.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/modals/PdfWatermark.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfWatermark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PdfWatermark.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/PdfWatermark.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfWatermark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/PdfWatermark.vue?vue&type=style&index=0&id=d6b34f80&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/modals/PdfWatermark.vue?vue&type=style&index=0&id=d6b34f80&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfWatermark_vue_vue_type_style_index_0_id_d6b34f80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PdfWatermark.vue?vue&type=style&index=0&id=d6b34f80&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/PdfWatermark.vue?vue&type=style&index=0&id=d6b34f80&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfWatermark_vue_vue_type_style_index_0_id_d6b34f80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfWatermark_vue_vue_type_style_index_0_id_d6b34f80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfWatermark_vue_vue_type_style_index_0_id_d6b34f80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfWatermark_vue_vue_type_style_index_0_id_d6b34f80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/modals/PdfWatermark.vue?vue&type=template&id=d6b34f80&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/modals/PdfWatermark.vue?vue&type=template&id=d6b34f80&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfWatermark_vue_vue_type_template_id_d6b34f80_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PdfWatermark.vue?vue&type=template&id=d6b34f80&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/PdfWatermark.vue?vue&type=template&id=d6b34f80&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfWatermark_vue_vue_type_template_id_d6b34f80_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfWatermark_vue_vue_type_template_id_d6b34f80_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/conceptPaperDOCXGeneratorWithWatermark_service.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/services/conceptPaperDOCXGeneratorWithWatermark_service.js ***!
  \*********************************************************************************/
/*! exports provided: DocumentCreatorDOCXWithWatermark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentCreatorDOCXWithWatermark", function() { return DocumentCreatorDOCXWithWatermark; });
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


var DocumentCreatorDOCXWithWatermark = /*#__PURE__*/function () {
  function DocumentCreatorDOCXWithWatermark() {
    _classCallCheck(this, DocumentCreatorDOCXWithWatermark);
  }

  _createClass(DocumentCreatorDOCXWithWatermark, [{
    key: "create",
    // tslint:disable-next-line: typedef
    value: function create(_ref) {
      var _ref2 = _slicedToArray(_ref, 17),
          name = _ref2[0],
          course = _ref2[1],
          currentSemester = _ref2[2],
          logo = _ref2[3],
          widthImg = _ref2[4],
          heightImg = _ref2[5],
          idea = _ref2[6],
          basics = _ref2[7],
          niceToHave = _ref2[8],
          technologies = _ref2[9],
          team = _ref2[10],
          hskl_branding_logo = _ref2[11],
          widthHSKL = _ref2[12],
          heightHSKL = _ref2[13],
          watermark_logo = _ref2[14],
          widthWatermark = _ref2[15],
          HeightWatermark = _ref2[16];

      var document = new docx__WEBPACK_IMPORTED_MODULE_0__["Document"]();
      var image = docx__WEBPACK_IMPORTED_MODULE_0__["Media"].addImage(document, logo, widthImg, heightImg);
      var hskl_branding_image = docx__WEBPACK_IMPORTED_MODULE_0__["Media"].addImage(document, hskl_branding_logo, widthHSKL, heightHSKL, {
        floating: {
          horizontalPosition: {
            offset: 4803569
          },
          verticalPosition: {
            offset: 900000
          }
        }
      });
      var watermark_image = docx__WEBPACK_IMPORTED_MODULE_0__["Media"].addImage(document, watermark_logo, widthWatermark, HeightWatermark, {
        floating: {
          horizontalPosition: {
            align: docx__WEBPACK_IMPORTED_MODULE_0__["VerticalPositionAlign"].CENTER
          },
          verticalPosition: {
            align: docx__WEBPACK_IMPORTED_MODULE_0__["VerticalPositionAlign"].CENTER
          }
        }
      });
      document.addSection({
        children: [new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"](watermark_image), new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
          children: [hskl_branding_image],
          spacing: {
            after: 1750
          }
        }), new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
          children: [new docx__WEBPACK_IMPORTED_MODULE_0__["TextRun"]({
            text: course,
            bold: true,
            size: 44
          })],
          alignment: docx__WEBPACK_IMPORTED_MODULE_0__["AlignmentType"].CENTER,
          spacing: {
            after: 200
          }
        }), new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
          children: [new docx__WEBPACK_IMPORTED_MODULE_0__["TextRun"]({
            text: "Konzeptpapier für die Projektarbeit/Prüfungsleistung",
            size: 28
          })],
          alignment: docx__WEBPACK_IMPORTED_MODULE_0__["AlignmentType"].CENTER,
          spacing: {
            after: 200
          }
        }), new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
          children: [new docx__WEBPACK_IMPORTED_MODULE_0__["TextRun"]({
            text: currentSemester,
            bold: false,
            size: 28
          })],
          alignment: docx__WEBPACK_IMPORTED_MODULE_0__["AlignmentType"].CENTER,
          spacing: {
            after: 1000
          }
        }), new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
          children: [new docx__WEBPACK_IMPORTED_MODULE_0__["TextRun"]({
            text: name,
            bold: true,
            size: 34
          })],
          spacing: {
            after: 200
          }
        }), new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"](image), this.createHeading("Grundidee"), new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
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
        children: [new docx__WEBPACK_IMPORTED_MODULE_0__["TextRun"]({
          text: text,
          size: 24,
          bold: true
        })],
        spacing: {
          after: 200
        }
      });
    }
  }, {
    key: "createHeading",
    value: function createHeading(text) {
      return new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
        children: [new docx__WEBPACK_IMPORTED_MODULE_0__["TextRun"]({
          text: text,
          size: 28,
          bold: true
        })],
        spacing: {
          after: 200
        }
      });
    }
  }, {
    key: "createSpace",
    value: function createSpace(spaceSize) {
      console.log(spaceSize);
      return new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
        spacing: {
          after: spaceSize
        }
      });
    }
  }]);

  return DocumentCreatorDOCXWithWatermark;
}();

/***/ }),

/***/ "./resources/js/services/conceptPaperDOCXGenerator_service.js":
/*!********************************************************************!*\
  !*** ./resources/js/services/conceptPaperDOCXGenerator_service.js ***!
  \********************************************************************/
/*! exports provided: DocumentCreatorDOCX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentCreatorDOCX", function() { return DocumentCreatorDOCX; });
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


var DocumentCreatorDOCX = /*#__PURE__*/function () {
  function DocumentCreatorDOCX() {
    _classCallCheck(this, DocumentCreatorDOCX);
  }

  _createClass(DocumentCreatorDOCX, [{
    key: "create",
    // tslint:disable-next-line: typedef
    value: function create(_ref) {
      var _ref2 = _slicedToArray(_ref, 14),
          name = _ref2[0],
          course = _ref2[1],
          currentSemester = _ref2[2],
          logo = _ref2[3],
          widthImg = _ref2[4],
          heightImg = _ref2[5],
          idea = _ref2[6],
          basics = _ref2[7],
          niceToHave = _ref2[8],
          technologies = _ref2[9],
          team = _ref2[10],
          hskl_branding_logo = _ref2[11],
          widthHSKL = _ref2[12],
          heightHSKL = _ref2[13];

      var document = new docx__WEBPACK_IMPORTED_MODULE_0__["Document"]();
      var image = docx__WEBPACK_IMPORTED_MODULE_0__["Media"].addImage(document, logo, widthImg, heightImg);
      var hskl_branding_image = docx__WEBPACK_IMPORTED_MODULE_0__["Media"].addImage(document, hskl_branding_logo, widthHSKL, heightHSKL, {
        floating: {
          horizontalPosition: {
            offset: 4803569
          },
          verticalPosition: {
            offset: 778372
          }
        }
      });
      document.addSection({
        children: [new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
          children: [hskl_branding_image],
          spacing: {
            after: 1750
          }
        }), new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
          children: [new docx__WEBPACK_IMPORTED_MODULE_0__["TextRun"]({
            text: course,
            bold: true,
            size: 44
          })],
          alignment: docx__WEBPACK_IMPORTED_MODULE_0__["AlignmentType"].CENTER,
          spacing: {
            after: 200
          }
        }), new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
          children: [new docx__WEBPACK_IMPORTED_MODULE_0__["TextRun"]({
            text: "Konzeptpapier für die Projektarbeit/Prüfungsleistung",
            size: 28
          })],
          alignment: docx__WEBPACK_IMPORTED_MODULE_0__["AlignmentType"].CENTER,
          spacing: {
            after: 200
          }
        }), new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
          children: [new docx__WEBPACK_IMPORTED_MODULE_0__["TextRun"]({
            text: currentSemester,
            bold: false,
            size: 28
          })],
          alignment: docx__WEBPACK_IMPORTED_MODULE_0__["AlignmentType"].CENTER,
          spacing: {
            after: 1000
          }
        }), new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
          children: [new docx__WEBPACK_IMPORTED_MODULE_0__["TextRun"]({
            text: name,
            bold: true,
            size: 34
          })],
          spacing: {
            after: 200
          }
        }), new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"](image), this.createHeading("Grundidee"), new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
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
        children: [new docx__WEBPACK_IMPORTED_MODULE_0__["TextRun"]({
          text: text,
          size: 24,
          bold: true
        })],
        spacing: {
          after: 200
        }
      });
    }
  }, {
    key: "createHeading",
    value: function createHeading(text) {
      return new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
        children: [new docx__WEBPACK_IMPORTED_MODULE_0__["TextRun"]({
          text: text,
          size: 28,
          bold: true
        })],
        spacing: {
          after: 200
        }
      });
    }
  }, {
    key: "createSpace",
    value: function createSpace(spaceSize) {
      console.log(spaceSize);
      return new docx__WEBPACK_IMPORTED_MODULE_0__["Paragraph"]({
        spacing: {
          after: spaceSize
        }
      });
    }
  }]);

  return DocumentCreatorDOCX;
}();

/***/ }),

/***/ "./resources/js/services/conceptPaperPDFGeneratorWithWatermark_service.js":
/*!********************************************************************************!*\
  !*** ./resources/js/services/conceptPaperPDFGeneratorWithWatermark_service.js ***!
  \********************************************************************************/
/*! exports provided: DocumentCreatorPDFWithWatermark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentCreatorPDFWithWatermark", function() { return DocumentCreatorPDFWithWatermark; });
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var DocumentCreatorPDFWithWatermark = /*#__PURE__*/function () {
  function DocumentCreatorPDFWithWatermark() {
    _classCallCheck(this, DocumentCreatorPDFWithWatermark);
  }

  _createClass(DocumentCreatorPDFWithWatermark, [{
    key: "create",
    // tslint:disable-next-line: typedef
    value: function create(_ref) {
      var _ref2 = _slicedToArray(_ref, 10),
          name = _ref2[0],
          course = _ref2[1],
          currentSemester = _ref2[2],
          logo = _ref2[3],
          watermark = _ref2[4],
          idea = _ref2[5],
          basics = _ref2[6],
          niceToHave = _ref2[7],
          technologies = _ref2[8],
          team = _ref2[9];

      var _this$calculateAspect = this.calculateAspectRatioFit(logo.naturalWidth || logo.width, logo.naturalHeight || logo.height, 160, 30),
          width = _this$calculateAspect.width,
          height = _this$calculateAspect.height;

      var _this$calculateAspect2 = this.calculateAspectRatioFitWatermark(watermark.naturalWidth || watermark.width, watermark.naturalHeight || watermark.height, 100, 100),
          watermarkWidth = _this$calculateAspect2.watermarkWidth,
          watermarkHeight = _this$calculateAspect2.watermarkHeight;

      var _this$calculateAspect3 = this.calculateAspectRatioFitHSKLBranding(hskl_branding.naturalWidth || hskl_branding.width, hskl_branding.naturalHeight || hskl_branding.height, 160, 25),
          widthHSKL = _this$calculateAspect3.widthHSKL,
          heightHSKL = _this$calculateAspect3.heightHSKL;

      var doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__["jsPDF"]({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts: true,
        floatPrecision: 16 // or "smart", default is 16

      });
      var watermarkLeft = doc.internal.pageSize.getWidth() / 2 - watermarkWidth / 2;
      var watermarkTop = doc.internal.pageSize.getHeight() / 2 - watermarkHeight / 2;
      doc.addImage(watermark, watermarkLeft, watermarkTop, watermarkWidth, watermarkHeight);
      var left = 25;
      var leftTab1 = 35;
      var leftTab2 = 45;
      var top = 115;
      var helperTop = top;
      var textSizeTitle = 22;
      var textSizeHeading = 14;
      var textSizeSubHeading = 12;
      var textSizeText = 11;
      doc.addImage(hskl_branding, 135, 25, widthHSKL, heightHSKL);
      var courseHeadline = doc.setFont('times', 'bold').setFontSize(textSizeTitle).splitTextToSize(course, 160);
      doc.text(doc.internal.pageSize.getWidth() / 2 - doc.getTextDimensions(courseHeadline).w / 2, 70, courseHeadline);
      var titleHeadline = doc.setFont('times', 'normal').setFontSize(textSizeHeading).splitTextToSize("Konzeptpapier für die Projektarbeit/Prüfungsleistung", 160);
      doc.text(doc.internal.pageSize.getWidth() / 2 - doc.getTextDimensions(titleHeadline).w / 2, 78, titleHeadline);
      var currentSemesterHeadline = doc.setFont('times', 'normal').setFontSize(textSizeHeading).splitTextToSize(currentSemester, 160);
      doc.text(doc.internal.pageSize.getWidth() / 2 - doc.getTextDimensions(currentSemesterHeadline).w / 2, 86, currentSemesterHeadline);
      doc.setFont('times', 'bold');
      doc.setFontSize(17);
      doc.text(left, 110, name);
      doc.addImage(logo, left, top, width, height); //---------------------

      top = top + 40;
      var ideaHeadingLine = doc.setFont('times', 'bold').setFontSize(textSizeHeading).splitTextToSize("Grundidee", 160);
      doc.text(left, top, ideaHeadingLine);
      top = top + 3;
      top = top + doc.getTextDimensions(ideaHeadingLine).h;
      var ideaLines = doc.setFont('times', 'normal').setFontSize(textSizeText).splitTextToSize(idea, 160);
      doc.text(left, top, ideaLines);
      top = top + doc.getTextDimensions(ideaLines).h + 5; //---------------------

      var featuresHeadingLine = doc.setFont('times', 'bold').setFontSize(textSizeHeading).splitTextToSize("Features", 160);
      var basicsHeadingLine = doc.setFont('times', 'bold').setFontSize(textSizeSubHeading).splitTextToSize("Grundfunktionalitäten", 150);
      var basicsLines = doc.setFont('times', 'normal').setFontSize(textSizeText).splitTextToSize(basics, 140);
      var niceToHaveHeadingLine = doc.setFont('times', 'bold').setFontSize(textSizeSubHeading).splitTextToSize("Nice-To-Have Features", 150);
      var niceToHaveLines = doc.setFont('times', 'normal').setFontSize(textSizeText).splitTextToSize(niceToHave, 140);
      var technologiesHeadingLine = doc.setFont('times', 'bold').setFontSize(textSizeHeading).splitTextToSize("Technologien", 160);
      var technologiesLines = doc.setFont('times', 'normal').setFontSize(textSizeText).splitTextToSize(technologies, 150);
      var teamHeadingLine = doc.setFont('times', 'bold').setFontSize(textSizeHeading).splitTextToSize("Team", 160);
      var teamLines = doc.setFont('times', 'normal').setFontSize(textSizeText).splitTextToSize(team, 150);
      helperTop = top + doc.getTextDimensions(featuresHeadingLine).h + doc.getTextDimensions(basicsHeadingLine).h + doc.getTextDimensions(basicsLines).h;

      if (helperTop > 267) {
        doc.addPage();
        top = 30;
      } //setText FeatureHeading


      doc.setFont('times', 'bold');
      doc.setFontSize(textSizeHeading);
      doc.text(left, top, featuresHeadingLine);
      top = top + 3;
      top = top + doc.getTextDimensions(featuresHeadingLine).h; //setText BasicsHeading

      doc.setFontSize(textSizeSubHeading);
      doc.text(leftTab1, top, basicsHeadingLine);
      top = top + 3;
      top = top + doc.getTextDimensions(basicsHeadingLine).h; //setText Basics

      doc.setFont('times', 'normal');
      doc.setFontSize(textSizeText);
      doc.text(leftTab2, top, basicsLines);
      top = top + doc.getTextDimensions(basicsLines).h + 5; //-----------------------

      helperTop = top + doc.getTextDimensions(niceToHaveHeadingLine).h + doc.getTextDimensions(niceToHaveLines).h;

      if (helperTop > 267) {
        doc.addPage();
        top = 30;
      } //setText NiceToHaveHeading


      doc.setFont('times', 'bold');
      doc.setFontSize(textSizeSubHeading);
      doc.text(leftTab1, top, niceToHaveHeadingLine);
      top = top + 3;
      top = top + doc.getTextDimensions(niceToHaveHeadingLine).h; //setText NiceToHave

      doc.setFont('times', 'normal');
      doc.setFontSize(textSizeText);
      doc.text(leftTab2, top, niceToHaveLines);
      top = top + doc.getTextDimensions(niceToHaveLines).h + 5; //-----------------------

      helperTop = top + doc.getTextDimensions(technologiesHeadingLine).h + doc.getTextDimensions(technologiesLines).h;

      if (helperTop > 267) {
        doc.addPage();
        top = 30;
      } //setText TechHeading


      doc.setFont('times', 'bold');
      doc.setFontSize(textSizeHeading);
      doc.text(left, top, technologiesHeadingLine);
      top = top + 3;
      top = top + doc.getTextDimensions(technologiesHeadingLine).h; //setText Tech

      doc.setFont('times', 'normal');
      doc.setFontSize(textSizeText);
      doc.text(leftTab1, top, technologiesLines);
      top = top + doc.getTextDimensions(technologiesLines).h + 5; //-----------------------

      helperTop = top + doc.getTextDimensions(teamHeadingLine).h + doc.getTextDimensions(teamLines).h;

      if (helperTop > 267) {
        doc.addPage();
        top = 30;
      } //setText TeamHeading


      doc.setFont('times', 'bold');
      doc.setFontSize(textSizeHeading);
      doc.text(left, top, teamHeadingLine);
      top = top + 3;
      top = top + doc.getTextDimensions(teamHeadingLine).h; //setText Team

      doc.setFont('times', 'normal');
      doc.setFontSize(textSizeText);
      doc.text(leftTab1, top, teamLines);
      return doc;
    }
  }, {
    key: "calculateAspectRatioFit",
    value: function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
      var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      return {
        width: srcWidth * ratio,
        height: srcHeight * ratio
      };
    }
  }, {
    key: "calculateAspectRatioFitWatermark",
    value: function calculateAspectRatioFitWatermark(srcWidth, srcHeight, maxWidth, maxHeight) {
      var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      return {
        watermarkWidth: srcWidth * ratio,
        watermarkHeight: srcHeight * ratio
      };
    }
  }, {
    key: "calculateAspectRatioFitHSKLBranding",
    value: function calculateAspectRatioFitHSKLBranding(srcWidth, srcHeight, maxWidth, maxHeight) {
      var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      return {
        widthHSKL: srcWidth * ratio,
        heightHSKL: srcHeight * ratio
      };
    }
  }]);

  return DocumentCreatorPDFWithWatermark;
}();

/***/ }),

/***/ "./resources/js/services/conceptPaperPDFGenerator_service.js":
/*!*******************************************************************!*\
  !*** ./resources/js/services/conceptPaperPDFGenerator_service.js ***!
  \*******************************************************************/
/*! exports provided: DocumentCreatorPDF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentCreatorPDF", function() { return DocumentCreatorPDF; });
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var DocumentCreatorPDF = /*#__PURE__*/function () {
  function DocumentCreatorPDF() {
    _classCallCheck(this, DocumentCreatorPDF);
  }

  _createClass(DocumentCreatorPDF, [{
    key: "create",
    // tslint:disable-next-line: typedef
    value: function create(_ref) {
      var _ref2 = _slicedToArray(_ref, 10),
          name = _ref2[0],
          course = _ref2[1],
          currentSemester = _ref2[2],
          logo = _ref2[3],
          idea = _ref2[4],
          basics = _ref2[5],
          niceToHave = _ref2[6],
          technologies = _ref2[7],
          team = _ref2[8],
          hskl_branding = _ref2[9];

      var _this$calculateAspect = this.calculateAspectRatioFit(logo.naturalWidth || logo.width, logo.naturalHeight || logo.height, 160, 30),
          width = _this$calculateAspect.width,
          height = _this$calculateAspect.height;

      var _this$calculateAspect2 = this.calculateAspectRatioFitHSKLBranding(hskl_branding.naturalWidth || hskl_branding.width, hskl_branding.naturalHeight || hskl_branding.height, 160, 25),
          widthHSKL = _this$calculateAspect2.widthHSKL,
          heightHSKL = _this$calculateAspect2.heightHSKL;

      var doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__["jsPDF"]({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts: true,
        floatPrecision: 16 // or "smart", default is 16

      });
      var left = 25;
      var leftTab1 = 35;
      var leftTab2 = 45;
      var top = 115;
      var helperTop = top;
      var textSizeTitle = 22;
      var textSizeHeading = 14;
      var textSizeSubHeading = 12;
      var textSizeText = 11;
      doc.addImage(hskl_branding, 135, 25, widthHSKL, heightHSKL);
      var courseHeadline = doc.setFont('times', 'bold').setFontSize(textSizeTitle).splitTextToSize(course, 160);
      doc.text(doc.internal.pageSize.getWidth() / 2 - doc.getTextDimensions(courseHeadline).w / 2, 70, courseHeadline);
      var titleHeadline = doc.setFont('times', 'normal').setFontSize(textSizeHeading).splitTextToSize("Konzeptpapier für die Projektarbeit/Prüfungsleistung", 160);
      doc.text(doc.internal.pageSize.getWidth() / 2 - doc.getTextDimensions(titleHeadline).w / 2, 78, titleHeadline);
      var currentSemesterHeadline = doc.setFont('times', 'normal').setFontSize(textSizeHeading).splitTextToSize(currentSemester, 160);
      doc.text(doc.internal.pageSize.getWidth() / 2 - doc.getTextDimensions(currentSemesterHeadline).w / 2, 86, currentSemesterHeadline);
      doc.setFont('times', 'bold');
      doc.setFontSize(17);
      doc.text(left, 110, name);
      doc.addImage(logo, left, top, width, height); //---------------------

      top = top + 40;
      var ideaHeadingLine = doc.setFont('times', 'bold').setFontSize(textSizeHeading).splitTextToSize("Grundidee", 160);
      doc.text(left, top, ideaHeadingLine);
      top = top + 3;
      top = top + doc.getTextDimensions(ideaHeadingLine).h;
      var ideaLines = doc.setFont('times', 'normal').setFontSize(textSizeText).splitTextToSize(idea, 160);
      doc.text(left, top, ideaLines);
      top = top + doc.getTextDimensions(ideaLines).h + 5; //---------------------

      var featuresHeadingLine = doc.setFont('times', 'bold').setFontSize(textSizeHeading).splitTextToSize("Features", 160);
      var basicsHeadingLine = doc.setFont('times', 'bold').setFontSize(textSizeSubHeading).splitTextToSize("Grundfunktionalitäten", 150);
      var basicsLines = doc.setFont('times', 'normal').setFontSize(textSizeText).splitTextToSize(basics, 140);
      var niceToHaveHeadingLine = doc.setFont('times', 'bold').setFontSize(textSizeSubHeading).splitTextToSize("Nice-To-Have Features", 150);
      var niceToHaveLines = doc.setFont('times', 'normal').setFontSize(textSizeText).splitTextToSize(niceToHave, 140);
      var technologiesHeadingLine = doc.setFont('times', 'bold').setFontSize(textSizeHeading).splitTextToSize("Technologien", 160);
      var technologiesLines = doc.setFont('times', 'normal').setFontSize(textSizeText).splitTextToSize(technologies, 150);
      var teamHeadingLine = doc.setFont('times', 'bold').setFontSize(textSizeHeading).splitTextToSize("Team", 160);
      var teamLines = doc.setFont('times', 'normal').setFontSize(textSizeText).splitTextToSize(team, 150);
      helperTop = top + doc.getTextDimensions(featuresHeadingLine).h + doc.getTextDimensions(basicsHeadingLine).h + doc.getTextDimensions(basicsLines).h;

      if (helperTop > 267) {
        doc.addPage();
        top = 30;
      } //setText FeatureHeading


      doc.setFont('times', 'bold');
      doc.setFontSize(textSizeHeading);
      doc.text(left, top, featuresHeadingLine);
      top = top + 3;
      top = top + doc.getTextDimensions(featuresHeadingLine).h; //setText BasicsHeading

      doc.setFontSize(textSizeSubHeading);
      doc.text(leftTab1, top, basicsHeadingLine);
      top = top + 3;
      top = top + doc.getTextDimensions(basicsHeadingLine).h; //setText Basics

      doc.setFont('times', 'normal');
      doc.setFontSize(textSizeText);
      doc.text(leftTab2, top, basicsLines);
      top = top + doc.getTextDimensions(basicsLines).h + 5; //-----------------------

      helperTop = top + doc.getTextDimensions(niceToHaveHeadingLine).h + doc.getTextDimensions(niceToHaveLines).h;

      if (helperTop > 267) {
        doc.addPage();
        top = 30;
      } //setText NiceToHaveHeading


      doc.setFont('times', 'bold');
      doc.setFontSize(textSizeSubHeading);
      doc.text(leftTab1, top, niceToHaveHeadingLine);
      top = top + 3;
      top = top + doc.getTextDimensions(niceToHaveHeadingLine).h; //setText NiceToHave

      doc.setFont('times', 'normal');
      doc.setFontSize(textSizeText);
      doc.text(leftTab2, top, niceToHaveLines);
      top = top + doc.getTextDimensions(niceToHaveLines).h + 5; //-----------------------

      helperTop = top + doc.getTextDimensions(technologiesHeadingLine).h + doc.getTextDimensions(technologiesLines).h;

      if (helperTop > 267) {
        doc.addPage();
        top = 30;
      } //setText TechHeading


      doc.setFont('times', 'bold');
      doc.setFontSize(textSizeHeading);
      doc.text(left, top, technologiesHeadingLine);
      top = top + 3;
      top = top + doc.getTextDimensions(technologiesHeadingLine).h; //setText Tech

      doc.setFont('times', 'normal');
      doc.setFontSize(textSizeText);
      doc.text(leftTab1, top, technologiesLines);
      top = top + doc.getTextDimensions(technologiesLines).h + 5; //-----------------------

      helperTop = top + doc.getTextDimensions(teamHeadingLine).h + doc.getTextDimensions(teamLines).h;

      if (helperTop > 267) {
        doc.addPage();
        top = 30;
      } //setText TeamHeading


      doc.setFont('times', 'bold');
      doc.setFontSize(textSizeHeading);
      doc.text(left, top, teamHeadingLine);
      top = top + 3;
      top = top + doc.getTextDimensions(teamHeadingLine).h; //setText Team

      doc.setFont('times', 'normal');
      doc.setFontSize(textSizeText);
      doc.text(leftTab1, top, teamLines);
      return doc;
    }
  }, {
    key: "calculateAspectRatioFit",
    value: function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
      var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      return {
        width: srcWidth * ratio,
        height: srcHeight * ratio
      };
    }
  }, {
    key: "calculateAspectRatioFitHSKLBranding",
    value: function calculateAspectRatioFitHSKLBranding(srcWidth, srcHeight, maxWidth, maxHeight) {
      var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      return {
        widthHSKL: srcWidth * ratio,
        heightHSKL: srcHeight * ratio
      };
    }
  }]);

  return DocumentCreatorPDF;
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");


function createConceptPaper(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_1__["httpFile"])().post('/conceptPaper', data);
}
function loadConceptPaper() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_1__["http"])().get('/conceptPaper');
}
function deleteConceptPaper(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_1__["http"])()["delete"]("conceptPaper/".concat(id));
}
function updateConceptPaper(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_1__["httpFile"])().post("conceptPaper/".concat(id), data);
}
function loadMore(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_1__["http"])().get("conceptPaper?page=".concat(nextPage));
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
/* empty/unused harmony star reexport *//* harmony import */ var _ConceptPaper_vue_vue_type_style_index_0_id_22c7a2ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&lang=scss&scoped=true& */ "./resources/js/views/ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&lang=scss&scoped=true&");
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

/***/ "./resources/js/views/ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptPaper_vue_vue_type_style_index_0_id_22c7a2ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ConceptPaper.vue?vue&type=style&index=0&id=22c7a2ba&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptPaper_vue_vue_type_style_index_0_id_22c7a2ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptPaper_vue_vue_type_style_index_0_id_22c7a2ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptPaper_vue_vue_type_style_index_0_id_22c7a2ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptPaper_vue_vue_type_style_index_0_id_22c7a2ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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