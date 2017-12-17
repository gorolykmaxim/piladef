webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add.product.prompt.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-dialog-inputs-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add.product.prompt.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-title>Add new product</div>\n<div mat-dialog-content class=\"add-dialog-inputs-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Name\" [(ngModel)]=\"name\" [formControl]=\"nameFormControl\">\n    <mat-error *ngIf=\"!isNameValid()\">Please, enter the name of the product</mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput type=\"number\" placeholder=\"Amount\" [(ngModel)]=\"amount\" [formControl]=\"amountFormControl\">\n    <mat-error *ngIf=\"!isAmountValid()\">There should be at least 1 item of the product</mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput type=\"number\" placeholder=\"Price\" [(ngModel)]=\"price\" [formControl]=\"priceFormControl\">\n    <mat-error *ngIf=\"!isPriceValid()\">'Price should be bigger then 0'</mat-error>\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"create()\">Add</button>\n  <button mat-button (click)=\"close()\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-container {\n  position: fixed;\n  top: 0;\n}\n.nav-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"nav-container\">\n  <mat-toolbar-row *ngIf=\"isAuthorized\">\n    <span class=\"nav-spacer\"></span>\n    <span>{{userName}}</span>\n    <button mat-icon-button (click)=\"createProduct()\">\n      <mat-icon>add_shopping_cart</mat-icon>\n    </button>\n    <button mat-icon-button [matMenuTriggerFor]=\"basket\">\n      <mat-icon>shopping_basket</mat-icon>\n    </button>\n    <mat-menu #basket=\"matMenu\">\n      <button mat-menu-item *ngFor=\"let item of shoppingBasket\" (click)=\"removeItemFromShoppingBasket(item)\">\n        <mat-icon>remove_shopping_cart</mat-icon>\n        <span>{{item.name}}</span>\n      </button>\n    </mat-menu>\n  </mat-toolbar-row>\n  <mat-toolbar-row *ngIf=\"!isAuthorized\">\n    <span class=\"nav-spacer\"></span>\n    <a mat-button *ngIf=\"!isAuthorized\" routerLink=\"/login\">Log in</a>\n  </mat-toolbar-row>\n</mat-toolbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductPromptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_model_service__ = __webpack_require__("../../../../../src/app/services/model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AppComponent = (function () {
    function AppComponent(modelService, notificationService, dialog) {
        this.modelService = modelService;
        this.notificationService = notificationService;
        this.dialog = dialog;
    }
    Object.defineProperty(AppComponent.prototype, "isAuthorized", {
        get: function () {
            return this.modelService.isUserAuthorized();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "userName", {
        get: function () {
            return this.modelService.currentUser.login;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "shoppingBasket", {
        get: function () {
            return this.modelService.currentUser.getBasketItems();
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.createProduct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dialog, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dialog = this.dialog.open(AddProductPromptComponent);
                        return [4 /*yield*/, dialog.afterClosed().toPromise()];
                    case 1:
                        result = _a.sent();
                        if (!(result !== undefined)) return [3 /*break*/, 5];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.modelService.createProduct(result.name, result.amount, result.price)];
                    case 3:
                        _a.sent();
                        this.notificationService.notify(result.name + " product created");
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.notificationService.notify(error_1.message);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.removeItemFromShoppingBasket = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.modelService.removeItemFromBasket(item)];
                    case 1:
                        _a.sent();
                        this.notificationService.notify("Removed " + item.name + " from the shopping basket");
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.notificationService.notify(error_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_model_service__["b" /* ModelService */], __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDialog */]])
    ], AppComponent);
    return AppComponent;
}());

var AddProductPromptComponent = (function () {
    function AddProductPromptComponent(dialog) {
        this.dialog = dialog;
        this.nameFormControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].minLength(1)]);
        this.priceFormControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].min(1)]);
        this.amountFormControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].min(1)]);
    }
    AddProductPromptComponent.prototype.isNameValid = function () {
        return !this.nameFormControl.hasError('required') && !this.nameFormControl.hasError('minLength');
    };
    AddProductPromptComponent.prototype.isPriceValid = function () {
        return !this.priceFormControl.hasError('required') && !this.priceFormControl.hasError('min');
    };
    AddProductPromptComponent.prototype.isAmountValid = function () {
        return !this.amountFormControl.hasError('required') && !this.amountFormControl.hasError('min');
    };
    AddProductPromptComponent.prototype.create = function () {
        if (this.isNameValid() && this.isPriceValid() && this.isAmountValid()) {
            this.dialog.close({ name: this.name, amount: this.amount, price: this.price });
        }
    };
    AddProductPromptComponent.prototype.close = function () {
        this.dialog.close();
    };
    AddProductPromptComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-product-prompt',
            template: __webpack_require__("../../../../../src/app/add.product.prompt.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add.product.prompt.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialogRef */]])
    ], AddProductPromptComponent);
    return AddProductPromptComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_model_service__ = __webpack_require__("../../../../../src/app/services/model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["b" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["b" /* RegisterPromptComponent */],
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AddProductPromptComponent */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__login_login_component__["b" /* RegisterPromptComponent */], __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AddProductPromptComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__product_product_component__["a" /* ProductComponent */] },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_model_service__["b" /* ModelService */], __WEBPACK_IMPORTED_MODULE_11__services_notification_service__["a" /* NotificationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["b" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lg-background {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #EEEEEE;\n  height: 100%;\n}\n\n.lg-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  background-color: #FFFFFF;\n  padding: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"lg-background\">\n  <div class=\"lg-container\">\n    <mat-form-field>\n      <input matInput placeholder=\"Login\" [(ngModel)]=\"login\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\">\n    </mat-form-field>\n    <button mat-raised-button color=\"primary\" (click)=\"authorize()\">Login</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RegisterPromptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_model_service__ = __webpack_require__("../../../../../src/app/services/model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoginComponent = (function () {
    function LoginComponent(modelService, notificationService, router, dialog) {
        this.modelService = modelService;
        this.notificationService = notificationService;
        this.router = router;
        this.dialog = dialog;
        this.login = "";
        this.password = "";
    }
    LoginComponent.prototype.authorize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 7]);
                        return [4 /*yield*/, this.modelService.login(this.login, this.password)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.completeAuthorization()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 3:
                        error_1 = _a.sent();
                        if (!(error_1 instanceof __WEBPACK_IMPORTED_MODULE_1__services_model_service__["a" /* LoginFailedError */])) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.tryToRegister()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        this.notificationService.notify(error_1.message);
                        _a.label = 6;
                    case 6: return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.tryToRegister = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dialog, tryToRegister, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dialog = this.dialog.open(RegisterPromptComponent);
                        return [4 /*yield*/, dialog.afterClosed().toPromise()];
                    case 1:
                        tryToRegister = _a.sent();
                        if (!(tryToRegister === true)) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, this.modelService.register(this.login, this.password)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.authorize()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_2 = _a.sent();
                        this.notificationService.notify(error_2.message);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.completeAuthorization = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.notificationService.notify("Welcome, " + this.modelService.currentUser.login);
                        return [4 /*yield*/, this.router.navigateByUrl('/')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_model_service__["b" /* ModelService */], __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialog */]])
    ], LoginComponent);
    return LoginComponent;
}());

var RegisterPromptComponent = (function () {
    function RegisterPromptComponent(dialog) {
        this.dialog = dialog;
    }
    RegisterPromptComponent.prototype.close = function (result) {
        this.dialog.close(result);
    };
    RegisterPromptComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register-prompt',
            template: __webpack_require__("../../../../../src/app/login/register.prompt.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialogRef */]])
    ], RegisterPromptComponent);
    return RegisterPromptComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/register.prompt.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n  <p class=\"mat-body-1\">There is no account with such credentials.</p>\n  <p class=\"mat-body-1\">Do you want to register a new one?</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"close(true)\">Yes</button>\n  <button mat-button (click)=\"close(false)\">No</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-background {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  height: 100%;\n  background-color: #EEEEEE;\n}\n.main-placeholder {\n  height: 64px;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.main-search {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.main-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.main-list {\n  -webkit-box-flex: 6;\n      -ms-flex-positive: 6;\n          flex-grow: 6;\n  overflow-y: scroll;\n}\n.main-filter {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  padding: 20px;\n  margin: 20px;\n  background-color: #FFFFFF;\n}\n.main-list-item:hover {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-background\">\n  <div class=\"main-placeholder\"></div>\n  <div class=\"main-search\">\n    <mat-form-field>\n      <input matInput placeholder=\"Product name\" [matAutocomplete]=\"search\" [(ngModel)]=\"name\">\n      <mat-autocomplete #search=\"matAutocomplete\">\n        <mat-option *ngFor=\"let product of products\" [value]=\"product.name\">\n          <span>{{product.name}}</span>\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  </div>\n  <div class=\"main-body\">\n    <div class=\"main-filter\">\n      <h2 class=\"mat-h2\">Filter products by</h2>\n      <mat-form-field>\n        <input matInput placeholder=\"Price\" type=\"number\" [(ngModel)]=\"price\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Amount\" type=\"number\" [(ngModel)]=\"amount\">\n      </mat-form-field>\n      <button mat-raised-button color=\"primary\" (click)=\"updateProductList()\">Apply</button>\n    </div>\n    <div class=\"main-list\">\n      <mat-list>\n        <mat-list-item *ngFor=\"let product of products\">\n          <mat-icon matListIcon (click)=\"addToUsersBasket(product)\" class=\"main-list-item\">shopping_cart</mat-icon>\n          <h3 matLine>{{product.name}}</h3>\n          <p matLine>Amount - {{product.amount}} Price - {{product.price}}$</p>\n        </mat-list-item>\n      </mat-list>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_model_service__ = __webpack_require__("../../../../../src/app/services/model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ProductComponent = (function () {
    function ProductComponent(modelService, notificationService) {
        this.modelService = modelService;
        this.notificationService = notificationService;
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.updateProductList();
    };
    ProductComponent.prototype.addToUsersBasket = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.modelService.addItemToBasket(product)];
                    case 1:
                        _a.sent();
                        this.notificationService.notify("Added " + product.name + " to the shopping basket");
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.notificationService.notifyShort(error_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductComponent.prototype.updateCriteriaAndSearch = function (name, price, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.modelService.updateProductsSearchCriteria(name, price, amount)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.modelService.updateProductsList()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        this.notificationService.notifyShort(error_2.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductComponent.prototype.updateProductList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.modelService.updateProductsList()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        this.notificationService.notifyShort(error_3.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductComponent.prototype.updateProductListCriteria = function (name, price, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.modelService.updateProductsSearchCriteria(name, price, amount)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        this.notificationService.notifyShort(error_4.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(ProductComponent.prototype, "name", {
        get: function () {
            return this.modelService.getSearchName();
        },
        set: function (value) {
            this.updateCriteriaAndSearch(value, undefined, undefined);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "price", {
        get: function () {
            return this.modelService.getSearchPrice();
        },
        set: function (value) {
            this.updateProductListCriteria(undefined, value, undefined);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "amount", {
        get: function () {
            return this.modelService.getSearchAmount();
        },
        set: function (value) {
            this.updateProductListCriteria(undefined, undefined, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "products", {
        get: function () {
            return this.modelService.products;
        },
        enumerable: true,
        configurable: true
    });
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_model_service__["b" /* ModelService */], __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var Credentials = (function () {
    function Credentials(username, password) {
        this.username = username;
        this.password = password;
    }
    Credentials.prototype.toString = function () {
        return "Basic " + btoa(this.username + ":" + this.password);
    };
    return Credentials;
}());
var ApiHeaders = (function (_super) {
    __extends(ApiHeaders, _super);
    function ApiHeaders(username, password) {
        var _this = _super.call(this) || this;
        var credentials = new Credentials(username, password);
        _this.append('Authorization', credentials.toString());
        return _this;
    }
    return ApiHeaders;
}(__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]));
var Api = (function () {
    function Api(url, httpClient) {
        this.url = url;
        this.httpClient = httpClient;
        this.username = 'admin';
        this.password = 'changeit';
    }
    Api.prototype.getOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get(this.url + ("/" + id), this.createApiOptions()).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Api.prototype.getLike = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var serializedQuery, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        serializedQuery = JSON.stringify(query);
                        return [4 /*yield*/, this.httpClient.get(this.url + ("?filter=" + serializedQuery), this.createApiOptions()).toPromise()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data['_embedded']];
                }
            });
        });
    };
    Api.prototype.create = function (record) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.post(this.url, record, this.createApiOptions()).toPromise()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.update = function (id, record) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.put(this.url + ("/" + id), record, this.createApiOptions()).toPromise()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.delete = function (record) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.delete(this.url + ("/" + record.id), this.createApiOptions()).toPromise()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.createApiOptions = function () {
        return { headers: new ApiHeaders(this.username, this.password) };
    };
    return Api;
}());



/***/ }),

/***/ "../../../../../src/app/services/domain.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Entity */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ts_md5_dist_md5__ = __webpack_require__("../../../../ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ts_md5_dist_md5__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Entity = (function () {
    function Entity(id) {
        this.id = id;
    }
    Entity.prototype.isNew = function () {
        return this.id === undefined;
    };
    return Entity;
}());

var User = (function (_super) {
    __extends(User, _super);
    function User(id, login, password) {
        var _this = _super.call(this, id) || this;
        _this.login = login;
        _this.password = _this.isNew() ? __WEBPACK_IMPORTED_MODULE_0_ts_md5_dist_md5__["Md5"].hashStr(password, false).toString() : password;
        _this.shoppingBasket = [];
        return _this;
    }
    User.prototype.getBasketItems = function () {
        return this.shoppingBasket;
    };
    User.prototype.addItemToBasket = function (item) {
        this.shoppingBasket.push(item);
    };
    User.prototype.remoteItemFromBasket = function (item) {
        var index = this.shoppingBasket.indexOf(item);
        this.shoppingBasket.splice(index, 1);
    };
    return User;
}(Entity));

var Product = (function (_super) {
    __extends(Product, _super);
    function Product(id, name, amount, price) {
        var _this = _super.call(this, id) || this;
        _this.name = name;
        _this.amount = amount;
        _this.price = price;
        return _this;
    }
    return Product;
}(Entity));



/***/ }),

/***/ "../../../../../src/app/services/model.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModelService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFailedError; });
/* unused harmony export UnauthorizedActionError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_repository__ = __webpack_require__("../../../../../src/app/services/user.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_repository__ = __webpack_require__("../../../../../src/app/services/product.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_model__ = __webpack_require__("../../../../../src/app/services/domain.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ModelService = (function () {
    function ModelService(httpClient) {
        this.userRepository = new __WEBPACK_IMPORTED_MODULE_1__user_repository__["a" /* UserRepository */](httpClient);
        this.productRepository = new __WEBPACK_IMPORTED_MODULE_2__product_repository__["a" /* ProductRepository */](httpClient);
        this.products = [];
        this.productsSearchCriteria = { name: { $regex: '' } };
    }
    Object.defineProperty(ModelService.prototype, "currentUser", {
        get: function () {
            return this.user;
        },
        enumerable: true,
        configurable: true
    });
    ModelService.prototype.isUserAuthorized = function () {
        try {
            this.assertUserIsAuthorized();
            return true;
        }
        catch (error) {
            return false;
        }
    };
    ModelService.prototype.login = function (login, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user, query, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = new __WEBPACK_IMPORTED_MODULE_3__domain_model__["b" /* User */](undefined, login, password);
                        query = { login: user.login, password: user.password };
                        return [4 /*yield*/, this.userRepository.getUsersLike(query)];
                    case 1:
                        users = _a.sent();
                        if (users.length == 0) {
                            throw new LoginFailedError();
                        }
                        this.user = users[0];
                        return [2 /*return*/];
                }
            });
        });
    };
    ModelService.prototype.register = function (login, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = new __WEBPACK_IMPORTED_MODULE_3__domain_model__["b" /* User */](undefined, login, password);
                        return [4 /*yield*/, this.userRepository.save(user)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModelService.prototype.addItemToBasket = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.assertUserIsAuthorized();
                        this.user.addItemToBasket(product);
                        return [4 /*yield*/, this.productRepository.remove(product)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.userRepository.save(this.user)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.updateProductsList()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModelService.prototype.removeItemFromBasket = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.assertUserIsAuthorized();
                        this.user.remoteItemFromBasket(product);
                        return [4 /*yield*/, this.userRepository.save(this.user)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.createProduct(product.name, product.amount, product.price)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.updateProductsList()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModelService.prototype.createProduct = function (name, amount, price) {
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.assertUserIsAuthorized();
                        product = new __WEBPACK_IMPORTED_MODULE_3__domain_model__["a" /* Product */](undefined, name, amount, price);
                        return [4 /*yield*/, this.productRepository.save(product)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updateProductsList()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModelService.prototype.updateProductsSearchCriteria = function (name, price, amount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (name !== undefined) {
                    this.productsSearchCriteria.name.$regex = name;
                }
                if (price !== undefined) {
                    this.productsSearchCriteria.price = price;
                    if (price === null) {
                        delete this.productsSearchCriteria.price;
                    }
                }
                if (amount !== undefined) {
                    this.productsSearchCriteria.amount = amount;
                    if (amount === null) {
                        delete this.productsSearchCriteria.amount;
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    ModelService.prototype.getSearchName = function () {
        return this.productsSearchCriteria.name.$regex;
    };
    ModelService.prototype.getSearchPrice = function () {
        return this.productsSearchCriteria.price;
    };
    ModelService.prototype.getSearchAmount = function () {
        return this.productsSearchCriteria.amount;
    };
    ModelService.prototype.updateProductsList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.productRepository.getProductsLike(this.productsSearchCriteria)];
                    case 1:
                        _a.products = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModelService.prototype.assertUserIsAuthorized = function () {
        if (this.user === undefined) {
            throw new UnauthorizedActionError();
        }
    };
    ModelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], ModelService);
    return ModelService;
}());

var LoginFailedError = (function (_super) {
    __extends(LoginFailedError, _super);
    function LoginFailedError() {
        var _newTarget = this.constructor;
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, 'Login or password are incorrect') || this;
        _this.__proto__ = trueProto;
        return _this;
    }
    return LoginFailedError;
}(Error));

var UnauthorizedActionError = (function (_super) {
    __extends(UnauthorizedActionError, _super);
    function UnauthorizedActionError() {
        var _newTarget = this.constructor;
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, 'You need to log in first, in order to do this.') || this;
        _this.__proto__ = trueProto;
        return _this;
    }
    return UnauthorizedActionError;
}(Error));



/***/ }),

/***/ "../../../../../src/app/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LONG = 5000;
var SHORT = 2000;
var NotificationService = (function () {
    function NotificationService(snackBar) {
        this.snackBar = snackBar;
    }
    NotificationService.prototype.notify = function (message) {
        this.snackBar.open(message, undefined, { duration: LONG });
    };
    NotificationService.prototype.notifyShort = function (message) {
        this.snackBar.open(message, undefined, { duration: SHORT });
    };
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatSnackBar */]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/product.repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__("../../../../../src/app/services/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_model__ = __webpack_require__("../../../../../src/app/services/domain.model.ts");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ProductRepository = (function () {
    function ProductRepository(httpClient) {
        this.api = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* Api */]('/shop/product', httpClient);
    }
    ProductRepository.prototype.getOneProduct = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getOne(id)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_1__domain_model__["a" /* Product */](id, data['name'], data['amount'], data['price'])];
                }
            });
        });
    };
    ProductRepository.prototype.getProductsLike = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var data, products, _i, data_1, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getLike(query)];
                    case 1:
                        data = _a.sent();
                        products = [];
                        for (_i = 0, data_1 = data; _i < data_1.length; _i++) {
                            item = data_1[_i];
                            products.push(new __WEBPACK_IMPORTED_MODULE_1__domain_model__["a" /* Product */](item['_id']['$oid'], item['name'], item['amount'], item['price']));
                        }
                        return [2 /*return*/, products];
                }
            });
        });
    };
    ProductRepository.prototype.save = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!product.isNew()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.api.create({ name: product.name, amount: product.amount, price: product.price })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.api.update(product.id, { name: product.name, amount: product.amount, price: product.price })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductRepository.prototype.remove = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.delete(product)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProductRepository;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__("../../../../../src/app/services/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_model__ = __webpack_require__("../../../../../src/app/services/domain.model.ts");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var UserRepository = (function () {
    function UserRepository(httpClient) {
        this.api = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* Api */]('/shop/user', httpClient);
    }
    UserRepository.prototype.getOneUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getOne(id)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_1__domain_model__["b" /* User */](id, data['login'], data['password'])];
                }
            });
        });
    };
    UserRepository.prototype.getUsersLike = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var data, users, _i, data_1, item, user, _a, _b, product;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.api.getLike(query)];
                    case 1:
                        data = _c.sent();
                        users = [];
                        for (_i = 0, data_1 = data; _i < data_1.length; _i++) {
                            item = data_1[_i];
                            user = new __WEBPACK_IMPORTED_MODULE_1__domain_model__["b" /* User */](item['_id']['$oid'], item['login'], item['password']);
                            for (_a = 0, _b = item['shoppingBasket']; _a < _b.length; _a++) {
                                product = _b[_a];
                                user.addItemToBasket(new __WEBPACK_IMPORTED_MODULE_1__domain_model__["a" /* Product */](product['id'], product['name'], product['amount'], product['price']));
                            }
                            users.push(user);
                        }
                        return [2 /*return*/, users];
                }
            });
        });
    };
    UserRepository.prototype.save = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!user.isNew()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.api.create({ login: user.login, password: user.password, shoppingBasket: user.getBasketItems() })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.api.update(user.id, { login: user.login, password: user.password, shoppingBasket: user.getBasketItems() })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.remove = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.delete(user)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserRepository;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map