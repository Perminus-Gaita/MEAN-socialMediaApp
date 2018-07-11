(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/guard.service */ "./src/app/guards/guard.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_profile_show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/profile/show-profile/show-profile.component */ "./src/app/components/profile/show-profile/show-profile.component.ts");
/* harmony import */ var _components_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/edit-profile/edit-profile.component */ "./src/app/components/profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _components_profile_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/notifications/notifications.component */ "./src/app/components/profile/notifications/notifications.component.ts");
/* harmony import */ var _components_profile_edit_profile_update_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/edit-profile/update/update.component */ "./src/app/components/profile/edit-profile/update/update.component.ts");
/* harmony import */ var _components_profile_edit_profile_password_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile/edit-profile/password/password.component */ "./src/app/components/profile/edit-profile/password/password.component.ts");
/* harmony import */ var _components_profile_users_profile_users_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile/users-profile/users-profile.component */ "./src/app/components/profile/users-profile/users-profile.component.ts");
/* harmony import */ var _components_profile_my_photos_my_photos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/profile/my-photos/my-photos.component */ "./src/app/components/profile/my-photos/my-photos.component.ts");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/confirm/confirm.component */ "./src/app/components/confirm/confirm.component.ts");
/* harmony import */ var _components_discover_discover_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/discover/discover.component */ "./src/app/components/discover/discover.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], canActivate: [_guards_guard_service__WEBPACK_IMPORTED_MODULE_3__["GuardService"]] },
    { path: 'user/:id/emailconfirmation', component: _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"] },
    { path: 'discover', component: _components_discover_discover_component__WEBPACK_IMPORTED_MODULE_17__["DiscoverComponent"], canActivate: [_guards_guard_service__WEBPACK_IMPORTED_MODULE_3__["GuardService"]] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], canActivate: [_guards_guard_service__WEBPACK_IMPORTED_MODULE_3__["GuardService"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], children: [
            { path: 'edit/:id', component: _components_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__["EditProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], children: [
                    { path: 'password', component: _components_profile_edit_profile_password_password_component__WEBPACK_IMPORTED_MODULE_13__["PasswordComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
                    { path: '', component: _components_profile_edit_profile_update_update_component__WEBPACK_IMPORTED_MODULE_12__["UpdateComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] }
                ] },
            { path: '', component: _components_profile_show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_9__["ShowProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: ':id', component: _components_profile_users_profile_users_profile_component__WEBPACK_IMPORTED_MODULE_14__["UsersProfileComponent"], runGuardsAndResolvers: 'always', },
            { path: ':id/myphotos', component: _components_profile_my_photos_my_photos_component__WEBPACK_IMPORTED_MODULE_15__["MyPhotosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: ':id/notifications', component: _components_profile_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__["NotificationsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] }
        ], runGuardsAndResolvers: 'always' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], canActivate: [_guards_guard_service__WEBPACK_IMPORTED_MODULE_3__["GuardService"]] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], runGuardsAndResolvers: 'always', },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .container{\n    margin-top: 100px;\n} */\n.flashmessage{\n    width: 400px;\n    margin-top: 10px;\n    margin-left: 400px;\n    position: absolute;\n    font-size: 15px;\n    box-shadow: 0 0 10px rgb(129, 129, 129);\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n    <app-navbar></app-navbar>\n</div>\n\n<div class=\"container\">\n    \n    <flash-messages class=\"flashmessage\"></flash-messages>\n    <router-outlet  ></router-outlet><br><br>  \n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _services_shares_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/shares.service */ "./src/app/services/shares.service.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/profile/edit-profile/edit-profile.component */ "./src/app/components/profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _components_profile_show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/profile/show-profile/show-profile.component */ "./src/app/components/profile/show-profile/show-profile.component.ts");
/* harmony import */ var _components_profile_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/profile/notifications/notifications.component */ "./src/app/components/profile/notifications/notifications.component.ts");
/* harmony import */ var _components_profile_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/profile/navigation/navigation.component */ "./src/app/components/profile/navigation/navigation.component.ts");
/* harmony import */ var _components_profile_edit_profile_update_update_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/profile/edit-profile/update/update.component */ "./src/app/components/profile/edit-profile/update/update.component.ts");
/* harmony import */ var _components_profile_edit_profile_password_password_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/profile/edit-profile/password/password.component */ "./src/app/components/profile/edit-profile/password/password.component.ts");
/* harmony import */ var _components_profile_users_profile_users_profile_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/profile/users-profile/users-profile.component */ "./src/app/components/profile/users-profile/users-profile.component.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _components_profile_my_photos_my_photos_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/profile/my-photos/my-photos.component */ "./src/app/components/profile/my-photos/my-photos.component.ts");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/confirm/confirm.component */ "./src/app/components/confirm/confirm.component.ts");
/* harmony import */ var _components_discover_discover_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/discover/discover.component */ "./src/app/components/discover/discover.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_22__["NavbarComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"],
                _components_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_26__["EditProfileComponent"],
                _components_profile_show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_27__["ShowProfileComponent"],
                _components_profile_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_28__["NotificationsComponent"],
                _components_profile_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_29__["NavigationComponent"],
                _components_profile_edit_profile_update_update_component__WEBPACK_IMPORTED_MODULE_30__["UpdateComponent"],
                _components_profile_edit_profile_password_password_component__WEBPACK_IMPORTED_MODULE_31__["PasswordComponent"],
                _components_profile_users_profile_users_profile_component__WEBPACK_IMPORTED_MODULE_32__["UsersProfileComponent"],
                _components_profile_my_photos_my_photos_component__WEBPACK_IMPORTED_MODULE_34__["MyPhotosComponent"],
                _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_35__["ConfirmComponent"],
                _components_discover_discover_component__WEBPACK_IMPORTED_MODULE_36__["DiscoverComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__["FlashMessagesModule"].forRoot(),
                angularfire2__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__["environment"].firebaseConfig),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_18__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyC5yxF7c5kP2bXKORcPbRHHCDIcwHuFERI'
                })
            ],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _services_validate_service__WEBPACK_IMPORTED_MODULE_7__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_location_service__WEBPACK_IMPORTED_MODULE_9__["LocationService"], _services_shares_service__WEBPACK_IMPORTED_MODULE_12__["SharesService"], _services_users_service__WEBPACK_IMPORTED_MODULE_33__["UsersService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/confirm/confirm.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/confirm/confirm.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/confirm/confirm.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/confirm/confirm.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 80%; height: 50; padding: 100px; background: rgb(148, 216, 148); text-align: center;\">\n    <h4>{{message}}</h4>\n    <a *ngIf='aTag' [routerLink]=\"['/login']\" class=\"btn\" style=\"width:100px; height: 30px; background: blue; color: white;\"> Login </a>\n</div>"

/***/ }),

/***/ "./src/app/components/confirm/confirm.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/confirm/confirm.component.ts ***!
  \*********************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(_router, _route, _authService, _flashMessagesService) {
        this._router = _router;
        this._route = _route;
        this._authService = _authService;
        this._flashMessagesService = _flashMessagesService;
        this.aTag = null;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
            var tempObservable2 = _this._authService.confirmEmail(_this.id);
            tempObservable2.subscribe(function (data) {
                if (data['succes'] === true) {
                    _this.aTag = true;
                }
                _this.message = data['msg'];
                console.log(_this.aTag);
            });
        });
    };
    ConfirmComponent.prototype.loginSubmit = function (user) {
        var _this = this;
        var observable = this._authService.authenticateUser(user);
        observable.subscribe(function (data) {
            if (data['success']) {
                _this._authService.storeUserData(data['token'], data['user']);
                _this._flashMessagesService.show('Successfully logged in!', { cssClass: 'alert-success', timeout: 4000 });
                _this._router.navigate(['/dashboard']);
            }
            else {
                _this._flashMessagesService.show(data['msg'], { cssClass: 'alert-danger', timeout: 4000 });
                _this._router.navigate(['/login']);
            }
        });
    };
    ConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__(/*! ./confirm.component.html */ "./src/app/components/confirm/confirm.component.html"),
            styles: [__webpack_require__(/*! ./confirm.component.css */ "./src/app/components/confirm/confirm.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containera{\n    width: 200px;\n    height: 300px;\n    /* border: 1px solid black; */\n    margin-left: -10px;\n    padding: 10px;\n    background: linear-gradient(#eae8ee, #a9d1eb, #eae8ee);\n    /* text-align: center; */\n    display: inline-block;\n    position: fixed;\n    margin-top: 0px;\n}\n.containera :hover{\n    cursor: pointer;\n}\n.profile-display{\n    width: 200px;\n    min-height: 200px;\n    padding-top: 10px;\n    padding-left: 10px;\n    margin-top: 0;\n    display: block;\n    background: linear-gradient(#eae8ee, #a9d1eb, #eae8ee);\n    position: absolute;\n    z-index: 1;\n    box-shadow: 0 0 10px rgb(129, 129, 129);\n}\n.header{\n    width: 180px;\n    height: 30px;\n    margin-top: 20px;\n    /* padding-left: 5px; */\n    text-align: center;\n   \n    background: linear-gradient(#eaeeed, #8dccf7, #eaeeed);\n    color: rgba(67, 64, 64, 0.933);\n  \n}\n.header1{\n    width: 180px;\n    height: 30px;\n    /* padding-left: 5px; */\n    text-align: center;\n    \n    background: linear-gradient(#eaeeed, #8dccf7, #eaeeed);\n    color: rgba(67, 64, 64, 0.933);\n  \n}\n.loader {\n    border: 16px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 16px solid #28333b;\n    width: 30px;\n    height: 30px;\n    -webkit-animation: spin 2s linear infinite; /* Safari */\n    animation: spin 2s linear infinite;\n  }\n/* Safari */\n@-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n  }\n@keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n  }\n.follow-req{\n    width: 200px;\n    height: 500px;\n    border: 1px solid rgb(243, 241, 241);\n    position: fixed;\n    margin-left:950px;\n    /* z-index: 9; */\n    /* background:  rgb(233, 240, 243); */\n    margin-top: 0;\n  }\n.contenta{\n    width: 100%;\n    height: 200px;\n\n   margin-top: 200px;\n    margin-left: 0;\n \n    display: inline-block;\n    \n   \n}\n.date{\n    font-size: 10px;\n    color: rgb(99, 59, 245);\n}\n.info{\n    width: 180px;\n    height: 30px;\n    /* padding-left: 5px; */\n    padding-left: 10%;\n    margin-top: 20px;\n    background: rgb(236, 234, 234);\n    color: rgba(155, 153, 153, 0.933);\n   \n}\n.info1{\n    width: 180px;\n    height: 30px;\n    /* padding-left: 5px; */\n    padding-left: 10%;\n    margin-top: 20px;\n    background: rgb(236, 234, 234);\n    color: rgba(133, 125, 125, 0.933);\n   \n}\n.a :hover{\n    cursor: pointer;\n}\n.btn{\n    margin-left: 20px;\n}\n#myImg:hover {opacity: 0.7;}\n.modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    /* overflow: auto; */\n    background-color: rgba(0, 0, 0, 0.151); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.151); /* Black w/ opacity */\n}\n.modal1 {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    padding-left: 100px;\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.473); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.473); /* Black w/ opacity */\n    z-index: 1;\n}\n.modal-content {\n    margin: auto;\n    display: block;\n    width: 30%;\n    max-width: 500px;\n}\n.modal-content1 {\n    display: block;\n    width: 45%;\n}\n#caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n}\n.modal-content, #caption {    \n    -webkit-animation-name: zoom;\n    -webkit-animation-duration: 0.6s;\n    animation-name: zoom;\n    animation-duration: 0.6s;\n}\n@-webkit-keyframes zoom {\n    from {-webkit-transform:scale(0)} \n    to {-webkit-transform:scale(1)}\n}\n@keyframes zoom {\n    from {-webkit-transform:scale(0);transform:scale(0)} \n    to {-webkit-transform:scale(1);transform:scale(1)}\n}\n.close {\n    position: absolute;\n    top: 100px;\n    right: 300px;\n    color: #f1f1f1;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n}\n.close:hover,\n.close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n}\n@media only screen and (max-width: 700px){\n    .modal-content {\n        width: 100%;\n    }\n}\n#myImg {\n    border-radius: 5px;\n    cursor: pointer;\n    transition: 0.3s;\n}\n.infdsplay{\n    width: 100px;\n    background: rgb(116, 114, 114);\n    color: white;\n    padding-top: 5px;\n    padding-left: 20px;\n    margin-left: 30px;margin-top: -30px;\n    font-size: 10px;\n    display: block;\n    position: absolute;\n    border-radius: 5px;\n}\n.blue{\n    color: rgb(133, 131, 131);\n    font-size: 20px;\n}\n.red{\n    color: red;\n    font-size: 20px;\n}\n.comment-form{\n    box-shadow: 0 0 10px rgb(129, 129, 129);\n\n}\n.blur {-webkit-filter: blur(4px);filter: blur(4px);}\n.brightness {-webkit-filter: brightness(250%);filter: brightness(250%);}\n.contrast {-webkit-filter: contrast(180%);filter: contrast(180%);}\n.grayscale {-webkit-filter: grayscale(100%);filter: grayscale(100%);}\n.huerotate {-webkit-filter: hue-rotate(180deg);filter: hue-rotate(180deg);}\n.invert {-webkit-filter: invert(100%);filter: invert(100%);}\n.opacity {-webkit-filter: opacity(50%);filter: opacity(50%);}\n.saturate {-webkit-filter: saturate(7); filter: saturate(7);}\n.sepia {-webkit-filter: sepia(100%);filter: sepia(100%);}\n.shadow {-webkit-filter: drop-shadow(8px 8px 10px green);filter: drop-shadow(8px 8px 10px green);}"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" *ngIf='loading' style=\"position: fixed; margin-left: 500px; margin-top: -50px; z-index: 2; font-size: 10px;\"></div>\n\n<div *ngIf=\"myFollowers\" class=\"modal1\">\n        <span  (click)=\"removeFollowersBox()\" style=\"font-size: 40px; margin-left: 900px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n       <div *ngIf=\"user\" class=\"modal-content1\" style=\"min-height: 500px; padding-left: 50px; padding-top: 30px; padding-bottom: 100px; background: rgb(242, 244, 245); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 350px; z-index: 5;\" >\n            <div *ngFor='let follower of myFollowers.followers'>\n                <div style=\"border-top: 1px solid rgb(53, 53, 53); border-bottom: 1px solid rgb(53, 53, 53); padding-top: 20px; padding-bottom: 20px;\">\n                        <div  [routerLink]=\"['/profile', follower._id]\" style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                        <img *ngIf='!follower.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                        <img *ngIf='follower.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{follower.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n                    </div>\n                    <h3  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 50px; font-weight: bold; \" [routerLink]=\"['/profile', follower._id]\">{{follower.username}}</h3>\n                    \n                            <span *ngIf=\"!follower.followers.includes(user._id)\" class=\"btn\"  style=\"position: absolute; margin-top: -40px; margin-left: 350px; z-index: 5;\"><i (click)=\"onclickletsFollow(follower)\">  Follow</i> </span>\n                            <span *ngIf=\"follower.followers.includes(user._id)\" class=\"btn\" style=\"position: absolute; margin-top: -40px; margin-left: 350px; background: rgb(178, 243, 178); z-index: 5;\"> <i (click)=\"onclickletsUnfollow(follower)\">  Following</i></span>\n                \n                </div>\n                \n            </div>    \n           \n       </div>\n</div>\n<div *ngIf=\"myFollowings\" class=\"modal1\">\n        <span  (click)=\"removeFollowersBox()\" style=\"font-size: 40px; margin-left: 900px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n       <div *ngIf=\"user\" class=\"modal-content1\" style=\"min-height: 500px; padding-left: 50px; padding-top: 30px; padding-bottom: 100px; background: rgb(242, 244, 245);; border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 350px; z-index: 5;\" >\n            <div *ngFor='let follower of myFollowings.followings'>\n                <div style=\"border-top: 1px solid rgb(53, 53, 53); border-bottom: 1px solid rgb(53, 53, 53); padding-top: 20px; padding-bottom: 20px;\">\n                        <div  [routerLink]=\"['/profile', follower._id]\" style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                        <img *ngIf='!follower.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                        <img *ngIf='follower.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{follower.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n                    </div>\n                    <h3  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 50px; font-weight: bold; \" [routerLink]=\"['/profile', follower._id]\">{{follower.username}}</h3>\n                    \n                            <span *ngIf=\"!follower.followers.includes(user._id)\" class=\"btn\"  style=\"position: absolute; margin-top: -40px; margin-left: 350px; z-index: 5;\"><i (click)=\"onclickletsFollow2(follower)\">  Follow</i> </span>\n                            <span *ngIf=\"follower.followers.includes(user._id)\" class=\"btn\" style=\"position: absolute; margin-top: -40px; margin-left: 350px; background: rgb(178, 243, 178); z-index: 5;\"> <i (click)=\"onclickletsUnfollow2(follower)\">  Following</i></span>\n                \n                </div>\n                \n            </div>    \n           \n       </div>\n</div>\n<div class=\"containera\" >\n  <div class=\"text-center\" *ngIf='user' [routerLink]=\"['/profile']\" >\n        <img *ngIf='!user.ProfilePhoto'style=\" width:100px; height: 100px;\"  src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n        <img *ngIf='user.ProfilePhoto'style=\" width:100px; height: 100px;\"  src=\"{{user.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n        \n    </div>\n    <div class=\"header\" [routerLink]=\"['/profile']\" >\n          <!-- <h1 *ngIf=\"user\">{{user.first_name[0].toUpperCase()+user.first_name.slice(1)}} {{user.last_name[0].toUpperCase()+user.last_name.slice(1)}}</h1> -->\n          <h1 *ngIf=\"user\" style=\"font-size: 20px;\">{{user.username}}</h1>\n          \n    </div>\n    <div class=\"info\" [routerLink]=\"['/profile']\" >\n      <p *ngIf=\"user\" style=\"font-size: 12px;\"><span *ngIf='!user.info'>about </span>{{user.info}}</p>\n    </div>\n    <div *ngIf='user'  >\n        <h3 style=\"font-size: 15px;\" (click)=\"displayFollowers(user)\" >Followers : {{user.followers.length}}</h3>\n        <h3 style=\"font-size: 15px;\" (click)=\"displayFollowings(user)\">Following : {{user.followings.length}}</h3>\n        <h3 style=\"font-size: 15px;\" *ngIf='myshares' (click)=\"getShares('my_shares')\">Posts : {{myshares.length}}</h3>\n    </div>\n</div >\n<div style=\"padding: 50px; position: fixed; margin-top: 300px;\">\n    <button *ngIf=\"_bests || my_shares\" style=\"background: rgb(150, 205, 241); color: white;\" (click)=\"getShares('my_dashboard')\"> My Dashboard</button>\n    <button *ngIf='my_dashboard' style=\"background: rgb(150, 208, 241); color: white;\" (click)=\"getShares('_bests')\">Discover</button>\n</div>\n\n<!-- follow recommendations -->\n<div  class=\"follow-req\">\n    <div  style=\"min-height: 500px; padding-left: 10px; padding-right: 10px;  border-bottom: 1px solid rgb(94, 93, 93); border-top: 1px solid rgb(94, 93, 93); \" >\n        <h4>Who to follow</h4>\n        <div *ngFor='let userz of users2'>\n            <div style=\"border-top: 1px solid rgb(53, 53, 53); border-bottom: 1px solid rgb(53, 53, 53); padding-top: 20px; padding-bottom: 20px;\">\n                <div class=\"a\"  [routerLink]=\"['/profile', userz._id]\" style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                    <img *ngIf='!userz.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                    <img *ngIf='userz.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{userz.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n                </div>\n                     <h3 class=\"btn\"  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 30px; font-weight: bold; margin-top: -10px; \" [routerLink]=\"['/profile', userz._id]\">{{userz.username}}</h3>\n                     <div *ngIf='user._id != userz._id'>\n                        <span  class=\"btn\"  style=\"margin-left: 50px; z-index: 5; border: 1px solid rgb(197, 195, 195);\"><i (click)=\"onclickletsFollowFromHere(userz)\">  Follow</i> </span>\n                        \n                    </div>\n            </div>\n                 \n        </div>    \n            \n    </div>\n</div>\n<!-- SHARE BACKGROUND -->\n<div style=\"width: 70%; background: rgb(255, 255, 255); padding-bottom: 200px; padding-top: 0px; margin-left: 200px;\">\n     \n   \n    <div style=\"width: 660px;   margin-left: 20px;   padding-left: 30px; padding-right: 30px;\">\n        <div style=\"width: 660px;  background: rgb(242, 244, 245); border: 20px solid rgb(242, 244, 245);;\">\n            <button *ngIf=\"newUrl1\" (click)=\"removeNewURl1(img)\"><i class=\"fa fa-close\"></i></button>\n          <img *ngIf=\"newUrl1\" class=\"{{imageClass}}\" style=\" width:100px; \"  src=\"{{newUrl1}}\" >\n          <form class=\"form-horizontal\" role=\"form\" (submit)=\"onshareSubmit()\" style=\"margin-top: 10px;\">\n              <textarea *ngIf=\"user\"  class=\"form-control\" type=\"textarea\" name=\"comment\" [(ngModel)]=\"comment\" placeholder=\"{{message}}\" style=\"border: 1px solid rgb(80, 78, 78);\" ></textarea>\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Post\" style=\"margin-top:20px; margin-left: 550px; position: absolute; \">\n          </form>\n          <input style=\"display: none;\" #fileInput type=\"file\" class=\"form-control\" (change)=\"onFileSelected($event)\"><br>\n          <button type=\"button\" (click)=\"fileInput.click()\"><i class=\"material-icons\" style=\"font-size: 15px;\">add_a_photo</i></button>\n          <button type=\"button\"   *ngIf=\"picture\" (click)=\"onload()\"  >upload</button>\n          \n        </div>\n    </div>\n    <div *ngIf='numb > 0' (click)='getAllShares()' style=\"width: 660px; text-align: center; padding-top: 30px; padding-bottom: 30px; background: rgb(155, 201, 223); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195); margin-left: 50px; margin-top: 5px; padding-left: 30px; padding-right: 30px;\"> {{numb}} new <span *ngIf='numb === 1'>post</span> <span *ngIf='numb > 1'> posts</span></div>\n     <!-- Main Share Window -->\n    <div *ngFor=\"let share of shares\">\n\n        <div   style=\"width: 660px; padding-top: 30px; background: rgb(242, 244, 245);; border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195); margin-left: 50px; margin-top: 5px; padding-left: 30px; padding-right: 30px;\">\n            \n            <div class=\"a\" (click)=\"displayReplies(share)\" style=\"width: 520px; margin-left: 100px; height: 50px; position: absolute; margin-top:-20px;\" >\n\n            </div>\n            <!-- Profile Photo Box -->\n\n            <div  class=\"a\" [routerLink]=\"['/profile', share.user._id]\" style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                <img *ngIf='!share.user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                <img *ngIf='share.user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{share.user.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n            </div>\n            <!-- Second Share box -->\n\n            <div style=\"width: 540px;  display: inline-block;  margin-left: 50px; \">\n                <!-- UserName Window -->\n                <div class=\"a\" style=\" width: 100px; height:30px;\" (mouseleave) =\"mouseLeave()\">\n                    <h3 class=\"a\" (mouseenter) =\"mouseEnter(share) \" style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 5px; font-weight: bold; \" [routerLink]=\"['/profile', share.user._id]\">{{share.user.username}}</h3>\n                    \n                    <!-- Profile popup window -->\n\n                    <div *ngIf='profileShow[share._id]' class=\"profile-display\" (mouseleave) =\"mouseLeave()\" style=\"z-index: 4;\">\n                        <div class=\"text-center\"[routerLink]=\"['/profile',share.user._id]\">\n                            <img *ngIf='!share.user.ProfilePhoto'style=\" width:50px; height: 50px;\"  src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                            <img *ngIf='share.user.ProfilePhoto'style=\" width:50px; height: 50px;\"  src=\"{{share.user.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">            \n                        </div>\n                        <div class=\"header1\"[routerLink]=\"['/profile',share.user._id]\">\n                            <h1 *ngIf=\"user\" style=\"font-size: 20px; font-weight: bold;\">{{share.user.username}}</h1>                \n                        </div>\n                        <div class=\"info1\"[routerLink]=\"['/profile',share.user._id]\">\n                            <p *ngIf=\"share.user\"><span *ngIf='!share.user.info'>about</span>{{share.user.info}}</p>\n                        </div>\n                        <div *ngIf='user._id != share.user._id'  style=\"position: absolute; margin-top:3px;  z-index: 4;\">\n                            <button *ngIf=\"!share.user.followers.includes(user._id)\" (click)=\"onFollow2(share)\" style=\"z-index: 4;\" >Follow</button>\n                            <button *ngIf=\"share.user.followers.includes(user._id)\" (click)=\"onUnFollow2(share)\" style=\" background: rgb(178, 243, 178);\">Following</button>\n                        </div>\n                    </div>\n\n                </div>\n                <!-- ShareBox -->\n            \n                    <div (click)=\"imgToShow(share)\" *ngIf='share.urla' style=\"width: 640px; height: 300px; overflow: hidden; padding-left: 80px;\" class=\"a\">\n                        <img id=\"myImg\" class=\"{{share.imageclass}}\" src=\"{{share.urla}}\" style=\"width: 350px; margin-top: 5px; margin-bottom: 15px;\" alt=\"{{share.comment}}\" >\n                    </div>\n                \n                    <div class=\"a\" style=\"margin-top: 20px;\" (click)=\"displayReplies(share)\">\n                        <p class=\"a\" style=\"margin-left: 20px;\">{{share.comment}}</p>\n                        <p class=\"date\">{{ stringAsDate(share.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n                    </div>\n        \n            </div>\n        </div>\n                <!-- Action Box -->\n        <div style=\"width: 660px; height:50px;margin-top: 0px; padding-bottom: 20px;  margin-left:50px;  background: rgb(242, 244, 245);;\" >\n                <div *ngIf='infoDisp[share._id]' class=\"infdsplay\">\n                    <p>{{content}}</p>\n                </div>\n                <div (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('like', share)\" (click)=\"onclickLike(share)\" style=\"display: inline-block; position: absolute; margin-left: 300px;\" >\n                    <span class=\"btn\"><i class=\"fa fa-heart blue\"></i> </span><span style=\"margin-left: 10px;\">{{share.likes.length}}</span>\n                    <span *ngFor='let like of share.likes'><i *ngIf='like._id === user._id' class=\"fa fa-heart red btn\" style=\"position: absolute; margin-left: -65px; margin-top: 0px;\"></i></span>\n                </div>\n                <div *ngIf=\"user._id === share.user._id\" (click)=\"deleteShare(share)\"  style=\"display: inline-block; position: absolute; margin-left: 450px;\" (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('delete', share)\" >\n                    <p> <span class=\"btn\" ><i class=\"fa fa-trash\" style=\"color: rgb(53, 85, 121);\"></i></span></p>\n                </div>\n                <div (mouseenter) =\"displayMeaning('reply', share)\" (click)=\"showaddComment(share)\" (mouseleave)=\"displayMea()\" style=\"display: inline-block; position: absolute; margin-left: 50px;\">\n                    <span class=\"fa fa-commenting-o btn\"  style=\"font-size: 24px; margin-left: 30px; color: rgb(86, 201, 230); z-index: 1;\"></span>\n                </div>\n                <div  style=\"position: absolute; margin-left: 120px; \">\n                    <span class=\"btn\" >{{share.replies.length}}</span>\n                </div>\n         \n            <div *ngIf=\"displayCommentbox[share._id]\" style=\"margin-top: 0px; height:100%; width: 100%; margin-left: -30px; z-index: 5; position: absolute;\" >\n                <div style=\"width: 400px;  background: rgb(242, 244, 245);; border: 20px solid rgb(242, 244, 245);; \" class=\"comment-form\">\n                    <span (click)=\"hideAddComment(share)\"><i class=\"fa fa-close\" style=\"font-size: 10px;\"></i></span>\n                    <form class=\"form-horizontal\" role=\"form\" (submit)=\"onreplySubmit(share)\">\n                        <textarea *ngIf=\"user\"  class=\"form-control\" type=\"textarea\" name=\"comment\" [(ngModel)]=\"reply\" placeholder=\"{{message}}\" style=\"width: 300px; min-height: 30px;\"></textarea>\n                        <input type=\"submit\" class=\"btn-primary\" value=\"Reply\" style=\"text-align: center;padding-left:-5px; padding-top: -5px; margin-top:-40px; width:40px; height: 20px; font-size: 10px; margin-left: 320px; position: absolute; background: green;\">\n                    </form>        \n                </div>      \n            </div>\n            \n        </div>\n    </div>\n  \n</div>\n\n<div style=\"width: 50%; height: 300px; background: rgb(255, 255, 255); margin-left: 400px;\">\n\n</div>\n<!-- Image display -->\n\n<div *ngIf=\"selectedImg\"id=\"myModal\" (click)=\"selectedImgNull()\" class=\"modal\">\n    <img class=\"modal-content {{selectedImg.imageclass}}\" id=\"img01\" src=\"{{selectedImg.urla}}\">\n    <div class=\"a\" id=\"caption\"><h3  style=\"font-size: 25px; color: rgb(245, 244, 244);  margin-left: 5px; \" [routerLink]=\"['/profile', selectedImg.user._id]\">{{selectedImg.user.username}}</h3><p style=\"color: rgb(77, 75, 75); \">{{selectedImg.comment}}</p></div>\n</div>\n\n<!-- Share and Replies display -->\n\n<div *ngIf=\"displayrepliesOfShare\" class=\"modal1\" >\n    <span  (click)=\"removeReplyBox()\" style=\"font-size: 40px; margin-left: 900px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n        \n    <div *ngIf=\"user\" class=\"modal-content1\" style=\"min-height: 500px; padding-left: 100px; padding-top: 30px; padding-bottom: 100px; z-index: 2; background: rgb(242, 244, 245); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 350px;\">\n        <div  [routerLink]=\"['/profile', displayrepliesOfShare.user._id]\" style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute; margin-left: -50px;\">\n            <img *ngIf='!displayrepliesOfShare.user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n            <img *ngIf='displayrepliesOfShare.user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{displayrepliesOfShare.user.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n        </div>\n        <div style=\" width: 100px; height:30px; margin-left: -60px;\">\n            <h3  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 50px; font-weight: bold; \" [routerLink]=\"['/profile', displayrepliesOfShare.user._id]\">{{displayrepliesOfShare.user.username}}</h3>\n            <div *ngIf='user._id != displayrepliesOfShare.user._id'>\n                <button *ngIf=\"!displayrepliesOfShare.user.followers.includes(user._id)\" (click)=\"onclickFollow1(displayrepliesOfShare)\" style=\"position: absolute; margin-top: -40px; margin-left: 350px;\">Follow</button>\n                <button *ngIf=\"displayrepliesOfShare.user.followers.includes(user._id)\" (click)=\"onclickUnFollow1(displayrepliesOfShare)\" style=\"position: absolute; margin-top: -40px; margin-left: 350px; background: rgb(178, 243, 178);\">Following</button>\n            </div>\n            \n        </div>\n        <div>\n            <div  *ngIf='displayrepliesOfShare.urla' style=\"width: 440px;  \">\n                <img id=\"myImg\" class=\"{{displayrepliesOfShare.imageclass}}\" src=\"{{displayrepliesOfShare.urla}}\" style=\"width: 350px; margin-top: 5px; margin-bottom: 15px;\"  >\n            </div>\n            \n            <div style=\"margin-top: 20px; width: 350px;\">\n                <p style=\"margin-left: 20px;\">{{displayrepliesOfShare.comment}}</p>\n                <p class=\"date\">{{ stringAsDate(displayrepliesOfShare.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n            </div>\n        </div>\n        <div style=\"border: 1px solid grey; margin-top: 40px; width: 520px; margin-left: -90px;\"></div>\n        <div style=\"width: 400px; height:50px;margin-top:20px; padding-bottom: 20px;  margin-left:-30px;  background: rgb(242, 244, 245); border: 1px solid rgb(242, 244, 245);\" >\n                <div *ngIf='infoDisp[displayrepliesOfShare._id]' class=\"infdsplay\">\n                    <p>{{content}}</p>\n                </div>\n                <div (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('like', displayrepliesOfShare)\"  style=\"display: inline-block; position: absolute; margin-left: 200px;\" >\n                    <span class=\"btn\"><i (click)=\"onclickLike1(displayrepliesOfShare)\"class=\"fa fa-heart blue\"></i> </span><span (click)=\"displayWhoLikes(displayrepliesOfShare)\" class=\"btn\" style=\"margin-left: 10px; color: blue;\">{{displayrepliesOfShare.likes.length}} likes</span>\n                    <span *ngFor='let like of displayrepliesOfShare.likes'><i *ngIf='like._id === user._id' (click)=\"onclickLike1(displayrepliesOfShare)\" class=\"fa fa-heart red btn\" style=\"position: absolute; margin-left:-127px;\"></i></span>\n                </div>\n                <div *ngIf=\"user._id === displayrepliesOfShare.user._id\" (click)=\"deleteShare1(displayrepliesOfShare)\"  style=\"display: inline-block; position: absolute; margin-left: 350px;\" (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('delete', displayrepliesOfShare)\" >\n                    <p> <span class=\"btn\" ><i class=\"fa fa-trash\" style=\"color: rgb(53, 85, 121);\"></i></span></p>\n                </div>\n                \n                <div  style=\"position: absolute; margin-left: 70px; \">\n                    <span  >{{displayrepliesOfShare.replies.length}} comments</span>\n                </div>\n         \n            <div  style=\"margin-top: 60px; height:50px; margin-left: 0px; \">\n               \n                  \n                    <form class=\"form-horizontal\" role=\"form\" (submit)=\"onreplySubmit1(displayrepliesOfShare)\">\n                        <textarea *ngIf=\"user\"  class=\"form-control\" type=\"textarea\" name=\"comment\" [(ngModel)]=\"reply\" placeholder=\"{{message}}\" style=\"width: 450px; min-height: 20px; margin-left: -50px;\"></textarea>\n                        <input type=\"submit\" class=\"btn-primary\" value=\"Reply\" style=\"text-align: center;padding-left:-5px; padding-top: -5px; margin-top:10px; width:40px; height: 20px; font-size: 10px; margin-left: 370px; position: absolute; background: green;\">\n                    </form>        \n                    \n            </div>\n            \n        </div>\n\n        <div style=\"border: 1px solid grey; margin-top: 110px; width: 520px; margin-left: -90px;\"></div>\n\n        <!-- Replies -->\n\n        <div *ngFor='let reply of displayrepliesOfShare.replies'>\n            <p style=\"margin-top: 30px;\"><span [routerLink]=\"['/profile', reply.commentor._id]\" class=\"btn\" style=\"color: rgb(61, 137, 236);\">{{reply.commentor.username}} :</span> {{reply.content}}</p><br>\n            <p class=\"date\">{{ stringAsDate(reply.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n            <div *ngIf='infoDisp[reply._id]' class=\"infdsplay\">\n                <p>{{content}}</p>\n\n            </div>\n            <!-- Action box -->\n            <div (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('like', reply)\"  style=\"display: inline-block; position: absolute; margin-left: 200px;\" >\n                <span (click)=\"onclickLikeReply(displayrepliesOfShare, reply)\" class=\"btn\"><i class=\"fa fa-heart blue\"></i> </span><span (click)=\"displayWhoLikes(reply)\"style=\"margin-left: 10px; color: blue;\" class=\"btn\">{{reply.likes.length}} likes</span>\n                <span *ngFor='let like of reply.likes'><i *ngIf='like._id === user._id' class=\"fa fa-heart red btn\" style=\"position: absolute; margin-left:-127px; z-index: 5;\" (click)=\"onclickLikeReply(displayrepliesOfShare, reply)\"></i></span>\n            </div>\n            <div *ngIf=\"user._id === reply.commentor._id\" (click)=\"deleteReply(displayrepliesOfShare, reply)\"  style=\"display: inline-block; position: absolute; margin-left: 350px;\" (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('delete', reply)\" >\n                <p> <span class=\"btn\" ><i class=\"fa fa-trash\" style=\"color: rgb(53, 85, 121);\"></i></span></p>\n            </div>\n\n            <div style=\"border: 1px solid rgb(163, 162, 162); margin-top: 110px; width: 440px; margin-left: -50px;\"></div>\n        </div>\n        \n    </div>\n\n</div>\n\n<!-- Likes display  -->\n\n<div *ngIf=\"wholeLikes\" class=\"modal1\">\n        <span  (click)=\"removeLikesBox()\" style=\"font-size: 40px; margin-left: 900px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n       <div *ngIf=\"user\" class=\"modal-content1\" style=\"min-height: 500px; padding-left: 50px; padding-top: 30px; padding-bottom: 100px; background: rgb(242, 244, 245); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 350px; z-index: 5;\" >\n            <div *ngFor='let liker of wholeLikes.likes'>\n                <div style=\"border-top: 1px solid rgb(53, 53, 53); border-bottom: 1px solid rgb(53, 53, 53); padding-top: 20px; padding-bottom: 20px;\">\n                        <div  [routerLink]=\"['/profile', liker._id]\" style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                        <img *ngIf='!liker.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                        <img *ngIf='liker.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{liker.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n                    </div>\n                    <h3  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 50px; font-weight: bold; \" [routerLink]=\"['/profile', liker._id]\">{{liker.username}}</h3>\n                    <div *ngIf='user._id != liker._id'>\n                            <span *ngIf=\"!liker.followers.includes(user._id)\" class=\"btn\"  style=\"position: absolute; margin-top: -40px; margin-left: 350px; z-index: 5;\"><i (click)=\"onclickletsFollow1(liker, wholeLikes)\">  Follow</i> </span>\n                            <span *ngIf=\"liker.followers.includes(user._id)\" class=\"btn\" style=\"position: absolute; margin-top: -40px; margin-left: 350px; background: rgb(178, 243, 178); z-index: 5;\"> <i (click)=\"onclickletsUnfollow1(liker, wholeLikes)\">  Following</i></span>\n                </div>\n                </div>\n                \n            </div>    \n           \n       </div>\n</div>\n\n<!-- Image playground -->\n<div *ngIf=\"newUrl\" class=\"modal1\">\n    <div style=\"margin-left: 200px; display: block;\">\n        <button *ngIf=\"newUrl\" (click)=\"removeNewURl(img)\"><i class=\"fa fa-close\"></i></button>\n        <img class=\"{{normala}}\" style=\" width:400px; \"  src=\"{{newUrl}}\" >\n    </div>\n   <div style=\"width: 50px; display: inline-block; margin-left: 100px; margin-top: 50px;\">\n        <img (click)=\"changeClass('normal')\" class=\"blur\" style=\" width:50px; \"  src=\"{{newUrl}}\" >\n   </div>\n    <div style=\"width: 50px; display: inline-block; margin-left: 10px; margin-top: 50px;\">\n        <img (click)=\"changeClass('blur')\" class=\"blur\" style=\" width:50px; \"  src=\"{{newUrl}}\" >\n    </div>\n    <div style=\"width: 50px; display: inline-block; margin-left: 10px; margin-top: 50px;\">\n        <img (click)=\"changeClass('brightness')\" class=\"brightness\" style=\" width:50px; \"  src=\"{{newUrl}}\" >\n    </div>\n    <div style=\"width: 50px; display: inline-block; margin-left: 10px; margin-top: 50px;\">\n        <img (click)=\"changeClass('contrast')\" class=\"contrast\" style=\" width:50px; \"  src=\"{{newUrl}}\" >\n    </div >\n    <div style=\"width: 50px; display: inline-block; margin-left: 10px; margin-top: 50px;\">\n        <img (click)=\"changeClass('grayscale')\" class=\"grayscale\" style=\" width:50px; \"  src=\"{{newUrl}}\" >\n    </div>\n    <div style=\"width: 50px; display: inline-block; margin-left: 10px; margin-top: 50px;\">\n        <img (click)=\"changeClass('huerotate')\"  class=\"huerotate\" style=\" width:50px; \"  src=\"{{newUrl}}\" >\n    </div>\n    <div style=\"width: 50px; display: inline-block; margin-left: 10px; margin-top: 50px;\">\n        <img (click)=\"changeClass('invert')\" class=\"invert\" style=\" width:50px; \"  src=\"{{newUrl}}\" >\n    </div>\n    <div style=\"width: 50px; display: inline-block; margin-left: 10px; margin-top: 50px;\">\n        <img (click)=\"changeClass('opacity')\" class=\"opacity\" style=\" width:50px; \"  src=\"{{newUrl}}\" >\n    </div>\n    <div style=\"width: 50px; display: inline-block; margin-left: 10px; margin-top: 50px;\">\n        <img (click)=\"changeClass('saturate')\" class=\"saturate\" style=\" width:50px; \"  src=\"{{newUrl}}\" >\n    </div>\n   <div style=\"width: 50px; display: inline-block; margin-left: 10px; margin-top: 50px;\">\n        <img (click)=\"changeClass('sepia')\" class=\"sepia\" style=\" width:50px; \"  src=\"{{newUrl}}\" >\n   </div>\n    <div style=\"width: 50px; display: inline-block; margin-left: 10px; margin-top: 50px;\">\n        <img (click)=\"changeClass('shadow')\" class=\"shadow\" style=\" width: 50px; \"  src=\"{{newUrl}}\" >\n    </div>\n    \n    <button class=\"btn\" (click)=\"addClass(normala)\">Go</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _services_shares_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shares.service */ "./src/app/services/shares.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











// declare var $:any;
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_router, _route, _locationService, _flashMessagesService, _storage, _shareService, _httpService, _authService, _usersService, db) {
        this._router = _router;
        this._route = _route;
        this._locationService = _locationService;
        this._flashMessagesService = _flashMessagesService;
        this._storage = _storage;
        this._shareService = _shareService;
        this._httpService = _httpService;
        this._authService = _authService;
        this._usersService = _usersService;
        this.db = db;
        this.showSpinner = true;
        // displayPhoto: any;
        this.profileShow = {};
        this.infoDisp = {};
        this.displayCommentbox = {};
        this.normala = 'normal';
        this.loading = null;
        this.checkShares = false;
        this.basePath = "/";
        this.sendurl = { image: "" };
        this.my_dashboard = true;
        this._bests = false;
        this.my_shares = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this._router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["NavigationEnd"]) {
                _this._router.navigated = false;
                window.scrollTo(0, 0);
            }
        });
        this._authService.getProfile().subscribe(function (profile) {
            _this.user = profile['user'];
            console.log(_this.user);
            // console.log(this.user)
            // this.display(this.user);
            _this.getMyShares();
            _this.getAllShares();
            _this.numb;
            _this.getAllunfollowingUsers();
        }, function (err) {
            return false;
        });
        setInterval(function () {
            _this.getAllShares1();
        }, 5000);
        setInterval(function () {
            _this.numb;
        }, 5000);
        this.picture;
        this.message = "Write something interesting";
        this.newUrl;
        this.comment = '';
        this.getAllShares();
        this.selectedImg;
        this.img;
        this.profileShow;
        this.userax;
        this.content;
        this.infoDisp;
        this.reply;
        this.bringAllReplies();
        this.normala;
        this.newUrl1;
        this.loading;
        this.displayrepliesOfShare;
        this.wholeLikes;
        this._bests;
        this.my_dashboard;
        this.myFollowers;
        this.myFollowings;
        this.checkShares;
        this.countNewshares;
        this.users;
        // $('.btn').click(function(){
        //   alert('hi');
        // })
        // this.getUserLocation();
    };
    // display(user){
    //   if(user.pictures.length ===0){
    //     return this.displayPhoto = "https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994"
    //   }else{
    //     if(!user.ProfilePhoto){
    //       return this.displayPhoto = user.pictures[user.pictures.length-1].url;
    //     }else{
    //       for(var i = 0; i< user.pictures.length; i++){
    //         if(user.ProfilePhoto === user.pictures[i]._id){
    //           return this.displayPhoto = user.pictures[i].url;
    //         }else{
    //           return this.displayPhoto = user.pictures[user.pictures.length-1].url;
    //         }
    //       }
    //     }
    //   }
    // }
    // Data-Time------
    DashboardComponent.prototype.stringAsDate = function (dateStr) {
        return new Date(dateStr);
    };
    // Showing profile box
    DashboardComponent.prototype.mouseEnter = function (share) {
        var _this = this;
        var observable = this._usersService.getanUser(share.user_id);
        observable.subscribe(function (data) {
            _this.userax = data['user'];
            //  this.sortArray(this.users);
        });
        Object.keys(this.profileShow).forEach(function (h) {
            _this.profileShow[h] = false;
        });
        this.profileShow[share._id] = true;
    };
    DashboardComponent.prototype.mouseLeave = function () {
        var _this = this;
        Object.keys(this.profileShow).forEach(function (h) {
            _this.profileShow[h] = false;
        });
    };
    // getUserLocation(){
    //   if(navigator.geolocation){
    //     navigator.geolocation.getCurrentPosition(position =>{
    //       this.lat = position.coords.latitude;
    //       this.lng = position.coords.longitude;
    //     });
    //     this.location = ''+this.lat+' '+this.lng;
    //     this.user.location = this.location;
    //     console.log(this.location);
    //     let observable = this._locationService.updateUserLocation(this.user);
    //     observable.subscribe(data => {
    //       if(data['success']){
    //         this._flashMessagesService.show("success!", {cssClass:'alert-success', timeout: 4000});
    //         this._router.navigate(['/profile']);
    //       }
    //     });
    //   }
    // }
    // Profile displays ------------------------
    DashboardComponent.prototype.displayFollowers = function (user) {
        var _this = this;
        var observable = this._usersService.getanUser(user._id);
        observable.subscribe(function (data) {
            _this.myFollowers = data['user'];
        });
    };
    DashboardComponent.prototype.removeFollowersBox = function () {
        this.myFollowers = null;
        this.myFollowings = null;
    };
    DashboardComponent.prototype.displayFollowings = function (user) {
        var _this = this;
        var observable = this._usersService.getanUser(user._id);
        observable.subscribe(function (data) {
            _this.myFollowings = data['user'];
        });
    };
    // bring one user
    // private deleteFileDatabase(key: string) {
    //   return this.db.list(`${this.basePath}/`).remove(key);
    // }
    // deleteFileUpload(fileUpload: FileUpload) {
    //   this.deleteFileDatabase(fileUpload.key)
    //     .then(() => {
    //       this.deleteFileStorage(fileUpload.name);
    //     })
    //     .catch(error => console.log(error));
    // }
    // Removing picture 
    DashboardComponent.prototype.removeNewURl = function (img) {
        this.deleteFileStorage(img);
        this.img = null;
        this.newUrl = null;
        this.newUrl1 = null;
        this.picture = null;
    };
    DashboardComponent.prototype.removeNewURl1 = function (img) {
        this.deleteFileStorage(img);
        this.img = null;
        this.newUrl1 = null;
        this.newUrl = null;
        this.picture = null;
    };
    //  Display of like delete comment box
    DashboardComponent.prototype.displayMeaning = function (info, share) {
        var _this = this;
        this.content = '' + info + '!';
        Object.keys(this.infoDisp).forEach(function (h) {
            _this.infoDisp[h] = false;
        });
        this.infoDisp[share._id] = true;
    };
    DashboardComponent.prototype.displayMea = function () {
        var _this = this;
        Object.keys(this.infoDisp).forEach(function (h) {
            _this.infoDisp[h] = false;
        });
    };
    // filter stuffs
    DashboardComponent.prototype.changeClass = function (imgClass) {
        this.normala = imgClass;
    };
    DashboardComponent.prototype.addClass = function (classnrm) {
        this.imageClass = classnrm;
        this.newUrl1 = this.newUrl;
        this.img = this.img;
        this.newUrl = null;
        this.normala = null;
        this.picture = null;
    };
    // Share------------------------------------------
    // Show image after clicking on 
    DashboardComponent.prototype.imgToShow = function (share) {
        this.selectedImg = share;
    };
    DashboardComponent.prototype.selectedImgNull = function () {
        this.selectedImg = null;
    };
    // uploading a picture
    DashboardComponent.prototype.onFileSelected = function (event) {
        this.picture = event.target.files[0];
    };
    // Bring all users
    DashboardComponent.prototype.getAllunfollowingUsers = function () {
        var _this = this;
        var observable = this._usersService.allunfollowedUsers(this.user);
        observable.subscribe(function (data) {
            _this.users2 = data['users'];
            console.log(_this.users2);
        });
    };
    DashboardComponent.prototype.getAllUsers = function () {
        var _this = this;
        var observable = this._usersService.allUsers();
        observable.subscribe(function (data) {
            _this.users = data;
            console.log(_this.users);
        });
    };
    // Dashboard choices
    DashboardComponent.prototype.getShares = function (decleration) {
        var _this = this;
        if (decleration === 'my_dashboard') {
            this.my_dashboard = true;
            this._bests = false;
            this.my_shares = false;
            this.getAllShares();
        }
        else if (decleration === '_bests') {
            this.my_dashboard = false;
            this._bests = true;
            this.my_shares = false;
            this.getAllShares();
        }
        else if (decleration === 'my_shares') {
            this.my_dashboard = false;
            this._bests = false;
            this.my_shares = true;
            var observable1 = this._shareService.myShares(this.user);
            observable1.subscribe(function (data) {
                _this.shares = data['shares'];
            });
        }
    };
    // / my shares
    DashboardComponent.prototype.getMyShares = function () {
        var _this = this;
        var observable1 = this._shareService.myShares(this.user);
        observable1.subscribe(function (data) {
            _this.myshares = data['shares'];
        });
    };
    // bring all shares
    DashboardComponent.prototype.getAllShares = function () {
        var _this = this;
        this.numb = 0;
        if (this.my_dashboard === true) {
            var observable = this._shareService.followingShares(this.user);
            observable.subscribe(function (data) {
                _this.shares = data;
                //  this.sortArray(this.users);
            });
        }
        else if (this._bests === true) {
            var observable = this._shareService.bestShares();
            observable.subscribe(function (data) {
                _this.shares = data;
                //  this.sortArray(this.users);
            });
        }
    };
    DashboardComponent.prototype.getAllShares1 = function () {
        var _this = this;
        if (this.my_dashboard === true) {
            var observable = this._shareService.followingShares(this.user);
            observable.subscribe(function (data) {
                _this.shares1 = data;
                _this.numb = _this.shares1.length - _this.shares.length;
                //  this.sortArray(this.users);
            });
        }
        else if (this._bests === true) {
            var observable = this._shareService.bestShares();
            observable.subscribe(function (data) {
                _this.shares1 = data;
                _this.numb = _this.shares1.length - _this.shares.length;
                //  this.sortArray(this.users);
            });
        }
        if (this.shares1 - this.shares > 0) {
            this.checkShares = true;
            this.countNewshares = this.shares1 - this.shares;
        }
    };
    // Like from display Window
    DashboardComponent.prototype.onclickLike1 = function (share) {
        var _this = this;
        var counter = 0;
        for (var i = 0; i < share.likes.length; i++) {
            if (share.likes[i]._id === this.user._id) {
                counter = counter + 1;
            }
            else {
                continue;
            }
        }
        if (counter > 0) {
            var observable = this._shareService.dislikeFromService(share, this.user);
            observable.subscribe(function (data) {
                _this.bringOneShare(share._id);
            });
        }
        else {
            var observable = this._shareService.likeFromService(share, this.user);
            observable.subscribe(function (data) {
                _this.bringOneShare(share._id);
            });
        }
    };
    // Load a picture
    DashboardComponent.prototype.onload = function () {
        var _this = this;
        var file = this.picture;
        this.loading = true;
        var name = "Share picture" + this.user._id + Date.now();
        this.uploadpic = this._storage.upload(name, file)
            .then(function (data) {
            var progress = (data.bytesTransferred / data.totalBytes) * 100;
            if (progress === 100) {
                _this.loading = null;
            }
            data.ref.getDownloadURL().then(function (url) {
                _this.newUrl = url;
                _this.img = name;
            });
        });
    };
    //  add a share
    DashboardComponent.prototype.onshareSubmit = function () {
        var _this = this;
        if (!this.comment) {
            this.message = 'You can do better!';
        }
        else {
            if (this.newUrl1) {
                var shares = { urla: this.newUrl1,
                    comment: this.comment,
                    img: this.img,
                    imageclass: this.imageClass };
                var observable = this._shareService.addShare(shares, this.user);
                observable.subscribe(function (data) {
                    _this.comment = '';
                    _this.newUrl1 = null;
                    _this.getAllShares();
                    _this.getMyShares();
                });
            }
            else {
                var shares = {
                    comment: this.comment
                };
                var observable = this._shareService.addShare(shares, this.user);
                observable.subscribe(function (data) {
                    _this.comment = '';
                    _this.getAllShares();
                    _this.getMyShares();
                });
            }
        }
    };
    // Delete a Share
    DashboardComponent.prototype.deleteShare = function (share) {
        var _this = this;
        if (share.img) {
            this.deleteFileStorage(share.img);
            var observable = this._shareService.deleteShare(this.user._id, share);
            observable.subscribe(function (data) {
                _this.getAllShares();
                _this.getAllUsers();
                _this.getMyShares();
            });
        }
        else {
            var observable = this._shareService.deleteShare(this.user._id, share);
            observable.subscribe(function (data) {
                _this.getAllShares();
                _this.getAllUsers();
                _this.getMyShares();
            });
        }
    };
    // Deleting Share while share-display open
    DashboardComponent.prototype.deleteShare1 = function (share) {
        var _this = this;
        if (share.img) {
            this.deleteFileStorage(share.img);
            var observable = this._shareService.deleteShare(this.user._id, share);
            observable.subscribe(function (data) {
                _this.removeReplyBox();
                _this.getAllShares();
                _this.getAllUsers();
            });
        }
        else {
            var observable = this._shareService.deleteShare(this.user._id, share);
            observable.subscribe(function (data) {
                _this.removeReplyBox();
                _this.getAllShares();
                _this.getAllUsers();
            });
        }
    };
    // after clicking on the share
    DashboardComponent.prototype.displayReplies = function (share) {
        this.displayrepliesOfShare = share;
    };
    // closing single share
    DashboardComponent.prototype.removeReplyBox = function () {
        this.displayrepliesOfShare = null;
        this.getAllShares();
        this.getMyShares();
        this.getAllUsers();
    };
    // Follow----------------------------
    DashboardComponent.prototype.onclickletsFollowFromHere = function (userz) {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user, userz);
        observable.subscribe(function (data) {
            _this.getAllunfollowingUsers();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
    };
    DashboardComponent.prototype.onclickFollow1 = function (share) {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user, share.user);
        observable.subscribe(function (data) {
            _this.bringOneShare(share._id);
            _this.getAllunfollowingUsers();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
    };
    DashboardComponent.prototype.onclickUnFollow1 = function (share) {
        var _this = this;
        var observable = this._usersService.serviceUnFollow(this.user, share.user);
        observable.subscribe(function (data) {
            _this.bringOneShare(share._id);
            _this.getAllunfollowingUsers();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
    };
    DashboardComponent.prototype.onFollow2 = function (share) {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user, share.user);
        observable.subscribe(function (data) {
            _this.getAllShares();
            _this.getAllunfollowingUsers();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
    };
    DashboardComponent.prototype.onUnFollow2 = function (share) {
        var _this = this;
        var observable = this._usersService.serviceUnFollow(this.user, share.user);
        observable.subscribe(function (data) {
            _this.getAllShares();
            _this.getAllunfollowingUsers();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
    };
    DashboardComponent.prototype.onclickletsUnfollow = function (follower) {
        var _this = this;
        var observable = this._usersService.serviceUnFollow(this.user, follower);
        observable.subscribe(function (data) {
            _this.getAllShares();
            _this.getAllunfollowingUsers();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
        this.displayFollowers(this.user);
    };
    DashboardComponent.prototype.onclickletsFollow = function (follower) {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user, follower);
        observable.subscribe(function (data) {
            _this.getAllShares();
            _this.getAllunfollowingUsers();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
        this.displayFollowers(this.user);
    };
    DashboardComponent.prototype.onclickletsUnfollow2 = function (follower) {
        var _this = this;
        var observable = this._usersService.serviceUnFollow(this.user, follower);
        observable.subscribe(function (data) {
            _this.getAllShares();
            _this.getAllunfollowingUsers();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
        this.displayFollowings(this.user);
    };
    DashboardComponent.prototype.onclickletsFollow2 = function (follower) {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user, follower);
        observable.subscribe(function (data) {
            _this.getAllShares();
            _this.getAllunfollowingUsers();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
        this.displayFollowings(this.user);
    };
    DashboardComponent.prototype.onclickletsUnfollow1 = function (follower, share) {
        var _this = this;
        var observable = this._usersService.serviceUnFollow(this.user, follower);
        observable.subscribe(function (data) {
            _this.getAllShares();
            _this.getAllunfollowingUsers();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
        var observable1 = this._shareService.aShare(share._id);
        observable1.subscribe(function (data) {
            var sharez = data;
            _this.wholeLikes = sharez;
        });
    };
    DashboardComponent.prototype.onclickletsFollow1 = function (follower, share) {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user, follower);
        observable.subscribe(function (data) {
            _this.getAllShares();
            _this.getAllunfollowingUsers();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
        var observable1 = this._shareService.aShare(share._id);
        observable1.subscribe(function (data) {
            var sharez = data;
            _this.wholeLikes = sharez;
        });
    };
    // Reply-----------------------------------------------------
    DashboardComponent.prototype.deleteReply = function (share, reply) {
        var _this = this;
        var observable = this._shareService.deleteReply(this.user, reply);
        observable.subscribe(function (data) {
            _this.getAllShares();
            _this.bringOneShare(share._id);
        });
    };
    // one share for displayreply
    DashboardComponent.prototype.bringOneShare = function (id) {
        var _this = this;
        var observable = this._shareService.aShare(id);
        observable.subscribe(function (data) {
            _this.sharex = data;
            _this.displayrepliesOfShare = _this.sharex;
        });
    };
    //  all replies- only for testing
    DashboardComponent.prototype.bringAllReplies = function () {
        var observable = this._shareService.allReplies();
        observable.subscribe(function (data) {
        });
    };
    // replying from open share box
    DashboardComponent.prototype.onreplySubmit1 = function (share) {
        var _this = this;
        if (!this.reply) {
            this.message = 'You can do better!';
        }
        else {
            var reply1 = {
                content: this.reply
            };
            var observable = this._shareService.replytheShare(share, reply1, this.user);
            observable.subscribe(function (data) {
                _this.reply = '';
                _this.bringOneShare(share._id);
            });
        }
    };
    // replying a share
    DashboardComponent.prototype.onreplySubmit = function (share) {
        var _this = this;
        if (!this.reply) {
            this.message = 'You can do better!';
        }
        else {
            var reply1 = {
                content: this.reply
            };
            var observable = this._shareService.replytheShare(share, reply1, this.user);
            observable.subscribe(function (data) {
                _this.reply = '';
                _this.getAllShares();
                _this.hideAddComment(share);
            });
        }
    };
    // Opening Comment box-form
    DashboardComponent.prototype.showaddComment = function (share) {
        var _this = this;
        Object.keys(this.displayCommentbox).forEach(function (h) {
            _this.displayCommentbox[h] = false;
        });
        this.displayCommentbox[share._id] = true;
    };
    // hiding comment box-form
    DashboardComponent.prototype.hideAddComment = function (share) {
        this.displayCommentbox[share._id] = false;
        this.getAllShares();
        this.getMyShares();
        this.getAllUsers();
    };
    // LIKE=========
    // Liking reply ==
    DashboardComponent.prototype.onclickLikeReply = function (share, reply) {
        var _this = this;
        var counter = 0;
        for (var i = 0; i < reply.likes.length; i++) {
            if (reply.likes[i]._id === this.user._id) {
                counter = counter + 1;
            }
            else {
                continue;
            }
        }
        if (counter > 0) {
            var observable = this._shareService.dislikeReply(this.user, reply);
            observable.subscribe(function (data) {
                _this.getAllShares();
                _this.bringOneShare(share._id);
            });
        }
        else {
            var observable = this._shareService.likeReply(this.user, reply);
            observable.subscribe(function (data) {
                _this.getAllShares();
                _this.bringOneShare(share._id);
            });
        }
    };
    //  Like from Dashboard
    DashboardComponent.prototype.onclickLike = function (share) {
        var _this = this;
        var counter = 0;
        for (var i = 0; i < share.likes.length; i++) {
            if (share.likes[i]._id === this.user._id) {
                counter = counter + 1;
            }
            else {
                continue;
            }
        }
        if (counter > 0) {
            var observable = this._shareService.dislikeFromService(share, this.user);
            observable.subscribe(function (data) {
                _this.getAllShares();
                _this.getAllUsers();
            });
        }
        else {
            var observable = this._shareService.likeFromService(share, this.user);
            observable.subscribe(function (data) {
                _this.getAllShares();
                _this.getAllUsers();
            });
        }
    };
    // Displaying who likes----------------------
    DashboardComponent.prototype.displayWhoLikes = function (share) {
        this.wholeLikes = share;
    };
    DashboardComponent.prototype.removeLikesBox = function () {
        this.wholeLikes = null;
    };
    DashboardComponent.prototype.bringOneShare1 = function (id) {
        var _this = this;
        var observable = this._shareService.aShare(id);
        observable.subscribe(function (data) {
            var sharez = data;
            _this.wholeLikes = sharez;
            //  this.sortArray(this.users);
        });
    };
    // removing picture from firebase
    DashboardComponent.prototype.deleteFileStorage = function (name) {
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_9__["storage"]().ref();
        storageRef.child(this.basePath + "/" + name).delete();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"],
            _services_shares_service__WEBPACK_IMPORTED_MODULE_3__["SharesService"],
            _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabase"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/discover/discover.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/discover/discover.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containera{\n    width: 200px;\n    height: 300px;\n    /* border: 1px solid black; */\n    margin-left: -10px;\n    padding: 10px;\n    background: linear-gradient(#eae8ee, #a9d1eb, #eae8ee);\n    /* text-align: center; */\n    display: inline-block;\n    position: fixed;\n    margin-top: 0px;\n}\n.containera :hover{\n    cursor: pointer;\n}\n.profile-display{\n    width: 200px;\n    min-height: 200px;\n    padding-top: 10px;\n    padding-left: 10px;\n    margin-top: 0;\n    display: block;\n    background: linear-gradient(#eae8ee, #a9d1eb, #eae8ee);\n    position: absolute;\n    z-index: 1;\n    box-shadow: 0 0 10px rgb(129, 129, 129);\n}\n.header{\n    width: 180px;\n    height: 30px;\n    margin-top: 20px;\n    /* padding-left: 5px; */\n    text-align: center;\n   \n    background: linear-gradient(#eaeeed, #8dccf7, #eaeeed);\n    color: rgba(67, 64, 64, 0.933);\n  \n}\n.header1{\n    width: 180px;\n    height: 30px;\n    /* padding-left: 5px; */\n    text-align: center;\n    \n    background: linear-gradient(#eaeeed, #8dccf7, #eaeeed);\n    color: rgba(67, 64, 64, 0.933);\n  \n}\n.loader {\n    border: 16px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 16px solid #28333b;\n    width: 30px;\n    height: 30px;\n    -webkit-animation: spin 2s linear infinite; /* Safari */\n    animation: spin 2s linear infinite;\n  }\n/* Safari */\n@-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n  }\n@keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n  }\n.follow-req{\n    width: 200px;\n    height: 500px;\n    border: 1px solid rgb(243, 241, 241);\n    position: fixed;\n    margin-left:950px;\n    /* z-index: 9; */\n    /* background:  rgb(233, 240, 243); */\n    margin-top: 0;\n  }\n.contenta{\n    width: 100%;\n    height: 200px;\n\n   margin-top: 200px;\n    margin-left: 0;\n \n    display: inline-block;\n    \n   \n}\n.date{\n    font-size: 10px;\n    color: rgb(99, 59, 245);\n}\n.info{\n    width: 180px;\n    height: 30px;\n    /* padding-left: 5px; */\n    padding-left: 10%;\n    margin-top: 20px;\n    background: rgb(236, 234, 234);\n    color: rgba(155, 153, 153, 0.933);\n   \n}\n.info1{\n    width: 180px;\n    height: 30px;\n    /* padding-left: 5px; */\n    padding-left: 10%;\n    margin-top: 20px;\n    background: rgb(236, 234, 234);\n    color: rgba(133, 125, 125, 0.933);\n   \n}\n.a :hover{\n    cursor: pointer;\n}\n.btn{\n    margin-left: 20px;\n}\n#myImg:hover {opacity: 0.7;}\n.modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    /* overflow: auto; */\n    background-color: rgba(0, 0, 0, 0.151); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.151); /* Black w/ opacity */\n}\n.modal1 {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    padding-left: 100px;\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.473); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.473); /* Black w/ opacity */\n    z-index: 1;\n}\n.modal-content {\n    margin: auto;\n    display: block;\n    width: 30%;\n    max-width: 500px;\n}\n.modal-content1 {\n    display: block;\n    width: 45%;\n}\n#caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n}\n.modal-content, #caption {    \n    -webkit-animation-name: zoom;\n    -webkit-animation-duration: 0.6s;\n    animation-name: zoom;\n    animation-duration: 0.6s;\n}\n@-webkit-keyframes zoom {\n    from {-webkit-transform:scale(0)} \n    to {-webkit-transform:scale(1)}\n}\n@keyframes zoom {\n    from {-webkit-transform:scale(0);transform:scale(0)} \n    to {-webkit-transform:scale(1);transform:scale(1)}\n}\n.close {\n    position: absolute;\n    top: 100px;\n    right: 300px;\n    color: #f1f1f1;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n}\n.close:hover,\n.close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n}\n@media only screen and (max-width: 700px){\n    .modal-content {\n        width: 100%;\n    }\n}\n#myImg {\n    border-radius: 5px;\n    cursor: pointer;\n    transition: 0.3s;\n}\n.infdsplay{\n    width: 100px;\n    background: rgb(116, 114, 114);\n    color: white;\n    padding-top: 5px;\n    padding-left: 20px;\n    margin-left: 30px;margin-top: -30px;\n    font-size: 10px;\n    display: block;\n    position: absolute;\n    border-radius: 5px;\n}\n.blue{\n    color: rgb(133, 131, 131);\n    font-size: 20px;\n}\n.red{\n    color: red;\n    font-size: 20px;\n}\n.comment-form{\n    box-shadow: 0 0 10px rgb(129, 129, 129);\n\n}\n.blur {-webkit-filter: blur(4px);filter: blur(4px);}\n.brightness {-webkit-filter: brightness(250%);filter: brightness(250%);}\n.contrast {-webkit-filter: contrast(180%);filter: contrast(180%);}\n.grayscale {-webkit-filter: grayscale(100%);filter: grayscale(100%);}\n.huerotate {-webkit-filter: hue-rotate(180deg);filter: hue-rotate(180deg);}\n.invert {-webkit-filter: invert(100%);filter: invert(100%);}\n.opacity {-webkit-filter: opacity(50%);filter: opacity(50%);}\n.saturate {-webkit-filter: saturate(7); filter: saturate(7);}\n.sepia {-webkit-filter: sepia(100%);filter: sepia(100%);}\n.shadow {-webkit-filter: drop-shadow(8px 8px 10px green);filter: drop-shadow(8px 8px 10px green);}"

/***/ }),

/***/ "./src/app/components/discover/discover.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/discover/discover.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SHARE BACKGROUND -->\n<div style=\"width: 70%; background: rgb(255, 255, 255); padding-bottom: 200px; padding-top: 0px; margin-left: 200px;\">\n     \n   \n  \n    <div *ngIf='numb > 0' (click)='getAllShares()' style=\"width: 660px; text-align: center; padding-top: 30px; padding-bottom: 30px; background: rgb(155, 201, 223); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195); margin-left: 50px; margin-top: 5px; padding-left: 30px; padding-right: 30px;\"> {{numb}} new <span *ngIf='numb === 1'>post</span> <span *ngIf='numb > 1'> posts</span></div>\n     <!-- Main Share Window -->\n    <div *ngFor=\"let share of shares\">\n\n        <div   style=\"width: 660px; padding-top: 30px; background: rgb(242, 244, 245);; border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195); margin-left: 50px; margin-top: 5px; padding-left: 30px; padding-right: 30px;\">\n            \n            <div class=\"a\" (click)=\"displayReplies(share)\" style=\"width: 520px; margin-left: 100px; height: 50px; position: absolute; margin-top:-20px;\" >\n\n            </div>\n            <!-- Profile Photo Box -->\n\n            <div  class=\"a\"  style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                <img *ngIf='!share.user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                <img *ngIf='share.user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{share.user.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n            </div>\n            <!-- Second Share box -->\n\n            <div style=\"width: 540px;  display: inline-block;  margin-left: 50px; \">\n                <!-- UserName Window -->\n                <div class=\"a\" style=\" width: 100px; height:30px;\" (mouseleave) =\"mouseLeave()\">\n                    <h3 *ngIf='share.user' class=\"a\" (mouseenter) =\"mouseEnter(share) \" style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 5px; font-weight: bold; \" >{{share.user.username}}</h3>\n                    \n                    <!-- Profile popup window -->\n\n                    <div *ngIf='profileShow[share._id]' class=\"profile-display\" (mouseleave) =\"mouseLeave()\" style=\"z-index: 4;\">\n                        <div class=\"text-center\">\n                            <img *ngIf='!share.user.ProfilePhoto'style=\" width:50px; height: 50px;\"  src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                            <img *ngIf='share.user.ProfilePhoto'style=\" width:50px; height: 50px;\"  src=\"{{share.user.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">            \n                        </div>\n                        <div class=\"header1\">\n                            <h1  style=\"font-size: 20px; font-weight: bold;\">{{share.user.username}}</h1>                \n                        </div>\n                        <div class=\"info1\">\n                            <p *ngIf=\"share.user\"><span *ngIf='!share.user.info'>about</span>{{share.user.info}}</p>\n                        </div>\n                        \n                    </div>\n\n                </div>\n                <!-- ShareBox -->\n            \n                    <div (click)=\"imgToShow(share)\" *ngIf='share.urla' style=\"width: 640px; height: 300px; overflow: hidden; padding-left: 80px;\" class=\"a\">\n                        <img id=\"myImg\" class=\"{{share.imageclass}}\" src=\"{{share.urla}}\" style=\"width: 350px; margin-top: 5px; margin-bottom: 15px;\" alt=\"{{share.comment}}\" >\n                    </div>\n                \n                    <div *ngIf='share.user' class=\"a\" style=\"margin-top: 20px;\" (click)=\"displayReplies(share)\">\n                        <p class=\"a\" style=\"margin-left: 20px;\">{{share.comment}}</p>\n                        <p class=\"date\">{{ stringAsDate(share.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n                    </div>\n        \n            </div>\n        </div>\n                <!-- Action Box -->\n        <div   *ngIf='share.user' style=\"width: 660px; height:50px;margin-top: 0px; padding-bottom: 20px;  margin-left:50px;  background: rgb(242, 244, 245);;\" >\n                <div *ngIf='infoDisp[share._id]' class=\"infdsplay\">\n                    <p>{{content}}</p>\n                </div>\n                <div (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('like', share)\"  style=\"display: inline-block; position: absolute; margin-left: 300px;\" >\n                    <span class=\"btn\"><i class=\"fa fa-heart blue\"></i> </span><span style=\"margin-left: 10px;\">{{share.likes.length}}</span>\n                </div>\n                \n                <div (mouseenter) =\"displayMeaning('reply', share)\"  (mouseleave)=\"displayMea()\" style=\"display: inline-block; position: absolute; margin-left: 50px;\">\n                    <span class=\"fa fa-commenting-o btn\"  style=\"font-size: 24px; margin-left: 30px; color: rgb(86, 201, 230); z-index: 1;\"></span>\n                </div>\n                <div  style=\"position: absolute; margin-left: 120px; \">\n                    <span class=\"btn\" >{{share.replies.length}}</span>\n                </div>\n         \n           \n            \n        </div>\n    </div>\n  \n</div>\n\n<div style=\"width: 50%; height: 300px; background: rgb(255, 255, 255); margin-left: 400px;\">\n\n</div>\n<!-- Image display -->\n\n<div *ngIf=\"selectedImg\"id=\"myModal\" (click)=\"selectedImgNull()\" class=\"modal\">\n    <img class=\"modal-content {{selectedImg.imageclass}}\" id=\"img01\" src=\"{{selectedImg.urla}}\">\n    <div class=\"a\" id=\"caption\"><h3  style=\"font-size: 25px; color: rgb(245, 244, 244);  margin-left: 5px; \" >{{selectedImg.user.username}}</h3><p style=\"color: rgb(77, 75, 75); \">{{selectedImg.comment}}</p></div>\n</div>\n\n<!-- Share and Replies display -->\n\n<div *ngIf=\"displayrepliesOfShare\" class=\"modal1\" >\n    <span  (click)=\"removeReplyBox()\" style=\"font-size: 40px; margin-left: 900px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n        \n    <div  class=\"modal-content1\" style=\"min-height: 500px; padding-left: 100px; padding-top: 30px; padding-bottom: 100px; z-index: 2; background: rgb(242, 244, 245); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 350px;\">\n        <div   style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute; margin-left: -50px;\">\n            <img *ngIf='!displayrepliesOfShare.user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n            <img *ngIf='displayrepliesOfShare.user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{displayrepliesOfShare.user.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n        </div>\n        <div style=\" width: 100px; height:30px; margin-left: -60px;\">\n            <h3  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 50px; font-weight: bold; \" >{{displayrepliesOfShare.user.username}}</h3>\n           \n            \n        </div>\n        <div>\n            <div  *ngIf='displayrepliesOfShare.urla' style=\"width: 440px;  \">\n                <img id=\"myImg\" class=\"{{displayrepliesOfShare.imageclass}}\" src=\"{{displayrepliesOfShare.urla}}\" style=\"width: 350px; margin-top: 5px; margin-bottom: 15px;\"  >\n            </div>\n            \n            <div style=\"margin-top: 20px; width: 350px;\">\n                <p style=\"margin-left: 20px;\">{{displayrepliesOfShare.comment}}</p>\n                <p class=\"date\">{{ stringAsDate(displayrepliesOfShare.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n            </div>\n        </div>\n        <div style=\"border: 1px solid grey; margin-top: 40px; width: 520px; margin-left: -90px;\"></div>\n        <div style=\"width: 400px; height:50px;margin-top:20px; padding-bottom: 20px;  margin-left:-30px;  background: rgb(242, 244, 245); border: 1px solid rgb(242, 244, 245);\" >\n                <div *ngIf='infoDisp[displayrepliesOfShare._id]' class=\"infdsplay\">\n                    <p>{{content}}</p>\n                </div>\n                <div (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('like', displayrepliesOfShare)\"  style=\"display: inline-block; position: absolute; margin-left: 200px;\" >\n                    <span class=\"btn\"><i class=\"fa fa-heart blue\"></i> </span><span (click)=\"displayWhoLikes(displayrepliesOfShare)\" class=\"btn\" style=\"margin-left: 10px; color: blue;\">{{displayrepliesOfShare.likes.length}} likes</span>\n                 </div>\n             \n                \n                <div  style=\"position: absolute; margin-left: 70px; \">\n                    <span  >{{displayrepliesOfShare.replies.length}} comments</span>\n                </div>\n         \n         \n            \n        </div>\n\n        <div style=\"border: 1px solid grey; margin-top: 110px; width: 520px; margin-left: -90px;\"></div>\n\n        <!-- Replies -->\n\n        <div *ngFor='let reply of displayrepliesOfShare.replies'>\n            <p style=\"margin-top: 30px;\"><span  class=\"btn\" style=\"color: rgb(61, 137, 236);\">{{reply.commentor.username}} :</span> {{reply.content}}</p><br>\n            <p class=\"date\">{{ stringAsDate(reply.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n            <div *ngIf='infoDisp[reply._id]' class=\"infdsplay\">\n                <p>{{content}}</p>\n\n            </div>\n            <!-- Action box -->\n            <div (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('like', reply)\"  style=\"display: inline-block; position: absolute; margin-left: 200px;\" >\n                <span  class=\"btn\"><i class=\"fa fa-heart blue\"></i> </span><span (click)=\"displayWhoLikes(reply)\"style=\"margin-left: 10px; color: blue;\" class=\"btn\">{{reply.likes.length}} likes</span>\n             </div>\n            \n\n            <div style=\"border: 1px solid rgb(163, 162, 162); margin-top: 110px; width: 440px; margin-left: -50px;\"></div>\n        </div>\n        \n    </div>\n\n</div>\n\n<!-- Likes display  -->\n\n<div *ngIf=\"wholeLikes\" class=\"modal1\">\n        <span  (click)=\"removeLikesBox()\" style=\"font-size: 40px; margin-left: 900px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n       <div *ngIf='wholeLikes' class=\"modal-content1\" style=\"min-height: 500px; padding-left: 50px; padding-top: 30px; padding-bottom: 100px; background: rgb(242, 244, 245); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 350px; z-index: 5;\" >\n            <div *ngFor='let liker of wholeLikes.likes'>\n                <div style=\"border-top: 1px solid rgb(53, 53, 53); border-bottom: 1px solid rgb(53, 53, 53); padding-top: 20px; padding-bottom: 20px;\">\n                        <div  style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                        <img *ngIf='!liker.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                        <img *ngIf='liker.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{liker.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n                    </div>\n                    <h3  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 50px; font-weight: bold; \" >{{liker.username}}</h3>\n                   \n                </div>\n                \n            </div>    \n           \n       </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/discover/discover.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/discover/discover.component.ts ***!
  \***********************************************************/
/*! exports provided: DiscoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverComponent", function() { return DiscoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shares_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shares.service */ "./src/app/services/shares.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiscoverComponent = /** @class */ (function () {
    function DiscoverComponent(_shareService, _usersService) {
        this._shareService = _shareService;
        this._usersService = _usersService;
        this.showSpinner = true;
        // displayPhoto: any;
        this.profileShow = {};
        this.infoDisp = {};
        this.displayCommentbox = {};
        this.normala = 'normal';
        this.loading = null;
        this.checkShares = false;
    }
    DiscoverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllShares();
        this.picture;
        this.message = "Write something interesting";
        this.newUrl;
        this.comment = '';
        this.selectedImg;
        this.img;
        this.profileShow;
        this.userax;
        this.content;
        this.infoDisp;
        this.reply;
        this.normala;
        this.newUrl1;
        this.loading;
        this.displayrepliesOfShare;
        this.wholeLikes;
        this._bests;
        this.my_dashboard;
        this.myFollowers;
        this.myFollowings;
        this.checkShares;
        this.countNewshares;
        this.users;
        setInterval(function () {
            _this.getAllShares1();
        }, 5000);
        setInterval(function () {
            _this.numb;
        }, 5000);
    };
    // bring all shares
    DiscoverComponent.prototype.getAllShares = function () {
        var _this = this;
        this.numb = 0;
        var observable = this._shareService.bestShares();
        observable.subscribe(function (data) {
            _this.shares = data;
            //  this.sortArray(this.users);
        });
    };
    DiscoverComponent.prototype.getAllShares1 = function () {
        var _this = this;
        var observable = this._shareService.bestShares();
        observable.subscribe(function (data) {
            _this.shares1 = data;
            _this.numb = _this.shares1.length - _this.shares.length;
            //  this.sortArray(this.users);
        });
    };
    // Data-Time------
    DiscoverComponent.prototype.stringAsDate = function (dateStr) {
        return new Date(dateStr);
    };
    // Showing profile box
    DiscoverComponent.prototype.mouseEnter = function (share) {
        var _this = this;
        var observable = this._usersService.getanUser(share.user_id);
        observable.subscribe(function (data) {
            _this.userax = data['user'];
            //  this.sortArray(this.users);
        });
        Object.keys(this.profileShow).forEach(function (h) {
            _this.profileShow[h] = false;
        });
        this.profileShow[share._id] = true;
    };
    DiscoverComponent.prototype.mouseLeave = function () {
        var _this = this;
        Object.keys(this.profileShow).forEach(function (h) {
            _this.profileShow[h] = false;
        });
    };
    // Profile displays ------------------------
    DiscoverComponent.prototype.displayFollowers = function (user) {
        var _this = this;
        var observable = this._usersService.getanUser(user._id);
        observable.subscribe(function (data) {
            _this.myFollowers = data['user'];
        });
    };
    DiscoverComponent.prototype.removeFollowersBox = function () {
        this.myFollowers = null;
        this.myFollowings = null;
    };
    DiscoverComponent.prototype.displayFollowings = function (user) {
        var _this = this;
        var observable = this._usersService.getanUser(user._id);
        observable.subscribe(function (data) {
            _this.myFollowings = data['user'];
        });
    };
    //  Display of like delete comment box
    DiscoverComponent.prototype.displayMeaning = function (info, share) {
        var _this = this;
        this.content = '' + info + '!';
        Object.keys(this.infoDisp).forEach(function (h) {
            _this.infoDisp[h] = false;
        });
        this.infoDisp[share._id] = true;
    };
    DiscoverComponent.prototype.displayMea = function () {
        var _this = this;
        Object.keys(this.infoDisp).forEach(function (h) {
            _this.infoDisp[h] = false;
        });
    };
    // Show image after clicking on 
    DiscoverComponent.prototype.imgToShow = function (share) {
        this.selectedImg = share;
    };
    DiscoverComponent.prototype.selectedImgNull = function () {
        this.selectedImg = null;
    };
    // after clicking on the share
    DiscoverComponent.prototype.displayReplies = function (share) {
        var _this = this;
        console.log(share);
        var observable = this._shareService.aShare(share._id);
        observable.subscribe(function (data) {
            _this.sharex = data;
            _this.displayrepliesOfShare = _this.sharex;
        });
    };
    DiscoverComponent.prototype.bringOneShare = function (id) {
        var _this = this;
        var observable = this._shareService.aShare(id);
        observable.subscribe(function (data) {
            _this.sharex = data;
            _this.displayrepliesOfShare = _this.sharex;
        });
    };
    // closing single share
    DiscoverComponent.prototype.removeReplyBox = function () {
        this.displayrepliesOfShare = null;
        this.getAllShares();
    };
    DiscoverComponent.prototype.displayWhoLikes = function (share) {
        this.wholeLikes = share;
    };
    DiscoverComponent.prototype.removeLikesBox = function () {
        this.wholeLikes = null;
    };
    DiscoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discover',
            template: __webpack_require__(/*! ./discover.component.html */ "./src/app/components/discover/discover.component.html"),
            styles: [__webpack_require__(/*! ./discover.component.css */ "./src/app/components/discover/discover.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shares_service__WEBPACK_IMPORTED_MODULE_1__["SharesService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], DiscoverComponent);
    return DiscoverComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgcl{\n    width: 1000px;\n    height: 600px;\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n\n  <!-- Main jumbotron for a primary marketing message or call to action -->\n  <div class=\"jumbotron\"  style=\"background:linear-gradient(#eeece8, #ebc1a9, #eecee8) \" >\n    <div class=\"container\">\n      <h1 class=\"display-3\">Discover and Enjoy! </h1>\n      <p style=\"font-size: 30px;\">What are you waiting for?</p>\n      <p><a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/register']\" role=\"button\">Join now &raquo;</a></p>\n      <p><a  [routerLink]=\"['/login']\" >Already have an account</a></p>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <!-- Example row of columns -->\n    <p><a class=\"btn btn-secondary\" [routerLink]=\"['/discover']\"role=\"button\">Discover without join &raquo;</a></p>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n          <img src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-07-10%20at%2012.30.51%20AM.png?alt=media&token=b79a471f-42c5-46ce-a5f3-a4199d54cb6b\" style=\"width: 300px; height: 200px;\">\n        \n      </div>\n      <div class=\"col-md-4\">\n        <img src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-07-10%20at%2012.31.09%20AM.png?alt=media&token=f0a74d60-1990-45cb-8c8a-2f937e1414b7\" style=\"width: 300px; height: 200px;\">\n        \n      </div>\n      <div class=\"col-md-4\">\n          <img src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-07-10%20at%2012.31.23%20AM.png?alt=media&token=f52cdc4f-2f6b-44b7-a274-7fd0a6510fe1\" style=\"width: 300px; height: 200px;\">\n        \n      </div>\n    </div>\n\n    <hr>\n\n  </div> <!-- /container -->\n\n</main>\n\n<footer class=\"container\">\n \n</footer>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(_router, _route, _httpService, _validateService, _authService, _flashMessagesService) {
        this._router = _router;
        this._route = _route;
        this._httpService = _httpService;
        this._validateService = _validateService;
        this._authService = _authService;
        this._flashMessagesService = _flashMessagesService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-a{\n    width: 400px;\n    height: 400px;\n    padding-top: 40px;\n    margin-left: 400px;\n    border-radius: 10px;\n    box-shadow: 1px 1px rgb(198, 193, 193);\n    background: rgb(230, 224, 224);\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-a\">\n\n\n  <div class=\"text-center\">\n    <form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\n      \n      <h1 class=\"h3 mb-3 font-weight-normal\">Please Login</h1>\n      <input name=\"username\" [(ngModel)]=\"username\" class=\"inputs\" placeholder=\"Username\" required autofocus><br><br>\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"inputs\"  placeholder=\"Password\" required><br><br>\n      <div class=\"checkbox mb-3\">\n        <label>\n          <input type=\"checkbox\" value=\"remember-me\"> Remember me\n        </label>\n      </div>\n      <button class=\"btn btn-lg btn-primary\" type=\"submit\">Login</button>\n      \n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _route, _httpService, _validateService, _authService, _flashMessagesService) {
        this._router = _router;
        this._route = _route;
        this._httpService = _httpService;
        this._validateService = _validateService;
        this._authService = _authService;
        this._flashMessagesService = _flashMessagesService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        var observable = this._authService.authenticateUser(user);
        observable.subscribe(function (data) {
            if (data['success']) {
                _this._authService.storeUserData(data['token'], data['user']);
                _this._flashMessagesService.show('Successfully logged in!', { cssClass: 'alert-success', timeout: 4000 });
                _this._router.navigate(['/dashboard']);
            }
            else {
                _this._flashMessagesService.show(data['msg'], { cssClass: 'alert-danger', timeout: 4000 });
                _this._router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#logo{\n    color: rgb(124, 70, 86);\n}\n#navigation{\n    width: 100%;\n    position: fixed;\n    background: rgb(231, 229, 229);\n    border: 1px solid rgb(252, 252, 252);\n    z-index: 1;\n}\n.modal1 {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n   /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    padding-left: 100px;\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.473); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.473); /* Black w/ opacity */\n    z-index: 1;\n}\n.modal5 {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n   /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    padding-left: 100px;\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.473); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.473); /* Black w/ opacity */\n    z-index: 6;\n}\n.modal-content5 {\n    display: block;\n    width: 45%;\n}\n.modal-content1 {\n    display: block;\n    width: 65%;\n}\n.modal-content2 {\n    display: block;\n    width: 50%;\n}\n.containera{\n    width: 300px;\n    height: 400px;\n    /* border: 1px solid black; */\n    margin-left: 25px;\n    padding: 10px;\n    background: rgb(206, 203, 203);\n    /* text-align: center; */\n    display: inline-block;\n    position: fixed;\n    margin-top: 0px;\n}\n.containera :hover{\n    cursor: pointer;\n}\n.header{\n    width: 280px;\n    height: 50px;\n    /* padding-left: 5px; */\n    text-align: center;\n    background: rgb(226, 219, 219);\n    color: rgba(67, 64, 64, 0.933);\n  \n}\n.header1{\n    width: 180px;\n    height: 30px;\n    /* padding-left: 5px; */\n    text-align: center;\n    background: rgb(226, 219, 219);\n    color: rgba(67, 64, 64, 0.933);\n  \n}\n.contenta{\n    width: 100%;\n    height: 200px;\n\n   margin-top: 200px;\n    margin-left: 0;\n \n    display: inline-block;\n    \n   \n}\n.date{\n    font-size: 10px;\n    color: rgb(99, 59, 245);\n}\n.info{\n    width: 280px;\n    height: 50px;\n    /* padding-left: 5px; */\n    text-align: center;\n    background: rgb(236, 234, 234);\n    color: rgba(133, 125, 125, 0.933);\n   \n}\n.info1{\n    width: 180px;\n    height: 30px;\n    /* padding-left: 5px; */\n    text-align: center;\n    background: rgb(236, 234, 234);\n    color: rgba(133, 125, 125, 0.933);\n   \n}\n.a :hover{\n    cursor: pointer;\n}\n.btn{\n    margin-left: 20px;\n}\n#myImg:hover {opacity: 0.7;}\n.modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    /* overflow: auto; */\n    background-color: rgba(0, 0, 0, 0.151); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.151); /* Black w/ opacity */\n}\n.modal1 {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n     /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    padding-left: 100px;\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.473); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.473); /* Black w/ opacity */\n    z-index: 1;\n}\n.modal3 {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    padding-left: 100px;\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.473); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.473); /* Black w/ opacity */\n    z-index: 5;\n}\n.modal-content {\n    margin: auto;\n    display: block;\n    width: 30%;\n    max-width: 500px;\n}\n#caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n}\n.modal-content, #caption {    \n    -webkit-animation-name: zoom;\n    -webkit-animation-duration: 0.6s;\n    animation-name: zoom;\n    animation-duration: 0.6s;\n}\n@-webkit-keyframes zoom {\n    from {-webkit-transform:scale(0)} \n    to {-webkit-transform:scale(1)}\n}\n@keyframes zoom {\n    from {-webkit-transform:scale(0);transform:scale(0)} \n    to {-webkit-transform:scale(1);transform:scale(1)}\n}\n.close {\n    position: absolute;\n    top: 100px;\n    right: 300px;\n    color: #f1f1f1;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n}\n.close:hover,\n.close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n}\n@media only screen and (max-width: 700px){\n    .modal-content {\n        width: 100%;\n    }\n}\n#myImg {\n    border-radius: 5px;\n    cursor: pointer;\n    transition: 0.3s;\n}\n.profile-display{\n    width: 200px;\n    min-height: 200px;\n    padding-top: 10px;\n    padding-left: 10px;\n    margin-top: 0;\n    display: block;\n    background: rgb(240, 235, 235);\n    position: absolute;\n    z-index: 1;\n    box-shadow: 0 0 10px rgb(129, 129, 129);\n}\n.infdsplay{\n    width: 100px;\n    background: rgb(116, 114, 114);\n    color: white;\n    padding-top: 5px;\n    padding-left: 20px;\n    margin-left: 30px;margin-top: -30px;\n    font-size: 10px;\n    display: block;\n    position: absolute;\n    border-radius: 5px;\n}\n.blue{\n    color: rgb(145, 143, 143);\n    font-size: 20px;\n}\n.red{\n    color: red;\n    font-size: 20px;\n}\n.comment-form{\n    box-shadow: 0 0 10px rgb(129, 129, 129);\n\n}\n.loader {\n    border: 16px solid #bdbbbb;\n    border-radius: 50%;\n    border-top: 16px solid #141516;\n    width: 150px;\n    height: 150px;\n    -webkit-animation: spin 2s linear infinite; /* Safari */\n    animation: spin 2s linear infinite;\n  }\n/* Safari */\n@-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n  }\n@keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n  }\n.blur {-webkit-filter: blur(4px);filter: blur(4px);}\n.brightness {-webkit-filter: brightness(250%);filter: brightness(250%);}\n.contrast {-webkit-filter: contrast(180%);filter: contrast(180%);}\n.grayscale {-webkit-filter: grayscale(100%);filter: grayscale(100%);}\n.huerotate {-webkit-filter: hue-rotate(180deg);filter: hue-rotate(180deg);}\n.invert {-webkit-filter: invert(100%);filter: invert(100%);}\n.opacity {-webkit-filter: opacity(50%);filter: opacity(50%);}\n.saturate {-webkit-filter: saturate(7); filter: saturate(7);}\n.sepia {-webkit-filter: sepia(100%);filter: sepia(100%);}\n.shadow {-webkit-filter: drop-shadow(8px 8px 10px green);filter: drop-shadow(8px 8px 10px green);}\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <div class=\"loader\" *ngIf='loading' style=\"position: fixed; margin-left: 550px; margin-top: 150px; z-index: 5; font-size: 10px;\"></div>\n\n  <nav class=\"navbar\" id=\"navigation\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" id=\"logo\" *ngIf=\"!_authService.loggedIn()\" [routerLink]=\"['/']\">Interact</a>\n        <a class=\"navbar-brand\" id=\"logo\" *ngIf=\"_authService.loggedIn()\" [routerLink]=\"['/dashboard']\">Interact</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li [routerLinkActive]=\"['active']\"><a  *ngIf=\"!_authService.loggedIn()\" [routerLink]=\"['/']\" >Home</a></li>\n        <li [routerLinkActive]=\"['active']\"><a  *ngIf=\"_authService.loggedIn()\"[routerLink]=\"['/dashboard']\" >Dashboard</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li  [routerLinkActive]=\"['active']\" ><a [routerLink]=\"['/profile']\" *ngIf=\"_authService.loggedIn()\"><span class=\"glyphicon glyphicon-user\"></span> Proile</a></li>\n        <li  [routerLinkActive]=\"['active']\" ><a (click)=\"searchBar()\" *ngIf=\"_authService.loggedIn()\"><span class=\"glyphicon glyphicon-search\"></span> Search</a></li>\n        <li *ngIf=\"searchbar\" style=\"margin-top: 10px;\">\n          <form (submit)=\"onsubmitSearch()\">\n            <input type=\"text\" placeholder=\"Search..\" name=\"search\" [(ngModel)]=\"search\">\n            <button type=\"submit\"><i class=\"fa fa-search\"></i></button>\n          </form>\n        </li>\n        <li [routerLinkActive]=\"['active']\"><a  (click)=\"postFromNav()\" *ngIf=\"_authService.loggedIn()\" class=\"a\"><span class=\"glyphicon glyphicon-plus\"></span> </a></li>\n        <li [routerLinkActive]=\"['active']\"><a  [routerLink]=\"['/profile', user._id, 'notifications']\" *ngIf=\"_authService.loggedIn()\"><span *ngIf='numb > 0' class=\"glyphicon glyphicon-bell\" style=\"color:red;\">{{numb}}</span><span *ngIf='numb === 0' class=\"glyphicon glyphicon-bell\">{{numb}}</span></a></li>\n        <li [routerLinkActive]=\"['active']\"><a  [routerLink]=\"['/register']\" *ngIf=\"!_authService.loggedIn()\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/login']\" *ngIf=\"!_authService.loggedIn()\" ><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/']\" (click)=\"onLogout()\" *ngIf=\"_authService.loggedIn()\" ><span class=\"glyphicon glyphicon-log-in\"></span> Log Out</a></li>\n      </ul>\n      \n    </div>\n  </nav>\n<!-- Search -->\n\n<div *ngIf=\"result\" class=\"modal1\">\n    <span  (click)=\"removeresultsBox()\" style=\"font-size: 40px; margin-left: 920px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n   <div *ngIf=\"result\" class=\"modal-content1\" style=\"min-height: 500px; padding-left: 50px; padding-top: 30px; padding-bottom: 100px; background: rgb(242, 244, 245); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 150px; z-index: 5;\" >\n           \n      <div *ngFor='let searchi of users'>\n          <div style=\"border-top: 1px solid rgb(53, 53, 53); border-bottom: 1px solid rgb(53, 53, 53); padding-top: 20px; padding-bottom: 20px;\">\n                  <div  [routerLink]=\"['/profile', searchi._id]\" (click)=\"removeresultsBox()\" style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                  <img *ngIf='!searchi.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                  <img *ngIf='searchi.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{searchi.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n              </div>\n              <h3  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 50px; font-weight: bold; \" [routerLink]=\"['/profile', searchi._id]\" (click)=\"removeresultsBox()\">{{searchi.username}}</h3>\n                <div *ngIf='searchi._id != user._id'>\n                      <span *ngIf=\"!user.followings.includes(searchi._id)\" class=\"btn\"  style=\"position: absolute; margin-top: -40px; margin-left: 350px; z-index: 3;\"><i (click)=\"onclickletsFollow2(searchi)\">  Follow</i> </span>\n                      <span *ngIf=\"user.followings.includes(searchi._id)\" class=\"btn\" style=\"position: absolute; margin-top: -40px; margin-left: 350px; background: rgb(178, 243, 178); z-index: 3;\"> <i (click)=\"onclickletsUnfollow2(searchi)\">  Following</i></span>\n                </div>\n          </div>\n   </div>\n   \n      <!-- Main Share Window -->\n    <div *ngFor=\"let share of shares\">\n\n        <div   style=\"width: 460px; padding-top: 30px; background: rgb(253, 253, 253); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195); margin-left: 50px; margin-top: 5px; padding-left: 30px; padding-right: 30px;\">\n            <div class=\"a\" (click)=\"displayReplies(share)\" style=\"width: 320px; margin-left: 100px; height: 50px; position: absolute; margin-top:-20px;\" >\n\n            </div>\n            <!-- Profile Photo Box -->\n\n            <div  class=\"a\" [routerLink]=\"['/profile', share.user._id]\"  (click)=\"removeresultsBox()\" style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                <img *ngIf='!share.user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                <img *ngIf='share.user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{share.user.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n            </div>\n            <!-- Second Share box -->\n\n            <div style=\"width: 340px;  display: inline-block;  margin-left: 50px; \">\n                <!-- UserName Window -->\n                <div class=\"a\" style=\" width: 100px; height:30px;\" (mouseleave) =\"mouseLeave()\">\n                    <h3 class=\"a\" (mouseenter) =\"mouseEnter(share) \" style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 5px; font-weight: bold; \" ><span [routerLink]=\"['/profile', share.user._id]\"  (click)=\"removeresultsBox()\">{{share.user.username}}</span></h3>\n                    \n                    <!-- Profile popup window -->\n\n                    <div *ngIf='profileShow[share._id]' class=\"profile-display\" (mouseleave) =\"mouseLeave()\" style=\"z-index: 4;\">\n                        <div class=\"text-center\"[routerLink]=\"['/profile',share.user._id]\" (click)=\"removeresultsBox()\">\n                            <img *ngIf='!share.user.ProfilePhoto'style=\" width:50px; height: 50px;\"  src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                            <img *ngIf='share.user.ProfilePhoto'style=\" width:50px; height: 50px;\"  src=\"{{share.user.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">            \n                        </div>\n                        <div class=\"header1\"[routerLink]=\"['/profile',share.user._id]\">\n                            <h1 *ngIf=\"user\" style=\"font-size: 20px; font-weight: bold;\">{{share.user.username}}</h1>                \n                        </div>\n                        <div class=\"info1\"[routerLink]=\"['/profile',share.user._id]\">\n                            <p *ngIf=\"user\">{{share.user.info}}</p>\n                        </div>\n                        <div *ngIf='user._id != share.user._id'  style=\"position: absolute; z-index: 4;\">\n                            <button *ngIf=\"!share.user.followers.includes(user._id)\" (click)=\"onFollow2(share)\" style=\"z-index: 4;\" >Follow</button>\n                            <button *ngIf=\"share.user.followers.includes(user._id)\" (click)=\"onUnFollow2(share)\" style=\" background: rgb(178, 243, 178);\">Following</button>\n                        </div>\n                    </div>\n\n                </div>\n                <!-- ShareBox -->\n            \n                    <div  *ngIf='share.urla' style=\"width: 440px; height: 300px; overflow: hidden;\" class=\"a\">\n                        <img id=\"myImg\" class=\"{{share.imageclass}}\" src=\"{{share.urla}}\" style=\"width: 350px; margin-top: 5px; margin-bottom: 15px;\" alt=\"{{share.comment}}\" >\n                    </div>\n                \n                    <div class=\"a\" style=\"margin-top: 20px;\" (click)=\"displayReplies(share)\">\n                        <p class=\"a\" style=\"margin-left: 20px;\">{{share.comment}}</p>\n                        <p class=\"date\">{{ stringAsDate(share.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n                    </div>\n        \n            </div>\n        </div>\n                <!-- Action Box -->\n        <div style=\"width: 460px; height:50px;margin-top: 0px; padding-bottom: 20px;  margin-left:50px;  background: rgb(255, 254, 254);\" >\n                <div *ngIf='infoDisp[share._id]' class=\"infdsplay\">\n                    <p>{{content}}</p>\n                </div>\n                <div (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('like', share)\" (click)=\"onclickLike(share)\" style=\"display: inline-block; position: absolute; margin-left: 200px;\" >\n                    <span class=\"btn\"><i class=\"fa fa-heart blue\"></i> </span><span style=\"margin-left: 10px;\">{{share.likes.length}}</span>\n                    <span *ngFor='let like of share.likes'><i *ngIf='like._id === user._id' class=\"fa fa-heart red btn\" style=\"position: absolute; margin-left: -65px; margin-top: 0px;\"></i></span>\n                </div>\n                <div *ngIf=\"user._id === share.user._id\" (click)=\"deleteShare(share)\"  style=\"display: inline-block; position: absolute; margin-left: 350px;\" (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('delete', share)\" >\n                    <p> <span class=\"btn\" ><i class=\"fa fa-trash\" style=\"color: rgb(53, 85, 121);\"></i></span></p>\n                </div>\n                <div (mouseenter) =\"displayMeaning('reply', share)\" (click)=\"showaddComment(share)\" (mouseleave)=\"displayMea()\" style=\"display: inline-block; position: absolute; margin-left: 0px;\">\n                    <span class=\"fa fa-commenting-o btn\"  style=\"font-size: 24px; margin-left: 30px; color: rgb(86, 201, 230); z-index: 1;\"></span>\n                </div>\n                <div  style=\"position: absolute; margin-left: 70px; \">\n                    <span class=\"btn\" >{{share.replies.length}}</span>\n                </div>\n         \n            <div *ngIf=\"displayCommentbox[share._id]\" style=\"margin-top: 0px; height:100%; width: 100%; margin-left: -30px; z-index: 5; position: absolute;\" >\n                <div style=\"width: 400px;  background: rgb(247, 247, 247); border: 20px solid rgb(252, 252, 252); \" class=\"comment-form\">\n                    <span (click)=\"hideAddComment(share)\"><i class=\"fa fa-close\" style=\"font-size: 10px;\"></i></span>\n                    <form class=\"form-horizontal\" role=\"form\" (submit)=\"onreplySubmit(share)\">\n                        <textarea *ngIf=\"user\"  class=\"form-control\" type=\"textarea\" name=\"comment\" [(ngModel)]=\"reply\" placeholder=\"{{message}}\" style=\"width: 300px; min-height: 30px;\"></textarea>\n                        <input type=\"submit\" class=\"btn-primary\" value=\"Reply\" style=\"text-align: center;padding-left:-5px; padding-top: -5px; margin-top:-40px; width:40px; height: 20px; font-size: 10px; margin-left: 320px; position: absolute; background: green;\">\n                    </form>        \n                </div>      \n            </div>\n            \n        </div>\n    </div>\n  \n</div>\n\n\n<!-- Share and Replies display -->\n\n<div *ngIf=\"displayrepliesOfShare\" class=\"modal3\" >\n    <span  (click)=\"removeReplyBox()\" style=\"font-size: 40px; margin-left: 920px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n        \n    <div *ngIf=\"user\" class=\"modal-content2\" style=\"min-height: 500px; padding-left: 100px; padding-top: 30px; padding-bottom: 100px; z-index: 2; background: rgb(242, 244, 245); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 200px; z-index: 5;\">\n        <div  [routerLink]=\"['/profile', displayrepliesOfShare.user._id]\" (click)=\"removeresultsBox()\"  style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute; margin-left: -50px;\">\n            <img *ngIf='!displayrepliesOfShare.user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n            <img *ngIf='displayrepliesOfShare.user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{displayrepliesOfShare.user.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n        </div>\n        <div style=\" width: 100px; height:30px; margin-left: -60px;\">\n            <h3  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 50px; font-weight: bold; \" [routerLink]=\"['/profile', displayrepliesOfShare.user._id]\" (click)=\"removeresultsBox()\">{{displayrepliesOfShare.user.username}}</h3>\n            <div *ngIf='user._id != displayrepliesOfShare.user._id'>\n                <button *ngIf=\"!displayrepliesOfShare.user.followers.includes(user._id)\" (click)=\"onclickFollow1(displayrepliesOfShare)\" style=\"position: absolute; margin-top: -40px; margin-left: 350px;\">Follow</button>\n                <button *ngIf=\"displayrepliesOfShare.user.followers.includes(user._id)\" (click)=\"onclickUnFollow1(displayrepliesOfShare)\" style=\"position: absolute; margin-top: -40px; margin-left: 350px; background: rgb(178, 243, 178);\">Following</button>\n            </div>\n            \n        </div>\n        <div>\n            <div  *ngIf='displayrepliesOfShare.urla' style=\"width: 440px;  \">\n                <img id=\"myImg\" class=\"{{displayrepliesOfShare.imageclass}}\" src=\"{{displayrepliesOfShare.urla}}\" style=\"width: 350px; margin-top: 5px; margin-bottom: 15px;\"  >\n            </div>\n            \n            <div style=\"margin-top: 20px; width: 350px;\">\n                <p style=\"margin-left: 20px;\">{{displayrepliesOfShare.comment}}</p>\n                <p class=\"date\">{{ stringAsDate(displayrepliesOfShare.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n            </div>\n        </div>\n        <div style=\"border: 1px solid grey; margin-top: 40px; width: 520px; margin-left: -90px;\"></div>\n        <div style=\"width: 400px; height:50px;margin-top:20px; padding-bottom: 20px;  margin-left:-30px;  background:rgb(242, 244, 245); border: 1px solid rgb(242, 244, 245);;\" >\n                <div *ngIf='infoDisp[displayrepliesOfShare._id]' class=\"infdsplay\">\n                    <p>{{content}}</p>\n                </div>\n                <div (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('like', displayrepliesOfShare)\"  style=\"display: inline-block; position: absolute; margin-left: 200px;\" >\n                    <span class=\"btn\"><i (click)=\"onclickLike1(displayrepliesOfShare)\"class=\"fa fa-heart blue\"></i> </span><span (click)=\"displayWhoLikes(displayrepliesOfShare)\" class=\"btn\" style=\"margin-left: 10px; color: blue;\">{{displayrepliesOfShare.likes.length}} likes</span>\n                    <span *ngFor='let like of displayrepliesOfShare.likes'><i *ngIf='like._id === user._id' (click)=\"onclickLike1(displayrepliesOfShare)\" class=\"fa fa-heart red btn\" style=\"position: absolute; margin-left:-127px;\"></i></span>\n                </div>\n                <div *ngIf=\"user._id === displayrepliesOfShare.user._id\" (click)=\"deleteShare1(displayrepliesOfShare)\"  style=\"display: inline-block; position: absolute; margin-left: 350px;\" (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('delete', displayrepliesOfShare)\" >\n                    <p> <span class=\"btn\" ><i class=\"fa fa-trash\" style=\"color: rgb(53, 85, 121);\"></i></span></p>\n                </div>\n                \n                <div  style=\"position: absolute; margin-left: 70px; \">\n                    <span  >{{displayrepliesOfShare.replies.length}} comments</span>\n                </div>\n         \n            <div  style=\"margin-top: 60px; height:50px; margin-left: 0px; \">\n               \n                  \n                    <form class=\"form-horizontal\" role=\"form\" (submit)=\"onreplySubmit1(displayrepliesOfShare)\">\n                        <textarea *ngIf=\"user\"  class=\"form-control\" type=\"textarea\" name=\"comment\" [(ngModel)]=\"reply\" placeholder=\"{{message}}\" style=\"width: 450px; min-height: 20px; margin-left: -50px;\"></textarea>\n                        <input type=\"submit\" class=\"btn-primary\" value=\"Reply\" style=\"text-align: center;padding-left:-5px; padding-top: -5px; margin-top:10px; width:40px; height: 20px; font-size: 10px; margin-left: 370px; position: absolute; background: green;\">\n                    </form>        \n                    \n            </div>\n            \n        </div>\n\n        <div style=\"border: 1px solid grey; margin-top: 110px; width: 520px; margin-left: -90px;\"></div>\n\n        <!-- Replies -->\n\n        <div *ngFor='let reply of displayrepliesOfShare.replies'>\n            <p style=\"margin-top: 30px;\"><span [routerLink]=\"['/profile', reply.commentor._id]\" (click)=\"removeresultsBox()\" class=\"btn\" style=\"color: rgb(61, 137, 236);\">{{reply.commentor.username}} :</span> {{reply.content}}</p><br>\n            <p class=\"date\">{{ stringAsDate(reply.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n            <div *ngIf='infoDisp[reply._id]' class=\"infdsplay\">\n                <p>{{content}}</p>\n\n            </div>\n            <!-- Action box -->\n            <div (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('like', reply)\"  style=\"display: inline-block; position: absolute; margin-left: 200px;\" >\n                <span (click)=\"onclickLikeReply(displayrepliesOfShare, reply)\" class=\"btn\"><i class=\"fa fa-heart blue\"></i> </span><span (click)=\"displayWhoLikes1(reply)\"style=\"margin-left: 10px; color: blue;\" class=\"btn\">{{reply.likes.length}} likes</span>\n                <span *ngFor='let like of reply.likes'><i *ngIf='like._id === user._id' class=\"fa fa-heart red btn\" style=\"position: absolute; margin-left:-127px; z-index: 5;\" (click)=\"onclickLikeReply(displayrepliesOfShare, reply)\"></i></span>\n            </div>\n            <div *ngIf=\"user._id === reply.commentor._id\" (click)=\"deleteReply(displayrepliesOfShare, reply)\"  style=\"display: inline-block; position: absolute; margin-left: 350px;\" (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('delete', reply)\" >\n                <p> <span class=\"btn\" ><i class=\"fa fa-trash\" style=\"color: rgb(53, 85, 121);\"></i></span></p>\n            </div>\n\n            <div style=\"border: 1px solid rgb(163, 162, 162); margin-top: 110px; width: 440px; margin-left: -50px;\"></div>\n        </div>\n        \n    </div>\n\n</div>\n\n<!-- Likes display  -->\n\n<div *ngIf=\"wholeLikes\" class=\"modal5\">\n    <span  (click)=\"removeLikesBox()\" style=\"font-size: 40px; margin-left: 920px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n   <div *ngIf=\"user\" class=\"modal-content5\" style=\"min-height: 500px; padding-left: 50px; padding-top: 30px; padding-bottom: 100px; background: rgb(242, 244, 245); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 200px; z-index: 6;\" >\n        <div *ngFor='let liker of wholeLikes.likes'>\n            <div style=\"border-top: 1px solid rgb(53, 53, 53); border-bottom: 1px solid rgb(53, 53, 53); padding-top: 20px; padding-bottom: 20px;\">\n                    <div  [routerLink]=\"['/profile', liker._id]\" (click)=\"removeresultsBox()\" style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                    <img *ngIf='!liker.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                    <img *ngIf='liker.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{liker.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n                </div>\n                <h3  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 50px; font-weight: bold; \" [routerLink]=\"['/profile', liker._id]\" (click)=\"removeresultsBox()\">{{liker.username}}</h3>\n                <div *ngIf='user._id != liker._id'>\n                        <span *ngIf=\"!user.followings.includes(liker._id)\" class=\"btn\"  style=\"position: absolute; margin-top: -40px; margin-left: 350px; z-index: 5;\"><i (click)=\"onclickletsFollow1(liker, wholeLikes)\">  Follow</i> </span>\n                        <span *ngIf=\"user.followings.includes(liker._id)\" class=\"btn\" style=\"position: absolute; margin-top: -40px; margin-left: 350px; background: rgb(178, 243, 178); z-index: 5;\"> <i (click)=\"onclickletsUnfollow1(liker, wholeLikes)\">  Following</i></span>\n            </div>\n            </div>\n            \n        </div>    \n       \n   </div>\n</div>\n<div *ngIf=\"wholeLikes1\" class=\"modal5\">\n    <span  (click)=\"removeLikesBox1()\" style=\"font-size: 40px; margin-left: 920px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n   <div *ngIf=\"user\" class=\"modal-content5\" style=\"min-height: 500px; padding-left: 50px; padding-top: 30px; padding-bottom: 100px; background: rgb(242, 244, 245); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 200px; z-index: 6;\" >\n        <div *ngFor='let liker of wholeLikes1.likes'>\n            <div style=\"border-top: 1px solid rgb(53, 53, 53); border-bottom: 1px solid rgb(53, 53, 53); padding-top: 20px; padding-bottom: 20px;\">\n                    <div  [routerLink]=\"['/profile', liker._id]\" (click)=\"removeresultsBox()\" style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                    <img *ngIf='!liker.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                    <img *ngIf='liker.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{liker.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n                </div>\n                <h3  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 50px; font-weight: bold; \" [routerLink]=\"['/profile', liker._id]\" (click)=\"removeresultsBox()\">{{liker.username}}</h3>\n                <div *ngIf='user._id != liker._id'>\n                        <span *ngIf=\"!user.followings.includes(liker._id)\" class=\"btn\"  style=\"position: absolute; margin-top: -40px; margin-left: 350px; z-index: 5;\"><i (click)=\"onclickletsFollow1(liker, wholeLikes1)\">  Follow</i> </span>\n                        <span *ngIf=\"user.followings.includes(liker._id)\" class=\"btn\" style=\"position: absolute; margin-top: -40px; margin-left: 350px; background: rgb(178, 243, 178); z-index: 5;\"> <i (click)=\"onclickletsUnfollow1(liker, wholeLikes1)\">  Following</i></span>\n            </div>\n            </div>\n            \n        </div>    \n       \n   </div>\n</div>\n</div>\n\n<div *ngIf='formDisplay' class='modal1' >\n        <span  (click)=\"removeformBox()\" style=\"font-size: 40px; margin-left: 920px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n    <div class=\"modal-content1\" style=\"margin-left:250px; margin-top: 100px; width: 660px;  background: rgb(242, 244, 245); border: 20px solid rgb(242, 244, 245);\">\n        <button *ngIf=\"newUrl1\" (click)=\"removeNewURl1(img)\"><i class=\"fa fa-close\"></i></button>\n        <img *ngIf=\"newUrl1\" class=\"{{imageClass}}\" style=\" width:100px; \"  src=\"{{newUrl1}}\" >\n        <form class=\"form-horizontal\" role=\"form\" (submit)=\"onshareSubmit()\" style=\"margin-top: 10px;\">\n          <textarea *ngIf=\"user\"  class=\"form-control\" type=\"textarea\" name=\"comment\" [(ngModel)]=\"comment\" placeholder=\"{{message}}\" style=\"border: 1px solid rgb(80, 78, 78);\" ></textarea>\n          <input type=\"submit\" class=\"btn btn-primary\" value=\"Post\" style=\"margin-top:20px; margin-left: 550px; position: absolute; \">\n        </form>\n        <input style=\"display: none;\" #fileInput type=\"file\" class=\"form-control\" (change)=\"onFileSelected($event)\"><br>\n        <button type=\"button\" (click)=\"fileInput.click()\"><i class=\"material-icons\" style=\"font-size: 15px;\">add_a_photo</i></button>\n        <button type=\"button\"   *ngIf=\"picture\" (click)=\"onload()\"  >upload</button>      \n    </div>\n</div>\n<!-- Image playground -->\n<div *ngIf=\"newUrl\" class=\"modal3\">\n        <div style=\"margin-left: 200px; display: block;\">\n            <button *ngIf=\"newUrl\" (click)=\"removeNewURl(img)\"><i class=\"fa fa-close\"></i></button>\n            <img class=\"{{normala}}\" style=\" width:400px; \"  src=\"{{newUrl}}\" >\n        </div>\n       <div style=\"width: 50px; display: inline-block; margin-left: 100px; margin-top: 50px;\">\n            <img (click)=\"changeClass('normal')\" class=\"blur\" style=\" width:50px; \"  src=\"{{newUrl}}\" >\n       </div>\n        <div style=\"width: 50px; display: inline-block; margin-left: 10px; margin-top: 50px;\">\n            <img (click)=\"changeClass('blur')\" class=\"blur\" style=\" width:50px; \"  src=\"{{newUrl}}\" >\n        </div>\n        <div style=\"width: 50px; display: inline-block; margin-left: 10px; margin-top: 50px;\">\n            <img (click)=\"changeClass('brightness')\" class=\"brightness\" style=\" width:50px; \"  src=\"{{newUrl}}\" >\n        </div>\n        <div style=\"width: 50px; display: inline-block; margin-left: 10px; margin-top: 50px;\">\n            <img (click)=\"changeClass('contrast')\" class=\"contrast\" style=\" width:50px; \"  src=\"{{newUrl}}\" >\n        </div >\n        <div style=\"width: 50px; display: inline-block; margin-left: 10px; margin-top: 50px;\">\n            <img (click)=\"changeClass('grayscale')\" class=\"grayscale\" style=\" width:50px; \"  src=\"{{newUrl}}\" >\n        </div>\n        <div style=\"width: 50px; display: inline-block; margin-left: 10px; margin-top: 50px;\">\n            <img (click)=\"changeClass('huerotate')\"  class=\"huerotate\" style=\" width:50px; \"  src=\"{{newUrl}}\" >\n        </div>\n        <div style=\"width: 50px; display: inline-block; margin-left: 10px; margin-top: 50px;\">\n            <img (click)=\"changeClass('invert')\" class=\"invert\" style=\" width:50px; \"  src=\"{{newUrl}}\" >\n        </div>\n        <div style=\"width: 50px; display: inline-block; margin-left: 10px; margin-top: 50px;\">\n            <img (click)=\"changeClass('opacity')\" class=\"opacity\" style=\" width:50px; \"  src=\"{{newUrl}}\" >\n        </div>\n        <div style=\"width: 50px; display: inline-block; margin-left: 10px; margin-top: 50px;\">\n            <img (click)=\"changeClass('saturate')\" class=\"saturate\" style=\" width:50px; \"  src=\"{{newUrl}}\" >\n        </div>\n       <div style=\"width: 50px; display: inline-block; margin-left: 10px; margin-top: 50px;\">\n            <img (click)=\"changeClass('sepia')\" class=\"sepia\" style=\" width:50px; \"  src=\"{{newUrl}}\" >\n       </div>\n        <div style=\"width: 50px; display: inline-block; margin-left: 10px; margin-top: 50px;\">\n            <img (click)=\"changeClass('shadow')\" class=\"shadow\" style=\" width: 50px; \"  src=\"{{newUrl}}\" >\n        </div>\n        \n        <button class=\"btn\" (click)=\"addClass(normala)\">Go</button>\n    </div>\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_shares_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/shares.service */ "./src/app/services/shares.service.ts");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_router, _route, _httpService, _validateService, _authService, _flashMessagesService, _usersService, _shareService, _storage, _notificationService) {
        this._router = _router;
        this._route = _route;
        this._httpService = _httpService;
        this._validateService = _validateService;
        this._authService = _authService;
        this._flashMessagesService = _flashMessagesService;
        this._usersService = _usersService;
        this._shareService = _shareService;
        this._storage = _storage;
        this._notificationService = _notificationService;
        this.searchbar = false;
        this.result = false;
        this.profileShow = {};
        this.infoDisp = {};
        this.displayCommentbox = {};
        this.numb = 0;
        this.formDisplay = false;
        this.loading = null;
        this.normala = 'normal';
        this.basePath = "/";
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchbar;
        this.search;
        this.result;
        this.users;
        this.shares;
        this.profileShow;
        this.userax;
        this.content;
        this.infoDisp;
        this.comment = '';
        this.reply;
        this.displayrepliesOfShare;
        this.wholeLikes;
        this.wholeLikes1;
        this.picture;
        this.img;
        this.normala;
        this._authService.getProfile().subscribe(function (profile) {
            _this.user = profile['user'];
            _this.numb;
            _this.formDisplay;
            _this.newUrl;
            _this.newUrl1;
            setInterval(function () {
                _this.getMyNots1();
            }, 5000);
            setInterval(function () {
                _this.numb;
                console.log(_this.numb);
            }, 5000);
        }, function (err) {
            return false;
        });
    };
    NavbarComponent.prototype.removeNewURl = function (img) {
        this.deleteFileStorage(img);
        this.img = null;
        this.newUrl = null;
        this.newUrl1 = null;
        this.picture = null;
    };
    NavbarComponent.prototype.removeNewURl1 = function (img) {
        this.deleteFileStorage(img);
        this.img = null;
        this.newUrl1 = null;
        this.newUrl = null;
        this.picture = null;
    };
    // filter stuffs
    NavbarComponent.prototype.changeClass = function (imgClass) {
        this.normala = imgClass;
    };
    NavbarComponent.prototype.addClass = function (classnrm) {
        this.imageClass = classnrm;
        this.newUrl1 = this.newUrl;
        this.img = this.img;
        this.newUrl = null;
        this.normala = null;
        this.picture = null;
    };
    // uploading a picture
    NavbarComponent.prototype.onFileSelected = function (event) {
        this.picture = event.target.files[0];
    };
    // Load a picture
    NavbarComponent.prototype.onload = function () {
        var _this = this;
        var file = this.picture;
        this.loading = true;
        var name = "Share picture" + this.user._id + Date.now();
        this.uploadpic = this._storage.upload(name, file)
            .then(function (data) {
            var progress = (data.bytesTransferred / data.totalBytes) * 100;
            if (progress === 100) {
                _this.loading = null;
            }
            data.ref.getDownloadURL().then(function (url) {
                _this.newUrl = url;
                _this.img = name;
            });
        });
    };
    //  add a share
    NavbarComponent.prototype.onshareSubmit = function () {
        var _this = this;
        if (!this.comment) {
            this.message = 'You can do better!';
        }
        else {
            if (this.newUrl1) {
                var shares = { urla: this.newUrl1,
                    comment: this.comment,
                    img: this.img,
                    imageclass: this.imageClass };
                var observable = this._shareService.addShare(shares, this.user);
                observable.subscribe(function (data) {
                    _this.comment = '';
                    _this.newUrl1 = null;
                    _this.formDisplay = null;
                });
            }
            else {
                var shares = {
                    comment: this.comment
                };
                var observable = this._shareService.addShare(shares, this.user);
                observable.subscribe(function (data) {
                    _this.comment = '';
                    _this.formDisplay = null;
                });
            }
        }
    };
    // notfs
    NavbarComponent.prototype.getMyNots1 = function () {
        var _this = this;
        var observable1 = this._notificationService.allunseenNotifications(this.user._id);
        observable1.subscribe(function (data) {
            var newNots = data['notifications'];
            _this.numb = newNots.length;
        });
    };
    // SECTION 1 =========================
    NavbarComponent.prototype.onLogout = function () {
        this._authService.logOut();
        this._flashMessagesService.show('Logged out!', { cssClass: 'alert-danger', timeout: 4000 });
        return false;
    };
    NavbarComponent.prototype.searchBar = function () {
        if (this.searchbar === false) {
            this.searchbar = true;
        }
        else if (this.searchbar === true) {
            this.searchbar = false;
        }
    };
    NavbarComponent.prototype.postFromNav = function () {
        this.formDisplay = true;
        console.log(this.formDisplay);
    };
    NavbarComponent.prototype.removeformBox = function () {
        if (this.img) {
            this.deleteFileStorage(this.img);
            this.img = null;
            this.newUrl1 = null;
            this.newUrl = null;
            this.picture = null;
            this.formDisplay = false;
        }
        else {
            this.formDisplay = false;
        }
    };
    NavbarComponent.prototype.onsubmitSearch = function () {
        var _this = this;
        var find = this.search;
        var observabele = this._authService.search(find);
        observabele.subscribe(function (data) {
            _this.users = data['users'];
            _this.shares = data['shares'];
        });
        this.searchbar = false;
        this.result = true;
    };
    NavbarComponent.prototype.removeresultsBox = function () {
        this.result = false;
    };
    NavbarComponent.prototype.onclickletsUnfollow2 = function (follower) {
        var _this = this;
        var observable = this._usersService.serviceUnFollow(this.user, follower);
        observable.subscribe(function (data) {
            _this.onsubmitSearch();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
    };
    NavbarComponent.prototype.onclickletsFollow2 = function (follower) {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user, follower);
        observable.subscribe(function (data) {
            _this.onsubmitSearch();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
    };
    // SECTION 2 ====================
    // Data-Time------
    NavbarComponent.prototype.stringAsDate = function (dateStr) {
        return new Date(dateStr);
    };
    // Showing profile box
    NavbarComponent.prototype.mouseEnter = function (share) {
        var _this = this;
        var observable = this._usersService.getanUser(share.user_id);
        observable.subscribe(function (data) {
            _this.userax = data['user'];
            //  this.sortArray(this.users);
        });
        Object.keys(this.profileShow).forEach(function (h) {
            _this.profileShow[h] = false;
        });
        this.profileShow[share._id] = true;
    };
    NavbarComponent.prototype.mouseLeave = function () {
        var _this = this;
        Object.keys(this.profileShow).forEach(function (h) {
            _this.profileShow[h] = false;
        });
    };
    NavbarComponent.prototype.bringOneShare = function (id) {
        var _this = this;
        var observable = this._shareService.aShare(id);
        observable.subscribe(function (data) {
            _this.sharex = data;
            _this.displayrepliesOfShare = _this.sharex;
        });
    };
    // FOLLOW====================
    NavbarComponent.prototype.onclickFollow1 = function (share) {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user, share.user);
        observable.subscribe(function (data) {
            _this.bringOneShare(share._id);
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
    };
    NavbarComponent.prototype.onclickUnFollow1 = function (share) {
        var _this = this;
        var observable = this._usersService.serviceUnFollow(this.user, share.user);
        observable.subscribe(function (data) {
            _this.bringOneShare(share._id);
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
    };
    NavbarComponent.prototype.onFollow2 = function (share) {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user, share.user);
        observable.subscribe(function (data) {
            _this.onsubmitSearch();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
    };
    NavbarComponent.prototype.onUnFollow2 = function (share) {
        var _this = this;
        var observable = this._usersService.serviceUnFollow(this.user, share.user);
        observable.subscribe(function (data) {
            _this.onsubmitSearch();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
    };
    // SECTION 3
    //  Display of like delete comment box
    NavbarComponent.prototype.displayMeaning = function (info, share) {
        var _this = this;
        this.content = '' + info + '!';
        Object.keys(this.infoDisp).forEach(function (h) {
            _this.infoDisp[h] = false;
        });
        this.infoDisp[share._id] = true;
    };
    NavbarComponent.prototype.displayMea = function () {
        var _this = this;
        Object.keys(this.infoDisp).forEach(function (h) {
            _this.infoDisp[h] = false;
        });
    };
    //  Like from Dashboard
    NavbarComponent.prototype.onclickLike = function (share) {
        var _this = this;
        var counter = 0;
        for (var i = 0; i < share.likes.length; i++) {
            if (share.likes[i]._id === this.user._id) {
                counter = counter + 1;
            }
            else {
                continue;
            }
        }
        if (counter > 0) {
            var observable = this._shareService.dislikeFromService(share, this.user);
            observable.subscribe(function (data) {
                _this.onsubmitSearch();
                _this._authService.getProfile().subscribe(function (profile) {
                    _this.user = profile['user'];
                });
            });
        }
        else {
            var observable = this._shareService.likeFromService(share, this.user);
            observable.subscribe(function (data) {
                _this.onsubmitSearch();
                _this._authService.getProfile().subscribe(function (profile) {
                    _this.user = profile['user'];
                });
            });
        }
    };
    // Section 4==========
    // Opening Comment box-form
    NavbarComponent.prototype.showaddComment = function (share) {
        var _this = this;
        Object.keys(this.displayCommentbox).forEach(function (h) {
            _this.displayCommentbox[h] = false;
        });
        this.displayCommentbox[share._id] = true;
    };
    // hiding comment box-form
    NavbarComponent.prototype.hideAddComment = function (share) {
        var _this = this;
        this.displayCommentbox[share._id] = false;
        this.onsubmitSearch();
        this._authService.getProfile().subscribe(function (profile) {
            _this.user = profile['user'];
        });
    };
    // Delete a Share
    NavbarComponent.prototype.deleteShare = function (share) {
        var _this = this;
        if (share.img) {
            this.deleteFileStorage(share.img);
            var observable = this._shareService.deleteShare(this.user._id, share);
            observable.subscribe(function (data) {
                _this.onsubmitSearch();
                _this._authService.getProfile().subscribe(function (profile) {
                    _this.user = profile['user'];
                });
            });
        }
        else {
            var observable = this._shareService.deleteShare(this.user._id, share);
            observable.subscribe(function (data) {
                _this.onsubmitSearch();
                _this._authService.getProfile().subscribe(function (profile) {
                    _this.user = profile['user'];
                });
            });
        }
    };
    // replying a share
    NavbarComponent.prototype.onreplySubmit = function (share) {
        var _this = this;
        if (!this.reply) {
            this.message = 'You can do better!';
        }
        else {
            var reply1 = {
                content: this.reply
            };
            var observable = this._shareService.replytheShare(share, reply1, this.user);
            observable.subscribe(function (data) {
                _this.reply = '';
                _this.onsubmitSearch();
                _this._authService.getProfile().subscribe(function (profile) {
                    _this.user = profile['user'];
                });
            });
        }
    };
    // after clicking on the share
    NavbarComponent.prototype.displayReplies = function (share) {
        this.displayrepliesOfShare = share;
    };
    // closing single share
    NavbarComponent.prototype.removeReplyBox = function () {
        var _this = this;
        this.displayrepliesOfShare = null;
        this.onsubmitSearch();
        this._authService.getProfile().subscribe(function (profile) {
            _this.user = profile['user'];
        });
    };
    // Section 4 ===========
    NavbarComponent.prototype.displayWhoLikes = function (share) {
        this.wholeLikes = share;
    };
    NavbarComponent.prototype.removeLikesBox = function () {
        this.wholeLikes = null;
    };
    // Section 4 ===========
    NavbarComponent.prototype.displayWhoLikes1 = function (reply) {
        var _this = this;
        this._shareService.aReply(reply._id).subscribe(function (data) {
            _this.wholeLikes1 = data['reply'];
        });
    };
    NavbarComponent.prototype.removeLikesBox1 = function () {
        this.wholeLikes1 = null;
    };
    // Like from display Window
    NavbarComponent.prototype.onclickLike1 = function (share) {
        var _this = this;
        var counter = 0;
        for (var i = 0; i < share.likes.length; i++) {
            if (share.likes[i]._id === this.user._id) {
                counter = counter + 1;
            }
            else {
                continue;
            }
        }
        if (counter > 0) {
            var observable = this._shareService.dislikeFromService(share, this.user);
            observable.subscribe(function (data) {
                _this.bringOneShare(share._id);
            });
        }
        else {
            var observable = this._shareService.likeFromService(share, this.user);
            observable.subscribe(function (data) {
                _this.bringOneShare(share._id);
            });
        }
    };
    // Deleting Share while share-display open
    NavbarComponent.prototype.deleteShare1 = function (share) {
        var _this = this;
        if (share.img) {
            this.deleteFileStorage(share.img);
            var observable = this._shareService.deleteShare(this.user._id, share);
            observable.subscribe(function (data) {
                _this.removeReplyBox();
                _this.onsubmitSearch();
                _this._authService.getProfile().subscribe(function (profile) {
                    _this.user = profile['user'];
                });
            });
        }
        else {
            var observable = this._shareService.deleteShare(this.user._id, share);
            observable.subscribe(function (data) {
                _this.removeReplyBox();
                _this.onsubmitSearch();
                _this._authService.getProfile().subscribe(function (profile) {
                    _this.user = profile['user'];
                });
            });
        }
    };
    // replying from open share box
    NavbarComponent.prototype.onreplySubmit1 = function (share) {
        var _this = this;
        if (!this.reply) {
            this.message = 'You can do better!';
        }
        else {
            var reply1 = {
                content: this.reply
            };
            var observable = this._shareService.replytheShare(share, reply1, this.user);
            observable.subscribe(function (data) {
                _this.reply = '';
                _this.bringOneShare(share._id);
            });
        }
    };
    // Liking reply ==
    NavbarComponent.prototype.onclickLikeReply = function (share, reply) {
        var _this = this;
        var counter = 0;
        for (var i = 0; i < reply.likes.length; i++) {
            if (reply.likes[i]._id === this.user._id) {
                counter = counter + 1;
            }
            else {
                continue;
            }
        }
        if (counter > 0) {
            var observable = this._shareService.dislikeReply(this.user, reply);
            observable.subscribe(function (data) {
                _this.bringOneShare(share._id);
            });
        }
        else {
            var observable = this._shareService.likeReply(this.user, reply);
            observable.subscribe(function (data) {
                _this.bringOneShare(share._id);
            });
        }
    };
    NavbarComponent.prototype.deleteReply = function (share, reply) {
        var _this = this;
        var observable = this._shareService.deleteReply(this.user, reply);
        observable.subscribe(function (data) {
            _this.bringOneShare(share._id);
        });
    };
    NavbarComponent.prototype.onclickletsUnfollow1 = function (follower, share) {
        var _this = this;
        var observable = this._usersService.serviceUnFollow(this.user, follower);
        observable.subscribe(function (data) {
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
        var observable1 = this._shareService.aShare(share._id);
        observable1.subscribe(function (data) {
            var sharez = data;
            _this.wholeLikes = sharez;
        });
    };
    NavbarComponent.prototype.onclickletsFollow1 = function (follower, share) {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user, follower);
        observable.subscribe(function (data) {
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
        var observable1 = this._shareService.aShare(share._id);
        observable1.subscribe(function (data) {
            var sharez = data;
            _this.wholeLikes = sharez;
        });
    };
    // removing picture from firebase
    NavbarComponent.prototype.deleteFileStorage = function (name) {
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_9__["storage"]().ref();
        storageRef.child(this.basePath + "/" + name).delete();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"],
            _services_shares_service__WEBPACK_IMPORTED_MODULE_7__["SharesService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"],
            _services_notifications_service__WEBPACK_IMPORTED_MODULE_8__["NotificationsService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());

// 


/***/ }),

/***/ "./src/app/components/profile/edit-profile/edit-profile.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/profile/edit-profile/edit-profile.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containerb{\n    /* border: 1px solid black; */\n    width: 190px;\n    height: 200px;\n    padding-left: 10px;\n    margin-top: 0px;\n    position: absolute;\n    display: inline-block;\n    background: rgb(216, 214, 214);\n    margin-left:-1100px; \n}\n.containerc{\n    border: 1px solid black;\n    width: 900px;\n    height: 700px;\n    margin-left: 210px;\n    display: inline-block;\n    position: relative;\n}\n.choices{\n    width: 150px;\n    height: 30px;\n    border-bottom: 1px solid rgb(85, 84, 84);\n    font-size: 11px;\n}\n.user-name{\n    width: 170px;\n    height: 50px;\n    border-bottom: 1px solid rgb(85, 84, 84);\n}"

/***/ }),

/***/ "./src/app/components/profile/edit-profile/edit-profile.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/profile/edit-profile/edit-profile.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containerc\">\n        <router-outlet></router-outlet>\n</div>\n<div class=\"containerb\">\n    <div class=\"user-name\">\n        <h2 *ngIf=\"user\"> {{user.username}}</h2>\n    </div>\n    <div class=\"choices\">\n        <a [routerLink]=\"['/', 'profile', 'edit', user._id ]\" >Change your informations </a>\n    </div>\n    <div class=\"choices\">\n        <a [routerLink]=\"['/', 'profile', 'edit', user._id, 'password']\" >Change password</a>\n    </div>\n    <div class=\"choices\">\n        <a href=\"#\" >Change settings</a>\n     </div>\n     \n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/edit-profile/edit-profile.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/profile/edit-profile/edit-profile.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(_router, _route, _httpService, _validateService, _authService, _flashMessagesService) {
        this._router = _router;
        this._route = _route;
        this._httpService = _httpService;
        this._validateService = _validateService;
        this._authService = _authService;
        this._flashMessagesService = _flashMessagesService;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.getProfile().subscribe(function (profile) {
            _this.user = profile['user'];
        }, function (err) {
            return false;
        });
    };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/components/profile/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/components/profile/edit-profile/edit-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/edit-profile/password/password.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/profile/edit-profile/password/password.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/edit-profile/password/password.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/profile/edit-profile/password/password.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Change Password</h1>\n  <hr>\n\n    \n    <!-- edit form column -->\n    <div class=\"col-md-9 personal-info\">\n      <div class=\"alert alert-info alert-dismissable\">\n        <a class=\"panel-close close\" data-dismiss=\"alert\">×</a> \n        <i class=\"fa fa-coffee\"></i>\n        <flash-messages></flash-messages>\n       </div>\n      <h3>Personal info</h3>\n      \n      <form class=\"form-horizontal\" role=\"form\" (submit)=\"onUpdatePassword()\">\n        \n        <div class=\"form-group\">\n          <label class=\"col-md-3 control-label\">Current Password:</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"password\" >\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-3 control-label\">Confirm Current Password:</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" type=\"password\" name=\"confirm_password\" [(ngModel)]=\"confirm_password\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-3 control-label\">New password:</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" type=\"password\" name=\"newPassword\" [(ngModel)]=\"newPassword\" >\n          </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">Confirm New password:</label>\n            <div class=\"col-md-8\">\n              <input class=\"form-control\" type=\"password\" name=\"confirm_newPassword\" [(ngModel)]=\"confirm_newPassword\" >\n            </div>\n          </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-3 control-label\"></label>\n          <div class=\"col-md-8\">\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Change password\">\n              <span></span><br><br>\n              <input type=\"reset\" class=\"btn btn-default\" value=\"Cancel\">\n          </div>\n        </div>\n      </form>\n    </div>\n\n</div>\n<hr>"

/***/ }),

/***/ "./src/app/components/profile/edit-profile/password/password.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/profile/edit-profile/password/password.component.ts ***!
  \********************************************************************************/
/*! exports provided: PasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordComponent", function() { return PasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PasswordComponent = /** @class */ (function () {
    function PasswordComponent(_router, _route, _httpService, _validateService, _authService, _flashMessagesService) {
        this._router = _router;
        this._route = _route;
        this._httpService = _httpService;
        this._validateService = _validateService;
        this._authService = _authService;
        this._flashMessagesService = _flashMessagesService;
    }
    PasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.getProfile().subscribe(function (profile) {
            _this.user = profile['user'];
        }, function (err) {
            return false;
        });
    };
    PasswordComponent.prototype.onUpdatePassword = function () {
        var _this = this;
        console.log(this.user);
        if (!this.password === this.user.password) {
            this._flashMessagesService.show("incorrect password!!", { cssClass: 'alert-danger', timeout: 4000 });
        }
        else {
            var body = {
                _id: this.user._id,
                password: this.password,
                newPassword: this.newPassword
            };
            if (!this._validateService.validatePasswordchange(body, this.confirm_password, this.confirm_newPassword)) {
                this._flashMessagesService.show("please fill in all fields", { cssClass: 'alert-danger', timeout: 4000 });
                return false;
            }
            if (!this._validateService.matchPassword(body.password, this.confirm_password)) {
                this._flashMessagesService.show("Password don't match", { cssClass: 'alert-danger', timeout: 4000 });
                return false;
            }
            if (!this._validateService.matchPassword(body.newPassword, this.confirm_newPassword)) {
                this._flashMessagesService.show("New Passwords don't match", { cssClass: 'alert-danger', timeout: 4000 });
                return false;
            }
            var observable = this._authService.updateUser(body);
            observable.subscribe(function (data) {
                if (data['success']) {
                    _this._flashMessagesService.show("success!", { cssClass: 'alert-success', timeout: 4000 });
                    _this._router.navigate(['/profile']);
                }
                else {
                    _this._flashMessagesService.show(data['msg'], { cssClass: 'alert-danger', timeout: 4000 });
                }
            });
        }
    };
    PasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password',
            template: __webpack_require__(/*! ./password.component.html */ "./src/app/components/profile/edit-profile/password/password.component.html"),
            styles: [__webpack_require__(/*! ./password.component.css */ "./src/app/components/profile/edit-profile/password/password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]])
    ], PasswordComponent);
    return PasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/edit-profile/update/update.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/profile/edit-profile/update/update.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n width: 900px;\n padding-bottom: 50px;\n}"

/***/ }),

/***/ "./src/app/components/profile/edit-profile/update/update.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/profile/edit-profile/update/update.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Profile</h1>\n  <hr>\n<div class=\"row\">\n    <!-- left column -->\n    <div class=\"col-md-3\">\n      <div class=\"text-center\">\n          <img *ngIf='!user.ProfilePhoto'style=\" width:150px; height: 150px;\"  src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n          <img *ngIf='user.ProfilePhoto'style=\" width:150px; height: 150px;\"  src=\"{{user.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n          \n          <p>upload or replace your picture...</p>\n        <input type=\"file\" class=\"form-control\" (change)=\"onFileSelected($event)\"><br>\n        <button  *ngIf=\"newUrl\" (click)=\"onload()\">Upload</button><br><br>\n        <!-- <button *ngIf='user.pictures'   (click)=\"onloadChange()\">Change photo</button><br><br> -->\n        <!-- <p>{{show}} your location:</p> <button (click)=\"locationchange()\">{{check}}</button> -->\n      </div>\n    </div>\n    \n    <!-- edit form column -->\n    <div class=\"col-md-8 personal-info\">\n      <div class=\"alert alert-info alert-dismissable\">\n        <a class=\"panel-close close\" data-dismiss=\"alert\">×</a> \n        <i class=\"fa fa-coffee\"></i>\n        <flash-messages></flash-messages>\n       </div>\n      <h3>Personal info</h3>\n      \n      <form class=\"form-horizontal\" role=\"form\" (submit)=\"onUpdateSubmit()\">\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">First name:</label>\n          <div class=\"col-lg-8\">\n            <input *ngIf=\"user\" class=\"form-control\" type=\"text\" name=\"user.first_name\" [(ngModel)]=\"user.first_name\" >\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">Last name:</label>\n          <div class=\"col-lg-8\">\n            <input *ngIf=\"user\"  class=\"form-control\" type=\"text\" name=\"user.last_name\" [(ngModel)]=\"user.last_name\" >\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">Username:</label>\n          <div class=\"col-lg-8\">\n            <input *ngIf=\"user\"  class=\"form-control\" type=\"text\" name=\"user.username\" [(ngModel)]=\"user.username\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">Email:</label>\n          <div class=\"col-lg-8\">\n            <input *ngIf=\"user\"  class=\"form-control\" type=\"text\" name=\"user.email\" [(ngModel)]=\"user.email\" >\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">Info:</label>\n          <div class=\"col-lg-8\">\n            <textarea *ngIf=\"user\"  class=\"form-control\" type=\"text\" name=\"user.info\" [(ngModel)]=\"user.info\" >{{user.info}}</textarea>\n          </div>\n        </div>\n        \n        <div class=\"form-group\">\n          <label class=\"col-md-3 control-label\">Password:</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"password\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-3 control-label\">Confirm password:</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" type=\"password\" name=\"confirm_password\" [(ngModel)]=\"confirm_password\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-3 control-label\"></label>\n          <div class=\"col-md-8\">\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Save Changes\">\n            <span></span><br><br>\n            <button type=\"reset\" class=\"btn btn-default\" (click)=\"reset()\" value=\"Cancel\">Cancel</button>\n          </div>\n        </div>\n      </form>\n    </div>\n</div>\n</div>\n<hr>\n"

/***/ }),

/***/ "./src/app/components/profile/edit-profile/update/update.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/profile/edit-profile/update/update.component.ts ***!
  \****************************************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(_router, _route, _httpService, _validateService, _authService, _locationService, _flashMessagesService, _storage, _usersService) {
        this._router = _router;
        this._route = _route;
        this._httpService = _httpService;
        this._validateService = _validateService;
        this._authService = _authService;
        this._locationService = _locationService;
        this._flashMessagesService = _flashMessagesService;
        this._storage = _storage;
        this._usersService = _usersService;
        this.fronterr = [];
        this.basePath = "/";
        this.sendurl = { image: "" };
    }
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.getProfile().subscribe(function (profile) {
            _this.user = profile['user'];
            console.log(_this.user);
            // this.display(this.user);
        }, function (err) {
            return false;
        });
        // this.getUserLocation();
        // this.show;
        // console.log(this.show);
        // this.check;
    };
    // display(user){
    //   if(user.pictures.length ===0){
    //     return this.displayPhoto = "https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994"
    //   }else{
    //     if(!user.ProfilePhoto){
    //       return this.displayPhoto = user.pictures[user.pictures.length-1].url;
    //     }else{
    //       for(var i = 0; i< user.pictures.length; i++){
    //         if(user.ProfilePhoto === user.pictures[i]._id){
    //           return this.displayPhoto = user.pictures[i].url;
    //         }else{
    //           return this.displayPhoto = user.pictures[user.pictures.length-1].url;
    //         }
    //       }
    //     }
    //   }
    // }
    // getUserLocation(){
    //   if(navigator.geolocation){
    //     navigator.geolocation.getCurrentPosition(position =>{
    //       this.lat = position.coords.latitude;
    //       this.lng = position.coords.longitude;
    //     });
    //     this.location = ''+this.lat+' '+this.lng;
    //     this.user.location = this.location;
    //     console.log(this.location);
    //     let observable = this._locationService.updateUserLocation(this.user);
    //     observable.subscribe(data => {
    //       if(data['success']){
    //         this._flashMessagesService.show("success!", {cssClass:'alert-success', timeout: 4000});
    //         this._router.navigate(['/profile']);
    //       }
    //     });
    //   }
    // }
    // locationchange(){
    //   if(!this.user.allowed){
    //     this.user.allowed = 'on';
    //     this.show = 'enable';
    //     this.check = 'off';
    //     navigator.geolocation.getCurrentPosition(position =>{
    //       this.lat = position.coords.latitude;
    //       this.lng = position.coords.longitude;
    //     });
    //     this.location = ''+this.lat+' '+this.lng;
    //     this.user.location = this.location;
    //     let observable = this._locationService.updateUserLocation(this.user);
    //     observable.subscribe(data => {
    //       if(data['success']){
    //         this._router.navigate(['/profile']);
    //       }
    //     });
    //   }else if(this.user.allowed === 'on'){
    //     this.user.allowed = 'off';
    //     this.show = 'disable';
    //     this.check = 'on';
    //     let observable = this._locationService.updateUserLocation(this.user);
    //     observable.subscribe(data => {
    //       if(data['success']){
    //         this._router.navigate(['/profile']);
    //       }
    //     });
    //   }else{
    //     this.show = 'enable';
    //     this.check = 'off';
    //     this.user.allowed = 'on';
    //     navigator.geolocation.getCurrentPosition(position =>{
    //       this.lat = position.coords.latitude;
    //       this.lng = position.coords.longitude;
    //     });
    //     this.location = ''+this.lat+' '+this.lng;
    //     this.user.location = this.location;
    //     let observable = this._locationService.updateUserLocation(this.user);
    //     observable.subscribe(data => {
    //       if(data['success']){
    //         this._router.navigate(['/profile']);
    //       }
    //     });
    //   }
    // }
    UpdateComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        this.picture = event.target.files[0];
        var file = this.picture;
        var name = "Profile picture" + Date.now();
        var uploadpic = this._storage.upload(name, file)
            .then(function (data) {
            data.ref.getDownloadURL().then(function (url) {
                _this.newUrl = url;
                _this.img = name;
            });
        });
    };
    UpdateComponent.prototype.onload = function () {
        var _this = this;
        var pictures = {
            url: this.newUrl,
            img: this.img
        };
        var observable = this._authService.updatePicture(pictures, this.user);
        observable.subscribe(function (data) {
            console.log(data);
            var pict = {
                url: _this.newUrl
            };
            _this.makeAvatar(pict);
        });
    };
    UpdateComponent.prototype.makeAvatar = function (picture) {
        var _this = this;
        var observable = this._usersService.makeProfilePicture(picture, this.user._id);
        observable.subscribe(function (data) {
            _this._router.navigate(['/profile']);
        });
    };
    UpdateComponent.prototype.reset = function () {
        window.location.reload();
    };
    UpdateComponent.prototype.onUpdateSubmit = function () {
        var _this = this;
        if (!this.password === this.user.password) {
            this._flashMessagesService.show("incorrect password!!", { cssClass: 'alert-danger', timeout: 4000 });
        }
        else {
            if (!this._validateService.validateRegister(this.user)) {
                this._flashMessagesService.show("please fill in all fields", { cssClass: 'alert-danger', timeout: 4000 });
                return false;
            }
            if (!this._validateService.validateEmail(this.user.email)) {
                this._flashMessagesService.show("Please use a valid email", { cssClass: 'alert-danger', timeout: 4000 });
                return false;
            }
            if (!this._validateService.matchPassword(this.password, this.confirm_password)) {
                this._flashMessagesService.show("Password doesn't match", { cssClass: 'alert-danger', timeout: 4000 });
                return false;
            }
            else {
                var observable = this._authService.updateUser(this.user);
                observable.subscribe(function (data) {
                    if (data['success']) {
                        _this._flashMessagesService.show("success!", { cssClass: 'alert-success', timeout: 4000 });
                        _this._router.navigate(['/profile']);
                    }
                    else {
                        _this._flashMessagesService.show(data['msg'], { cssClass: 'alert-danger', timeout: 4000 });
                        _this._router.navigate(['/profile']);
                    }
                });
            }
        }
    };
    UpdateComponent.prototype.deleteFileStorage = function (name) {
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_8__["storage"]().ref();
        storageRef.child(this.basePath + "/" + name).delete();
    };
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/components/profile/edit-profile/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/components/profile/edit-profile/update/update.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__["FlashMessagesService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_9__["UsersService"]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/my-photos/my-photos.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/profile/my-photos/my-photos.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/my-photos/my-photos.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/profile/my-photos/my-photos.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%; height: 100%; padding-bottom: 200px;\">\n    <div class=\"containera\" [routerLink]=\"['/profile']\" >\n    <div class=\"text-center\">\n        <img *ngIf='!user1.ProfilePhoto'style=\" width:150px; height: 150px;\"  src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n        <img *ngIf='user1.ProfilePhoto'style=\" width:150px; height: 150px;\"  src=\"{{user1.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n    </div>\n    <div class=\"header\">\n            <!-- <h1 *ngIf=\"user\">{{user.first_name[0].toUpperCase()+user.first_name.slice(1)}} {{user.last_name[0].toUpperCase()+user.last_name.slice(1)}}</h1> -->\n            <h1 *ngIf=\"user\" style=\"margin-left: 510px;\">{{user1.username}}</h1>\n            \n    </div>\n    <div class=\"info\">\n        <p *ngIf=\"user1\">{{user1.info}}</p>\n    </div>\n    \n  </div>\n  <div style=\" width: 100px; margin-left: 510px;\">\n      <input type=\"file\" class=\"form-control\" (change)=\"onFileSelected($event)\" value=\"add more pictures\"><br>\n      <button  *ngIf=\"newUrl\" (click)=\"onload()\">Upload</button><br><br>\n  </div>\n\n      <div  *ngFor=\"let picture of user1.pictures\" style=\"width: 250px; height: 250px; margin-left:30px; display: inline-block;overflow: hidden;margin-top: 30px;\">\n          <button *ngIf='user._id === user1._id ' (click)=\"makeAvatar(picture)\" style=\"margin-bottom: 5px;\" class=\"btn\">set main photo</button>\n          <span class=\"close\" (click)=\"removeImg(picture)\" *ngIf='user._id === user1._id'>&times;</span>\n          <img style=\"width: 250px;\" src=\"{{picture.url}}\" >\n      </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/components/profile/my-photos/my-photos.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/profile/my-photos/my-photos.component.ts ***!
  \*********************************************************************/
/*! exports provided: MyPhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPhotosComponent", function() { return MyPhotosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyPhotosComponent = /** @class */ (function () {
    function MyPhotosComponent(_router, _route, _httpService, _authService, _flashMessagesService, _usersService, _storage, db) {
        this._router = _router;
        this._route = _route;
        this._httpService = _httpService;
        this._authService = _authService;
        this._flashMessagesService = _flashMessagesService;
        this._usersService = _usersService;
        this._storage = _storage;
        this.db = db;
        this.basePath = "/";
    }
    MyPhotosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user;
        this.user1;
        // this.displayPhoto;
        this.getUserFromService();
        this._authService.getProfile().subscribe(function (profile) {
            _this.user = profile['user'];
            console.log(_this.user);
        }, function (err) {
            return false;
        });
    };
    MyPhotosComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        this.picture = event.target.files[0];
        var file = this.picture;
        var name = "Profile picture" + Date.now();
        var uploadpic = this._storage.upload(name, file)
            .then(function (data) {
            data.ref.getDownloadURL().then(function (url) {
                _this.newUrl = url;
                _this.img = name;
            });
        });
    };
    MyPhotosComponent.prototype.onload = function () {
        var _this = this;
        var pictures = {
            url: this.newUrl,
            img: this.img
        };
        var observable = this._authService.updatePicture(pictures, this.user1);
        observable.subscribe(function (data) {
            console.log(data);
            var pict = { url: _this.newUrl };
            if (_this.user1.ProfilePhoto === null) {
                _this.makeAvatar(pict);
            }
            else {
                var picta = [];
                for (var i = 0; i < _this.user1.pictures.length; i++) {
                    picta.push(_this.user.pictures[i]._id);
                }
                if (picta.includes(_this.user1.ProfilePhoto)) {
                    _this.getUserFromService();
                }
                else {
                    _this.makeAvatar(_this.user.pictures[_this.user.pictures.length - 1]);
                }
            }
        });
    };
    MyPhotosComponent.prototype.getUserFromService = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this._usersService.getanUser(_this.id).subscribe(function (data) {
                _this.user1 = data['user'];
                // this.display(this.user1);
            });
        });
    };
    // display(user){
    //   if(user.pictures.length ===0){
    //     return this.displayPhoto = "https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994"
    //   }else{
    //     if(!user.ProfilePhoto){
    //       return this.displayPhoto = user.pictures[user.pictures.length-1].url;
    //     }else{
    //       for(var i = 0; i< user.pictures.length; i++){
    //         if(user.ProfilePhoto === user.pictures[i]._id){
    //           return this.displayPhoto = user.pictures[i].url;
    //         }else{
    //           return this.displayPhoto = user.pictures[user.pictures.length-1].url;
    //         }
    //       }
    //     }
    //   }
    // }
    MyPhotosComponent.prototype.removeImg = function (picture) {
        var _this = this;
        this.deleteFileStorage(picture.img);
        if (picture.url === this.user1.ProfilePhoto && this.user1.pictures.length < 2) {
            var observable = this._usersService.deleteImg(this.user1._id, picture);
            observable.subscribe(function (data) {
                _this.removeProfilePhoto();
            });
        }
        else if (picture.url === this.user1.ProfilePhoto) {
            var observable = this._usersService.deleteImg(this.user1._id, picture);
            observable.subscribe(function (data) {
                _this.makeAvatar(_this.user1.pictures[_this.user1.pictures.length - 1]);
                _this.getUserFromService();
            });
        }
        else {
            var observable = this._usersService.deleteImg(this.user1._id, picture);
            observable.subscribe(function (data) {
                _this.getUserFromService();
            });
        }
    };
    MyPhotosComponent.prototype.makeAvatar = function (picture) {
        var _this = this;
        var observable = this._usersService.makeProfilePicture(picture, this.user1._id);
        observable.subscribe(function (data) {
            _this.getUserFromService();
        });
    };
    MyPhotosComponent.prototype.removeProfilePhoto = function () {
        var _this = this;
        var observable = this._usersService.deletProfilePhoto(this.user1);
        observable.subscribe(function (data) {
            _this.getUserFromService();
        });
    };
    MyPhotosComponent.prototype.deleteFileStorage = function (name) {
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref();
        storageRef.child(this.basePath + "/" + name).delete();
    };
    MyPhotosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-photos',
            template: __webpack_require__(/*! ./my-photos.component.html */ "./src/app/components/profile/my-photos/my-photos.component.html"),
            styles: [__webpack_require__(/*! ./my-photos.component.css */ "./src/app/components/profile/my-photos/my-photos.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]])
    ], MyPhotosComponent);
    return MyPhotosComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/navigation/navigation.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/profile/navigation/navigation.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navbara{\n    background: rgb(167, 167, 168);\n\n    margin-top: 0;\n   \n    /* position: fixed */\n}\na{\n    color: rgb(75, 72, 72);\n}"

/***/ }),

/***/ "./src/app/components/profile/navigation/navigation.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/profile/navigation/navigation.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\" id=\"navbara\">\n  <div class=\"container-fluid\"> \n    <ul class=\"nav navbar-nav\">\n      <li *ngIf=\"user\" [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/', 'profile']\" >{{user.username}}</a></li>\n      <li *ngIf=\"user\" [routerLinkActive]=\"['active']\"><a [routerLink]=\"[ user._id, 'myphotos']\" *ngIf=\"_authService.loggedIn()\">My Photos</a></li>\n      <li *ngIf=\"user\" [routerLinkActive]=\"['active']\"><a [routerLink]=\"['edit', user._id]\" >Settings</a></li>\n      <li *ngIf=\"user\" [routerLinkActive]=\"['active']\"><a [routerLink]=\"[ user._id, 'notifications']\" *ngIf=\"_authService.loggedIn()\">Notifications</a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/profile/navigation/navigation.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/profile/navigation/navigation.component.ts ***!
  \***********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(_router, _route, _httpService, _validateService, _authService, _flashMessagesService) {
        this._router = _router;
        this._route = _route;
        this._httpService = _httpService;
        this._validateService = _validateService;
        this._authService = _authService;
        this._flashMessagesService = _flashMessagesService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.getProfile().subscribe(function (profile) {
            _this.user = profile['user'];
        }, function (err) {
            return false;
        });
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/profile/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/profile/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/notifications/notifications.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/profile/notifications/notifications.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containera{\n    width: 300px;\n    height: 400px;\n    /* border: 1px solid black; */\n    margin-left: 25px;\n    padding: 10px;\n    background: linear-gradient(#eae8ee, #a9d1eb, #eae8ee);\n    /* text-align: center; */\n    display: inline-block;\n    position: fixed;\n    margin-top: 0px;\n}\n.containera :hover{\n    cursor: pointer;\n}\n.profile-display{\n    width: 200px;\n    min-height: 200px;\n    padding-top: 10px;\n    padding-left: 10px;\n    margin-left: 100px;\n    margin-top: 0;\n    display: block;\n    background: linear-gradient(#eae8ee, #a9d1eb, #eae8ee);\n    position: absolute;\n    z-index: 1;\n    box-shadow: 0 0 10px rgb(129, 129, 129);\n}\n.header{\n    width: 280px;\n    height: 50px;\n    margin-top: 20px;\n    /* padding-left: 5px; */\n    text-align: center;\n    background: linear-gradient(#eaeeed, #8dccf7, #eaeeed);\n    color: rgba(67, 64, 64, 0.933);\n  \n}\n.header1{\n    width: 180px;\n    height: 30px;\n    /* padding-left: 5px; */\n    text-align: center;\n    \n    background: linear-gradient(#eaeeed, #8dccf7, #eaeeed);\n    color: rgba(67, 64, 64, 0.933);\n  \n}\n.contenta{\n    width: 100%;\n    height: 200px;\n\n   margin-top: 200px;\n    margin-left: 0;\n \n    display: inline-block;\n    \n   \n}\n.date{\n    font-size: 10px;\n    color: rgb(99, 59, 245);\n}\n.info{\n    width: 280px;\n    height: 50px;\n    /* padding-left: 5px; */\n    padding-left: 10%;\n    margin-top: 20px;\n    background: rgb(236, 234, 234);\n    color: rgba(155, 153, 153, 0.933);\n   \n}\n.info1{\n    width: 180px;\n    height: 30px;\n    /* padding-left: 5px; */\n    padding-left: 10%;\n    margin-top: 20px;\n    background: rgb(236, 234, 234);\n    color: rgba(133, 125, 125, 0.933);\n   \n}\n.a :hover{\n    cursor: pointer;\n}\n.btn{\n    margin-left: 20px;\n}\n#myImg:hover {opacity: 0.7;}\n.modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    /* overflow: auto; */\n    background-color: rgba(0, 0, 0, 0.151); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.151); /* Black w/ opacity */\n}\n.modal1 {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    padding-left: 100px;\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.473); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.473); /* Black w/ opacity */\n    z-index: 1;\n}\n.modal-content {\n    margin: auto;\n    display: block;\n    width: 30%;\n    max-width: 500px;\n}\n.modal-content1 {\n    display: block;\n    width: 45%;\n}\n#caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n}\n.modal-content, #caption {    \n    -webkit-animation-name: zoom;\n    -webkit-animation-duration: 0.6s;\n    animation-name: zoom;\n    animation-duration: 0.6s;\n}\n@-webkit-keyframes zoom {\n    from {-webkit-transform:scale(0)} \n    to {-webkit-transform:scale(1)}\n}\n@keyframes zoom {\n    from {-webkit-transform:scale(0);transform:scale(0)} \n    to {-webkit-transform:scale(1);transform:scale(1)}\n}\n.close {\n    position: absolute;\n    top: 100px;\n    right: 300px;\n    color: #f1f1f1;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n}\n.close:hover,\n.close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n}\n@media only screen and (max-width: 700px){\n    .modal-content {\n        width: 100%;\n    }\n}\n#myImg {\n    border-radius: 5px;\n    cursor: pointer;\n    transition: 0.3s;\n}\n.infdsplay{\n    width: 100px;\n    background: rgb(116, 114, 114);\n    color: white;\n    padding-top: 5px;\n    padding-left: 20px;\n    margin-left: 30px;margin-top: -30px;\n    font-size: 10px;\n    display: block;\n    position: absolute;\n    border-radius: 5px;\n}\n.blue{\n    color: rgb(245, 245, 245);\n    font-size: 20px;\n}\n.red{\n    color: red;\n    font-size: 20px;\n}\n.comment-form{\n    box-shadow: 0 0 10px rgb(129, 129, 129);\n\n}\n.blur {-webkit-filter: blur(4px);filter: blur(4px);}\n.brightness {-webkit-filter: brightness(250%);filter: brightness(250%);}\n.contrast {-webkit-filter: contrast(180%);filter: contrast(180%);}\n.grayscale {-webkit-filter: grayscale(100%);filter: grayscale(100%);}\n.huerotate {-webkit-filter: hue-rotate(180deg);filter: hue-rotate(180deg);}\n.invert {-webkit-filter: invert(100%);filter: invert(100%);}\n.opacity {-webkit-filter: opacity(50%);filter: opacity(50%);}\n.saturate {-webkit-filter: saturate(7); filter: saturate(7);}\n.sepia {-webkit-filter: sepia(100%);filter: sepia(100%);}\n.shadow {-webkit-filter: drop-shadow(8px 8px 10px green);filter: drop-shadow(8px 8px 10px green);}"

/***/ }),

/***/ "./src/app/components/profile/notifications/notifications.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/profile/notifications/notifications.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='notifications' style=\"background: rgb(242, 244, 245); width: 900px; margin-left: 100px; padding-top:20px; padding-bottom: 200px; \">\n    <div *ngIf='numb > 0' (click)='updateMyNots()' style=\"background: rgb(194, 221, 235); border: 1px solid rgb(192, 189, 189); width: 450px; margin-left: 200px; height: 50px; text-align: center;\">\n      <p>{{numb}} new <span *ngIf='numb > 1'> notifications</span><span *ngIf='numb === 1'> notification</span></p>\n    </div>\n    <div *ngFor='let notification of notifications' (mouseleave) =\"mouseLeave()\">\n        <h4   style=\"margin-left: 100px; font-size: 15px; font-family: fantasy\"><span class='btn' style=\"color: blue;\" [routerLink]=\"['/profile', notification.executer._id]\"  (mouseenter) =\"mouseEnter(notification) \" >{{notification.executer.username}}</span> {{notification.content}} :  <span style=\"color: blue; font-size: 10px;\">{{ stringAsDate(notification.createdAt) | date:'dd MM yy - HH:mm:ss' }}</span></h4>\n        \n        <!-- Profile popup -->\n        <div *ngIf='profileShow[notification._id]' class=\"profile-display\" (mouseleave) =\"mouseLeave()\" style=\"z-index: 4;\">\n            <div class=\"text-center\"[routerLink]=\"['/profile',notification.executer._id]\">\n                <img *ngIf='!notification.executer.ProfilePhoto'style=\" width:50px; height: 50px;\"  src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                <img *ngIf='notification.executer.ProfilePhoto'style=\" width:50px; height: 50px;\"  src=\"{{notification.executer.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">            \n            </div>\n            <div class=\"header1\"[routerLink]=\"['/profile',notification.executer._id]\">\n                <h1 *ngIf=\"user\" style=\"font-size: 20px; font-weight: bold;\">{{notification.executer.username}}</h1>                \n            </div>\n            <div class=\"info1\"[routerLink]=\"['/profile',notification.executer._id]\">\n                <p *ngIf=\"notification.executer\"><span *ngIf='!notification.executer.info'>about</span>{{notification.executer.info}}</p>\n            </div>\n            <div *ngIf='user._id != notification.executer._id'  style=\"position: absolute; margin-top:3px;  z-index: 4;\">\n                <button *ngIf=\"!notification.executer.followers.includes(user._id)\" (click)=\"onFollow2(notification)\" style=\"z-index: 4;\" >Follow</button>\n                <button *ngIf=\"notification.executer.followers.includes(user._id)\" (click)=\"onUnFollow2(notification)\" style=\" background: rgb(178, 243, 178);\">Following</button>\n            </div>\n          </div>\n\n\n        <div *ngIf='notification.gottin'  class=\"a\" (click)=\"displayReplies(notification.gottin._id)\" style=\"width: 450px; height:200px; background:rgb(223, 237, 243); margin-left: 200px; margin-top: 20px; border: 1px solid rgb(211, 209, 209); \">\n            <h4 style=\"margin-left: 10px; font-size: 15px; font-family: fantasy; text-decoration: underline;\">{{notification.gottin.user.username}}</h4>\n            <div style=\"width: 380px; height:100px; padding: 30px; border: 1px solid rgb(151, 150, 150); margin-left: 50px; \">\n              <p>{{notification.gottin.comment}}</p>\n              <p class=\"date\" style=\"color: blue; font-size: 10px;\">{{ stringAsDate(notification.gottin.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n            </div>\n        </div>\n        <div *ngIf='notification.reply' class=\"a\" (click)=\"displayReplies(notification.reply.gottin)\"  style=\"width: 450px; height:200px; background:rgb(223, 237, 243); margin-left: 200px; margin-top: 20px; border: 1px solid rgb(211, 209, 209); \">\n            <h4 style=\"margin-left: 10px; font-size: 15px; font-family: fantasy; text-decoration: underline;\">{{notification.reply.commentor.username}}</h4>\n            <div style=\"width: 380px; height:100px; padding: 30px; border: 1px solid rgb(151, 150, 150); margin-left: 50px; \">\n                <p>{{notification.reply.content}}</p>\n                <p class=\"date\" style=\"color: blue; font-size: 10px;\">{{ stringAsDate(notification.reply.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n              </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n<!--  -->\n\n<!-- Share and Replies display -->\n\n<div *ngIf=\"displayrepliesOfShare\" class=\"modal1\" >\n    <span  (click)=\"removeReplyBox()\" style=\"font-size: 40px; margin-left: 900px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n        \n    <div *ngIf=\"user\" class=\"modal-content1\" style=\"min-height: 500px; padding-left: 100px; padding-top: 30px; padding-bottom: 100px; z-index: 2; background: rgb(207, 232, 241); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 350px;\">\n        <div  [routerLink]=\"['/profile', displayrepliesOfShare.user._id]\" style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute; margin-left: -50px;\">\n            <img *ngIf='!displayrepliesOfShare.user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n            <img *ngIf='displayrepliesOfShare.user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{displayrepliesOfShare.user.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n        </div>\n        <div style=\" width: 100px; height:30px; margin-left: -60px;\">\n            <h3  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 50px; font-weight: bold; \" [routerLink]=\"['/profile', displayrepliesOfShare.user._id]\">{{displayrepliesOfShare.user.username}}</h3>\n            <div *ngIf='user._id != displayrepliesOfShare.user._id'>\n                <button *ngIf=\"!displayrepliesOfShare.user.followers.includes(user._id)\" (click)=\"onclickFollow1(displayrepliesOfShare)\" style=\"position: absolute; margin-top: -40px; margin-left: 350px;\">Follow</button>\n                <button *ngIf=\"displayrepliesOfShare.user.followers.includes(user._id)\" (click)=\"onclickUnFollow1(displayrepliesOfShare)\" style=\"position: absolute; margin-top: -40px; margin-left: 350px; background: rgb(178, 243, 178);\">Following</button>\n            </div>\n            \n        </div>\n        <div>\n            <div  *ngIf='displayrepliesOfShare.urla' style=\"width: 440px;  \">\n                <img id=\"myImg\" class=\"{{displayrepliesOfShare.imageclass}}\" src=\"{{displayrepliesOfShare.urla}}\" style=\"width: 350px; margin-top: 5px; margin-bottom: 15px;\"  >\n            </div>\n            \n            <div style=\"margin-top: 20px; width: 350px;\">\n                <p style=\"margin-left: 20px;\">{{displayrepliesOfShare.comment}}</p>\n                <p class=\"date\">{{ stringAsDate(displayrepliesOfShare.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n            </div>\n        </div>\n        <div style=\"border: 1px solid grey; margin-top: 40px; width: 520px; margin-left: -90px;\"></div>\n        <div style=\"width: 400px; height:50px;margin-top:20px; padding-bottom: 20px;  margin-left:-30px;  background: rgb(207, 232, 241); border: 1px solid rgb(207, 232, 241) ;\" >\n                <div *ngIf='infoDisp[displayrepliesOfShare._id]' class=\"infdsplay\">\n                    <p>{{content}}</p>\n                </div>\n                <div (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('like', displayrepliesOfShare)\"  style=\"display: inline-block; position: absolute; margin-left: 200px;\" >\n                    <span class=\"btn\"><i (click)=\"onclickLike1(displayrepliesOfShare)\"class=\"fa fa-heart blue\"></i> </span><span (click)=\"displayWhoLikes(displayrepliesOfShare)\" class=\"btn\" style=\"margin-left: 10px; color: blue;\">{{displayrepliesOfShare.likes.length}} likes</span>\n                    <span *ngFor='let like of displayrepliesOfShare.likes'><i *ngIf='like._id === user._id' (click)=\"onclickLike1(displayrepliesOfShare)\" class=\"fa fa-heart red btn\" style=\"position: absolute; margin-left:-127px;\"></i></span>\n                </div>\n                <div *ngIf=\"user._id === displayrepliesOfShare.user._id\" (click)=\"deleteShare1(displayrepliesOfShare)\"  style=\"display: inline-block; position: absolute; margin-left: 350px;\" (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('delete', displayrepliesOfShare)\" >\n                    <p> <span class=\"btn\" ><i class=\"fa fa-trash\" style=\"color: rgb(53, 85, 121);\"></i></span></p>\n                </div>\n                \n                <div  style=\"position: absolute; margin-left: 70px; \">\n                    <span  >{{displayrepliesOfShare.replies.length}} comments</span>\n                </div>\n         \n            <div  style=\"margin-top: 60px; height:50px; margin-left: 0px; \">\n               \n                  \n                    <form class=\"form-horizontal\" role=\"form\" (submit)=\"onreplySubmit1(displayrepliesOfShare)\">\n                        <textarea *ngIf=\"user\"  class=\"form-control\" type=\"textarea\" name=\"comment\" [(ngModel)]=\"reply\" placeholder=\"{{message}}\" style=\"width: 450px; min-height: 20px; margin-left: -50px;\"></textarea>\n                        <input type=\"submit\" class=\"btn-primary\" value=\"Reply\" style=\"text-align: center;padding-left:-5px; padding-top: -5px; margin-top:10px; width:40px; height: 20px; font-size: 10px; margin-left: 370px; position: absolute; background: green;\">\n                    </form>        \n                    \n            </div>\n            \n        </div>\n\n        <div style=\"border: 1px solid grey; margin-top: 110px; width: 520px; margin-left: -90px;\"></div>\n\n        <!-- Replies -->\n\n        <div *ngFor='let reply of displayrepliesOfShare.replies'>\n            <p style=\"margin-top: 30px;\"><span [routerLink]=\"['/profile', reply.commentor._id]\" class=\"btn\" style=\"color: rgb(61, 137, 236);\">{{reply.commentor.username}} :</span> {{reply.content}}</p><br>\n            <p class=\"date\">{{ stringAsDate(reply.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n            <div *ngIf='infoDisp[reply._id]' class=\"infdsplay\">\n                <p>{{content}}</p>\n\n            </div>\n            <!-- Action box -->\n            <div (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('like', reply)\"  style=\"display: inline-block; position: absolute; margin-left: 200px;\" >\n                <span (click)=\"onclickLikeReply(displayrepliesOfShare, reply)\" class=\"btn\"><i class=\"fa fa-heart blue\"></i> </span><span (click)=\"displayWhoLikes(reply)\"style=\"margin-left: 10px; color: blue;\" class=\"btn\">{{reply.likes.length}} likes</span>\n                <span *ngFor='let like of reply.likes'><i *ngIf='like._id === user._id' class=\"fa fa-heart red btn\" style=\"position: absolute; margin-left:-127px; z-index: 5;\" (click)=\"onclickLikeReply(displayrepliesOfShare, reply)\"></i></span>\n            </div>\n            <div *ngIf=\"user._id === reply.commentor._id\" (click)=\"deleteReply(displayrepliesOfShare, reply)\"  style=\"display: inline-block; position: absolute; margin-left: 350px;\" (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('delete', reply)\" >\n                <p> <span class=\"btn\" ><i class=\"fa fa-trash\" style=\"color: rgb(53, 85, 121);\"></i></span></p>\n            </div>\n\n            <div style=\"border: 1px solid rgb(163, 162, 162); margin-top: 110px; width: 440px; margin-left: -50px;\"></div>\n        </div>\n        \n    </div>\n\n</div>\n\n<!-- Likes display  -->\n\n<div *ngIf=\"wholeLikes\" class=\"modal1\">\n        <span  (click)=\"removeLikesBox()\" style=\"font-size: 40px; margin-left: 900px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n       <div *ngIf=\"user\" class=\"modal-content1\" style=\"min-height: 500px; padding-left: 50px; padding-top: 30px; padding-bottom: 100px; background: rgb(207, 232, 241); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 350px; z-index: 5;\" >\n            <div *ngFor='let liker of wholeLikes.likes'>\n                <div style=\"border-top: 1px solid rgb(53, 53, 53); border-bottom: 1px solid rgb(53, 53, 53); padding-top: 20px; padding-bottom: 20px;\">\n                        <div  [routerLink]=\"['/profile', liker._id]\" style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                        <img *ngIf='!liker.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                        <img *ngIf='liker.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{liker.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n                    </div>\n                    <h3  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 50px; font-weight: bold; \" [routerLink]=\"['/profile', liker._id]\">{{liker.username}}</h3>\n                    <div *ngIf='user._id != liker._id'>\n                            <span *ngIf=\"!liker.followers.includes(user._id)\" class=\"btn\"  style=\"position: absolute; margin-top: -40px; margin-left: 350px; z-index: 5;\"><i (click)=\"onclickletsFollow1(liker, wholeLikes)\">  Follow</i> </span>\n                            <span *ngIf=\"liker.followers.includes(user._id)\" class=\"btn\" style=\"position: absolute; margin-top: -40px; margin-left: 350px; background: rgb(178, 243, 178); z-index: 5;\"> <i (click)=\"onclickletsUnfollow1(liker, wholeLikes)\">  Following</i></span>\n                </div>\n                </div>\n                \n            </div>    \n           \n       </div>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/notifications/notifications.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/profile/notifications/notifications.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_shares_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shares.service */ "./src/app/services/shares.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(_notificationService, _authService, _usersService, _shareService, db, _storage) {
        this._notificationService = _notificationService;
        this._authService = _authService;
        this._usersService = _usersService;
        this._shareService = _shareService;
        this.db = db;
        this._storage = _storage;
        this.numb = 0;
        this.profileShow = {};
        this.infoDisp = {};
        this.basePath = "/";
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.getProfile().subscribe(function (profile) {
            _this.user = profile['user'];
            _this.updateMyNots();
            _this.getMyNots();
            _this.userax;
            _this.profileShow;
            _this.displayrepliesOfShare;
            _this.wholeLikes;
            _this.content;
            _this.infoDisp;
            _this.message = "Write something interesting";
            _this.reply;
        }, function (err) {
            return false;
        });
        setInterval(function () {
            _this.getMyNots1();
        }, 5000);
        setInterval(function () {
            _this.numb;
            console.log(_this.numb);
        }, 5000);
    };
    NotificationsComponent.prototype.getMyNots = function () {
        var _this = this;
        var observable1 = this._notificationService.allNotifications(this.user._id);
        observable1.subscribe(function (data) {
            _this.notifications = data['notifications'];
            console.log(_this.notifications);
            _this.numb = 0;
        });
    };
    NotificationsComponent.prototype.getMyNots1 = function () {
        var _this = this;
        var observable1 = this._notificationService.allunseenNotifications(this.user._id);
        observable1.subscribe(function (data) {
            var newNots = data['notifications'];
            _this.numb = newNots.length;
        });
    };
    NotificationsComponent.prototype.updateMyNots = function () {
        var _this = this;
        var observable = this._notificationService.updateNotifications(this.user._id);
        observable.subscribe(function (data) {
            _this.getMyNots();
        });
    };
    NotificationsComponent.prototype.stringAsDate = function (dateStr) {
        return new Date(dateStr);
    };
    NotificationsComponent.prototype.mouseEnter = function (notification) {
        var _this = this;
        var observable = this._usersService.getanUser(notification.executer._id);
        observable.subscribe(function (data) {
            _this.userax = data['user'];
            //  this.sortArray(this.users);
        });
        Object.keys(this.profileShow).forEach(function (h) {
            _this.profileShow[h] = false;
        });
        this.profileShow[notification._id] = true;
    };
    NotificationsComponent.prototype.mouseLeave = function () {
        var _this = this;
        Object.keys(this.profileShow).forEach(function (h) {
            _this.profileShow[h] = false;
        });
    };
    NotificationsComponent.prototype.onFollow2 = function (notification) {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user, notification.executer);
        observable.subscribe(function (data) {
            _this.getMyNots();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
    };
    NotificationsComponent.prototype.onUnFollow2 = function (notification) {
        var _this = this;
        var observable = this._usersService.serviceUnFollow(this.user, notification.executer);
        observable.subscribe(function (data) {
            _this.getMyNots();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
    };
    // display box
    NotificationsComponent.prototype.removeReplyBox = function () {
        this.displayrepliesOfShare = null;
        this.getMyNots();
    };
    NotificationsComponent.prototype.displayReplies = function (share) {
        var _this = this;
        var observable = this._shareService.aShare(share);
        observable.subscribe(function (data) {
            _this.sharex = data;
            _this.displayrepliesOfShare = _this.sharex;
        });
    };
    NotificationsComponent.prototype.bringOneShare = function (id) {
        var _this = this;
        var observable = this._shareService.aShare(id);
        observable.subscribe(function (data) {
            _this.sharex = data;
            _this.displayrepliesOfShare = _this.sharex;
        });
    };
    NotificationsComponent.prototype.onclickFollow1 = function (share) {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user, share.user);
        observable.subscribe(function (data) {
            _this.bringOneShare(share._id);
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
    };
    NotificationsComponent.prototype.onclickUnFollow1 = function (share) {
        var _this = this;
        var observable = this._usersService.serviceUnFollow(this.user, share.user);
        observable.subscribe(function (data) {
            _this.bringOneShare(share._id);
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
    };
    //  Display of like delete comment box
    NotificationsComponent.prototype.displayMeaning = function (info, share) {
        var _this = this;
        this.content = '' + info + '!';
        Object.keys(this.infoDisp).forEach(function (h) {
            _this.infoDisp[h] = false;
        });
        this.infoDisp[share._id] = true;
    };
    NotificationsComponent.prototype.displayMea = function () {
        var _this = this;
        Object.keys(this.infoDisp).forEach(function (h) {
            _this.infoDisp[h] = false;
        });
    };
    // Like from display Window
    NotificationsComponent.prototype.onclickLike1 = function (share) {
        var _this = this;
        var counter = 0;
        for (var i = 0; i < share.likes.length; i++) {
            if (share.likes[i]._id === this.user._id) {
                counter = counter + 1;
            }
            else {
                continue;
            }
        }
        if (counter > 0) {
            var observable = this._shareService.dislikeFromService(share, this.user);
            observable.subscribe(function (data) {
                _this.bringOneShare(share._id);
            });
        }
        else {
            var observable = this._shareService.likeFromService(share, this.user);
            observable.subscribe(function (data) {
                _this.bringOneShare(share._id);
            });
        }
    };
    NotificationsComponent.prototype.displayWhoLikes = function (share) {
        this.wholeLikes = share;
    };
    NotificationsComponent.prototype.removeLikesBox = function () {
        this.wholeLikes = null;
    };
    // Delete share
    NotificationsComponent.prototype.deleteShare1 = function (share) {
        var _this = this;
        if (share.img) {
            this.deleteFileStorage(share.img);
            var observable = this._shareService.deleteShare(this.user._id, share);
            observable.subscribe(function (data) {
                _this.getMyNots();
                _this.removeReplyBox();
            });
        }
        else {
            var observable = this._shareService.deleteShare(this.user._id, share);
            observable.subscribe(function (data) {
                _this.getMyNots();
                _this.removeReplyBox();
            });
        }
    };
    // replying from open share box
    NotificationsComponent.prototype.onreplySubmit1 = function (share) {
        var _this = this;
        if (!this.reply) {
            this.message = 'You can do better!';
        }
        else {
            var reply1 = {
                content: this.reply
            };
            var observable = this._shareService.replytheShare(share, reply1, this.user);
            observable.subscribe(function (data) {
                _this.reply = '';
                _this.bringOneShare(share._id);
            });
        }
    };
    // Liking reply ==
    NotificationsComponent.prototype.onclickLikeReply = function (share, reply) {
        var _this = this;
        var counter = 0;
        for (var i = 0; i < reply.likes.length; i++) {
            if (reply.likes[i]._id === this.user._id) {
                counter = counter + 1;
            }
            else {
                continue;
            }
        }
        if (counter > 0) {
            var observable = this._shareService.dislikeReply(this.user, reply);
            observable.subscribe(function (data) {
                _this.bringOneShare(share._id);
            });
        }
        else {
            var observable = this._shareService.likeReply(this.user, reply);
            observable.subscribe(function (data) {
                _this.bringOneShare(share._id);
            });
        }
    };
    // Reply-----------------------------------------------------
    NotificationsComponent.prototype.deleteReply = function (share, reply) {
        var _this = this;
        var observable = this._shareService.deleteReply(this.user, reply);
        observable.subscribe(function (data) {
            _this.bringOneShare(share._id);
            _this.getMyNots();
        });
    };
    // Follow unfollow from display who likes
    NotificationsComponent.prototype.onclickletsUnfollow1 = function (follower, share) {
        var _this = this;
        var observable = this._usersService.serviceUnFollow(this.user, follower);
        observable.subscribe(function (data) {
            _this.bringOneShare(share._id);
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
        var observable1 = this._shareService.aShare(share._id);
        observable1.subscribe(function (data) {
            var sharez = data;
            _this.wholeLikes = sharez;
        });
    };
    NotificationsComponent.prototype.onclickletsFollow1 = function (follower, share) {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user, follower);
        observable.subscribe(function (data) {
            _this.bringOneShare(share._id);
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
        var observable1 = this._shareService.aShare(share._id);
        observable1.subscribe(function (data) {
            var sharez = data;
            _this.wholeLikes = sharez;
        });
    };
    // removing picture from firebase
    NotificationsComponent.prototype.deleteFileStorage = function (name) {
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_5__["storage"]().ref();
        storageRef.child(this.basePath + "/" + name).delete();
    };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/components/profile/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.css */ "./src/app/components/profile/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [_services_notifications_service__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _services_shares_service__WEBPACK_IMPORTED_MODULE_4__["SharesService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".root-div{\n   height: 100%;\n    /* background: rgba(197, 221, 248, 0.303); */\n    \n    padding-left: 10px;\n    padding-right: 10px;\n}"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"root-div\">\n    <app-navigation></app-navigation>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_router, _route, _httpService, _validateService, _authService, _flashMessagesService) {
        this._router = _router;
        this._route = _route;
        this._httpService = _httpService;
        this._validateService = _validateService;
        this._authService = _authService;
        this._flashMessagesService = _flashMessagesService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.getProfile().subscribe(function (profile) {
            _this.user = profile['user'];
        }, function (err) {
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/show-profile/show-profile.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/profile/show-profile/show-profile.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containera{\n    width: 200px;\n    height: 320px;\n    /* border: 1px solid black; */\n    margin-left: 25px;\n    padding: 10px;\n    background: linear-gradient(#eae8ee, #a9d1eb, #eae8ee);\n    /* text-align: center; */\n    display: inline-block;\n    position: fixed;\n    margin-top: 0px;\n\n}\n\n\n.header{\n    width: 180px;\n    height: 30px;\n    margin-top: 10px;\n    /* padding-left: 5px; */\n    text-align: center;\n    background: linear-gradient(#eaeeed, #8dccf7, #eaeeed);\n    color: rgba(67, 64, 64, 0.933);\n  \n}\n\n\n.contenta{\n    width: 100%;\n    height: 200px;\n\n   margin-top: 200px;\n    margin-left: 0;\n \n    display: inline-block;\n    \n   \n}\n\n\n.info{\n    width: 180px;\n    height: 30px;\n    /* padding-left: 5px; */\n    padding-left: 10%;\n    margin-top: 10px;\n    background: rgb(236, 234, 234);\n    color: rgba(155, 153, 153, 0.933);\n   \n}\n\n\n.a :hover{\n    cursor: pointer;\n}\n\n\n.btn{\n    margin-left: 20px;\n}\n\n\n#myImg:hover {opacity: 0.7;}\n\n\n.modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    /* overflow: auto;  */\n    background-color: rgba(2, 2, 2, 0.151); /* Fallback color */\n    background-color: rgba(2, 2, 2, 0.151); /* Black w/ opacity */\n}\n\n\n.modal-content {\n    margin: auto;\n    display: block;\n    width: 30%;\n    max-width: 500px;\n}\n\n\n#caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n}\n\n\n.modal-content, #caption {    \n    -webkit-animation-name: zoom;\n    -webkit-animation-duration: 0.6s;\n    animation-name: zoom;\n    animation-duration: 0.6s;\n}\n\n\n@-webkit-keyframes zoom {\n    from {-webkit-transform:scale(0)} \n    to {-webkit-transform:scale(1)}\n}\n\n\n@keyframes zoom {\n    from {-webkit-transform:scale(0);transform:scale(0)} \n    to {-webkit-transform:scale(1);transform:scale(1)}\n}\n\n\n.close {\n    position: absolute;\n    top: 80px;\n    right: 35px;\n    color: #474444;\n    font-size: 30px;\n    font-weight: bold;\n    transition: 0.3s;\n}\n\n\n.close:hover,\n.close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n\n@media only screen and (max-width: 700px){\n    .modal-content {\n        width: 100%;\n    }\n}\n\n\n#myImg {\n    border-radius: 5px;\n    cursor: pointer;\n    transition: 0.3s;\n}\n\n\n.header1{\n    width: 180px;\n    height: 30px;\n    /* padding-left: 5px; */\n    text-align: center;\n    \n    background: linear-gradient(#eaeeed, #8dccf7, #eaeeed);\n    color: rgba(67, 64, 64, 0.933);\n  \n}\n\n\n.date{\n    font-size: 10px;\n    color: rgb(99, 59, 245);\n}\n\n\n.info1{\n    width: 180px;\n    height: 30px;\n    /* padding-left: 5px; */\n    text-align: center;\n    background: rgb(236, 234, 234);\n    color: rgba(133, 125, 125, 0.933);\n   \n}\n\n\n.a :hover{\n    cursor: pointer;\n}\n\n\n.btn{\n    margin-left: 20px;\n}\n\n\n.modal1 {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 3; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    padding-left: 100px;\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.473); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.473); /* Black w/ opacity */\n  \n}\n\n\n.modal2 {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 4; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    padding-left: 100px;\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.473); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.473); /* Black w/ opacity */\n  \n}\n\n\n.modal4 {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 6; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    padding-left: 100px;\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.473); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.473); /* Black w/ opacity */\n  \n}\n\n\n.modal-content {\n    margin: auto;\n    display: block;\n    width: 30%;\n    max-width: 500px;\n}\n\n\n.modal-content1 {\n    display: block;\n    width: 45%;\n}\n\n\n.modal-content2 {\n    display: block;\n    width: 65%;\n}\n\n\n#caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: rgb(255, 254, 254);\n    padding: 10px 0;\n    height: 150px;\n    z-index: 2;\n}\n\n\n.modal-content, #caption {    \n    -webkit-animation-name: zoom;\n    -webkit-animation-duration: 0.6s;\n    animation-name: zoom;\n    animation-duration: 0.6s;\n}\n\n\n@-webkit-keyframes zoom {\n    from {-webkit-transform:scale(0)} \n    to {-webkit-transform:scale(1)}\n}\n\n\n@keyframes zoom {\n    from {-webkit-transform:scale(0);transform:scale(0)} \n    to {-webkit-transform:scale(1);transform:scale(1)}\n}\n\n\n.close {\n    position: absolute;\n    top: 100px;\n    right: 300px;\n    color: #f1f1f1;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n}\n\n\n.close:hover,\n.close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n\n@media only screen and (max-width: 700px){\n    .modal-content {\n        width: 100%;\n    }\n}\n\n\n#myImg {\n    border-radius: 5px;\n    cursor: pointer;\n    transition: 0.3s;\n}\n\n\n.profile-display{\n    width: 200px;\n    min-height: 200px;\n    padding-top: 10px;\n    padding-left: 10px;\n    margin-top: 0;\n    display: block;\n    background: rgb(240, 235, 235);\n    position: absolute;\n    z-index: 1;\n    box-shadow: 0 0 10px rgb(129, 129, 129);\n}\n\n\n.infdsplay{\n    width: 100px;\n    background: rgb(116, 114, 114);\n    color: white;\n    padding-top: 5px;\n    padding-left: 20px;\n    margin-left: 30px;margin-top: -30px;\n    font-size: 10px;\n    display: block;\n    position: absolute;\n    border-radius: 5px;\n}\n\n\n.blue{\n    color: rgb(122, 122, 122);\n    font-size: 20px;\n}\n\n\n.red{\n    color: red;\n    font-size: 20px;\n}\n\n\n.comment-form{\n    box-shadow: 0 0 10px rgb(129, 129, 129);\n\n}\n\n\n.blur {-webkit-filter: blur(4px);filter: blur(4px);}\n\n\n.brightness {-webkit-filter: brightness(250%);filter: brightness(250%);}\n\n\n.contrast {-webkit-filter: contrast(180%);filter: contrast(180%);}\n\n\n.grayscale {-webkit-filter: grayscale(100%);filter: grayscale(100%);}\n\n\n.huerotate {-webkit-filter: hue-rotate(180deg);filter: hue-rotate(180deg);}\n\n\n.invert {-webkit-filter: invert(100%);filter: invert(100%);}\n\n\n.opacity {-webkit-filter: opacity(50%);filter: opacity(50%);}\n\n\n.saturate {-webkit-filter: saturate(7); filter: saturate(7);}\n\n\n.sepia {-webkit-filter: sepia(100%);filter: sepia(100%);}\n\n\n.shadow {-webkit-filter: drop-shadow(8px 8px 10px green);filter: drop-shadow(8px 8px 10px green);}"

/***/ }),

/***/ "./src/app/components/profile/show-profile/show-profile.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/profile/show-profile/show-profile.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containera\">\n    <div class=\"text-center\">\n        <img *ngIf='!user.ProfilePhoto'style=\" width:100px; height: 100px;\"  src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n         <img *ngIf='user.ProfilePhoto'style=\" width:100px; height: 100px;\"  src=\"{{user.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n            \n     </div>\n    <div class=\"header\">\n                <!-- <h1 *ngIf=\"user\">{{user.first_name[0].toUpperCase()+user.first_name.slice(1)}} {{user.last_name[0].toUpperCase()+user.last_name.slice(1)}}</h1> -->\n        <h1 style=\"font-size: 20px;\">{{user.username}}</h1>\n                \n    </div>\n    <div class=\"info\">\n        <p *ngIf=\"user\" style=\"font-size: 12px;\"><span *ngIf='!user.info'>about</span>{{user.info}}</p>\n    </div><br>\n    <div *ngIf='user'  >\n        <h3 style=\"font-size: 15px;\" (click)=\"displayFollowers(user)\" >Followers : {{user.followers.length}}</h3>\n        <h3 style=\"font-size: 15px;\" (click)=\"displayFollowings(user)\">Following : {{user.followings.length}}</h3>\n        <h3 style=\"font-size: 15px;\"  >Posts : {{shares.length}}</h3>\n        <h3 style=\"font-size: 15px;\" (click)='displayMyReplies()' >My Replies : {{my_replies.length}}</h3>\n    </div>\n</div>\n\n<div *ngIf=\"shares\" style=\"width: 50%; background: rgb(255, 255, 255); padding-bottom: 200px; margin-left: 300px;\">\n  \n    <!-- Main Share Window -->\n    <div *ngFor=\"let share of shares\">\n\n            <div   style=\"width: 660px; padding-top: 30px; background: rgb(242, 244, 245); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195); margin-left: 50px; margin-top: 5px; padding-left: 30px; padding-right: 30px;\">\n                <div class=\"a\" (click)=\"displayReplies(share)\" style=\"width: 520px; margin-left: 100px; height: 50px; position: absolute; margin-top:-20px;\" >\n    \n                </div>\n                <!-- Profile Photo Box -->\n    \n                <div  class=\"a\"  style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                    <img *ngIf='!user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                    <img *ngIf='user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{user.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n                </div>\n                <!-- Second Share box -->\n    \n                <div style=\"width: 440px;  display: inline-block;  margin-left: 50px; \">\n                    <!-- UserName Window -->\n                    <div class=\"a\" style=\" width: 100px; height:30px;\" >\n                        <h3 class=\"a\" style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 5px; font-weight: bold; \" >{{user.username}}</h3>\n                        \n                      \n                    <!-- ShareBox -->\n                \n                        <div (click)=\"imgToShow(share)\" *ngIf='share.urla' style=\"width: 640px; height: 300px; overflow: hidden; padding-left: 80px;\" class=\"a\">\n                            <img id=\"myImg\" class=\"{{share.imageclass}}\" src=\"{{share.urla}}\" style=\"width: 350px; margin-top: 5px; margin-bottom: 15px;\" alt=\"{{share.comment}}\" >\n                        </div>\n                    \n                        <div class=\"a\"  (click)=\"displayReplies(share)\" style=\" width: 340px; padding-top: 20px; padding-bottom: 20px; margin-top: 20px; margin-bottom: 30px;\">\n                            <p class=\"a\" style=\"margin-left: 20px;\">{{share.comment}}</p>\n                            <p class=\"date\">{{ stringAsDate(share.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n                        </div>\n            \n                </div>\n            </div>\n                    <!-- Action Box -->\n            <div *ngIf=\"user\" style=\"width: 660px; height:50px;margin-top: 0px; padding-bottom: 20px;  margin-left:-30px;  background: rgb(242, 244, 245); margin-top: 30px;\" >\n                    <div *ngIf='infoDisp[share._id]' class=\"infdsplay\">\n                        <p>{{content}}</p>\n                    </div>\n                    <div (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('like', share)\" (click)=\"onclickLike(share)\" style=\"display: inline-block; position: absolute; margin-left: 250px;\" >\n                        <span class=\"btn\"><i class=\"fa fa-heart blue\"></i> </span><span style=\"margin-left: 10px;\">{{share.likes.length}}</span>\n                        <span *ngFor='let like of share.likes'><i *ngIf='like._id === user._id' class=\"fa fa-heart red btn\" style=\"position: absolute; margin-left: -65px; margin-top: 0px;\"></i></span>\n                    </div>\n                    <div *ngIf=\"user._id === share.user._id\" (click)=\"deleteShare(share)\"  style=\"display: inline-block; position: absolute; margin-left: 400px;\" (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('delete', share)\" >\n                        <p> <span class=\"btn\" ><i class=\"fa fa-trash\" style=\"color: rgb(53, 85, 121);\"></i></span></p>\n                    </div>\n                    <div (mouseenter) =\"displayMeaning('reply', share)\" (click)=\"showaddComment(share)\" (mouseleave)=\"displayMea()\" style=\"display: inline-block; position: absolute; margin-left: 50px;\">\n                        <span class=\"fa fa-commenting-o btn\"  style=\"font-size: 24px; margin-left: 30px; color: rgb(86, 201, 230); z-index: 1;\"></span>\n                    </div>\n                    <div  style=\"position: absolute; margin-left: 120px; \">\n                        <span class=\"btn\" >{{share.replies.length}}</span>\n                    </div>\n             \n                <div *ngIf=\"displayCommentbox[share._id]\" style=\"margin-top: 0px; height:100%; width: 100%; margin-left: -30px; z-index: 5; position: absolute;\" >\n                    <div style=\"width: 400px;  background: rgb(242, 244, 245); border: 20px solid rgb(242, 244, 245); \" class=\"comment-form\">\n                        <span (click)=\"hideAddComment(share)\"><i class=\"fa fa-close\" style=\"font-size: 10px;\"></i></span>\n                        <form class=\"form-horizontal\" role=\"form\" (submit)=\"onreplySubmit(share)\">\n                            <textarea *ngIf=\"user\"  class=\"form-control\" type=\"textarea\" name=\"comment\" [(ngModel)]=\"reply\" placeholder=\"{{message}}\" style=\"width: 300px; min-height: 30px;\"></textarea>\n                            <input type=\"submit\" class=\"btn-primary\" value=\"Reply\" style=\"text-align: center;padding-left:-5px; padding-top: -5px; margin-top:-40px; width:40px; height: 20px; font-size: 10px; margin-left: 320px; position: absolute; background: green;\">\n                        </form>        \n                    </div>      \n                </div>\n                \n            </div>\n        </div>\n      \n    </div>\n</div>\n<div class=\"contenta\">\n    \n</div>\n\n<!-- Image display -->\n\n\n<div *ngIf=\"selectedImg\"id=\"myModal\" (click)=\"selectedImgNull()\" class=\"modal\">\n    <img class=\"modal-content {{selectedImg.imageclass}}\" id=\"img01\" src=\"{{selectedImg.urla}}\">\n    <div class=\"a\" id=\"caption\"><h3  style=\"font-size: 25px; color: rgb(245, 244, 244);  margin-left: 5px; \" [routerLink]=\"['/profile', selectedImg.user._id]\">{{selectedImg.user.username}}</h3><p style=\"color: rgb(192, 190, 190); \">{{selectedImg.comment}}</p></div>\n</div>\n\n\n\n\n<!-- Share and Replies display -->\n\n<div *ngIf=\"displayrepliesOfShare\" class=\"modal2\" >\n        <span  (click)=\"removeReplyBox()\" style=\"font-size: 40px; margin-left: 900px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n            \n        <div *ngIf=\"user\" class=\"modal-content1\" style=\"min-height: 500px; padding-left: 100px; padding-top: 30px; padding-bottom: 100px; z-index: 4; background: rgb(242, 244, 245); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 350px;\">\n            <div  [routerLink]=\"['/profile', displayrepliesOfShare.user._id]\" style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute; margin-left: -50px;\">\n                <img *ngIf='!displayrepliesOfShare.user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                <img *ngIf='displayrepliesOfShare.user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{displayrepliesOfShare.user.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n            </div>\n            <div style=\" width: 100px; height:30px; margin-left: -60px;\">\n                <h3  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 50px; font-weight: bold; \" [routerLink]=\"['/profile', displayrepliesOfShare.user._id]\">{{displayrepliesOfShare.user.username}}</h3>\n                <!-- <div *ngIf='user._id != displayrepliesOfShare.user._id'>\n                    <button *ngIf=\"!displayrepliesOfShare.user.followers.includes(user._id)\" (click)=\"onclickFollow1(displayrepliesOfShare)\" style=\"position: absolute; margin-top: -40px; margin-left: 350px;\">Follow</button>\n                    <button *ngIf=\"displayrepliesOfShare.user.followers.includes(user._id)\" (click)=\"onclickUnFollow1(displayrepliesOfShare)\" style=\"position: absolute; margin-top: -40px; margin-left: 350px; background: rgb(178, 243, 178);\">Following</button>\n                </div> -->\n                \n            </div>\n            <div>\n                <div  *ngIf='displayrepliesOfShare.urla' style=\"width: 440px;  \">\n                    <img id=\"myImg\" class=\"{{displayrepliesOfShare.imageclass}}\" src=\"{{displayrepliesOfShare.urla}}\" style=\"width: 350px; margin-top: 5px; margin-bottom: 15px;\"  >\n                </div>\n                \n                <div style=\"margin-top: 20px; width: 350px;\">\n                    <p style=\"margin-left: 20px;\">{{displayrepliesOfShare.comment}}</p>\n                    <p class=\"date\">{{ stringAsDate(displayrepliesOfShare.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n                </div>\n            </div>\n            <div style=\"border: 1px solid grey; margin-top: 40px; width: 520px; margin-left: -90px;\"></div>\n            <div style=\"width: 400px; height:50px;margin-top:20px; padding-bottom: 20px;  margin-left:-30px;  background: rgb(242, 244, 245);border: 1px solid rgb(242, 244, 245);\" >\n                    <div *ngIf='infoDisp[displayrepliesOfShare._id]' class=\"infdsplay\">\n                        <p>{{content}}</p>\n                    </div>\n                    <div (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('like', displayrepliesOfShare)\"  style=\"display: inline-block; position: absolute; margin-left: 200px;\" >\n                        <span class=\"btn\"><i (click)=\"onclickLike1(displayrepliesOfShare)\"class=\"fa fa-heart blue\"></i> </span><span (click)=\"displayWhoLikes(displayrepliesOfShare)\" class=\"btn\" style=\"margin-left: 10px; color: blue;\">{{displayrepliesOfShare.likes.length}} likes</span>\n                        <span *ngFor='let like of displayrepliesOfShare.likes'><i *ngIf='like._id === user._id' (click)=\"onclickLike1(displayrepliesOfShare)\" class=\"fa fa-heart red btn\" style=\"position: absolute; margin-left:-127px;\"></i></span>\n                    </div>\n                    <div *ngIf=\"user._id === displayrepliesOfShare.user._id\" (click)=\"deleteShare1(displayrepliesOfShare)\"  style=\"display: inline-block; position: absolute; margin-left: 350px;\" (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('delete', displayrepliesOfShare)\" >\n                        <p> <span class=\"btn\" ><i class=\"fa fa-trash\" style=\"color: rgb(53, 85, 121);\"></i></span></p>\n                    </div>\n                    \n                    <div  style=\"position: absolute; margin-left: 70px; \">\n                        <span  >{{displayrepliesOfShare.replies.length}} comments</span>\n                    </div>\n             \n                <div  style=\"margin-top: 60px; height:50px; margin-left: 0px; \">\n                   \n                      \n                        <form class=\"form-horizontal\" role=\"form\" (submit)=\"onreplySubmit1(displayrepliesOfShare)\">\n                            <textarea *ngIf=\"user\"  class=\"form-control\" type=\"textarea\" name=\"comment\" [(ngModel)]=\"reply\" placeholder=\"{{message}}\" style=\"width: 450px; min-height: 20px; margin-left: -50px;\"></textarea>\n                            <input type=\"submit\" class=\"btn-primary\" value=\"Reply\" style=\"text-align: center;padding-left:-5px; padding-top: -5px; margin-top:10px; width:40px; height: 20px; font-size: 10px; margin-left: 370px; position: absolute; background: green;\">\n                        </form>        \n                        \n                </div>\n                \n            </div>\n    \n            <div style=\"border: 1px solid grey; margin-top: 110px; width: 520px; margin-left: -90px;\"></div>\n    \n            <!-- Replies -->\n    \n            <div *ngFor='let reply of displayrepliesOfShare.replies'>\n                <p style=\"margin-top: 30px;\"><span [routerLink]=\"['/profile', reply.commentor._id]\" class=\"btn\" style=\"color: rgb(61, 137, 236);\">{{reply.commentor.username}} :</span> {{reply.content}}</p><br>\n                <p class=\"date\">{{ stringAsDate(reply.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n                <div *ngIf='infoDisp[reply._id]' class=\"infdsplay\">\n                    <p>{{content}}</p>\n    \n                </div>\n                <!-- Action box -->\n                <div (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('like', reply)\"  style=\"display: inline-block; position: absolute; margin-left: 200px;\" >\n                    <span (click)=\"onclickLikeReply(displayrepliesOfShare, reply)\" class=\"btn\"><i class=\"fa fa-heart blue\"></i> </span><span (click)=\"displayWhoLikes(reply)\"style=\"margin-left: 10px; color: blue;\" class=\"btn\">{{reply.likes.length}} likes</span>\n                    <span *ngFor='let like of reply.likes'><i *ngIf='like._id === user._id' class=\"fa fa-heart red btn\" style=\"position: absolute; margin-left:-127px; z-index: 5;\" (click)=\"onclickLikeReply(displayrepliesOfShare, reply)\"></i></span>\n                </div>\n                <div *ngIf=\"user._id === reply.commentor._id\" (click)=\"deleteReply(displayrepliesOfShare, reply)\"  style=\"display: inline-block; position: absolute; margin-left: 350px;\" (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('delete', reply)\" >\n                    <p> <span class=\"btn\" ><i class=\"fa fa-trash\" style=\"color: rgb(53, 85, 121);\"></i></span></p>\n                </div>\n    \n                <div style=\"border: 1px solid rgb(163, 162, 162); margin-top: 110px; width: 440px; margin-left: -50px;\"></div>\n            </div>\n            \n        </div>\n    \n    </div>\n    \n    <!-- Likes display  -->\n    \n    <div *ngIf=\"wholeLikes\" class=\"modal4\">\n            <span  (click)=\"removeLikesBox()\" style=\"font-size: 40px; margin-left: 900px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n           <div *ngIf=\"user\" class=\"modal-content1\" style=\"min-height: 500px; padding-left: 50px; padding-top: 30px; padding-bottom: 100px; background: rgb(242, 244, 245); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 350px; z-index: 5;\" >\n                <div *ngFor='let liker of wholeLikes.likes'>\n                    <div style=\"border-top: 1px solid rgb(53, 53, 53); border-bottom: 1px solid rgb(53, 53, 53); padding-top: 20px; padding-bottom: 20px;\">\n                            <div  [routerLink]=\"['/profile', liker._id]\" style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                            <img *ngIf='!liker.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                            <img *ngIf='liker.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{liker.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n                        </div>\n                        <h3  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 50px; font-weight: bold; \" [routerLink]=\"['/profile', liker._id]\">{{liker.username}}</h3>\n                        <div *ngIf='user._id != liker._id'>\n                                <span *ngIf=\"!liker.followers.includes(user._id)\" class=\"btn\"  style=\"position: absolute; margin-top: -40px; margin-left: 350px; z-index: 5;\"><i (click)=\"onclickletsFollow1(liker, wholeLikes)\">  Follow</i> </span>\n                                <span *ngIf=\"liker.followers.includes(user._id)\" class=\"btn\" style=\"position: absolute; margin-top: -40px; margin-left: 350px; background: rgb(178, 243, 178); z-index: 5;\"> <i (click)=\"onclickletsUnfollow1(liker, wholeLikes)\">  Following</i></span>\n                    </div>\n                    </div>\n                    \n                </div>    \n               \n           </div>\n    </div>\n\n\n    <!-- Followers and Followings -->\n    <div *ngIf=\"myFollowers\" class=\"modal1\">\n        \n            <span  (click)=\"removeFollowersBox()\" style=\"font-size: 40px; margin-left: 900px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n           <div *ngIf=\"user\" class=\"modal-content1\" style=\"min-height: 500px; padding-left: 50px; padding-top: 30px; padding-bottom: 100px; background: rgb(242, 244, 245); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 350px; z-index: 5;\" >\n                <div *ngFor='let follower of myFollowers.followers'>\n                        <h3>Followers</h3>\n                    <div style=\"border-top: 1px solid rgb(53, 53, 53); border-bottom: 1px solid rgb(53, 53, 53); padding-top: 20px; padding-bottom: 20px;\">\n                            <div  [routerLink]=\"['/profile', follower._id]\" style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                            <img *ngIf='!follower.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                            <img *ngIf='follower.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{follower.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n                        </div>\n                        <h3  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 50px; font-weight: bold; \" [routerLink]=\"['/profile', follower._id]\">{{follower.username}}</h3>\n                        \n                                <span *ngIf=\"!follower.followers.includes(user._id)\" class=\"btn\"  style=\"position: absolute; margin-top: -40px; margin-left: 350px; z-index: 5;\"><i (click)=\"onclickletsFollow(follower)\">  Follow</i> </span>\n                                <span *ngIf=\"follower.followers.includes(user._id)\" class=\"btn\" style=\"position: absolute; margin-top: -40px; margin-left: 350px; background: rgb(178, 243, 178); z-index: 5;\"> <i (click)=\"onclickletsUnfollow(follower)\">  Following</i></span>\n                    \n                    </div>\n                    \n                </div>    \n               \n           </div>\n    </div>\n    <div *ngIf=\"myFollowings\" class=\"modal1\">\n            \n            <span  (click)=\"removeFollowersBox()\" style=\"font-size: 40px; margin-left: 900px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n           <div *ngIf=\"user\" class=\"modal-content1\" style=\"min-height: 500px; padding-left: 50px; padding-top: 30px; padding-bottom: 100px; background: rgb(242, 244, 245); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 350px; z-index: 5;\" >\n                <h3>Follows</h3>\n                <div *ngFor='let follower of myFollowings.followings'>\n                    <div style=\"border-top: 1px solid rgb(53, 53, 53); border-bottom: 1px solid rgb(53, 53, 53); padding-top: 20px; padding-bottom: 20px;\">\n                            <div  [routerLink]=\"['/profile', follower._id]\" style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                            <img *ngIf='!follower.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                            <img *ngIf='follower.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{follower.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n                        </div>\n                        <h3  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 50px; font-weight: bold; \" [routerLink]=\"['/profile', follower._id]\">{{follower.username}}</h3>\n                        \n                                <span *ngIf=\"!follower.followers.includes(user._id)\" class=\"btn\"  style=\"position: absolute; margin-top: -40px; margin-left: 350px; z-index: 5;\"><i (click)=\"onclickletsFollow2(follower)\">  Follow</i> </span>\n                                <span *ngIf=\"follower.followers.includes(user._id)\" class=\"btn\" style=\"position: absolute; margin-top: -40px; margin-left: 350px; background: rgb(178, 243, 178); z-index: 5;\"> <i (click)=\"onclickletsUnfollow2(follower)\">  Following</i></span>\n                    \n                    </div>\n                    \n                </div>    \n               \n           </div>\n    </div>\n    \n<div *ngIf=\"myReplies\" class=\"modal1\">\n        <span  (click)=\"removemyrepliesBox()\" style=\"font-size: 40px; margin-left: 920px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n          <!-- Main Share Window -->\n    <div *ngIf=\"myReplies\" class=\"modal-content2\" style=\"min-height: 500px; padding-left: 50px; padding-top: 30px; padding-bottom: 100px; background: rgb(242, 244, 245); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 150px; z-index: 1;\" >\n        <div *ngFor=\"let reply of my_replies\">\n            <h3 style=\"font-size:15px; font-family: fantasy;\">Reply to:</h3>\n            <div   style=\"width: 360px;max-height:300px; padding-top: 30px; background: rgb(242, 244, 245); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195); margin-left: 50px; margin-top: 5px; padding-left: 30px; padding-right: 30px;\">\n                <div class=\"a\" (click)=\"displayReplies(reply.gottin)\" style=\"width: 220px; margin-left: 100px; height: 50px; position: absolute; margin-top:-20px;\" >\n    \n                </div>\n                <!-- Profile Photo Box -->\n    \n                <div  class=\"a\" [routerLink]=\"['/profile', reply.gottin.user._id]\"  (click)=\"removemyrepliesBox()\" style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                    <img *ngIf='!reply.gottin.user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                    <img *ngIf='reply.gottin.user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{reply.gottin.user.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n                </div>\n                <!-- Second Share box -->\n    \n                <div style=\"width: 240px;  display: inline-block;  margin-left: 50px; \">\n                    <!-- UserName Window -->\n                    <div class=\"a\" style=\" width: 50px; height:30px;\" (mouseleave) =\"mouseLeave()\">\n                        <h3 class=\"a\" (mouseenter) =\"mouseEnter(reply.gottin) \" style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 5px; font-weight: bold; \" ><span [routerLink]=\"['/profile', reply.gottin.user._id]\"  (click)=\"removemyrepliesBox()\">{{reply.gottin.user.username}}</span></h3>\n                        \n                        <!-- Profile popup window -->\n    \n                        <div *ngIf='profileShow[reply.gottin._id]' class=\"profile-display\" (mouseleave) =\"mouseLeave()\" style=\"z-index: 4;\">\n                            <div class=\"text-center\"[routerLink]=\"['/profile',reply.gottin.user._id]\" (click)=\"removemyrepliesBox()\">\n                                <img *ngIf='!reply.gottin.user.ProfilePhoto'style=\" width:50px; height: 50px;\"  src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                                <img *ngIf='reply.gottin.user.ProfilePhoto'style=\" width:50px; height: 50px;\"  src=\"{{reply.gottin.user.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">            \n                            </div>\n                            <div class=\"header1\"[routerLink]=\"['/profile',reply.gottin.user._id]\">\n                                <h1 *ngIf=\"user\" style=\"font-size: 20px; font-weight: bold;\">{{reply.gottin.user.username}}</h1>                \n                            </div>\n                            <div class=\"info1\"[routerLink]=\"['/profile',reply.gottin.user._id]\">\n                                <p *ngIf=\"user\">{{reply.gottin.user.info}}</p>\n                            </div>\n                            <div *ngIf='user._id != reply.gottin.user._id'  style=\"position: absolute; z-index: 4;\">\n                                <button *ngIf=\"!reply.gottin.user.followers.includes(user._id)\" (click)=\"onFollow2(reply.gottin)\" style=\"z-index: 4;\" >Follow</button>\n                                <button *ngIf=\"reply.gottin.user.followers.includes(user._id)\" (click)=\"onUnFollow2(reply.gottin)\" style=\" background: rgb(178, 243, 178);\">Following</button>\n                            </div>\n                        </div>\n    \n                    </div>\n                    <!-- ShareBox -->\n                \n                        <div  *ngIf='reply.gottin.urla' style=\"width: 140px; height: 100px; overflow: hidden;\" class=\"a\">\n                            <img id=\"myImg\" class=\"{{reply.gottin.imageclass}}\" src=\"{{reply.gottin.urla}}\" style=\"width: 100px; margin-top: 5px; margin-bottom: 15px;\" alt=\"{{reply.gottin.comment}}\" >\n                        </div>\n                    \n                        <div class=\"a\" style=\"margin-top: 20px;\" (click)=\"displayReplies(share)\">\n                            <p class=\"a\" style=\"margin-left: 20px;\">{{reply.gottin.comment}}</p>\n                            <p class=\"date\">{{ stringAsDate(reply.gottin.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n                        </div>\n            \n                </div>\n            </div>\n            <div *ngIf='user'  style=\"width: 460px;max-height:300px; padding-top: 30px; background: rgb(242, 244, 245);  margin-left: 50px; margin-top: 5px; padding-left: 30px; padding-right: 30px;\">\n\n              \n                    <p style=\"margin-top: 30px;\"><span [routerLink]=\"['/profile', reply.commentor._id]\" class=\"btn\" style=\"color: rgb(61, 137, 236);\">{{reply.commentor.username}} :</span> {{reply.content}}</p><br>\n                        <p class=\"date\">{{ stringAsDate(reply.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n                    <div *ngIf='infoDisp[reply._id]' class=\"infdsplay\">\n                        <p>{{content}}</p>\n                \n                    </div>\n                            <!-- Action box -->\n                    <div (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('like', reply)\"  style=\"display: inline-block; position: absolute; margin-left: 200px;\" >\n                        <span (click)=\"onclickLikeReply10(reply)\" class=\"btn\"><i class=\"fa fa-heart blue\"></i> </span><span (click)=\"displayWhoLikes(reply)\"style=\"margin-left: 10px; color: blue;\" class=\"btn\">{{reply.likes.length}} likes</span>\n                        <span *ngFor='let like of reply.likes'><i *ngIf='like._id === user._id' class=\"fa fa-heart red btn\" style=\"position: absolute; margin-left:-127px; z-index: 1;\" (click)=\"onclickLikeReply10(reply)\"></i></span>\n                    </div>\n                    <div *ngIf=\"user._id === reply.commentor._id\" (click)=\"deleteReply10(reply)\"  style=\"display: inline-block; position: absolute; margin-left: 350px;\" (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('delete', reply)\" >\n                        <p> <span class=\"btn\" ><i class=\"fa fa-trash\" style=\"color: rgb(53, 85, 121);\"></i></span></p>\n                    </div>\n                \n                <div style=\"border: 1px solid rgb(231, 239, 241); margin-top: 110px; width: 440px; margin-left: -50px;\"></div>\n                        \n            </div>\n                    \n       \n        </div>\n       \n      \n    </div>\n    \n</div>\n    \n        \n   \n\n\n"

/***/ }),

/***/ "./src/app/components/profile/show-profile/show-profile.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/profile/show-profile/show-profile.component.ts ***!
  \***************************************************************************/
/*! exports provided: ShowProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowProfileComponent", function() { return ShowProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_shares_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/shares.service */ "./src/app/services/shares.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ShowProfileComponent = /** @class */ (function () {
    function ShowProfileComponent(_router, _route, _httpService, _validateService, _authService, _flashMessagesService, _locationService, _shareService, _usersService, _storage, db) {
        this._router = _router;
        this._route = _route;
        this._httpService = _httpService;
        this._validateService = _validateService;
        this._authService = _authService;
        this._flashMessagesService = _flashMessagesService;
        this._locationService = _locationService;
        this._shareService = _shareService;
        this._usersService = _usersService;
        this._storage = _storage;
        this.db = db;
        this.showSpinner = true;
        this.displayCommentbox = {};
        this.profileShow = {};
        this.infoDisp = {};
        this.normala = 'normal';
        this.loading = null;
        this.myReplies = null;
        this.basePath = "/";
    }
    ShowProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this._router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this._router.navigated = false;
                window.scrollTo(0, 0);
            }
        });
        this._authService.getProfile().subscribe(function (profile) {
            _this.user = profile['user'];
            console.log(_this.user);
            _this.getMyShares();
            _this.bringMyReplies();
        }, function (err) {
            return false;
        });
        this.selectedImg;
        this.userax;
        this.selectedImg;
        this.userax;
        this.content;
        this.infoDisp;
        this.profileShow;
        this.displayrepliesOfShare;
        this.wholeLikes;
        this.myFollowers;
        this.myFollowings;
        this.my_replies;
        // this.getUserLocation();
        // this.show;
        // console.log(this.show);
        // this.check;
    };
    // Display my Replies
    ShowProfileComponent.prototype.displayMyReplies = function () {
        this.myReplies = true;
    };
    ShowProfileComponent.prototype.removemyrepliesBox = function () {
        this.myReplies = null;
    };
    // Data-Time------
    ShowProfileComponent.prototype.stringAsDate = function (dateStr) {
        return new Date(dateStr);
    };
    ShowProfileComponent.prototype.imgToShow = function (share) {
        this.selectedImg = share;
    };
    ShowProfileComponent.prototype.selectedImgNull = function () {
        this.selectedImg = null;
    };
    ShowProfileComponent.prototype.getMyShares = function () {
        var _this = this;
        var observable1 = this._usersService.getanUser(this.user._id);
        observable1.subscribe(function (data) {
            _this.shares = data['shares'];
        });
    };
    // after clicking on the share
    ShowProfileComponent.prototype.displayReplies = function (share) {
        this.displayrepliesOfShare = share;
    };
    // closing single share
    ShowProfileComponent.prototype.removeReplyBox = function () {
        this.displayrepliesOfShare = null;
        this.getMyShares();
        this.bringMyReplies();
    };
    // Displaying who likes----------------------
    ShowProfileComponent.prototype.displayWhoLikes = function (share) {
        this.wholeLikes = share;
    };
    ShowProfileComponent.prototype.removeLikesBox = function () {
        this.wholeLikes = null;
    };
    ShowProfileComponent.prototype.bringOneShare1 = function (id) {
        var _this = this;
        var observable = this._shareService.aShare(id);
        observable.subscribe(function (data) {
            var sharez = data;
            _this.wholeLikes = sharez;
            //  this.sortArray(this.users);
        });
    };
    ShowProfileComponent.prototype.displayMeaning = function (info, share) {
        var _this = this;
        this.content = '' + info + '!';
        Object.keys(this.infoDisp).forEach(function (h) {
            _this.infoDisp[h] = false;
        });
        this.infoDisp[share._id] = true;
    };
    ShowProfileComponent.prototype.displayMea = function () {
        var _this = this;
        Object.keys(this.infoDisp).forEach(function (h) {
            _this.infoDisp[h] = false;
        });
    };
    // DELETE A Share
    // Delete Sahare
    ShowProfileComponent.prototype.deleteShare = function (share) {
        var _this = this;
        if (share.img) {
            this.deleteFileStorage(share.img);
            var observable = this._shareService.deleteShare(this.user._id, share);
            observable.subscribe(function (data) {
                _this.getMyShares();
                _this.bringMyReplies();
            });
        }
        else {
            var observable = this._shareService.deleteShare(this.user._id, share);
            observable.subscribe(function (data) {
                _this.getMyShares();
                _this.bringMyReplies();
            });
        }
    };
    // Deleting Share while share-display open
    ShowProfileComponent.prototype.deleteShare1 = function (share) {
        var _this = this;
        if (share.img) {
            this.deleteFileStorage(share.img);
            var observable = this._shareService.deleteShare(this.user._id, share);
            observable.subscribe(function (data) {
                _this.removeReplyBox();
                _this.getMyShares();
                _this.bringMyReplies();
            });
        }
        else {
            var observable = this._shareService.deleteShare(this.user._id, share);
            observable.subscribe(function (data) {
                _this.removeReplyBox();
                _this.getMyShares();
                _this.bringMyReplies();
            });
        }
    };
    // REPLY -----
    ShowProfileComponent.prototype.deleteReply = function (share, reply) {
        var _this = this;
        var observable = this._shareService.deleteReply(this.user, reply);
        observable.subscribe(function (data) {
            _this.getMyShares();
            _this.bringOneShare(share._id);
            _this.bringMyReplies();
        });
    };
    ShowProfileComponent.prototype.deleteReply10 = function (reply) {
        var _this = this;
        var observable = this._shareService.deleteReply(this.user, reply);
        observable.subscribe(function (data) {
            _this.getMyShares();
            _this.bringMyReplies();
        });
    };
    // Bring one share 
    ShowProfileComponent.prototype.bringOneShare = function (id) {
        var _this = this;
        var observable = this._shareService.aShare(id);
        observable.subscribe(function (data) {
            _this.sharex = data;
            _this.displayrepliesOfShare = _this.sharex;
        });
    };
    // ADDING a Reply
    ShowProfileComponent.prototype.onreplySubmit = function (share) {
        var _this = this;
        if (!this.reply) {
            this.message = 'You can do better!';
        }
        else {
            var reply1 = {
                content: this.reply
            };
            var observable = this._shareService.replytheShare(share, reply1, this.user);
            observable.subscribe(function (data) {
                _this.reply = '';
                _this.getMyShares();
                _this.hideAddComment(share);
                _this.bringMyReplies();
            });
        }
    };
    // replying from open share box
    ShowProfileComponent.prototype.onreplySubmit1 = function (share) {
        var _this = this;
        if (!this.reply) {
            this.message = 'You can do better!';
        }
        else {
            var reply1 = {
                content: this.reply
            };
            var observable = this._shareService.replytheShare(share, reply1, this.user);
            observable.subscribe(function (data) {
                _this.reply = '';
                _this.bringOneShare(share._id);
                _this.bringMyReplies();
            });
        }
    };
    // Opening Comment box-form
    ShowProfileComponent.prototype.showaddComment = function (share) {
        var _this = this;
        Object.keys(this.displayCommentbox).forEach(function (h) {
            _this.displayCommentbox[h] = false;
        });
        this.displayCommentbox[share._id] = true;
    };
    // hiding comment box-form
    ShowProfileComponent.prototype.hideAddComment = function (share) {
        this.displayCommentbox[share._id] = false;
        this.getMyShares();
        this.bringMyReplies();
    };
    // FOLLOW 
    ShowProfileComponent.prototype.onclickletsUnfollow = function (follower) {
        var _this = this;
        var observable = this._usersService.serviceUnFollow(this.user, follower);
        observable.subscribe(function (data) {
            _this.getMyShares();
            _this.bringMyReplies();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
        this.displayFollowers(this.user);
    };
    ShowProfileComponent.prototype.onclickletsFollow = function (follower) {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user, follower);
        observable.subscribe(function (data) {
            _this.getMyShares();
            _this.bringMyReplies();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
        this.displayFollowers(this.user);
    };
    ShowProfileComponent.prototype.onclickletsUnfollow2 = function (follower) {
        var _this = this;
        var observable = this._usersService.serviceUnFollow(this.user, follower);
        observable.subscribe(function (data) {
            _this.getMyShares();
            _this.bringMyReplies();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
        this.displayFollowings(this.user);
    };
    ShowProfileComponent.prototype.onclickletsFollow2 = function (follower) {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user, follower);
        observable.subscribe(function (data) {
            _this.getMyShares();
            _this.bringMyReplies();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
        this.displayFollowings(this.user);
    };
    ShowProfileComponent.prototype.onclickletsUnfollow1 = function (follower, share) {
        var _this = this;
        var observable = this._usersService.serviceUnFollow(this.user, follower);
        observable.subscribe(function (data) {
            _this.getMyShares();
            _this.bringMyReplies();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
        var observable1 = this._shareService.aShare(share._id);
        observable1.subscribe(function (data) {
            var sharez = data;
            _this.wholeLikes = sharez;
        });
    };
    ShowProfileComponent.prototype.onclickletsFollow1 = function (follower, share) {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user, follower);
        observable.subscribe(function (data) {
            _this.getMyShares();
            _this.bringMyReplies();
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
            });
        });
        var observable1 = this._shareService.aShare(share._id);
        observable1.subscribe(function (data) {
            var sharez = data;
            _this.wholeLikes = sharez;
        });
    };
    // Dashboard Plays
    ShowProfileComponent.prototype.getShares = function (decleration) {
        var _this = this;
        if (decleration === 'my_dashboard') {
            this.my_shares = false;
        }
        else if (decleration === '_bests') {
            this.my_shares = false;
        }
        else if (decleration === 'my_shares') {
            this.my_shares = true;
            var observable1 = this._shareService.myShares(this.user);
            observable1.subscribe(function (data) {
                _this.shares = data['shares'];
            });
        }
    };
    // Profile displays ------------------------
    ShowProfileComponent.prototype.displayFollowers = function (user) {
        var _this = this;
        var observable = this._usersService.getanUser(user._id);
        observable.subscribe(function (data) {
            _this.myFollowers = data['user'];
        });
    };
    ShowProfileComponent.prototype.removeFollowersBox = function () {
        this.myFollowers = null;
        this.myFollowings = null;
    };
    ShowProfileComponent.prototype.displayFollowings = function (user) {
        var _this = this;
        var observable = this._usersService.getanUser(user._id);
        observable.subscribe(function (data) {
            _this.myFollowings = data['user'];
        });
    };
    // LIKE=========
    // Liking reply ==
    ShowProfileComponent.prototype.onclickLikeReply = function (share, reply) {
        var _this = this;
        var counter = 0;
        for (var i = 0; i < reply.likes.length; i++) {
            if (reply.likes[i]._id === this.user._id) {
                counter = counter + 1;
            }
            else {
                continue;
            }
        }
        if (counter > 0) {
            var observable = this._shareService.dislikeReply(this.user, reply);
            observable.subscribe(function (data) {
                _this.getMyShares();
                _this.bringOneShare(share._id);
                _this.bringMyReplies();
            });
        }
        else {
            var observable = this._shareService.likeReply(this.user, reply);
            observable.subscribe(function (data) {
                _this.getMyShares();
                _this.bringOneShare(share._id);
                _this.bringMyReplies();
            });
        }
    };
    ShowProfileComponent.prototype.onclickLikeReply10 = function (reply) {
        var _this = this;
        var counter = 0;
        for (var i = 0; i < reply.likes.length; i++) {
            if (reply.likes[i]._id === this.user._id) {
                counter = counter + 1;
            }
            else {
                continue;
            }
        }
        if (counter > 0) {
            var observable = this._shareService.dislikeReply(this.user, reply);
            observable.subscribe(function (data) {
                _this.getMyShares();
                _this.bringMyReplies();
            });
        }
        else {
            var observable = this._shareService.likeReply(this.user, reply);
            observable.subscribe(function (data) {
                _this.getMyShares();
                _this.bringMyReplies();
            });
        }
    };
    //  Like from Dashboard
    ShowProfileComponent.prototype.onclickLike = function (share) {
        var _this = this;
        var counter = 0;
        for (var i = 0; i < share.likes.length; i++) {
            if (share.likes[i]._id === this.user._id) {
                counter = counter + 1;
            }
            else {
                continue;
            }
        }
        if (counter > 0) {
            var observable = this._shareService.dislikeFromService(share, this.user);
            observable.subscribe(function (data) {
                _this.getMyShares();
                _this.bringMyReplies();
            });
        }
        else {
            var observable = this._shareService.likeFromService(share, this.user);
            observable.subscribe(function (data) {
                _this.getMyShares();
                _this.bringMyReplies();
            });
        }
    };
    // REPLY
    //  all replies- only for testing
    ShowProfileComponent.prototype.bringAllReplies = function () {
        var observable = this._shareService.allReplies();
        observable.subscribe(function (data) {
        });
    };
    ShowProfileComponent.prototype.bringMyReplies = function () {
        var _this = this;
        var observable = this._shareService.myReplies(this.user);
        observable.subscribe(function (data) {
            _this.my_replies = data;
            console.log(_this.my_replies);
        });
    };
    // getUserLocation(){
    //   if(navigator.geolocation){
    //     navigator.geolocation.getCurrentPosition(position =>{
    //       this.lat = position.coords.latitude;
    //       this.lng = position.coords.longitude;
    //     });
    //     this.location = ''+this.lat+' '+this.lng;
    //     this.user.location = this.location;
    //     console.log(this.location);
    //     let observable = this._locationService.updateUserLocation(this.user);
    //     observable.subscribe(data => {
    //       if(data['success']){
    //         this._flashMessagesService.show("success!", {cssClass:'alert-success', timeout: 4000});
    //         this._router.navigate(['/profile']);
    //       }
    //     });
    //   }
    // }
    // locationchange(){
    //   if(!this.user.allowed){
    //     this.user.allowed = 'on';
    //     this.show = 'enable';
    //     this.check = 'off';
    //     navigator.geolocation.getCurrentPosition(position =>{
    //       this.lat = position.coords.latitude;
    //       this.lng = position.coords.longitude;
    //     });
    //     this.location = ''+this.lat+' '+this.lng;
    //     this.user.location = this.location;
    //     let observable = this._locationService.updateUserLocation(this.user);
    //     observable.subscribe(data => {
    //       if(data['success']){
    //         this._router.navigate(['/profile']);
    //       }
    //     });
    //   }else if(this.user.allowed === 'on'){
    //     this.user.allowed = 'off';
    //     this.show = 'disable';
    //     this.check = 'on';
    //     let observable = this._locationService.updateUserLocation(this.user);
    //     observable.subscribe(data => {
    //       if(data['success']){
    //         this._router.navigate(['/profile']);
    //       }
    //     });
    //   }else{
    //     this.show = 'enable';
    //     this.check = 'off';
    //     this.user.allowed = 'on';
    //     navigator.geolocation.getCurrentPosition(position =>{
    //       this.lat = position.coords.latitude;
    //       this.lng = position.coords.longitude;
    //     });
    //     this.location = ''+this.lat+' '+this.lng;
    //     this.user.location = this.location;
    //     let observable = this._locationService.updateUserLocation(this.user);
    //     observable.subscribe(data => {
    //       if(data['success']){
    //         this._router.navigate(['/profile']);
    //       }
    //     });
    //   }
    // }
    // Showing profile box
    ShowProfileComponent.prototype.mouseEnter = function (share) {
        var _this = this;
        var observable = this._usersService.getanUser(share.user_id);
        observable.subscribe(function (data) {
            _this.userax = data['user'];
            //  this.sortArray(this.users);
        });
        Object.keys(this.profileShow).forEach(function (h) {
            _this.profileShow[h] = false;
        });
        this.profileShow[share._id] = true;
    };
    ShowProfileComponent.prototype.mouseLeave = function () {
        var _this = this;
        Object.keys(this.profileShow).forEach(function (h) {
            _this.profileShow[h] = false;
        });
    };
    // removing picture from firebase
    ShowProfileComponent.prototype.deleteFileStorage = function (name) {
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_9__["storage"]().ref();
        storageRef.child(this.basePath + "/" + name).delete();
    };
    ShowProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-profile',
            template: __webpack_require__(/*! ./show-profile.component.html */ "./src/app/components/profile/show-profile/show-profile.component.html"),
            styles: [__webpack_require__(/*! ./show-profile.component.css */ "./src/app/components/profile/show-profile/show-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"],
            _services_shares_service__WEBPACK_IMPORTED_MODULE_7__["SharesService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorage"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabase"]])
    ], ShowProfileComponent);
    return ShowProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/users-profile/users-profile.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/profile/users-profile/users-profile.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containera{\n    width: 200px;\n    height: 350px;\n    /* border: 1px solid black; */\n    margin-left: 25px;\n    padding: 10px;\n    background: linear-gradient(#eae8ee, #a9d1eb, #eae8ee);\n    /* text-align: center; */\n    display: inline-block;\n    position: fixed;\n    margin-top: 0px;\n\n}\n\n.header{\n    width: 180px;\n    height: 30px;\n    margin-top: 10px;\n    /* padding-left: 5px; */\n    text-align: center;\n    background: linear-gradient(#eaeeed, #8dccf7, #eaeeed);\n    color: rgba(67, 64, 64, 0.933);\n  \n}\n\n.contenta{\n    width: 100%;\n    height: 200px;\n\n   margin-top: 200px;\n    margin-left: 0;\n \n    display: inline-block;\n    \n   \n}\n\n.info{\n    width: 180px;\n    height: 30px;\n    /* padding-left: 5px; */\n    padding-left: 10%;\n    margin-top: 10px;\n    background: rgb(236, 234, 234);\n    color: rgba(155, 153, 153, 0.933);\n   \n}\n\n.a :hover{\n    cursor: pointer;\n}\n\n.btn{\n    margin-left: 20px;\n}\n\n#myImg:hover {opacity: 0.7;}\n\n.modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    /* overflow: auto;  */\n    background-color: rgba(2, 2, 2, 0.151); /* Fallback color */\n    background-color: rgba(2, 2, 2, 0.151); /* Black w/ opacity */\n}\n\n.modal-content {\n    margin: auto;\n    display: block;\n    width: 30%;\n    max-width: 500px;\n}\n\n#caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n}\n\n.modal-content, #caption {    \n    -webkit-animation-name: zoom;\n    -webkit-animation-duration: 0.6s;\n    animation-name: zoom;\n    animation-duration: 0.6s;\n}\n\n@-webkit-keyframes zoom {\n    from {-webkit-transform:scale(0)} \n    to {-webkit-transform:scale(1)}\n}\n\n@keyframes zoom {\n    from {-webkit-transform:scale(0);transform:scale(0)} \n    to {-webkit-transform:scale(1);transform:scale(1)}\n}\n\n.close {\n    position: absolute;\n    top: 80px;\n    right: 35px;\n    color: #474444;\n    font-size: 30px;\n    font-weight: bold;\n    transition: 0.3s;\n}\n\n.close:hover,\n.close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 700px){\n    .modal-content {\n        width: 100%;\n    }\n}\n\n#myImg {\n    border-radius: 5px;\n    cursor: pointer;\n    transition: 0.3s;\n}\n\n.contenta{\n    width: 100%;\n    height: 200px;\n\n   margin-top: 200px;\n    margin-left: 0;\n \n    display: inline-block;\n    \n   \n}\n\n.date{\n    font-size: 10px;\n    color: rgb(99, 59, 245);\n}\n\n.info1{\n    width: 180px;\n    height: 30px;\n    /* padding-left: 5px; */\n    text-align: center;\n    background: rgb(236, 234, 234);\n    color: rgba(133, 125, 125, 0.933);\n   \n}\n\n.a :hover{\n    cursor: pointer;\n}\n\n.btn{\n    margin-left: 20px;\n}\n\n#myImg:hover {opacity: 0.7;}\n\n.modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    /* overflow: auto; */\n    background-color: rgba(0, 0, 0, 0.76); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.76); /* Black w/ opacity */\n}\n\n.modal1 {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    padding-left: 100px;\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.473); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.473); /* Black w/ opacity */\n    z-index: 1;\n}\n\n.modal-content {\n    margin: auto;\n    display: block;\n    width: 30%;\n    max-width: 500px;\n}\n\n.modal-content1 {\n    display: block;\n    width: 45%;\n}\n\n#caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: rgb(255, 254, 254);\n    padding: 10px 0;\n    height: 150px;\n    z-index: 2;\n}\n\n.modal-content, #caption {    \n    -webkit-animation-name: zoom;\n    -webkit-animation-duration: 0.6s;\n    animation-name: zoom;\n    animation-duration: 0.6s;\n}\n\n@-webkit-keyframes zoom {\n    from {-webkit-transform:scale(0)} \n    to {-webkit-transform:scale(1)}\n}\n\n@keyframes zoom {\n    from {-webkit-transform:scale(0);transform:scale(0)} \n    to {-webkit-transform:scale(1);transform:scale(1)}\n}\n\n.close {\n    position: absolute;\n    top: 100px;\n    right: 300px;\n    color: #f1f1f1;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n}\n\n.close:hover,\n.close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 700px){\n    .modal-content {\n        width: 100%;\n    }\n}\n\n#myImg {\n    border-radius: 5px;\n    cursor: pointer;\n    transition: 0.3s;\n}\n\n.profile-display{\n    width: 200px;\n    min-height: 200px;\n    padding-top: 10px;\n    padding-left: 10px;\n    margin-top: 0;\n    display: block;\n    background: rgb(240, 235, 235);\n    position: absolute;\n    z-index: 1;\n    box-shadow: 0 0 10px rgb(129, 129, 129);\n}\n\n.infdsplay{\n    width: 100px;\n    background: rgb(116, 114, 114);\n    color: white;\n    padding-top: 5px;\n    padding-left: 20px;\n    margin-left: 30px;margin-top: -30px;\n    font-size: 10px;\n    display: block;\n    position: absolute;\n    border-radius: 5px;\n}\n\n.blue{\n    color: rgb(116, 114, 114);\n    font-size: 20px;\n}\n\n.red{\n    color: red;\n    font-size: 20px;\n}\n\n.comment-form{\n    box-shadow: 0 0 10px rgb(129, 129, 129);\n\n}\n\n.blur {-webkit-filter: blur(4px);filter: blur(4px);}\n\n.brightness {-webkit-filter: brightness(250%);filter: brightness(250%);}\n\n.contrast {-webkit-filter: contrast(180%);filter: contrast(180%);}\n\n.grayscale {-webkit-filter: grayscale(100%);filter: grayscale(100%);}\n\n.huerotate {-webkit-filter: hue-rotate(180deg);filter: hue-rotate(180deg);}\n\n.invert {-webkit-filter: invert(100%);filter: invert(100%);}\n\n.opacity {-webkit-filter: opacity(50%);filter: opacity(50%);}\n\n.saturate {-webkit-filter: saturate(7); filter: saturate(7);}\n\n.sepia {-webkit-filter: sepia(100%);filter: sepia(100%);}\n\n.shadow {-webkit-filter: drop-shadow(8px 8px 10px green);filter: drop-shadow(8px 8px 10px green);}"

/***/ }),

/***/ "./src/app/components/profile/users-profile/users-profile.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/profile/users-profile/users-profile.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containera\">\n    <div class=\"text-center\" *ngIf=\"user\">\n        <img *ngIf='!user.ProfilePhoto'style=\" width:150px; height: 150px;\"  src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n        <img *ngIf='user.ProfilePhoto'style=\" width:150px; height: 150px;\"  src=\"{{user.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n                \n    </div>\n    <div class=\"header\">\n                    <!-- <h1 *ngIf=\"user\">{{user.first_name[0].toUpperCase()+user.first_name.slice(1)}} {{user.last_name[0].toUpperCase()+user.last_name.slice(1)}}</h1> -->\n        <h1  style=\"font-size: 20px;\">{{user.username}}</h1>\n                    \n    </div>\n    <div class=\"info\">\n         <p *ngIf=\"user\"  style=\"font-size: 12px;\"><span *ngIf='!user.info'>about</span>{{user.info}}</p>\n    </div><br>\n    <div *ngIf='user'  >\n        <h3 style=\"font-size: 15px;\" (click)=\"displayFollowers(user)\" >Followers : {{user.followers.length}}</h3>\n        <h3 style=\"font-size: 15px;\" (click)=\"displayFollowings(user)\">Following : {{user.followings.length}}</h3>\n        <h3 style=\"font-size: 15px;\"  >Posts : {{shares.length}}</h3>\n    </div>\n    <div *ngIf='user._id != user1._id' style=\"padding-top: 20px; \">\n        <button *ngIf=\"!user1.followings.includes(user._id)\" (click)=\"onclickletsFollow3()\" >Follow</button>\n        <button *ngIf=\"user1.followings.includes(user._id)\" (click)=\"onclickletsUnfollow3()\" style=\" background: rgb(178, 243, 178);\">Following</button>\n    </div>\n</div>\n<div *ngIf=\"shares\" style=\"width: 70%; background: rgb(255, 255, 255); padding-bottom: 200px; margin-left: 300px;\">\n        <div *ngIf='numb > 0' (click)='getUser(user._id)' style=\"width: 660px; text-align: center; padding-top: 30px; padding-bottom: 30px; background: rgb(155, 201, 223); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195); margin-left: 50px; margin-top: 5px; padding-left: 30px; padding-right: 30px;\"> {{numb}} new <span *ngIf='numb === 1'>post</span> <span *ngIf='numb > 1'> posts</span></div>\n        <!-- Main Share Window -->\n        <div *ngFor=\"let share of shares\">\n    \n                <div   style=\"width: 660px; padding-top: 30px; background: rgb(231, 239, 241); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195); margin-left: 50px; margin-top: 5px; padding-left: 30px; padding-right: 30px;\">\n                    <div class=\"a\" (click)=\"displayReplies(share)\" style=\"width: 520px; margin-left: 100px; height: 50px; position: absolute; margin-top:-20px;\" >\n        \n                    </div>\n                    <!-- Profile Photo Box -->\n        \n                    <div  class=\"a\"  style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                        <img *ngIf='!user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                        <img *ngIf='user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{user.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n                    </div>\n                    <!-- Second Share box -->\n        \n                    <div style=\"width: 540px;  display: inline-block;  margin-left: 50px; \">\n                        <!-- UserName Window -->\n                        <div class=\"a\" style=\" width: 100px; height:30px;\" >\n                            <h3 class=\"a\" style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 5px; font-weight: bold; \" >{{user.username}}</h3>\n                            \n                          \n                        <!-- ShareBox -->\n                    \n                            <div (click)=\"imgToShow(share)\" *ngIf='share.urla' style=\"width: 440px; height: 300px; overflow: hidden; padding-left: 80px;\" class=\"a\">\n                                <img id=\"myImg\" class=\"{{share.imageclass}}\" src=\"{{share.urla}}\" style=\"width: 350px; margin-top: 5px; margin-bottom: 15px;\" alt=\"{{share.comment}}\" >\n                            </div>\n                        \n                            <div class=\"a\"  (click)=\"displayReplies(share)\" style=\" width: 340px; padding-top: 20px; padding-bottom: 20px; margin-top: 20px; margin-bottom: 30px;\">\n                                <p class=\"a\" style=\"margin-left: 20px;\">{{share.comment}}</p>\n                                <p class=\"date\">{{ stringAsDate(share.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n                            </div>\n                \n                    </div>\n                </div>\n            <!-- Action Box -->\n\n            <div *ngIf=\"user\" style=\"width: 660px; height:50px;margin-top: 0px; padding-bottom: 20px;  margin-left:-30px;  background: rgb(242, 244, 245); margin-top: 30px;\" >\n                    <div *ngIf='infoDisp[share._id]' class=\"infdsplay\">\n                        <p>{{content}}</p>\n                    </div>\n                    <div (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('like', share)\" (click)=\"onclickLike(share)\" style=\"display: inline-block; position: absolute; margin-left: 250px;\" >\n                        <span class=\"btn\"><i class=\"fa fa-heart blue\"></i> </span><span style=\"margin-left: 10px;\">{{share.likes.length}}</span>\n                        <span *ngFor='let like of share.likes'><i *ngIf='like._id === user1._id' class=\"fa fa-heart red btn\" style=\"position: absolute; margin-left: -65px; margin-top: 0px;\"></i></span>\n                    </div>\n                    <div (mouseenter) =\"displayMeaning('reply', share)\" (click)=\"showaddComment(share)\" (mouseleave)=\"displayMea()\" style=\"display: inline-block; position: absolute; margin-left: 50px;\">\n                        <span class=\"fa fa-commenting-o btn\"  style=\"font-size: 24px; margin-left: 30px; color: rgb(86, 201, 230); z-index: 1;\"></span>\n                    </div>\n                    <div  style=\"position: absolute; margin-left: 120px; \">\n                        <span class=\"btn\" >{{share.replies.length}}</span>\n                    </div>\n                    <!-- Hidden Reply -->\n                <div *ngIf=\"displayCommentbox[share._id]\" style=\"margin-top: 0px; height:100%; width: 100%; margin-left: 0px; z-index: 5; position: absolute;\" >\n                    <div style=\"width: 400px;  background: rgb(242, 244, 245); border: 20px solid rgb(242, 244, 245); \" class=\"comment-form\">\n                        <span (click)=\"hideAddComment(share)\"><i class=\"fa fa-close\" style=\"font-size: 10px;\"></i></span>\n                        <form class=\"form-horizontal\" role=\"form\" (submit)=\"onreplySubmit(share)\">\n                            <textarea *ngIf=\"user\"  class=\"form-control\" type=\"textarea\" name=\"comment\" [(ngModel)]=\"reply\" placeholder=\"{{message}}\" style=\"width: 300px; min-height: 30px;\"></textarea>\n                            <input type=\"submit\" class=\"btn-primary\" value=\"Reply\" style=\"text-align: center;padding-left:-5px; padding-top: -5px; margin-top:-40px; width:40px; height: 20px; font-size: 10px; margin-left: 320px; position: absolute; background: green;\">\n                        </form>        \n                    </div>      \n                </div>\n            </div>\n        </div>      \n    </div>\n</div>\n<div class=\"contenta\">\n    \n</div>\n\n<!-- Image display -->\n\n\n<div *ngIf=\"selectedImg\"id=\"myModal\" (click)=\"selectedImgNull()\" class=\"modal\">\n    <img class=\"modal-content {{selectedImg.imageclass}}\" id=\"img01\" src=\"{{selectedImg.urla}}\">\n    <div class=\"a\" id=\"caption\"><h3  style=\"font-size: 25px; color: rgb(245, 244, 244);  margin-left: 5px; \" [routerLink]=\"['/profile', selectedImg.user._id]\">{{selectedImg.user.username}}</h3><p style=\"color: rgb(192, 190, 190); \">{{selectedImg.comment}}</p></div>\n</div>\n\n<!-- Share and Replies display -->\n\n<div *ngIf=\"displayrepliesOfShare\" class=\"modal1\" >\n        <span  (click)=\"removeReplyBox()\" style=\"font-size: 40px; margin-left: 900px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n            \n        <div *ngIf=\"user\" class=\"modal-content1\" style=\"min-height: 500px; padding-left: 100px; padding-top: 30px; padding-bottom: 100px; z-index: 2; background: rgb(242, 244, 245); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 350px;\">\n            <div   style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute; margin-left: -50px;\">\n                <img *ngIf='!displayrepliesOfShare.user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                <img *ngIf='displayrepliesOfShare.user.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{displayrepliesOfShare.user.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n            </div>\n            <div style=\" width: 100px; height:30px; margin-left: -60px;\">\n                <h3  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 50px; font-weight: bold; \">{{displayrepliesOfShare.user.username}}</h3>\n                <div *ngIf='user1._id != displayrepliesOfShare.user._id'>\n                    <button *ngIf=\"!displayrepliesOfShare.user.followers.includes(user1._id)\" (click)=\"onclickletsFollow4(displayrepliesOfShare)\" style=\"position: absolute; margin-top: -40px; margin-left: 350px;\">Follow</button>\n                    <button *ngIf=\"displayrepliesOfShare.user.followers.includes(user1._id)\" (click)=\"onclickletsUnfollow4(displayrepliesOfShare)\" style=\"position: absolute; margin-top: -40px; margin-left: 350px; background: rgb(178, 243, 178);\">Following</button>\n                </div>\n                \n            </div>\n            <div>\n                <div  *ngIf='displayrepliesOfShare.urla' style=\"width: 440px;  \">\n                    <img id=\"myImg\" class=\"{{displayrepliesOfShare.imageclass}}\" src=\"{{displayrepliesOfShare.urla}}\" style=\"width: 350px; margin-top: 5px; margin-bottom: 15px;\"  >\n                </div>\n                \n                <div style=\"margin-top: 20px; width: 350px;\">\n                    <p style=\"margin-left: 20px;\">{{displayrepliesOfShare.comment}}</p>\n                    <p class=\"date\">{{ stringAsDate(displayrepliesOfShare.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n                </div>\n            </div>\n            <div style=\"border: 1px solid grey; margin-top: 40px; width: 520px; margin-left: -90px;\"></div>\n            <div style=\"width: 400px; height:50px;margin-top:20px; padding-bottom: 20px;  margin-left:-30px;  background:rgb(242, 244, 245); border: 1px solid rgb(242, 244, 245);\" >\n                    <div *ngIf='infoDisp[displayrepliesOfShare._id]' class=\"infdsplay\">\n                        <p>{{content}}</p>\n                    </div>\n                    <div (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('like', displayrepliesOfShare)\"  style=\"display: inline-block; position: absolute; margin-left: 200px;\" >\n                        <span class=\"btn\"><i (click)=\"onclickLike1(displayrepliesOfShare)\"class=\"fa fa-heart blue\"></i> </span><span (click)=\"displayWhoLikes(displayrepliesOfShare)\" class=\"btn\" style=\"margin-left: 10px; color: blue;\">{{displayrepliesOfShare.likes.length}} likes</span>\n                        <span *ngFor='let like of displayrepliesOfShare.likes'><i *ngIf='like._id === user._id' (click)=\"onclickLike1(displayrepliesOfShare)\" class=\"fa fa-heart red btn\" style=\"position: absolute; margin-left:-127px;\"></i></span>\n                    </div>\n                  \n                    \n                    <div  style=\"position: absolute; margin-left: 70px; \">\n                        <span  >{{displayrepliesOfShare.replies.length}} comments</span>\n                    </div>\n             \n                <div  style=\"margin-top: 60px; height:50px; margin-left: 0px; \">\n                   \n                      \n                        <form class=\"form-horizontal\" role=\"form\" (submit)=\"onreplySubmit1(displayrepliesOfShare)\">\n                            <textarea *ngIf=\"user\"  class=\"form-control\" type=\"textarea\" name=\"comment\" [(ngModel)]=\"reply\" placeholder=\"{{message}}\" style=\"width: 450px; min-height: 20px; margin-left: -50px;\"></textarea>\n                            <input type=\"submit\" class=\"btn-primary\" value=\"Reply\" style=\"text-align: center;padding-left:-5px; padding-top: -5px; margin-top:10px; width:40px; height: 20px; font-size: 10px; margin-left: 370px; position: absolute; background: green;\">\n                        </form>        \n                        \n                </div>\n                \n            </div>\n    \n            <div style=\"border: 1px solid grey; margin-top: 110px; width: 520px; margin-left: -90px;\"></div>\n    \n            <!-- Replies -->\n    \n            <div *ngFor='let reply of displayrepliesOfShare.replies'>\n                <p style=\"margin-top: 30px;\"><span [routerLink]=\"['/profile', reply.commentor._id]\" class=\"btn\" style=\"color: rgb(61, 137, 236);\">{{reply.commentor.username}} :</span> {{reply.content}}</p><br>\n                <p class=\"date\">{{ stringAsDate(reply.createdAt) | date:'dd MM yy - HH:mm:ss' }}</p>\n                <div *ngIf='infoDisp[reply._id]' class=\"infdsplay\">\n                    <p>{{content}}</p>\n    \n                </div>\n                <!-- Action box -->\n                <div (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('like', reply)\"  style=\"display: inline-block; position: absolute; margin-left: 200px;\" >\n                    <span (click)=\"onclickLikeReply(displayrepliesOfShare, reply)\" class=\"btn\"><i class=\"fa fa-heart blue\"></i> </span><span (click)=\"displayWhoLikes(reply)\"style=\"margin-left: 10px; color: blue;\" class=\"btn\">{{reply.likes.length}} likes</span>\n                    <span *ngFor='let like of reply.likes'><i *ngIf='like._id === user1._id' class=\"fa fa-heart red btn\" style=\"position: absolute; margin-left:-127px; z-index: 5;\" (click)=\"onclickLikeReply(displayrepliesOfShare, reply)\"></i></span>\n                </div>\n                <div *ngIf=\"user1._id === reply.commentor._id\" (click)=\"deleteReply(displayrepliesOfShare, reply)\"  style=\"display: inline-block; position: absolute; margin-left: 350px;\" (mouseleave)=\"displayMea()\" (mouseenter) =\"displayMeaning('delete', reply)\" >\n                    <p> <span class=\"btn\" ><i class=\"fa fa-trash\" style=\"color: rgb(53, 85, 121);\"></i></span></p>\n                </div>\n    \n                <div style=\"border: 1px solid rgb(163, 162, 162); margin-top: 110px; width: 440px; margin-left: -50px;\"></div>\n            </div>\n            \n        </div>\n    \n    </div>\n        <!-- Likes display  -->\n    \n        <div *ngIf=\"wholeLikes\" class=\"modal1\">\n                <span  (click)=\"removeLikesBox()\" style=\"font-size: 40px; margin-left: 900px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n               <div *ngIf=\"user\" class=\"modal-content1\" style=\"min-height: 500px; padding-left: 50px; padding-top: 30px; padding-bottom: 100px; background: rgb(242, 244, 245); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 350px; z-index: 5;\" >\n                    <div *ngFor='let liker of wholeLikes.likes'>\n                        <div style=\"border-top: 1px solid rgb(53, 53, 53); border-bottom: 1px solid rgb(53, 53, 53); padding-top: 20px; padding-bottom: 20px;\">\n                                <div  [routerLink]=\"['/profile', liker._id]\" style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                                <img *ngIf='!liker.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                                <img *ngIf='liker.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{liker.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n                            </div>\n                            <h3  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 50px; font-weight: bold; \" [routerLink]=\"['/profile', liker._id]\">{{liker.username}}</h3>\n                            <div *ngIf='user1._id != liker._id'>\n                                    <span *ngIf=\"!liker.followers.includes(user1._id)\" class=\"btn\"  style=\"position: absolute; margin-top: -40px; margin-left: 350px; z-index: 5;\"><i (click)=\"onclickletsFollow1(liker, wholeLikes)\">  Follow</i> </span>\n                                    <span *ngIf=\"liker.followers.includes(user1._id)\" class=\"btn\" style=\"position: absolute; margin-top: -40px; margin-left: 350px; background: rgb(178, 243, 178); z-index: 5;\"> <i (click)=\"onclickletsUnfollow1(liker, wholeLikes)\">  Following</i></span>\n                        </div>\n                        </div>\n                        \n                    </div>    \n                   \n               </div>\n        </div>\n    \n    \n        <!-- Followers and Followings -->\n        <div *ngIf=\"myFollowers\" class=\"modal1\">\n                <span  (click)=\"removeFollowersBox()\" style=\"font-size: 40px; margin-left: 900px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n               <div *ngIf=\"user\" class=\"modal-content1\" style=\"min-height: 500px; padding-left: 50px; padding-top: 30px; padding-bottom: 100px; background: rgb(242, 244, 245); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 350px; z-index: 5;\" >\n                    <h3>Followers</h3>\n                    <div *ngFor='let follower of myFollowers.followers'>\n                        <div style=\"border-top: 1px solid rgb(53, 53, 53); border-bottom: 1px solid rgb(53, 53, 53); padding-top: 20px; padding-bottom: 20px;\">\n                                <div  [routerLink]=\"['/profile', follower._id]\" style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                                <img *ngIf='!follower.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                                <img *ngIf='follower.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{follower.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n                            </div>\n                            <h3  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 50px; font-weight: bold; \" [routerLink]=\"['/profile', follower._id]\">{{follower.username}}</h3>\n                                <div *ngIf='user1._id != follower._id'>\n                                    <span *ngIf=\"!follower.followers.includes(user1._id)\" class=\"btn\"  style=\"position: absolute; margin-top: -40px; margin-left: 350px; z-index: 5;\"><i (click)=\"onclickletsFollow(follower)\">  Follow</i> </span>\n                                    <span *ngIf=\"follower.followers.includes(user1._id)\" class=\"btn\" style=\"position: absolute; margin-top: -40px; margin-left: 350px; background: rgb(178, 243, 178); z-index: 5;\"> <i (click)=\"onclickletsUnfollow(follower)\">  Following</i></span>\n                                </div>\n                        </div>\n                        \n                    </div>    \n                   \n               </div>\n        </div>\n        <div *ngIf=\"myFollowings\" class=\"modal1\">\n                <span  (click)=\"removeFollowersBox()\" style=\"font-size: 40px; margin-left: 900px; position: fixed; margin-top: -20px;\"><i class=\"fa fa-close\"></i></span>\n               <div *ngIf=\"user\" class=\"modal-content1\" style=\"min-height: 500px; padding-left: 50px; padding-top: 30px; padding-bottom: 100px; background: rgb(242, 244, 245); border-bottom: 1px solid rgb(199, 195, 195); border-top: 1px solid rgb(199, 195, 195);  margin-top: 5px;  padding-right: 30px;  margin-left: 350px; z-index: 5;\" >\n                    <h3>Follows</h3>\n                    <div *ngFor='let follower of myFollowings.followings'>\n                        <div style=\"border-top: 1px solid rgb(53, 53, 53); border-bottom: 1px solid rgb(53, 53, 53); padding-top: 20px; padding-bottom: 20px;\">\n                                <div  [routerLink]=\"['/profile', follower._id]\" style=\" width: 30px; height: 30px; display: inline-block; margin-top: 30px; position: absolute;\">\n                                <img *ngIf='!follower.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"https://firebasestorage.googleapis.com/v0/b/digmypast-cc2a9.appspot.com/o/Screen%20Shot%202018-06-10%20at%208.37.57%20PM.png?alt=media&token=d887cc05-bb1a-4bca-8910-6b6f73b22994\" class=\"avatar img-circle\" alt=\"avatar\">\n                                <img *ngIf='follower.ProfilePhoto' style=\" width:30px; height: 30px; display: inline-block; margin-top: -40px;\" src=\"{{follower.ProfilePhoto}}\" class=\"avatar img-circle\" alt=\"avatar\">\n                            </div>\n                            <h3  style=\"font-size: 15px; color: rgb(19, 18, 18);  margin-left: 50px; font-weight: bold; \" [routerLink]=\"['/profile', follower._id]\">{{follower.username}}</h3>\n                            <div *ngIf='user1._id != follower._id'>\n                                    <span *ngIf=\"!follower.followers.includes(user1._id)\" class=\"btn\"  style=\"position: absolute; margin-top: -40px; margin-left: 350px; z-index: 5;\"><i (click)=\"onclickletsFollow2(follower)\">  Follow</i> </span>\n                                    <span *ngIf=\"follower.followers.includes(user1._id)\" class=\"btn\" style=\"position: absolute; margin-top: -40px; margin-left: 350px; background: rgb(178, 243, 178); z-index: 5;\"> <i (click)=\"onclickletsUnfollow2(follower)\">  Following</i></span>\n                            </div>\n                        </div>\n                        \n                    </div>    \n                   \n               </div>\n        </div>\n            \n    \n    \n    "

/***/ }),

/***/ "./src/app/components/profile/users-profile/users-profile.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/profile/users-profile/users-profile.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UsersProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersProfileComponent", function() { return UsersProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_shares_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/shares.service */ "./src/app/services/shares.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UsersProfileComponent = /** @class */ (function () {
    function UsersProfileComponent(_router, _route, _httpService, _validateService, _authService, _flashMessagesService, _locationService, _usersService, _shareService) {
        this._router = _router;
        this._route = _route;
        this._httpService = _httpService;
        this._validateService = _validateService;
        this._authService = _authService;
        this._flashMessagesService = _flashMessagesService;
        this._locationService = _locationService;
        this._usersService = _usersService;
        this._shareService = _shareService;
        this.profileShow = {};
        this.infoDisp = {};
        this.displayCommentbox = {};
    }
    UsersProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
            var tempObservable2 = _this._usersService.getanUser(_this.id);
            tempObservable2.subscribe(function (data) {
                _this.user = data['user'];
                _this.shares = data['shares'];
                _this._authService.getProfile().subscribe(function (profile) {
                    _this.user1 = profile['user'];
                    console.log(_this.user1);
                }, function (err) {
                    return false;
                });
                setInterval(function () {
                    var tempObservable2 = _this._usersService.getanUser(_this.id);
                    tempObservable2.subscribe(function (data) {
                        _this.user = data['user'];
                        _this.shares1 = data['shares'];
                        _this.numb = _this.shares1.length - _this.shares.length;
                    });
                }, 5000);
                setInterval(function () {
                    _this.numb;
                }, 5000);
            });
        });
        this.infoDisp;
        this.content;
        this.selectedImg;
        this.profileShow;
        this.userax;
        this.displayrepliesOfShare;
        this.myFollowers;
        this.myFollowings;
        this.wholeLikes;
        // this.getUserLocation();
        // this.show;
        // console.log(this.show);
        // this.check;
    };
    // Data-Time------
    UsersProfileComponent.prototype.stringAsDate = function (dateStr) {
        return new Date(dateStr);
    };
    // DISPLAY MEANING OF ACTION BOX ===============
    UsersProfileComponent.prototype.displayMeaning = function (info, share) {
        var _this = this;
        this.content = '' + info + '!';
        Object.keys(this.infoDisp).forEach(function (h) {
            _this.infoDisp[h] = false;
        });
        this.infoDisp[share._id] = true;
    };
    UsersProfileComponent.prototype.displayMea = function () {
        var _this = this;
        Object.keys(this.infoDisp).forEach(function (h) {
            _this.infoDisp[h] = false;
        });
    };
    // IMG BOX=============================
    UsersProfileComponent.prototype.imgToShow = function (share) {
        this.selectedImg = share;
    };
    UsersProfileComponent.prototype.selectedImgNull = function () {
        this.selectedImg = null;
    };
    // USER ==================================
    UsersProfileComponent.prototype.getUser = function (num) {
        var _this = this;
        var tempObservable2 = this._usersService.getanUser(num);
        tempObservable2.subscribe(function (data) {
            _this.user = data['user'];
            _this.shares = data['shares'];
            _this.numb = 0;
        });
    };
    // ============LIKE==============
    UsersProfileComponent.prototype.onclickLike = function (share) {
        var _this = this;
        var counter = 0;
        for (var i = 0; i < share.likes.length; i++) {
            if (share.likes[i]._id === this.user1._id) {
                counter = counter + 1;
            }
            else {
                continue;
            }
        }
        if (counter > 0) {
            var observable = this._shareService.dislikeFromService(share, this.user1);
            observable.subscribe(function (data) {
                _this.getUser(_this.id);
            });
        }
        else {
            var observable = this._shareService.likeFromService(share, this.user1);
            observable.subscribe(function (data) {
                _this.getUser(_this.id);
            });
        }
    };
    // Liking reply ==
    UsersProfileComponent.prototype.onclickLikeReply = function (share, reply) {
        var _this = this;
        var counter = 0;
        for (var i = 0; i < reply.likes.length; i++) {
            if (reply.likes[i]._id === this.user1._id) {
                counter = counter + 1;
            }
            else {
                continue;
            }
        }
        if (counter > 0) {
            var observable = this._shareService.dislikeReply(this.user1, reply);
            observable.subscribe(function (data) {
                _this.getUser(_this.id);
                _this.bringOneShare(share._id);
            });
        }
        else {
            var observable = this._shareService.likeReply(this.user1, reply);
            observable.subscribe(function (data) {
                _this.getUser(_this.id);
                _this.bringOneShare(share._id);
            });
        }
    };
    // =============REPLIES===================
    UsersProfileComponent.prototype.deleteReply = function (share, reply) {
        var _this = this;
        var observable = this._shareService.deleteReply(this.user1, reply);
        observable.subscribe(function (data) {
            _this.bringOneShare(share._id);
        });
    };
    // Bring one share 
    UsersProfileComponent.prototype.bringOneShare = function (id) {
        var _this = this;
        var observable = this._shareService.aShare(id);
        observable.subscribe(function (data) {
            _this.sharex = data;
            _this.displayrepliesOfShare = _this.sharex;
        });
    };
    // ADDING a Reply
    UsersProfileComponent.prototype.onreplySubmit = function (share) {
        var _this = this;
        if (!this.reply) {
            this.message = 'You can do better!';
        }
        else {
            var reply1 = {
                content: this.reply
            };
            var observable = this._shareService.replytheShare(share, reply1, this.user1);
            observable.subscribe(function (data) {
                _this.reply = '';
                _this.hideAddComment(share);
            });
        }
    };
    // replying from open share box
    UsersProfileComponent.prototype.onreplySubmit1 = function (share) {
        var _this = this;
        if (!this.reply) {
            this.message = 'You can do better!';
        }
        else {
            var reply1 = {
                content: this.reply
            };
            var observable = this._shareService.replytheShare(share, reply1, this.user1);
            observable.subscribe(function (data) {
                _this.reply = '';
                _this.bringOneShare(share._id);
            });
        }
    };
    // Opening Reply box-form
    UsersProfileComponent.prototype.showaddComment = function (share) {
        var _this = this;
        Object.keys(this.displayCommentbox).forEach(function (h) {
            _this.displayCommentbox[h] = false;
        });
        this.displayCommentbox[share._id] = true;
    };
    // hiding comment box-form
    UsersProfileComponent.prototype.hideAddComment = function (share) {
        this.displayCommentbox[share._id] = false;
        this.getUser(this.id);
    };
    // after clicking on the share
    UsersProfileComponent.prototype.displayReplies = function (share) {
        this.displayrepliesOfShare = share;
    };
    // closing single share
    UsersProfileComponent.prototype.removeReplyBox = function () {
        this.displayrepliesOfShare = null;
        this.getUser(this.id);
    };
    // Profile displays ------------------------
    UsersProfileComponent.prototype.displayFollowers = function (user) {
        var _this = this;
        var observable = this._usersService.getanUser(user._id);
        observable.subscribe(function (data) {
            _this.myFollowers = data['user'];
        });
    };
    UsersProfileComponent.prototype.removeFollowersBox = function () {
        this.myFollowers = null;
        this.myFollowings = null;
    };
    UsersProfileComponent.prototype.displayFollowings = function (user) {
        var _this = this;
        var observable = this._usersService.getanUser(user._id);
        observable.subscribe(function (data) {
            _this.myFollowings = data['user'];
        });
    };
    // Displaying who likes----------------------
    UsersProfileComponent.prototype.displayWhoLikes = function (share) {
        this.wholeLikes = share;
    };
    UsersProfileComponent.prototype.removeLikesBox = function () {
        this.wholeLikes = null;
    };
    // FOLLOW 
    //   //  =====================================================
    UsersProfileComponent.prototype.onclickletsUnfollow = function (follower) {
        var _this = this;
        var observable = this._usersService.serviceUnFollow(this.user1, follower);
        observable.subscribe(function (data) {
            _this.getUser(_this.id);
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user1 = profile['user'];
            });
        });
        this.displayFollowers(this.user);
    };
    UsersProfileComponent.prototype.onclickletsFollow = function (follower) {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user1, follower);
        observable.subscribe(function (data) {
            _this.getUser(_this.id);
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user1 = profile['user'];
            });
        });
        this.displayFollowers(this.user);
    };
    //  =====================================================
    UsersProfileComponent.prototype.onclickletsUnfollow2 = function (follower) {
        var _this = this;
        var observable = this._usersService.serviceUnFollow(this.user1, follower);
        observable.subscribe(function (data) {
            _this.getUser(_this.id);
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user1 = profile['user'];
            });
        });
        this.displayFollowings(this.user);
    };
    UsersProfileComponent.prototype.onclickletsFollow2 = function (follower) {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user1, follower);
        observable.subscribe(function (data) {
            _this.getUser(_this.id);
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user1 = profile['user'];
            });
        });
        this.displayFollowings(this.user);
    };
    //  =====================================================
    UsersProfileComponent.prototype.onclickletsUnfollow3 = function () {
        var _this = this;
        var observable = this._usersService.serviceUnFollow(this.user1, this.user);
        observable.subscribe(function (data) {
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user1 = profile['user'];
                var tempObservable2 = _this._usersService.getanUser(_this.id);
                tempObservable2.subscribe(function (data) {
                    _this.user = data['user'];
                    _this.shares = data['shares'];
                });
            });
        });
    };
    UsersProfileComponent.prototype.onclickletsFollow3 = function () {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user1, this.user);
        observable.subscribe(function (data) {
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user1 = profile['user'];
                var tempObservable2 = _this._usersService.getanUser(_this.id);
                tempObservable2.subscribe(function (data) {
                    _this.user = data['user'];
                    _this.shares = data['shares'];
                });
            });
        });
    };
    // ========================
    UsersProfileComponent.prototype.onclickletsUnfollow1 = function (follower, share) {
        var _this = this;
        var observable = this._usersService.serviceUnFollow(this.user1, follower);
        observable.subscribe(function (data) {
            _this.getUser(_this.id);
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user1 = profile['user'];
            });
        });
        var observable1 = this._shareService.aShare(share._id);
        observable1.subscribe(function (data) {
            var sharez = data;
            _this.wholeLikes = sharez;
        });
    };
    UsersProfileComponent.prototype.onclickletsFollow1 = function (follower, share) {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user1, follower);
        observable.subscribe(function (data) {
            _this.getUser(_this.id);
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user1 = profile['user'];
            });
        });
        var observable1 = this._shareService.aShare(share._id);
        observable1.subscribe(function (data) {
            var sharez = data;
            _this.wholeLikes = sharez;
        });
    };
    // ========================
    UsersProfileComponent.prototype.onclickletsUnfollow4 = function (share) {
        var _this = this;
        var observable = this._usersService.serviceUnFollow(this.user1, this.user);
        observable.subscribe(function (data) {
            _this.getUser(_this.id);
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user1 = profile['user'];
            });
        });
        var observable1 = this._shareService.aShare(share._id);
        observable1.subscribe(function (data) {
            var sharez = data;
            _this.displayrepliesOfShare = sharez;
        });
    };
    UsersProfileComponent.prototype.onclickletsFollow4 = function (share) {
        var _this = this;
        var observable = this._usersService.serviceFollow(this.user1, this.user);
        observable.subscribe(function (data) {
            _this.getUser(_this.id);
            _this._authService.getProfile().subscribe(function (profile) {
                _this.user1 = profile['user'];
            });
        });
        var observable1 = this._shareService.aShare(share._id);
        observable1.subscribe(function (data) {
            var sharez = data;
            _this.displayrepliesOfShare = sharez;
        });
    };
    UsersProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-profile',
            template: __webpack_require__(/*! ./users-profile.component.html */ "./src/app/components/profile/users-profile/users-profile.component.html"),
            styles: [__webpack_require__(/*! ./users-profile.component.css */ "./src/app/components/profile/users-profile/users-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _services_shares_service__WEBPACK_IMPORTED_MODULE_8__["SharesService"]])
    ], UsersProfileComponent);
    return UsersProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-a{\n    width: 400px;\n    height: 500px;\n    padding-top: 40px;\n    margin-left: 400px;\n    border-radius: 10px;\n    box-shadow: 1px 1px rgb(198, 193, 193);\n    background: rgb(230, 224, 224);\n}"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-a\">\n  <div class=\"text-center\">\n    <form class=\"form-signin\" (submit)=\"onRegisterSubmit()\">\n      \n      <h1 class=\"h3 mb-3 font-weight-normal\">Please join us</h1>\n      <input  name=\"first_name\" [(ngModel)]=\"first_name\" class=\"inputs\" placeholder=\"First Name\" required autofocus><br><br>\n      <input  name=\"last_name\" [(ngModel)]=\"last_name\" class=\"inputs\" placeholder=\"Last Name\" required autofocus><br><br>\n      <input name=\"email\" [(ngModel)]=\"email\" class=\"inputs\" placeholder=\"Email address\" required autofocus><br><br>\n      <input name=\"username\" [(ngModel)]=\"username\" class=\"inputs\" placeholder=\"Username\" required autofocus><br><br>\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"inputs\"  placeholder=\"Password\" required><br><br>\n      <input type=\"password\" name=\"password_confirmation\" [(ngModel)]=\"password_confirmation\"class=\"inputs\" placeholder=\"Confirm Password\" required><br><br>\n      <div class=\"checkbox mb-3\">\n        <label>\n          <input type=\"checkbox\" value=\"remember-me\"> Remember me\n        </label>\n      </div>\n      <button class=\"btn btn-lg btn-primary\" type=\"submit\">Sign in</button>\n      \n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_router, _route, _httpService, _validateService, _authService, _flashMessagesService) {
        this._router = _router;
        this._route = _route;
        this._httpService = _httpService;
        this._validateService = _validateService;
        this._authService = _authService;
        this._flashMessagesService = _flashMessagesService;
        this.fronterr = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            username: this.username,
            password: this.password,
            password_confirmation: this.password_confirmation
        };
        if (!this._validateService.validateRegister(user)) {
            this._flashMessagesService.show("please fill in all fields", { cssClass: 'alert-danger', timeout: 4000 });
            return false;
        }
        if (!this._validateService.validateEmail(user.email)) {
            this._flashMessagesService.show("Please use a valid email", { cssClass: 'alert-danger', timeout: 4000 });
            return false;
        }
        if (!this._validateService.matchPassword(this.password, this.password_confirmation)) {
            this._flashMessagesService.show("Password doesn't match", { cssClass: 'alert-danger', timeout: 4000 });
            return false;
        }
        var observable = this._authService.registerUser(user);
        observable.subscribe(function (data) {
            if (data['succes']) {
                _this._flashMessagesService.show("successfully registered, check your inbox and confirm your e-mail !", { cssClass: 'alert-success', timeout: 10000 });
                _this._router.navigate(['/']);
            }
            else {
                _this._flashMessagesService.show(data['msg'], { cssClass: 'alert-danger', timeout: 4000 });
                _this._router.navigate(['/register']);
            }
        });
    };
    RegisterComponent.prototype.loginSubmit = function (user) {
        var _this = this;
        var observable = this._authService.authenticateUser(user);
        observable.subscribe(function (data) {
            if (data['success']) {
                _this._authService.storeUserData(data['token'], data['user']);
                _this._flashMessagesService.show('Successfully logged in!', { cssClass: 'alert-success', timeout: 4000 });
                _this._router.navigate(['/dashboard']);
            }
            else {
                _this._flashMessagesService.show(data['msg'], { cssClass: 'alert-danger', timeout: 4000 });
                _this._router.navigate(['/login']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_router, _authService, _flashMessagesService) {
        this._router = _router;
        this._authService = _authService;
        this._flashMessagesService = _flashMessagesService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._flashMessagesService.show("You are not allowed to go to this page, please login", { cssClass: 'alert-danger', timeout: 4000 });
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/guard.service.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/guard.service.ts ***!
  \*****************************************/
/*! exports provided: GuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardService", function() { return GuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GuardService = /** @class */ (function () {
    function GuardService(_router, _authService, _flashMessagesService) {
        this._router = _router;
        this._authService = _authService;
        this._flashMessagesService = _flashMessagesService;
    }
    GuardService.prototype.canActivate = function () {
        if (this._authService.loggedIn()) {
            this._router.navigate(['/dashboard']);
            return false;
        }
        else {
            return true;
        }
    };
    GuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], GuardService);
    return GuardService;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HttpService = /** @class */ (function () {
    function HttpService() {
    }
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(_httpClient) {
        this._httpClient = _httpClient;
    }
    AuthService.prototype.registerUser = function (user) {
        return this._httpClient.post('/api/register', user);
    };
    AuthService.prototype.authenticateUser = function (user) {
        return this._httpClient.post('/api/authenticate', user);
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.user = user;
        this.authToken = token;
    };
    AuthService.prototype.logOut = function () {
        localStorage.clear();
        this.user = null;
        this.authToken = null;
        return true;
    };
    AuthService.prototype.updatePicture = function (pictures, user) {
        console.log(pictures);
        return this._httpClient.post('/api/' + user._id + '/picture', pictures);
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this._httpClient.get('/api/profile', httpOptions);
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('id_token');
    };
    AuthService.prototype.updateUser = function (user) {
        // console.log(user);
        return this._httpClient.post('/api/' + user._id + '/update', user);
    };
    AuthService.prototype.addPicture = function (user, url) {
        // console.log(url);
        return this._httpClient.put('/api/' + user._id + '/image', url);
    };
    AuthService.prototype.search = function (find) {
        return this._httpClient.get('/api/search/' + find);
    };
    AuthService.prototype.confirmEmail = function (id) {
        return this._httpClient.put('/api/user/' + id + '/confirmEmail', true);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/location.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationService = /** @class */ (function () {
    function LocationService(_httpClient) {
        this._httpClient = _httpClient;
    }
    LocationService.prototype.updateUserLocation = function (user) {
        return this._httpClient.put('http://localhost:8000/api/' + user._id + '/location', user);
    };
    LocationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/services/notifications.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsService = /** @class */ (function () {
    function NotificationsService(_httpClient) {
        this._httpClient = _httpClient;
    }
    NotificationsService.prototype.allNotifications = function (id) {
        return this._httpClient.get('/api/user/' + id + '/notifications');
    };
    NotificationsService.prototype.allunseenNotifications = function (id) {
        return this._httpClient.get('/api/user/' + id + '/unseen/notifications');
    };
    NotificationsService.prototype.updateNotifications = function (id) {
        return this._httpClient.put('/api/user/' + id + '/notifications/seen', id);
    };
    NotificationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NotificationsService);
    return NotificationsService;
}());



/***/ }),

/***/ "./src/app/services/shares.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shares.service.ts ***!
  \********************************************/
/*! exports provided: SharesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesService", function() { return SharesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharesService = /** @class */ (function () {
    function SharesService(_httpClient) {
        this._httpClient = _httpClient;
    }
    SharesService.prototype.addShare = function (shares, user) {
        return this._httpClient.post('/api/' + user._id + '/share', shares);
    };
    SharesService.prototype.allShares = function () {
        return this._httpClient.get('/api/shares');
    };
    SharesService.prototype.bestShares = function () {
        return this._httpClient.get('/api/bestshares');
    };
    SharesService.prototype.followingShares = function (user) {
        return this._httpClient.get('/api/user/' + user._id + '/dashshares');
    };
    SharesService.prototype.deleteShare = function (user_id, share) {
        return this._httpClient.delete('/api/' + user_id + '/shares/' + share._id);
    };
    SharesService.prototype.myShares = function (user) {
        return this._httpClient.get('/api/user/' + user._id + '/myshares');
    };
    SharesService.prototype.likeFromService = function (share, user1) {
        return this._httpClient.post('/api/shares/' + share._id + '/like', user1);
    };
    SharesService.prototype.dislikeFromService = function (share, user) {
        // console.log(user._id)
        return this._httpClient.delete('/api/' + user._id + '/shares/' + share._id + '/dislike');
    };
    SharesService.prototype.replytheShare = function (share, reply1, user) {
        return this._httpClient.post('/api/shares/' + share._id + '/user/' + user._id + '/reply', reply1);
    };
    SharesService.prototype.allReplies = function () {
        return this._httpClient.get('/api/allreplies');
    };
    SharesService.prototype.aShare = function (id) {
        return this._httpClient.get('/api/share/' + id);
    };
    SharesService.prototype.likeReply = function (user, reply) {
        return this._httpClient.put('/api/user/' + user._id + '/reply/' + reply._id + '/like', user);
    };
    SharesService.prototype.dislikeReply = function (user, reply) {
        return this._httpClient.put('/api/user/' + user._id + '/reply/' + reply._id + '/dislike', user);
    };
    SharesService.prototype.deleteReply = function (user, reply) {
        return this._httpClient.delete('/api/' + user._id + '/reply/' + reply._id + '/remove');
    };
    SharesService.prototype.myReplies = function (user) {
        return this._httpClient.get('/api/' + user._id + '/myreplies');
    };
    SharesService.prototype.aReply = function (id) {
        return this._httpClient.get('/api/reply/' + id);
    };
    SharesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SharesService);
    return SharesService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = /** @class */ (function () {
    function UsersService(_httpClient) {
        this._httpClient = _httpClient;
    }
    UsersService.prototype.allUsers = function () {
        return this._httpClient.get('/api');
    };
    UsersService.prototype.allunfollowedUsers = function (user) {
        return this._httpClient.get('/api/' + user._id + '/users');
    };
    UsersService.prototype.getanUser = function (id) {
        return this._httpClient.get('/api/user/' + id);
    };
    UsersService.prototype.makeProfilePicture = function (picture, id) {
        return this._httpClient.put('/api/user/' + id + '/avatar', picture);
    };
    UsersService.prototype.deleteImg = function (id, picture) {
        return this._httpClient.delete('/api/user/' + id + '/image/' + picture._id);
    };
    UsersService.prototype.deletProfilePhoto = function (user1) {
        return this._httpClient.delete('/api/user/' + user1._id + '/remove/profilephoto');
    };
    UsersService.prototype.serviceFollow = function (user, followingUser) {
        return this._httpClient.put('/api/user/' + user._id + '/follow/' + followingUser._id, followingUser);
    };
    UsersService.prototype.serviceUnFollow = function (user, followingUser) {
        return this._httpClient.put('/api/user/' + user._id + '/Unfollow/' + followingUser._id, followingUser);
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.first_name == undefined || user.last_name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validatePasswordchange = function (body, confirm_password, confirm_newPassword) {
        if (body.password == undefined || confirm_password == undefined || confirm_newPassword == undefined || body.newPassword == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.matchPassword = function (password, confirmation) {
        if (password === confirmation) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyA24Cril-dHs7n-Ub1HBTRr5HTIlHud62U",
        authDomain: "digmypast-cc2a9.firebaseapp.com",
        databaseURL: "https://digmypast-cc2a9.firebaseio.com",
        projectId: "digmypast-cc2a9",
        storageBucket: "digmypast-cc2a9.appspot.com",
        messagingSenderId: "228150343881"
    }
};


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyA24Cril-dHs7n-Ub1HBTRr5HTIlHud62U",
        authDomain: "digmypast-cc2a9.firebaseapp.com",
        databaseURL: "https://digmypast-cc2a9.firebaseio.com",
        projectId: "digmypast-cc2a9",
        storageBucket: "digmypast-cc2a9.appspot.com",
        messagingSenderId: "228150343881"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hizir/Desktop/DojoAssignments/MEAN/angular/projects/Website1/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map