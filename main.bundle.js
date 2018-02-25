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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    margin:0;\r\n    overflow: hidden;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='main' class='transition'>\r\n    <navbar></navbar>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_projectSubscriber_service__ = __webpack_require__("../../../../../src/app/services/projectSubscriber.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chatSubscriber_service__ = __webpack_require__("../../../../../src/app/services/chatSubscriber.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_taskSubscriber_service__ = __webpack_require__("../../../../../src/app/services/taskSubscriber.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(taskSubscriber, projectSubscriber, chatSubscriber) {
        var _this = this;
        this.taskSubscriber = taskSubscriber;
        this.projectSubscriber = projectSubscriber;
        this.chatSubscriber = chatSubscriber;
        window.addEventListener('hashchange', function (e) { return console.log(e); });
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__('https://macrop.herokuapp.com/');
        this.socket.on('projectCreated', function (data) {
            _this.projectSubscriber.update(data);
        });
        this.socket.on('sentMessage', function (data) {
            console.log(data);
            _this.chatSubscriber.update(data);
        });
        this.socket.on('taskUpdated', function (data) {
            _this.taskSubscriber.update(data);
        });
        this.socket.on('taskCreated', function (data) {
            _this.taskSubscriber.update(data);
        });
        this.socket.on('userRemovedFromProject', function (data) {
            _this.projectSubscriber.updateRemovedUser(data);
        });
        this.socket.on('userAddedToProject', function (data) {
            _this.projectSubscriber.updateAddedUser(data);
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_taskSubscriber_service__["a" /* TaskSubscriber */], __WEBPACK_IMPORTED_MODULE_2__services_projectSubscriber_service__["a" /* ProjectSubscriber */], __WEBPACK_IMPORTED_MODULE_3__services_chatSubscriber_service__["a" /* ChatSubscriber */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_registration_registration_component__ = __webpack_require__("../../../../../src/app/components/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_logo_logo_component__ = __webpack_require__("../../../../../src/app/components/logo/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_user_panel_user_panel_component__ = __webpack_require__("../../../../../src/app/components/user-panel/user-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_userSessionSubject_service__ = __webpack_require__("../../../../../src/app/services/userSessionSubject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_board_board_component__ = __webpack_require__("../../../../../src/app/components/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_requestService_service__ = __webpack_require__("../../../../../src/app/services/requestService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_task_board_task_board_component__ = __webpack_require__("../../../../../src/app/components/task-board/task-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_new_project_form_new_project_form_component__ = __webpack_require__("../../../../../src/app/components/new-project-form/new-project-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_projectSubscriber_service__ = __webpack_require__("../../../../../src/app/services/projectSubscriber.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_project_panel_project_panel_component__ = __webpack_require__("../../../../../src/app/components/project-panel/project-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_chatSubscriber_service__ = __webpack_require__("../../../../../src/app/services/chatSubscriber.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_task_services__ = __webpack_require__("../../../../../src/app/services/task.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_taskSubscriber_service__ = __webpack_require__("../../../../../src/app/services/taskSubscriber.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_chat_component_chat_component_component__ = __webpack_require__("../../../../../src/app/components/chat-component/chat-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angular2_draggable__ = __webpack_require__("../../../../angular2-draggable/angular2-draggable.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ngx_drag_scroll__ = __webpack_require__("../../../../ngx-drag-scroll/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ngx_drag_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_ngx_drag_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/ng2-dnd.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_empty_task_empty_task_component__ = __webpack_require__("../../../../../src/app/components/empty-task/empty-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_angular_custom_modal__ = __webpack_require__("../../../../angular-custom-modal/angular-custom-modal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_add_or_remove_user_modal_add_or_remove_user_modal_component__ = __webpack_require__("../../../../../src/app/components/add-or-remove-user.modal/add-or-remove-user.modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_add_user_to_project_modal_add_user_to_project_modal_component__ = __webpack_require__("../../../../../src/app/components/add-user-to-project-modal/add-user-to-project-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_add_user_to_task_modal_add_user_to_task_modal_component__ = __webpack_require__("../../../../../src/app/components/add-user-to-task-modal/add-user-to-task-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_user_report_user_report_component__ = __webpack_require__("../../../../../src/app/components/user-report/user-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_team_report_team_report_component__ = __webpack_require__("../../../../../src/app/components/team-report/team-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_project_report_project_report_component__ = __webpack_require__("../../../../../src/app/components/project-report/project-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_report_report_component__ = __webpack_require__("../../../../../src/app/components/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_froala_editor_js_froala_editor_pkgd_min_js__ = __webpack_require__("../../../../froala-editor/js/froala_editor.pkgd.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_froala_editor_js_froala_editor_pkgd_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_42_froala_editor_js_froala_editor_pkgd_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__services_report_service__ = __webpack_require__("../../../../../src/app/services/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_create_team_modal_create_team_modal_component__ = __webpack_require__("../../../../../src/app/components/create-team-modal/create-team-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_opened_report_opened_report_component__ = __webpack_require__("../../../../../src/app/components/opened-report/opened-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__services_reportSubscriber_service__ = __webpack_require__("../../../../../src/app/services/reportSubscriber.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_team_report_opened_team_report_opened_component__ = __webpack_require__("../../../../../src/app/components/team-report-opened/team-report-opened.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_logo_logo_component__["a" /* LogoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_user_panel_user_panel_component__["a" /* UserPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_board_board_component__["a" /* BoardComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_task_board_task_board_component__["a" /* TaskBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_new_project_form_new_project_form_component__["a" /* NewProjectFormComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_project_panel_project_panel_component__["a" /* ProjectPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_chat_component_chat_component_component__["a" /* ChatComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_empty_task_empty_task_component__["a" /* EmptyTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_add_or_remove_user_modal_add_or_remove_user_modal_component__["a" /* AddOrRemoveUserModalComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_add_user_to_project_modal_add_user_to_project_modal_component__["a" /* AddUserToProjectModalComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_add_user_to_task_modal_add_user_to_task_modal_component__["a" /* AddUserToTaskModalComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_user_report_user_report_component__["a" /* UserReportComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_team_report_team_report_component__["a" /* TeamReportComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_project_report_project_report_component__["a" /* ProjectReportComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_report_report_component__["a" /* ReportComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_create_team_modal_create_team_modal_component__["a" /* CreateTeamModalComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_opened_report_opened_report_component__["a" /* OpenedReportComponent */],
                __WEBPACK_IMPORTED_MODULE_49__components_team_report_opened_team_report_opened_component__["a" /* TeamReportOpenedComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_43_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_43_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_34_angular_custom_modal__["a" /* ModalModule */],
                __WEBPACK_IMPORTED_MODULE_31_ng2_dnd__["a" /* DndModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_30_ngx_drag_scroll__["DragScrollModule"],
                __WEBPACK_IMPORTED_MODULE_29_angular2_draggable__["a" /* AngularDraggableModule */],
                __WEBPACK_IMPORTED_MODULE_22_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__["a" /* CollapseModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                // ALL THE ROUTES THAT ARE BEEN USED IN THE APPLICATION ARE CONFIGURED HERE
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
                    { path: 'signUp', component: __WEBPACK_IMPORTED_MODULE_13__components_sign_up_sign_up_component__["a" /* SignUpComponent */], pathMatch: 'full' },
                    { path: 'userPanel', component: __WEBPACK_IMPORTED_MODULE_14__components_user_panel_user_panel_component__["a" /* UserPanelComponent */], pathMatch: 'full' },
                    { path: 'newProject', component: __WEBPACK_IMPORTED_MODULE_20__components_new_project_form_new_project_form_component__["a" /* NewProjectFormComponent */], pathMatch: 'full' },
                    { path: 'taskBoard/:id', component: __WEBPACK_IMPORTED_MODULE_19__components_task_board_task_board_component__["a" /* TaskBoardComponent */], pathMatch: 'full' },
                    { path: 'report/:role', component: __WEBPACK_IMPORTED_MODULE_41__components_report_report_component__["a" /* ReportComponent */], pathMatch: 'full' },
                    { path: 'openedReport/:type', component: __WEBPACK_IMPORTED_MODULE_47__components_opened_report_opened_report_component__["a" /* OpenedReportComponent */], pathMatch: "full" },
                    { path: 'teamReportOpened/:type', component: __WEBPACK_IMPORTED_MODULE_49__components_team_report_opened_team_report_opened_component__["a" /* TeamReportOpenedComponent */], pathMatch: "full" }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_48__services_reportSubscriber_service__["a" /* ReportSubscriberService */], __WEBPACK_IMPORTED_MODULE_46__services_team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_44__services_report_service__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_27__services_taskSubscriber_service__["a" /* TaskSubscriber */], __WEBPACK_IMPORTED_MODULE_26__services_task_services__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_6__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_21__services_projectSubscriber_service__["a" /* ProjectSubscriber */], __WEBPACK_IMPORTED_MODULE_15__services_userSessionSubject_service__["a" /* UserSessionSubject */], __WEBPACK_IMPORTED_MODULE_17__services_requestService_service__["a" /* RequestService */], __WEBPACK_IMPORTED_MODULE_18__services_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_24__services_chatSubscriber_service__["a" /* ChatSubscriber */], __WEBPACK_IMPORTED_MODULE_25__services_chat_service__["a" /* ChatService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-or-remove-user.modal/add-or-remove-user.modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-or-remove-user.modal/add-or-remove-user.modal.component.html":
/***/ (function(module, exports) {

module.exports = "<modal #removeUserModal>\n  <ng-template #modalHeader>\n    <h2>Remove users from project</h2>\n  </ng-template>\n  <ng-template #modalBody>\n    <div class='row'>\n      <div class='col-xs-12 col-sm-12 col-md-12'>\n        <div class=\"table-responsive\">\n          <table class='table table-striped'>\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Email</th>\n                <th>Add</th>\n              </tr>\n            </thead>\n            <tbody *ngIf='this._users'>\n              <tr *ngFor='let user of this._users | paginate: {itemsPerPage:4,currentPage:page}'>\n                <td>{{user.username}}</td>\n                <td>{{user.email}}</td>\n                <td>\n                  <button (click)='onUserActionHandler(user)' class='btn btn-danger btn-md'>\n                    <strong>-</strong>\n                  </button>\n                </td>\n              </tr>\n              <div class='paginator col-xs-12 col-sm-12 col-md-12'>\n                <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\n              </div>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</modal>"

/***/ }),

/***/ "../../../../../src/app/components/add-or-remove-user.modal/add-or-remove-user.modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOrRemoveUserModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_modal_dialog_user_modal_dialog_component__ = __webpack_require__("../../../../../src/app/components/user-modal-dialog/user-modal-dialog.component.ts");
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




var AddOrRemoveUserModalComponent = (function (_super) {
    __extends(AddOrRemoveUserModalComponent, _super);
    function AddOrRemoveUserModalComponent(projectService, userService) {
        var _this = _super.call(this) || this;
        _this.projectService = projectService;
        _this.userService = userService;
        return _this;
    }
    AddOrRemoveUserModalComponent.prototype.open = function () {
        this._open(this.modalRef);
    };
    AddOrRemoveUserModalComponent.prototype.initUsers = function () {
        var _this = this;
        this.projectService.getUsersOnProject(this.projectId).subscribe(function (users) {
            _this._users = users.json();
        });
    };
    AddOrRemoveUserModalComponent.prototype.userAction = function (user) {
        var _this = this;
        this._users = this._users.filter(function (_user) { return _user._id != user._id; });
        this.projectService.updateProjectUsers(this.projectId, user).subscribe(function () {
            _this.emitEvent(user);
        });
    };
    AddOrRemoveUserModalComponent.prototype.update = function (usersOnProject) {
        this._users = usersOnProject;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AddOrRemoveUserModalComponent.prototype, "projectId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("removeUserModal"),
        __metadata("design:type", Object)
    ], AddOrRemoveUserModalComponent.prototype, "modalRef", void 0);
    AddOrRemoveUserModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-or-remove-user-modal',
            template: __webpack_require__("../../../../../src/app/components/add-or-remove-user.modal/add-or-remove-user.modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-or-remove-user.modal/add-or-remove-user.modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]])
    ], AddOrRemoveUserModalComponent);
    return AddOrRemoveUserModalComponent;
}(__WEBPACK_IMPORTED_MODULE_3__user_modal_dialog_user_modal_dialog_component__["a" /* UserModalDialogComponent */]));



/***/ }),

/***/ "../../../../../src/app/components/add-user-to-project-modal/add-user-to-project-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-user-to-project-modal/add-user-to-project-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<modal #addUserModal>\n  <ng-template #modalHeader>\n    <h2>Add users to project</h2>\n  </ng-template>\n  <ng-template #modalBody>\n    <div class='row'>\n      <div class='col-xs-12 col-sm-12 col-md-12'>\n        <div class=\"table-responsive\">\n          <table class='table table-striped'>\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Email</th>\n                <th>Add</th>\n              </tr>\n            </thead>\n            <tbody *ngIf='this._users'>\n              <tr *ngFor='let user of this._users | paginate: {itemsPerPage:4,currentPage:page}'>\n                <td>{{user.username}}</td>\n                <td>{{user.email}}</td>\n                <td>\n                  <button (click)='onUserActionHandler(user)' class='btn btn-success btn-md'>\n                    <strong>+</strong>\n                  </button>\n                </td>\n              </tr>\n              <div class='paginator col-xs-12 col-sm-12 col-md-12'>\n                <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\n              </div>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</modal>"

/***/ }),

/***/ "../../../../../src/app/components/add-user-to-project-modal/add-user-to-project-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserToProjectModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_modal_dialog_user_modal_dialog_component__ = __webpack_require__("../../../../../src/app/components/user-modal-dialog/user-modal-dialog.component.ts");
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




var AddUserToProjectModalComponent = (function (_super) {
    __extends(AddUserToProjectModalComponent, _super);
    function AddUserToProjectModalComponent(projectService, userService) {
        var _this = _super.call(this) || this;
        _this.projectService = projectService;
        _this.userService = userService;
        return _this;
    }
    AddUserToProjectModalComponent.prototype.initUsers = function () {
        var _this = this;
        this.projectService.getUsersOnProject(this.projectId).subscribe(function (users) {
            _this._usersOnProject = users.json();
            _this.userService.getAllUsers().subscribe(function (allUsers) {
                _this._users = allUsers.json();
                _this._users = _this._users.filter(function (user) { return _this._usersOnProject.findIndex(function (_user) { return _user._id == user._id; }) == -1; });
            });
        });
    };
    AddUserToProjectModalComponent.prototype.userAction = function (user) {
        var _this = this;
        this._usersOnProject.push(user);
        this._users = this._users.filter(function (_user) { return _user._id != user._id; });
        this.projectService.addUserToProject(this.projectId, user).subscribe(function () {
            _this.emitEvent(_this._usersOnProject);
        });
    };
    AddUserToProjectModalComponent.prototype.open = function () {
        this._open(this.modalRef);
    };
    AddUserToProjectModalComponent.prototype.update = function (user) {
        this._users.push(user);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AddUserToProjectModalComponent.prototype, "projectId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("addUserModal"),
        __metadata("design:type", Object)
    ], AddUserToProjectModalComponent.prototype, "modalRef", void 0);
    AddUserToProjectModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-user-to-project-modal',
            template: __webpack_require__("../../../../../src/app/components/add-user-to-project-modal/add-user-to-project-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-user-to-project-modal/add-user-to-project-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]])
    ], AddUserToProjectModalComponent);
    return AddUserToProjectModalComponent;
}(__WEBPACK_IMPORTED_MODULE_3__user_modal_dialog_user_modal_dialog_component__["a" /* UserModalDialogComponent */]));



/***/ }),

/***/ "../../../../../src/app/components/add-user-to-task-modal/add-user-to-task-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#username{\r\n    color:black;\r\n\r\n}\r\n\r\n#role{\r\n    color:black;\r\n}\r\nth{\r\n    color:black;\r\n    font-weight: 200;\r\n}\r\ntd{\r\n    color:black;\r\n    font-weight: 150;\r\n}\r\n\r\nh2{\r\n    color:black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-user-to-task-modal/add-user-to-task-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<modal #addUserToTaskModal>\r\n  <ng-template #modalHeader>\r\n    <h2>Add users to task</h2>\r\n  </ng-template>\r\n  <ng-template #modalBody>\r\n    <div class='row'>\r\n      <div class='col-xs-12 col-sm-12 col-md-12'>\r\n        <div class=\"table-responsive\">\r\n          <table class='table table-striped'>\r\n            <thead>\r\n              <tr>\r\n                <td>Username</td>\r\n                <td>Role</td>\r\n                <td>Add</td>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngIf='this._users'>\r\n              <tr *ngFor='let user of this._availableUsersForAdding | paginate: {itemsPerPage:4,currentPage:page}'>\r\n                <td *ngIf='this.getRoleForSpecificUser(user) != \"Owner\"'>\r\n                  <span id='username'>{{user.username}}</span>\r\n                </td>\r\n                <td *ngIf='this.getRoleForSpecificUser(user) != \"Owner\"'>\r\n                  <span id='role'>{{this.getRoleForSpecificUser(user)}}</span>\r\n                </td>\r\n                <td *ngIf='this.getRoleForSpecificUser(user) != \"Owner\"'>\r\n                  <button (click)='onUserActionHandler(user)' class='btn btn-success btn-md'>\r\n                    <strong>+</strong>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n              <div class='paginator col-xs-12 col-sm-12 col-md-12'>\r\n                <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n              </div>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</modal>"

/***/ }),

/***/ "../../../../../src/app/components/add-user-to-task-modal/add-user-to-task-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserToTaskModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_modal_dialog_user_modal_dialog_component__ = __webpack_require__("../../../../../src/app/components/user-modal-dialog/user-modal-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_role_service__ = __webpack_require__("../../../../../src/app/services/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_task_services__ = __webpack_require__("../../../../../src/app/services/task.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_taskSubscriber_service__ = __webpack_require__("../../../../../src/app/services/taskSubscriber.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_userSession_service__ = __webpack_require__("../../../../../src/app/services/userSession.service.ts");
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








var AddUserToTaskModalComponent = (function (_super) {
    __extends(AddUserToTaskModalComponent, _super);
    function AddUserToTaskModalComponent(projectService, userService, taskService, taskSubscriber) {
        var _this = _super.call(this) || this;
        _this.projectService = projectService;
        _this.userService = userService;
        _this.taskService = taskService;
        _this.taskSubscriber = taskSubscriber;
        _this._user = JSON.parse(__WEBPACK_IMPORTED_MODULE_7__services_userSession_service__["a" /* UserSession */].getUserFromStorage());
        _this._availableUsersForAdding = new Array();
        _this.taskSubscriber.taskSubscriber.subscribe(function (task) {
            if (!_this._task || task._id == _this._task._id)
                _this._task = task;
        });
        return _this;
    }
    AddUserToTaskModalComponent.prototype.initUsers = function () {
        var _this = this;
        this.projectService.getUsersOnProject(this.projectId).subscribe(function (users) {
            _this._users = users.json();
            _this.projectService.getRolesForProject(_this.projectId).subscribe(function (roles) {
                _this._roles = roles.json();
            });
        });
        return new Promise(function (resolve, reject) { resolve(); });
    };
    AddUserToTaskModalComponent.prototype.userAction = function (user) {
        var _this = this;
        this._task.responsible.push(user._id);
        this._availableUsersForAdding = this._users.filter(function (_user) { return _user._id != user._id && _user._id != _this._user._id; });
        this.taskService.updateTask(this._task).subscribe(function (res) {
            console.log(res);
        });
    };
    AddUserToTaskModalComponent.prototype.open = function () {
        this._open(this.modalRef);
    };
    AddUserToTaskModalComponent.prototype.setTask = function (task) {
        var _this = this;
        this._task = task;
        this._availableUsersForAdding = this._users.filter(function (user) { return _this._task.responsible.findIndex(function (_userId) { return _userId == user._id; }) == -1; });
        this.open();
    };
    AddUserToTaskModalComponent.prototype.update = function (user) {
        this._users.push(user);
    };
    AddUserToTaskModalComponent.prototype.getRoleForSpecificUser = function (user) {
        var role = this._roles.find(function (role) { return role.userID == user._id; });
        var roleArray = __WEBPACK_IMPORTED_MODULE_4__services_role_service__["a" /* RoleService */].roleEnumToArray();
        return role ? roleArray[role.role] : null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AddUserToTaskModalComponent.prototype, "projectId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AddUserToTaskModalComponent.prototype, "role", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("addUserToTaskModal"),
        __metadata("design:type", Object)
    ], AddUserToTaskModalComponent.prototype, "modalRef", void 0);
    AddUserToTaskModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-user-to-task-modal',
            template: __webpack_require__("../../../../../src/app/components/add-user-to-task-modal/add-user-to-task-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-user-to-task-modal/add-user-to-task-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_5__services_task_services__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_6__services_taskSubscriber_service__["a" /* TaskSubscriber */]])
    ], AddUserToTaskModalComponent);
    return AddUserToTaskModalComponent;
}(__WEBPACK_IMPORTED_MODULE_1__user_modal_dialog_user_modal_dialog_component__["a" /* UserModalDialogComponent */]));



/***/ }),

/***/ "../../../../../src/app/components/board/board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".board-container{\r\n    margin-top:20px;\r\n    color:white;\r\n    background-image:url(\"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/b1d9cfcae6827d969fc70947689e0b20/photo-1508234562163-534667a7e3ea.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='_project' class=\"container card board-container\" >\r\n  <div class='container'>\r\n    <div style='padding:1em;'class=\"card-block\">\r\n      <h4 class=\"card-title\">{{_project.name}}</h4>\r\n      <p class=\"card-text\">Number of participans: {{_project.participians.length + _project.owners.length}}</p>\r\n      <label *ngIf=\"isUserOwner()\" class='alert alert-success'>User status: <strong>Owner</strong></label>\r\n      <label *ngIf=\"!isUserOwner()\" class='alert alert-info'>User status:\r\n        <strong>{{role}}</strong>\r\n      </label>\r\n      <button  class=\"btn btn-primary\" (click)='openProject()'>Open project</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/board/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_userSession_service__ = __webpack_require__("../../../../../src/app/services/userSession.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BoardComponent = (function () {
    function BoardComponent(projectService, router) {
        this.projectService = projectService;
        this.router = router;
        this._userID = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_userSession_service__["a" /* UserSession */].getUserFromStorage())._id;
        this._picture = '';
        this._numberOfTasks = 0;
        this._isClicked = false;
    }
    BoardComponent.prototype.ngOnInit = function () {
        this.getProject();
    };
    BoardComponent.prototype.getProject = function () {
        var _this = this;
        this.projectService.getProjectById(this.id).subscribe(function (res) {
            _this._project = res.json();
        });
    };
    BoardComponent.prototype.isUserOwner = function () {
        var user = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_userSession_service__["a" /* UserSession */].getUserFromStorage());
        var isOwner = false;
        this._project.owners.forEach(function (owner) {
            if (owner == user._id)
                isOwner = true;
        });
        return isOwner;
    };
    BoardComponent.prototype.openProject = function () {
        document.getElementById("main").className = "transition";
        console.log(this.role);
        this.router.navigate(['/taskBoard', this.id], { queryParams: { role: this.role || 'owner', userID: this._userID, isUserProjectOwner: this.isUserOwner() } });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BoardComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BoardComponent.prototype, "role", void 0);
    BoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'board',
            template: __webpack_require__("../../../../../src/app/components/board/board.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/board/board.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/chat-component/chat-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    overflow-x: hidden;\r\n}\r\n.btn-collapse{\r\n    color:white;\r\n}\r\n.chat-header{\r\n    background-color: #0a93bd;\r\n    width:300px;\r\n    height: 50px;\r\n    opacity: 0.95;\r\n    color:white;\r\n}\r\n .project-name{\r\n     color:white;\r\n }\r\n\r\n\r\n .messages{\r\n    background-color: rgb(235, 238, 241);\r\n    width:300px;\r\n    transition:0.5s;\r\n    position: relative;\r\n    word-break: break-all;\r\n    overflow-wrap: break-word;\r\n    color:black;\r\n }\r\ntextarea{\r\n    resize: none;\r\n}\r\n \r\n .chat__div{\r\n     padding:5px;\r\n     display: block;\r\n     overflow: auto;\r\n     height: 500px;\r\n }\r\n\r\n\r\n .chat__message--myMessage{\r\n    padding:5px;\r\n    text-align:right;\r\n    background-color: #0a93bd;\r\n }\r\n\r\n .chat__message--otherMessage{\r\n    padding:5px;\r\n    text-align:left;\r\n    background-color: rgb(196, 0, 59);\r\n }\r\n\r\n .chat__message{\r\n     color:white;\r\n     margin:5px;\r\n     border-radius: 10px;\r\n }\r\n\r\n.message__text{\r\n     padding:2px;\r\n }\r\n\r\n .chat__input--container{\r\n     bottom:0;\r\n     width:300px;\r\n     padding-top:10px;\r\n     padding-left: 5px;\r\n     padding-right: 5px;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat-component/chat-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\r\n  <div class='row'>\r\n    <div *ngIf='!this._isCollapsed' class='messages'>\r\n      <div #chatDiv class='chat__div'>\r\n        <div *ngFor='let message of this._messages'>\r\n          <div class='col-xs-12 col-sm-12 col-md-12'>\r\n            <div *ngIf='message.author == this._userID' class='chat__message chat__message--myMessage'>\r\n              {{message.text}}\r\n            </div>\r\n            <div *ngIf='message.author != this._userID' class='chat__message chat__message--otherMessage'>\r\n              <span class='message__text'>\r\n                <strong>\r\n                  <span style='margin-right:5px;'>{{this._findUserById(message.author).username}}:</span>\r\n                </strong>{{message.text}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class='chat__input--container'>\r\n        <div class='form-group'>\r\n          <textarea type='text-content' (keyup)='sendMessage(chatInput,$event)' #chatInput placeholder=\"Send message...\" class='form-control'></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class='row'>\r\n    <div *ngIf='this._project' class='col-sm-12 col-sm-3 col-md-3'>\r\n\r\n      <div *ngIf='!this._isCollapsed' (click)='chatCollapse()' class='chat-header row'>\r\n        <div class='col-xs-6 col-sm-6 col-md-6'>\r\n          <div class='project-name btn btn-lg btn-link'>{{this._project.name}}</div>\r\n        </div>\r\n        <div class='col-xs-6 col-sm-6 col-md-6'>\r\n          <button *ngIf='!this._isCollapsed' class='btn-collapse btn btn-link btn-lg pull-right'>\r\n            <i class=\"fa fa-caret-down\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf='this._isCollapsed' (click)='chatExpand()' class='chat-header row'>\r\n        <div class='col-xs-6 col-sm-6 col-md-6'>\r\n          <div class='project-name btn btn-lg btn-link'>{{this._project.name}}</div>\r\n        </div>\r\n        <div class='col-xs-6 col-sm-6 col-md-6'>\r\n          <button *ngIf='this._isCollapsed' class='btn-collapse btn btn-link btn-lg pull-right'>\r\n            <i class=\"fa fa-caret-up\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- <div class='row'>\r\n    <div id='messages' class='messages messages-closed container'>\r\n      <div class='container'>\r\n        <div *ngFor='let message of this._messages'>\r\n          <div class='row container'>\r\n            <div class='col-xs-12 col-sm-3 col-md-3'>\r\n              <div *ngIf='message.author == this._userID' class='chat__message--myMessage pull-right'>\r\n                {{message.text}}\r\n              </div>\r\n              <div *ngIf='message.author != this._userID' class='chat__message--otherMessage pull-left'>\r\n                {{message.text}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/chat-component/chat-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_message__ = __webpack_require__("../../../../../src/app/models/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_chatSubscriber_service__ = __webpack_require__("../../../../../src/app/services/chatSubscriber.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponentComponent = (function () {
    function ChatComponentComponent(chatSubscriber, activatedRoute, projectService, chatService) {
        var _this = this;
        this.chatSubscriber = chatSubscriber;
        this.activatedRoute = activatedRoute;
        this.projectService = projectService;
        this.chatService = chatService;
        this._isCollapsed = true;
        this.chatSubscriber.chatSubscriber.subscribe(function (message) {
            _this._messages.push(message);
            _this._isCollapsed = false;
        });
    }
    ChatComponentComponent.prototype.ngAfterViewChecked = function () {
        if (this.chatDiv)
            this._updateScroll(this.chatDiv.nativeElement);
    };
    ChatComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (res) {
            _this.projectService.getProjectById(res.id).subscribe(function (project) {
                _this._project = project.json();
            });
            _this.projectService.getUsersOnProject(res.id).subscribe(function (users) {
                _this._users = users.json();
            });
            _this.chatService.getProjectChatById(res.id).subscribe(function (chat) {
                _this._chat = chat.json();
            });
            _this.chatService.getMessagesForProject(res.id).subscribe(function (res) {
                _this._messages = res.json();
            });
        });
        this.activatedRoute.queryParams.subscribe(function (res) {
            _this._userID = res.userID;
        });
    };
    ChatComponentComponent.prototype._updateScroll = function (div) {
        if (div)
            div.scrollTop = div.scrollHeight;
    };
    ChatComponentComponent.prototype.chatCollapse = function () {
        this._isCollapsed = true;
    };
    ChatComponentComponent.prototype.chatExpand = function () {
        this._isCollapsed = false;
    };
    ChatComponentComponent.prototype._findUserById = function (userId) {
        return this._users.find(function (user) { return user._id == userId; });
    };
    ChatComponentComponent.prototype.sendMessage = function (chatInput, $event) {
        if ($event.keyCode == 13) {
            var message = new __WEBPACK_IMPORTED_MODULE_3__models_message__["a" /* Message */](this._userID, chatInput.value, this._chat._id);
            this.chatService.sendMessage(message).subscribe();
            chatInput.value = '';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chatDiv'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ChatComponentComponent.prototype, "chatDiv", void 0);
    ChatComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'chat',
            template: __webpack_require__("../../../../../src/app/components/chat-component/chat-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/chat-component/chat-component.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_chatSubscriber_service__["a" /* ChatSubscriber */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_4__services_chat_service__["a" /* ChatService */]])
    ], ChatComponentComponent);
    return ChatComponentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/create-team-modal/create-team-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-team-modal/create-team-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<modal #createTeamModal>\r\n  <ng-template #modalHeader>\r\n    <h2>Create Team</h2>\r\n  </ng-template>\r\n  <ng-template #modalBody>\r\n    <div class='row'>\r\n      <div class='col-xs-12 col-sm-12 col-md-12'>\r\n        <div class='form-group'>\r\n          <label>Team Name</label>\r\n          <input #teamName class='form-control' />\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class='table table-striped'>\r\n            <thead>\r\n              <tr>\r\n                <td>Username</td>\r\n                <td>Role</td>\r\n                <td>Add</td>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngIf='this._availableUsers'>\r\n              <tr *ngFor='let user of this._availableUsers | paginate: {itemsPerPage:4,currentPage:page}'>\r\n                <td>\r\n                  <span id='username'>{{user.username}}</span>\r\n                </td>\r\n                <td>\r\n                  <span id='role'>{{this.getRoleForSpecificUser(user)}}</span>\r\n                </td>\r\n                <td>\r\n                  <button (click)='onUserActionHandler(user)' class='btn btn-success btn-md'>\r\n                    <strong>+</strong>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n              <div class='paginator col-xs-12 col-sm-12 col-md-12'>\r\n                <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n              </div>\r\n            </tbody>\r\n          </table>\r\n          <button (click)='createTeam(teamName.value)' class='btn btn-success btn-md'>Create Team</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</modal>"

/***/ }),

/***/ "../../../../../src/app/components/create-team-modal/create-team-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTeamModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_modal_dialog_user_modal_dialog_component__ = __webpack_require__("../../../../../src/app/components/user-modal-dialog/user-modal-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_team__ = __webpack_require__("../../../../../src/app/models/team.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_role_service__ = __webpack_require__("../../../../../src/app/services/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_userSession_service__ = __webpack_require__("../../../../../src/app/services/userSession.service.ts");
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







var CreateTeamModalComponent = (function (_super) {
    __extends(CreateTeamModalComponent, _super);
    function CreateTeamModalComponent(teamService, projectService) {
        var _this = _super.call(this) || this;
        _this.teamService = teamService;
        _this.projectService = projectService;
        _this._availableUsers = new Array();
        _this._usersOnTask = new Array();
        _this._team = new __WEBPACK_IMPORTED_MODULE_4__models_team__["a" /* Team */]();
        return _this;
    }
    CreateTeamModalComponent.prototype.initUsers = function () {
        var _this = this;
        this._user = JSON.parse(__WEBPACK_IMPORTED_MODULE_6__services_userSession_service__["a" /* UserSession */].getUserFromStorage());
        this.projectService.getUsersOnProject(this.projectId).subscribe(function (users) {
            _this._users = users.json();
            _this.projectService.getRolesForProject(_this.projectId).subscribe(function (roles) {
                _this._roles = roles.json();
            });
            console.log(_this.projectId);
            _this.teamService.getProjectTeams(_this.projectId).subscribe(function (teams) {
                _this._teams = teams.json();
                var usersInTeams = new Array();
                _this._users.forEach(function (user) { return _this._teams.forEach(function (team) {
                    if (team.members.findIndex(function (userId) { return userId == user._id; }) != -1)
                        usersInTeams.push(user);
                }); });
                _this._availableUsers = _this._users.filter(function (user) { return usersInTeams.findIndex(function (_user) { return _user._id == user._id; }) == -1 && _this._user._id != user._id; });
                console.log(_this.getRoleForSpecificUser(_this._user));
            });
        });
    };
    CreateTeamModalComponent.prototype.userAction = function (user) {
        if (this.getRoleForSpecificUser(user) == 'Team Leader')
            this._teamLeaderId = user._id;
        else {
            this._team.members.push(user._id);
        }
        this._availableUsers = this._availableUsers.filter(function (_user) { return _user._id != user._id; });
    };
    CreateTeamModalComponent.prototype.createTeam = function (teamName) {
        this._team.name = teamName;
        this._team.projectId = this.projectId;
        this._team.leaderId = this._teamLeaderId;
        this._team.tasks = [];
        this.teamService.createTeam(this._team).subscribe(function (res) { return console.log(res.json()); });
    };
    CreateTeamModalComponent.prototype.open = function () {
        this._open(this.modalRef);
    };
    CreateTeamModalComponent.prototype.update = function ($event) {
        throw new Error("Method not implemented.");
    };
    CreateTeamModalComponent.prototype.getRoleForSpecificUser = function (user) {
        if (this._roles) {
            var role = this._roles.find(function (role) { return role.userID == user._id; });
            var roleArray = __WEBPACK_IMPORTED_MODULE_5__services_role_service__["a" /* RoleService */].roleEnumToArray();
            return role ? roleArray[role.role] : null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("createTeamModal"),
        __metadata("design:type", Object)
    ], CreateTeamModalComponent.prototype, "modalRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CreateTeamModalComponent.prototype, "projectId", void 0);
    CreateTeamModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'create-team-modal',
            template: __webpack_require__("../../../../../src/app/components/create-team-modal/create-team-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/create-team-modal/create-team-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */]])
    ], CreateTeamModalComponent);
    return CreateTeamModalComponent;
}(__WEBPACK_IMPORTED_MODULE_1__user_modal_dialog_user_modal_dialog_component__["a" /* UserModalDialogComponent */]));



/***/ }),

/***/ "../../../../../src/app/components/empty-task/empty-task.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".taskName{\r\n    width:100%;\r\n}\r\n\r\n #subtask{\r\n    width: 100%;\r\n}\r\n.empty-task__task-card{\r\n    background: transparent;\r\n    background-color: #e2e4e6;\r\n    border-radius:25px;\r\n    padding:10px;\r\n    margin:15px;\r\n    width:250px;\r\n}\r\n.empty-task__card-header{\r\n    width:100%;\r\n    min-height:50px;\r\n    color:#333;\r\n    font-weight: 600;\r\n    font-size: 22px;\r\n}\r\n.empty-task__card-body{\r\n color:#333;\r\n background-color: #eef0f1;\r\n width:100%;\r\n padding:0;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/empty-task/empty-task.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='panel panel-default empty-task__task-card'>\r\n  <div class='empty-task__card-header'>\r\n    <div class='form-group'>\r\n      <input type='text' class='form-control taskName' placeholder='Enter task name...' #taskName />\r\n    </div>\r\n  </div>\r\n  <div id='empty-task__card-body' class='empty-task__card-body'>\r\n    <div class='empty-task__card-content'>\r\n      <div class='form-group'>\r\n        <textarea id='subtask' class='form-control' type='text-content' placeholder='Enter subtask content...' #subTask></textarea>\r\n      </div>\r\n      <div style='width:100%; text-align:center;'>\r\n        <button (click)='createTask(taskName,subTask)' class='btn btn-success btn-md'>Create new Task</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/empty-task/empty-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_services__ = __webpack_require__("../../../../../src/app/services/task.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmptyTaskComponent = (function () {
    function EmptyTaskComponent(taskService) {
        this.taskService = taskService;
        this.taskCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    EmptyTaskComponent.prototype.ngOnInit = function () {
    };
    EmptyTaskComponent.prototype.createTask = function (taskName, subTask) {
        if (taskName.value) {
            this.taskService.createTask(taskName.value, subTask.value, this.projectId, this.projectOwner);
            this.taskCreated.emit(null);
        }
        else
            this.taskCreated.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EmptyTaskComponent.prototype, "projectId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EmptyTaskComponent.prototype, "projectOwner", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], EmptyTaskComponent.prototype, "taskCreated", void 0);
    EmptyTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'empty-task',
            template: __webpack_require__("../../../../../src/app/components/empty-task/empty-task.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/empty-task/empty-task.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_task_services__["a" /* TaskService */]])
    ], EmptyTaskComponent);
    return EmptyTaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-form{\r\n    padding:50px;\r\n    padding-top: 0;\r\n}\r\n\r\n.login-bg{\r\n    /* background-color: #026aa7; */\r\n    background-image: url(\"/assets/bg.jpg\");\r\n    background-size:auto;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n\r\n}\r\n\r\n.header-text{\r\n    padding:50px;\r\n    padding-top: 20;\r\n    font-family: cursive;\r\n    font-style:oblique;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n.header-text > h1{\r\n    color: white;\r\n    font-weight: 600;\r\n}\r\n\r\n.header-text > h2{\r\n    color: white;\r\n    font-weight: 600;\r\n}\r\nlabel{\r\n    color:white;\r\n    font-family: cursive;\r\n    font-style:oblique;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='login-bg'>\r\n    <div class='container'>\r\n        <div class='row col-xs-12 col-sm-12 col-md-12 col-lg-12'>\r\n            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12' align='center'>\r\n                <div align='center' class='header-text'>\r\n                    <h1>Macrop</h1>\r\n                    <h2>Your personal project assistent</h2>\r\n                </div>\r\n            </div>\r\n            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12' style='padding-top:10px;' align='center'>\r\n                <div align='center' class='header-text'>\r\n                    <h1>Log In to Macrop</h1>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class='row'>\r\n            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>\r\n                <form #form='ngForm' class='login-form' (ngSubmit)=\"login(form)\">\r\n                    <div align='center' class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>\r\n                        <div class='col-xs-12 col-sm-6 col-md-6 col-lg-6'>\r\n                            <div class='form-group'>\r\n                                <label for='username'>Username:</label>\r\n                                <input type='text' placeholder='Please enter your username...' class='form-control' name='username' ngModel />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div align='center' class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>\r\n                        <div class='col-xs-12 col-sm-6 col-md-6 col-lg-6'>\r\n                            <div class='form-group'>\r\n                                <label for='password'>Password:</label>\r\n                                <input type='password' placeholder='Please enter your password...' class='form-control' name='password' ngModel />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <br/>\r\n                    <br/>\r\n\r\n                    <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>\r\n                        <div align='center' class='form-group'>\r\n                            <input type=\"submit\" style='width:200px;' class='btn btn-lg btn-success' value='Log In' />\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n\r\n                <div *ngIf='showLoginError' align='center' class='col-xs-12 col-sm-12 col-md-12'>\r\n                    <div class='col-xs-12 col-sm-6 col-md-6'>\r\n                        <div class='alert alert-danger'>\r\n                            <label>Invalid username or password</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_userSession_service__ = __webpack_require__("../../../../../src/app/services/userSession.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_userSessionSubject_service__ = __webpack_require__("../../../../../src/app/services/userSessionSubject.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(usersService, router, userSessionSubject) {
        this.usersService = usersService;
        this.router = router;
        this.userSessionSubject = userSessionSubject;
        this.showLoginError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_3__services_userSession_service__["a" /* UserSession */].getUserFromStorage())
            this.router.navigate(['userPanel']);
    };
    LoginComponent.prototype.login = function (loginForm) {
        var _this = this;
        var username = loginForm.value.username;
        var password = loginForm.value.password;
        var user = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */](username, password);
        this.usersService.login(user).subscribe(function (res) {
            var isLogged = __WEBPACK_IMPORTED_MODULE_3__services_userSession_service__["a" /* UserSession */].isValidResponse(res);
            var loggedUser = null;
            if (isLogged)
                loggedUser = res.json();
            if (__WEBPACK_IMPORTED_MODULE_3__services_userSession_service__["a" /* UserSession */].validate(loggedUser)) {
                __WEBPACK_IMPORTED_MODULE_3__services_userSession_service__["a" /* UserSession */].toLocalDataStorage(loggedUser);
                _this.userSessionSubject.update();
                _this.router.navigate(['userPanel']);
            }
            else {
                _this.showLoginError = true;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__services_userSessionSubject_service__["a" /* UserSessionSubject */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/logo/logo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo{\r\n    height:82px;\r\n    width:82px;\r\n}\r\n\r\n@media(max-width:480px){\r\n    .logo{\r\n        display: none;\r\n    }\r\n\r\n    .btn-xs{\r\n        padding:1em;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/logo/logo.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='logo' class='container'>\n  <img class='logo' src='assets/logo.png' />\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/logo/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
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

var LogoComponent = (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'logo',
            template: __webpack_require__("../../../../../src/app/components/logo/logo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/logo/logo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-container{\r\n    background-color: rgb(3,11,22); \r\n    width:100%;\r\n    top:0;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n}\r\n\r\n.inline-flex{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n}\r\n\r\n.btn-container{\r\n    padding-top:22px;\r\n    padding-bottom:22px;\r\n}\r\n\r\n@media(max-width:480px){\r\n    .hidden-xs{\r\n        display: none;\r\n    }\r\n\r\n    .hidden-xs > button{\r\n        padding:15px;\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class='nav-container'>\r\n  <div class='col-xs-12 col-sm-12 col-md-12 inline-flex'>\r\n    <div class='hidden-xs col-sm-2 col-md-4'>\r\n      <logo></logo>\r\n    </div>\r\n    <!--If user is not logged in -->\r\n    <div *ngIf='!_isLogged' class='col-xs-12 col-sm-10 col-md-8'>\r\n      <div class='offset-sm-6 offset-md-9'>\r\n        <div class='btn-container'>\r\n          <button routerLink='/signUp' class='btn-xs btn btn-primary'>Sign Up</button>\r\n          <button routerLink='/login' class='btn btn-success'>Log In</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!--If user is logged -->\r\n    <div *ngIf='_isLogged' class='col-xs-12 col-sm-10 col-md-8'>\r\n      <div class='offset-sm-6 offset-md-9'>\r\n        <div class='btn-container'>\r\n          <button routerLink='/newProject' class='btn-xs btn btn-success'>New Project</button>\r\n          <button routerLink='/login' (click)='logout()' class='btn-xs btn btn-danger'>Log Out</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- If Project is opened -->\r\n    <div *ngIf='_isProjectOpened' class='col-xs-12 col-sm-10 col-md-8'>\r\n      <div class='offset-sm-6 offset-md-9'>\r\n        <div class='btn-container'>\r\n          <button routerLink='/newProject' class='btn-xs btn btn-success'>New Task</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_userSession_service__ = __webpack_require__("../../../../../src/app/services/userSession.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_userSessionSubject_service__ = __webpack_require__("../../../../../src/app/services/userSessionSubject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(userSessionSubject, router, activatedRoute) {
        this.userSessionSubject = userSessionSubject;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._isProjectOpened = false;
        this.isLogged();
    }
    NavbarComponent.prototype.isLogged = function () {
        var _this = this;
        this.userSessionSubject.user.asObservable().subscribe(function (user) {
            if (__WEBPACK_IMPORTED_MODULE_1__services_userSession_service__["a" /* UserSession */].validate(user))
                _this._isLogged = true;
            else
                _this._isLogged = false;
        });
    };
    //TODO: Needs to be tested
    NavbarComponent.prototype.ngOnInit = function () {
        this.userSessionSubject.update();
    };
    NavbarComponent.prototype.logout = function () {
        window.localStorage.clear();
        this.userSessionSubject.update();
        this._isLogged = false;
        document.getElementById("main").style.marginLeft = '0';
        document.getElementById("main").className = 'no-transition';
        this.router.navigate(['login']);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_userSessionSubject_service__["a" /* UserSessionSubject */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/new-project-form/new-project-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper{\r\n    padding:5px;\r\n    background-image: url('/assets/panelBg.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    height: 100vh;\r\n    overflow-x:hidden;\r\n}\r\n\r\n span{\r\n    color:white;\r\n}\r\n\r\n.error{\r\n    padding-bottom:10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/new-project-form/new-project-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class='container'>\r\n    <div class='row' (submit)='createProject()'>\r\n      <div class='col-xs-12 col-sm-12 col-md-12'>\r\n        <div class='form-group'>\r\n          <label>Project name:</label>\r\n          <input class='form-control' #projectName name='projectName' />\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf='users' class='col-xs-12 col-sm-6 col-md-6'>\r\n        <table class='table table-striped'>\r\n          <thead>\r\n            <tr>\r\n              <th>Username</th>\r\n              <th>Email</th>\r\n              <th>Role</th>\r\n              <th>Add</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor='let user of users | paginate: {itemsPerPage:9,currentPage:page} '>\r\n              <td>\r\n                <span>{{user.username}}</span>\r\n              </td>\r\n              <td>\r\n                <span>{{user.email}}</span>\r\n              </td>\r\n              <td>\r\n                <div class='form-group'>\r\n                  <select class='form-control' #role>\r\n                    <option *ngFor='let key of rolesKeys' value={{key}}>\r\n                      <div *ngIf='key != \"owner\"'>{{this.roles[key]}}</div>\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <button class='btn btn-success btn-md' (click)='addParticipant(user,role.value)'>\r\n                  <strong>+</strong>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n            <div class='paginator col-xs-12 col-sm-12 col-md-12'>\r\n              <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n            </div>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class='col-sm-6 col-md-6'>\r\n        <table class='table'>\r\n          <thead>\r\n            <tr>\r\n              <th>Username</th>\r\n              <th>Email</th>\r\n              <th>Role</th>\r\n              <th>Remove</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor='let participant of participans  | paginate: {itemsPerPage:9,currentPage:page}'>\r\n              <td>\r\n                <span>{{participant.username}}</span>\r\n              </td>\r\n              <td>\r\n                <span>{{participant.email}}</span>\r\n              </td>\r\n              <td>\r\n                <span>{{this.roles[participant.role]}}</span>\r\n              </td>\r\n              <td>\r\n                <button (click)='removeParticipant(participant)' class='btn btn-danger btn-md'>\r\n                  <strong>-</strong>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class='col-xs-12 col-sm-12 col-md-12'>\r\n        <div class='error' *ngIf='errorFlag'>\r\n          <div class=\"alert alert-warning\">\r\n            <strong>Warrning! Missing project name or there is no added participans to project</strong>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button (click)='createProject(projectName.value)' class='btn btn-lg btn-success'>Create Project</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/new-project-form/new-project-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProjectFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_userSession_service__ = __webpack_require__("../../../../../src/app/services/userSession.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_requestService_service__ = __webpack_require__("../../../../../src/app/services/requestService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_enums_roles__ = __webpack_require__("../../../../../src/app/models/enums/roles.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewProjectFormComponent = (function () {
    function NewProjectFormComponent(userService, requestService, router) {
        this.userService = userService;
        this.requestService = requestService;
        this.router = router;
        this.participans = new Array();
        this.loggedUser = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_userSession_service__["a" /* UserSession */].getUserFromStorage());
        this.errorFlag = false;
        this.roles = this.roleEnumToArray();
        this.rolesKeys = Object.keys(this.roles);
    }
    NewProjectFormComponent.prototype.roleEnumToArray = function () {
        var keys = Object.keys(__WEBPACK_IMPORTED_MODULE_5__models_enums_roles__["a" /* Roles */]);
        var values = [];
        keys.forEach(function (key) { return values[key] = __WEBPACK_IMPORTED_MODULE_5__models_enums_roles__["a" /* Roles */][key]; });
        return values;
    };
    NewProjectFormComponent.prototype.createProject = function (name) {
        var _this = this;
        var projectName = name;
        if (!projectName || typeof projectName == 'undefined' || projectName == '' || this.participans.length == 0) {
            this.errorFlag = true;
            return;
        }
        var project = this.createRequestObject(projectName);
        this.requestService.createPostRequestHeader(project, 'createProject').subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['userPanel']);
        });
    };
    NewProjectFormComponent.prototype.removeParticipant = function (user) {
        var index = this.participans.indexOf(user);
        this.participans = this.participans.filter(function (participant) { return participant._id != user._id; });
    };
    NewProjectFormComponent.prototype.createRequestObject = function (name) {
        var participans = new Array();
        this.participans.forEach(function (participant) { return participans.push(participant._id); });
        return {
            ownerId: [this.loggedUser._id],
            participians: this.participans,
            projectName: name
        };
    };
    NewProjectFormComponent.prototype.isUserParticipant = function (user) {
        var isParticipant = false;
        this.participans.forEach(function (participant) {
            if (participant._id == user._id)
                isParticipant = true;
        });
        return isParticipant;
    };
    NewProjectFormComponent.prototype.addParticipant = function (user, role) {
        if (!user || this.isUserParticipant(user))
            return;
        user.role = role;
        this.participans.push(user);
        console.log(this.participans);
    };
    NewProjectFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (usersAsJson) {
            if (usersAsJson.json())
                _this.users = usersAsJson.json();
            _this.users = _this.users.filter(function (user) { return user._id != _this.loggedUser._id; });
        });
    };
    NewProjectFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-project-form',
            template: __webpack_require__("../../../../../src/app/components/new-project-form/new-project-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/new-project-form/new-project-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_3__services_requestService_service__["a" /* RequestService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], NewProjectFormComponent);
    return NewProjectFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/opened-report/opened-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hidden{\r\n    display: none;\r\n}\r\n\r\n.shown{\r\n    display:block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/opened-report/opened-report.component.html":
/***/ (function(module, exports) {

module.exports = "<user-report id='userReport' #userReport (rendered)='this.initUserReport()' [projectId]='this._projectId' ></user-report>\n<!-- <team-report id='teamReport' #teamReport (rendered)='this.initTeamReport()' [projectId]='this._projectId' ></team-report> -->\n\n<!-- *ngIf=\"this._role!='Owner' && this._role!='Team Leader'\"  -->\n<!-- *ngIf=\"this._role == 'Team Leader'\" -->"

/***/ }),

/***/ "../../../../../src/app/components/opened-report/opened-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenedReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OpenedReportComponent = (function () {
    function OpenedReportComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    OpenedReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (param) {
            _this._role = param.type;
            _this.activatedRoute.queryParams.subscribe(function (param) {
                _this.userId = param.user;
                _this.projectId = param.projectId;
            });
        });
    };
    OpenedReportComponent.prototype.initOnFocuse = function (role, userId, projectId) {
        this.userReport.initReport(userId, projectId);
        // this.teamReport.initReport(userId, projectId);
    };
    OpenedReportComponent.prototype.ngAfterViewInit = function () {
        console.log(this.userReport);
        console.log(this.userId);
        this.userReport.initReport(this.userId, this.projectId);
        // this.teamReport.initReport(this.userId, this.projectId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('userReport'),
        __metadata("design:type", Object)
    ], OpenedReportComponent.prototype, "userReport", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('teamReport'),
        __metadata("design:type", Object)
    ], OpenedReportComponent.prototype, "teamReport", void 0);
    OpenedReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-opened-report',
            template: __webpack_require__("../../../../../src/app/components/opened-report/opened-report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/opened-report/opened-report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], OpenedReportComponent);
    return OpenedReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/project-panel/project-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project-panel/project-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"Func()\">\r\n  project-panel\r\n</button>"

/***/ }),

/***/ "../../../../../src/app/components/project-panel/project-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chatSubscriber_service__ = __webpack_require__("../../../../../src/app/services/chatSubscriber.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_userSession_service__ = __webpack_require__("../../../../../src/app/services/userSession.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectPanelComponent = (function () {
    function ProjectPanelComponent(chatSubscriber, chatService) {
        this.chatSubscriber = chatSubscriber;
        this.chatService = chatService;
        this.user = JSON.parse(__WEBPACK_IMPORTED_MODULE_3__services_userSession_service__["a" /* UserSession */].getUserFromStorage());
    }
    ProjectPanelComponent.prototype.ngOnInit = function () {
    };
    ProjectPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'project-panel',
            template: __webpack_require__("../../../../../src/app/components/project-panel/project-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/project-panel/project-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chatSubscriber_service__["a" /* ChatSubscriber */], __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]])
    ], ProjectPanelComponent);
    return ProjectPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/project-report/project-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper{\r\n    padding:5px;\r\n    background-image: url('/assets/panelBg.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    height: 100vh;\r\n    overflow-x:hidden;\r\n}\r\n\r\n span{\r\n    color:white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project-report/project-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class='container'>\r\n    <div class='row'>\r\n      <div *ngIf='this._projectReports' class='col-xs-12 col-sm-12 col-md-12 '>\r\n        <table class='table table-striped'>\r\n          <thead>\r\n            <tr>\r\n              <th>Report name</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor='let report of this._projectReports | paginate: {itemsPerPage:9,currentPage:page} '>\r\n              <td>\r\n                {{report.name}}'s report\r\n              </td>\r\n              <td>\r\n                <span>{{report.owner}}</span>\r\n              </td>\r\n              <td>\r\n                <button (click)='openReport(report)' class='btn btn-success btn-lg'>Open</button>\r\n              </td>\r\n            </tr>\r\n\r\n            <div class='paginator col-xs-12 col-sm-12 col-md-12'>\r\n              <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n            </div>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project-report/project-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_report_service__ = __webpack_require__("../../../../../src/app/services/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_userSession_service__ = __webpack_require__("../../../../../src/app/services/userSession.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectReportComponent = (function () {
    function ProjectReportComponent(reportService, router) {
        this.reportService = reportService;
        this.router = router;
    }
    ProjectReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._user = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_userSession_service__["a" /* UserSession */].getUserFromStorage());
        this.reportService.getReport('', this.projectId, this._user.username).subscribe(function (res) {
            var reports = res.json().reports;
            _this.reportService.getReportsOfTeam(reports).subscribe(function (res) {
                _this._projectReports = res.json();
                console.log(_this._projectReports);
            });
        });
    };
    ProjectReportComponent.prototype.openReport = function (report) {
        this.router.navigate(['teamReportOpened', 'Team Leader'], { queryParams: { user: report.owner, projectId: this.projectId } });
    };
    ProjectReportComponent.prototype.getSubReport = function (reportId) {
        return this.reportService.getReportById(reportId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProjectReportComponent.prototype, "projectId", void 0);
    ProjectReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'project-report',
            template: __webpack_require__("../../../../../src/app/components/project-report/project-report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/project-report/project-report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_report_service__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ProjectReportComponent);
    return ProjectReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  registration works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
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

var RegistrationComponent = (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/components/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/report/report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<user-report [projectId] = 'this._projectId' *ngIf=\"this._role!='Owner' && this._role!='Team Leader'\" ></user-report>\r\n<team-report [projectId] = 'this._projectId'  *ngIf=\"this._role == 'Team Leader'\"></team-report>\r\n<project-report [projectId] = 'this._projectId'  *ngIf=\"this._role == 'Owner'\"></project-report>"

/***/ }),

/***/ "../../../../../src/app/components/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportComponent = (function () {
    function ReportComponent(location, activatedRoute) {
        this.location = location;
        this.activatedRoute = activatedRoute;
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.location.onPopState = function () { document.getElementById("main").className = 'transition'; };
        this.activatedRoute.params.subscribe(function (res) {
            _this._role = res.role;
        });
        this.activatedRoute.queryParams.subscribe(function (param) {
            _this._projectId = param.projectId;
        });
    };
    ReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-report',
            template: __webpack_require__("../../../../../src/app/components/report/report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* PlatformLocation */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color:rgb(3,11,22);\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n}\r\n\r\n.sidenav a:hover {\r\n    color: #f1f1f1;\r\n}\r\n\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {padding-top: 15px;}\r\n  .sidenav a {font-size: 18px;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"mySidenav\" class=\"sidenav\">\r\n  <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\r\n  <div *ngIf='this.role ==\"Owner\"'>\r\n    <a href='javascript:void(0)' (click)='createTeam(createTeamModal)'>Create Team</a>\r\n    <a href=\"javascript:void(0)\" (click)='createTask()'>Create New Task</a>\r\n    <a href=\"javascript:void(0)\" (click)='addUser(addUserModal)'>Add user to Project</a>\r\n    <a href=\"javascript:void(0)\" (click)='removeUser(removeUserModal)'>Remove user from Project</a>\r\n  </div>\r\n  <div *ngIf='this.role==\"Team Leader\"'>\r\n    <a href=\"javascript:void(0)\" (click)='createTask()'>Create New Task</a>\r\n  </div>\r\n\r\n  <a href=\"javascript:void(0)\" (click)='openReport()'>Open report</a>\r\n  <!-- <a href=\"javascript:void(0)\">View progress</a> -->\r\n\r\n</div>\r\n\r\n<add-or-remove-user-modal (userActionEvent)='addUserModal.update($event)' #removeUserModal [projectId]='this.projectId'></add-or-remove-user-modal>\r\n<add-user-to-project-modal (userActionEvent)='removeUserModal.update($event)' #addUserModal [projectId]='this.projectId'></add-user-to-project-modal>\r\n<create-team-modal #createTeamModal (userActionEvent)='createTeamModal.update($event)' [projectId]='this.projectId'></create-team-modal>"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(router) {
        this.router = router;
        this._removeUser = false;
        this.sidebarClosed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onTaskCreate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
    };
    SidebarComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    };
    SidebarComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        this.sidebarClosed.emit(null);
    };
    SidebarComponent.prototype.createTask = function () {
        this.onTaskCreate.emit(null);
    };
    SidebarComponent.prototype.createTeam = function (createTeamModal) {
        createTeamModal.open();
    };
    SidebarComponent.prototype.removeUser = function (removeUserModal) {
        removeUserModal.open();
    };
    SidebarComponent.prototype.addUser = function (addUserModal) {
        addUserModal.open();
    };
    SidebarComponent.prototype.openReport = function () {
        document.getElementById("main").style.marginLeft = '0';
        document.getElementById("main").className = 'no-transition';
        console.log(this.role);
        this.router.navigate(['/report', this.role], { queryParams: { projectId: this.projectId } });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SidebarComponent.prototype, "sidebarClosed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SidebarComponent.prototype, "onTaskCreate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SidebarComponent.prototype, "projectId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SidebarComponent.prototype, "role", void 0);
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sidebar',
            template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signUp-bg{\r\n    /* background-color: #026aa7; */\r\n    background-image: url(\"/assets/bg.jpg\");\r\n    background-size:auto;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.login-form{\r\n    padding:50px;\r\n    padding-top: 0;\r\n}\r\n\r\n.header-text{\r\n    padding:50px;\r\n    padding-top: 20;\r\n    font-family: cursive;\r\n    font-style:oblique;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n.header-text > h1{\r\n    color: white;\r\n    font-weight: 600;\r\n}\r\n\r\n.header-text > h2{\r\n    color: white;\r\n    font-weight: 600;\r\n}\r\nlabel{\r\n    color:white;\r\n    font-family: cursive;\r\n    font-style:oblique;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='signUp-bg scrollable-x'>\n    <div class='container'>\n        <div class='row col-xs-12 col-sm-12 col-md-12'>\n            <div class='col-xs-12 col-sm-12 col-md-12' align='center'>\n                <div align='center' class='header-text'>\n                    <h1>Macrop</h1>\n                    <h2>Your personal project assistent</h2>\n                </div>\n            </div>\n            <div class='col-xs-12 col-sm-12 col-md-12' style='padding-top:10px;' align='center'>\n                <div align='center' class='header-text'>\n                    <h1>Please fill out the registration page</h1>\n                </div>\n            </div>\n        </div>\n        <div class='row'>\n            <div class='col-xs-12 col-sm-12 col-md-12'>\n                <form #form='ngForm' class='login-form' (ngSubmit)=\"signUp(form)\">\n                    <div align='center' class='col-xs-12 col-sm-12 col-md-12'>\n                        <div class='col-xs-12 col-sm-6 col-md-6'>\n                            <div class='form-group'>\n                                <label for='email'>Email:</label>\n                                <input type='email' class='form-control' name='email' ngModel />\n                            </div>\n                        </div>\n                    </div>\n                    <div align='center' class='col-xs-12 col-sm-12 col-md-12'>\n                        <div class='col-xs-12 col-sm-6 col-md-6'>\n                            <div class='form-group'>\n                                <label for='username'>Username:</label>\n                                <input type='text' class='form-control' name='username' ngModel />\n                            </div>\n                        </div>\n                    </div>\n\n                    <div align='center' class='col-xs-12 col-sm-12 col-md-12'>\n                        <div class='col-xs-12 col-sm-6 col-md-6'>\n                            <div class='form-group'>\n                                <label for='password'>Password:</label>\n                                <input type='password' class='form-control' name='password' ngModel />\n                            </div>\n                        </div>\n                    </div>\n\n                    <div align='center' class='col-xs-12 col-sm-12 col-md-12'>\n                        <div class='col-xs-12 col-sm-6 col-md-6'>\n                            <div class='form-group'>\n                                <label for='password'>Repeat password:</label>\n                                <input type='password' class='form-control' name='repeatedPassword' ngModel />\n                            </div>\n                        </div>\n                    </div>\n\n                    <div *ngIf='userAlreadyExists' align='center' class='col-xs-12 col-sm-12 col-md-12'>\n                        <div class='col-xs-12 col-sm-6 col-md-6'>\n                            <div class='alert alert-danger'>\n                                <label>User already exists</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div *ngIf='validationError' align='center' class='col-xs-12 col-sm-12 col-md-12'>\n                        <div class='col-xs-12 col-sm-6 col-md-6'>\n                            <div class='alert alert-danger'>\n                                <label>Username or password is incorrect</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <br/>\n                    <br/>\n\n                    <div style='padding-bottom:20px;' class='col-xs-12 col-sm-12 col-md-12'>\n                        <div align='center' class='form-group'>\n                            <input type=\"submit\" style='width:200px;' class='btn btn-lg btn-success' value='Sign Up' />\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = (function () {
    function SignUpComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        this.validationError = false;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.validate = function (form) {
        var username = form.value.username;
        var email = form.value.email;
        var password = form.value.password;
        var repeatedPassword = form.value.repeatedPassword;
        if (!username || username == 'undefined' || !password || password == 'undefined' || !email || email == 'undefined' || !repeatedPassword || repeatedPassword == 'undefined')
            return false;
        if (password == repeatedPassword)
            return true;
        return false;
    };
    SignUpComponent.prototype.signUp = function (form) {
        var _this = this;
        var username = form.value.username;
        var email = form.value.email;
        var password = form.value.password;
        var repeatedPassword = form.value.repeatedPassword;
        if (!this.validate(form)) {
            this.validationError = true;
            this.userAlreadyExists = false;
            return;
        }
        this.validationError = false;
        var user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */](username, password, email);
        this.usersService.register(user).subscribe(function (res) {
            var isRegistered = res.json();
            if (!isRegistered)
                _this.userAlreadyExists = true;
            else {
                _this.userAlreadyExists = false;
                _this.router.navigate(['/login']);
            }
        });
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sign-up',
            template: __webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/task-board/task-board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task-panel{\r\n    color:white;\r\n    background-image:url('/assets/taskBg.jpeg');\r\n    width:100%;\r\n    height:100vh;\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\nspan{\r\n    white-space: normal;\r\n}\r\n.task-card{\r\n    background: transparent;\r\n    background-color: #e2e4e6;\r\n    border-radius:25px;\r\n    padding:10px;\r\n    margin:15px;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    width:250px;\r\n}\r\n.card-header{\r\n    width:100%;\r\n    min-height:50px;\r\n    color:#333;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    font-size: 22px;\r\n}\r\n.card-body{\r\n color:#333;\r\n text-align: center;\r\n background-color: #eef0f1;\r\n width:100%;\r\n padding:0;\r\n padding-bottom:20px;\r\n margin-bottom:10px;\r\n}\r\n.buttons-container{\r\n    float:right;\r\n    padding-right: 5px;\r\n\r\n}\r\n\r\n.buttons-container > button{\r\n    border-radius: 15px;\r\n    line-height: 1.42;\r\n    padding:6px 0;\r\n    width:15px;\r\n    height: 15px;\r\n}\r\n\r\n.paused{\r\n    background-color: #f16666;\r\n}\r\n.working{\r\n    background-color: #e7c14e;\r\n}\r\n\r\n.finished{\r\n    background-color:#4ef074;\r\n}\r\n\r\n.container-scrollable{\r\n    margin:10px;\r\n    display: -webkit-box;\r\n}\r\n\r\n.wrapper{\r\n    display: inherit;\r\n}\r\n\r\n.chat-fixed{\r\n    position: fixed;\r\n    right:0;\r\n    bottom:0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/task-board/task-board.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <sidebar [projectId]='_projectId' #sidebar (onTaskCreate)='this._createTask = true' [role]='this._role' (sidebarClosed)='this._sidebarOpened=false'></sidebar>\r\n</div>\r\n\r\n<div dragScroll class='task-panel'>\r\n  <div>\r\n    <div *ngIf='!this._sidebarOpened'>\r\n      <span style=\"margin-left:5px; font-size:30px;cursor:pointer\" (click)=\"openSidebar(sidebar)\">&#9776;</span>\r\n    </div>\r\n  </div>\r\n  <div class='container-scrollable'>\r\n    <div dnd-droppable (onDropSuccess)=\"transferDataSuccess($event)\" style='display:inherit' *ngIf='_tasks'>\r\n      <add-user-to-task-modal #addUserToTaskModal [projectId]='this._projectId' [role]='this._role'></add-user-to-task-modal>\r\n      <empty-task *ngIf='this._createTask' (taskCreated)='this._createTask = false' [projectId]='this._projectId' [projectOwner]='this._userID'></empty-task>\r\n      <div dnd-draggable [dragEnabled]=\"true\" [dragData]=\"task\" *ngFor='let task of _tasks; let i = index' class='panel panel-default task-card'>\r\n        <div *ngIf='this._isProjectOwner == \"true\" || this._role==\"Team Leader\"' class='float-right'>\r\n          <button class='btn btn-success btn-sm' (click)='addUserToTask(addUserToTaskModal,task)'>\r\n            <strong>+</strong>\r\n          </button>\r\n        </div>\r\n        <div class='card-header'>\r\n          <span>{{task.name}}</span>\r\n        </div>\r\n        <div *ngFor='let subTask of task.body; let i = index'>\r\n          <div id='card-body' *ngIf=\"task.completness[i]=='paused'\" class='card-body paused'>\r\n            <div class='buttons-container'>\r\n              <button class='btn btn-sm btn-success round' (click)='setTaskFinished(task,i)'></button>\r\n              <button class='btn btn-sm btn-warning round' (click)='setTaskWorking(task,i)'></button>\r\n              <button class='btn btn-sm btn-danger round' (click)='setTaskPaused(task,i)'></button>\r\n            </div>\r\n            <br/>\r\n            <div class='card-content'>\r\n              <span style='white-space:normal;'>{{subTask}}</span>\r\n            </div>\r\n          </div>\r\n\r\n          <div id='card-body' *ngIf=\"task.completness[i]=='working'\" class='card-body working'>\r\n            <div class='buttons-container'>\r\n              <button class='btn btn-sm btn-success round' (click)='setTaskFinished(task,i)'></button>\r\n              <button class='btn btn-sm btn-warning round' (click)='setTaskWorking(task,i)'></button>\r\n              <button class='btn btn-sm btn-danger round' (click)='setTaskPaused(task,i)'></button>\r\n            </div>\r\n            <br/>\r\n            <div class='card-content'>\r\n              <span>{{subTask}}</span>\r\n            </div>\r\n          </div>\r\n\r\n          <div id='card-body' *ngIf=\"task.completness[i]=='finished'\" class='card-body finished'>\r\n            <div class='buttons-container'>\r\n              <button class='btn btn-sm btn-success round' (click)='setTaskFinished(task,i)'></button>\r\n              <button class='btn btn-sm btn-warning round' (click)='setTaskWorking(task,i)'></button>\r\n              <button class='btn btn-sm btn-danger round' (click)='setTaskPaused(task,i)'></button>\r\n            </div>\r\n            <br/>\r\n            <div class='card-content'>\r\n              <span>{{subTask}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <div *ngIf='this._isProjectOwner == \"true\" || this._role==\"Team Leader\"' class='form-group'>\r\n            <textarea id='subtask' #subTask (keyup)='addSubtask($event,task,subTask.value)' class='form-control' type='text-content'\r\n              placeholder='Enter subtask content...' #subTask></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class='chat-fixed'>\r\n    <div class='float-right'>\r\n      <chat></chat>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/task-board/task-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_task_services__ = __webpack_require__("../../../../../src/app/services/task.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_taskSubscriber_service__ = __webpack_require__("../../../../../src/app/services/taskSubscriber.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dnd_bundles_style_css__ = __webpack_require__("../../../../ng2-dnd/bundles/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dnd_bundles_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_dnd_bundles_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_projectSubscriber_service__ = __webpack_require__("../../../../../src/app/services/projectSubscriber.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TaskBoardComponent = (function () {
    function TaskBoardComponent(locationPlatform, location, taskSubscriber, activatedRoute, projectService, taskService, projectSubscriber, router) {
        var _this = this;
        this.locationPlatform = locationPlatform;
        this.location = location;
        this.taskSubscriber = taskSubscriber;
        this.activatedRoute = activatedRoute;
        this.projectService = projectService;
        this.taskService = taskService;
        this.projectSubscriber = projectSubscriber;
        this.router = router;
        this._sidebarOpened = false;
        this._isProjectOwner = false;
        this._createTask = false;
        this.taskSubscriber.taskSubscriber.subscribe(function (task) {
            var alreadyExists = false;
            console.log(task);
            if (_this._tasks)
                _this._tasks.forEach(function (_task) {
                    if (task._id == _task._id)
                        alreadyExists = true;
                });
            if (alreadyExists) {
                var taskIndex = _this._tasks.findIndex(function (_task) { return task._id == _task._id; });
                _this._tasks.splice(taskIndex, 1, task);
            }
            else {
                if (task.responsible.findIndex(function (userID) { return userID == _this._userID; }) != -1)
                    _this._tasks.push(task);
            }
        });
        this.projectSubscriber.userRemovedFromProject.subscribe(function (userId) {
            console.log(userId);
            if (userId == _this._userID)
                _this.location.back();
        });
    }
    TaskBoardComponent.prototype.doSomething = function () {
        console.log("radi");
    };
    TaskBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('radi');
        this.locationPlatform.onPopState(function () {
            document.getElementById("main").style.marginLeft = "0";
            document.getElementById("main").setAttribute('class', 'no-transition');
        });
        this.activatedRoute.queryParams.subscribe(function (res) {
            _this._isProjectOwner = res.isUserProjectOwner;
            console.log(_this._isProjectOwner);
            _this._userID = res.userID;
            _this._role = res.role;
        });
        this.activatedRoute.params.subscribe(function (res) {
            _this._projectId = res.id;
            _this.projectService.getProjectTasks(_this._projectId).subscribe(function (tasks) {
                _this._tasks = tasks.json();
                // filter tasks so array should consists only from tasks for the specified user
                _this._tasks = _this._tasks.filter(function (task) { return task.responsible.includes(_this._userID); });
            });
        });
    };
    TaskBoardComponent.prototype.addUserToTask = function (addUserToTaskModal, task) {
        addUserToTaskModal.setTask(task);
        console.log(task);
    };
    TaskBoardComponent.prototype.setTaskFinished = function (task, subTaskIndex) {
        console.log(subTaskIndex);
        task.completness[subTaskIndex] = 'finished';
        console.log(task);
        this.taskService.updateTask(task).subscribe();
    };
    TaskBoardComponent.prototype.setTaskWorking = function (task, subTaskIndex) {
        task.completness[subTaskIndex] = 'working';
        this.taskService.updateTask(task).subscribe();
    };
    TaskBoardComponent.prototype.setTaskPaused = function (task, subTaskIndex) {
        task.completness[subTaskIndex] = 'paused';
        this.taskService.updateTask(task).subscribe();
    };
    TaskBoardComponent.prototype.transferDataSuccess = function ($event) {
        console.log($event);
    };
    TaskBoardComponent.prototype.openSidebar = function (sidebar) {
        sidebar.openNav();
        this._sidebarOpened = true;
    };
    TaskBoardComponent.prototype.addSubtask = function ($event, task, subtask) {
        if ($event.keyCode == 13) {
            if (!$event.shiftKey) {
                task.body.push(subtask);
                task.completness.push('paused');
                this.taskService.updateTask(task).subscribe();
                subtask = '';
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:beforeunload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TaskBoardComponent.prototype, "doSomething", null);
    TaskBoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'task-board',
            template: __webpack_require__("../../../../../src/app/components/task-board/task-board.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/task-board/task-board.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_common__["i" /* PlatformLocation */], __WEBPACK_IMPORTED_MODULE_7__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_4__services_taskSubscriber_service__["a" /* TaskSubscriber */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_3__services_task_services__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_6__services_projectSubscriber_service__["a" /* ProjectSubscriber */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], TaskBoardComponent);
    return TaskBoardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/team-report-opened/team-report-opened.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/team-report-opened/team-report-opened.component.html":
/***/ (function(module, exports) {

module.exports = "<team-report id='teamReport' #teamReport (rendered)='this.initTeamReport()' [projectId]='this._projectId' ></team-report> "

/***/ }),

/***/ "../../../../../src/app/components/team-report-opened/team-report-opened.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamReportOpenedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamReportOpenedComponent = (function () {
    function TeamReportOpenedComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    TeamReportOpenedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (param) {
            _this._role = param.type;
            _this.activatedRoute.queryParams.subscribe(function (param) {
                _this.userId = param.user;
                _this.projectId = param.projectId;
            });
        });
    };
    TeamReportOpenedComponent.prototype.initOnFocuse = function (role, userId, projectId) {
        this.teamReport.initReport(userId, projectId);
        // this.teamReport.initReport(userId, projectId);
    };
    TeamReportOpenedComponent.prototype.ngAfterViewInit = function () {
        console.log(this.teamReport);
        console.log(this.userId);
        this.teamReport.initReport(this.userId, this.projectId);
        // this.teamReport.initReport(this.userId, this.projectId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('teamReport'),
        __metadata("design:type", Object)
    ], TeamReportOpenedComponent.prototype, "teamReport", void 0);
    TeamReportOpenedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-team-report-opened',
            template: __webpack_require__("../../../../../src/app/components/team-report-opened/team-report-opened.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/team-report-opened/team-report-opened.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], TeamReportOpenedComponent);
    return TeamReportOpenedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/team-report/team-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper{\r\n    padding:5px;\r\n    background-image: url('/assets/panelBg.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    height: 100vh;\r\n    overflow-x:hidden;\r\n}\r\n\r\n span{\r\n    color:white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/team-report/team-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class='container'>\r\n    <div class='row'>\r\n      <div *ngIf='this._teamReports' class='col-xs-12 col-sm-12 col-md-12 '>\r\n        <table class='table table-striped'>\r\n          <thead>\r\n            <tr>\r\n              <th>Report name</th>\r\n              <th>Report owner id</th>\r\n              <th>Open</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor='let report of this._teamReports | paginate: {itemsPerPage:9,currentPage:page} '>\r\n              <td>\r\n                <span>{{report.name}}'s report</span>\r\n              </td>\r\n              <td>\r\n                <span>{{report.owner}}</span>\r\n              </td>\r\n              <td>\r\n                <button class='btn btn-success btn-md' (click)='openReport(report)'>\r\n                  <strong>Open</strong>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n            <div class='paginator col-xs-12 col-sm-12 col-md-12'>\r\n              <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n            </div>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/team-report/team-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_userSession_service__ = __webpack_require__("../../../../../src/app/services/userSession.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_report_service__ = __webpack_require__("../../../../../src/app/services/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamReportComponent = (function () {
    function TeamReportComponent(reportService, router) {
        this.reportService = reportService;
        this.router = router;
        this._reportExist = false;
        this.rendered = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TeamReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._user = JSON.parse(__WEBPACK_IMPORTED_MODULE_1__services_userSession_service__["a" /* UserSession */].getUserFromStorage());
        this.reportService.getReport(this._user._id, this.projectId, this._user.username).subscribe(function (res) {
            var reports;
            if (res.json() && res.json().reports)
                reports = res.json().reports;
            _this.reportService.getReportsOfTeam(reports).subscribe(function (res) {
                _this._teamReports = res.json();
            });
            _this.rendered.emit(null);
        });
    };
    TeamReportComponent.prototype.initReport = function (userId, projectId) {
        var _this = this;
        this._user._id = userId;
        this.projectId = projectId;
        this.reportService.getReport(this._user._id, this.projectId, this._user.username).subscribe(function (res) {
            var reports = res.json().reports;
            _this.reportService.getReportsOfTeam(reports).subscribe(function (res) {
                _this._teamReports = res.json();
            });
        });
    };
    TeamReportComponent.prototype.openReport = function (report) {
        this.router.navigate(['openedReport', 'user'], { queryParams: { user: report.owner, projectId: this.projectId } });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TeamReportComponent.prototype, "projectId", void 0);
    TeamReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'team-report',
            template: __webpack_require__("../../../../../src/app/components/team-report/team-report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/team-report/team-report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_report_service__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], TeamReportComponent);
    return TeamReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-modal-dialog/user-modal-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModalDialogComponent; });
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


var UserModalDialogComponent = (function () {
    function UserModalDialogComponent() {
        this.userActionEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UserModalDialogComponent.prototype.ngOnInit = function () {
        this.initUsers();
    };
    UserModalDialogComponent.prototype._open = function (modalDialog) {
        modalDialog.open();
    };
    UserModalDialogComponent.prototype.onUserActionHandler = function (user) {
        this.userAction(user);
    };
    UserModalDialogComponent.prototype.setModalDialog = function (modalDialog) {
        this._modalDialog = modalDialog;
    };
    UserModalDialogComponent.prototype.emitEvent = function (data) {
        this.userActionEvent.emit(data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], UserModalDialogComponent.prototype, "userActionEvent", void 0);
    return UserModalDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-panel/user-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-body{\r\n    background-image: url(\"/assets/panelBg.png\");\r\n    height: 100vh;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n}\r\n.panel-container{\r\n   margin-left:20px;\r\n   margin-right:20px;\r\n}\r\n.paginator{\r\n    background-position: bottom;\r\n}\r\n\r\n@media(max-width:768px){\r\n    .panel-body{\r\n        height: 100%;\r\n        width:100%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-panel/user-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='panel-body'>\n  <div class='panel-container'>\n    <div *ngIf='projects'>\n      <div *ngIf='roles'>\n        <div class='row'>\n          <div *ngFor='let project of projects | paginate: {itemsPerPage:9,currentPage:page}' class='col-xs-12 col-sm-6 col-md-3 col-lg-4'>\n            <board [role]='this.rolesAssoc[this.getRoleForProject(project)]' [id]=\"project._id\"></board>\n          </div>\n          <div class='paginator col-xs-12 col-sm-12 col-md-12'>\n            <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user-panel/user-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_projectSubscriber_service__ = __webpack_require__("../../../../../src/app/services/projectSubscriber.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_userSession_service__ = __webpack_require__("../../../../../src/app/services/userSession.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_enums_roles__ = __webpack_require__("../../../../../src/app/models/enums/roles.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserPanelComponent = (function () {
    function UserPanelComponent(projectSubscriber, projectService, userService) {
        var _this = this;
        this.projectSubscriber = projectSubscriber;
        this.projectService = projectService;
        this.userService = userService;
        this.page = 1;
        this.user = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_userSession_service__["a" /* UserSession */].getUserFromStorage());
        this.projectSubscriber.projectSubscriber.subscribe(function (data) {
            console.log(data);
            var alreadyExists = _this.projects.findIndex(function (project) { return project._id == data._id; }) != -1 ? true : false;
            var isOwner = data.owners.findIndex(function (id) { return _this.user._id == id; }) !== -1 ? true : false;
            var isParticipant = data.participians.findIndex(function (id) { return _this.user._id == id; }) !== -1 ? true : false;
            if (!alreadyExists && (isOwner || isParticipant))
                _this.projects.push(data);
        });
        this.projectSubscriber.userAddedToProject.subscribe(function (project) {
            console.log(project);
            if (project.participians.findIndex(function (userId) { return userId == _this.user._id; }) != -1)
                _this.projects.push(project);
        });
        this.rolesAssoc = this.roleEnumToArray();
        this.roleKeys = Object.keys(__WEBPACK_IMPORTED_MODULE_5__models_enums_roles__["a" /* Roles */]);
    }
    UserPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getProjectsByUserId(this.user._id).subscribe(function (result) {
            _this.projects = result.json();
            _this.userService.getRolesForUser(_this.user._id).subscribe(function (roles) {
                _this.roles = roles.json();
            });
        });
    };
    UserPanelComponent.prototype.getRoleForProject = function (project) {
        var _this = this;
        var role = this.roles.find(function (role) { return role.projectID == project._id && role.userID == _this.user._id; });
        return role ? role.role : null;
    };
    UserPanelComponent.prototype.roleEnumToArray = function () {
        var keys = Object.keys(__WEBPACK_IMPORTED_MODULE_5__models_enums_roles__["a" /* Roles */]);
        var values = [];
        keys.forEach(function (key) { return values[key] = __WEBPACK_IMPORTED_MODULE_5__models_enums_roles__["a" /* Roles */][key]; });
        return values;
    };
    UserPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-panel',
            template: __webpack_require__("../../../../../src/app/components/user-panel/user-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-panel/user-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_projectSubscriber_service__["a" /* ProjectSubscriber */], __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]])
    ], UserPanelComponent);
    return UserPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-report/user-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-report/user-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div [(froalaModel)]=\"_report\" #report [froalaEditor]></div>\n<hr />\n<button (click)='writeReport()' class='btn btn-success btn-lg'>Save</button>"

/***/ }),

/***/ "../../../../../src/app/components/user-report/user-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_report_service__ = __webpack_require__("../../../../../src/app/services/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_userSession_service__ = __webpack_require__("../../../../../src/app/services/userSession.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_reportSubscriber_service__ = __webpack_require__("../../../../../src/app/services/reportSubscriber.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserReportComponent = (function () {
    function UserReportComponent(reportService, reportSubscriber) {
        this.reportService = reportService;
        this._reportExist = false;
        this.rendered = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UserReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._user = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_userSession_service__["a" /* UserSession */].getUserFromStorage());
        this.reportService.getReport(this._user._id, this.projectId, this._user.username).subscribe(function (report) {
            _this._reportObject = report.json();
            console.log(report.json());
            if (report.json()) {
                _this._report = _this._reportObject.data;
                _this._reportExist = true;
            }
            _this.rendered.emit(null);
        });
    };
    UserReportComponent.prototype.initReport = function (userId, projectId) {
        var _this = this;
        this._user._id = userId;
        this.projectId = projectId;
        this.reportService.getReport(userId, projectId, this._user.username).subscribe(function (report) {
            _this._reportObject = report.json();
            console.log(report.json());
            if (report.json()) {
                _this._report = _this._reportObject.data;
                _this._reportExist = true;
            }
        });
    };
    Object.defineProperty(UserReportComponent.prototype, "userId", {
        set: function (userId) {
            this._user._id = userId;
        },
        enumerable: true,
        configurable: true
    });
    UserReportComponent.prototype.writeReport = function () {
        var reqObject = this.reportService.createReportObject(this._user._id, this.projectId, this._report, 'userReport', this._user.username, []);
        if (!this._reportExist)
            this.reportService.createReport(reqObject).subscribe();
        else {
            reqObject = Object.assign(reqObject, { reportId: this._reportObject._id });
            console.log(reqObject);
            this.reportService.updateReport(reqObject).subscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UserReportComponent.prototype, "projectId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("userReportModal"),
        __metadata("design:type", Object)
    ], UserReportComponent.prototype, "modalRef", void 0);
    UserReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-report',
            template: __webpack_require__("../../../../../src/app/components/user-report/user-report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-report/user-report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_report_service__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_3__services_reportSubscriber_service__["a" /* ReportSubscriberService */]])
    ], UserReportComponent);
    return UserReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/enums/roles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Roles; });
var Roles;
(function (Roles) {
    Roles["owner"] = "Owner";
    Roles["teamLeader"] = "Team Leader";
    Roles["frontEndDeveloper"] = "Frontend Developer";
    Roles["backEndDeveloper"] = "Backend Developer";
    Roles["designer"] = "Designer";
    Roles["tester"] = "Tester";
    Roles["qa"] = "QA";
    Roles["softwareEngineer"] = "Software Engineer";
    Roles["softwareArchitect"] = "Software Architect";
})(Roles || (Roles = {}));


/***/ }),

/***/ "../../../../../src/app/models/message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(author, text, chatID) {
        this.author = author;
        this.text = text;
        this.chatID = chatID;
    }
    return Message;
}());



/***/ }),

/***/ "../../../../../src/app/models/task.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
//this needs to be remodeled 
var Task = (function () {
    function Task(id, name, body, projectID, responsible, completness) {
        this._id = id;
        this.name = name;
        this.body = body;
        this.projectID = projectID;
        this.responsible = responsible;
        this.completness = completness;
    }
    return Task;
}());



/***/ }),

/***/ "../../../../../src/app/models/team.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Team; });
var Team = (function () {
    function Team(projectId, name, leaderId, members, tasks) {
        this.projectId = projectId;
        this.name = name;
        this.leaderId = leaderId;
        this.members = members || new Array();
        this.tasks = tasks || new Array();
    }
    return Team;
}());



/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(username, password, email, id, role) {
        if (!username || !password || typeof username === 'undefined' || typeof password === 'undefined')
            throw Error("Invalid values for username or password");
        this.username = username;
        this.password = password;
        this.email = email || '';
        this._id = id || '';
        this.role = role || null;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requestService_service__ = __webpack_require__("../../../../../src/app/services/requestService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatService = (function () {
    function ChatService(requestService) {
        this.requestService = requestService;
    }
    ChatService.prototype.getMessagesForProject = function (projectID) {
        return this.requestService.createGetRequestHeader(projectID, 'getChatMessages');
    };
    ChatService.prototype.getProjectChatById = function (id) {
        return this.requestService.createGetRequestHeader(id, 'getChat');
    };
    ChatService.prototype.sendMessage = function (message) {
        return this.requestService.createPostRequestHeader(message, 'createMessage');
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__requestService_service__["a" /* RequestService */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "../../../../../src/app/services/chatSubscriber.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatSubscriber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatSubscriber = (function () {
    function ChatSubscriber() {
        this.chatSubscriber = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    ChatSubscriber.prototype.update = function (data) {
        this.chatSubscriber.next(data);
    };
    ChatSubscriber = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ChatSubscriber);
    return ChatSubscriber;
}());



/***/ }),

/***/ "../../../../../src/app/services/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requestService_service__ = __webpack_require__("../../../../../src/app/services/requestService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectService = (function () {
    function ProjectService(requestService) {
        this.requestService = requestService;
    }
    ProjectService.prototype.getProjectsByUserId = function (userID) {
        return this.requestService.createGetRequestHeader(userID, 'getProjects');
    };
    ProjectService.prototype.getProjectById = function (projectID) {
        return this.requestService.createGetRequestHeader(projectID, 'getProject');
    };
    ProjectService.prototype.getProjectTasks = function (projectID) {
        return this.requestService.createGetRequestHeader(projectID, 'getProjectTasks');
    };
    ProjectService.prototype.getUsersOnProject = function (projectId) {
        return this.requestService.createGetRequestHeader(projectId, 'getUsersByProjectId');
    };
    ProjectService.prototype.updateProjectUsers = function (projectId, user) {
        var requestObejct = {
            projectId: projectId,
            userId: user._id
        };
        return this.requestService.createPutRequestHeader(requestObejct, 'removeProjectUser');
    };
    ProjectService.prototype.addUserToProject = function (projectId, user) {
        var requestObejct = {
            projectId: projectId,
            userId: user._id
        };
        return this.requestService.createPutRequestHeader(requestObejct, 'addUserToProject');
    };
    ProjectService.prototype.getRolesForProject = function (projectId) {
        return this.requestService.createGetRequestHeader(projectId, 'getRolesForUsersOnProject');
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__requestService_service__["a" /* RequestService */]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "../../../../../src/app/services/projectSubscriber.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectSubscriber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectSubscriber = (function () {
    function ProjectSubscriber() {
        this.projectSubscriber = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.userRemovedFromProject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.userAddedToProject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    ProjectSubscriber.prototype.update = function (data) {
        this.projectSubscriber.next(data);
    };
    ProjectSubscriber.prototype.updateRemovedUser = function (data) {
        this.userRemovedFromProject.next(data);
    };
    ProjectSubscriber.prototype.updateAddedUser = function (data) {
        this.userAddedToProject.next(data);
    };
    ProjectSubscriber = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ProjectSubscriber);
    return ProjectSubscriber;
}());



/***/ }),

/***/ "../../../../../src/app/services/report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requestService_service__ = __webpack_require__("../../../../../src/app/services/requestService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportService = (function () {
    function ReportService(requestService) {
        this.requestService = requestService;
    }
    ReportService.prototype.updateReport = function (reportObject) {
        return this.requestService.createPutRequestHeader(reportObject, 'updateReport');
    };
    ReportService.prototype.createReportObject = function (ownerId, projectId, data, type, name, reports) {
        var reqObj = {
            ownerId: ownerId,
            projectId: projectId,
            data: data,
            type: type,
            name: name,
            reports: reports
        };
        return reqObj;
    };
    ReportService.prototype.createReport = function (reportObject) {
        return this.requestService.createPostRequestHeader(reportObject, 'createReport');
    };
    ReportService.prototype.getReport = function (ownerId, projectId, name) {
        var reqObj = {
            ownerId: ownerId,
            projectId: projectId,
            name: name
        };
        return this.requestService.createPostRequestHeader(reqObj, 'getReport');
    };
    ReportService.prototype.getReportById = function (reportId) {
        return this.requestService.createGetRequestHeader(reportId, 'getReport');
    };
    ReportService.prototype.getReportsOfTeam = function (reports) {
        var reqObj = {
            reports: reports
        };
        return this.requestService.createPostRequestHeader(reqObj, 'getReportsOfTeam');
    };
    ReportService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__requestService_service__["a" /* RequestService */]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "../../../../../src/app/services/reportSubscriber.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportSubscriberService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportSubscriberService = (function () {
    function ReportSubscriberService() {
        this.data = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    ReportSubscriberService.prototype.update = function (data) {
        this.data.next(data);
    };
    ReportSubscriberService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ReportSubscriberService);
    return ReportSubscriberService;
}());



/***/ }),

/***/ "../../../../../src/app/services/requestService.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestService = (function () {
    function RequestService(http) {
        this.http = http;
        this._localServer = 'http://localhost:3000/api/';
        this._deployedServer = 'https://macrop.herokuapp.com/api/';
        this._server = this._deployedServer;
        ;
    }
    RequestService.prototype.createPostRequestHeader = function (data, action) {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        header.append("Content-Type", "application/json");
        return this.http.post(this._server + action, JSON.stringify(data), { headers: header });
    };
    RequestService.prototype.createGetRequestHeader = function (data, action) {
        if (!data || typeof data == 'undefined')
            data = '';
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        header.append("Content-Type", "application/json");
        return this.http.get(this._server + action + '/' + data, { headers: header });
    };
    RequestService.prototype.createPutRequestHeader = function (data, action) {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        header.append("Content-Type", "application/json");
        return this.http.put(this._server + action, JSON.stringify(data), { headers: header });
    };
    RequestService.prototype.createDeleteRequestHeader = function (data, action) {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        header.append("Content-Type", "application/json");
        return this.http.delete(this._server + action, new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: header,
            body: data
        }));
    };
    RequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "../../../../../src/app/services/role.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_enums_roles__ = __webpack_require__("../../../../../src/app/models/enums/roles.ts");

var RoleService = (function () {
    function RoleService() {
    }
    RoleService.roleEnumToArray = function () {
        var keys = Object.keys(__WEBPACK_IMPORTED_MODULE_0__models_enums_roles__["a" /* Roles */]);
        var values = [];
        keys.forEach(function (key) { return values[key] = __WEBPACK_IMPORTED_MODULE_0__models_enums_roles__["a" /* Roles */][key]; });
        return values;
    };
    RoleService.getRoleKeys = function () {
        return Object.keys(__WEBPACK_IMPORTED_MODULE_0__models_enums_roles__["a" /* Roles */]);
    };
    return RoleService;
}());



/***/ }),

/***/ "../../../../../src/app/services/task.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requestService_service__ = __webpack_require__("../../../../../src/app/services/requestService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_task__ = __webpack_require__("../../../../../src/app/models/task.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskService = (function () {
    function TaskService(requestService) {
        this.requestService = requestService;
    }
    TaskService.prototype.updateTask = function (task) {
        if (!task || typeof __WEBPACK_IMPORTED_MODULE_2__models_task__["a" /* Task */] == 'undefined')
            throw Error("Task must be defined");
        return this.requestService.createPutRequestHeader(task, 'updateTask');
    };
    TaskService.prototype.createTask = function (taskName, subTask, projectId, projectOwner) {
        if (!taskName)
            throw Error("Taskname must be defined!");
        var data;
        if (!subTask)
            data = this._createRequestObject(taskName, projectId, [projectOwner], [], []);
        else
            data = this._createRequestObject(taskName, projectId, [projectOwner], [subTask], ['paused']);
        this.requestService.createPostRequestHeader(data, 'createTask').subscribe(function (res) { return console.log(res); });
    };
    TaskService.prototype._createRequestObject = function (taskName, projectId, responsible, body, completness) {
        return {
            name: taskName,
            projectID: projectId,
            responsible: responsible,
            body: body,
            completness: completness
        };
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__requestService_service__["a" /* RequestService */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "../../../../../src/app/services/taskSubscriber.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskSubscriber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskSubscriber = (function () {
    function TaskSubscriber() {
        this.taskSubscriber = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.taskToAddUser = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
    }
    TaskSubscriber.prototype.update = function (data) {
        this.taskSubscriber.next(data);
    };
    TaskSubscriber.prototype.updateTaskForUsersAddition = function (data) {
        this.taskToAddUser.next(data);
    };
    TaskSubscriber = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TaskSubscriber);
    return TaskSubscriber;
}());



/***/ }),

/***/ "../../../../../src/app/services/team.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__requestService_service__ = __webpack_require__("../../../../../src/app/services/requestService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamService = (function () {
    function TeamService(requestService) {
        this.requestService = requestService;
    }
    TeamService.prototype.createTeam = function (teamObject) {
        return this.requestService.createPostRequestHeader(teamObject, 'createTeam');
    };
    TeamService.prototype.getProjectTeams = function (projectId) {
        return this.requestService.createGetRequestHeader(projectId, 'getProjectTeams');
    };
    TeamService.prototype.getTeamByLeaderId = function (leaderId, projectId) {
        var reqObj = {
            leaderId: leaderId,
            projectId: projectId
        };
        return this.requestService.createPostRequestHeader(reqObj, 'getTeamByLeaderId');
    };
    TeamService.prototype.addUserToTeam = function (user, teamId) {
        var reqObject = {
            user: user,
            teamId: teamId
        };
        return this.requestService.createPostRequestHeader(reqObject, 'addUserToTeam');
    };
    TeamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__requestService_service__["a" /* RequestService */]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "../../../../../src/app/services/userSession.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSession; });
var UserSession = (function () {
    function UserSession() {
    }
    UserSession.toLocalDataStorage = function (user) {
        if (!this.validate(user))
            throw Error("Object must be typeof User");
        window.localStorage.setItem('activeUserSession', JSON.stringify(user));
    };
    UserSession.validate = function (user) {
        if (!user)
            return false;
        return true;
    };
    UserSession.isValidResponse = function (userAsResponse) {
        if (!userAsResponse || !userAsResponse.json())
            return false;
        else
            return true;
    };
    UserSession.getUserFromStorage = function () {
        if (UserSession.isLogged())
            return window.localStorage.getItem('activeUserSession');
        return null;
    };
    UserSession.isLogged = function () {
        return window.localStorage.getItem('activeUserSession') ? true : false;
    };
    return UserSession;
}());



/***/ }),

/***/ "../../../../../src/app/services/userSessionSubject.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSessionSubject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userSession_service__ = __webpack_require__("../../../../../src/app/services/userSession.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserSessionSubject = (function () {
    function UserSessionSubject() {
        this.user = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
    }
    UserSessionSubject.prototype.update = function () {
        if (__WEBPACK_IMPORTED_MODULE_2__userSession_service__["a" /* UserSession */].getUserFromStorage())
            this.user.next(__WEBPACK_IMPORTED_MODULE_2__userSession_service__["a" /* UserSession */].getUserFromStorage());
    };
    UserSessionSubject = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], UserSessionSubject);
    return UserSessionSubject;
}());



/***/ }),

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userSession_service__ = __webpack_require__("../../../../../src/app/services/userSession.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requestService_service__ = __webpack_require__("../../../../../src/app/services/requestService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = (function () {
    function UsersService(requestService) {
        this.requestService = requestService;
    }
    UsersService.prototype.login = function (user) {
        if (!__WEBPACK_IMPORTED_MODULE_1__userSession_service__["a" /* UserSession */].validate(user))
            throw Error("Bad request, wrong input data");
        return this.requestService.createPostRequestHeader(user, "login");
    };
    UsersService.prototype.register = function (user) {
        return this.requestService.createPostRequestHeader(user, 'register');
    };
    UsersService.prototype.getAllUsers = function () {
        return this.requestService.createGetRequestHeader(null, 'getAllUsers');
    };
    UsersService.prototype.getRolesForUser = function (userId) {
        return this.requestService.createGetRequestHeader(userId, 'getRolesForUser');
    };
    UsersService.prototype.getRoleForUser = function (userId, projectId) {
        var requestObject = {
            userId: userId,
            projectId: projectId
        };
        return this.requestService.createPostRequestHeader(requestObject, 'getRoleForUserOnProject');
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__requestService_service__["a" /* RequestService */]])
    ], UsersService);
    return UsersService;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);





window["$"] = __WEBPACK_IMPORTED_MODULE_4_jquery__;
window["jQuery"] = __WEBPACK_IMPORTED_MODULE_4_jquery__;
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map