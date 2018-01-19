webpackJsonp(["main"],{

/***/ "../../../../../config/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../example/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../example/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../example/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"greetings center\">\n  <div>\n    <h1>Angular Contents</h1>\n    <a class=\"neat greyfy subtitle\" href=\"https://github.com/zurfyx/angular-contents\" rel=\"noopener\" target=\"_blank\">As seen on GitHub</a>\n  </div>\n</div>\n<div class=\"greetings-angle\"></div>\n\n<div class=\"reader\">\n  <a id=\"scrollView-switch\" class=\"switch neat\" href=\"javascript:void(0)\" (click)=\"scrollView=!scrollView\">\n    <span class=\"bubble\" [class.fill]=\"scrollView\"></span> Scroll view\n  </a>\n  <a id=\"scrollViewTable-switch\" class=\"switch neat\" href=\"javascript:void(0)\" (click)=\"scrollViewTable=!scrollViewTable\" *ngIf=\"scrollView\">\n    <span class=\"bubble\" [class.fill]=\"scrollViewTable\"></span> Including table\n  </a>\n\n  <!-- default.component.html -->\n  <app-default *ngIf=\"!scrollView\"></app-default>\n\n  <!-- scrolling-view.component.html -->\n  <app-scrolling-view *ngIf=\"scrollView && !scrollViewTable\"></app-scrolling-view>\n\n  <!-- scrolling-view-table.component.html -->\n  <app-scrolling-view-table *ngIf=\"scrollView && scrollViewTable\"></app-scrolling-view-table>\n\n  <div class=\"blank center\">\n    <div>\n      <p>The end.</p>\n      <i>This space was intentionally left blank.</i>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../example/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Noto+Serif);", ""]);

// module
exports.push([module.i, "html, body {\n  color: #444;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 17px;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%; }\n\nh1 {\n  font-family: 'Montserrat';\n  font-weight: 200;\n  margin-bottom: 2rem;\n  margin: 0; }\n\na.neat {\n  color: inherit;\n  text-decoration: none; }\n\na.shadowy {\n  padding: .5rem 1rem;\n  transition: .2s all ease-in; }\n  a.shadowy:hover {\n    color: #4aabc9;\n    background-color: #fff; }\n\na.greyfy {\n  transition: color 0.2s ease-in; }\n  a.greyfy:hover {\n    color: #999; }\n\n.bubble {\n  display: inline-block;\n  width: 0.5em;\n  height: 0.5em;\n  border: 2px solid #444;\n  border-radius: 0.8em; }\n  .bubble.fill {\n    background-color: #444; }\n\n.greetings {\n  background: #000;\n  color: #fff;\n  height: 40vh; }\n\n.greetings-angle {\n  position: relative;\n  display: block;\n  height: 10vh;\n  overflow: hidden;\n  max-width: 100%; }\n  .greetings-angle::after {\n    content: \"\";\n    position: absolute;\n    left: -100vh;\n    display: block;\n    background-color: #000;\n    margin-top: -15vh;\n    height: 20vh;\n    -webkit-transform: rotate(-2deg);\n            transform: rotate(-2deg);\n    width: 200vw; }\n\n.subtitle {\n  display: block;\n  margin-top: 1rem; }\n\n.center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center; }\n\n.blank {\n  height: 100vh; }\n\n.reader {\n  font-family: 'Noto Serif', serif;\n  line-height: 1.7em;\n  margin: 0 auto;\n  max-width: 900px;\n  text-align: justify; }\n  .reader h1 {\n    padding-top: 2rem;\n    padding-bottom: 1rem;\n    font-weight: 600; }\n\n.switch {\n  display: inline-block;\n  margin-bottom: 1rem; }\n\n.switch + .switch {\n  margin-left: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../example/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../example/app/app.component.html"),
            styles: [__webpack_require__("../../../../../example/app/app.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None,
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../example/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_page_scroll__ = __webpack_require__("../../../../ngx-page-scroll/ngx-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src__ = __webpack_require__("../../../../../src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../example/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__default_component__ = __webpack_require__("../../../../../example/app/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scrolling_view_component__ = __webpack_require__("../../../../../example/app/scrolling-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scrolling_view_table_component__ = __webpack_require__("../../../../../example/app/scrolling-view-table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_page_scroll__["a" /* NgxPageScrollModule */],
                __WEBPACK_IMPORTED_MODULE_3__src__["a" /* ContentsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__default_component__["a" /* DefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_6__scrolling_view_component__["a" /* ScrollingViewComponent */],
                __WEBPACK_IMPORTED_MODULE_7__scrolling_view_table_component__["a" /* ScrollingViewTableComponent */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../example/app/default.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columnify\" contents>\n  <!-- Body -->\n  <div>\n    <div [contentsSection]=\"'section-one'\">\n      <h1>Section One</h1>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero leo. Nunc in urna libero. Morbi quam sem, tempor quis sollicitudin ut, congue vitae enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet ex quis lorem tempus sodales. Mauris eget quam eget lacus vulputate egestas sed non tortor. Ut aliquam nulla ut turpis accumsan, et blandit nulla feugiat. Donec neque risus, ornare posuere imperdiet ut, auctor et magna. Ut justo sem, tempus sit amet risus at, efficitur sodales nulla. Quisque et nibh lacinia, gravida metus ac, scelerisque nisi.</p>\n      <p>Ut tristique odio commodo nunc placerat, id scelerisque ante vulputate. Sed ac ornare massa. Donec placerat elit quis nulla porttitor pulvinar. Maecenas id leo feugiat, pulvinar augue ac, tempus velit. Duis at facilisis nunc. Curabitur dolor felis, ultricies eu porta ac, eleifend vitae tortor. Curabitur ac volutpat risus, ut vehicula risus. Vivamus elit lectus, eleifend id est in, pulvinar tempor quam. Nam in sem ligula. Integer efficitur lacus in massa laoreet faucibus.</p>\n      <p>Fusce vitae elit ac massa feugiat porttitor. Aliquam pulvinar viverra erat. Nulla facilisi. Duis molestie mauris urna, a gravida lectus gravida ac. Vestibulum blandit orci non lobortis tincidunt. Donec non laoreet risus, lobortis ultricies sem. Nam auctor euismod urna, efficitur fermentum purus ullamcorper commodo. Duis venenatis nisl consequat consectetur porta.</p>\n      <p>Curabitur eget nisi at lacus fermentum viverra eu at metus. Nunc rhoncus euismod purus, non rhoncus odio viverra non. Curabitur iaculis eleifend elit vitae consequat. Fusce eu lorem nisl. Vestibulum eu ultrices arcu. Vivamus non volutpat orci. Morbi sed odio ante. Curabitur sit amet nunc vulputate, dapibus quam pellentesque, semper nisi. Nam mattis id felis ac dictum.</p>\n      <p>Donec quam sapien, venenatis vitae bibendum eget, condimentum a est. Nullam dignissim dolor diam, vel convallis erat viverra non. Aliquam dictum feugiat porta. Donec pulvinar dui non neque placerat tempus. Morbi rhoncus tortor a ligula dignissim, at vestibulum ex semper. Curabitur tincidunt, dui at maximus bibendum, neque urna suscipit nunc, ut tincidunt tellus erat ut augue. Vestibulum a blandit leo. Nunc tellus dui, tempor sit amet lacinia ut, cursus ac dui. Nulla sed sem arcu. Mauris eu nisl vitae purus elementum euismod sit amet gravida velit. Mauris eu justo et ex convallis cursus. Suspendisse et odio porta, tempus sapien eu, pretium tellus. Donec non maximus odio.</p>\n    </div>\n\n    <div [contentsSection]=\"'section-two'\">\n      <h1>Section Two</h1>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero leo. Nunc in urna libero. Morbi quam sem, tempor quis sollicitudin ut, congue vitae enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet ex quis lorem tempus sodales. Mauris eget quam eget lacus vulputate egestas sed non tortor. Ut aliquam nulla ut turpis accumsan, et blandit nulla feugiat. Donec neque risus, ornare posuere imperdiet ut, auctor et magna. Ut justo sem, tempus sit amet risus at, efficitur sodales nulla. Quisque et nibh lacinia, gravida metus ac, scelerisque nisi.</p>\n      <p>Ut tristique odio commodo nunc placerat, id scelerisque ante vulputate. Sed ac ornare massa. Donec placerat elit quis nulla porttitor pulvinar. Maecenas id leo feugiat, pulvinar augue ac, tempus velit. Duis at facilisis nunc. Curabitur dolor felis, ultricies eu porta ac, eleifend vitae tortor. Curabitur ac volutpat risus, ut vehicula risus. Vivamus elit lectus, eleifend id est in, pulvinar tempor quam. Nam in sem ligula. Integer efficitur lacus in massa laoreet faucibus.</p>\n      <p>Fusce vitae elit ac massa feugiat porttitor. Aliquam pulvinar viverra erat. Nulla facilisi. Duis molestie mauris urna, a gravida lectus gravida ac. Vestibulum blandit orci non lobortis tincidunt. Donec non laoreet risus, lobortis ultricies sem. Nam auctor euismod urna, efficitur fermentum purus ullamcorper commodo. Duis venenatis nisl consequat consectetur porta.</p>\n      <p>Curabitur eget nisi at lacus fermentum viverra eu at metus. Nunc rhoncus euismod purus, non rhoncus odio viverra non. Curabitur iaculis eleifend elit vitae consequat. Fusce eu lorem nisl. Vestibulum eu ultrices arcu. Vivamus non volutpat orci. Morbi sed odio ante. Curabitur sit amet nunc vulputate, dapibus quam pellentesque, semper nisi. Nam mattis id felis ac dictum.</p>\n      <p>Donec quam sapien, venenatis vitae bibendum eget, condimentum a est. Nullam dignissim dolor diam, vel convallis erat viverra non. Aliquam dictum feugiat porta. Donec pulvinar dui non neque placerat tempus. Morbi rhoncus tortor a ligula dignissim, at vestibulum ex semper. Curabitur tincidunt, dui at maximus bibendum, neque urna suscipit nunc, ut tincidunt tellus erat ut augue. Vestibulum a blandit leo. Nunc tellus dui, tempor sit amet lacinia ut, cursus ac dui. Nulla sed sem arcu. Mauris eu nisl vitae purus elementum euismod sit amet gravida velit. Mauris eu justo et ex convallis cursus. Suspendisse et odio porta, tempus sapien eu, pretium tellus. Donec non maximus odio.</p>\n    </div>\n\n    <div [contentsSection]=\"'section-three'\">\n      <h1>Section Three</h1>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero leo. Nunc in urna libero. Morbi quam sem, tempor quis sollicitudin ut, congue vitae enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet ex quis lorem tempus sodales. Mauris eget quam eget lacus vulputate egestas sed non tortor. Ut aliquam nulla ut turpis accumsan, et blandit nulla feugiat. Donec neque risus, ornare posuere imperdiet ut, auctor et magna. Ut justo sem, tempus sit amet risus at, efficitur sodales nulla. Quisque et nibh lacinia, gravida metus ac, scelerisque nisi.</p>\n      <p>Ut tristique odio commodo nunc placerat, id scelerisque ante vulputate. Sed ac ornare massa. Donec placerat elit quis nulla porttitor pulvinar. Maecenas id leo feugiat, pulvinar augue ac, tempus velit. Duis at facilisis nunc. Curabitur dolor felis, ultricies eu porta ac, eleifend vitae tortor. Curabitur ac volutpat risus, ut vehicula risus. Vivamus elit lectus, eleifend id est in, pulvinar tempor quam. Nam in sem ligula. Integer efficitur lacus in massa laoreet faucibus.</p>\n      <p>Fusce vitae elit ac massa feugiat porttitor. Aliquam pulvinar viverra erat. Nulla facilisi. Duis molestie mauris urna, a gravida lectus gravida ac. Vestibulum blandit orci non lobortis tincidunt. Donec non laoreet risus, lobortis ultricies sem. Nam auctor euismod urna, efficitur fermentum purus ullamcorper commodo. Duis venenatis nisl consequat consectetur porta.</p>\n      <p>Curabitur eget nisi at lacus fermentum viverra eu at metus. Nunc rhoncus euismod purus, non rhoncus odio viverra non. Curabitur iaculis eleifend elit vitae consequat. Fusce eu lorem nisl. Vestibulum eu ultrices arcu. Vivamus non volutpat orci. Morbi sed odio ante. Curabitur sit amet nunc vulputate, dapibus quam pellentesque, semper nisi. Nam mattis id felis ac dictum.</p>\n      <p>Donec quam sapien, venenatis vitae bibendum eget, condimentum a est. Nullam dignissim dolor diam, vel convallis erat viverra non. Aliquam dictum feugiat porta. Donec pulvinar dui non neque placerat tempus. Morbi rhoncus tortor a ligula dignissim, at vestibulum ex semper. Curabitur tincidunt, dui at maximus bibendum, neque urna suscipit nunc, ut tincidunt tellus erat ut augue. Vestibulum a blandit leo. Nunc tellus dui, tempor sit amet lacinia ut, cursus ac dui. Nulla sed sem arcu. Mauris eu nisl vitae purus elementum euismod sit amet gravida velit. Mauris eu justo et ex convallis cursus. Suspendisse et odio porta, tempus sapien eu, pretium tellus. Donec non maximus odio.</p>\n    </div>\n\n    <div [contentsSection]=\"'section-four'\">\n      <h1>Section Four</h1>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero leo. Nunc in urna libero. Morbi quam sem, tempor quis sollicitudin ut, congue vitae enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet ex quis lorem tempus sodales. Mauris eget quam eget lacus vulputate egestas sed non tortor. Ut aliquam nulla ut turpis accumsan, et blandit nulla feugiat. Donec neque risus, ornare posuere imperdiet ut, auctor et magna. Ut justo sem, tempus sit amet risus at, efficitur sodales nulla. Quisque et nibh lacinia, gravida metus ac, scelerisque nisi.</p>\n      <p>Ut tristique odio commodo nunc placerat, id scelerisque ante vulputate. Sed ac ornare massa. Donec placerat elit quis nulla porttitor pulvinar. Maecenas id leo feugiat, pulvinar augue ac, tempus velit. Duis at facilisis nunc. Curabitur dolor felis, ultricies eu porta ac, eleifend vitae tortor. Curabitur ac volutpat risus, ut vehicula risus. Vivamus elit lectus, eleifend id est in, pulvinar tempor quam. Nam in sem ligula. Integer efficitur lacus in massa laoreet faucibus.</p>\n      <p>Fusce vitae elit ac massa feugiat porttitor. Aliquam pulvinar viverra erat. Nulla facilisi. Duis molestie mauris urna, a gravida lectus gravida ac. Vestibulum blandit orci non lobortis tincidunt. Donec non laoreet risus, lobortis ultricies sem. Nam auctor euismod urna, efficitur fermentum purus ullamcorper commodo. Duis venenatis nisl consequat consectetur porta.</p>\n      <p>Curabitur eget nisi at lacus fermentum viverra eu at metus. Nunc rhoncus euismod purus, non rhoncus odio viverra non. Curabitur iaculis eleifend elit vitae consequat. Fusce eu lorem nisl. Vestibulum eu ultrices arcu. Vivamus non volutpat orci. Morbi sed odio ante. Curabitur sit amet nunc vulputate, dapibus quam pellentesque, semper nisi. Nam mattis id felis ac dictum.</p>\n      <p>Donec quam sapien, venenatis vitae bibendum eget, condimentum a est. Nullam dignissim dolor diam, vel convallis erat viverra non. Aliquam dictum feugiat porta. Donec pulvinar dui non neque placerat tempus. Morbi rhoncus tortor a ligula dignissim, at vestibulum ex semper. Curabitur tincidunt, dui at maximus bibendum, neque urna suscipit nunc, ut tincidunt tellus erat ut augue. Vestibulum a blandit leo. Nunc tellus dui, tempor sit amet lacinia ut, cursus ac dui. Nulla sed sem arcu. Mauris eu nisl vitae purus elementum euismod sit amet gravida velit. Mauris eu justo et ex convallis cursus. Suspendisse et odio porta, tempus sapien eu, pretium tellus. Donec non maximus odio.</p>\n    </div>\n\n    \n    <div [contentsSection]=\"'section-five'\">\n      <h1>Section Five</h1>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero leo. Nunc in urna libero. Morbi quam sem, tempor quis sollicitudin ut, congue vitae enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet ex quis lorem tempus sodales. Mauris eget quam eget lacus vulputate egestas sed non tortor. Ut aliquam nulla ut turpis accumsan, et blandit nulla feugiat. Donec neque risus, ornare posuere imperdiet ut, auctor et magna. Ut justo sem, tempus sit amet risus at, efficitur sodales nulla. Quisque et nibh lacinia, gravida metus ac, scelerisque nisi.</p>\n      <p>Ut tristique odio commodo nunc placerat, id scelerisque ante vulputate. Sed ac ornare massa. Donec placerat elit quis nulla porttitor pulvinar. Maecenas id leo feugiat, pulvinar augue ac, tempus velit. Duis at facilisis nunc. Curabitur dolor felis, ultricies eu porta ac, eleifend vitae tortor. Curabitur ac volutpat risus, ut vehicula risus. Vivamus elit lectus, eleifend id est in, pulvinar tempor quam. Nam in sem ligula. Integer efficitur lacus in massa laoreet faucibus.</p>\n      <p>Fusce vitae elit ac massa feugiat porttitor. Aliquam pulvinar viverra erat. Nulla facilisi. Duis molestie mauris urna, a gravida lectus gravida ac. Vestibulum blandit orci non lobortis tincidunt. Donec non laoreet risus, lobortis ultricies sem. Nam auctor euismod urna, efficitur fermentum purus ullamcorper commodo. Duis venenatis nisl consequat consectetur porta.</p>\n      <p>Curabitur eget nisi at lacus fermentum viverra eu at metus. Nunc rhoncus euismod purus, non rhoncus odio viverra non. Curabitur iaculis eleifend elit vitae consequat. Fusce eu lorem nisl. Vestibulum eu ultrices arcu. Vivamus non volutpat orci. Morbi sed odio ante. Curabitur sit amet nunc vulputate, dapibus quam pellentesque, semper nisi. Nam mattis id felis ac dictum.</p>\n      <p>Donec quam sapien, venenatis vitae bibendum eget, condimentum a est. Nullam dignissim dolor diam, vel convallis erat viverra non. Aliquam dictum feugiat porta. Donec pulvinar dui non neque placerat tempus. Morbi rhoncus tortor a ligula dignissim, at vestibulum ex semper. Curabitur tincidunt, dui at maximus bibendum, neque urna suscipit nunc, ut tincidunt tellus erat ut augue. Vestibulum a blandit leo. Nunc tellus dui, tempor sit amet lacinia ut, cursus ac dui. Nulla sed sem arcu. Mauris eu nisl vitae purus elementum euismod sit amet gravida velit. Mauris eu justo et ex convallis cursus. Suspendisse et odio porta, tempus sapien eu, pretium tellus. Donec non maximus odio.</p>\n    </div>\n  </div>\n\n  <!-- Table of Contents -->\n  <div class=\"table-column\">\n    <ul class=\"contents-table\" contentsTable>\n      <li><a href=\"#section-one\" contentsLink pageScroll>Section One</a></li>\n      <li><a href=\"#section-two\" contentsLink pageScroll>Section Two</a></li>\n      <li><a href=\"#section-three\" contentsLink pageScroll>Section Three</a></li>\n      <li><a href=\"#section-four\" contentsLink pageScroll>Section Four</a></li>\n      <li><a href=\"#section-five\" contentsLink pageScroll>Section Five</a></li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../example/app/default.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contents-table {\n  position: absolute;\n  padding: 2rem; }\n\n.contents-table.sticky {\n  position: fixed;\n  top: 0; }\n\n.contents-table {\n  list-style: none;\n  margin: 0; }\n\n.contents-table a {\n  border-radius: 4px;\n  display: block;\n  padding: 0.3rem 0.6rem;\n  color: #444;\n  text-decoration: none; }\n\n.contents-table a.active {\n  background-color: #000;\n  color: #fff; }\n\n.columnify > .table-column {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  width: 220px; }\n\n.columnify {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.columnify > * {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.columnify > *:not(:first-child) {\n  margin-left: 2rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../example/app/default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultComponent = (function () {
    function DefaultComponent() {
    }
    DefaultComponent.prototype.ngOnInit = function () { };
    DefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-default',
            template: __webpack_require__("../../../../../example/app/default.component.html"),
            styles: [__webpack_require__("../../../../../example/app/default.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "../../../../../example/app/scrolling-view-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"framed\" #container>\n  <div class=\"columnify\" contents [scrollingView]=\"container\" >\n    <!-- Body -->\n    <div>\n      <div [contentsSection]=\"'section-one'\">\n        <h1>Section One</h1>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero leo. Nunc in urna libero. Morbi quam sem, tempor quis sollicitudin ut, congue vitae enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet ex quis lorem tempus sodales. Mauris eget quam eget lacus vulputate egestas sed non tortor. Ut aliquam nulla ut turpis accumsan, et blandit nulla feugiat. Donec neque risus, ornare posuere imperdiet ut, auctor et magna. Ut justo sem, tempus sit amet risus at, efficitur sodales nulla. Quisque et nibh lacinia, gravida metus ac, scelerisque nisi.</p>\n        <p>Ut tristique odio commodo nunc placerat, id scelerisque ante vulputate. Sed ac ornare massa. Donec placerat elit quis nulla porttitor pulvinar. Maecenas id leo feugiat, pulvinar augue ac, tempus velit. Duis at facilisis nunc. Curabitur dolor felis, ultricies eu porta ac, eleifend vitae tortor. Curabitur ac volutpat risus, ut vehicula risus. Vivamus elit lectus, eleifend id est in, pulvinar tempor quam. Nam in sem ligula. Integer efficitur lacus in massa laoreet faucibus.</p>\n        <p>Fusce vitae elit ac massa feugiat porttitor. Aliquam pulvinar viverra erat. Nulla facilisi. Duis molestie mauris urna, a gravida lectus gravida ac. Vestibulum blandit orci non lobortis tincidunt. Donec non laoreet risus, lobortis ultricies sem. Nam auctor euismod urna, efficitur fermentum purus ullamcorper commodo. Duis venenatis nisl consequat consectetur porta.</p>\n        <p>Curabitur eget nisi at lacus fermentum viverra eu at metus. Nunc rhoncus euismod purus, non rhoncus odio viverra non. Curabitur iaculis eleifend elit vitae consequat. Fusce eu lorem nisl. Vestibulum eu ultrices arcu. Vivamus non volutpat orci. Morbi sed odio ante. Curabitur sit amet nunc vulputate, dapibus quam pellentesque, semper nisi. Nam mattis id felis ac dictum.</p>\n        <p>Donec quam sapien, venenatis vitae bibendum eget, condimentum a est. Nullam dignissim dolor diam, vel convallis erat viverra non. Aliquam dictum feugiat porta. Donec pulvinar dui non neque placerat tempus. Morbi rhoncus tortor a ligula dignissim, at vestibulum ex semper. Curabitur tincidunt, dui at maximus bibendum, neque urna suscipit nunc, ut tincidunt tellus erat ut augue. Vestibulum a blandit leo. Nunc tellus dui, tempor sit amet lacinia ut, cursus ac dui. Nulla sed sem arcu. Mauris eu nisl vitae purus elementum euismod sit amet gravida velit. Mauris eu justo et ex convallis cursus. Suspendisse et odio porta, tempus sapien eu, pretium tellus. Donec non maximus odio.</p>\n      </div>\n  \n      <div [contentsSection]=\"'section-two'\">\n        <h1>Section Two</h1>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero leo. Nunc in urna libero. Morbi quam sem, tempor quis sollicitudin ut, congue vitae enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet ex quis lorem tempus sodales. Mauris eget quam eget lacus vulputate egestas sed non tortor. Ut aliquam nulla ut turpis accumsan, et blandit nulla feugiat. Donec neque risus, ornare posuere imperdiet ut, auctor et magna. Ut justo sem, tempus sit amet risus at, efficitur sodales nulla. Quisque et nibh lacinia, gravida metus ac, scelerisque nisi.</p>\n        <p>Ut tristique odio commodo nunc placerat, id scelerisque ante vulputate. Sed ac ornare massa. Donec placerat elit quis nulla porttitor pulvinar. Maecenas id leo feugiat, pulvinar augue ac, tempus velit. Duis at facilisis nunc. Curabitur dolor felis, ultricies eu porta ac, eleifend vitae tortor. Curabitur ac volutpat risus, ut vehicula risus. Vivamus elit lectus, eleifend id est in, pulvinar tempor quam. Nam in sem ligula. Integer efficitur lacus in massa laoreet faucibus.</p>\n        <p>Fusce vitae elit ac massa feugiat porttitor. Aliquam pulvinar viverra erat. Nulla facilisi. Duis molestie mauris urna, a gravida lectus gravida ac. Vestibulum blandit orci non lobortis tincidunt. Donec non laoreet risus, lobortis ultricies sem. Nam auctor euismod urna, efficitur fermentum purus ullamcorper commodo. Duis venenatis nisl consequat consectetur porta.</p>\n        <p>Curabitur eget nisi at lacus fermentum viverra eu at metus. Nunc rhoncus euismod purus, non rhoncus odio viverra non. Curabitur iaculis eleifend elit vitae consequat. Fusce eu lorem nisl. Vestibulum eu ultrices arcu. Vivamus non volutpat orci. Morbi sed odio ante. Curabitur sit amet nunc vulputate, dapibus quam pellentesque, semper nisi. Nam mattis id felis ac dictum.</p>\n        <p>Donec quam sapien, venenatis vitae bibendum eget, condimentum a est. Nullam dignissim dolor diam, vel convallis erat viverra non. Aliquam dictum feugiat porta. Donec pulvinar dui non neque placerat tempus. Morbi rhoncus tortor a ligula dignissim, at vestibulum ex semper. Curabitur tincidunt, dui at maximus bibendum, neque urna suscipit nunc, ut tincidunt tellus erat ut augue. Vestibulum a blandit leo. Nunc tellus dui, tempor sit amet lacinia ut, cursus ac dui. Nulla sed sem arcu. Mauris eu nisl vitae purus elementum euismod sit amet gravida velit. Mauris eu justo et ex convallis cursus. Suspendisse et odio porta, tempus sapien eu, pretium tellus. Donec non maximus odio.</p>\n      </div>\n  \n      <div [contentsSection]=\"'section-three'\">\n        <h1>Section Three</h1>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero leo. Nunc in urna libero. Morbi quam sem, tempor quis sollicitudin ut, congue vitae enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet ex quis lorem tempus sodales. Mauris eget quam eget lacus vulputate egestas sed non tortor. Ut aliquam nulla ut turpis accumsan, et blandit nulla feugiat. Donec neque risus, ornare posuere imperdiet ut, auctor et magna. Ut justo sem, tempus sit amet risus at, efficitur sodales nulla. Quisque et nibh lacinia, gravida metus ac, scelerisque nisi.</p>\n        <p>Ut tristique odio commodo nunc placerat, id scelerisque ante vulputate. Sed ac ornare massa. Donec placerat elit quis nulla porttitor pulvinar. Maecenas id leo feugiat, pulvinar augue ac, tempus velit. Duis at facilisis nunc. Curabitur dolor felis, ultricies eu porta ac, eleifend vitae tortor. Curabitur ac volutpat risus, ut vehicula risus. Vivamus elit lectus, eleifend id est in, pulvinar tempor quam. Nam in sem ligula. Integer efficitur lacus in massa laoreet faucibus.</p>\n        <p>Fusce vitae elit ac massa feugiat porttitor. Aliquam pulvinar viverra erat. Nulla facilisi. Duis molestie mauris urna, a gravida lectus gravida ac. Vestibulum blandit orci non lobortis tincidunt. Donec non laoreet risus, lobortis ultricies sem. Nam auctor euismod urna, efficitur fermentum purus ullamcorper commodo. Duis venenatis nisl consequat consectetur porta.</p>\n        <p>Curabitur eget nisi at lacus fermentum viverra eu at metus. Nunc rhoncus euismod purus, non rhoncus odio viverra non. Curabitur iaculis eleifend elit vitae consequat. Fusce eu lorem nisl. Vestibulum eu ultrices arcu. Vivamus non volutpat orci. Morbi sed odio ante. Curabitur sit amet nunc vulputate, dapibus quam pellentesque, semper nisi. Nam mattis id felis ac dictum.</p>\n        <p>Donec quam sapien, venenatis vitae bibendum eget, condimentum a est. Nullam dignissim dolor diam, vel convallis erat viverra non. Aliquam dictum feugiat porta. Donec pulvinar dui non neque placerat tempus. Morbi rhoncus tortor a ligula dignissim, at vestibulum ex semper. Curabitur tincidunt, dui at maximus bibendum, neque urna suscipit nunc, ut tincidunt tellus erat ut augue. Vestibulum a blandit leo. Nunc tellus dui, tempor sit amet lacinia ut, cursus ac dui. Nulla sed sem arcu. Mauris eu nisl vitae purus elementum euismod sit amet gravida velit. Mauris eu justo et ex convallis cursus. Suspendisse et odio porta, tempus sapien eu, pretium tellus. Donec non maximus odio.</p>\n      </div>\n  \n      <div [contentsSection]=\"'section-four'\">\n        <h1>Section Four</h1>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero leo. Nunc in urna libero. Morbi quam sem, tempor quis sollicitudin ut, congue vitae enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet ex quis lorem tempus sodales. Mauris eget quam eget lacus vulputate egestas sed non tortor. Ut aliquam nulla ut turpis accumsan, et blandit nulla feugiat. Donec neque risus, ornare posuere imperdiet ut, auctor et magna. Ut justo sem, tempus sit amet risus at, efficitur sodales nulla. Quisque et nibh lacinia, gravida metus ac, scelerisque nisi.</p>\n        <p>Ut tristique odio commodo nunc placerat, id scelerisque ante vulputate. Sed ac ornare massa. Donec placerat elit quis nulla porttitor pulvinar. Maecenas id leo feugiat, pulvinar augue ac, tempus velit. Duis at facilisis nunc. Curabitur dolor felis, ultricies eu porta ac, eleifend vitae tortor. Curabitur ac volutpat risus, ut vehicula risus. Vivamus elit lectus, eleifend id est in, pulvinar tempor quam. Nam in sem ligula. Integer efficitur lacus in massa laoreet faucibus.</p>\n        <p>Fusce vitae elit ac massa feugiat porttitor. Aliquam pulvinar viverra erat. Nulla facilisi. Duis molestie mauris urna, a gravida lectus gravida ac. Vestibulum blandit orci non lobortis tincidunt. Donec non laoreet risus, lobortis ultricies sem. Nam auctor euismod urna, efficitur fermentum purus ullamcorper commodo. Duis venenatis nisl consequat consectetur porta.</p>\n        <p>Curabitur eget nisi at lacus fermentum viverra eu at metus. Nunc rhoncus euismod purus, non rhoncus odio viverra non. Curabitur iaculis eleifend elit vitae consequat. Fusce eu lorem nisl. Vestibulum eu ultrices arcu. Vivamus non volutpat orci. Morbi sed odio ante. Curabitur sit amet nunc vulputate, dapibus quam pellentesque, semper nisi. Nam mattis id felis ac dictum.</p>\n        <p>Donec quam sapien, venenatis vitae bibendum eget, condimentum a est. Nullam dignissim dolor diam, vel convallis erat viverra non. Aliquam dictum feugiat porta. Donec pulvinar dui non neque placerat tempus. Morbi rhoncus tortor a ligula dignissim, at vestibulum ex semper. Curabitur tincidunt, dui at maximus bibendum, neque urna suscipit nunc, ut tincidunt tellus erat ut augue. Vestibulum a blandit leo. Nunc tellus dui, tempor sit amet lacinia ut, cursus ac dui. Nulla sed sem arcu. Mauris eu nisl vitae purus elementum euismod sit amet gravida velit. Mauris eu justo et ex convallis cursus. Suspendisse et odio porta, tempus sapien eu, pretium tellus. Donec non maximus odio.</p>\n      </div>\n  \n      \n      <div [contentsSection]=\"'section-five'\">\n        <h1>Section Five</h1>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero leo. Nunc in urna libero. Morbi quam sem, tempor quis sollicitudin ut, congue vitae enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet ex quis lorem tempus sodales. Mauris eget quam eget lacus vulputate egestas sed non tortor. Ut aliquam nulla ut turpis accumsan, et blandit nulla feugiat. Donec neque risus, ornare posuere imperdiet ut, auctor et magna. Ut justo sem, tempus sit amet risus at, efficitur sodales nulla. Quisque et nibh lacinia, gravida metus ac, scelerisque nisi.</p>\n        <p>Ut tristique odio commodo nunc placerat, id scelerisque ante vulputate. Sed ac ornare massa. Donec placerat elit quis nulla porttitor pulvinar. Maecenas id leo feugiat, pulvinar augue ac, tempus velit. Duis at facilisis nunc. Curabitur dolor felis, ultricies eu porta ac, eleifend vitae tortor. Curabitur ac volutpat risus, ut vehicula risus. Vivamus elit lectus, eleifend id est in, pulvinar tempor quam. Nam in sem ligula. Integer efficitur lacus in massa laoreet faucibus.</p>\n        <p>Fusce vitae elit ac massa feugiat porttitor. Aliquam pulvinar viverra erat. Nulla facilisi. Duis molestie mauris urna, a gravida lectus gravida ac. Vestibulum blandit orci non lobortis tincidunt. Donec non laoreet risus, lobortis ultricies sem. Nam auctor euismod urna, efficitur fermentum purus ullamcorper commodo. Duis venenatis nisl consequat consectetur porta.</p>\n        <p>Curabitur eget nisi at lacus fermentum viverra eu at metus. Nunc rhoncus euismod purus, non rhoncus odio viverra non. Curabitur iaculis eleifend elit vitae consequat. Fusce eu lorem nisl. Vestibulum eu ultrices arcu. Vivamus non volutpat orci. Morbi sed odio ante. Curabitur sit amet nunc vulputate, dapibus quam pellentesque, semper nisi. Nam mattis id felis ac dictum.</p>\n        <p>Donec quam sapien, venenatis vitae bibendum eget, condimentum a est. Nullam dignissim dolor diam, vel convallis erat viverra non. Aliquam dictum feugiat porta. Donec pulvinar dui non neque placerat tempus. Morbi rhoncus tortor a ligula dignissim, at vestibulum ex semper. Curabitur tincidunt, dui at maximus bibendum, neque urna suscipit nunc, ut tincidunt tellus erat ut augue. Vestibulum a blandit leo. Nunc tellus dui, tempor sit amet lacinia ut, cursus ac dui. Nulla sed sem arcu. Mauris eu nisl vitae purus elementum euismod sit amet gravida velit. Mauris eu justo et ex convallis cursus. Suspendisse et odio porta, tempus sapien eu, pretium tellus. Donec non maximus odio.</p>\n      </div>\n    </div>\n  \n    <!-- Table of Contents -->\n    <div class=\"table-column\">\n      <ul class=\"contents-table\" contentsTable [scrollingView]=\"container\">\n        <li><a href=\"#section-one\" contentsLink (click)=\"animateScroll('#section-one')\">Section One</a></li>\n        <li><a href=\"#section-two\" contentsLink (click)=\"animateScroll('#section-two')\">Section Two</a></li>\n        <li><a href=\"#section-three\" contentsLink (click)=\"animateScroll('#section-three')\">Section Three</a></li>\n        <li><a href=\"#section-four\" contentsLink (click)=\"animateScroll('#section-four')\">Section Four</a></li>\n        <li><a href=\"#section-five\" contentsLink (click)=\"animateScroll('#section-five')\">Section Five</a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"blank center\">\n    <div>\n      <p>The end.</p>\n      <i>This space was intentionally left blank.</i>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../example/app/scrolling-view-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contents-table {\n  position: absolute;\n  padding: 2rem; }\n\n.contents-table.sticky {\n  position: fixed;\n  top: 0; }\n\n.contents-table {\n  list-style: none;\n  margin: 0; }\n\n.contents-table a {\n  border-radius: 4px;\n  display: block;\n  padding: 0.3rem 0.6rem;\n  color: #444;\n  text-decoration: none; }\n\n.contents-table a.active {\n  background-color: #000;\n  color: #fff; }\n\n.columnify > .table-column {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  width: 220px; }\n\n.framed {\n  position: relative;\n  height: 400px;\n  overflow-y: auto;\n  border: 1px solid #e2e2e2;\n  border-radius: 2px;\n  padding: 25px; }\n\n.columnify {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.columnify > * {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.columnify > *:not(:first-child) {\n  margin-left: 2rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../example/app/scrolling-view-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollingViewTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_page_scroll__ = __webpack_require__("../../../../ngx-page-scroll/ngx-page-scroll.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ScrollingViewTableComponent = (function () {
    function ScrollingViewTableComponent(pageScrollService, document) {
        this.pageScrollService = pageScrollService;
        this.document = document;
    }
    ScrollingViewTableComponent.prototype.animateScroll = function (sectionTarget) {
        // https://github.com/Nolanus/ngx-page-scroll#service
        var pageScrollInstance = __WEBPACK_IMPORTED_MODULE_2_ngx_page_scroll__["b" /* PageScrollInstance */].newInstance({
            document: this.document, scrollTarget: sectionTarget, scrollingViews: [this.container.nativeElement]
        });
        this.pageScrollService.start(pageScrollInstance);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ScrollingViewTableComponent.prototype, "container", void 0);
    ScrollingViewTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-scrolling-view-table',
            template: __webpack_require__("../../../../../example/app/scrolling-view-table.component.html"),
            styles: [__webpack_require__("../../../../../example/app/scrolling-view-table.component.scss")],
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_page_scroll__["c" /* PageScrollService */], Object])
    ], ScrollingViewTableComponent);
    return ScrollingViewTableComponent;
}());



/***/ }),

/***/ "../../../../../example/app/scrolling-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columnify\" contents [scrollingView]=\"container\">\n  <!-- Body -->\n  <div class=\"framed\" #container>\n    <div [contentsSection]=\"'section-one'\">\n      <h1>Section One</h1>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero leo. Nunc in urna libero. Morbi quam sem, tempor quis sollicitudin ut, congue vitae enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet ex quis lorem tempus sodales. Mauris eget quam eget lacus vulputate egestas sed non tortor. Ut aliquam nulla ut turpis accumsan, et blandit nulla feugiat. Donec neque risus, ornare posuere imperdiet ut, auctor et magna. Ut justo sem, tempus sit amet risus at, efficitur sodales nulla. Quisque et nibh lacinia, gravida metus ac, scelerisque nisi.</p>\n      <p>Ut tristique odio commodo nunc placerat, id scelerisque ante vulputate. Sed ac ornare massa. Donec placerat elit quis nulla porttitor pulvinar. Maecenas id leo feugiat, pulvinar augue ac, tempus velit. Duis at facilisis nunc. Curabitur dolor felis, ultricies eu porta ac, eleifend vitae tortor. Curabitur ac volutpat risus, ut vehicula risus. Vivamus elit lectus, eleifend id est in, pulvinar tempor quam. Nam in sem ligula. Integer efficitur lacus in massa laoreet faucibus.</p>\n      <p>Fusce vitae elit ac massa feugiat porttitor. Aliquam pulvinar viverra erat. Nulla facilisi. Duis molestie mauris urna, a gravida lectus gravida ac. Vestibulum blandit orci non lobortis tincidunt. Donec non laoreet risus, lobortis ultricies sem. Nam auctor euismod urna, efficitur fermentum purus ullamcorper commodo. Duis venenatis nisl consequat consectetur porta.</p>\n      <p>Curabitur eget nisi at lacus fermentum viverra eu at metus. Nunc rhoncus euismod purus, non rhoncus odio viverra non. Curabitur iaculis eleifend elit vitae consequat. Fusce eu lorem nisl. Vestibulum eu ultrices arcu. Vivamus non volutpat orci. Morbi sed odio ante. Curabitur sit amet nunc vulputate, dapibus quam pellentesque, semper nisi. Nam mattis id felis ac dictum.</p>\n      <p>Donec quam sapien, venenatis vitae bibendum eget, condimentum a est. Nullam dignissim dolor diam, vel convallis erat viverra non. Aliquam dictum feugiat porta. Donec pulvinar dui non neque placerat tempus. Morbi rhoncus tortor a ligula dignissim, at vestibulum ex semper. Curabitur tincidunt, dui at maximus bibendum, neque urna suscipit nunc, ut tincidunt tellus erat ut augue. Vestibulum a blandit leo. Nunc tellus dui, tempor sit amet lacinia ut, cursus ac dui. Nulla sed sem arcu. Mauris eu nisl vitae purus elementum euismod sit amet gravida velit. Mauris eu justo et ex convallis cursus. Suspendisse et odio porta, tempus sapien eu, pretium tellus. Donec non maximus odio.</p>\n    </div>\n\n    <div [contentsSection]=\"'section-two'\">\n      <h1>Section Two</h1>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero leo. Nunc in urna libero. Morbi quam sem, tempor quis sollicitudin ut, congue vitae enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet ex quis lorem tempus sodales. Mauris eget quam eget lacus vulputate egestas sed non tortor. Ut aliquam nulla ut turpis accumsan, et blandit nulla feugiat. Donec neque risus, ornare posuere imperdiet ut, auctor et magna. Ut justo sem, tempus sit amet risus at, efficitur sodales nulla. Quisque et nibh lacinia, gravida metus ac, scelerisque nisi.</p>\n      <p>Ut tristique odio commodo nunc placerat, id scelerisque ante vulputate. Sed ac ornare massa. Donec placerat elit quis nulla porttitor pulvinar. Maecenas id leo feugiat, pulvinar augue ac, tempus velit. Duis at facilisis nunc. Curabitur dolor felis, ultricies eu porta ac, eleifend vitae tortor. Curabitur ac volutpat risus, ut vehicula risus. Vivamus elit lectus, eleifend id est in, pulvinar tempor quam. Nam in sem ligula. Integer efficitur lacus in massa laoreet faucibus.</p>\n      <p>Fusce vitae elit ac massa feugiat porttitor. Aliquam pulvinar viverra erat. Nulla facilisi. Duis molestie mauris urna, a gravida lectus gravida ac. Vestibulum blandit orci non lobortis tincidunt. Donec non laoreet risus, lobortis ultricies sem. Nam auctor euismod urna, efficitur fermentum purus ullamcorper commodo. Duis venenatis nisl consequat consectetur porta.</p>\n      <p>Curabitur eget nisi at lacus fermentum viverra eu at metus. Nunc rhoncus euismod purus, non rhoncus odio viverra non. Curabitur iaculis eleifend elit vitae consequat. Fusce eu lorem nisl. Vestibulum eu ultrices arcu. Vivamus non volutpat orci. Morbi sed odio ante. Curabitur sit amet nunc vulputate, dapibus quam pellentesque, semper nisi. Nam mattis id felis ac dictum.</p>\n      <p>Donec quam sapien, venenatis vitae bibendum eget, condimentum a est. Nullam dignissim dolor diam, vel convallis erat viverra non. Aliquam dictum feugiat porta. Donec pulvinar dui non neque placerat tempus. Morbi rhoncus tortor a ligula dignissim, at vestibulum ex semper. Curabitur tincidunt, dui at maximus bibendum, neque urna suscipit nunc, ut tincidunt tellus erat ut augue. Vestibulum a blandit leo. Nunc tellus dui, tempor sit amet lacinia ut, cursus ac dui. Nulla sed sem arcu. Mauris eu nisl vitae purus elementum euismod sit amet gravida velit. Mauris eu justo et ex convallis cursus. Suspendisse et odio porta, tempus sapien eu, pretium tellus. Donec non maximus odio.</p>\n    </div>\n\n    <div [contentsSection]=\"'section-three'\">\n      <h1>Section Three</h1>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero leo. Nunc in urna libero. Morbi quam sem, tempor quis sollicitudin ut, congue vitae enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet ex quis lorem tempus sodales. Mauris eget quam eget lacus vulputate egestas sed non tortor. Ut aliquam nulla ut turpis accumsan, et blandit nulla feugiat. Donec neque risus, ornare posuere imperdiet ut, auctor et magna. Ut justo sem, tempus sit amet risus at, efficitur sodales nulla. Quisque et nibh lacinia, gravida metus ac, scelerisque nisi.</p>\n      <p>Ut tristique odio commodo nunc placerat, id scelerisque ante vulputate. Sed ac ornare massa. Donec placerat elit quis nulla porttitor pulvinar. Maecenas id leo feugiat, pulvinar augue ac, tempus velit. Duis at facilisis nunc. Curabitur dolor felis, ultricies eu porta ac, eleifend vitae tortor. Curabitur ac volutpat risus, ut vehicula risus. Vivamus elit lectus, eleifend id est in, pulvinar tempor quam. Nam in sem ligula. Integer efficitur lacus in massa laoreet faucibus.</p>\n      <p>Fusce vitae elit ac massa feugiat porttitor. Aliquam pulvinar viverra erat. Nulla facilisi. Duis molestie mauris urna, a gravida lectus gravida ac. Vestibulum blandit orci non lobortis tincidunt. Donec non laoreet risus, lobortis ultricies sem. Nam auctor euismod urna, efficitur fermentum purus ullamcorper commodo. Duis venenatis nisl consequat consectetur porta.</p>\n      <p>Curabitur eget nisi at lacus fermentum viverra eu at metus. Nunc rhoncus euismod purus, non rhoncus odio viverra non. Curabitur iaculis eleifend elit vitae consequat. Fusce eu lorem nisl. Vestibulum eu ultrices arcu. Vivamus non volutpat orci. Morbi sed odio ante. Curabitur sit amet nunc vulputate, dapibus quam pellentesque, semper nisi. Nam mattis id felis ac dictum.</p>\n      <p>Donec quam sapien, venenatis vitae bibendum eget, condimentum a est. Nullam dignissim dolor diam, vel convallis erat viverra non. Aliquam dictum feugiat porta. Donec pulvinar dui non neque placerat tempus. Morbi rhoncus tortor a ligula dignissim, at vestibulum ex semper. Curabitur tincidunt, dui at maximus bibendum, neque urna suscipit nunc, ut tincidunt tellus erat ut augue. Vestibulum a blandit leo. Nunc tellus dui, tempor sit amet lacinia ut, cursus ac dui. Nulla sed sem arcu. Mauris eu nisl vitae purus elementum euismod sit amet gravida velit. Mauris eu justo et ex convallis cursus. Suspendisse et odio porta, tempus sapien eu, pretium tellus. Donec non maximus odio.</p>\n    </div>\n\n    <div [contentsSection]=\"'section-four'\">\n      <h1>Section Four</h1>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero leo. Nunc in urna libero. Morbi quam sem, tempor quis sollicitudin ut, congue vitae enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet ex quis lorem tempus sodales. Mauris eget quam eget lacus vulputate egestas sed non tortor. Ut aliquam nulla ut turpis accumsan, et blandit nulla feugiat. Donec neque risus, ornare posuere imperdiet ut, auctor et magna. Ut justo sem, tempus sit amet risus at, efficitur sodales nulla. Quisque et nibh lacinia, gravida metus ac, scelerisque nisi.</p>\n      <p>Ut tristique odio commodo nunc placerat, id scelerisque ante vulputate. Sed ac ornare massa. Donec placerat elit quis nulla porttitor pulvinar. Maecenas id leo feugiat, pulvinar augue ac, tempus velit. Duis at facilisis nunc. Curabitur dolor felis, ultricies eu porta ac, eleifend vitae tortor. Curabitur ac volutpat risus, ut vehicula risus. Vivamus elit lectus, eleifend id est in, pulvinar tempor quam. Nam in sem ligula. Integer efficitur lacus in massa laoreet faucibus.</p>\n      <p>Fusce vitae elit ac massa feugiat porttitor. Aliquam pulvinar viverra erat. Nulla facilisi. Duis molestie mauris urna, a gravida lectus gravida ac. Vestibulum blandit orci non lobortis tincidunt. Donec non laoreet risus, lobortis ultricies sem. Nam auctor euismod urna, efficitur fermentum purus ullamcorper commodo. Duis venenatis nisl consequat consectetur porta.</p>\n      <p>Curabitur eget nisi at lacus fermentum viverra eu at metus. Nunc rhoncus euismod purus, non rhoncus odio viverra non. Curabitur iaculis eleifend elit vitae consequat. Fusce eu lorem nisl. Vestibulum eu ultrices arcu. Vivamus non volutpat orci. Morbi sed odio ante. Curabitur sit amet nunc vulputate, dapibus quam pellentesque, semper nisi. Nam mattis id felis ac dictum.</p>\n      <p>Donec quam sapien, venenatis vitae bibendum eget, condimentum a est. Nullam dignissim dolor diam, vel convallis erat viverra non. Aliquam dictum feugiat porta. Donec pulvinar dui non neque placerat tempus. Morbi rhoncus tortor a ligula dignissim, at vestibulum ex semper. Curabitur tincidunt, dui at maximus bibendum, neque urna suscipit nunc, ut tincidunt tellus erat ut augue. Vestibulum a blandit leo. Nunc tellus dui, tempor sit amet lacinia ut, cursus ac dui. Nulla sed sem arcu. Mauris eu nisl vitae purus elementum euismod sit amet gravida velit. Mauris eu justo et ex convallis cursus. Suspendisse et odio porta, tempus sapien eu, pretium tellus. Donec non maximus odio.</p>\n    </div>\n\n    \n    <div [contentsSection]=\"'section-five'\">\n      <h1>Section Five</h1>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero leo. Nunc in urna libero. Morbi quam sem, tempor quis sollicitudin ut, congue vitae enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet ex quis lorem tempus sodales. Mauris eget quam eget lacus vulputate egestas sed non tortor. Ut aliquam nulla ut turpis accumsan, et blandit nulla feugiat. Donec neque risus, ornare posuere imperdiet ut, auctor et magna. Ut justo sem, tempus sit amet risus at, efficitur sodales nulla. Quisque et nibh lacinia, gravida metus ac, scelerisque nisi.</p>\n      <p>Ut tristique odio commodo nunc placerat, id scelerisque ante vulputate. Sed ac ornare massa. Donec placerat elit quis nulla porttitor pulvinar. Maecenas id leo feugiat, pulvinar augue ac, tempus velit. Duis at facilisis nunc. Curabitur dolor felis, ultricies eu porta ac, eleifend vitae tortor. Curabitur ac volutpat risus, ut vehicula risus. Vivamus elit lectus, eleifend id est in, pulvinar tempor quam. Nam in sem ligula. Integer efficitur lacus in massa laoreet faucibus.</p>\n      <p>Fusce vitae elit ac massa feugiat porttitor. Aliquam pulvinar viverra erat. Nulla facilisi. Duis molestie mauris urna, a gravida lectus gravida ac. Vestibulum blandit orci non lobortis tincidunt. Donec non laoreet risus, lobortis ultricies sem. Nam auctor euismod urna, efficitur fermentum purus ullamcorper commodo. Duis venenatis nisl consequat consectetur porta.</p>\n      <p>Curabitur eget nisi at lacus fermentum viverra eu at metus. Nunc rhoncus euismod purus, non rhoncus odio viverra non. Curabitur iaculis eleifend elit vitae consequat. Fusce eu lorem nisl. Vestibulum eu ultrices arcu. Vivamus non volutpat orci. Morbi sed odio ante. Curabitur sit amet nunc vulputate, dapibus quam pellentesque, semper nisi. Nam mattis id felis ac dictum.</p>\n      <p>Donec quam sapien, venenatis vitae bibendum eget, condimentum a est. Nullam dignissim dolor diam, vel convallis erat viverra non. Aliquam dictum feugiat porta. Donec pulvinar dui non neque placerat tempus. Morbi rhoncus tortor a ligula dignissim, at vestibulum ex semper. Curabitur tincidunt, dui at maximus bibendum, neque urna suscipit nunc, ut tincidunt tellus erat ut augue. Vestibulum a blandit leo. Nunc tellus dui, tempor sit amet lacinia ut, cursus ac dui. Nulla sed sem arcu. Mauris eu nisl vitae purus elementum euismod sit amet gravida velit. Mauris eu justo et ex convallis cursus. Suspendisse et odio porta, tempus sapien eu, pretium tellus. Donec non maximus odio.</p>\n    </div>\n  </div>\n\n  <!-- Table of Contents -->\n  <div class=\"table-column\">\n    <ul class=\"contents-table\" contentsTable>\n      <li><a href=\"#section-one\" contentsLink (click)=\"animateScroll('#section-one')\">Section One</a></li>\n      <li><a href=\"#section-two\" contentsLink (click)=\"animateScroll('#section-two')\">Section Two</a></li>\n      <li><a href=\"#section-three\" contentsLink (click)=\"animateScroll('#section-three')\">Section Three</a></li>\n      <li><a href=\"#section-four\" contentsLink (click)=\"animateScroll('#section-four')\">Section Four</a></li>\n      <li><a href=\"#section-five\" contentsLink (click)=\"animateScroll('#section-five')\">Section Five</a></li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../example/app/scrolling-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contents-table {\n  position: absolute;\n  padding: 2rem; }\n\n.contents-table.sticky {\n  position: fixed;\n  top: 0; }\n\n.contents-table {\n  list-style: none;\n  margin: 0; }\n\n.contents-table a {\n  border-radius: 4px;\n  display: block;\n  padding: 0.3rem 0.6rem;\n  color: #444;\n  text-decoration: none; }\n\n.contents-table a.active {\n  background-color: #000;\n  color: #fff; }\n\n.columnify > .table-column {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  width: 220px; }\n\n.framed {\n  position: relative;\n  height: 400px;\n  overflow-y: auto;\n  border: 1px solid #e2e2e2;\n  border-radius: 2px;\n  padding: 25px; }\n\n.columnify {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.columnify > * {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.columnify > *:not(:first-child) {\n  margin-left: 2rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../example/app/scrolling-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollingViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_page_scroll__ = __webpack_require__("../../../../ngx-page-scroll/ngx-page-scroll.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ScrollingViewComponent = (function () {
    function ScrollingViewComponent(pageScrollService, document) {
        this.pageScrollService = pageScrollService;
        this.document = document;
    }
    ScrollingViewComponent.prototype.animateScroll = function (sectionTarget) {
        // https://github.com/Nolanus/ngx-page-scroll#service
        var pageScrollInstance = __WEBPACK_IMPORTED_MODULE_2_ngx_page_scroll__["b" /* PageScrollInstance */].newInstance({
            document: this.document, scrollTarget: sectionTarget, scrollingViews: [this.container.nativeElement]
        });
        this.pageScrollService.start(pageScrollInstance);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ScrollingViewComponent.prototype, "container", void 0);
    ScrollingViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-scrolling-view',
            template: __webpack_require__("../../../../../example/app/scrolling-view.component.html"),
            styles: [__webpack_require__("../../../../../example/app/scrolling-view.component.scss")],
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_page_scroll__["c" /* PageScrollService */], Object])
    ], ScrollingViewComponent);
    return ScrollingViewComponent;
}());



/***/ }),

/***/ "../../../../../example/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../example/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_environment__ = __webpack_require__("../../../../../config/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__config_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/contents-link.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentsLinkDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contents_directive__ = __webpack_require__("../../../../../src/contents.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ContentsLinkDirective = (function () {
    function ContentsLinkDirective(contents) {
        this.contents = contents;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.active = false;
    }
    ContentsLinkDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.contents._activeSection$
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (sectionName) {
            _this.active = "#" + sectionName === _this.href;
        });
    };
    ContentsLinkDirective.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContentsLinkDirective.prototype, "href", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.active'),
        __metadata("design:type", Object)
    ], ContentsLinkDirective.prototype, "active", void 0);
    ContentsLinkDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[contentsLink]',
            exportAs: 'contentsLink',
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Host */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__contents_directive__["a" /* ContentsDirective */]])
    ], ContentsLinkDirective);
    return ContentsLinkDirective;
}());



/***/ }),

/***/ "../../../../../src/contents-section.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentsSectionDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__html_utils__ = __webpack_require__("../../../../../src/html-utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contents_directive__ = __webpack_require__("../../../../../src/contents.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ContentsSectionDirective = (function () {
    function ContentsSectionDirective(contents, elementRef) {
        this.contents = contents;
        this.elementRef = elementRef;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    ContentsSectionDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.detectActiveChanges();
        this.contents._onScroll$
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (event) {
            _this.detectActiveChanges();
        });
    };
    ContentsSectionDirective.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    ContentsSectionDirective.prototype.detectActiveChanges = function () {
        if (this.isInRange() || !this.contents._activeSection$.value) {
            this.contents._activeSection$.next(this.contentsSection);
        }
    };
    ContentsSectionDirective.prototype.isInRange = function () {
        var pageOffset = this.contents.scrollingView ? this.contents.scrollingView.scrollTop : Object(__WEBPACK_IMPORTED_MODULE_3__html_utils__["a" /* documentOffset */])();
        var element = this.elementRef.nativeElement;
        var offset = element.offsetTop;
        var height = Object(__WEBPACK_IMPORTED_MODULE_3__html_utils__["b" /* getAbsoluteHeight */])(element);
        return pageOffset >= offset && pageOffset <= offset + height;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('id'), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ContentsSectionDirective.prototype, "contentsSection", void 0);
    ContentsSectionDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[contentsSection]',
            exportAs: 'contentsSection',
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Host */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__contents_directive__["a" /* ContentsDirective */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ContentsSectionDirective);
    return ContentsSectionDirective;
}());



/***/ }),

/***/ "../../../../../src/contents-table.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentsTableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__html_utils__ = __webpack_require__("../../../../../src/html-utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentsTableDirective = (function () {
    function ContentsTableDirective(elementRef) {
        var _this = this;
        this.elementRef = elementRef;
        this.sticky = false;
        this.marginTop = '0px';
        this.scrollFun = function (event) { return _this.updateStickiness(); };
    }
    ContentsTableDirective.prototype.ngOnInit = function () {
        this.updateStickiness();
        this.unsubscribeScrollEventListener();
        this.subscribeScrollEventListener();
    };
    ContentsTableDirective.prototype.ngOnChanges = function () {
        this.unsubscribeScrollEventListener();
        this.subscribeScrollEventListener();
    };
    ContentsTableDirective.prototype.ngOnDestroy = function () {
        this.unsubscribeScrollEventListener();
    };
    // Subscribe to scrollingView scroll events. Sections will detectChanges() on scroll changes.
    ContentsTableDirective.prototype.subscribeScrollEventListener = function () {
        (this.scrollingView || document).addEventListener('scroll', this.scrollFun, false);
    };
    ContentsTableDirective.prototype.unsubscribeScrollEventListener = function () {
        (this.scrollingView || document).removeEventListener('scroll', this.scrollFun, false);
    };
    /**
     * Check whether the Table of Contents should be a sticky, to keep itself visible while the user
     * scrolls.
     */
    ContentsTableDirective.prototype.updateStickiness = function () {
        var pageOffset = this.scrollingView ? this.scrollingView.scrollTop : Object(__WEBPACK_IMPORTED_MODULE_1__html_utils__["a" /* documentOffset */])();
        var parentElement = this.elementRef.nativeElement.parentNode;
        var parentOffset = parentElement.offsetTop;
        var parentHeight = Object(__WEBPACK_IMPORTED_MODULE_1__html_utils__["b" /* getAbsoluteHeight */])(parentElement);
        var element = this.elementRef.nativeElement;
        var elementInnerHeight = element.offsetHeight;
        // Edge case. Hasn't scrolled through the content yet.
        // Use a fixed margin-top of 0.
        if (pageOffset <= parentOffset) {
            this.marginTop = '0px';
            this.sticky = false;
            return;
        }
        // Edge case. Scrolling past the parent container.
        // Use a fixed margin-top based on the parent and element height.
        if (pageOffset + elementInnerHeight > parentOffset + parentHeight) {
            this.marginTop = parentHeight - elementInnerHeight + "px";
            this.sticky = false;
            return;
        }
        // Scrolling through the content.
        // Default (best browser performance): use a margin-top of 0 and position fixed while the user
        // is scrolling.
        // Fallback, when using a custom container: use a calculated margin to simulate a fixed position.
        if (!this.scrollingView) {
            this.marginTop = '0px';
            this.sticky = true;
        }
        else {
            this.marginTop = pageOffset - parentOffset + "px";
            this.sticky = false;
        }
    };
    ContentsTableDirective.prototype.getHeight = function (target) {
        var element = this.elementRef.nativeElement;
        var styles = window.getComputedStyle(element);
        var margin = parseFloat(styles.marginTop || '0') +
            parseFloat(styles.marginBottom || '0');
        return Math.ceil(element.offsetHeight + margin);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", HTMLElement)
    ], ContentsTableDirective.prototype, "scrollingView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.sticky'),
        __metadata("design:type", Object)
    ], ContentsTableDirective.prototype, "sticky", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('style.margin-top'),
        __metadata("design:type", Object)
    ], ContentsTableDirective.prototype, "marginTop", void 0);
    ContentsTableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[contentsTable]',
            exportAs: 'contentsTable',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ContentsTableDirective);
    return ContentsTableDirective;
}());



/***/ }),

/***/ "../../../../../src/contents.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentsDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentsDirective = (function () {
    function ContentsDirective() {
        var _this = this;
        this._onScroll$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this._activeSection$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.scrollFun = function (event) { return _this._onScroll$.next(event); };
    }
    ContentsDirective.prototype.ngOnInit = function () {
        this.unsubscribeScrollEventListener();
        this.subscribeScrollEventListener();
    };
    ContentsDirective.prototype.ngOnChanges = function () {
        this.unsubscribeScrollEventListener();
        this.subscribeScrollEventListener();
    };
    ContentsDirective.prototype.ngOnDestroy = function () {
        this.unsubscribeScrollEventListener();
    };
    // Subscribe to scrollingView scroll events. Sections will detectChanges() on scroll changes.
    ContentsDirective.prototype.subscribeScrollEventListener = function () {
        (this.scrollingView || document).addEventListener('scroll', this.scrollFun, false);
    };
    ContentsDirective.prototype.unsubscribeScrollEventListener = function () {
        (this.scrollingView || document).removeEventListener('scroll', this.scrollFun, false);
    };
    ContentsDirective.prototype.activeSection = function () {
        return this._activeSection$
            .asObservable()
            .filter(function (section) { return !!section; }); // Prevent returning null values.
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", HTMLElement)
    ], ContentsDirective.prototype, "scrollingView", void 0);
    ContentsDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[contents]',
            exportAs: 'contents',
        }),
        __metadata("design:paramtypes", [])
    ], ContentsDirective);
    return ContentsDirective;
}());



/***/ }),

/***/ "../../../../../src/contents.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contents_link_directive__ = __webpack_require__("../../../../../src/contents-link.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contents_section_directive__ = __webpack_require__("../../../../../src/contents-section.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contents_table_directive__ = __webpack_require__("../../../../../src/contents-table.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contents_directive__ = __webpack_require__("../../../../../src/contents.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContentsModule = (function () {
    function ContentsModule() {
    }
    ContentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__contents_link_directive__["a" /* ContentsLinkDirective */],
                __WEBPACK_IMPORTED_MODULE_2__contents_section_directive__["a" /* ContentsSectionDirective */],
                __WEBPACK_IMPORTED_MODULE_3__contents_table_directive__["a" /* ContentsTableDirective */],
                __WEBPACK_IMPORTED_MODULE_4__contents_directive__["a" /* ContentsDirective */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__contents_link_directive__["a" /* ContentsLinkDirective */],
                __WEBPACK_IMPORTED_MODULE_2__contents_section_directive__["a" /* ContentsSectionDirective */],
                __WEBPACK_IMPORTED_MODULE_3__contents_table_directive__["a" /* ContentsTableDirective */],
                __WEBPACK_IMPORTED_MODULE_4__contents_directive__["a" /* ContentsDirective */],
            ],
            providers: [],
        })
    ], ContentsModule);
    return ContentsModule;
}());



/***/ }),

/***/ "../../../../../src/html-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getAbsoluteHeight;
/* harmony export (immutable) */ __webpack_exports__["a"] = documentOffset;
// http://stackoverflow.com/a/23749355
function getAbsoluteHeight(element) {
    var styles = window.getComputedStyle(element);
    var margin = parseFloat(styles.marginTop || '0') +
        parseFloat(styles.marginBottom || '0');
    return Math.ceil(element.offsetHeight + margin);
}
// https://stackoverflow.com/a/20478983
function documentOffset() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}


/***/ }),

/***/ "../../../../../src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contents_link_directive__ = __webpack_require__("../../../../../src/contents-link.directive.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contents_section_directive__ = __webpack_require__("../../../../../src/contents-section.directive.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contents_table_directive__ = __webpack_require__("../../../../../src/contents-table.directive.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contents_directive__ = __webpack_require__("../../../../../src/contents.directive.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contents_module__ = __webpack_require__("../../../../../src/contents.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__contents_module__["a"]; });







/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../example/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map