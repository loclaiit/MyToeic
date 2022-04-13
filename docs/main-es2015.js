(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _exam_index_exam_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exam-index/exam-index.component */ "./src/app/exam-index/exam-index.component.ts");
/* harmony import */ var _sheet_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sheet/sheet.component */ "./src/app/sheet/sheet.component.ts");
/* harmony import */ var _refresh_component_refresh_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./refresh-component/refresh-component.component */ "./src/app/refresh-component/refresh-component.component.ts");
/* harmony import */ var _toeic_result_toeic_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toeic-result/toeic-result.component */ "./src/app/toeic-result/toeic-result.component.ts");









const routes = [
    { path: '', component: _exam_index_exam_index_component__WEBPACK_IMPORTED_MODULE_3__["ExamComponent"] },
    { path: 'intro', component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__["IntroComponent"] },
    { path: 'refreshComponent', component: _refresh_component_refresh_component_component__WEBPACK_IMPORTED_MODULE_5__["RefreshComponentComponent"] },
    { path: 'result', component: _toeic_result_toeic_result_component__WEBPACK_IMPORTED_MODULE_6__["ToeicResultComponent"] },
    // {path:'part-intro/:part',component:PartIntroComponent,
    // children: [
    //   { path: 'sheet', component: SheetComponent }
    // ]}
    { path: 'sheet', component: _sheet_sheet_component__WEBPACK_IMPORTED_MODULE_4__["SheetComponent"] },
    { path: '*', component: _exam_index_exam_index_component__WEBPACK_IMPORTED_MODULE_3__["ExamComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modal_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/modal/modal.component */ "./src/app/modal/modal/modal.component.ts");





class AppComponent {
    constructor() {
        this.title = 'MyToeic';
    }
    ngAfterViewInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "main-container"], ["enabled", "false"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-modal", 1);
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _modal_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]], styles: [".main-container[_ngcontent-%COMP%] {\n  margin: 43px 0 0 0 !important;\n  height: calc(100vh - 43px);\n  background-image: linear-gradient(68.3deg, #f5b161 0.4%, #ec366e 100.2%);\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEJZTE9KT0NcXE15VG9laWMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSwwQkFBQTtFQUVBLHdFQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ0FGOztBREVBO0VBQ0Usc0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lcntcclxuICBtYXJnaW46IDQzcHggMCAwIDAgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0M3B4KTtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9iZy5qcGcpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggNjguM2RlZywgIHJnYmEoMjQ1LDE3Nyw5NywxKSAwLjQlLCByZ2JhKDIzNiw1NCwxMTAsMSkgMTAwLjIlICk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5ib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbn1cclxuIiwiLm1haW4tY29udGFpbmVyIHtcbiAgbWFyZ2luOiA0M3B4IDAgMCAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQzcHgpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNjguM2RlZywgI2Y1YjE2MSAwLjQlLCAjZWMzNjZlIDEwMC4yJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _common_audio_audio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/audio/audio.component */ "./src/app/common/audio/audio.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _exam_index_exam_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exam-index/exam-index.component */ "./src/app/exam-index/exam-index.component.ts");
/* harmony import */ var _sheet_sheet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sheet/sheet.component */ "./src/app/sheet/sheet.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _counter_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./counter.directive */ "./src/app/counter.directive.ts");
/* harmony import */ var _sheet_sheet_header_sheet_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sheet/sheet-header/sheet-header.component */ "./src/app/sheet/sheet-header/sheet-header.component.ts");
/* harmony import */ var _part_menu_part_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./part-menu/part-menu.component */ "./src/app/part-menu/part-menu.component.ts");
/* harmony import */ var _part_menu_part_intro_part_intro_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./part-menu/part-intro/part-intro.component */ "./src/app/part-menu/part-intro/part-intro.component.ts");
/* harmony import */ var _services_current_session_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/current-session.service */ "./src/app/services/current-session.service.ts");
/* harmony import */ var _sheet_sheet_footer_sheet_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sheet/sheet-footer/sheet-footer.component */ "./src/app/sheet/sheet-footer/sheet-footer.component.ts");
/* harmony import */ var _refresh_component_refresh_component_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./refresh-component/refresh-component.component */ "./src/app/refresh-component/refresh-component.component.ts");
/* harmony import */ var _toeic_result_toeic_result_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./toeic-result/toeic-result.component */ "./src/app/toeic-result/toeic-result.component.ts");
/* harmony import */ var _modal_modal_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modal/modal/modal.component */ "./src/app/modal/modal/modal.component.ts");
/* harmony import */ var _nav_bar_finish_finish_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./nav-bar/finish/finish.component */ "./src/app/nav-bar/finish/finish.component.ts");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_current_session_service__WEBPACK_IMPORTED_MODULE_16__["CurrentSessionService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"],
        _common_audio_audio_component__WEBPACK_IMPORTED_MODULE_6__["AudioComponent"],
        _intro_intro_component__WEBPACK_IMPORTED_MODULE_7__["IntroComponent"],
        _exam_index_exam_index_component__WEBPACK_IMPORTED_MODULE_8__["ExamComponent"],
        _sheet_sheet_component__WEBPACK_IMPORTED_MODULE_9__["SheetComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
        _counter_directive__WEBPACK_IMPORTED_MODULE_12__["CounterDirective"],
        _sheet_sheet_header_sheet_header_component__WEBPACK_IMPORTED_MODULE_13__["SheetHeaderComponent"],
        _part_menu_part_menu_component__WEBPACK_IMPORTED_MODULE_14__["PartMenuComponent"],
        _part_menu_part_intro_part_intro_component__WEBPACK_IMPORTED_MODULE_15__["PartIntroComponent"],
        _sheet_sheet_footer_sheet_footer_component__WEBPACK_IMPORTED_MODULE_17__["SheetFooterComponent"],
        _refresh_component_refresh_component_component__WEBPACK_IMPORTED_MODULE_18__["RefreshComponentComponent"],
        _toeic_result_toeic_result_component__WEBPACK_IMPORTED_MODULE_19__["ToeicResultComponent"],
        _modal_modal_modal_component__WEBPACK_IMPORTED_MODULE_20__["ModalComponent"],
        _nav_bar_finish_finish_component__WEBPACK_IMPORTED_MODULE_21__["FinishComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"],
                    _common_audio_audio_component__WEBPACK_IMPORTED_MODULE_6__["AudioComponent"],
                    _intro_intro_component__WEBPACK_IMPORTED_MODULE_7__["IntroComponent"],
                    _exam_index_exam_index_component__WEBPACK_IMPORTED_MODULE_8__["ExamComponent"],
                    _sheet_sheet_component__WEBPACK_IMPORTED_MODULE_9__["SheetComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
                    _counter_directive__WEBPACK_IMPORTED_MODULE_12__["CounterDirective"],
                    _sheet_sheet_header_sheet_header_component__WEBPACK_IMPORTED_MODULE_13__["SheetHeaderComponent"],
                    _part_menu_part_menu_component__WEBPACK_IMPORTED_MODULE_14__["PartMenuComponent"],
                    _part_menu_part_intro_part_intro_component__WEBPACK_IMPORTED_MODULE_15__["PartIntroComponent"],
                    _sheet_sheet_footer_sheet_footer_component__WEBPACK_IMPORTED_MODULE_17__["SheetFooterComponent"],
                    _refresh_component_refresh_component_component__WEBPACK_IMPORTED_MODULE_18__["RefreshComponentComponent"],
                    _toeic_result_toeic_result_component__WEBPACK_IMPORTED_MODULE_19__["ToeicResultComponent"],
                    _modal_modal_modal_component__WEBPACK_IMPORTED_MODULE_20__["ModalComponent"],
                    _nav_bar_finish_finish_component__WEBPACK_IMPORTED_MODULE_21__["FinishComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ],
                providers: [_services_current_session_service__WEBPACK_IMPORTED_MODULE_16__["CurrentSessionService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/common/audio/audio.component.ts":
/*!*************************************************!*\
  !*** ./src/app/common/audio/audio.component.ts ***!
  \*************************************************/
/*! exports provided: AudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioComponent", function() { return AudioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AudioComponent {
    constructor() {
        this.isPractice = false;
        this.allowReplayNumber = 99;
        this.playNumber = 0;
    }
    ngOnInit() {
        if (!this.isPractice) {
            this.allowReplayNumber = 1;
        }
    }
    ngOnChanges(changes) {
        const $ = document.querySelector.bind(document);
        const __this = this;
        const totalTime = $('.total-time');
        const currentTime = $('.current-time');
        const audio = $("audio");
        const progress = $('.progress-bar');
        const main = {
            isPlaying: false,
            render: function () {
                audio.currentTime = 0;
                audio.src = __this.source;
                audio.load();
                currentTime.innerText = '0:00';
                progress.value = 0;
            },
            handleEvents: function () {
                const _this = this;
                const audioBtn = $(".audio-btn");
                const player = $(".audio-player");
                //Handle Play/Pause click event
                audioBtn.onclick = (function () {
                    if (!_this.isPlaying) {
                        audio.play();
                        _this.isPlaying = true;
                        player.classList.add('playing');
                    }
                    else {
                        audio.pause();
                        _this.isPlaying = false;
                        player.classList.remove('playing');
                    }
                });
                audio.onloadeddata = function () {
                    totalTime.innerText = convertDurationToTime(audio.duration);
                    updatePlayer();
                };
                const updatePlayer = audio.ontimeupdate = function () {
                    currentTime.innerText = convertDurationToTime(audio.currentTime);
                    if (audio.currentTime >= audio.duration) {
                        __this.playNumber++;
                        if (__this.playNumber >= 0) {
                            $(".audio-btn").disabled = true;
                            progress.value = 0;
                            player.classList.remove('playing');
                            player.classList.add('disabled');
                        }
                    }
                    else {
                        progress.value = audio.currentTime / audio.duration * 100;
                    }
                };
            },
            start: function () {
                this.render();
                this.handleEvents();
            }
        };
        function convertDurationToTime(duration) {
            return `${Math.floor(duration / 60)}:${('0' + Math.floor(duration % 60)).slice(-2)}`;
        }
        main.start();
    }
    ngAfterContentInit() {
    }
}
AudioComponent.ɵfac = function AudioComponent_Factory(t) { return new (t || AudioComponent)(); };
AudioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AudioComponent, selectors: [["app-audio"]], inputs: { source: "source", isPractice: "isPractice" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 11, vars: 0, consts: [[1, "audio-player"], ["type", "audio/mpeg"], [1, "audio-btn"], [1, "im", "im-play"], [1, "im", "im-pause"], [1, "time-txt", "current-time"], ["type", "range", "min", "0", "max", "100", "step", "1", "width", "100%", "value", "0", 1, "progress-bar"], [1, "time-txt", "total-time"]], template: function AudioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "0:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "0:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  color: #dd7f42;\n}\n\ninput[type=range][_ngcontent-%COMP%] {\n  overflow: hidden;\n  -webkit-appearance: none;\n  border-radius: 5px;\n  height: 10px;\n}\n\ninput[type=range][_ngcontent-%COMP%], input[type=range][_ngcontent-%COMP%]::-webkit-slider-runnable-track, input[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n}\n\ninput[type=range][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  width: 100vw;\n  height: 30px;\n  background: #ccc;\n}\n\ninput[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  position: relative;\n  height: 10px;\n  width: 10px;\n  margin-top: 10px;\n  background: #dd7f42;\n  border-radius: 50%;\n  box-shadow: -100vw 0 0 calc(100vw - 5px) #5f249f;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  cursor: pointer;\n}\n\n.audio-player[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: 1px solid #dd7f42;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px 0;\n}\n\n.audio-player[_ngcontent-%COMP%]   .im[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n\n.audio-btn[_ngcontent-%COMP%] {\n  display: flex;\n  border: 2px solid #dd7f42;\n  border-radius: 5px;\n  align-items: center;\n}\n\n.im[_ngcontent-%COMP%] {\n  padding: 0 0 0 1px;\n}\n\n.time-txt[_ngcontent-%COMP%] {\n  font: 14px \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  color: #aaa;\n  padding: 0px 5px;\n}\n\n.audio-player[_ngcontent-%COMP%]   .im-pause[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.audio-player[_ngcontent-%COMP%]   .im-play[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.audio-player.playing[_ngcontent-%COMP%]   .im-pause[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.audio-player.playing[_ngcontent-%COMP%]   .im-play[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.audio-player.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2F1ZGlvL0Q6XFxCWUxPSk9DXFxNeVRvZWljL3NyY1xcYXBwXFxjb21tb25cXGF1ZGlvXFxhdWRpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uL2F1ZGlvL0Q6XFxCWUxPSk9DXFxNeVRvZWljL3NyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZS5zY3NzIiwic3JjL2FwcC9jb21tb24vYXVkaW8vYXVkaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQ0ZVO0FDQ1o7O0FGSUE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FFREY7O0FGR0E7OztFQUdFLHdCQUFBO0FFQUY7O0FGRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FFQ0Y7O0FGQ0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkMxQlU7RUQyQlYsa0JBQUE7RUFDQSxnREFBQTtBRUVGOztBRkVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FFQ0Y7O0FGQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUVDRjs7QUZDQTtFQUNFLFlBQUE7QUVFRjs7QUZBQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUVHRjs7QUZEQTtFQUNFLGtCQUFBO0FFSUY7O0FGRkE7RUFDRSxvSEFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRUtGOztBRkhBO0VBQ0UsYUFBQTtBRU1GOztBRkpBO0VBQ0UscUJBQUE7QUVPRjs7QUZMQTtFQUNFLHFCQUFBO0FFUUY7O0FGTkE7RUFDRSxhQUFBO0FFU0Y7O0FGUEE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QUVVRiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9hdWRpby9hdWRpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGUnO1xyXG4kbWFpbi1mb250OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbip7XHJcbiAgY29sb3I6ICRtYWluLWNvbG9yO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdyYW5nZSddIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG59XHJcbmlucHV0W3R5cGU9J3JhbmdlJ10sXHJcbmlucHV0W3R5cGU9J3JhbmdlJ106Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrLFxyXG5pbnB1dFt0eXBlPSdyYW5nZSddOjotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbmlucHV0W3R5cGU9J3JhbmdlJ106Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuaW5wdXRbdHlwZT0ncmFuZ2UnXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAkbWFpbi1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogLTEwMHZ3IDAgMCBjYWxjKDEwMHZ3IC0gNXB4KSAjNWYyNDlmO1xyXG59XHJcblxyXG5cclxuLnByb2dyZXNzLWJhcntcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hdWRpby1wbGF5ZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgYm9yZGVyOiAxcHggc29saWQgJG1haW4tY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuLmF1ZGlvLXBsYXllciAuaW06aG92ZXJ7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcbi5hdWRpby1idG57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaW17XHJcbiAgcGFkZGluZzogMCAwIDAgMXB4O1xyXG59XHJcbi50aW1lLXR4dHtcclxuICBmb250OiAxNHB4ICRtYWluLWZvbnQ7XHJcbiAgY29sb3I6ICNhYWE7XHJcbiAgcGFkZGluZzogMHB4IDVweDtcclxufVxyXG4uYXVkaW8tcGxheWVyIC5pbS1wYXVzZXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5hdWRpby1wbGF5ZXIgLmltLXBsYXl7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5hdWRpby1wbGF5ZXIucGxheWluZyAuaW0tcGF1c2V7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5hdWRpby1wbGF5ZXIucGxheWluZyAuaW0tcGxheXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5hdWRpby1wbGF5ZXIuZGlzYWJsZWR7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4iLCIvLyAkbWFpbi1jb2xvcjogIzVmMjQ5ZjtcclxuJG1haW4tY29sb3I6I2RkN2Y0MjtcclxuIiwiKiB7XG4gIGNvbG9yOiAjZGQ3ZjQyO1xufVxuXG5pbnB1dFt0eXBlPXJhbmdlXSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDEwcHg7XG59XG5cbmlucHV0W3R5cGU9cmFuZ2VdLFxuaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrLFxuaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZGQ3ZjQyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IC0xMDB2dyAwIDAgY2FsYygxMDB2dyAtIDVweCkgIzVmMjQ5Zjtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmF1ZGlvLXBsYXllciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZDdmNDI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5hdWRpby1wbGF5ZXIgLmltOmhvdmVyIHtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uYXVkaW8tYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAycHggc29saWQgI2RkN2Y0MjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW0ge1xuICBwYWRkaW5nOiAwIDAgMCAxcHg7XG59XG5cbi50aW1lLXR4dCB7XG4gIGZvbnQ6IDE0cHggXCJMdWNpZGEgU2Fuc1wiLCBcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjYWFhO1xuICBwYWRkaW5nOiAwcHggNXB4O1xufVxuXG4uYXVkaW8tcGxheWVyIC5pbS1wYXVzZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hdWRpby1wbGF5ZXIgLmltLXBsYXkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5hdWRpby1wbGF5ZXIucGxheWluZyAuaW0tcGF1c2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5hdWRpby1wbGF5ZXIucGxheWluZyAuaW0tcGxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hdWRpby1wbGF5ZXIuZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-audio',
                templateUrl: './audio.component.html',
                styleUrls: ['./audio.component.scss']
            }]
    }], function () { return []; }, { source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isPractice: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/counter.directive.ts":
/*!**************************************!*\
  !*** ./src/app/counter.directive.ts ***!
  \**************************************/
/*! exports provided: CounterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterDirective", function() { return CounterDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class CounterDirective {
    constructor() {
        this._counterSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._subscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._subscription = this._counterSource$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(({ interval, count }) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, interval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(count), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.value.emit(--count))))).subscribe();
    }
    ngOnChanges() {
        this._counterSource$.next({ count: this.counter, interval: this.interval });
    }
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}
CounterDirective.ɵfac = function CounterDirective_Factory(t) { return new (t || CounterDirective)(); };
CounterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CounterDirective, selectors: [["", "counter", ""]], inputs: { counter: "counter", interval: "interval" }, outputs: { value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[counter]'
            }]
    }], function () { return []; }, { counter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], interval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/exam-index/exam-index.component.ts":
/*!****************************************************!*\
  !*** ./src/app/exam-index/exam-index.component.ts ***!
  \****************************************************/
/*! exports provided: ExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamComponent", function() { return ExamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _services_current_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/current-session.service */ "./src/app/services/current-session.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");







function ExamComponent_table_5_tr_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_table_5_tr_2_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const exam_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.selectPratice(exam_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exam_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", exam_r3.Description, " - ", exam_r3.Code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exam_r3.AlltimeCount == null ? 0 : exam_r3.AlltimeCount, "");
} }
function ExamComponent_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExamComponent_table_5_tr_2_Template, 7, 3, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.examList);
} }
function ExamComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No record found. Please visit later. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ExamComponent {
    constructor(router, _api, _session) {
        this.router = router;
        this._api = _api;
        this._session = _session;
        this.examList = [];
    }
    ngOnInit() {
        this.examList.push({ Code: 'TOEIC12112021', Description: 'Practice 1', EnglishLevel: '', IsFreeVersion: '', AlltimeCount: 123, Parts: null }, { Code: 'TOEIC12112022', Description: 'Practice 2', EnglishLevel: '', IsFreeVersion: '', AlltimeCount: 123, Parts: null }, { Code: 'TOEIC12112023', Description: 'Practice 3', EnglishLevel: '', IsFreeVersion: '', AlltimeCount: 123, Parts: null }, { Code: 'TOEIC12112024', Description: 'Practice 4', EnglishLevel: '', IsFreeVersion: '', AlltimeCount: 45, Parts: null });
        // this._api.getListExams().subscribe((result: any) =>
        //     JSON.parse(JSON.stringify(result))['ListExams'].forEach((ele) => {
        //       this.examList.push({
        //         Code: ele.Code,
        //         Description: ele.Description,
        //         EnglishLevel: ele.EnglishLevel,
        //         IsFreeVersion: ele.IsFreeVersion,
        //         AlltimeCount: ele.AlltimeCount
        //       } as Exam);
        //     }
        //   )
        // );
        // this._api.getGoogleNews().subscribe(data=> console.log(data));
    }
    selectPratice(exam) {
        this._session.currentBook = exam;
        this.router.navigate(['/intro']);
    }
}
ExamComponent.ɵfac = function ExamComponent_Factory(t) { return new (t || ExamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_session_service__WEBPACK_IMPORTED_MODULE_3__["CurrentSessionService"])); };
ExamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamComponent, selectors: [["app-exam-index"]], decls: 9, vars: 2, consts: [[1, "exam-container"], [1, "row"], [1, "col-lg-6"], [1, "row", "block-text-bold", "text-center"], ["class", "table table-borderless exam-index", 4, "ngIf"], ["class", "noRecord text-center", 4, "ngIf"], [1, "table", "table-borderless", "exam-index"], [4, "ngFor", "ngForOf"], [3, "click"], [1, "im", "im-file"], [1, "im", "im-user-male"], [1, "noRecord", "text-center"]], template: function ExamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " TOEIC Practice(s) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExamComponent_table_5_Template, 3, 1, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExamComponent_div_6_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.examList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.examList.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".im[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 5px;\n}\n\n.exam-container[_ngcontent-%COMP%] {\n  top: 10px;\n  background-color: rgba(255, 255, 255, 0.2);\n  border-radius: 0 0 20px 20px;\n}\n\ntr[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #FFF;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.exam-index[_ngcontent-%COMP%] {\n  background-color: #dd7f42;\n  color: white;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbS1pbmRleC9EOlxcQllMT0pPQ1xcTXlUb2VpYy9zcmNcXGFwcFxcZXhhbS1pbmRleFxcZXhhbS1pbmRleC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXhhbS1pbmRleC9leGFtLWluZGV4LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leGFtLWluZGV4L0Q6XFxCWUxPSk9DXFxNeVRvZWljL3NyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLFNBQUE7RUFDQSwwQ0FBQTtFQUNBLDRCQUFBO0FDQUY7O0FER0E7RUFDRSw2QkFBQTtBQ0FGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UseUJFbkJVO0VGb0JWLFlBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZXhhbS1pbmRleC9leGFtLWluZGV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZSc7XHJcbi5pbXtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uZXhhbS1jb250YWluZXJ7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiB3aGl0ZSwgJGFscGhhOiAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcbn1cclxuXHJcbnRyOm5vdCg6bGFzdC1jaGlsZCl7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGRkY7XHJcbn1cclxuLnJvd3tcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLmV4YW0taW5kZXh7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuIiwiLmltIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5leGFtLWNvbnRhaW5lciB7XG4gIHRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xufVxuXG50cjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGRkY7XG59XG5cbi5yb3cge1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmV4YW0taW5kZXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ3ZjQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59IiwiLy8gJG1haW4tY29sb3I6ICM1ZjI0OWY7XHJcbiRtYWluLWNvbG9yOiNkZDdmNDI7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exam-index',
                templateUrl: './exam-index.component.html',
                styleUrls: ['./exam-index.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"] }, { type: _services_current_session_service__WEBPACK_IMPORTED_MODULE_3__["CurrentSessionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_current_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/current-session.service */ "./src/app/services/current-session.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");





class IntroComponent {
    constructor(router, session, common) {
        this.router = router;
        this.session = session;
        this.common = common;
    }
    ngOnInit() {
        this.examCode = this.session.currentBook.Description;
        this.common.CollectExamData();
    }
    Click_Start() {
        this.session.currentSheetNbr = 1;
        this.session.currentPart = 1;
        this.router.navigate(['sheet']);
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_session_service__WEBPACK_IMPORTED_MODULE_2__["CurrentSessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], decls: 21, vars: 1, consts: [[1, "container"], [1, "searchrow", "row"], [1, "panel", "panel-primary"], [1, "panel-heading"], [1, "panel-title", "text-center"], [1, "panel-body"], [1, "row", "col-md-12"], [1, "col-md-4"], [1, "col-md-4", "text-center"], ["id", "btnLogin", 1, "btn", "btn-primary", 3, "click"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Duration: 120 minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Listening: 45 minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Reading: 75 minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntroComponent_Template_button_click_18_listener() { return ctx.Click_Start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "BEGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.examCode);
    } }, styles: ["#lblLoginStatus[_ngcontent-%COMP%] {\n  font-size: large;\n  color: #dd7f42;\n  font-family: Arial;\n}\n\n.row[_ngcontent-%COMP%] {\n  width: auto;\n}\n\n.panel-heading[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.2);\n  padding: 10px 0px;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vRDpcXEJZTE9KT0NcXE15VG9laWMvc3JjXFxhcHBcXGludHJvXFxpbnRyby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW50cm8vRDpcXEJZTE9KT0NcXE15VG9laWMvc3JjXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlLnNjc3MiLCJzcmMvYXBwL2ludHJvL2ludHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxjQ0ZVO0VER1Ysa0JBQUE7QUVBRjs7QUZFQTtFQUNFLFdBQUE7QUVDRjs7QUZFQTtFQUNFLGdCQUFBO0FFQ0Y7O0FGQ0E7RUFDRSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUVFRiIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZSc7XHJcbiNsYmxMb2dpblN0YXR1c3tcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGNvbG9yOiAkbWFpbi1jb2xvcjtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbn1cclxuLnJvd3tcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLnBhbmVsLWhlYWRpbmd7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiB3aGl0ZSwgJGFscGhhOiAwLjIpO1xyXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuIiwiLy8gJG1haW4tY29sb3I6ICM1ZjI0OWY7XHJcbiRtYWluLWNvbG9yOiNkZDdmNDI7XHJcbiIsIiNsYmxMb2dpblN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGNvbG9yOiAjZGQ3ZjQyO1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbi5yb3cge1xuICB3aWR0aDogYXV0bztcbn1cblxuLnBhbmVsLWhlYWRpbmcge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro',
                templateUrl: './intro.component.html',
                styleUrls: ['./intro.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_current_session_service__WEBPACK_IMPORTED_MODULE_2__["CurrentSessionService"] }, { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _services_current_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/current-session.service */ "./src/app/services/current-session.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function LoginPageComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.messageTxt, " ");
} }
class LoginPageComponent {
    constructor(router, _api, _session) {
        this.router = router;
        this._api = _api;
        this._session = _session;
        this.userId = '';
        this.userToken = '';
        this.messageTxt = '';
        this.isInvalid = false;
    }
    ngOnInit() { }
    Click_Access() {
        // if(this.userId == 'admin' && this.userToken == '@123')
        //   this.router.navigate(['/admin']);
        // else
        // {
        //   this.checkAuthentication();
        // }
        this._api.getListExams().subscribe((result) => {
            let firstExam = JSON.parse(JSON.stringify(result))['ListExams'][0];
            this._session.currentBook = {
                Code: firstExam.Code,
                Description: firstExam.Description,
                EnglishLevel: firstExam.EnglishLevel,
                IsFreeVersion: firstExam.IsFreeVersion,
                AlltimeCount: firstExam.AlltimeCount,
            };
            this.router.navigate(['/intro']);
        });
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_session_service__WEBPACK_IMPORTED_MODULE_3__["CurrentSessionService"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login"]], decls: 21, vars: 3, consts: [[1, "container"], [1, "searchrow", "row"], [1, "panel", "panel-primary"], [1, "panel-heading"], [1, "panel-title", "text-center"], [1, "panel-body"], [1, "row"], [1, "col-md-12"], [1, "form-group"], ["type", "text", "maxlength", "25", "runat", "server", "id", "tbUserId", "placeholder", "User Name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-4"], [1, "input-group", "mb-3"], ["type", "text", "runat", "server", "id", "tbtoken", "placeholder", "Token", "maxlength", "25", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "btnLogin", "runat", "server", 1, "btn", "btn-primary", 3, "click"], ["class", "alert alert-danger text-center", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "text-center"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Access by Token");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_12_listener($event) { return ctx.userId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_17_listener($event) { return ctx.userToken = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_18_listener() { return ctx.Click_Access(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginPageComponent_div_20_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userToken);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInvalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".header[_ngcontent-%COMP%] {\n  left: 0;\n  right: 0;\n  height: 30px;\n  background-color: #ccc;\n}\n\n.login-panel[_ngcontent-%COMP%] {\n  width: 40%;\n  background-color: #333;\n  margin: 20px auto;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFnZS9EOlxcQllMT0pPQ1xcTXlUb2VpYy9zcmNcXGFwcFxcbG9naW4tcGFnZVxcbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi5sb2dpbi1wYW5lbHtcclxuICB3aWR0aDogNDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi5sb2dpbi1wYW5lbCB7XG4gIHdpZHRoOiA0MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuXG4ucm93IHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"] }, { type: _services_current_session_service__WEBPACK_IMPORTED_MODULE_3__["CurrentSessionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modal/modal/modal.component.ts":
/*!************************************************!*\
  !*** ./src/app/modal/modal/modal.component.ts ***!
  \************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_modal_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/modal-service.service */ "./src/app/services/modal-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class ModalComponent {
    constructor(isEnabled, common, servive) {
        this.isEnabled = isEnabled;
        this.common = common;
        this.servive = servive;
        this._servive = servive;
    }
    ngOnInit() {
        // var nav = document.querySelector('.navigation-bar');
        // //overlay for navigation bar
        // var eModal = document.getElementById('staticBackdrop');
        // var observer = new MutationObserver(function (mutations) {
        //   mutations.forEach(function () {
        //     if (eModal.style.display == 'block') {
        //       nav.classList.add('disabled');
        //       this.loadContent();
        //     } else {
        //       nav.classList.remove('disabled');
        //     }
        //   });
        // });
        // //watch style of modal
        // observer.observe(eModal, {
        //   attributes: true,
        //   attributeFilter: ['style'],
        // });
    }
    loadContent() {
        //init modal content
        switch (this._servive.modalType) {
            case 'finish':
                this._servive.headerText = 'Have you finished your exam?';
                let remainQuestions = this.common.getUnAnswerQuestionsList(true);
                if (remainQuestions.length > 1) {
                    this._servive.modalContent += 'There is unanswer question(s) {' + remainQuestions + '}<br> Have you finished your exam?';
                }
                this._servive.primaryBtn = 'Finish';
                break;
            default:
                break;
        }
    }
    closeModal() {
        this.servive.close();
    }
    acceptModal() {
        this.servive.clickAccept();
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('enabled'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_modal_service_service__WEBPACK_IMPORTED_MODULE_2__["ModalServiceService"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], decls: 13, vars: 5, consts: [[1, "background-modal", 3, "ngClass"], ["tabindex", "-1", 3, "ngClass"], [1, "popup-header"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "popup-body"], [3, "innerHTML"], [1, "popup-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_5_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_9_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_11_listener() { return ctx.acceptModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx._servive.IsShow ? "show-popup" : "hide-popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx._servive.IsShow ? "show-popup popup-container" : "popup-container hide-popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._servive.headerText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx._servive.modalContent || "Are you sure?", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._servive.primaryBtn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".popup-container[_ngcontent-%COMP%] {\n  position: fixed;\n  min-height: 200px;\n  background-color: #FFF;\n  width: 60%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding-left: 0px;\n  border-radius: 5px;\n  z-index: 2001;\n}\n\n.popup-header[_ngcontent-%COMP%] {\n  border-top: 3px solid #dd7f42;\n  text-align: right;\n}\n\n.popup-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  margin: 2px 5px;\n}\n\n.popup-body[_ngcontent-%COMP%] {\n  margin: 10px 10px;\n  position: absolute;\n  height: auto;\n  top: 50%;\n  transform: translateY(-140%) translateX(-50%);\n  left: 50%;\n}\n\n.popup-footer[_ngcontent-%COMP%] {\n  bottom: 10px;\n  position: absolute;\n  text-align: right;\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n  align-content: flex-end;\n  display: flex;\n  width: 100%;\n  justify-content: end;\n  padding: 0 10px;\n}\n\n.background-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  z-index: 2000;\n  opacity: 0.8;\n}\n\n@-webkit-keyframes pop-in {\n  from {\n    transform: scale(1) translate(-50%, -50%);\n  }\n  to {\n    transform: scale(0) translate(-100%, -100%);\n  }\n}\n\n@keyframes pop-in {\n  from {\n    transform: scale(1) translate(-50%, -50%);\n  }\n  to {\n    transform: scale(0) translate(-100%, -100%);\n  }\n}\n\n@-webkit-keyframes pop-out {\n  from {\n    transform: scale(0) translate(-100%, -100%);\n  }\n  to {\n    transform: scale(1) translate(-50%, -50%);\n  }\n}\n\n@keyframes pop-out {\n  from {\n    transform: scale(0) translate(-100%, -100%);\n  }\n  to {\n    transform: scale(1) translate(-50%, -50%);\n  }\n}\n\n.popup-container.show-popup[_ngcontent-%COMP%] {\n  -webkit-animation: pop-out 0.3s ease-in forwards;\n          animation: pop-out 0.3s ease-in forwards;\n  \n  visibility: visible;\n  opacity: 1;\n}\n\n.popup-container.hide-popup[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.background-modal.show-popup[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  visibility: visible;\n}\n\n.background-modal.hide-popup[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwvbW9kYWwvRDpcXEJZTE9KT0NcXE15VG9laWMvc3JjXFxhcHBcXG1vZGFsXFxtb2RhbFxcbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZGFsL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDREY7O0FESUE7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0FDREY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSw2Q0FBQTtFQUNBLFNBQUE7QUNBRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSx5Q0FBQTtFQ0NGO0VEQ0E7SUFDRSwyQ0FBQTtFQ0NGO0FBQ0Y7O0FEUEE7RUFDRTtJQUNFLHlDQUFBO0VDQ0Y7RURDQTtJQUNFLDJDQUFBO0VDQ0Y7QUFDRjs7QURDQTtFQUNFO0lBQ0UsMkNBQUE7RUNDRjtFRENBO0lBQ0UseUNBQUE7RUNDRjtBQUNGOztBRFBBO0VBQ0U7SUFDRSwyQ0FBQTtFQ0NGO0VEQ0E7SUFDRSx5Q0FBQTtFQ0NGO0FBQ0Y7O0FEQ0E7RUFDRSxnREFBQTtVQUFBLHdDQUFBO0VBQTBDLHVCQUFBO0VBQzFDLG1CQUFBO0VBQ0EsVUFBQTtBQ0VGOztBREFBO0VBRUUsa0JBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZSc7XHJcblxyXG4ucG9wdXAtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB6LWluZGV4OiAyMDAxO1xyXG5cclxufVxyXG4ucG9wdXAtaGVhZGVye1xyXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAkbWFpbi1jb2xvcjtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4ucG9wdXAtaGVhZGVyIC5idG4tY2xvc2V7XHJcbiAgbWFyZ2luOiAycHggNXB4O1xyXG59XHJcblxyXG4ucG9wdXAtYm9keXtcclxuICBtYXJnaW46IDEwcHggMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTQwJSkgdHJhbnNsYXRlWCgtNTAlKTtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuLnBvcHVwLWZvb3RlcntcclxuICBib3R0b206IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLW1vZGFse1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICB6LWluZGV4OiAyMDAwO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuQGtleWZyYW1lcyBwb3AtaW4ge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKC0xMDAlLCAtMTAwJSk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgcG9wLW91dCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSgtMTAwJSwgLTEwMCUpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbn1cclxuLnBvcHVwLWNvbnRhaW5lci5zaG93LXBvcHVwIHtcclxuICBhbmltYXRpb246IHBvcC1vdXQgMC4zcyBlYXNlLWluIGZvcndhcmRzOyAvKnRyaWdnZXIgdGhlIGtleWZyYW1lKi9cclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLnBvcHVwLWNvbnRhaW5lci5oaWRlLXBvcHVwIHtcclxuICAvL2FuaW1hdGlvbjogcG9wLWluIDAuM3MgZWFzZS1pbiBmb3J3YXJkcztcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmJhY2tncm91bmQtbW9kYWwuc2hvdy1wb3B1cCB7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuLmJhY2tncm91bmQtbW9kYWwuaGlkZS1wb3B1cHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuIiwiLnBvcHVwLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHdpZHRoOiA2MCU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB6LWluZGV4OiAyMDAxO1xufVxuXG4ucG9wdXAtaGVhZGVyIHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNkZDdmNDI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucG9wdXAtaGVhZGVyIC5idG4tY2xvc2Uge1xuICBtYXJnaW46IDJweCA1cHg7XG59XG5cbi5wb3B1cC1ib2R5IHtcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNDAlKSB0cmFuc2xhdGVYKC01MCUpO1xuICBsZWZ0OiA1MCU7XG59XG5cbi5wb3B1cC1mb290ZXIge1xuICBib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbHVtbi1nYXA6IDEwcHg7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLmJhY2tncm91bmQtbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgei1pbmRleDogMjAwMDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG5Aa2V5ZnJhbWVzIHBvcC1pbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSgtMTAwJSwgLTEwMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHBvcC1vdXQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSgtMTAwJSwgLTEwMCUpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxufVxuLnBvcHVwLWNvbnRhaW5lci5zaG93LXBvcHVwIHtcbiAgYW5pbWF0aW9uOiBwb3Atb3V0IDAuM3MgZWFzZS1pbiBmb3J3YXJkcztcbiAgLyp0cmlnZ2VyIHRoZSBrZXlmcmFtZSovXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5wb3B1cC1jb250YWluZXIuaGlkZS1wb3B1cCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmJhY2tncm91bmQtbW9kYWwuc2hvdy1wb3B1cCB7XG4gIG9wYWNpdHk6IDAuODtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmJhY2tncm91bmQtbW9kYWwuaGlkZS1wb3B1cCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['enabled']
            }] }, { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }, { type: src_app_services_modal_service_service__WEBPACK_IMPORTED_MODULE_2__["ModalServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/model/Account.ts":
/*!**********************************!*\
  !*** ./src/app/model/Account.ts ***!
  \**********************************/
/*! exports provided: Account, Token */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
class Account {
}
class Token {
}


/***/ }),

/***/ "./src/app/model/Test.ts":
/*!*******************************!*\
  !*** ./src/app/model/Test.ts ***!
  \*******************************/
/*! exports provided: SheetList, QuestionList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetList", function() { return SheetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionList", function() { return QuestionList; });
let SheetList = [
    { SheetNbr: 1, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565666229.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 1 },
    { SheetNbr: 2, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565681258.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 2 },
    { SheetNbr: 3, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565773137.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 3 },
    { SheetNbr: 4, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565773535.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 3 },
    { SheetNbr: 5, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565773953.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 3 },
    { SheetNbr: 6, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565774381.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 3 },
    { SheetNbr: 7, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565775166.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 3 },
    { SheetNbr: 8, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565775628.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 3 },
    { SheetNbr: 9, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565776270.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 3 },
    { SheetNbr: 10, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565776646.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 3 },
    { SheetNbr: 11, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565776990.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 3 },
    { SheetNbr: 12, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565777495.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 3 },
    { SheetNbr: 13, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565943903.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 4 },
    { SheetNbr: 14, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565944629.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 4 },
    { SheetNbr: 15, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565946314.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 4 },
    { SheetNbr: 16, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565946725.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 4 },
    { SheetNbr: 17, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565947401.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 4 },
    { SheetNbr: 18, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565948172.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 4 },
    { SheetNbr: 19, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565948562.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 4 },
    { SheetNbr: 20, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565948768.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 4 },
    { SheetNbr: 21, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565949353.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 4 },
    { SheetNbr: 22, ContentSrc: "https://toeic24.net/upload/audio/1565665795/1565949977.mp3", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 4 },
    { SheetNbr: 23, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "", Part: 5 },
    { SheetNbr: 24, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "<p><strong>Fly Away Airlines<br />Newforth Business Park&nbsp;<br />Minneapolis, MN, 27726</strong></p><p>Dear Sr or Madam,</p><p>I am sending this letter of&nbsp;__(1)__  because of the service I received while traveling on your fight 770 from&nbsp;Minneapolis to New York on the 19th of September 2007.</p><p>I requested a diabetic meal through your webske, and&nbsp;confirmed this when I checked in for the flight. However, when the meals were served on board, I was told that&nbsp;there was no diabetic meal requested. I had to ask four&nbsp;times, and become quite __(2)__ before the cabin&nbsp;crew would search for the meal which I had reason to&nbsp;believe was there. Mistakes may happen, but this seemed&nbsp;like unnecessary rudeness.</p><p>You can understand my concem, I&#39;m sure, because eating&nbsp;regular meals, made up of the right foods, is __(3)__&nbsp;for&nbsp;managing this illness. Regrettably, I&#39;m not sure that I&nbsp;would feel&nbsp;confident traveling with you in the future.</p><p>Sincerely,&nbsp;<br />John Baker<br /></p>", Part: 6 },
    { SheetNbr: 25, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "<p>More than &pound;160m will be spent on music and video downloads in the UK this year, according to a __(1)__</p><p>Market analysts predict that digital downloads will be worth &pound;163m in 2008 - up 45.5% on last year. And digital spending will continue to __(2)__ , reaching &pound;600m a year by 2012,&nbsp;according to the UK Music and Video Retailers 2008 report.&nbsp;</p>", Part: 6 },
    { SheetNbr: 26, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "<p><strong>MEMO<br />TO: All Staff<br />FROM: Management<br />April 4&nbsp;</strong></p><p>As you know, we are expecting a visit from health inspectors this week. I would like to remind you __(1)__ the importance for our restaurant to avoid any problems with the health inspection. It is essential that you carry out your usual cleaning and sanitation&nbsp;procedures with the uppermost care this week. Do not take __(2)__&nbsp; &nbsp;</p><p>I would particularly like to remind staff to check on he storage of meat products. Make __(3)__ meats&nbsp;are kept on the upper shelf in the refrigeration unit, because the temperature is not high enough on the lower shelf.&nbsp;</p><p>Thank you for your cooperation,<br />Lila Thomson<br />Management&nbsp;<br />", Part: 6 },
    { SheetNbr: 27, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "<p><strong>To</strong>: Mark Ackerman - <a href='/cdn-cgi/l/email-protection' class='__cf_email__' data-cfemail='226349475062454e4d40434e4c47560c414d4f'>[email&#160;protected]</a><br /><strong>From</strong>: Deborah Leach - <a href='/cdn-cgi/l/email-protection' class='__cf_email__' data-cfemail='026e6763616a66426360612c616d'>[email&#160;protected]</a><br /><strong>Subject</strong>: PARKING LOT REFURBISHMENT<br /><strong>Cc</strong>: C.C. Summers - <a href='/cdn-cgi/l/email-protection' class='__cf_email__' data-cfemail='93e0e6fefef0d3f2f1f0bdf0fc'>[email&#160;protected]</a><br />Erin Young - <a href='/cdn-cgi/l/email-protection' class='__cf_email__' data-cfemail='6d14021803082d0c0f0e430e02'>[email&#160;protected]</a><br /><strong>Date</strong>: 2 June, 2007 14:12:25&nbsp;</p><p>Dear Mr. Ackerman,<br />This Is to inform you that we have carefully __(1)__ your estimate for the parking lot refurbishing. We are planning to contract with you for this work.&nbsp;</p><p>We are unable to let this contract immediately however, as final approval of expenditures of this nature must come from the head office in New York.&nbsp;</p><p>We expect to receive approval or disapproval __(2)__ the next 30 days. At such time, we will contact you with instructions accordingly</p><p>If we may be of any assistance in the meantime please feel free __(3)__ this office.<br />Sincerely,<br />Deborah Leach, Secretary<br />ABC Stationers<br />Denver, Colorado<br />Tel: 605 885 5624&nbsp;<br />&nbsp;</p>", Part: 6 },
    { SheetNbr: 28, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "<p style='text-align:center'><strong>Anthony&#39;s Pier</strong></p><p>The world-famous <em>Anthony&#39;s Pier</em> has become synonymous with fine seafood, tasty American dishes and spectacular views of the harbor and the city skyline. Established by Anthony Athanas in 1963, <em>Anthony&#39;s Pier</em> is one of four in the family of Athanas restaurants. A trolley service is provided for dinner customers heading off to the FleetBoston Pavilion Concerts.<br /><em>Full bar, private dining room, reservations recommended.</em></p><p><strong>140 Northern Avenue<br />Boston, MA 02210<br />Phone: 617-482-6262<br />Fax: 617-426-2324<br />http://www.pier4.com</strong></p><p>OPEN: Sunday 12pm-10pm (Dinner All Day); Monday-Thursday 11:30am-10:00pm; Friday and Saturday 11:30am-11:00pm.<br /><em>Dress is Smart Casual</em><br />&nbsp;</p>", Part: 7 },
    { SheetNbr: 30, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "<p style='text-align:center'><strong>FLORIDA STATE UNIVERSITY<br />CAREER SERVICES</strong></p><p style='text-align:justify'>Join us at a CAREER EXPO to be held on Wednesday, October 2nd, between the hours of 10am and 7pm at the Holiday Inn, 3535</p><p style='text-align:justify'>Ulmerton Road, Clearwater, Florida 33762. For more information contact Cheryl&nbsp;Thomson in the Career Office. Tel: 286 331 3476</p>", Part: 7 },
    { SheetNbr: 39, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "<p style='text-align:center'><strong>LOST&nbsp;</strong></p><p>A lady&#39;s silver Timex watch with a silver band.&nbsp;RC is inscribed on the band. It was possibly lost in the ladies&#39; toilet on floor three, on Monday the 24th June. If found, please turn in to reception</p>", Part: 7 },
    { SheetNbr: 40, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "<p style='text-align:justify'><strong>STATE STREET BRANCH ATM</strong><br />10/09/06 09:43</p><p style='text-align:justify'>Withdrawal from checking<br />Account # 448957600008<br />$ 100.00</p><p style='text-align:justify'>Balance $ 2,054.54</p><p style='text-align:justify'>Available balance $ 1,054.54</p>", Part: 7 },
    { SheetNbr: 29, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "<table border='1' cellpadding='1' cellspacing='1' style='width:100%'><tbody><tr><td><p style='text-align:center'><strong>XHTML COURSE by IT SOLUTIONS</strong></p><p style='margin-left:10px; margin-right:10px; text-align:justify'>XHTML is the next version of HTML. This class will teach all the same concepts as the HTML 101 course, but focused on valid and well-formed XHTML.<br />After you finish this free course, you will understand the basics of XHTML, and some more advanced topics. With interactive lessons and the option to work with other people in the course, you&#39;ll be able to learn HTML the way you want. Go at your own pace, or follow along with the weekly syllabus.<br />The class will cover:</p><ul><li><p style='margin-left:10px; margin-right:10px; text-align:justify'>the differences between XHTML and HTML</p></li><li><p style='margin-left:10px; margin-right:10px; text-align:justify'>text manipulation</p></li><li><p style='margin-left:10px; margin-right:10px; text-align:justify'>an overview of forms</p></li><li><p style='margin-left:10px; margin-right:10px; text-align:justify'>basic XHTML</p></li><li><p style='margin-left:10px; margin-right:10px; text-align:justify'>lists, images, tables and frames</p></li></ul><p style='margin-left:10px; margin-right:10px; text-align:justify'>At the end of the class, those students who pass a skills test demonstrating their knowledge will receive a certificate marking their successful completion of the course.</p></td></tr></tbody></table><p>&nbsp;</p><table border='1' cellpadding='1' cellspacing='1' style='width:100%'><tbody><tr><td><p style='margin-left:10px; margin-right:10px; text-align:justify'>Hi Josephine,</p><p style='margin-left:10px; margin-right:10px; text-align:justify'>I just stumbled upon this website, and I thought of you because of our conversation last week, when you said your boss wants you to make a website for the business, but you had no idea what to do. This course sounds perfect - and it&#39; s free too! Actually, I remember my friend Tom did this course a while back and was very happy with it. The only thing he mentioned was that you can&#39;t change your e-mail address for the whole 11 weeks of the course, or you might have problems!</p><p style='margin-left:10px; margin-right:10px; text-align:justify'>I hope it&#39;s useful for you!<br />Keep in touch,<br />Alistair</p></td></tr></tbody></table>", Part: 7 },
    { SheetNbr: 31, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "<p class='text-justify'><b>Question 163 - 164 refer to following paragraph:</b></p><hr><p style='text-align:center'><strong>Hot Appetizers</strong></p><p>Basket Of Cheesy Garlic Bread with side of Marinara Sauce .......... <strong>$ 4.25</strong><br />Fried Mozzarella Loaf with side of Marinara Sauce. NOT frozen sticks&nbsp;.......... <strong>$ 6.25</strong><br />Potato Croquette&nbsp;.......... <strong>$ 4.25</strong><br />Rice Ball made with Meatball, three Cheeses &amp; Peas&nbsp;.......... <strong>$ 1.50</strong><br />Italian Sausage 2 links of Joe&#39;s homemade New York Hot or Sweet sausage&nbsp;.......... <strong>$ 5.00</strong><br />Meatballs 2 Meatballs of my Grandma&#39;s recipe still made by Dad&nbsp;..........&nbsp;<strong>$&nbsp;5.50</strong></p><p><em>Indicates vegetarian dishes</em></p>", Part: 7 },
    { SheetNbr: 32, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "<table border='1' cellpadding='1' cellspacing='1' style='width:100%'><tbody><tr><td><p style='margin-left:10px; margin-right:10px; text-align:justify'>To: Terry Morrison<br />From: Mabel Johansson, Events Coordinator<br />Date: 17 October, 2007 13:05:47</p><p style='margin-left:10px; margin-right:10px; text-align:justify'>Hello Terry,<br />I was very relieved to hear that you witl be available&nbsp;to help with registration activities at the conference. We were in bit of a panic!<br />We need someone for Monday and Tuesday, just to sit&nbsp;the registration desk, and answer questions, and pass out the orientation packets to the delegates as they arrive. l&#39;ve attached the schedule for the relevant days, so you can have a look at the&nbsp;times.</p><p style='margin-left:10px; margin-right:10px; text-align:justify'>Do let me know that you&#39;ve&nbsp;received this email and the times are alright for you.<br />Thanks ever so much!</p><p style='margin-left:10px; margin-right:10px; text-align:justify'>Regards,<br />Mabel</p></td></tr></tbody></table><p>&nbsp;</p><table border='1' cellpadding='1' cellspacing='1' style='width:100%'><tbody><tr><td><p style='text-align:center'><strong>MOBILE TECHNOLOGY CONFERENCE</strong></p><ul><li style='text-align: justify;'>Early Registration Opens Monday, October 22, 2007 ........ 7:30 AM - 5:00 PM</li><li style='text-align: justify;'>DAY ONE Tuesday, October 23, 2007 Registration Hours ........ 8:00 AM - 10:00 AM</li><li style='text-align: justify;'>Morning Technical Sessions ........ 10:15 AM - 12:00 PM</li><li style='text-align: justify;'>Lunch ........ 12:00 PM - 1:00 PM</li><li style='text-align: justify;'>Keynote Plenary Session ........ 1:00 - 3:00 PM</li><li style='text-align: justify;'>Exhibit Hall Open ........ 2:00 PM - 5:00 PM&nbsp;</li><li style='text-align: justify;'>Afternoon Technical Sessions ........ 4:30 PM - 7:00 PM</li></ul></td></tr></tbody></table><p>&nbsp;</p>", Part: 7 },
    { SheetNbr: 33, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "<p style='text-align:center'><strong>Republicans Clash Over Tax Cuts</strong></p><p style='text-align:justify'>Republican party presidential candidates, Mr. Giuliani and Mr. Romney, argued over their tax and spending policies, The clashes took place during a televised debate in Michigan.</p><p style='text-align:justify'>The ex-New York mayor and the former Massachusetts governor each claimed to be more committed to lowering taxes, as they competed for conservative support.</p><p style='text-align:justify'>The clash between Mr. Giuliani and Mr. Romney began when the Republican front-runners were asked to discuss their differences over economic issues.<br />&nbsp;</p>", Part: 7 },
    { SheetNbr: 35, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "<p style='text-align:justify'><strong>MEMO</strong></p><p style='text-align:justify'><strong>To: </strong>Jerry Wilson, CEO<br /><strong>From:</strong> MaryAnn Tyler, Director<br /><strong>Subject: </strong>Urgent change of plans<br /><strong>Date: </strong>14 May 2007</p><p style='text-align:justify'>Jerry, call me as soon as you have read the attached report.<br />We need to implement the new product marketing plan sooner than discussed at our last meeting, because Alpha Inc,&nbsp;now has a similar one set to launch in July. Call me right away.</p><p style='text-align:justify'>Regards,<br />MaryAnn<br />&nbsp;</p>", Part: 7 },
    { SheetNbr: 34, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "<p style='text-align:justify'><strong>From:</strong> &quot;Mark Wilson&quot; &lt; <a href='/cdn-cgi/l/email-protection' class='__cf_email__' data-cfemail='c3aeedb4aaafb0acad83b1a4'>[email&#160;protected]</a>_inc.org&nbsp;&gt;<br /><strong>To:</strong> Anna Ardy &lt; <a href='/cdn-cgi/l/email-protection' class='__cf_email__' data-cfemail='b9d897d8cbddc0f9cbde'>[email&#160;protected]</a>_inc.org &gt;<br /><strong>Cc:</strong> &quot;Jason Johnson&quot; &lt; <a href='/cdn-cgi/l/email-protection' class='__cf_email__' data-cfemail='c5afebafaaadabb6aaab85b7a2'>[email&#160;protected]</a>_inc.org &gt;, &quot;Bill Stewart&quot; &lt; <a href='/cdn-cgi/l/email-protection' class='__cf_email__' data-cfemail='c695b2a3b1a7f1fe86a1a4b0e8a1a9b0'>[email&#160;protected]</a> &gt;, &quot;Maria White&quot; &lt; <a href='/cdn-cgi/l/email-protection' class='__cf_email__' data-cfemail='f499da839c9d8091b48693'>[email&#160;protected]</a>_inc.org&nbsp;&gt;, &quot;Jodie Forest&quot; &lt; <a href='/cdn-cgi/l/email-protection' class='__cf_email__' data-cfemail='741e5a121b06110700340613'>[email&#160;protected]</a>_incorg &gt;<br /><strong>Subject:</strong> PR committee meeting - Thursday, 12th November<br /><strong>Date:</strong> Monday, 9th November 09.04:47</p><p style='text-align:justify'>Just a reminder to everyone that we are holding our Public Relations Committee meeting this Thursday.</p><p style='text-align:justify'>It is due to Start at 9:30 sharp, with Mr. Stewart kindly visiting to give a presentation on the new advertising regulations that have just passed, so this should save all of us some time and confusion. Also, would those of you who have had projects finished this month please be prepared to give a quick presentation on the outcome.</p><p style='text-align:justify'>Thanks, and I look forward to seeing you at the meeting.<br />Mark Wilson<br />&nbsp;</p>", Part: 7 },
    { SheetNbr: 36, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "<table border='1' cellpadding='1' cellspacing='1' style='width:100%'><tbody><tr><td><p style='margin-left:10px; margin-right:10px; text-align:justify'><strong>Mr. Timothy York<br />42 Chadwick Street, 2F3<br />London, SW1P 2EP<br />18 January 2008</strong></p><p style='margin-left:10px; margin-right:10px; text-align:justify'>We have received your claim for damages to your car sustained on 29 Dec 2007. However, we require a few other pieces of documentation, to process the claim. We need a police report to determine fault in accident claims, and request that you send us this document. Were police present at the accident scene? If police were not involved we will need a form 77RH from you.</p><p style='margin-left:10px; margin-right:10px; text-align:justify'>In this situation the claim process becomes more complicated and it is at our discretion whether we can accept your claim.</p><p style='margin-left:10px; margin-right:10px; text-align:justify'>I am the officer at Drive Right Insurance that will be handling your claim, and I have included my business card with contact details. If you<br />have any questions or need a copy of the 77 RH form, please contact me directly.</p><p style='margin-left:10px; margin-right:10px; text-align:justify'>Regards,<br />Mr. Tyler Bancroft</p></td></tr></tbody></table><p>&nbsp;</p><table border='1' cellpadding='1' cellspacing='1' style='width:100%'><tbody><tr><td><p style='margin-left:10px; margin-right:10px'><strong>Mr. Tyler Bancroft, MA</strong></p><p style='margin-left:10px; margin-right:10px'><em>Claims Appraiser</em><br />Driver Right Insurance Co</p><p style='margin-left:10px; margin-right:10px'><strong>Mob:</strong> 778 4446 6925<br /><strong>Tel:</strong> 020 7429 8759<br /><strong>Fax:</strong> 020 7429 8755<br /><strong>Email:</strong> <a href='/cdn-cgi/l/email-protection' class='__cf_email__' data-cfemail='aeeccfc0cddcc1c8daeeeadcc7d8cbfcc7c9c6da80cdc180dbc5'>[email&#160;protected]</a></p></td></tr></tbody></table>", Part: 7 },
    { SheetNbr: 37, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "<p style='text-align:center'><strong>FOR RENT</strong></p>   <p style='text-align:justify'>5th floor studio apartment in the Clearwater area. Newly refurbished, wood floors, large windows, excellent views. Utilities included. No smoking, or pets. Two month&#39;s rent plus deposit required for the first payment. $500 per month.&nbsp;<em>Call Louisa after 5pm on 224 352 2254</em></p>", Part: 7 },
    { SheetNbr: 41, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "<p style='text-align:justify'><strong>Organization:</strong> UNESCO<br /><strong>Job type:</strong> Science and Technology<br /><strong>Job reference:</strong> EU/TP/ITA/SC/0822<br /><strong>Apply:</strong> <u>Click here</u></p><p style='text-align:justify'><strong>Job offer description:</strong> Research Scientist<br /><strong>City:</strong>&nbsp;Trieste<br /><strong>Country:</strong> ITALY</p><p style='text-align:justify'><strong>Responsibilities</strong><br /><strong>Research:</strong> To undertake front-line research in the areas of Mathematics, specifically, probability (pure or/and applied) or dynamical systems.</p><p style='text-align:justify'><strong>Qualifications</strong><br /><strong>Education:</strong><br />Ph.D. or equivalent doctoral level in Mathematics.<br /><strong>Experience</strong>:<br />At least 5 years of research experience at an international level after completion Of Ph.D.<br /><strong>Languages:</strong><br />Excellent knowledge of written and spoken English.<br /><strong>Others:</strong><br />A positive attitude towards the international and multicultural characteristics of the assignment.<br />&nbsp;</p>", Part: 7 },
    { SheetNbr: 42, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "<p style='text-align:center'><strong>PRINCE CHARLES CINEMA</strong></p><p><strong>TODAY&#39;S FILMS:</strong> Tuesday, October 16<br />1:00pm -&nbsp;Zodiac<br />4:05pm - Breach<br />6:30pm - Manufacturing Dissent<br />8:20pm - Transformers</p><p><strong>STARTUBG NEXT WEEK</strong><br />3:10 To Yuma<br />A Mighty Heart<br />Hatchet<br />The Lives Of Others<br />Shoot &#39;Em Up</p><p><strong>Staff Choice:&nbsp;<em>The lives of Others</em><br />Staff Choice this week is by Natalie, who has reviewed<br />Academy Award winning<em> The Lives of Others</em><br />It&#39;s a gripping look behind the iron curtain at Soviet East Berlin - well worth a watch. Catch <em>The Lives of Others</em> at the Prince Charles Cinema now</strong></p>", Part: 7 },
    { SheetNbr: 43, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "<p style='text-align:center'><strong>PHYSICAL DEMANDS:</strong></p><p style='text-align:justify'>The physical demands described here are representative of those that must be met by an employee to successfully perform the essential functions of this job. Reasonable accommodations may be made to enable individuals with disabilities to perform the essential functions.</p><p style='text-align:justify'>While performing the duties of this job, the employee is regularly required to actively listen and communicate with supervisors, peers and customers.</p><p style='text-align:justify'>The employee must be capable of sitting and driving for extended periods of time depending on the geographic size of the service area.</p><p style='text-align:justify'>The employee will consistently be required to work from high places such as roofs, ceilings, ladders, as well as from crawl spaces and other limited spaces within and outside of homes and businesses.</p><p style='text-align:justify'>The employee must be able to safely move and lift materials and equipment weighing up to 25 pounds on a routine basis, and on limited occasions up to 50 pounds without assistance.</p>", Part: 7 },
    { SheetNbr: 38, ContentSrc: "", ExamCode: "TOEIC12112021", InnerHTMLContent: "<table border='1' cellpadding='1' cellspacing='1' style='width:100%'><tbody><tr><td><p style='text-align:center'><strong>DEPARTMENTAL EMERGENCY ALARMS</strong></p><p style='margin-left:10px; margin-right:10px; text-align:justify'>IN THE EVENT OF AN ACCIDENT OR EMERGENCY WITHIN THE DEPERTMENT THERE ARE THREE ALARMS THAT MAY BE HEARD: KLAXON HORN CONTINUOUS BELL, OR INTERMITTENT BELL</p><p style='margin-left:10px; margin-right:10px; text-align:justify'><strong>1. A KLAXON HORN INDICATES A LABORATORY ALARM HAS BEEN ACTIVATED</strong></p><ul><li style='text-align:justify'>Trained staff will respond to this alarm during normal working hours</li><li style='text-align:justify'>If this larm should sound outside of normal working hours, or persist for any period you are obliged to investigate its cause</li></ul><p style='margin-left:10px; margin-right:10px; text-align:justify'><strong>2. A CONTINUOUSLY SOUNDING FIRE BELL</strong></p><ul><li style='text-align:justify'>In normal working hours all staff are expected to follow the emergency procedures detailed in the safety regulations</li></ul><p style='margin-left:10px; margin-right:10px; text-align:justify'><strong>3. LIFT INTERMITTENT BELL</strong></p><ul><li style='text-align:justify'>Local to lift only. In normal working hours inform the General Office on level 4 of Building J13</li></ul></td></tr></tbody></table><p>&nbsp;</p><table border='1' cellpadding='1' cellspacing='1' style='width:100%'><tbody><tr><td><p style='text-align:center'><strong>MEMORANDUM</strong></p><p style='margin-left:10px; margin-right:10px; text-align:justify'><strong>To:</strong> All embloyees<br /><strong>From:</strong> Management</p><p style='margin-left:10px; margin-right:10px; text-align:justify'>Following on from the uncertainty&nbsp;experienced last week over procedures to carry out when an alarm&nbsp;is&nbsp;heard, the attached document outlines the different alarms and the actions that need to be taken, when they are sounded.</p><p style='margin-left:10px; margin-right:10px; text-align:justify'>Please&nbsp;make yourself familiar with it,</p><p style='margin-left:10px; margin-right:10px; text-align:justify'>Remember&nbsp;however: BEFORE YOU&nbsp;INVESTIGATE THE SOURCE OF ANY PROBLEM, RING and INFORM SECURITY -&nbsp;Phone No. 13333.</p><p style='margin-left:10px; margin-right:10px; text-align:justify'>Give them the following&nbsp;information:<br />YOUR NAME ....<br />THE TYPE OF ALARM ....<br />THE ACTION YOU INTEND TO TAKE ....</p></td></tr></tbody></table>", Part: 7 }
];
let QuestionList = [
    { PartNo: 1, SheetNo: 1, QuestionNumber: 1, SortOrder: 1, QuestionContent: "https://toeic24.net/upload/img/resized/1565666361.png", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "D", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 1, SheetNo: 1, QuestionNumber: 2, SortOrder: 2, QuestionContent: "https://toeic24.net/upload/img/resized/1565666497.png", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "D", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 1, SheetNo: 1, QuestionNumber: 3, SortOrder: 3, QuestionContent: "https://toeic24.net/upload/img/resized/1565666670.png", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "D", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 1, SheetNo: 1, QuestionNumber: 4, SortOrder: 4, QuestionContent: "https://toeic24.net/upload/img/resized/1565666791.png", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "D", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 1, SheetNo: 1, QuestionNumber: 5, SortOrder: 5, QuestionContent: "https://toeic24.net/upload/img/resized/1565666877.png", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "D", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 1, SheetNo: 1, QuestionNumber: 6, SortOrder: 6, QuestionContent: "https://toeic24.net/upload/img/resized/1565666959.png", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "D", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 1, SheetNo: 1, QuestionNumber: 7, SortOrder: 7, QuestionContent: "https://toeic24.net/upload/img/resized/1565667023.png", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "D", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 1, SheetNo: 1, QuestionNumber: 8, SortOrder: 8, QuestionContent: "https://toeic24.net/upload/img/resized/1565667104.png", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "D", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 1, SheetNo: 1, QuestionNumber: 9, SortOrder: 9, QuestionContent: "https://toeic24.net/upload/img/resized/1565667173.png", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "D", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 1, SheetNo: 1, QuestionNumber: 10, SortOrder: 10, QuestionContent: "https://toeic24.net/upload/img/resized/1565667386.png", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "D", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 171, SortOrder: 171, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 172, SortOrder: 172, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 173, SortOrder: 173, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 174, SortOrder: 174, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 175, SortOrder: 175, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 176, SortOrder: 176, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 177, SortOrder: 177, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 178, SortOrder: 178, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 179, SortOrder: 179, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 180, SortOrder: 180, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 181, SortOrder: 181, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 182, SortOrder: 182, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 183, SortOrder: 183, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 184, SortOrder: 184, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 185, SortOrder: 185, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 186, SortOrder: 186, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 187, SortOrder: 187, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 188, SortOrder: 188, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 189, SortOrder: 189, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 190, SortOrder: 190, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 191, SortOrder: 191, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 192, SortOrder: 192, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 193, SortOrder: 193, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 194, SortOrder: 194, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 195, SortOrder: 195, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 196, SortOrder: 196, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 197, SortOrder: 197, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 198, SortOrder: 198, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 199, SortOrder: 199, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 2, SheetNo: 2, QuestionNumber: 200, SortOrder: 200, QuestionContent: "", AnswerA: "A", AnswerB: "B", AnswerC: "C", AnswerD: "", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 3, SheetNo: 3, QuestionNumber: 11, SortOrder: 11, QuestionContent: "What is the reason for the traffic on 35E?", AnswerA: "an accident", AnswerB: "bad weather", AnswerC: "rush hour", AnswerD: "roadworks", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 3, SheetNo: 3, QuestionNumber: 12, SortOrder: 12, QuestionContent: "What is at fault for the woman's nervousness?", AnswerA: "not knowing the material", AnswerB: "psychological obstacles", AnswerC: "pressure from other people", AnswerD: "her stutter", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 3, SheetNo: 3, QuestionNumber: 13, SortOrder: 13, QuestionContent: "What, according to the man, is the most important part of the presentation?", AnswerA: "its substance", AnswerB: "its delivery", AnswerC: "its comprehensibility", AnswerD: "its flow", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 3, SheetNo: 4, QuestionNumber: 14, SortOrder: 14, QuestionContent: "Why does the man want to find Meredith?", AnswerA: "to talk about their meeting tonight", AnswerB: "to prepare her on the Knight file", AnswerC: "to get a file he needs", AnswerD: "to make sure she is prepare for tonight", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 3, SheetNo: 4, QuestionNumber: 15, SortOrder: 15, QuestionContent: "What is the man upset about?", AnswerA: "his tendency to postpone things", AnswerB: "Meredith's irresponsibility", AnswerC: "the content of the meeting", AnswerD: "Joan's inability to help him", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 3, SheetNo: 4, QuestionNumber: 16, SortOrder: 16, QuestionContent: "What will the man probably do at the meeting tonight?", AnswerA: "improvise it", AnswerB: "ask to reschedule", AnswerC: "not attend", AnswerD: "lead it", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 3, SheetNo: 5, QuestionNumber: 17, SortOrder: 17, QuestionContent: "What effect did the interviewer have on the man?", AnswerA: "He made him feel arrogant", AnswerB: "He encouraged him", AnswerC: "He took advantage of him", AnswerD: "He unnerved him", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 3, SheetNo: 5, QuestionNumber: 18, SortOrder: 18, QuestionContent: "What, besides the interview, could help the man get the job?", AnswerA: "his past career experience", AnswerB: "his performance today", AnswerC: "his grades in school", AnswerD: "his motivation to be the best", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 3, SheetNo: 5, QuestionNumber: 19, SortOrder: 19, QuestionContent: "What is the woman's opinion?", AnswerA: "The decision to hire him for the job depends on many factors", AnswerB: "He should have shown that he is self-confident", AnswerC: "The interviewer was nice but strict", AnswerD: "His employment depends solely on the interviewer's opinion", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 3, SheetNo: 6, QuestionNumber: 20, SortOrder: 20, QuestionContent: "Where are the two individuals?", AnswerA: "their gate", AnswerB: "the security line", AnswerC: "the baggage claim area", AnswerD: "the convention center", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 3, SheetNo: 6, QuestionNumber: 21, SortOrder: 21, QuestionContent: "Why are they going to get coffee?", AnswerA: "They need caffeine to stay awake", AnswerB: "Their belongings will arrive in three hours", AnswerC: "To avoid the swarm of people", AnswerD: "They can't leave for another three hours", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 3, SheetNo: 6, QuestionNumber: 22, SortOrder: 22, QuestionContent: "Why does he want to pay for the coffee?", AnswerA: "She paid last time", AnswerB: "She drove him to the airport", AnswerC: "She wants to pay on the way back", AnswerD: "It was her idea", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 3, SheetNo: 7, QuestionNumber: 23, SortOrder: 23, QuestionContent: "Who referred the woman to Dr. Evans?", AnswerA: "a co-worker", AnswerB: "a doctor", AnswerC: "the man", AnswerD: "her psychologist", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 3, SheetNo: 7, QuestionNumber: 24, SortOrder: 24, QuestionContent: "Why does the woman want to be Dr. Evans' patient?", AnswerA: "She wants some herbs", AnswerB: "She inefficient at work", AnswerC: "She can't sleep at night", AnswerD: "She has a food disorder", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 3, SheetNo: 7, QuestionNumber: 25, SortOrder: 25, QuestionContent: "When will she actually see Dr. Evans?", AnswerA: "two weeks from Thursday", AnswerB: "today", AnswerC: "in half an hour", AnswerD: "Friday", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 3, SheetNo: 8, QuestionNumber: 26, SortOrder: 26, QuestionContent: "According to the man, what is unique about the woman?", AnswerA: "She works 14 hours", AnswerB: "She loves a long day of work", AnswerC: "She leaves for work day", AnswerD: "She likes her work", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 3, SheetNo: 8, QuestionNumber: 27, SortOrder: 27, QuestionContent: "What does going to the Calvin Klein meeting probably mean for the woman?", AnswerA: "A new client for her to work with", AnswerB: "a chance to work in different department", AnswerC: "she could be promoted at some point", AnswerD: "she could work for Calvin Klein", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 3, SheetNo: 8, QuestionNumber: 28, SortOrder: 28, QuestionContent: "Why did the boss order a lot of a particular design?", AnswerA: "She values the woman's opinion", AnswerB: "The Calvin Klein reps suggested it", AnswerC: "They are sampling a new clothing line", AnswerD: "The woman designed it herself", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 3, SheetNo: 9, QuestionNumber: 29, SortOrder: 29, QuestionContent: "Why is it acceptable for Ed to leave at 3:30?", AnswerA: "He already put in a full day", AnswerB: "He is allowed to work half days when he wants", AnswerC: "He is his own boss", AnswerD: "His boss changed his schedule", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 3, SheetNo: 9, QuestionNumber: 30, SortOrder: 30, QuestionContent: "What does the woman admire about the man?", AnswerA: "his bravery to leave work early", AnswerB: "how he puts family first", AnswerC: "his ability to wake up so early all the time", AnswerD: "his ability to succeed in various aspects of life", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 3, SheetNo: 9, QuestionNumber: 31, SortOrder: 31, QuestionContent: "How does the man reassure the woman?", AnswerA: "He tells her his life is not for everyone", AnswerB: "He recounts his past successes", AnswerC: "He tell her it's possible to combine work ad leisure", AnswerD: "He says she could do it, too, if she really wanted it", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 3, SheetNo: 10, QuestionNumber: 32, SortOrder: 32, QuestionContent: "Where does this conversation take place?", AnswerA: "over the telephone", AnswerB: "at the woman's house", AnswerC: "at the editor's office", AnswerD: "at a publishing company", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 3, SheetNo: 10, QuestionNumber: 33, SortOrder: 33, QuestionContent: "What has the man gotten used to?", AnswerA: "the stress of deadlines", AnswerB: "non-returned phone calls", AnswerC: "that the woman is often late", AnswerD: "unexpected obstacles in publishing", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 3, SheetNo: 10, QuestionNumber: 34, SortOrder: 34, QuestionContent: "What does the publishing company want to meet with the woman about?", AnswerA: "a novel they want her to write", AnswerB: "publishing a collection of her columns", AnswerC: "her irresponsibility", AnswerD: "her missing their last scheduled meeting", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 3, SheetNo: 11, QuestionNumber: 35, SortOrder: 35, QuestionContent: "Why does the man want to be in advertising?", AnswerA: "because he is inventive and smart", AnswerB: "he was fired from his last job", AnswerC: "he knows he is passionate about it", AnswerD: "it's comparable to accounting", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 3, SheetNo: 11, QuestionNumber: 36, SortOrder: 36, QuestionContent: "According to the woman, why should he get the job at the agency?", AnswerA: "to become creative", AnswerB: "to compare it to his old job", AnswerC: "to get experience", AnswerD: "to add passion to his life", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 3, SheetNo: 11, QuestionNumber: 37, SortOrder: 37, QuestionContent: "What is the man concerned about?", AnswerA: "not excelling", AnswerB: "finding an area that suits him best", AnswerC: "not getting paid for working", AnswerD: "missing his old job", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 3, SheetNo: 12, QuestionNumber: 38, SortOrder: 38, QuestionContent: "What might hinder James's chance at the job?", AnswerA: "his qulifications", AnswerB: "an unfair boss", AnswerC: "not being related to his boss", AnswerD: "Paul being ruthless", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 3, SheetNo: 12, QuestionNumber: 39, SortOrder: 39, QuestionContent: "What does the woman think about Paul?", AnswerA: "He is unqualified", AnswerB: "He will try to persuade Cindy", AnswerC: "He has the advantage", AnswerD: "He is better than James", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 3, SheetNo: 12, QuestionNumber: 40, SortOrder: 40, QuestionContent: "What does the man know about Paul?", AnswerA: "his current emotional state", AnswerB: "that he is related to Cindy", AnswerC: "his level of disappointment", AnswerD: "that he already has the position", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 4, SheetNo: 13, QuestionNumber: 41, SortOrder: 41, QuestionContent: "What might flight cuts result in?", AnswerA: "the selling of the company", AnswerB: "lowered salaries", AnswerC: "being sold to another airline", AnswerD: "a higher ticket selling-price", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 4, SheetNo: 13, QuestionNumber: 42, SortOrder: 42, QuestionContent: "In what year might airlines have experienced the same problem?", AnswerA: "1980", AnswerB: "1994", AnswerC: "1989", AnswerD: "never", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 4, SheetNo: 13, QuestionNumber: 43, SortOrder: 43, QuestionContent: "What will airlines now make an effort to do?", AnswerA: "discourage business travelers", AnswerB: "reduce the number of seats they sell", AnswerC: "sell fewers cheap tickets via the internet", AnswerD: "sell more seats than usual", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 4, SheetNo: 14, QuestionNumber: 44, SortOrder: 44, QuestionContent: "What kind of vehicle could be blocking the entryway?", AnswerA: "shuttle bus", AnswerB: "taxi", AnswerC: "car", AnswerD: "city bus", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 4, SheetNo: 14, QuestionNumber: 45, SortOrder: 45, QuestionContent: "Where is the Ford Taurus allowed to be parked?", AnswerA: "west side parking lot", AnswerB: "off the premises", AnswerC: "a few meters away from where it is now", AnswerD: "south side parking lot", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 4, SheetNo: 14, QuestionNumber: 46, SortOrder: 46, QuestionContent: "What will happen if it is not moved in ten minutes?", AnswerA: "The police will be called", AnswerB: "It will be removed by another vehicle", AnswerC: "The owner will pay a fee", AnswerD: "The entryway will continued to be blocked", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 4, SheetNo: 15, QuestionNumber: 47, SortOrder: 47, QuestionContent: "Besides variety, what else is heralded as being unique about shopping in New Hampshire?", AnswerA: "No tax is added to their purchases", AnswerB: "They sell nationally known name brands", AnswerC: "They specialize in sports equipment", AnswerD: "All stores are old-fashioned", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 4, SheetNo: 15, QuestionNumber: 48, SortOrder: 48, QuestionContent: "What service do many stores provide?", AnswerA: "They help you find exactly what you are looking for", AnswerB: "They will tell you the story behind your purchase", AnswerC: "They giftwrap your purchases for you", AnswerD: "They will send purchases to you", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 4, SheetNo: 15, QuestionNumber: 49, SortOrder: 49, QuestionContent: "What tradition does New Hampshire uphold?", AnswerA: "telling oral stories about their past", AnswerB: "listing their stores by region", AnswerC: "making items that reveal people's souls", AnswerD: "expanding their businesses from their home to workshops", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 4, SheetNo: 16, QuestionNumber: 50, SortOrder: 50, QuestionContent: "Why are haircuts and car repairs mentioned?", AnswerA: "They are being promoted", AnswerB: "They usually provide substandard service", AnswerC: "They are examples of a service", AnswerD: "They are being argued against", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 4, SheetNo: 16, QuestionNumber: 51, SortOrder: 51, QuestionContent: "When can reasonable timing of the service be expected?", AnswerA: "when a time has to be worked out", AnswerB: "in the less complicated services", AnswerC: "when the place providing the service is not busy", AnswerD: "in all cases", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 4, SheetNo: 16, QuestionNumber: 53, SortOrder: 53, QuestionContent: "What is considered as food for our brain?", AnswerA: "oxygen", AnswerB: "cells", AnswerC: "blood", AnswerD: "the food you take in", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 4, SheetNo: 17, QuestionNumber: 54, SortOrder: 54, QuestionContent: "When is the lungs what does the blood give away?", AnswerA: "oxygen", AnswerB: "carbon dioxide", AnswerC: "cells", AnswerD: "air", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 4, SheetNo: 17, QuestionNumber: 52, SortOrder: 52, QuestionContent: "Why is a leaky roof mentioned?", AnswerA: "to illustrate unacceptable substandard service", AnswerB: " to demonstrate how often things go wrong in services", AnswerC: "to show that service will never be perfect", AnswerD: "to show that services often use low quality materials", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 4, SheetNo: 17, QuestionNumber: 55, SortOrder: 55, QuestionContent: "What is the purpose of this text?", AnswerA: "to help patients improve their lives", AnswerB: "to inform doctors on blood diseases", AnswerC: "to help people understand their blood system", AnswerD: "to inform parents about children's blood diseases", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 4, SheetNo: 18, QuestionNumber: 56, SortOrder: 56, QuestionContent: "When was Registration of Business Names Act repealed?", AnswerA: "1916", AnswerB: "1985", AnswerC: "1982", AnswerD: "never", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 4, SheetNo: 18, QuestionNumber: 57, SortOrder: 57, QuestionContent: "What does the Business Names Act allow?", AnswerA: "complete freedom in choosing a name for your business", AnswerB: "for the government to have some say in your business' name", AnswerC: "the right to not tell others the name of your business", AnswerD: "the business to choose its name without government consultation", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 4, SheetNo: 18, QuestionNumber: 58, SortOrder: 58, QuestionContent: "What is the main purpose of the mentioned rules?", AnswerA: "to maintain a variety of business names", AnswerB: "to ensure socially acceptable business names", AnswerC: "to keep the government involved in business life", AnswerD: "to protect people's ownership of names", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 4, SheetNo: 19, QuestionNumber: 59, SortOrder: 59, QuestionContent: "What is NOT a mentioned event at the first modern Olympics?", AnswerA: "pole vaulting", AnswerB: "tennis", AnswerC: "soccer", AnswerD: "gymnastics", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 4, SheetNo: 19, QuestionNumber: 60, SortOrder: 60, QuestionContent: "What was Alfred Hoyos Guttmann's biggest difficulty?", AnswerA: "coming in first", AnswerB: "enduring the cold water", AnswerC: "maintaining a big lead", AnswerD: "swimming along with the current", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 4, SheetNo: 19, QuestionNumber: 61, SortOrder: 61, QuestionContent: "How many individuals participated in the first modern Games?", AnswerA: "13", AnswerB: "less than 300", AnswerC: "300 exactly", AnswerD: "around 300", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 4, SheetNo: 20, QuestionNumber: 62, SortOrder: 62, QuestionContent: "What time do they need to arrive at the airport?", AnswerA: "7:30 sharp", AnswerB: "6:30", AnswerC: "6:00 sharp", AnswerD: "around 6:00", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 4, SheetNo: 20, QuestionNumber: 63, SortOrder: 63, QuestionContent: "Which is NOT a mentioned way they can entertain themselves on the plane?", AnswerA: "walk around", AnswerB: "take a snack", AnswerC: "read a book", AnswerD: "take a nap", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 4, SheetNo: 20, QuestionNumber: 64, SortOrder: 64, QuestionContent: "What is the first thing they will do once they exit the plane?", AnswerA: "get their luggage", AnswerB: "have their passports stamped", AnswerC: "catch a taxi", AnswerD: "go to the baggage claim area", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 4, SheetNo: 21, QuestionNumber: 65, SortOrder: 65, QuestionContent: "How do we learn how to prepare for events such as pain?", AnswerA: "Operant Conditioning", AnswerB: "Classical Conditioning", AnswerC: "Observational Learning", AnswerD: "Modeling", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 4, SheetNo: 21, QuestionNumber: 66, SortOrder: 66, QuestionContent: "What do we learn to avoid through Operant Conditioning?", AnswerA: "repetition", AnswerB: "excessive anticipation", AnswerC: "being mimicked", AnswerD: "unfavorable consequences", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 4, SheetNo: 21, QuestionNumber: 67, SortOrder: 67, QuestionContent: "How are humans classified?", AnswerA: "as being in a higher group than animals", AnswerB: "as being non-imitative", AnswerC: "as a more sophisticated animal", AnswerD: "as immune to modeling", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 4, SheetNo: 22, QuestionNumber: 68, SortOrder: 68, QuestionContent: "What is the family's problem?", AnswerA: "They can't agree on what to pack", AnswerB: "They packed too much", AnswerC: "They aren't allowed to pack much", AnswerD: "They find the luggage rule unfair", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 4, SheetNo: 22, QuestionNumber: 69, SortOrder: 69, QuestionContent: "What form of entertainment will the family bring with them?", AnswerA: "a deck of playing cards", AnswerB: "a laptop", AnswerC: "a camping towel", AnswerD: "handheld games", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 4, SheetNo: 22, QuestionNumber: 70, SortOrder: 70, QuestionContent: "What does the speaker anticipate?", AnswerA: "they won't make the weight cut", AnswerB: "a lesson about their attachment to things", AnswerC: "they'll regret packing so much", AnswerD: "an adventurous ecperience", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 71, SortOrder: 71, QuestionContent: "If you want to have a successful interview you must make a good ____", AnswerA: "impatience", AnswerB: "implication", AnswerC: "impression", AnswerD: "inspiration", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 72, SortOrder: 72, QuestionContent: "Tim was always helpful and cheerful with customers; ____ , he was declared employee of the month", AnswerA: "nevertheless", AnswerB: "therefore", AnswerC: "however", AnswerD: "because", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 73, SortOrder: 73, QuestionContent: "Lea did a ____ job on the advertising campaign; she didn't miss a single detail", AnswerA: "through", AnswerB: "swift", AnswerC: "thorough", AnswerD: "detailing", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 74, SortOrder: 74, QuestionContent: "Maureen gave a talk when ____ the conference last week", AnswerA: "she attended", AnswerB: "was attending", AnswerC: "attended", AnswerD: "she had attended", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 75, SortOrder: 75, QuestionContent: "His first novel was ____ by a story he heard from his grandmother", AnswerA: "acquired", AnswerB: "indicated", AnswerC: "applied", AnswerD: "inspired", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 76, SortOrder: 76, QuestionContent: "One of the main reasons people attend conferences is for the ____ opportunities", AnswerA: "greeting", AnswerB: "partnering", AnswerC: "networking", AnswerD: "programming", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 77, SortOrder: 77, QuestionContent: "____ hard work is important, so it spending time with family and friends", AnswerA: "Since", AnswerB: "Likewise", AnswerC: "In spite", AnswerD: "While", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 78, SortOrder: 78, QuestionContent: "The ____ opinion of the delegates was that the conference was a great success", AnswerA: "collect", AnswerB: "collected", AnswerC: "collective", AnswerD: "collecting", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 79, SortOrder: 79, QuestionContent: "Did you hear that Mr. Richards proposed ____ corporate strategy at the meeting yesterday?", AnswerA: "a whole new", AnswerB: "a new all", AnswerC: "wholly new", AnswerD: "a new wholly", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 80, SortOrder: 80, QuestionContent: "In regard ____ your enquiry, we have no vacancies at this time", AnswerA: "about", AnswerB: "from", AnswerC: "with", AnswerD: "to", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 81, SortOrder: 81, QuestionContent: "Trevor chose to be a lawyer because he likes the ____", AnswerA: "adversity", AnswerB: "struggle", AnswerC: "tribulation", AnswerD: "challenge", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 82, SortOrder: 82, QuestionContent: "All parties were happy with the results of the meeting because it was a ____ situation", AnswerA: "win-win", AnswerB: "no-win", AnswerC: "win-lose", AnswerD: "lose-lose", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 83, SortOrder: 83, QuestionContent: "Some say the light bulb was the most significant ____ in history", AnswerA: "innovation", AnswerB: "inspiration", AnswerC: "implication", AnswerD: "instigation", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 84, SortOrder: 84, QuestionContent: "The goals of the two CEOs were different so it was not easy for them to reach a(n) ____ which they were both happy with", AnswerA: "dialogue", AnswerB: "compromise", AnswerC: "negotiation", AnswerD: "obligation", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 85, SortOrder: 85, QuestionContent: "I thought Louise ____ here this afternoon. Where is she?", AnswerA: "is", AnswerB: "was being", AnswerC: "would be", AnswerD: "will be", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 86, SortOrder: 86, QuestionContent: "After making some changes, both the ____ and the profits of the company increased", AnswerA: "productivity", AnswerB: "producers", AnswerC: "producing", AnswerD: "product", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 87, SortOrder: 87, QuestionContent: "This factory has the ____ to produce 10.000 television sets per year", AnswerA: "skill", AnswerB: "infrastructure", AnswerC: "capacity", AnswerD: "pace", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 88, SortOrder: 88, QuestionContent: " I ____ to inform you that your application for the job has not been successful", AnswerA: "scorn", AnswerB: "hesitate", AnswerC: "regret", AnswerD: "grieve", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 89, SortOrder: 89, QuestionContent: "I would suggest you ____ with personnel before buying the plane ticket", AnswerA: "have checked", AnswerB: "checking", AnswerC: "checked", AnswerD: "check", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 90, SortOrder: 90, QuestionContent: "Leila is ____ ; I know she will rise to the top quickly", AnswerA: "ambitious", AnswerB: "advantageous", AnswerC: "ambiguous", AnswerD: "ambidextrous", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 91, SortOrder: 91, QuestionContent: "After ____ a nice lunch, Bob felt like taking a nap", AnswerA: "has had", AnswerB: "he was having", AnswerC: "having", AnswerD: "he has", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 92, SortOrder: 92, QuestionContent: "Having worked for ten years as an accountant, Tom suffered a ____ and decided to change careers", AnswerA: "breakthrough", AnswerB: "burnout", AnswerC: "breakout", AnswerD: "blackout", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 93, SortOrder: 93, QuestionContent: "Robert is always smiley and ____ when he first meets someone", AnswerA: "cheering", AnswerB: "cheers", AnswerC: "cheerful", AnswerD: "cheer up", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 94, SortOrder: 94, QuestionContent: "It proved to be Lisa's big ____ when her photographs were discovered by the advertising agency", AnswerA: "bounce", AnswerB: "benefit", AnswerC: "break", AnswerD: "bomb", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 95, SortOrder: 95, QuestionContent: "I specifically asked you ____ here by 8am! What is your excuse this time?", AnswerA: "to be", AnswerB: "would be", AnswerC: "are", AnswerD: "being", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 96, SortOrder: 96, QuestionContent: "The security guard was made ____ when the bank installed a high tech new alarm system", AnswerA: "reduntant", AnswerB: "surplus", AnswerC: "excessive", AnswerD: "retiree", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 97, SortOrder: 97, QuestionContent: "Jennifer was one of only three candidates ____ for an interview", AnswerA: "offered", AnswerB: "employed", AnswerC: "invited", AnswerD: "hired", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 98, SortOrder: 98, QuestionContent: " The first aid seminar is ____ ; you must attend", AnswerA: "obligated", AnswerB: "obligation", AnswerC: "obligatory", AnswerD: "obliging", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 99, SortOrder: 99, QuestionContent: "Alexander is a superb architect but his ____ are rather high so we gave the job to someone else", AnswerA: "salary", AnswerB: "costs", AnswerC: "dues", AnswerD: "fees", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 100, SortOrder: 100, QuestionContent: "It was ____ of Judy to quit her job because she will probably be sorry later", AnswerA: "rash", AnswerB: "negligent", AnswerC: "handy", AnswerD: "inconsiderate", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 101, SortOrder: 101, QuestionContent: "In the long term, property can be an excellent ____", AnswerA: "purchase", AnswerB: "investment", AnswerC: "inclination", AnswerD: "profit", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 102, SortOrder: 102, QuestionContent: " If ____ Bob nor Julie have the file it must truly be lost", AnswerA: "neither", AnswerB: "either", AnswerC: "rather", AnswerD: "other", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 103, SortOrder: 103, QuestionContent: "The theory supply and demand is ____ to our business strategy", AnswerA: "neutral", AnswerB: "central", AnswerC: "subsequent", AnswerD: "excessive", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 104, SortOrder: 104, QuestionContent: "I hope by this next week the whole project ____", AnswerA: "completes", AnswerB: "will complete", AnswerC: "is completed", AnswerD: "will be completed", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 105, SortOrder: 105, QuestionContent: "We had to call in an expert because the manual for the new software made no ____", AnswerA: "sense", AnswerB: "nonsense", AnswerC: "logic", AnswerD: "use", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 106, SortOrder: 106, QuestionContent: " It is critical that you are ____ time for the flight", AnswerA: "at the", AnswerB: "on", AnswerC: "by the", AnswerD: "with", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 107, SortOrder: 107, QuestionContent: "Did Mrs. Smith ____ anything about the new client?", AnswerA: "mention", AnswerB: "argue", AnswerC: "discuss", AnswerD: "reason", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 108, SortOrder: 108, QuestionContent: "Would you ____ working with Chemco even though they manufacture pesticides?", AnswerA: "contradict", AnswerB: "condescend", AnswerC: "condent", AnswerD: "consider", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 109, SortOrder: 109, QuestionContent: "You ____ take the bills to the post office; I'll do it tomorrow morning", AnswerA: "couldn't", AnswerB: "should", AnswerC: "needn't", AnswerD: "might", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 5, SheetNo: 23, QuestionNumber: 110, SortOrder: 110, QuestionContent: "What is the safety ____ in case of fire?", AnswerA: "procedure", AnswerB: "protocol", AnswerC: "behavior", AnswerD: "benchmark", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 6, SheetNo: 24, QuestionNumber: 111, SortOrder: 111, QuestionContent: "__(1)__", AnswerA: "complain", AnswerB: "complains", AnswerC: "complaint", AnswerD: "complaining", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 6, SheetNo: 24, QuestionNumber: 112, SortOrder: 112, QuestionContent: "__(2)__", AnswerA: "complicated", AnswerB: "motivated", AnswerC: "interrogated", AnswerD: "agitated", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 6, SheetNo: 24, QuestionNumber: 113, SortOrder: 113, QuestionContent: "__(3)__", AnswerA: "critical", AnswerB: "pivotal", AnswerC: "detrimental", AnswerD: "valuable", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 6, SheetNo: 25, QuestionNumber: 114, SortOrder: 114, QuestionContent: "__(1)__", AnswerA: "fortune", AnswerB: "summary", AnswerC: "poll", AnswerD: "review", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 6, SheetNo: 25, QuestionNumber: 115, SortOrder: 115, QuestionContent: "__(2)__", AnswerA: "sink", AnswerB: "float", AnswerC: "glide", AnswerD: "soar", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 6, SheetNo: 25, QuestionNumber: 116, SortOrder: 116, QuestionContent: "__(3)__", AnswerA: "altogether", AnswerB: "whole", AnswerC: "overall", AnswerD: "absolute", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 6, SheetNo: 26, QuestionNumber: 117, SortOrder: 117, QuestionContent: "__(1)__", AnswerA: "for", AnswerB: "in", AnswerC: "of", AnswerD: "with", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 6, SheetNo: 26, QuestionNumber: 118, SortOrder: 118, QuestionContent: "__(2)__", AnswerA: "cutbacks", AnswerB: "shorcuts", AnswerC: "cutoffs", AnswerD: "downturns", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 6, SheetNo: 26, QuestionNumber: 119, SortOrder: 119, QuestionContent: "__(3)__", AnswerA: "sure", AnswerB: "clear", AnswerC: "obvious", AnswerD: "careful", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 6, SheetNo: 27, QuestionNumber: 120, SortOrder: 120, QuestionContent: "__(1)__", AnswerA: "recalled", AnswerB: "reviewed", AnswerC: "renewed", AnswerD: "remitted", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 6, SheetNo: 27, QuestionNumber: 121, SortOrder: 121, QuestionContent: "__(2)__", AnswerA: "on", AnswerB: "within", AnswerC: "since", AnswerD: "among", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 6, SheetNo: 27, QuestionNumber: 122, SortOrder: 122, QuestionContent: "__(3)__", AnswerA: "when you contact with", AnswerB: "contacting", AnswerC: "to contact", AnswerD: "to contact with", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 7, SheetNo: 28, QuestionNumber: 123, SortOrder: 123, QuestionContent: "For what reason would you visit Anthony's Pier?", AnswerA: "to eat", AnswerB: "to fish", AnswerC: "for a stroll", AnswerD: "to see a concert", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 7, SheetNo: 28, QuestionNumber: 124, SortOrder: 124, QuestionContent: "In which way can you NOT contact the restaurant?", AnswerA: "telephone", AnswerB: "letter", AnswerC: "e-mail", AnswerD: "fax", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 7, SheetNo: 28, QuestionNumber: 125, SortOrder: 125, QuestionContent: "What is unique about Sundays at Anthony's Pier?", AnswerA: "It it not open early in the morning", AnswerB: "You can eat dinner at any time", AnswerC: "It stays open late", AnswerD: "There is a dress code", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 7, SheetNo: 29, QuestionNumber: 126, SortOrder: 126, QuestionContent: "What is true of the course?", AnswerA: "It is the first course offered by IT Solutions", AnswerB: "It is highly structured", AnswerC: "You must know HTML first", AnswerD: "It has flexible options", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 7, SheetNo: 29, QuestionNumber: 127, SortOrder: 127, QuestionContent: "What is NOT taught in the course?", AnswerA: "how to use images", AnswerB: "what is new about XHTML", AnswerC: "how texts can be manipulated", AnswerD: "details about every form", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 7, SheetNo: 29, QuestionNumber: 128, SortOrder: 128, QuestionContent: "What should you NOT try to do during the course?", AnswerA: "work with other people", AnswerB: "fall behind the syllabus", AnswerC: "change your address", AnswerD: "change your e-mail address", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 7, SheetNo: 29, QuestionNumber: 129, SortOrder: 129, QuestionContent: "Where did Alistair find the information on the course?", AnswerA: "on the internet", AnswerB: "in a magazine", AnswerC: "his friend told him", AnswerD: "in a newspaper", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 7, SheetNo: 29, QuestionNumber: 130, SortOrder: 130, QuestionContent: "What is the most likely relationship between Alistair and Josephine?", AnswerA: "colleagues", AnswerB: "friends", AnswerC: "boss/employee", AnswerD: "teacher/student", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 7, SheetNo: 30, QuestionNumber: 131, SortOrder: 131, QuestionContent: "Where would this notice most likely be found?", AnswerA: "in a tourist office", AnswerB: "in a hotel lobby", AnswerC: "on a college campus", AnswerD: "in a newspaper", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 7, SheetNo: 30, QuestionNumber: 132, SortOrder: 132, QuestionContent: "What is located on Ulmerton Road?", AnswerA: "Holiday Inn", AnswerB: "Florida State University", AnswerC: "the Carrer Office", AnswerD: "Clearwater", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 7, SheetNo: 31, QuestionNumber: 133, SortOrder: 133, QuestionContent: "Which recipe was handed down in the family?", AnswerA: "Italian sausage", AnswerB: "meatballs", AnswerC: "fried Mozzarella loaf", AnswerD: "potato Croquette", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 7, SheetNo: 31, QuestionNumber: 134, SortOrder: 134, QuestionContent: "How many choices are there for someone who doesn't eat meat?", AnswerA: "one", AnswerB: "two", AnswerC: "three", AnswerD: "four", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 7, SheetNo: 32, QuestionNumber: 135, SortOrder: 135, QuestionContent: "What will be included in Terry's job?", AnswerA: "organizing the conference", AnswerB: "giving delegates information", AnswerC: "leading a Technical Session", AnswerD: "answering the telephone", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 7, SheetNo: 32, QuestionNumber: 136, SortOrder: 136, QuestionContent: "What would Mabel like Terry to do?", AnswerA: "let her know when there is a problem", AnswerB: "let her know that all is okay", AnswerC: "tell her what hours she is available", AnswerD: "volunteer to work", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 7, SheetNo: 32, QuestionNumber: 137, SortOrder: 137, QuestionContent: "When will Terry be working on Tuesday?", AnswerA: "8am - 10am", AnswerB: "8am - 7pm", AnswerC: "7:30am - 5pm", AnswerD: "7:30am - 10pm", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 7, SheetNo: 32, QuestionNumber: 138, SortOrder: 138, QuestionContent: "Which conference activities are happening at overlapping times?", AnswerA: "the Exhibit Hall and the Afternoon Technical Sessions", AnswerB: "the Keynote Plenary Session and the Afternoon Technical Sessions", AnswerC: "registration and Morning Technical Session", AnswerD: "lunch and the Keynote Plenary Session", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 7, SheetNo: 32, QuestionNumber: 139, SortOrder: 139, QuestionContent: "How long are the Morning Technical Sessions?", AnswerA: "2 hours", AnswerB: "2 hours and 30 minutes", AnswerC: "45 minutes", AnswerD: "1 hour and 45 minutes", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 7, SheetNo: 33, QuestionNumber: 140, SortOrder: 140, QuestionContent: "What was Mr. Giuliani's former job?", AnswerA: "president", AnswerB: "mayor of New York", AnswerC: "governor of Massachusetts", AnswerD: "Republican residential candidate", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 7, SheetNo: 33, QuestionNumber: 141, SortOrder: 141, QuestionContent: "Where did most people probably witness the clash?", AnswerA: "on TV", AnswerB: "in Michigan", AnswerC: "in New York", AnswerD: "at the debate", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 7, SheetNo: 34, QuestionNumber: 142, SortOrder: 142, QuestionContent: "How many people received this email?", AnswerA: "one", AnswerB: "five", AnswerC: "six", AnswerD: "twelve", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 7, SheetNo: 34, QuestionNumber: 143, SortOrder: 143, QuestionContent: "What is true of the meeting?", AnswerA: "It will start promptly", AnswerB: "People will present ideas for projects", AnswerC: "There will be several guest speakers", AnswerD: "It is in a week's time", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 7, SheetNo: 34, QuestionNumber: 144, SortOrder: 144, QuestionContent: "What is most likely to be the website address of this organization?", AnswerA: "www.wilson.org", AnswerB: "www.gbv.gov", AnswerC: "www.rg_inc.gov", AnswerD: "www.rg_inc.org", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 7, SheetNo: 35, QuestionNumber: 145, SortOrder: 145, QuestionContent: "What should Jerry do after reading the report?", AnswerA: "call MaryAnn immediately", AnswerB: "read the report then call MaryAnn", AnswerC: "implement the new product marketing plan", AnswerD: "send a report to Alpha Inc", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 7, SheetNo: 35, QuestionNumber: 146, SortOrder: 146, QuestionContent: "How do Jerry and MaryAnn view the Alpha Inc?", AnswerA: "as a competitor", AnswerB: "as a colleague", AnswerC: "as an example", AnswerD: "as an imposter", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 7, SheetNo: 36, QuestionNumber: 147, SortOrder: 147, QuestionContent: "Approximately how much time has passed between the accident and this letter?", AnswerA: "a few days", AnswerB: "a few weeks", AnswerC: "a few months", AnswerD: "about a year", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 7, SheetNo: 36, QuestionNumber: 148, SortOrder: 148, QuestionContent: "Why is a police report needed?", AnswerA: "to prove the accident happened", AnswerB: "to show who caused the accident", AnswerC: "to complete the 77RH form", AnswerD: "to show where the accident happened", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 7, SheetNo: 36, QuestionNumber: 149, SortOrder: 149, QuestionContent: " If the police were not involved what will happen?", AnswerA: "The claim will be accepted", AnswerB: "The claim may not be accepted", AnswerC: "The claim will be refused", AnswerD: "The police will now be contacted", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 7, SheetNo: 36, QuestionNumber: 150, SortOrder: 150, QuestionContent: "Why was the business card included?", AnswerA: "to encourage a sale", AnswerB: "as a reminder for appointment", AnswerC: "to make an introduction", AnswerD: "to provide contact information", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 7, SheetNo: 36, QuestionNumber: 151, SortOrder: 151, QuestionContent: "In which department at Drive Right Insurance does Mr. Bancroft most likely work?", AnswerA: "management", AnswerB: "sales department", AnswerC: "claims department", AnswerD: "department of underwriters", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 7, SheetNo: 37, QuestionNumber: 152, SortOrder: 152, QuestionContent: "Where would this notice be most likely to be found?", AnswerA: "in a leisure magazine", AnswerB: "in a local newspaper", AnswerC: "in a telephone book", AnswerD: "on an office notice board", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 7, SheetNo: 37, QuestionNumber: 153, SortOrder: 153, QuestionContent: "What should the tenant expect to pay for electricity?", AnswerA: "He or she will only pay on the first month", AnswerB: "It will be different each month", AnswerC: "$500 per month", AnswerD: "It is included in the rent", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 7, SheetNo: 38, QuestionNumber: 154, SortOrder: 154, QuestionContent: "Which alarm is the least serious?", AnswerA: "the Klaxon Horn", AnswerB: "the continuously sounding bell", AnswerC: "the intermittent bell", AnswerD: "they are all equally serious", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 7, SheetNo: 38, QuestionNumber: 155, SortOrder: 155, QuestionContent: "When will the Klaxon Horn sound?", AnswerA: "if there is an emergency in the Laboratory", AnswerB: "if there is a fire outside of working hours", AnswerC: "if someone is stuck in the lift", AnswerD: "if there is a fire at any time", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 7, SheetNo: 38, QuestionNumber: 156, SortOrder: 156, QuestionContent: "For what reason do employees need to check the safety regulations?", AnswerA: "to lean the fire emergency procedures", AnswerB: "to lean how to avoid laboratory emergencies", AnswerC: "to learn emergency procedures outside of working hours", AnswerD: "to find out how to contact security", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 7, SheetNo: 38, QuestionNumber: 157, SortOrder: 157, QuestionContent: "Why was this memo issued?", AnswerA: "as a routine safety precaution", AnswerB: "in answer to a question by staff", AnswerC: "because of an incident last week", AnswerD: "because the alarm system is new", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 7, SheetNo: 38, QuestionNumber: 158, SortOrder: 158, QuestionContent: "When contacting security, what information must be given?", AnswerA: "where you are", AnswerB: "your job title", AnswerC: "what you found while investigating", AnswerD: "which alarm you heard", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 7, SheetNo: 39, QuestionNumber: 159, SortOrder: 159, QuestionContent: "Where would this notice most likely be found?", AnswerA: "in a newspaper", AnswerB: "in a restaurant", AnswerC: "in an office building", AnswerD: "at a bus stop", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 7, SheetNo: 39, QuestionNumber: 160, SortOrder: 160, QuestionContent: "What probably happened to the watch?", AnswerA: "it fell off", AnswerB: "it was found", AnswerC: "it was repaired", AnswerD: "it was broken", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 7, SheetNo: 40, QuestionNumber: 161, SortOrder: 161, QuestionContent: "When did this transaction occur?", AnswerA: "in the morning", AnswerB: "at midday", AnswerC: "in the afternoon", AnswerD: "in the evening", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 7, SheetNo: 40, QuestionNumber: 162, SortOrder: 162, QuestionContent: "How much money is currently in the account?", AnswerA: "$ 100.00", AnswerB: "$ 1,409.06", AnswerC: "$ 2,054.54", AnswerD: "$ 1,054.54", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 7, SheetNo: 41, QuestionNumber: 163, SortOrder: 163, QuestionContent: "Where was this job announcement most likely found?", AnswerA: "on a job center bulletin board", AnswerB: "in a newspaper", AnswerC: "on the internet", AnswerD: "in a magazine", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 7, SheetNo: 41, QuestionNumber: 164, SortOrder: 164, QuestionContent: "What is true for the successful candidate?", AnswerA: "He or she must be Italian", AnswerB: "He or she must be English", AnswerC: "He or she must speak English", AnswerD: "He or she should have just graduated with a Ph.D", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 7, SheetNo: 41, QuestionNumber: 165, SortOrder: 165, QuestionContent: "What will the research be about specifically?", AnswerA: "probability", AnswerB: "international mathematics", AnswerC: "attitudes to multiculturalism", AnswerD: "a mathematician", ChoosenAnswer: 'A', Score: '' },
    { PartNo: 7, SheetNo: 42, QuestionNumber: 166, SortOrder: 166, QuestionContent: "When can you watch 'A Mighty Heart'?", AnswerA: "at 3:10pm", AnswerB: "today, or next week", AnswerC: "at 8:20pm", AnswerD: "next week", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 7, SheetNo: 42, QuestionNumber: 167, SortOrder: 167, QuestionContent: "Who has recommended The Lives of Others?", AnswerA: "the Academy", AnswerB: "the Staff", AnswerC: "Natalie", AnswerD: "Prince Charles", ChoosenAnswer: 'C', Score: '' },
    { PartNo: 7, SheetNo: 43, QuestionNumber: 168, SortOrder: 168, QuestionContent: "Where would this insert most likely be found?", AnswerA: "in an office safety document", AnswerB: "in a staff newsletter", AnswerC: "at a health center", AnswerD: "in a job application pack", ChoosenAnswer: 'D', Score: '' },
    { PartNo: 7, SheetNo: 43, QuestionNumber: 169, SortOrder: 169, QuestionContent: "Who would NOT be able to perform this job well?", AnswerA: "anyone who is not a weightlifter", AnswerB: "someone who is afraid of heights", AnswerC: "someone with any kind of disability", AnswerD: "someone who read slowly", ChoosenAnswer: 'B', Score: '' },
    { PartNo: 7, SheetNo: 43, QuestionNumber: 170, SortOrder: 170, QuestionContent: "What kind of job is being described?", AnswerA: "repair or maintenance work", AnswerB: "door-to-door sales work", AnswerC: "research or product development", AnswerD: "office work", ChoosenAnswer: 'A', Score: '' }
];


/***/ }),

/***/ "./src/app/model/ToeicTest.ts":
/*!************************************!*\
  !*** ./src/app/model/ToeicTest.ts ***!
  \************************************/
/*! exports provided: Exam, Part, Sheet, Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exam", function() { return Exam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Part", function() { return Part; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sheet", function() { return Sheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
class Exam {
}
class Part {
}
class Sheet {
}
class Question {
}


/***/ }),

/***/ "./src/app/nav-bar/finish/finish.component.ts":
/*!****************************************************!*\
  !*** ./src/app/nav-bar/finish/finish.component.ts ***!
  \****************************************************/
/*! exports provided: FinishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishComponent", function() { return FinishComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_modal_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/modal-service.service */ "./src/app/services/modal-service.service.ts");
/* harmony import */ var src_app_services_current_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/current-session.service */ "./src/app/services/current-session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class FinishComponent {
    constructor(modal, session, router) {
        this.modal = modal;
        this.session = session;
        this.router = router;
        this.eventClick = () => {
            this.session.isTesting = false;
            this.router.navigate(['result']);
        };
    }
    ngOnInit() { }
    showPopup() {
        this.modal.show(this.eventClick);
    }
}
FinishComponent.ɵfac = function FinishComponent_Factory(t) { return new (t || FinishComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_modal_service_service__WEBPACK_IMPORTED_MODULE_1__["ModalServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_current_session_service__WEBPACK_IMPORTED_MODULE_2__["CurrentSessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
FinishComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FinishComponent, selectors: [["btn-finish"]], decls: 2, vars: 0, consts: [["type", "button", 1, "btn", "btn-outline-primary", 3, "click"]], template: function FinishComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinishComponent_Template_button_click_0_listener() { return ctx.showPopup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Finish\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvZmluaXNoL2ZpbmlzaC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinishComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'btn-finish',
                templateUrl: './finish.component.html',
                styleUrls: ['./finish.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_modal_service_service__WEBPACK_IMPORTED_MODULE_1__["ModalServiceService"] }, { type: src_app_services_current_session_service__WEBPACK_IMPORTED_MODULE_2__["CurrentSessionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_current_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/current-session.service */ "./src/app/services/current-session.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _counter_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../counter.directive */ "./src/app/counter.directive.ts");
/* harmony import */ var _finish_finish_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finish/finish.component */ "./src/app/nav-bar/finish/finish.component.ts");








function NavBarComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_5_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.previousPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_div_5_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_5_div_40_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavBarComponent_div_5_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_5_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.changePart(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Part I - Picture Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_5_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.changePart(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Part II - Question Response");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_5_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.changePart(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Part III - Conversations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_5_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.changePart(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Part IV - Short Talks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_5_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.changePart(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Part V - Incomplete Sentences");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_5_Template_a_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.changePart(6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Part VI - Text Completion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_5_Template_a_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.changePart(7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Part VII - Reading Comprehension");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, NavBarComponent_div_5_div_40_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.session.pageType != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.PartDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.session.pageType != 2);
} }
function NavBarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("value", function NavBarComponent_div_6_Template_ng_container_value_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.setValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "btn-finish", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("counter", ctx_r1.session.remainSeconds)("interval", 1000);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, ctx_r1.hours, "2.0").substring(0, 2), ":", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 8, ctx_r1.minutes, "2.0").substring(0, 2), ":", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 11, ctx_r1.seconds, "2.0").substring(0, 2), "");
} }
class NavBarComponent {
    constructor(session, common, router) {
        this.session = session;
        this.common = common;
        this.router = router;
        this.timer = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.math = Math;
        this.PartDescription = '';
        //localStorage.setItem("remainTime", "" + 7200);
    }
    ngOnInit() {
        this.reloadSheet();
        this.session.reLoadPageObs.subscribe(() => {
            this.reloadSheet();
        });
    }
    storeTimer() {
        localStorage.setItem("remainTime", "" + this.timer);
        //localStorage.setItem("remainTime", "7200");
    }
    setValue(_value) {
        this.timer = _value;
        this.hours = this.math.floor(this.timer / 3600);
        this.minutes = this.math.floor((this.timer - (this.hours * 3600)) / 60);
        this.seconds = ((this.timer - (this.hours * 3600)) - (this.minutes * 60));
        this.storeTimer();
    }
    nextPage() {
        this.common.nextPage();
        this.reloadSheet();
    }
    previousPage() {
        this.common.previousPage();
        this.reloadSheet();
    }
    changePart(value) {
        this.session.currentPart = value;
        this.session.currentSheetNbr = 1;
        this.reloadSheet();
    }
    reloadSheet() {
        this.PartDescription = this.common.getPartDescription();
        this.router
            .navigateByUrl('/refreshComponent', { skipLocationChange: true })
            .then(() => {
            this.router.navigate(['sheet']);
        });
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_session_service__WEBPACK_IMPORTED_MODULE_1__["CurrentSessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 7, vars: 2, consts: [[1, "navigation-bar", "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "fixed-top"], [1, "container-fluid"], [1, "navbar-brand", "col-lg-3"], ["href", "/toeic-test", 1, "pageName"], ["class", "navigate-page col-lg-6", 4, "ngIf"], ["class", "collapse navbar-collapse", "id", "navbarSupportedContent", 4, "ngIf"], [1, "navigate-page", "col-lg-6"], ["class", "back-button my-auto", "title", "Go to previous page", 3, "click", 4, "ngIf"], [1, "select-part"], [1, "btn-group"], ["type", "button", "id", "dropdownMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle", "btn-sm"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [1, "dropdown-divider"], ["class", "next-button my-auto", "title", "Go to next page", 3, "click", 4, "ngIf"], ["title", "Go to previous page", 1, "back-button", "my-auto", 3, "click"], [1, "im", "im-arrow-left"], ["title", "Go to next page", 1, "next-button", "my-auto", 3, "click"], [1, "im", "im-arrow-right"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "timer", 3, "counter", "interval", "value"], [1, "btn-finish"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ToeicExam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavBarComponent_div_5_Template, 41, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavBarComponent_div_6_Template, 8, 14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.session.isTesting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.session.isTesting);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _counter_directive__WEBPACK_IMPORTED_MODULE_5__["CounterDirective"], _finish_finish_component__WEBPACK_IMPORTED_MODULE_6__["FinishComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: [".navigation-bar[_ngcontent-%COMP%] {\n  background-color: #FFF !important;\n  color: #dd7f42;\n  border-bottom: 3px solid #dd7f42;\n}\n\n.navigation-bar.disabled[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  height: calc(100% + 3px);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 9999;\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.fixed-top[_ngcontent-%COMP%] {\n  z-index: 1500 !important;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  color: #dd7f42 !important;\n  padding: unset;\n  font-size: 1rem;\n  margin: 0;\n}\n\n.pageName[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  color: #dd7f42 !important;\n  text-decoration: none;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  justify-content: start;\n}\n\n.navbar-brand[_ngcontent-%COMP%]::after {\n  content: \"\";\n  color: #dd7f42;\n  padding-left: 5px;\n  border-right: 2px solid #dd7f42;\n}\n\n#dropdownMenuButton[_ngcontent-%COMP%] {\n  min-width: 290px;\n}\n\n.collapse.navbar-collapse[_ngcontent-%COMP%] {\n  justify-content: end;\n}\n\n.btn-finish[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.navigate-page[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#progressbar[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  overflow: hidden;\n  color: lightgrey;\n}\n\n#progressbar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #673AB7;\n}\n\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  font-size: 15px;\n  width: 25%;\n  float: left;\n  position: relative;\n  font-weight: 400;\n}\n\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  width: 50px;\n  height: 50px;\n  line-height: 45px;\n  display: block;\n  font-size: 20px;\n  color: #ffffff;\n  background: lightgray;\n  border-radius: 50%;\n  margin: 0 auto 10px auto;\n  padding: 2px;\n}\n\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 100%;\n  height: 2px;\n  background: lightgray;\n  position: absolute;\n  left: 0;\n  top: 25px;\n  z-index: -1;\n}\n\n#progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:before, #progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:after {\n  background: #673AB7;\n}\n\n.progress[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  background-color: #673AB7;\n}\n\n.select-part[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\n\n.fit-image[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.back-button[_ngcontent-%COMP%], .next-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.im[_ngcontent-%COMP%]::before {\n  vertical-align: middle;\n}\n\n.im[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.im[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n#dropdownMenuButton[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9EOlxcQllMT0pPQ1xcTXlUb2VpYy9zcmNcXGFwcFxcbmF2LWJhclxcbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2LWJhci9EOlxcQllMT0pPQ1xcTXlUb2VpYy9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGUuc2NzcyIsInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUNBQUE7RUFDQSxjQ0hVO0VESVYsZ0NBQUE7QUVERjs7QUZJQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUVESjs7QUZJQTtFQUNHLHdCQUFBO0FFREg7O0FGSUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBRURGOztBRkdBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBRUFGOztBRkdBO0VBQ0Usc0JBQUE7QUVBRjs7QUZFQTtFQUNFLFdBQUE7RUFDQSxjQzFDVTtFRDJDVixpQkFBQTtFQUNBLCtCQUFBO0FFQ0Y7O0FGQ0E7RUFDRSxnQkFBQTtBRUVGOztBRkNBO0VBQ0Usb0JBQUE7QUVFRjs7QUZDQTtFQUNFLGNBQUE7QUVFRjs7QUZDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBRUVGOztBRkNBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FFRUY7O0FGQ0E7RUFDRSxjQUFBO0FFRUY7O0FGQ0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUVFRjs7QUZDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FFRUY7O0FGQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FFRUY7O0FGQ0E7O0VBRUUsbUJBQUE7QUVFRjs7QUZDQTtFQUNFLFlBQUE7QUVFRjs7QUZDQTtFQUNFLHlCQUFBO0FFRUY7O0FGQUE7RUFDRSxjQUFBO0FFR0Y7O0FGREE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBRUlGOztBRkZBO0VBQ0UsZUFBQTtBRUtGOztBRkhBO0VBQ0Usc0JBQUE7QUVNRjs7QUZKQTtFQUNFLGVBQUE7QUVPRjs7QUZKQTtFQUNFLFlBQUE7QUVPRjs7QUZMQTtFQUNFLGFBQUE7QUVRRiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGUnO1xyXG5cclxuLm5hdmlnYXRpb24tYmFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxuICBjb2xvcjogJG1haW4tY29sb3I7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRtYWluLWNvbG9yO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbi1iYXIuZGlzYWJsZWQ6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAzcHgpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxufVxyXG5cclxuLmZpeGVkLXRvcHtcclxuICAgei1pbmRleDogMTUwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5ke1xyXG4gIGNvbG9yOiAkbWFpbi1jb2xvciAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IHVuc2V0O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLnBhZ2VOYW1le1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6ICRtYWluLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbn1cclxuLm5hdmJhci1icmFuZDo6YWZ0ZXJ7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBjb2xvcjogJG1haW4tY29sb3I7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJG1haW4tY29sb3I7XHJcbn1cclxuI2Ryb3Bkb3duTWVudUJ1dHRvbntcclxuICBtaW4td2lkdGg6IDI5MHB4O1xyXG59XHJcblxyXG4uY29sbGFwc2UubmF2YmFyLWNvbGxhcHNle1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kOztcclxufVxyXG5cclxuLmJ0bi1maW5pc2h7XHJcbiAgbWFyZ2luOjAgMTBweDtcclxufVxyXG5cclxuLm5hdmlnYXRlLXBhZ2V7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI3Byb2dyZXNzYmFyIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY29sb3I6IGxpZ2h0Z3JleVxyXG59XHJcblxyXG4jcHJvZ3Jlc3NiYXIgLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICM2NzNBQjdcclxufVxyXG5cclxuI3Byb2dyZXNzYmFyIGxpIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDBcclxufVxyXG5cclxuI3Byb2dyZXNzYmFyIGxpOmJlZm9yZSB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbjogMCBhdXRvIDEwcHggYXV0bztcclxuICBwYWRkaW5nOiAycHhcclxufVxyXG5cclxuI3Byb2dyZXNzYmFyIGxpOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAyNXB4O1xyXG4gIHotaW5kZXg6IC0xXHJcbn1cclxuXHJcbiNwcm9ncmVzc2JhciBsaS5hY3RpdmU6YmVmb3JlLFxyXG4jcHJvZ3Jlc3NiYXIgbGkuYWN0aXZlOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNjczQUI3XHJcbn1cclxuXHJcbi5wcm9ncmVzcyB7XHJcbiAgaGVpZ2h0OiAyMHB4XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzNBQjdcclxufVxyXG4uc2VsZWN0LXBhcnR7XHJcbiAgbWFyZ2luOiAwIDIwcHg7XHJcbn1cclxuLmZpdC1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXJcclxufVxyXG4uYmFjay1idXR0b24sLm5leHQtYnV0dG9ue1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW06OmJlZm9yZXtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5pbXtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5pbTpob3ZlcntcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuI2Ryb3Bkb3duTWVudUJ1dHRvbntcclxuICBtYXJnaW46IDAgNXB4O1xyXG59XHJcbiIsIi8vICRtYWluLWNvbG9yOiAjNWYyNDlmO1xyXG4kbWFpbi1jb2xvcjojZGQ3ZjQyO1xyXG4iLCIubmF2aWdhdGlvbi1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZGQ3ZjQyO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2RkN2Y0Mjtcbn1cblxuLm5hdmlnYXRpb24tYmFyLmRpc2FibGVkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAzcHgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmZpeGVkLXRvcCB7XG4gIHotaW5kZXg6IDE1MDAgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIGNvbG9yOiAjZGQ3ZjQyICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IHVuc2V0O1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbjogMDtcbn1cblxuLnBhZ2VOYW1lIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjZGQ3ZjQyICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG59XG5cbi5uYXZiYXItYnJhbmQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29sb3I6ICNkZDdmNDI7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZGQ3ZjQyO1xufVxuXG4jZHJvcGRvd25NZW51QnV0dG9uIHtcbiAgbWluLXdpZHRoOiAyOTBweDtcbn1cblxuLmNvbGxhcHNlLm5hdmJhci1jb2xsYXBzZSB7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4uYnRuLWZpbmlzaCB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4ubmF2aWdhdGUtcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jcHJvZ3Jlc3NiYXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogbGlnaHRncmV5O1xufVxuXG4jcHJvZ3Jlc3NiYXIgLmFjdGl2ZSB7XG4gIGNvbG9yOiAjNjczQUI3O1xufVxuXG4jcHJvZ3Jlc3NiYXIgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDI1JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuI3Byb2dyZXNzYmFyIGxpOmJlZm9yZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvIDEwcHggYXV0bztcbiAgcGFkZGluZzogMnB4O1xufVxuXG4jcHJvZ3Jlc3NiYXIgbGk6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDI1cHg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4jcHJvZ3Jlc3NiYXIgbGkuYWN0aXZlOmJlZm9yZSxcbiNwcm9ncmVzc2JhciBsaS5hY3RpdmU6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjNjczQUI3O1xufVxuXG4ucHJvZ3Jlc3Mge1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczQUI3O1xufVxuXG4uc2VsZWN0LXBhcnQge1xuICBtYXJnaW46IDAgMjBweDtcbn1cblxuLmZpdC1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmJhY2stYnV0dG9uLCAubmV4dC1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbTo6YmVmb3JlIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmltIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaW06aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbiNkcm9wZG93bk1lbnVCdXR0b24ge1xuICBtYXJnaW46IDAgNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss']
            }]
    }], function () { return [{ type: _services_current_session_service__WEBPACK_IMPORTED_MODULE_1__["CurrentSessionService"] }, { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/part-menu/part-intro/part-intro.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/part-menu/part-intro/part-intro.component.ts ***!
  \**************************************************************/
/*! exports provided: PartIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartIntroComponent", function() { return PartIntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_current_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/current-session.service */ "./src/app/services/current-session.service.ts");



class PartIntroComponent {
    constructor(sessionService) {
        this.sessionService = sessionService;
        this.partNbr = 1;
    }
    ngOnInit() {
    }
}
PartIntroComponent.ɵfac = function PartIntroComponent_Factory(t) { return new (t || PartIntroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_session_service__WEBPACK_IMPORTED_MODULE_1__["CurrentSessionService"])); };
PartIntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PartIntroComponent, selectors: [["app-part-intro"]], inputs: { partNbr: "partNbr" }, decls: 62, vars: 0, consts: [[1, "row"], [1, "col-md-10", "col-md-push-1"], [1, "question-content"], [1, "sm"], [1, "text-justify"], ["src", "https://toeic24.net/upload/img/part_1.png", 2, "width", "100%"], [1, "answer"], [1, "audioplayer"], ["preload", "auto", "controls", "", 2, "width", "0px", "height", "0px", "visibility", "hidden"], ["src", "https://toeic24.net/upload/audio/part_i_intro.mp3"], ["title", "", 1, "audioplayer-playpause"], ["href", "#"], [1, "audioplayer-time", "audioplayer-time-current"], [1, "audioplayer-bar"], [1, "audioplayer-bar-loaded", 2, "width", "100%"], [1, "audioplayer-bar-played"], [1, "audioplayer-time", "audioplayer-time-duration"], [1, "audioplayer-volume"], ["title", "", 1, "audioplayer-volume-button"], [1, "audioplayer-volume-adjust"], [2, "width", "100%"], [1, "answer-list"], ["type", "radio", "name", "radio-1", "id", "radio-1", "disabled", "disabled"], ["for", "radio-1"], [1, "icon", "icon_radio"], ["type", "radio", "name", "radio-1", "id", "radio-2", "disabled", "disabled"], ["for", "radio-2"], ["type", "radio", "name", "radio-1", "id", "radio-3", "disabled", "disabled"], ["for", "radio-3"], ["type", "radio", "name", "radio-1", "id", "radio-4", "checked", "", "disabled", "disabled"], ["for", "radio-4"], [1, "form-action"], [1, "mc-btn", "btn-style-1"]], template: function PartIntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Part I: Picture Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Directions: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "For each question, you will see a picture and you will hear four short statements. The statements will be spoken just one time. They will not be printed in your test book so you must listen carefully to understand what the speaker says. When you hear the four statements, look at the picture and choose the statement that best describes what you see in the picture. Choose the best answer A, B, C or D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "audio", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "source", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "00:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "00:58");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "EXAMPLE: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Now listen to the four statements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Statement (D) best describes what you see in the picture.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Therefore, you should choose answer (D). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " A. He is on the phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " B. She is driving the car ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " C. She is typing on the computer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "D. He is sitting next to her");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtbWVudS9wYXJ0LWludHJvL3BhcnQtaW50cm8uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartIntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-part-intro',
                templateUrl: './part-intro.component.html',
                styleUrls: ['./part-intro.component.scss']
            }]
    }], function () { return [{ type: _services_current_session_service__WEBPACK_IMPORTED_MODULE_1__["CurrentSessionService"] }]; }, { partNbr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/part-menu/part-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/part-menu/part-menu.component.ts ***!
  \**************************************************/
/*! exports provided: PartMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartMenuComponent", function() { return PartMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PartMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
PartMenuComponent.ɵfac = function PartMenuComponent_Factory(t) { return new (t || PartMenuComponent)(); };
PartMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PartMenuComponent, selectors: [["app-part-menu"]], decls: 2, vars: 0, template: function PartMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "part-menu works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtbWVudS9wYXJ0LW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-part-menu',
                templateUrl: './part-menu.component.html',
                styleUrls: ['./part-menu.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/refresh-component/refresh-component.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/refresh-component/refresh-component.component.ts ***!
  \******************************************************************/
/*! exports provided: RefreshComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshComponentComponent", function() { return RefreshComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RefreshComponentComponent {
    constructor() { }
    ngOnInit() {
    }
}
RefreshComponentComponent.ɵfac = function RefreshComponentComponent_Factory(t) { return new (t || RefreshComponentComponent)(); };
RefreshComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefreshComponentComponent, selectors: [["app-refresh-component"]], decls: 2, vars: 0, template: function RefreshComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "refresh-component works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZnJlc2gtY29tcG9uZW50L3JlZnJlc2gtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefreshComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-refresh-component',
                templateUrl: './refresh-component.component.html',
                styleUrls: ['./refresh-component.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/api-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/api-service.service.ts ***!
  \*************************************************/
/*! exports provided: ApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServiceService", function() { return ApiServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ApiServiceService {
    constructor(http) {
        this.http = http;
        this.urlRetrieve = 'http://localhost/toeicserver/MSWebService.asmx/';
    }
    getListExams() {
        return this.http
            .get(this.urlRetrieve + 'GetListExams', {
            params: { IsDelete: '0' },
        })
            .pipe(
        //tap((_) => console.log('got data')),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getQuestionsForExam(examCode) {
        return this.http
            .get(this.urlRetrieve + 'GetQuestionsForExam', {
            params: { ExamCode: examCode },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((_) => console.log('got list quesions by part')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    /**
     * updateTestInfo
     */
    updateTestInfo(examCode) {
        this.http.post(this.urlRetrieve + 'UpdateTestInfo', { params: { ExamCode: examCode } });
    }
    /**
     * updateTestAnswerDetail
     */
    updateTestAnswerDetail(examCode) {
        this.http.post(this.urlRetrieve + 'UpdateTestAnswerDetail', { params: { ExamCode: examCode } });
    }
    getGoogleNews() {
        let apiUrl = 'https://google-news.p.rapidapi.com/v1/top_headlines?lang=en&country=US';
        const options = {
            "method": "GET",
            "hostname": "google-news.p.rapidapi.com",
            "port": null,
            "path": "/v1/top_headlines?lang=en&country=US",
            "headers": {
                // "x-rapidapi-host": "google-news.p.rapidapi.com",
                "x-rapidapi-key": "61a3e147bdmshb04df8da6ac69abp12f4ebjsn145cc4945044"
            }
        };
        let a = this.http.get(apiUrl, options);
        return (a);
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
}
ApiServiceService.ɵfac = function ApiServiceService_Factory(t) { return new (t || ApiServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ApiServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiServiceService, factory: ApiServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_ToeicTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/ToeicTest */ "./src/app/model/ToeicTest.ts");
/* harmony import */ var _model_Test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../model/Test */ "./src/app/model/Test.ts");
/* harmony import */ var _current_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./current-session.service */ "./src/app/services/current-session.service.ts");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-service.service */ "./src/app/services/api-service.service.ts");






class CommonService {
    constructor(session, api) {
        this.session = session;
        this.api = api;
    }
    nextPage() {
        if (this.session.pageType === 2) {
            return;
        }
        this.session.currentSheetNbr += 1;
        //If current sheet is last sheet of current Part, move to next Part's first sheet
        if (this.session.currentBook.Parts[this.session.currentPart - 1].Sheets
            .length < this.session.currentSheetNbr) {
            this.session.currentPart += 1; //Next Part
            this.session.currentSheetNbr = 1; // First sheet
        }
        if (this.session.currentPart == 7 &&
            this.session.currentSheetNbr ==
                this.session.currentBook.Parts[this.session.currentPart - 1].Sheets
                    .length)
            this.session.pageType = 2;
        //last page
        else
            this.session.pageType = 0;
        this.session.reLoadPage.next(1);
    }
    previousPage() {
        if (this.session.pageType === 1) {
            return;
        }
        this.session.currentSheetNbr -= 1;
        //If current sheet is first sheet of current Part, move to previous Part's last sheet
        if (this.session.currentSheetNbr == 0) {
            this.session.currentPart -= 1; //Previous Part
            this.session.currentSheetNbr =
                this.session.currentBook.Parts[this.session.currentPart - 1].Sheets.length; // Last sheet
        }
        if (this.session.currentPart == 1 && this.session.currentSheetNbr == 1)
            this.session.pageType = 1;
        else
            this.session.pageType = 0;
        this.session.reLoadPage.next(1);
    }
    CollectExamData() {
        if (this.session.currentBook !== undefined) {
            // this.api
            //   .getQuestionsForExam(this.session.currentBook.Code)
            //   .subscribe((result: any) =>
            {
                let newExam = new _model_ToeicTest__WEBPACK_IMPORTED_MODULE_1__["Exam"]();
                newExam.Code = this.session.currentBook.Code;
                newExam.Parts = [];
                let listSheets = _model_Test__WEBPACK_IMPORTED_MODULE_2__["SheetList"]; // JSON.parse(JSON.stringify(result))['ListSheets'];
                let listQuestions = _model_Test__WEBPACK_IMPORTED_MODULE_2__["QuestionList"]; //JSON.parse(JSON.stringify(result))['ListQuestions'];
                [1, 2, 3, 4, 5, 6, 7].forEach((partNo) => {
                    let part = new _model_ToeicTest__WEBPACK_IMPORTED_MODULE_1__["Part"]();
                    let sheets = [];
                    let findsheets = listSheets.filter((e) => e.Part == partNo);
                    for (let index = 0; index < findsheets.length; index++) {
                        sheets.push({
                            SheetNbr: findsheets[index].SheetNbr,
                            ContentSrc: findsheets[index].ContentSrc,
                            ExamCode: findsheets[index].ExamCode,
                            InnerHTMLContent: findsheets[index].InnerHTMLContent,
                        });
                        let questions = [];
                        let findquestions = listQuestions.filter((e) => e.PartNo == partNo && e.SheetNo == sheets[index].SheetNbr);
                        for (let i = 0; i < findquestions.length; i++) {
                            questions.push({
                                QuestionContent: findquestions[i].QuestionContent,
                                AnswerA: findquestions[i].AnswerA,
                                AnswerB: findquestions[i].AnswerB,
                                AnswerC: findquestions[i].AnswerC,
                                AnswerD: findquestions[i].AnswerD,
                                Score: findquestions[i].Correct,
                                SortOrder: findquestions[i].SortOrder,
                            });
                        }
                        sheets[sheets.length - 1].Questions = questions;
                    }
                    part.PartNumber = partNo;
                    part.Sheets = sheets;
                    newExam.Parts.push(part);
                });
                this.session.currentBook = newExam;
                this.session.pageType = 1;
            }
            //);
        }
    }
    getCurrentSheet() {
        return this.session.currentBook.Parts[this.session.currentPart - 1].Sheets[this.session.currentSheetNbr - 1];
    }
    getPartDescription() {
        let description = 'Part I - Picture Description (page 1/1)';
        if (this.session.currentBook == null)
            return description;
        switch (this.session.currentPart) {
            case 1:
                description = 'Part I - Picture Description';
                break;
            case 2:
                description = 'Part II - Question Response';
                break;
            case 3:
                description = 'Part III - Conversations';
                break;
            case 4:
                description = 'Part IV - Short Talks';
                break;
            case 5:
                description = 'Part V - Incomplete Sentences';
                break;
            case 6:
                description = 'Part VI - Text Completion';
                break;
            default:
                description = 'Part VII - Reading Comprehension';
                break;
        }
        return (description +
            ' (page ' +
            this.session.currentSheetNbr +
            '/' +
            this.session.currentBook.Parts[this.session.currentPart - 1].Sheets
                .length +
            ')');
    }
    getUnAnswerQuestionsList(short = false) {
        let listQuestionNumber = '';
        let unAnswerArr = [];
        for (let index = 0; index < this.session.currentPart; index++) {
            for (let index2 = 0; index2 < this.session.currentSheetNbr; index2++) {
                unAnswerArr = unAnswerArr.concat(this.session.currentBook.Parts[index].Sheets[index2].Questions.filter(function (item) {
                    return item.ChoosenAnswer == undefined;
                }).map(function (ele) {
                    return ele.SortOrder;
                }));
                if (short == true && unAnswerArr.length > 10) {
                    break;
                }
            }
        }
        listQuestionNumber = unAnswerArr.join(',');
        if (listQuestionNumber.length > 1) {
            listQuestionNumber += ',...';
        }
        return listQuestionNumber;
    }
    // TEST RESULT Starts
    getTestListeningResult() {
        let correctListening = 0;
        this.session.currentBook.Parts.forEach((part) => {
            part.Sheets.forEach((sheet) => {
                //count right answers in Listening parts (1->4)
                if ([1, 2, 3, 4].indexOf(part.PartNumber) > -1) {
                    correctListening += sheet.Questions.filter(function (item) {
                        return (item.ChoosenAnswer !== undefined &&
                            item.ChoosenAnswer == item.Score);
                    }).length;
                }
            });
        });
        return this.estimateListeningScore(correctListening);
    }
    getTestReadingResult() {
        //  this.getUnAnswerQuestionsList();
        let correctReading = 0;
        this.session.currentBook.Parts.forEach((part) => {
            part.Sheets.forEach((sheet) => {
                //count right answer in Reading parts (5->7)
                if ([5, 6, 7].indexOf(part.PartNumber) > -1) {
                    correctReading += sheet.Questions.filter(function (item) {
                        return (item.ChoosenAnswer !== undefined &&
                            item.ChoosenAnswer == item.Score);
                    }).length;
                }
            });
        });
        return this.estimateReadingScore(correctReading);
    }
    estimateListeningScore(score) {
        let scoreListeningArr = [
            { 6: 5 },
            { 7: 10 },
            { 8: 15 },
            { 9: 20 },
            { 10: 25 },
            { 11: 30 },
            { 12: 35 },
            { 13: 40 },
            { 14: 45 },
            { 15: 50 },
            { 16: 55 },
            { 17: 60 },
            { 18: 65 },
            { 19: 70 },
            { 20: 75 },
            { 21: 80 },
            { 22: 85 },
            { 23: 90 },
            { 24: 95 },
            { 25: 100 },
            { 26: 105 },
            { 27: 110 },
            { 28: 115 },
            { 29: 120 },
            { 30: 125 },
            { 31: 135 },
            { 32: 140 },
            { 33: 145 },
            { 34: 150 },
            { 35: 155 },
            { 36: 160 },
            { 37: 165 },
            { 38: 170 },
            { 39: 180 },
            { 40: 185 },
            { 41: 190 },
            { 42: 195 },
            { 43: 200 },
            { 44: 210 },
            { 45: 220 },
            { 46: 225 },
            { 47: 230 },
            { 48: 235 },
            { 49: 240 },
            { 50: 245 },
            { 51: 250 },
            { 52: 255 },
            { 53: 260 },
            { 54: 270 },
            { 55: 275 },
            { 56: 280 },
            { 57: 285 },
            { 58: 295 },
            { 59: 300 },
            { 60: 305 },
            { 61: 310 },
            { 62: 315 },
            { 63: 320 },
            { 64: 325 },
            { 65: 330 },
            { 66: 335 },
            { 67: 340 },
            { 68: 345 },
            { 69: 350 },
            { 70: 360 },
            { 71: 365 },
            { 72: 370 },
            { 73: 375 },
            { 74: 380 },
            { 75: 390 },
            { 76: 395 },
            { 77: 400 },
            { 78: 405 },
            { 79: 410 },
            { 80: 420 },
            { 81: 425 },
            { 82: 430 },
            { 83: 435 },
            { 84: 440 },
            { 85: 450 },
            { 86: 455 },
            { 87: 460 },
            { 88: 470 },
            { 89: 475 },
            { 90: 480 },
            { 91: 485 },
            { 92: 490 },
            { 100: 495 },
        ];
        let findScore = scoreListeningArr.find((e) => Object.keys(e)[0] >= score);
        if (findScore != null)
            return findScore[Object.keys(findScore)[0]];
        else
            return 0;
    }
    estimateReadingScore(score) {
        let scoreReadingArr = [
            { 9: 5 },
            { 10: 10 },
            { 11: 15 },
            { 12: 20 },
            { 13: 25 },
            { 14: 30 },
            { 15: 35 },
            { 16: 40 },
            { 17: 45 },
            { 18: 50 },
            { 19: 55 },
            { 20: 60 },
            { 21: 65 },
            { 22: 70 },
            { 23: 75 },
            { 24: 80 },
            { 25: 90 },
            { 26: 95 },
            { 27: 100 },
            { 28: 110 },
            { 29: 115 },
            { 30: 120 },
            { 31: 125 },
            { 32: 130 },
            { 33: 135 },
            { 34: 140 },
            { 35: 145 },
            { 36: 150 },
            { 37: 155 },
            { 38: 160 },
            { 39: 170 },
            { 40: 175 },
            { 41: 180 },
            { 42: 185 },
            { 43: 195 },
            { 44: 200 },
            { 45: 205 },
            { 46: 210 },
            { 47: 220 },
            { 48: 225 },
            { 49: 230 },
            { 50: 235 },
            { 51: 240 },
            { 52: 250 },
            { 53: 255 },
            { 54: 260 },
            { 55: 270 },
            { 56: 275 },
            { 57: 280 },
            { 58: 285 },
            { 59: 290 },
            { 60: 295 },
            { 61: 300 },
            { 62: 305 },
            { 63: 310 },
            { 64: 320 },
            { 65: 325 },
            { 66: 330 },
            { 67: 335 },
            { 68: 340 },
            { 69: 345 },
            { 70: 350 },
            { 71: 355 },
            { 72: 360 },
            { 73: 365 },
            { 74: 370 },
            { 75: 375 },
            { 76: 380 },
            { 77: 385 },
            { 78: 390 },
            { 79: 395 },
            { 80: 400 },
            { 81: 405 },
            { 82: 405 },
            { 83: 410 },
            { 84: 415 },
            { 85: 420 },
            { 86: 425 },
            { 87: 430 },
            { 88: 435 },
            { 89: 445 },
            { 90: 450 },
            { 91: 455 },
            { 92: 465 },
            { 93: 470 },
            { 94: 480 },
            { 95: 485 },
            { 96: 490 },
            { 100: 495 },
        ];
        let findScore = scoreReadingArr.find((e) => Object.keys(e)[0] >= score);
        if (findScore != null)
            return findScore[Object.keys(findScore)[0]];
        else
            return 0;
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_current_session_service__WEBPACK_IMPORTED_MODULE_3__["CurrentSessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiceService"])); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _current_session_service__WEBPACK_IMPORTED_MODULE_3__["CurrentSessionService"] }, { type: _api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/current-session.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/current-session.service.ts ***!
  \*****************************************************/
/*! exports provided: CurrentSessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentSessionService", function() { return CurrentSessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class CurrentSessionService {
    constructor() {
        this.currentBook = null;
        this.currentSheetNbr = 1;
        this.currentPart = 5;
        this.isTesting = false;
        this.pageType = 0; //0:not set, 1:first page, 2: last page
        this.remainQuestions = '';
        this.remainSeconds = 7200;
        this.loadBook = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loadBook.subscribe((value) => {
            this.currentBook = value;
        });
        this.reLoadPage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.reLoadPageObs = this.reLoadPage.asObservable();
        // this.testing$ = this.testing.asObservable()
    }
}
CurrentSessionService.ɵfac = function CurrentSessionService_Factory(t) { return new (t || CurrentSessionService)(); };
CurrentSessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CurrentSessionService, factory: CurrentSessionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentSessionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/modal-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/modal-service.service.ts ***!
  \***************************************************/
/*! exports provided: ModalServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalServiceService", function() { return ModalServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _current_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-session.service */ "./src/app/services/current-session.service.ts");



class ModalServiceService {
    constructor(session) {
        // this.session.testing$.subscribe(value=>{ if (value) {
        //   console.log(value);
        this.session = session;
        this.modalContent = '';
        this.headerText = '';
        this.primaryBtn = 'Continue';
        this.modalType = '';
        this.isShow = false;
        // }})
    }
    close() {
        this.isShow = false;
    }
    show(_acceptEvent) {
        this.isShow = true;
        if (_acceptEvent) {
            this.accept = _acceptEvent;
        }
    }
    clickAccept() {
        this.accept();
        this.isShow = false;
    }
    get IsShow() {
        return this.isShow;
    }
}
ModalServiceService.ɵfac = function ModalServiceService_Factory(t) { return new (t || ModalServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_current_session_service__WEBPACK_IMPORTED_MODULE_1__["CurrentSessionService"])); };
ModalServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalServiceService, factory: ModalServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _current_session_service__WEBPACK_IMPORTED_MODULE_1__["CurrentSessionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sheet/sheet-footer/sheet-footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/sheet/sheet-footer/sheet-footer.component.ts ***!
  \**************************************************************/
/*! exports provided: SheetFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetFooterComponent", function() { return SheetFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_current_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/current-session.service */ "./src/app/services/current-session.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function SheetFooterComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " END!\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SheetFooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetFooterComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.previousPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SheetFooterComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetFooterComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SheetFooterComponent {
    constructor(common, router, session) {
        this.common = common;
        this.router = router;
        this.session = session;
        this.pageType = 0;
    }
    ngOnInit() {
        this.pageType = this.session.pageType;
    }
    nextPage() {
        this.common.nextPage();
        this.router
            .navigateByUrl('/refreshComponent', { skipLocationChange: true })
            .then(() => {
            this.router.navigate(['sheet']);
        });
    }
    previousPage() {
        this.common.previousPage();
        this.router
            .navigateByUrl('/refreshComponent', { skipLocationChange: true })
            .then(() => {
            this.router.navigate(['sheet']);
        });
    }
}
SheetFooterComponent.ɵfac = function SheetFooterComponent_Factory(t) { return new (t || SheetFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_current_session_service__WEBPACK_IMPORTED_MODULE_3__["CurrentSessionService"])); };
SheetFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SheetFooterComponent, selectors: [["app-sheet-footer"]], decls: 4, vars: 3, consts: [["class", "text-end text-center", 4, "ngIf"], ["class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "text-end", "text-center"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"]], template: function SheetFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SheetFooterComponent_h1_0_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SheetFooterComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SheetFooterComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageType == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageType != 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageType != 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".btn[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 10px;\n  min-width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlZXQvc2hlZXQtZm9vdGVyL0Q6XFxCWUxPSk9DXFxNeVRvZWljL3NyY1xcYXBwXFxzaGVldFxcc2hlZXQtZm9vdGVyXFxzaGVldC1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWV0L3NoZWV0LWZvb3Rlci9zaGVldC1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoZWV0L3NoZWV0LWZvb3Rlci9zaGVldC1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1pbi13aWR0aDogODBweDtcclxufVxyXG4iLCIuYnRuIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBtaW4td2lkdGg6IDgwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SheetFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sheet-footer',
                templateUrl: './sheet-footer.component.html',
                styleUrls: ['./sheet-footer.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_current_session_service__WEBPACK_IMPORTED_MODULE_3__["CurrentSessionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sheet/sheet-header/sheet-header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/sheet/sheet-header/sheet-header.component.ts ***!
  \**************************************************************/
/*! exports provided: SheetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetHeaderComponent", function() { return SheetHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_current_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/current-session.service */ "./src/app/services/current-session.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_audio_audio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/audio/audio.component */ "./src/app/common/audio/audio.component.ts");





function SheetHeaderComponent_app_audio_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-audio", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("source", ctx_r0.ContentSource);
} }
function SheetHeaderComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHTML", ctx_r1.ContentSource, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class SheetHeaderComponent {
    constructor(session) {
        this.session = session;
    }
    ngOnInit() {
        this.part = this.session.currentPart;
    }
    ngOnChanges(changes) {
    }
}
SheetHeaderComponent.ɵfac = function SheetHeaderComponent_Factory(t) { return new (t || SheetHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_current_session_service__WEBPACK_IMPORTED_MODULE_1__["CurrentSessionService"])); };
SheetHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SheetHeaderComponent, selectors: [["app-sheet-header"]], inputs: { ContentSource: "ContentSource" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[3, "source", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [3, "source"], [3, "innerHTML"]], template: function SheetHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SheetHeaderComponent_app_audio_0_Template, 1, 1, "app-audio", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SheetHeaderComponent_span_1_Template, 1, 1, "span", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.part < 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.part >= 5);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _common_audio_audio_component__WEBPACK_IMPORTED_MODULE_3__["AudioComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoZWV0L3NoZWV0LWhlYWRlci9zaGVldC1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SheetHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sheet-header',
                templateUrl: './sheet-header.component.html',
                styleUrls: ['./sheet-header.component.scss']
            }]
    }], function () { return [{ type: src_app_services_current_session_service__WEBPACK_IMPORTED_MODULE_1__["CurrentSessionService"] }]; }, { ContentSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/sheet/sheet.component.ts":
/*!******************************************!*\
  !*** ./src/app/sheet/sheet.component.ts ***!
  \******************************************/
/*! exports provided: SheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetComponent", function() { return SheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_current_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/current-session.service */ "./src/app/services/current-session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sheet_footer_sheet_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sheet-footer/sheet-footer.component */ "./src/app/sheet/sheet-footer/sheet-footer.component.ts");
/* harmony import */ var _sheet_header_sheet_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sheet-header/sheet-header.component */ "./src/app/sheet/sheet-header/sheet-header.component.ts");








function SheetComponent_div_0_app_sheet_header_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sheet-header", 12);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ContentSource", ctx_r1.sheet.ContentSrc || ctx_r1.sheet.InnerHTMLContent);
} }
function SheetComponent_div_0_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0Select the answer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetComponent_div_0_div_5_div_1_Template_input_click_11_listener() { const q_r8 = ctx.$implicit; return q_r8.ChoosenAnswer = "A"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetComponent_div_0_div_5_div_1_Template_input_click_15_listener() { const q_r8 = ctx.$implicit; return q_r8.ChoosenAnswer = "B"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetComponent_div_0_div_5_div_1_Template_input_click_19_listener() { const q_r8 = ctx.$implicit; return q_r8.ChoosenAnswer = "C"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetComponent_div_0_div_5_div_1_Template_input_click_23_listener() { const q_r8 = ctx.$implicit; return q_r8.ChoosenAnswer = "D"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", q_r8.QuestionContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r8.SortOrder + ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", q_r8.ChoosenAnswer == "A")("name", "answer" + i_r9)("id", "answerA_" + i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "answerA_" + i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r8.AnswerA, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", q_r8.ChoosenAnswer == "B")("name", "answer" + i_r9)("id", "answerB_" + i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "answerB_" + i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r8.AnswerB, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", q_r8.ChoosenAnswer == "C")("name", "answer" + i_r9)("id", "answerC_" + i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "answerC_" + i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r8.AnswerC, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", q_r8.ChoosenAnswer == "D")("name", "answer" + i_r9)("id", "answerD_" + i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "answerD_" + i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r8.AnswerD, " ");
} }
function SheetComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SheetComponent_div_0_div_5_div_1_Template, 26, 22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.sheet.Questions);
} }
function SheetComponent_div_0_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetComponent_div_0_div_6_div_1_Template_input_click_10_listener() { const q_r15 = ctx.$implicit; return q_r15.ChoosenAnswer = "A"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetComponent_div_0_div_6_div_1_Template_input_click_14_listener() { const q_r15 = ctx.$implicit; return q_r15.ChoosenAnswer = "B"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetComponent_div_0_div_6_div_1_Template_input_click_18_listener() { const q_r15 = ctx.$implicit; return q_r15.ChoosenAnswer = "C"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r15.SortOrder + ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", q_r15.ChoosenAnswer == "A")("name", "answer" + i_r16)("id", "answerA_" + i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "answerA_" + i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r15.AnswerA, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", q_r15.ChoosenAnswer == "B")("name", "answer" + i_r16)("id", "answerB_" + i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "answerB_" + i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r15.AnswerB, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", q_r15.ChoosenAnswer == "C")("name", "answer" + i_r16)("id", "answerC_" + i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "answerC_" + i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r15.AnswerC, " ");
} }
function SheetComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SheetComponent_div_0_div_6_div_1_Template, 21, 16, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForAs", ctx_r3.Question)("ngForOf", ctx_r3.sheet.Questions);
} }
function SheetComponent_div_0_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetComponent_div_0_div_7_div_1_Template_input_click_11_listener() { const q_r21 = ctx.$implicit; return q_r21.ChoosenAnswer = "A"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetComponent_div_0_div_7_div_1_Template_input_click_15_listener() { const q_r21 = ctx.$implicit; return q_r21.ChoosenAnswer = "B"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetComponent_div_0_div_7_div_1_Template_input_click_19_listener() { const q_r21 = ctx.$implicit; return q_r21.ChoosenAnswer = "C"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetComponent_div_0_div_7_div_1_Template_input_click_23_listener() { const q_r21 = ctx.$implicit; return q_r21.ChoosenAnswer = "D"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r21.SortOrder + ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", q_r21.QuestionContent, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", q_r21.ChoosenAnswer == "A")("name", "answer" + i_r22)("id", "answerA_" + i_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "answerA_" + i_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r21.AnswerA, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", q_r21.ChoosenAnswer == "B")("name", "answer" + i_r22)("id", "answerB_" + i_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "answerB_" + i_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r21.AnswerB, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", q_r21.ChoosenAnswer == "C")("name", "answer" + i_r22)("id", "answerC_" + i_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "answerC_" + i_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r21.AnswerC, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", q_r21.ChoosenAnswer == "D")("name", "answer" + i_r22)("id", "answerD_" + i_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "answerD_" + i_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r21.AnswerD, " ");
} }
function SheetComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SheetComponent_div_0_div_7_div_1_Template, 26, 22, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForAs", ctx_r4.Question)("ngForOf", ctx_r4.sheet.Questions);
} }
function SheetComponent_div_0_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetComponent_div_0_div_8_div_1_Template_input_click_11_listener() { const q_r28 = ctx.$implicit; return q_r28.ChoosenAnswer = "A"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetComponent_div_0_div_8_div_1_Template_input_click_15_listener() { const q_r28 = ctx.$implicit; return q_r28.ChoosenAnswer = "B"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetComponent_div_0_div_8_div_1_Template_input_click_19_listener() { const q_r28 = ctx.$implicit; return q_r28.ChoosenAnswer = "C"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetComponent_div_0_div_8_div_1_Template_input_click_23_listener() { const q_r28 = ctx.$implicit; return q_r28.ChoosenAnswer = "D"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r28 = ctx.$implicit;
    const i_r29 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", q_r28.SortOrder + ".", "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", q_r28.QuestionContent, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", q_r28.ChoosenAnswer == "A")("name", "answer" + i_r29)("id", "answerA_" + i_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "answerA_" + i_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r28.AnswerA, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", q_r28.ChoosenAnswer == "B")("name", "answer" + i_r29)("id", "answerB_" + i_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "answerB_" + i_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r28.AnswerB, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", q_r28.ChoosenAnswer == "C")("name", "answer" + i_r29)("id", "answerC_" + i_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "answerC_" + i_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r28.AnswerC, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", q_r28.ChoosenAnswer == "D")("name", "answer" + i_r29)("id", "answerD_" + i_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "answerD_" + i_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r28.AnswerD, " ");
} }
function SheetComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SheetComponent_div_0_div_8_div_1_Template, 26, 22, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForAs", ctx_r5.Question)("ngForOf", ctx_r5.sheet.Questions);
} }
function SheetComponent_div_0_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetComponent_div_0_div_9_div_1_Template_input_click_11_listener() { const q_r35 = ctx.$implicit; return q_r35.ChoosenAnswer = "A"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetComponent_div_0_div_9_div_1_Template_input_click_15_listener() { const q_r35 = ctx.$implicit; return q_r35.ChoosenAnswer = "B"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetComponent_div_0_div_9_div_1_Template_input_click_19_listener() { const q_r35 = ctx.$implicit; return q_r35.ChoosenAnswer = "C"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SheetComponent_div_0_div_9_div_1_Template_input_click_23_listener() { const q_r35 = ctx.$implicit; return q_r35.ChoosenAnswer = "D"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r35 = ctx.$implicit;
    const i_r36 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", q_r35.SortOrder + ".", "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", q_r35.QuestionContent, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", q_r35.ChoosenAnswer == "A")("name", "answer" + i_r36)("id", "answerA_" + i_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "answerA_" + i_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r35.AnswerA, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", q_r35.ChoosenAnswer == "B")("name", "answer" + i_r36)("id", "answerB_" + i_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "answerB_" + i_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r35.AnswerB, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", q_r35.ChoosenAnswer == "C")("name", "answer" + i_r36)("id", "answerC_" + i_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "answerC_" + i_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r35.AnswerC, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", q_r35.ChoosenAnswer == "D")("name", "answer" + i_r36)("id", "answerD_" + i_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "answerD_" + i_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r35.AnswerD, " ");
} }
function SheetComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SheetComponent_div_0_div_9_div_1_Template, 26, 22, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForAs", ctx_r6.Question)("ngForOf", ctx_r6.sheet.Questions);
} }
function SheetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SheetComponent_div_0_app_sheet_header_3_Template, 1, 1, "app-sheet-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SheetComponent_div_0_div_5_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SheetComponent_div_0_div_6_Template, 2, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SheetComponent_div_0_div_7_Template, 2, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SheetComponent_div_0_div_8_Template, 2, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SheetComponent_div_0_div_9_Template, 2, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-sheet-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sheet.Questions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.part == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.part == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.part == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.part == 4 || ctx_r0.part == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.part == 6 || ctx_r0.part == 7);
} }
class SheetComponent {
    constructor(common, session, router) {
        this.common = common;
        this.session = session;
        this.router = router;
        this.sheetSrcContent = "../../../assets/audio/test.mp3";
        this.part = 0;
        this.session.isTesting = true;
    }
    ngOnInit() {
        if (this.session.currentBook !== null) {
            this.sheet = this.common.getCurrentSheet();
            this.part = this.session.currentPart;
        }
        else {
            this.session.isTesting = false;
            this.router
                .navigateByUrl('/refreshComponent', { skipLocationChange: true })
                .then(() => {
                this.router.navigate(['']);
            });
        }
    }
}
SheetComponent.ɵfac = function SheetComponent_Factory(t) { return new (t || SheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_session_service__WEBPACK_IMPORTED_MODULE_2__["CurrentSessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SheetComponent, selectors: [["app-sheet"]], decls: 1, vars: 1, consts: [["class", "row sheet-container", 4, "ngIf"], [1, "row", "sheet-container"], [1, "sheet-detail", "col-md-10", "offset-md-1"], [1, "sheet-header", "col-md-10", "offset-md-1"], [3, "ContentSource", 4, "ngIf"], [1, "body"], ["class", "questions part-1", 4, "ngIf"], ["class", "questions part-2", 4, "ngIf"], ["class", "questions part-3", 4, "ngIf"], ["class", "questions part-4", 4, "ngIf"], ["class", "questions part-6", 4, "ngIf"], [1, "footer"], [3, "ContentSource"], [1, "questions", "part-1"], ["class", "question", 4, "ngFor", "ngForOf"], [1, "question"], [1, "question-img", "col-md-8", "offset-md-2", 3, "src"], [1, "answer", "col-md-8", "offset-md-2"], [1, "row"], [1, "question-content"], [1, "question-number"], [1, "li-answer"], [1, "form-check"], ["type", "radio", 1, "my-auto", 3, "checked", "name", "id", "click"], [1, "form-check-label", 3, "for"], [1, "questions", "part-2"], ["class", "question col-md-3 offset-md-1", 4, "ngFor", "ngForAs", "ngForOf"], [1, "question", "col-md-3", "offset-md-1"], [1, "question-content", "col-md-6"], [1, "answer", "col-md-12"], [1, "questions", "part-3"], ["class", "question col-md-10 offset-md-1", 4, "ngFor", "ngForAs", "ngForOf"], [1, "question", "col-md-10", "offset-md-1"], [1, "question-content", "col-md-12"], [1, "questions", "part-4"], [1, "questions", "part-6"]], template: function SheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SheetComponent_div_0_Template, 12, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sheet);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _sheet_footer_sheet_footer_component__WEBPACK_IMPORTED_MODULE_5__["SheetFooterComponent"], _sheet_header_sheet_header_component__WEBPACK_IMPORTED_MODULE_6__["SheetHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".sheet-header[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.sheet-detail[_ngcontent-%COMP%] {\n  background-color: #fff;\n  max-width: 100vw;\n  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);\n}\n\n.sheet-container[_ngcontent-%COMP%] {\n  background-color: #ccc;\n  height: 100vh;\n  padding-top: 30px;\n}\n\n.part-2[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.part-5[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.question-content[_ngcontent-%COMP%] {\n  display: inherit;\n  font-weight: bold;\n  text-align: left;\n  line-height: 40px;\n}\n\n.question-number[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  color: #dd7f42;\n}\n\n.li-answer[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-align: left;\n  cursor: pointer;\n}\n\n.form-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  line-height: 30px;\n}\n\n.form-check-label[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  margin-bottom: 2px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\ninput[type=radio][_ngcontent-%COMP%] {\n  \n  -webkit-appearance: none;\n  \n  -moz-appearance: none;\n       appearance: none;\n  \n  background-color: var(--form-background);\n  \n  margin: 0;\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.15em solid currentColor;\n  border-radius: 50%;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n  cursor: pointer;\n}\n\ninput[type=radio][_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 0.65em;\n  height: 0.65em;\n  border-radius: 50%;\n  transform: scale(0);\n  box-shadow: inset 1em 1em #dd7f42;\n  \n  background-color: CanvasText;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:checked::before {\n  transform: scale(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlZXQvRDpcXEJZTE9KT0NcXE15VG9laWMvc3JjXFxhcHBcXHNoZWV0XFxzaGVldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlZXQvc2hlZXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWV0L0Q6XFxCWUxPSk9DXFxNeVRvZWljL3NyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7QUNERjs7QURHQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxxQkFBQTtBQ0VGOztBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURPQTtFQUNFLGlCQUFBO0VBQ0EsY0VyQ1U7QURpQ1o7O0FETUE7RUFFRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0pGOztBRE9BO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNKRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURLQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0ZGOztBRElBO0VBQ0Usa0NBQUE7RUFDQSx3QkFBQTtFQUNBLHdDQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQkFBQTtFQUNBLFNBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUVBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7QUNKRjs7QURPQTtFQUNFLG1CQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9zaGVldC9zaGVldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGUnO1xyXG5cclxuLnNoZWV0LWhlYWRlcntcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4uc2hlZXQtZGV0YWlse1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxuICBib3gtc2hhZG93OiAwIDAgMnB4IDFweCByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjIpO1xyXG4gIC8vaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uc2hlZXQtY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG4ucGFydC0yIC5xdWVzdGlvbntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnBhcnQtNSAucXVlc3Rpb257XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi8vIC5xdWVzdGlvbnMucGFydC0xe1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLnF1ZXN0aW9uLWltZ3tcclxuLy8gICB3aWR0aDogODAlO1xyXG4vLyAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4vLyB9XHJcbi5xdWVzdGlvbi1jb250ZW50e1xyXG4gIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG4ucXVlc3Rpb24tbnVtYmVye1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGNvbG9yOiAkbWFpbi1jb2xvcjtcclxufVxyXG4ubGktYW5zd2Vye1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcm0tY2hlY2t7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuLmZvcm0tY2hlY2stbGFiZWx7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG4uZm9vdGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAvKiBBZGQgaWYgbm90IHVzaW5nIGF1dG9wcmVmaXhlciAqL1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAvKiBSZW1vdmUgbW9zdCBhbGwgbmF0aXZlIGlucHV0IHN0eWxlcyAqL1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLyogRm9yIGlPUyA8IDE1ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1iYWNrZ3JvdW5kKTtcclxuICAvKiBOb3QgcmVtb3ZlZCB2aWEgYXBwZWFyYW5jZSAqL1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBjb2xvcjogY3VycmVudENvbG9yO1xyXG4gIHdpZHRoOiAxLjE1ZW07XHJcbiAgaGVpZ2h0OiAxLjE1ZW07XHJcbiAgYm9yZGVyOiAwLjE1ZW0gc29saWQgY3VycmVudENvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1ZW0pO1xyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAwLjY1ZW07XHJcbiAgaGVpZ2h0OiAwLjY1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgLy8gdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gJG1haW4tY29sb3I7XHJcbiAgLyogV2luZG93cyBIaWdoIENvbnRyYXN0IE1vZGUgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXNUZXh0O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZDo6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcbiIsIi5zaGVldC1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnNoZWV0LWRldGFpbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnNoZWV0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4ucGFydC0yIC5xdWVzdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBhcnQtNSAucXVlc3Rpb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5xdWVzdGlvbi1jb250ZW50IHtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuXG4ucXVlc3Rpb24tbnVtYmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZGQ3ZjQyO1xufVxuXG4ubGktYW5zd2VyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9ybS1jaGVjayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICAvKiBBZGQgaWYgbm90IHVzaW5nIGF1dG9wcmVmaXhlciAqL1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC8qIFJlbW92ZSBtb3N0IGFsbCBuYXRpdmUgaW5wdXQgc3R5bGVzICovXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC8qIEZvciBpT1MgPCAxNSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWJhY2tncm91bmQpO1xuICAvKiBOb3QgcmVtb3ZlZCB2aWEgYXBwZWFyYW5jZSAqL1xuICBtYXJnaW46IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIHdpZHRoOiAxLjE1ZW07XG4gIGhlaWdodDogMS4xNWVtO1xuICBib3JkZXI6IDAuMTVlbSBzb2xpZCBjdXJyZW50Q29sb3I7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjA3NWVtKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMC42NWVtO1xuICBoZWlnaHQ6IDAuNjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtICNkZDdmNDI7XG4gIC8qIFdpbmRvd3MgSGlnaCBDb250cmFzdCBNb2RlICovXG4gIGJhY2tncm91bmQtY29sb3I6IENhbnZhc1RleHQ7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQ6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59IiwiLy8gJG1haW4tY29sb3I6ICM1ZjI0OWY7XHJcbiRtYWluLWNvbG9yOiNkZDdmNDI7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SheetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sheet',
                templateUrl: './sheet.component.html',
                styleUrls: ['./sheet.component.scss'],
            }]
    }], function () { return [{ type: _services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }, { type: _services_current_session_service__WEBPACK_IMPORTED_MODULE_2__["CurrentSessionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/toeic-result/toeic-result.component.ts":
/*!********************************************************!*\
  !*** ./src/app/toeic-result/toeic-result.component.ts ***!
  \********************************************************/
/*! exports provided: ToeicResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToeicResultComponent", function() { return ToeicResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_Account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Account */ "./src/app/model/Account.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");




class ToeicResultComponent {
    constructor(common) {
        this.common = common;
    }
    ngOnInit() {
        this.userInfo = new _model_Account__WEBPACK_IMPORTED_MODULE_1__["Account"];
        this.userInfo.AccountId = "";
        this.userInfo.Token = "1234567890";
        this.userInfo.FirstName = "Guest";
        this.userInfo.LastName = "2022";
        this.userInfo.DateOfBirth = "1991/03/18";
        this.userInfo.IdentificationNumber = "999999999";
        this.userInfo.ReadingScore = this.common.getTestListeningResult();
        this.userInfo.ListeningScore = this.common.getTestReadingResult();
    }
}
ToeicResultComponent.ɵfac = function ToeicResultComponent_Factory(t) { return new (t || ToeicResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"])); };
ToeicResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToeicResultComponent, selectors: [["app-toeic-result"]], decls: 81, vars: 6, consts: [[1, "result-container"], [1, "result-header"], [1, "logo"], [1, "text"], [1, "title"], [1, "row", "result-row"], [1, "avatar", "col-md-2"], [1, "im", "im-user-male"], [1, "slogan"], [1, "cell", "col-md-10"], [1, "container", "result-body"], [1, "candidate"], [1, "name"], [1, "identicationNo"], [1, "identication"], [1, "testdate"], [1, "date"], [1, "listening"], [1, "part-score-title"], [1, "score"], [1, "score-number"], [1, "progress-bar-container"], [1, "progress-bar-indicator"], [1, "max"], [1, "min"], [1, "reading"], [1, "totalscore"], [1, "total-score"], [1, "total-score-number"], [1, "birthday"], [1, "birthtext"], [1, "validuntil"], [1, "validtxt"]], template: function ToeicResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " TOEIC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " LISTENING AND READING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " OFFICIAL SCORE CERTIFICATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "KNOW ENGLISH.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "KNOW SUCCESS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Identification Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "2022/11/11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Test Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " (yyyy/mm/dd)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " LISTENING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " 495 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " READING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " 495 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " TOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " SCORE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Date of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " (yyyy/mm/dd)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "3000/11/11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Valid Until");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " (yyyy/mm/dd)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userInfo.FirstName + " " + ctx.userInfo.LastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userInfo.Token);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userInfo.ListeningScore);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userInfo.ReadingScore);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userInfo.ListeningScore + ctx.userInfo.ReadingScore);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userInfo.DateOfBirth);
    } }, styles: [".result-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 10px;\n  position: relative;\n}\n\n.logo[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.logo[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 70px;\n  margin-left: 20px;\n  font-style: italic;\n  color: #003d7e;\n}\n\n.title[_ngcontent-%COMP%] {\n  width: 700px;\n  height: 200px;\n  background-color: #8c96b4;\n  border-radius: 60%;\n  padding-top: 10px;\n  display: inline-block;\n  z-index: 0;\n}\n\n.result-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  text-align: center;\n}\n\n.result-row[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.im-user-male[_ngcontent-%COMP%] {\n  font-size: 150px;\n  color: #fff;\n  background-color: #c0c6d7;\n  padding: 20px 0;\n  width: 100%;\n  height: 50%;\n  margin-top: 20px;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.slogan[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: bold;\n  color: #003d7e;\n}\n\n.result-row[_ngcontent-%COMP%] {\n  background-color: #fff;\n  z-index: 99;\n  position: absolute;\n  width: calc(100% - 40px);\n  margin: -100px 20px 0 20px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border: 5px solid #8c96b4;\n  text-align: left;\n  border-style: inset;\n}\n\n.part-score-title[_ngcontent-%COMP%] {\n  background-color: #8c96b4;\n  font-weight: bold;\n  display: inline-block;\n  padding: 2px 20px;\n  min-width: 130px;\n}\n\n.score[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n.score-number[_ngcontent-%COMP%] {\n  border: 2px solid #000;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  vertical-align: middle;\n  line-height: 80px;\n  display: inline-block;\n}\n\n.total-score[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n\n.total-score-number[_ngcontent-%COMP%] {\n  border: 2px solid #000;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  vertical-align: middle;\n  line-height: 100px;\n  display: inline-block;\n  font-weight: bold;\n}\n\n.result-body[_ngcontent-%COMP%] {\n  display: grid;\n  padding: 20px 0;\n  grid-template-columns: 20% 5% 15% 40% 20%;\n  grid-template-rows: 35px 35px 35px 35px 35px 35px 35px 35px 35px 35px 35px;\n  gap: 0px 0px;\n  grid-auto-flow: row;\n  grid-template-areas: \"candidate candidate candidate listening totalscore\" \"candidate candidate candidate listening totalscore\" \"name . . listening totalscore\" \". . . listening totalscore\" \"identicationNo identicationNo birthday listening totalscore\" \"identication . birthtext reading totalscore\" \"identication . birthtext reading totalscore\" \". . . reading totalscore\" \"testdate testdate validuntil reading totalscore\" \"date . validtxt reading totalscore\" \"date . validtxt reading totalscore\";\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n\n.candidate[_ngcontent-%COMP%] {\n  grid-area: candidate;\n  align-self: center;\n  border-left: 2px solid #000;\n  border-bottom: 2px solid #000;\n  height: 100%;\n  padding-left: 10px;\n}\n\n.name[_ngcontent-%COMP%] {\n  grid-area: name;\n  align-self: center;\n  height: 100%;\n  border-left: 2px solid #000;\n  border-bottom: 2px solid #000;\n  padding-left: 10px;\n}\n\n.identicationNo[_ngcontent-%COMP%] {\n  grid-area: identicationNo;\n  align-self: center;\n  height: 100%;\n  padding-left: 10px;\n  border-left: 2px solid #000;\n  border-bottom: 2px solid #000;\n}\n\n.identication[_ngcontent-%COMP%] {\n  grid-area: identication;\n  align-self: center;\n  height: 100%;\n  padding-left: 10px;\n  border-left: 2px solid #000;\n  border-bottom: 2px solid #000;\n}\n\n.testdate[_ngcontent-%COMP%] {\n  grid-area: testdate;\n  align-self: center;\n  height: 100%;\n  border-left: 2px solid #000;\n  border-bottom: 2px solid #000;\n  padding-left: 10px;\n}\n\n.date[_ngcontent-%COMP%] {\n  grid-area: date;\n  align-self: center;\n  height: 100%;\n  padding-left: 10px;\n  border-left: 2px solid #000;\n  border-bottom: 2px solid #000;\n}\n\n.listening[_ngcontent-%COMP%] {\n  grid-area: listening;\n  align-self: center;\n  height: 100%;\n  border-left: 2px solid;\n  padding: 10px 0 0 10px;\n  border-right: 2px solid #000;\n  border-bottom: 2px solid #000;\n  text-align: center;\n}\n\n.reading[_ngcontent-%COMP%] {\n  grid-area: reading;\n  align-self: center;\n  height: 100%;\n  border-left: 2px solid;\n  padding: 10px 0 0 10px;\n  border-right: 2px solid #000;\n  text-align: center;\n}\n\n.birthday[_ngcontent-%COMP%] {\n  grid-area: birthday;\n  align-self: center;\n  height: 100%;\n  padding-left: 10px;\n  border-left: 2px solid #000;\n  border-bottom: 2px solid #000;\n}\n\n.birthtext[_ngcontent-%COMP%] {\n  grid-area: birthtext;\n  align-self: center;\n  height: 100%;\n  padding-left: 10px;\n  border-left: 2px solid #000;\n  border-bottom: 2px solid #000;\n}\n\n.validuntil[_ngcontent-%COMP%] {\n  grid-area: validuntil;\n  align-self: center;\n  height: 100%;\n  padding-left: 10px;\n  border-left: 2px solid #000;\n  border-bottom: 2px solid #000;\n}\n\n.validtxt[_ngcontent-%COMP%] {\n  grid-area: validtxt;\n  align-self: center;\n  height: 100%;\n  padding-left: 10px;\n  border-left: 2px solid #000;\n  border-bottom: 2px solid #000;\n}\n\n.totalscore[_ngcontent-%COMP%] {\n  grid-area: totalscore;\n  align-self: center;\n  height: 100%;\n  text-align: center;\n  font-weight: bold;\n}\n\n.progress-bar-container[_ngcontent-%COMP%] {\n  height: 15px;\n  margin: 5px 50px 5px 30px;\n  background: none;\n  position: relative;\n  border: 1px solid;\n}\n\n.progress-bar-container[_ngcontent-%COMP%]   .max[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  margin-top: -12px;\n  right: -45px;\n}\n\n.progress-bar-container[_ngcontent-%COMP%]   .min[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  margin-top: -12px;\n  left: 0;\n  margin-left: -20px;\n}\n\n.progress-bar-indicator[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -webkit-mask: linear-gradient(#fff 0 0);\n  mask: linear-gradient(#fff 0 0);\n}\n\n.progress-bar-indicator[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image: linear-gradient(to right, white, gray, black);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9laWMtcmVzdWx0L0Q6XFxCWUxPSk9DXFxNeVRvZWljL3NyY1xcYXBwXFx0b2VpYy1yZXN1bHRcXHRvZWljLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9laWMtcmVzdWx0L3RvZWljLXJlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNJRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0tGOztBREZBO0VBQ0UsWUFBQTtBQ0tGOztBREhBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFFQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0tGOztBREhBO0VBQ0Usa0JBQUE7QUNNRjs7QURKQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDT0Y7O0FETEE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNRRjs7QURMQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNRRjs7QURMQTtFQUNFLGlCQUFBO0FDUUY7O0FETkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNTRjs7QURQQTtFQUNFLGlCQUFBO0FDVUY7O0FEUkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ1dGOztBRFRBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLDBFQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNGVBQ0U7QUNXSjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtBQ0NGOztBRENBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRUY7O0FERUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsaUJBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDUSwrQkFBQTtBQ0VWOztBREFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLCtEQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC90b2VpYy1yZXN1bHQvdG9laWMtcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdC1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmxvZ297XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5sb2dvIC50ZXh0e1xyXG4gIGZvbnQtc2l6ZTogNzBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgY29sb3I6ICMwMDNkN2U7XHJcbn1cclxuLnRpdGxlIHtcclxuICB3aWR0aDogNzAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGM5NmI0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDYwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG4ucmVzdWx0LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVzdWx0LXJvdyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5pbS11c2VyLW1hbGUge1xyXG4gIGZvbnQtc2l6ZTogMTUwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwYzZkNztcclxuICAvLyBwYWRkaW5nOiAyMHB4IDJweCAwIDJweDtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uYXZhdGFyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNsb2dhbntcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMwMDNkN2U7XHJcbn1cclxuLnJlc3VsdC1yb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICBtYXJnaW46IC0xMDBweCAyMHB4IDAgMjBweDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICM4Yzk2YjQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBib3JkZXItc3R5bGU6IGluc2V0O1xyXG4gIC8vIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcbi5wYXJ0LXNjb3JlLXRpdGxle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4Yzk2YjQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDJweCAyMHB4O1xyXG4gIG1pbi13aWR0aDogMTMwcHg7XHJcbn1cclxuXHJcbi5zY29yZXtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4uc2NvcmUtbnVtYmVye1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4udG90YWwtc2NvcmV7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuLnRvdGFsLXNjb3JlLW51bWJlcntcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnJlc3VsdC1ib2R5IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA1JSAxNSUgNDAlIDIwJTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1cHggMzVweCAzNXB4IDM1cHggMzVweCAzNXB4IDM1cHggMzVweCAzNXB4IDM1cHggMzVweDtcclxuICBnYXA6IDBweCAwcHg7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgXCJjYW5kaWRhdGUgY2FuZGlkYXRlIGNhbmRpZGF0ZSBsaXN0ZW5pbmcgdG90YWxzY29yZVwiXHJcbiAgICBcImNhbmRpZGF0ZSBjYW5kaWRhdGUgY2FuZGlkYXRlIGxpc3RlbmluZyB0b3RhbHNjb3JlXCJcclxuICAgIFwibmFtZSAuIC4gbGlzdGVuaW5nIHRvdGFsc2NvcmVcIlxyXG4gICAgXCIuIC4gLiBsaXN0ZW5pbmcgdG90YWxzY29yZVwiXHJcbiAgICBcImlkZW50aWNhdGlvbk5vIGlkZW50aWNhdGlvbk5vIGJpcnRoZGF5IGxpc3RlbmluZyB0b3RhbHNjb3JlXCJcclxuICAgIFwiaWRlbnRpY2F0aW9uIC4gYmlydGh0ZXh0IHJlYWRpbmcgdG90YWxzY29yZVwiXHJcbiAgICBcImlkZW50aWNhdGlvbiAuIGJpcnRodGV4dCByZWFkaW5nIHRvdGFsc2NvcmVcIlxyXG4gICAgXCIuIC4gLiByZWFkaW5nIHRvdGFsc2NvcmVcIlxyXG4gICAgXCJ0ZXN0ZGF0ZSB0ZXN0ZGF0ZSB2YWxpZHVudGlsIHJlYWRpbmcgdG90YWxzY29yZVwiXHJcbiAgICBcImRhdGUgLiB2YWxpZHR4dCByZWFkaW5nIHRvdGFsc2NvcmVcIlxyXG4gICAgXCJkYXRlIC4gdmFsaWR0eHQgcmVhZGluZyB0b3RhbHNjb3JlXCI7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogdW5zZXQ7XHJcbn1cclxuXHJcbi5jYW5kaWRhdGUge1xyXG4gIGdyaWQtYXJlYTogY2FuZGlkYXRlO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gIGdyaWQtYXJlYTogbmFtZTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAwMDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5pZGVudGljYXRpb25ObyB7XHJcbiAgZ3JpZC1hcmVhOiBpZGVudGljYXRpb25ObztcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XHJcbn1cclxuXHJcbi5pZGVudGljYXRpb24ge1xyXG4gIGdyaWQtYXJlYTogaWRlbnRpY2F0aW9uO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAwMDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcclxufVxyXG5cclxuLnRlc3RkYXRlIHtcclxuICBncmlkLWFyZWE6IHRlc3RkYXRlO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLmRhdGUge1xyXG4gIGdyaWQtYXJlYTogZGF0ZTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XHJcbn1cclxuXHJcbi5saXN0ZW5pbmcge1xyXG4gIGdyaWQtYXJlYTogbGlzdGVuaW5nO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZDtcclxuICBwYWRkaW5nOiAxMHB4IDAgMCAxMHB4O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVhZGluZyB7XHJcbiAgZ3JpZC1hcmVhOiByZWFkaW5nO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZDtcclxuICBwYWRkaW5nOiAxMHB4IDAgMCAxMHB4O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmlydGhkYXkge1xyXG4gIGdyaWQtYXJlYTogYmlydGhkYXk7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xyXG59XHJcblxyXG4uYmlydGh0ZXh0IHtcclxuICBncmlkLWFyZWE6IGJpcnRodGV4dDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XHJcbn1cclxuXHJcbi52YWxpZHVudGlsIHtcclxuICBncmlkLWFyZWE6IHZhbGlkdW50aWw7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xyXG59XHJcblxyXG4udmFsaWR0eHQge1xyXG4gIGdyaWQtYXJlYTogdmFsaWR0eHQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xyXG59XHJcbi50b3RhbHNjb3Jle1xyXG4gIGdyaWQtYXJlYTogdG90YWxzY29yZTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbi5wcm9ncmVzcy1iYXItY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luOiA1cHggNTBweCA1cHggMzBweDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcbi5wcm9ncmVzcy1iYXItY29udGFpbmVyIC5tYXh7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICByaWdodDogLTQ1cHg7XHJcbn1cclxuLnByb2dyZXNzLWJhci1jb250YWluZXIgLm1pbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG59XHJcblxyXG5cclxuLnByb2dyZXNzLWJhci1pbmRpY2F0b3Ige1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAtd2Via2l0LW1hc2s6bGluZWFyLWdyYWRpZW50KCNmZmYgMCAwKTtcclxuICAgICAgICAgIG1hc2s6bGluZWFyLWdyYWRpZW50KCNmZmYgMCAwKTtcclxufVxyXG4ucHJvZ3Jlc3MtYmFyLWluZGljYXRvcjo6YmVmb3JlIHtcclxuICBjb250ZW50OlwiXCI7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG4gIHJpZ2h0OjA7XHJcbiAgYm90dG9tOjA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB3aGl0ZSwgZ3JheSwgYmxhY2spO1xyXG59XHJcbiIsIi5yZXN1bHQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmxvZ28gLnRleHQge1xuICBmb250LXNpemU6IDcwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjMDAzZDdlO1xufVxuXG4udGl0bGUge1xuICB3aWR0aDogNzAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4Yzk2YjQ7XG4gIGJvcmRlci1yYWRpdXM6IDYwJTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgei1pbmRleDogMDtcbn1cblxuLnJlc3VsdC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZXN1bHQtcm93IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW0tdXNlci1tYWxlIHtcbiAgZm9udC1zaXplOiAxNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGM2ZDc7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYXZhdGFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2xvZ2FuIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDNkN2U7XG59XG5cbi5yZXN1bHQtcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgei1pbmRleDogOTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICBtYXJnaW46IC0xMDBweCAyMHB4IDAgMjBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgYm9yZGVyOiA1cHggc29saWQgIzhjOTZiNDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXN0eWxlOiBpbnNldDtcbn1cblxuLnBhcnQtc2NvcmUtdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGM5NmI0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAycHggMjBweDtcbiAgbWluLXdpZHRoOiAxMzBweDtcbn1cblxuLnNjb3JlIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5zY29yZS1udW1iZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50b3RhbC1zY29yZSB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4udG90YWwtc2NvcmUtbnVtYmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJlc3VsdC1ib2R5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMjBweCAwO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA1JSAxNSUgNDAlIDIwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzNXB4IDM1cHggMzVweCAzNXB4IDM1cHggMzVweCAzNXB4IDM1cHggMzVweCAzNXB4IDM1cHg7XG4gIGdhcDogMHB4IDBweDtcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJjYW5kaWRhdGUgY2FuZGlkYXRlIGNhbmRpZGF0ZSBsaXN0ZW5pbmcgdG90YWxzY29yZVwiIFwiY2FuZGlkYXRlIGNhbmRpZGF0ZSBjYW5kaWRhdGUgbGlzdGVuaW5nIHRvdGFsc2NvcmVcIiBcIm5hbWUgLiAuIGxpc3RlbmluZyB0b3RhbHNjb3JlXCIgXCIuIC4gLiBsaXN0ZW5pbmcgdG90YWxzY29yZVwiIFwiaWRlbnRpY2F0aW9uTm8gaWRlbnRpY2F0aW9uTm8gYmlydGhkYXkgbGlzdGVuaW5nIHRvdGFsc2NvcmVcIiBcImlkZW50aWNhdGlvbiAuIGJpcnRodGV4dCByZWFkaW5nIHRvdGFsc2NvcmVcIiBcImlkZW50aWNhdGlvbiAuIGJpcnRodGV4dCByZWFkaW5nIHRvdGFsc2NvcmVcIiBcIi4gLiAuIHJlYWRpbmcgdG90YWxzY29yZVwiIFwidGVzdGRhdGUgdGVzdGRhdGUgdmFsaWR1bnRpbCByZWFkaW5nIHRvdGFsc2NvcmVcIiBcImRhdGUgLiB2YWxpZHR4dCByZWFkaW5nIHRvdGFsc2NvcmVcIiBcImRhdGUgLiB2YWxpZHR4dCByZWFkaW5nIHRvdGFsc2NvcmVcIjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogdW5zZXQ7XG59XG5cbi5jYW5kaWRhdGUge1xuICBncmlkLWFyZWE6IGNhbmRpZGF0ZTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLm5hbWUge1xuICBncmlkLWFyZWE6IG5hbWU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5pZGVudGljYXRpb25ObyB7XG4gIGdyaWQtYXJlYTogaWRlbnRpY2F0aW9uTm87XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAwMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XG59XG5cbi5pZGVudGljYXRpb24ge1xuICBncmlkLWFyZWE6IGlkZW50aWNhdGlvbjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDAwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcbn1cblxuLnRlc3RkYXRlIHtcbiAgZ3JpZC1hcmVhOiB0ZXN0ZGF0ZTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAwMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmRhdGUge1xuICBncmlkLWFyZWE6IGRhdGU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAwMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XG59XG5cbi5saXN0ZW5pbmcge1xuICBncmlkLWFyZWE6IGxpc3RlbmluZztcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQ7XG4gIHBhZGRpbmc6IDEwcHggMCAwIDEwcHg7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWFkaW5nIHtcbiAgZ3JpZC1hcmVhOiByZWFkaW5nO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZDtcbiAgcGFkZGluZzogMTBweCAwIDAgMTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmlydGhkYXkge1xuICBncmlkLWFyZWE6IGJpcnRoZGF5O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xufVxuXG4uYmlydGh0ZXh0IHtcbiAgZ3JpZC1hcmVhOiBiaXJ0aHRleHQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAwMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XG59XG5cbi52YWxpZHVudGlsIHtcbiAgZ3JpZC1hcmVhOiB2YWxpZHVudGlsO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xufVxuXG4udmFsaWR0eHQge1xuICBncmlkLWFyZWE6IHZhbGlkdHh0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xufVxuXG4udG90YWxzY29yZSB7XG4gIGdyaWQtYXJlYTogdG90YWxzY29yZTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9ncmVzcy1iYXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW46IDVweCA1MHB4IDVweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciAubWF4IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xuICByaWdodDogLTQ1cHg7XG59XG5cbi5wcm9ncmVzcy1iYXItY29udGFpbmVyIC5taW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbn1cblxuLnByb2dyZXNzLWJhci1pbmRpY2F0b3Ige1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LW1hc2s6IGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCk7XG4gIG1hc2s6IGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCk7XG59XG5cbi5wcm9ncmVzcy1iYXItaW5kaWNhdG9yOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB3aGl0ZSwgZ3JheSwgYmxhY2spO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToeicResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toeic-result',
                templateUrl: './toeic-result.component.html',
                styleUrls: ['./toeic-result.component.scss']
            }]
    }], function () { return [{ type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\BYLOJOC\MyToeic\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map