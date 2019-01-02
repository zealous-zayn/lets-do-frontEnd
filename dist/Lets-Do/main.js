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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-friend/add-friend.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-friend/add-friend.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-width{\r\n    font-size: 1.5em;\r\n}\r\n\r\n.btn-circle.btn-lg {\r\n    width: 50px;\r\n    height: 50px;\r\n    padding: 8px 12px;\r\n    font-size: 25px;\r\n    line-height: 1.33;\r\n    border-radius: 25px;\r\n  }\r\n\r\n@media only screen and (min-width : 650px){\r\n    .tab-width {\r\n        font-size: 1.5em;\r\n        width: 32%;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width : 480px){\r\n    .tab-width {\r\n        font-size: 1.2em;\r\n        \r\n    }\r\n}\r\n\r\n@media only screen and (max-width : 400px){\r\n    .tab-width {\r\n        font-size: 1em;\r\n        \r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWZyaWVuZC9hZGQtZnJpZW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtHQUNyQjs7QUFFSDtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxtQkFBbUI7S0FDdEI7Q0FDSjs7QUFFRDtJQUNJO1FBQ0ksaUJBQWlCOztLQUVwQjtDQUNKOztBQUVEO0lBQ0k7UUFDSSxlQUFlOztLQUVsQjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvYWRkLWZyaWVuZC9hZGQtZnJpZW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiLXdpZHRoe1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLmJ0bi1jaXJjbGUuYnRuLWxnIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgfVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogNjUwcHgpe1xyXG4gICAgLnRhYi13aWR0aCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICB3aWR0aDogMzIlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNDgwcHgpe1xyXG4gICAgLnRhYi13aWR0aCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNDAwcHgpe1xyXG4gICAgLnRhYi13aWR0aCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/add-friend/add-friend.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-friend/add-friend.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"background-color: white; border-left: 2px solid; border-right: 2px solid; height: 100vh;\">\n  <div class=\"sticky-top\" style=\" padding: 2vh\">\n    <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" style=\"font-size: 1.5em\" [routerLink]=\"['/dashboard']\">Dashboard</button>\n  </div>\n  <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\" >\n    <li class=\"nav-item tab-width\" >\n      <a class=\"nav-link active\" id=\"addFriend-tab\" data-toggle=\"tab\" href=\"#addFriend\" role=\"tab\" aria-controls=\"addFriend\" aria-selected=\"true\">Add Friends</a>\n    </li>\n    <li class=\"nav-item tab-width\" >\n      <a class=\"nav-link\" id=\"friendList-tab\" data-toggle=\"tab\" href=\"#friendList\" role=\"tab\" aria-controls=\"friendList\" aria-selected=\"false\">Friend List</a>\n    </li>\n    <li class=\"nav-item tab-width\" >\n      <a class=\"nav-link\" id=\"request-tab\" data-toggle=\"tab\" href=\"#request\" role=\"tab\" aria-controls=\"request\" aria-selected=\"false\">Requests <span *ngIf=\"allRequestReceived.length\">({{allRequestReceived.length}})</span></a>\n    </li>\n  </ul>\n  <div class=\"tab-content\" id=\"myTabContent\">\n    <div class=\"tab-pane fade show active\" id=\"addFriend\" role=\"tabpanel\" aria-labelledby=\"addFriend-tab\">\n      <div  class=\"card\" style=\"border-top: 0px\" *ngFor=\"let user of allFilteredUser\">\n        <div  class=\"card-body\" style=\"display: flex; justify-content: space-between\">\n          <first-char [name]=\"user.firstName\" [userBg]=\"'#007bff'\" [userColor]=\"'white'\"></first-char>\n          <span style=\"display: flex; text-align: center; font-size: 1.8em; color: #6c757d; font-style: bold\">{{user.firstName+' '+user.lastName}}</span>\n          <div>\n          <button *ngIf=\"!user.id\" type=\"button\" class=\"btn btn-outline-success\" (click)=\"sendRequest(user.userId, user.firstName+' '+user.lastName)\">Add Friend &nbsp;<i class=\"fas fa-user-friends\"></i></button>\n          <button *ngIf=\"user.id\" type=\"button\" class=\"btn btn-outline-danger\"  (click)=\"cancelRequest(user.userId, user.firstName+' '+user.lastName)\">Cancel Request &nbsp;<i class=\"fas fa-user-friends\"></i></button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"tab-pane fade\" id=\"friendList\" role=\"tabpanel\" aria-labelledby=\"friendList-tab\">\n      <div  class=\"card\" style=\"border-top: 0px\" *ngFor=\"let user of allFriends\">\n        <div  class=\"card-body\" style=\"display: flex; justify-content: space-between\">\n          <first-char [name]=\"user.friendName\" [userBg]=\"'#007bff'\" [userColor]=\"'white'\"></first-char>\n          <span style=\"display: flex; text-align: center; font-size: 1.8em; color: #6c757d; font-style: bold\">{{user.friendName}}</span>\n          \n          <button *ngIf=\"!user.id\" type=\"button\" class=\"btn btn-outline-danger\" (click)=\"unfriend(user.friendId, user.friendName)\">Un-Friend &nbsp;<i class=\"fas fa-user-friends\"></i></button>\n          \n        </div>\n      </div>\n    </div>\n    <div class=\"tab-pane fade\" id=\"request\" role=\"tabpanel\" aria-labelledby=\"request-tab\">\n      <div  class=\"card\" style=\"border-top: 0px\" *ngFor=\"let user of allRequestReceived\">\n        <div  class=\"card-body\" style=\"display: flex; justify-content: space-between\">\n          <first-char [name]=\"user.senderName\" [userBg]=\"'#007bff'\" [userColor]=\"'white'\"></first-char>\n          <span style=\"display: flex; text-align: center; font-size: 1.8em; color: #6c757d; font-style: bold\">{{user.senderName}}</span>\n          \n          <button type=\"button\" class=\"btn btn-success btn-circle btn-lg\" (click)=\"acceptRequest(user.senderId, user.senderName)\"><i class=\"fas fa-check\"></i></button>\n          <button type=\"button\" class=\"btn btn-danger btn-circle btn-lg\" (click)=\"rejectRequest(user.senderId, user.senderName)\"><i class=\"fas fa-times\"></i></button>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add-friend/add-friend.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-friend/add-friend.component.ts ***!
  \****************************************************/
/*! exports provided: AddFriendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFriendComponent", function() { return AddFriendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddFriendComponent = /** @class */ (function () {
    function AddFriendComponent(toastr, appService, router, cookieService, socketService) {
        var _this = this;
        this.toastr = toastr;
        this.appService = appService;
        this.router = router;
        this.cookieService = cookieService;
        this.socketService = socketService;
        this.userId = this.cookieService.get('userId');
        this.allUsers = [];
        this.allFilteredUser = [];
        this.allRequestReceived = [];
        this.allRequestSent = [];
        this.allFriends = [];
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser()
                .subscribe(function (data) {
                _this.socketService.setUser(_this.cookieService.get('authtoken')); //in reply to verify user emitting set-user event with authToken as parameter.
            }, function (err) {
                _this.toastr.error(err, "Some error occured");
            });
        };
        this.notifyUpdatesToUser = function (data) {
            _this.socketService.notifyUpdates(data);
        };
    }
    AddFriendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.verifyUserConfirmation();
        this.getAllUpadateDetails();
        this.subs = this.socketService.getUpdatesFromUser(this.userId).subscribe(function (data) {
            _this.toastr.info(data.message);
            _this.getAllUpadateDetails();
        });
    };
    AddFriendComponent.prototype.getAllUpadateDetails = function () {
        var _this = this;
        this.appService.getAllFriend().subscribe(function (response) {
            var requestReceived = [];
            var requestSent = [];
            var friends = [];
            if (response.data !== null) {
                for (var _i = 0, _a = response.data; _i < _a.length; _i++) {
                    var user = _a[_i];
                    user.requestReceived.map(function (reqReceived) { return requestReceived.push(reqReceived); });
                    user.requestSent.map(function (reqSent) { return requestSent.push(reqSent); });
                    user.friends.map(function (friend) { return friends.push(friend); });
                }
                _this.allRequestReceived = requestReceived;
                _this.allRequestSent = requestSent;
                _this.allFriends = friends;
            }
            var userIds = [];
            for (var _b = 0, _c = _this.allRequestReceived; _b < _c.length; _b++) {
                var user = _c[_b];
                userIds.push(user.senderId);
            }
            for (var _d = 0, friends_1 = friends; _d < friends_1.length; _d++) {
                var user = friends_1[_d];
                userIds.push(user.friendId);
            }
            var data = {
                array: userIds
            };
            _this.appService.getAllFilterUser(data).subscribe(function (response) {
                var id = _this.userId;
                _this.allFilteredUser = response.data;
                _this.allFilteredUser.forEach(function (user, index, object) {
                    if (user.userId === id) {
                        object.splice(index, 1);
                    }
                });
                _this.allFilteredUser.forEach(function (user) { return _this.allRequestSent.forEach(function (req) {
                    if (user.userId === req.receiverId) {
                        user.id = true;
                    }
                }); });
            });
        });
    };
    AddFriendComponent.prototype.sendRequest = function (receiverId, receiverName) {
        var _this = this;
        var data = {
            receiverId: receiverId,
            receiverName: receiverName
        };
        this.appService.sendRequestFunction(data).subscribe(function (response) {
            if (response.status === 200) {
                _this.toastr.success(response.message);
                _this.getAllUpadateDetails();
                var notifcationData = {
                    message: _this.cookieService.get('UserName') + " has sent you a friend request.",
                    userId: data.receiverId
                };
                _this.notifyUpdatesToUser(notifcationData);
            }
            else {
                _this.toastr.info(response.message);
            }
        }, function (error) {
            _this.router.navigate(['/serverError']);
        });
    };
    AddFriendComponent.prototype.cancelRequest = function (receiverId, receiverName) {
        var _this = this;
        var data = {
            receiverId: receiverId,
            receiverName: receiverName
        };
        this.appService.cancelRequestFunction(data).subscribe(function (response) {
            if (response.status === 200) {
                _this.toastr.info(response.message);
                _this.getAllUpadateDetails();
                var notifcationData = {
                    message: _this.cookieService.get('UserName') + " has Cancelled the friend request.",
                    userId: data.receiverId
                };
                _this.notifyUpdatesToUser(notifcationData);
            }
            else {
                _this.toastr.warning(response.message);
            }
        }, function (error) {
            _this.router.navigate(['/serverError']);
        });
    };
    AddFriendComponent.prototype.rejectRequest = function (senderId, senderName) {
        var _this = this;
        var data = {
            senderId: senderId,
            senderName: senderName
        };
        this.appService.rejectRequestFunction(data).subscribe(function (response) {
            if (response.status === 200) {
                _this.toastr.info(response.message);
                _this.getAllUpadateDetails();
                var notifcationData = {
                    message: _this.cookieService.get('UserName') + " has rejected your friend request.",
                    userId: data.senderId
                };
                _this.notifyUpdatesToUser(notifcationData);
            }
            else {
                _this.toastr.warning(response.message);
            }
        }, function (error) {
            _this.router.navigate(['/serverError']);
        });
    };
    AddFriendComponent.prototype.acceptRequest = function (senderId, senderName) {
        var _this = this;
        var data = {
            senderId: senderId,
            senderName: senderName
        };
        this.appService.acceptRequestFunction(data).subscribe(function (response) {
            if (response.status === 200) {
                _this.toastr.info(response.message);
                _this.getAllUpadateDetails();
                var notifcationData = {
                    message: _this.cookieService.get('UserName') + " has Accepted your friend request.",
                    userId: data.senderId
                };
                _this.notifyUpdatesToUser(notifcationData);
            }
            else {
                _this.toastr.warning(response.message);
            }
        }, function (error) {
            _this.router.navigate(['/serverError']);
        });
    };
    AddFriendComponent.prototype.unfriend = function (friendId, friendName) {
        var _this = this;
        var data = {
            friendId: friendId,
            friendName: friendName
        };
        this.appService.unFriendFunction(data).subscribe(function (response) {
            if (response.status === 200) {
                _this.toastr.info(response.message);
                _this.getAllUpadateDetails();
                var notifcationData = {
                    message: "You are no more friend with " + _this.cookieService.get('UserName') + ".",
                    userId: data.friendId
                };
                _this.notifyUpdatesToUser(notifcationData);
            }
            else {
                _this.toastr.warning(response.message);
            }
        }, function (error) {
            _this.router.navigate(['/serverError']);
        });
    };
    AddFriendComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    AddFriendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-friend',
            template: __webpack_require__(/*! ./add-friend.component.html */ "./src/app/add-friend/add-friend.component.html"),
            styles: [__webpack_require__(/*! ./add-friend.component.css */ "./src/app/add-friend/add-friend.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]])
    ], AddFriendComponent);
    return AddFriendComponent;
}());



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
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/server-error/server-error.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _add_friend_add_friend_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-friend/add-friend.component */ "./src/app/add-friend/add-friend.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], pathMatch: 'full' },
    { path: "", redirectTo: 'login', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'serverError', component: _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_6__["ServerErrorComponent"] },
    { path: 'addFriend', component: _add_friend_add_friend_component__WEBPACK_IMPORTED_MODULE_8__["AddFriendComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: '*', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_user_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"], _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_6__["ServerErrorComponent"], _add_friend_add_friend_component__WEBPACK_IMPORTED_MODULE_8__["AddFriendComponent"]],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                ng_sidebar__WEBPACK_IMPORTED_MODULE_11__["SidebarModule"].forRoot()
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'Lets-Do';
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
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _app_user_user_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../app/user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_10__);
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _app_user_user_module__WEBPACK_IMPORTED_MODULE_8__["UserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot(),
                ng_sidebar__WEBPACK_IMPORTED_MODULE_10__["SidebarModule"].forRoot()
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = /** @class */ (function () {
    function AppService(cookieService, _http) {
        this.cookieService = cookieService;
        this._http = _http;
        this.baseUrl = 'http://api-lets-do.issuetrackerpro.com/api/v1/users';
        this.getUserInformationstorage = function () {
            return (JSON.parse(localStorage.getItem('userInfo')));
        };
        this.setUserInformationStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
    }
    AppService.prototype.isLoggedIn = function () {
        return (this.getUserInformationstorage());
    };
    AppService.prototype.signinFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this._http.post(this.baseUrl + "/login", params);
    };
    AppService.prototype.getCountryNames = function () {
        return this._http.get("./../assets/countryName.json");
    }; //end getCountryNames
    AppService.prototype.getCountryCodes = function () {
        return this._http.get("./../assets/countryCode.json");
    }; //end getCountryNumbers
    AppService.prototype.signUp = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobileNumber', data.mobileNumber)
            .set('email', data.email)
            .set('password', data.password)
            .set('country', data.country);
        return this._http.post(this.baseUrl + "/signup", params);
    }; //end signUp 
    AppService.prototype.verifyEmail = function (userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('userId', userId);
        return this._http.post(this.baseUrl + "/verifyEmail", params);
    };
    AppService.prototype.forgetPassword = function (email) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('email', email);
        return this._http.post(this.baseUrl + "/forgetPassword", params);
    };
    AppService.prototype.resetPassword = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('userId', data.userId)
            .set('password', data.password);
        return this._http.post(this.baseUrl + "/resetPassword", params);
    };
    AppService.prototype.logout = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'));
        return this._http.post(this.baseUrl + "/logout", params);
    };
    AppService.prototype.getAllUsers = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'));
        return this._http.get(this.baseUrl + "/getAllUsers", { params: params });
    };
    AppService.prototype.sendRequestFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('senderId', this.cookieService.get('userId'))
            .set('senderName', this.cookieService.get('UserName'))
            .set('receiverId', data.receiverId)
            .set('receiverName', data.receiverName);
        return this._http.post(this.baseUrl + "/sent-friend-request", params);
    };
    AppService.prototype.getAllFriend = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('userId', this.cookieService.get('userId'));
        return this._http.get(this.baseUrl + "/get-all-friends", { params: params });
    };
    AppService.prototype.getAllFilterUser = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('userIdArray', data.array);
        return this._http.get(this.baseUrl + "/get-all-filter-users", { params: params });
    };
    AppService.prototype.cancelRequestFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('senderId', this.cookieService.get('userId'))
            .set('senderName', this.cookieService.get('UserName'))
            .set('receiverId', data.receiverId)
            .set('receiverName', data.receiverName);
        return this._http.post(this.baseUrl + "/cancel-request", params);
    };
    AppService.prototype.rejectRequestFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('receiverId', this.cookieService.get('userId'))
            .set('receiverName', this.cookieService.get('UserName'))
            .set('senderId', data.senderId)
            .set('senderName', data.senderName);
        return this._http.post(this.baseUrl + "/reject-request", params);
    };
    AppService.prototype.acceptRequestFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('receiverId', this.cookieService.get('userId'))
            .set('receiverName', this.cookieService.get('UserName'))
            .set('senderId', data.senderId)
            .set('senderName', data.senderName);
        return this._http.post(this.baseUrl + "/accept-request", params);
    };
    AppService.prototype.unFriendFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('userId', this.cookieService.get('userId'))
            .set('userName', this.cookieService.get('UserName'))
            .set('friendId', data.friendId)
            .set('friendName', data.friendName);
        return this._http.post(this.baseUrl + "/un-friend", params);
    };
    AppService.prototype.createListFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('userId', data.creatorId)
            .set('listName', data.listName)
            .set('creatorName', data.creatorName)
            .set('modifierName', data.modifierName)
            .set('modifierId', data.modifierId)
            .set('privacy', data.privacy)
            .set('listId', data.listId);
        return this._http.post(this.baseUrl + "/create-list", params);
    };
    AppService.prototype.getAllListFunction = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'));
        return this._http.get(this.baseUrl + "/get-all-list", { params: params });
    };
    AppService.prototype.deleteListFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('listId', data);
        return this._http.post(this.baseUrl + "/delete-list", params);
    };
    AppService.prototype.editListFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('modifierName', data.modifierName)
            .set('modifierId', data.modifierId)
            .set('listName', data.listName)
            .set('listId', data.listId);
        return this._http.post(this.baseUrl + "/edit-list", params);
    };
    AppService.prototype.getAllItem = function (listId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('listId', listId);
        return this._http.get(this.baseUrl + "/get-all-items", { params: params });
    };
    AppService.prototype.addItems = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('itemName', data.itemName)
            .set('listId', data.listId)
            .set('itemId', data.itemId);
        return this._http.post(this.baseUrl + "/add-item", params);
    };
    AppService.prototype.addSubItems = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('subItemName', data.subItemName)
            .set('itemId', data.itemId)
            .set('subItemId', data.subItemId);
        return this._http.post(this.baseUrl + "/add-sub-item", params);
    };
    AppService.prototype.editItem = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('itemName', data.itemName)
            .set('itemId', data.itemId)
            .set('done', data.done);
        return this._http.post(this.baseUrl + "/edit-item", params);
    };
    AppService.prototype.deleteItemFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('itemId', data);
        return this._http.post(this.baseUrl + "/delete-item", params);
    };
    AppService.prototype.editSubItem = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('subItemName', data.subItemName)
            .set('subItemId', data.subItemId)
            .set('subItemDone', data.subItemDone)
            .set('itemId', data.itemId);
        return this._http.post(this.baseUrl + "/edit-sub-item", params);
    };
    AppService.prototype.deleteSubItemFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('itemId', data.itemId)
            .set('subItemId', data.subItemId);
        return this._http.post(this.baseUrl + "/delete-sub-item", params);
    };
    AppService.prototype.getAllHistory = function (listId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('listId', listId);
        return this._http.get(this.baseUrl + "/get-all-history", { params: params });
    };
    AppService.prototype.createHistoryFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('listId', data.listId)
            .set('key', data.key);
        return this._http.post(this.baseUrl + "/create-history", params);
    };
    AppService.prototype.updateHistoryFunction = function (listId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('listId', listId);
        return this._http.post(this.baseUrl + "/update-history", params);
    };
    AppService.prototype.deleteHistoryFunction = function (listId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('listId', listId);
        return this._http.post(this.baseUrl + "/delete-history", params);
    };
    AppService.prototype.replaceItem = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('data', JSON.stringify(data));
        return this._http.post(this.baseUrl + "/replace-item", params);
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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
    function AuthGuard(appService, router, toastr) {
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        if (this.appService.isLoggedIn() !== null) {
            return true;
        }
        else {
            this.toastr.error('Please Login to access this page');
            setTimeout(function () {
                _this.router.navigate(["/login"]);
                return false;
            }, 2000);
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navStyle{\r\n    font-size:2.5em;\r\n    border: 2px solid;\r\n    border-radius: 5px;\r\n    padding: 8px;\r\n}\r\n\r\n.allSides\r\n{\r\n\r\nbox-shadow: 0 0 15px rgba(0,0,0,0.6);\r\n-moz-box-shadow: 0 0 10px rgba(54, 226, 31, 0.911);\r\n-webkit-box-shadow: 0 0 10px rgba(54, 226, 31, 0.911);\r\n-o-box-shadow: 0 0 10px rgba(54, 226, 31, 0.911);\r\n}\r\n\r\n.strike{\r\n    text-decoration: line-through\r\n}\r\n\r\n.firstChar{\r\n    border-radius: 100%;\r\n    line-height: 1em;\r\n    \r\n    text-align: center;\r\n    font-size: 2em;\r\n    padding: .2em;\r\n    margin: 0 0.5em 0 0;\r\n    width: 1.5em;\r\n    height: 1.5em;\r\n    float: left;\r\n    text-transform: uppercase;\r\n    color: white;\r\n    background-color: black; \r\n}\r\n\r\nli{\r\n    margin-top: 2vh;\r\n}\r\n\r\n.tab-width{\r\n    font-size: 1.5em;\r\n}\r\n\r\ntextarea:focus, input:focus, input[type]:focus, .uneditable-input:focus {   \r\n    border-color: rgba(26, 173, 33, 0.8);\r\n    box-shadow: 0 1px 1px rgba(26, 173, 33, 0.8) inset, 0 0 2px rgba(26, 173, 33, 0.8);\r\n    outline: 1px green;\r\n}\r\n\r\n.tab-style{\r\n    background-color: white; \r\n    border-left: 1px solid #e0e0e0; \r\n    border-right: 1px solid #e0e0e0;\r\n    border-bottom: 1px solid #e0e0e0;\r\n    min-height: 73vh;\r\n\r\n}\r\n\r\n.btn-circle.btn-lg {\r\n    width: 50px;\r\n    height: 50px;\r\n    padding: 8px 12px;\r\n    font-size: 25px;\r\n    line-height: 1.33;\r\n    border-radius: 25px;\r\n  }\r\n\r\n@media only screen and (max-width : 992px) {\r\n    .margin {\r\n        margin-top: 2vh;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width : 560px) {\r\n    .name {\r\n        display: none\r\n    }\r\n}\r\n\r\n@media only screen and (max-width : 480px){\r\n    .tab-width {\r\n        font-size: 1.2em;\r\n        \r\n    }\r\n}\r\n\r\n@media only screen and (max-width : 400px){\r\n    .tab-width {\r\n        font-size: 1em;\r\n        \r\n    }\r\n\r\n    .navStyle{\r\n        font-size: 1.8  em;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtDQUNoQjs7QUFFRDs7O0FBR0EscUNBQXFDO0FBQ3JDLG1EQUFtRDtBQUNuRCxzREFBc0Q7QUFDdEQsaURBQWlEO0NBQ2hEOztBQUVEO0lBQ0ksNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjs7SUFFakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixjQUFjO0lBQ2QsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2Isd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0kscUNBQXFDO0lBQ3JDLG1GQUFtRjtJQUNuRixtQkFBbUI7Q0FDdEI7O0FBR0Q7SUFDSSx3QkFBd0I7SUFDeEIsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsaUJBQWlCOztDQUVwQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0dBQ3JCOztBQUVIO0lBQ0k7UUFDSSxnQkFBZ0I7S0FDbkI7Q0FDSjs7QUFFRDtJQUNJO1FBQ0ksYUFBYTtLQUNoQjtDQUNKOztBQUVEO0lBQ0k7UUFDSSxpQkFBaUI7O0tBRXBCO0NBQ0o7O0FBRUQ7SUFDSTtRQUNJLGVBQWU7O0tBRWxCOztJQUVEO1FBQ0ksbUJBQW1CO0tBQ3RCO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2U3R5bGV7XHJcbiAgICBmb250LXNpemU6Mi41ZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLmFsbFNpZGVzXHJcbntcclxuXHJcbmJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwwLDAsMC42KTtcclxuLW1vei1ib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDU0LCAyMjYsIDMxLCAwLjkxMSk7XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSg1NCwgMjI2LCAzMSwgMC45MTEpO1xyXG4tby1ib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDU0LCAyMjYsIDMxLCAwLjkxMSk7XHJcbn1cclxuXHJcbi5zdHJpa2V7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaFxyXG59XHJcblxyXG4uZmlyc3RDaGFye1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgcGFkZGluZzogLjJlbTtcclxuICAgIG1hcmdpbjogMCAwLjVlbSAwIDA7XHJcbiAgICB3aWR0aDogMS41ZW07XHJcbiAgICBoZWlnaHQ6IDEuNWVtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxyXG59XHJcblxyXG5saXtcclxuICAgIG1hcmdpbi10b3A6IDJ2aDtcclxufVxyXG5cclxuLnRhYi13aWR0aHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbnRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1cywgaW5wdXRbdHlwZV06Zm9jdXMsIC51bmVkaXRhYmxlLWlucHV0OmZvY3VzIHsgICBcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNiwgMTczLCAzMywgMC44KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDI2LCAxNzMsIDMzLCAwLjgpIGluc2V0LCAwIDAgMnB4IHJnYmEoMjYsIDE3MywgMzMsIDAuOCk7XHJcbiAgICBvdXRsaW5lOiAxcHggZ3JlZW47XHJcbn1cclxuXHJcblxyXG4udGFiLXN0eWxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTBlMGUwOyBcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgIG1pbi1oZWlnaHQ6IDczdmg7XHJcblxyXG59XHJcblxyXG4uYnRuLWNpcmNsZS5idG4tbGcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB9XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA5OTJweCkge1xyXG4gICAgLm1hcmdpbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA1NjBweCkge1xyXG4gICAgLm5hbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNDgwcHgpe1xyXG4gICAgLnRhYi13aWR0aCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNDAwcHgpe1xyXG4gICAgLnRhYi13aWR0aCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLm5hdlN0eWxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44ICBlbTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\">\n  <a class=\"navbar-brand navStyle\" [routerLink]=\"['/dashboard']\"><i class=\"fas fa-check-circle\"></i> Lets-Do</a>\n  <div style=\"display: inline-flex; align-items: center\">\n    <div class=\"firstChar\" (click)=\"onClick()\" style=\"cursor: pointer\">{{firstChar}}</div>\n    <h3 style=\"text-transform:uppercase\" class=\"name\">{{userName}}</h3>\n  </div>\n  <button class=\"navbar-toggler btn btn-light\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <i style=\" font-size: 30px;\" class=\"fas fa-angle-double-down\"></i>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" style=\"justify-content: flex-end\">\n    <div class=\"margin\"><button style=\"width: 150px; margin-left: 20px\" class=\"btn btn-primary\" [routerLink]=\"[ '/addFriend']\"><i\n          class=\"fas fa-users\"></i> Add Friends</button></div>\n    <div class=\"margin\"><button style=\"width: 150px; margin-left: 20px\" class=\"btn btn-secondary\" (click)=\"logOut()\">Log\n        Out &nbsp;<i class=\"fas fa-sign-out-alt\"></i></button></div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n    <li class=\"nav-item tab-width\">\n      <a class=\"nav-link active\" id=\"your-tab\" data-toggle=\"tab\" href=\"#your\" role=\"tab\" aria-controls=\"your\"\n        aria-selected=\"true\">Your Dashboard</a>\n    </li>\n    <li class=\"nav-item tab-width\">\n      <a class=\"nav-link\" id=\"friends-tab\" data-toggle=\"tab\" href=\"#friends\" role=\"tab\" aria-controls=\"friends\"\n        aria-selected=\"false\">Friends Dashboard</a>\n    </li>\n  </ul>\n  <div class=\"tab-content\" id=\"myTabContent\">\n    <div style=\"padding-top: 1vh\" class=\"tab-pane tab-style fade show active\" id=\"your\" role=\"tabpanel\" aria-labelledby=\"your-tab\">\n      <ng-sidebar-container style=\"height: 73vh;\">\n\n        <!-- A sidebar -->\n        <ng-sidebar mode=\"push\" [showBackdrop]=\"true\" [closeOnClickOutside]=\"true\" [(opened)]=\"_opened\" style=\"background-color: black\">\n          <div style=\"padding: 1vh\">\n            <div class=\"input-group mb-3\">\n              <input type=\"text\" [(ngModel)]=\"listName\" name=\"listName\" class=\"form-control\" placeholder=\"List Name\"\n                aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-success\" type=\"button\" (click)=\"createList(true)\">Add</button>\n              </div>\n              <div style=\"margin-left: 2vh\">\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"_toggleSidebar()\"><i class=\"fas fa-angle-double-left\"></i></button>\n              </div>\n            </div>\n\n            <div *ngFor=\"let list of listArray\">\n              <ul class=\"list-group\">\n                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                  <a (click)=\"chooseList(list.listId)\" *ngIf=\"!list.id\" style=\"font-size: 1.2em; color: blue; cursor: pointer;\">{{list.listName}}</a>\n                  <input style=\"width: 18vh\" *ngIf=\"list.id\" type=\"text\" [(ngModel)]=list.listName name=\"currentListName\"\n                    class=\"form-control\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\" (keypress)=\"editListName($event, list.listName, list)\">\n                  <div>\n                    <a style=\"margin-right: 1vh; color: gray; font-size: 1.3em; cursor: pointer;\" (click)=\"list.id = !list.id\"><i\n                        class=\"fas fa-pen\"></i></a>\n                    <a style=\"margin-left: 1vh; color: red; font-size: 1.3em; cursor: pointer;\" (click)=\"deleteList(list)\">\n                      <i class=\"fas fa-trash\"></i></a>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </ng-sidebar>\n\n        <!-- Page content -->\n        <div ng-sidebar-content style=\"margin-left: 1vh; margin-right: 1vh;\">\n          <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block\" (click)=\"_toggleSidebar()\">Create\n            Lists in your Lets-Do</button>\n          <div *ngIf=\"toggle\">\n            <div  *ngFor=\"let List of currentList\" class=\"d-flex card p-2 my-2 border border-danger rounded allSides\">\n              <div class=\"d-flex align-items-center my-2\">\n                <div class=\"lh-100\">\n                  <h5 class=\"mb-0  lh-100\">{{List.listName}}</h5>\n                  <h6>Created on - {{List.createdOn | date}}</h6>\n                </div>\n                <hr>\n                <a style=\"color: green; font-size: 2em; cursor: pointer;\" (click)=\"inputToggle= !inputToggle\"\n                  data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Click to Add Task in the list\">\n                  <i class=\"fas fa-plus-circle\"></i></a>\n                <a style=\"margin-left: 5vh; color: red; font-size: 2em; cursor: pointer;\" (click)=\"undoFunction(List.listId)\"\n                  data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Click to Undo\">\n                  <i class=\"fas fa-undo\"></i></a>\n              </div>\n              <div *ngIf=\"inputToggle\" class=\"input-group mb-3\">\n                <input type=\"text\" [(ngModel)]=\"itemName\" name=\"itemName\" class=\"form-control\" placeholder=\"Task Name\"\n                  aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-success\" type=\"button\" (click)=\"addItem(List)\">Add</button>\n                </div>\n              </div>\n              <hr>\n              <div *ngFor=\"let item of itemArray\">\n                <div  class=\"col d-flex justify-content-between\">\n                  <div class=\"row align-items-center\">\n                  <div class=\"form-check\">\n                    <input  [(ngModel)]=\"item.done\" class=\"form-check-input position-static\" type=\"checkbox\" id=\"blankCheckbox\" value=\"option1\"\n                      aria-label=\"...\" (click)=\"editItem($event.target.click, item, !item.done, List)\">\n                  </div>\n                  <span *ngIf=\"!item.a\" [ngClass]=\"item.done  === true ? 'strike' : 'null'\" style=\"font-size: 1.2em; font-style: 500; margin-left: 1vh\">{{item.itemName}}</span>\n                  <input style=\"width: 18vh\" *ngIf=\"item.a\" type=\"text\" [(ngModel)]=item.itemName name=\"currentItemName\"\n                    class=\"form-control\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\" (keypress)=\"editItem($event.keyCode === 13, item, item.done, List)\">\n                  </div>\n                  <div>\n                  <a style=\"color: gray; font-size: 1.5em; cursor: pointer;\" (click)=\"item.a= !item.a\" data-toggle=\"tooltip\"\n                    data-placement=\"bottom\" title=\"Click to Add Sub Task in the list\">\n                    <i class=\"fas fa-pen\"></i></a>\n                  <a style=\"color: green; font-size: 1.5em; cursor: pointer; margin-left: 3vh;\" (click)=\"item.id= !item.id\" data-toggle=\"tooltip\"\n                    data-placement=\"bottom\" title=\"Click to Add Sub Task in the list\">\n                    <i class=\"fas fa-plus-circle\"></i></a>\n                    <a style=\"color: red; font-size: 1.5em; cursor: pointer; margin-left: 3vh;\" (click)=\"deleteItem(item, List)\" data-toggle=\"tooltip\"\n                    data-placement=\"bottom\" title=\"Click to Add Sub Task in the list\">\n                    <i class=\"fas fa-trash\"></i></a>\n                    </div>\n                </div>\n                <div *ngIf=item.id class=\"input-group mb-3\">\n                  <input   type=\"text\" [(ngModel)]=\"subItemName\" name=\"subItemName\" class=\"form-control\" placeholder=\"Sub Task Name\"\n                    aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n                  <div class=\"input-group-append\">\n                    <button class=\"btn btn-success\" type=\"button\" (click)=\"addSubItem(item.itemId, List)\">Add</button>\n                  </div>\n                </div>\n                <div *ngFor=\"let subItem of item.subItems\" class=\"col d-flex justify-content-between\" style=\"margin-left: 5vh; width: 80%;\">\n                    <div class=\"row align-items-center\">\n                    <div class=\"form-check\">\n                      <input  [(ngModel)]=\"subItem.subItemDone\" subItem.subItemDone = item.done class=\"form-check-input position-static\" type=\"checkbox\" id=\"blankCheckbox\" value=\"option1\"\n                        aria-label=\"...\" (click)=\"editSubItem($event.target.click, subItem, item.itemId, !subItem.subItemDone)\">\n                    </div>\n                    <span *ngIf=\"!subItem.a\" [ngClass]=\"subItem.subItemDone === true ? 'strike' : 'null'\" style=\"font-size: 1.2em; font-style: 500; margin-left: 1vh\">{{subItem.subItemName}}</span>\n                    <input style=\"width: 18vh\" *ngIf=\"subItem.a\" type=\"text\" [(ngModel)]=subItem.subItemName name=\"currentItemName\"\n                    class=\"form-control\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\" (keypress)=\"editSubItem($event.keyCode === 13, subItem, item.itemId, subItem.subItemDone, List)\">\n                    </div>\n                    <div>\n                        <a style=\"color: gray; font-size: 1.2em; cursor: pointer;\" (click)=\"subItem.a= !subItem.a\" data-toggle=\"tooltip\"\n                        data-placement=\"bottom\" title=\"Click to Edit Sub Task in the list\">\n                        <i class=\"fas fa-pen\"></i></a>\n                    <a style=\"color: red; font-size: 1.2em; cursor: pointer; margin-left: 3vh\" (click)=\"deleteSubItem(subItem, item.itemId)\" data-toggle=\"tooltip\"\n                      data-placement=\"bottom\" title=\"Click to Delete Sub Task from the list\">\n                      <i class=\"fas fa-trash\"></i></a>\n                      </div>\n                  </div>\n                <hr>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </ng-sidebar-container>\n    </div>\n    <div class=\"tab-pane tab-style fade\" id=\"friends\" role=\"tabpanel\" aria-labelledby=\"friends-tab\">\n        <ng-sidebar-container style=\"height: 73vh;\">\n\n            <!-- A sidebar -->\n            <ng-sidebar mode=\"push\" [showBackdrop]=\"true\" [closeOnClickOutside]=\"true\" [(opened)]=\"_friends\" style=\"background-color: black\">\n              <div style=\"padding: 1vh\">\n                <div class=\"input-group mb-3\">\n                  <input type=\"text\" [(ngModel)]=\"listName\" name=\"listName\" class=\"form-control\" placeholder=\"List Name\"\n                    aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n                  <div class=\"input-group-append\">\n                    <button class=\"btn btn-success\" type=\"button\" (click)=\"createList(false)\">Add</button>\n                  </div>\n                  <div style=\"margin-left: 2vh\">\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"_friendsToggleSidebar()\"><i class=\"fas fa-angle-double-left\"></i></button>\n                  </div>\n                </div>\n    \n                <div *ngFor=\"let list of friendsListArray\">\n                  <ul class=\"list-group\">\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                      <a (click)=\"chooseList(list.listId)\" *ngIf=\"!list.id\" style=\"font-size: 1.2em; color: blue; cursor: pointer;\">{{list.listName}}</a>\n                      <input style=\"width: 18vh\" *ngIf=\"list.id\" type=\"text\" [(ngModel)]=\"list.listName\" name=\"currentListName\"\n                        class=\"form-control\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\" (keypress)=\"editListName($event, list.listName, list)\">\n                      <div>\n                        <a style=\"margin-right: 1vh; color: gray; font-size: 1.3em; cursor: pointer;\" (click)=\"list.id = !list.id\"><i\n                            class=\"fas fa-pen\"></i></a>\n                        <a style=\"margin-left: 1vh; color: red; font-size: 1.3em; cursor: pointer;\" (click)=\"deleteList(list)\">\n                          <i class=\"fas fa-trash\"></i></a>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </ng-sidebar>\n    \n            <!-- Page content -->\n            <div ng-sidebar-content style=\"margin-left: 1vh; margin-right: 1vh;\">\n              <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block\" (click)=\"_friendsToggleSidebar()\">Create\n                Lists in your Lets-Do</button>\n              <div *ngIf=\"toggle\">\n                <div  *ngFor=\"let List of currentList\" class=\"d-flex card p-2 my-2 border border-danger rounded allSides\">\n                  <div class=\"d-flex align-items-center my-2\">\n                    <div class=\"lh-100\">\n                      <h5 class=\"mb-0  lh-100\">{{List.listName}}</h5>\n                      <h6>Created on - {{List.createdOn | date}}</h6>\n                    </div>\n                    <hr>\n                    <a style=\"color: green; font-size: 2em; cursor: pointer;\" (click)=\"inputToggle= !inputToggle\"\n                      data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Click to Add Task in the list\">\n                      <i class=\"fas fa-plus-circle\"></i></a>\n                    <a style=\"margin-left: 5vh; color: red; font-size: 2em; cursor: pointer;\" (click)=\"undoFunction(List.listId)\"\n                      data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Click to Undo\">\n                      <i class=\"fas fa-undo\"></i></a>\n                  </div>\n                  <div *ngIf=\"inputToggle\" class=\"input-group mb-3\">\n                    <input type=\"text\" [(ngModel)]=\"itemName\" name=\"itemName\" class=\"form-control\" placeholder=\"Task Name\"\n                      aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n                    <div class=\"input-group-append\">\n                      <button class=\"btn btn-success\" type=\"button\" (click)=\"addItem(List)\">Add</button>\n                    </div>\n                  </div>\n                  <hr>\n                  <div *ngFor=\"let item of itemArray\">\n                    <div  class=\"col d-flex justify-content-between\">\n                      <div class=\"row align-items-center\">\n                      <div class=\"form-check\">\n                        <input  [(ngModel)]=\"item.done\" class=\"form-check-input position-static\" type=\"checkbox\" id=\"blankCheckbox\" value=\"option1\"\n                          aria-label=\"...\" (click)=\"editItem($event.target.click, item, !item.done, List)\">\n                      </div>\n                      <span *ngIf=\"!item.a\" [ngClass]=\"item.done  === true ? 'strike' : 'null'\" style=\"font-size: 1.2em; font-style: 500; margin-left: 1vh\">{{item.itemName}}</span>\n                      <input style=\"width: 18vh\" *ngIf=\"item.a\" type=\"text\" [(ngModel)]=item.itemName name=\"currentItemName\"\n                        class=\"form-control\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\" (keypress)=\"editItem($event.keyCode === 13, item, item.done, List)\">\n                      </div>\n                      <div>\n                      <a style=\"color: gray; font-size: 1.5em; cursor: pointer;\" (click)=\"item.a= !item.a\" data-toggle=\"tooltip\"\n                        data-placement=\"bottom\" title=\"Click to Add Sub Task in the list\">\n                        <i class=\"fas fa-pen\"></i></a>\n                      <a style=\"color: green; font-size: 1.5em; cursor: pointer; margin-left: 3vh;\" (click)=\"item.id= !item.id\" data-toggle=\"tooltip\"\n                        data-placement=\"bottom\" title=\"Click to Add Sub Task in the list\">\n                        <i class=\"fas fa-plus-circle\"></i></a>\n                        <a style=\"color: red; font-size: 1.5em; cursor: pointer; margin-left: 3vh;\" (click)=\"deleteItem(item, List)\" data-toggle=\"tooltip\"\n                        data-placement=\"bottom\" title=\"Click to Add Sub Task in the list\">\n                        <i class=\"fas fa-trash\"></i></a>\n                        </div>\n                    </div>\n                    <div *ngIf=item.id class=\"input-group mb-3\">\n                      <input   type=\"text\" [(ngModel)]=\"subItemName\" name=\"subItemName\" class=\"form-control\" placeholder=\"Sub Task Name\"\n                        aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n                      <div class=\"input-group-append\">\n                        <button class=\"btn btn-success\" type=\"button\" (click)=\"addSubItem(item.itemId, List)\">Add</button>\n                      </div>\n                    </div>\n                    <div *ngFor=\"let subItem of item.subItems\" class=\"col d-flex justify-content-between\" style=\"margin-left: 5vh; width: 80%;\">\n                        <div class=\"row align-items-center\">\n                        <div class=\"form-check\">\n                          <input  [(ngModel)]=\"subItem.subItemDone\" subItem.subItemDone = item.done class=\"form-check-input position-static\" type=\"checkbox\" id=\"blankCheckbox\" value=\"option1\"\n                            aria-label=\"...\" (click)=\"editSubItem($event.target.click, subItem, item.itemId, !subItem.subItemDone)\">\n                        </div>\n                        <span *ngIf=\"!subItem.a\" [ngClass]=\"subItem.subItemDone === true ? 'strike' : 'null'\" style=\"font-size: 1.2em; font-style: 500; margin-left: 1vh\">{{subItem.subItemName}}</span>\n                        <input style=\"width: 18vh\" *ngIf=\"subItem.a\" type=\"text\" [(ngModel)]=subItem.subItemName name=\"currentItemName\"\n                        class=\"form-control\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\" (keypress)=\"editSubItem($event.keyCode === 13, subItem, item.itemId, subItem.subItemDone, List)\">\n                        </div>\n                        <div>\n                            <a style=\"color: gray; font-size: 1.2em; cursor: pointer;\" (click)=\"subItem.a= !subItem.a\" data-toggle=\"tooltip\"\n                            data-placement=\"bottom\" title=\"Click to Edit Sub Task in the list\">\n                            <i class=\"fas fa-pen\"></i></a>\n                        <a style=\"color: red; font-size: 1.2em; cursor: pointer; margin-left: 3vh\" (click)=\"deleteSubItem(subItem, item.itemId, List)\" data-toggle=\"tooltip\"\n                          data-placement=\"bottom\" title=\"Click to Delete Sub Task from the list\">\n                          <i class=\"fas fa-trash\"></i></a>\n                          </div>\n                      </div>\n                    <hr>\n                  </div>\n                </div>\n              </div>\n            </div>\n    \n          </ng-sidebar-container>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var short_unique_id__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! short-unique-id */ "./node_modules/short-unique-id/dist/short-unique-id.min.js");
/* harmony import */ var short_unique_id__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(short_unique_id__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(toastr, appService, router, cookieService, socketService) {
        var _this = this;
        this.toastr = toastr;
        this.appService = appService;
        this.router = router;
        this.cookieService = cookieService;
        this.socketService = socketService;
        this._opened = false;
        this._friends = false;
        this.listArray = [];
        this.friendsListArray = [];
        this.friendsId = [];
        this.currentList = [];
        this.toggle = false;
        this.inputToggle = false;
        this.itemArray = [];
        this.uid = new short_unique_id__WEBPACK_IMPORTED_MODULE_6___default.a();
        this.notifyUpdatesToUser = function (data) {
            _this.socketService.notifyUpdates(data);
        };
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser()
                .subscribe(function (data) {
                _this.socketService.setUser(_this.cookieService.get('authtoken'));
            }, function (err) {
                _this.toastr.error(err, "Some error occured");
            }); //end subscribe
        };
        this.getOnlineUserList = function () {
            _this.socketService.onlineUserList()
                .subscribe(function (response) {
                if (response.status !== 200) {
                    _this.toastr.warning(response.message);
                }
            }, function (error) {
                _this.router.navigate(['/serverError']);
            });
        };
        this.onClick = function () {
            _this.toastr.success(_this.userName + " to Lets-Do", "Welcome!");
        };
        this.logOut = function () {
            _this.appService.logout()
                .subscribe(function () {
                _this.cookieService.delete('authtoken');
                _this.cookieService.delete('userId');
                _this.cookieService.delete('UserName');
                localStorage.clear();
                _this.router.navigate(['/']);
            });
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userName = this.cookieService.get('UserName');
        this.firstChar = this.userName[0];
        this.appService.getAllFriend().subscribe(function (response) {
            var friends = [];
            if (response.data !== null) {
                for (var _i = 0, _a = response.data; _i < _a.length; _i++) {
                    var user = _a[_i];
                    user.friends.map(function (friend) { return friends.push(friend); });
                }
            }
            for (var _b = 0, friends_1 = friends; _b < friends_1.length; _b++) {
                var friend = friends_1[_b];
                _this.friendsId.push(friend.friendId);
            }
        });
        this.subs = this.socketService.getUpdatesFromUser(this.cookieService.get('userId')).subscribe(function (data) {
            _this.toastr.info(data.message);
            _this.getUpdatedList();
            _this.getAllItem(_this.selectedListId);
            _this.getAllHistory(_this.selectedListId);
        });
        this.verifyUserConfirmation();
        this.getUpdatedList();
    };
    DashboardComponent.prototype._toggleSidebar = function () {
        this._opened = !this._opened;
    };
    DashboardComponent.prototype._friendsToggleSidebar = function () {
        this._friends = !this._friends;
    };
    DashboardComponent.prototype.getUpdatedList = function () {
        var _this = this;
        this.appService.getAllListFunction().subscribe(function (response) {
            _this.allList = response.data;
            var lists = [];
            var freindsList = [];
            if (response.data !== null) {
                response.data.forEach(function (list) {
                    if (list.creatorId === _this.cookieService.get('userId') && list.privacy === true) {
                        lists.push(list);
                    }
                    if (list.creatorId === _this.cookieService.get('userId') && list.privacy === false) {
                        freindsList.push(list);
                    }
                    _this.friendsId.forEach(function (id) {
                        if (id === list.creatorId && list.privacy === false) {
                            freindsList.push(list);
                        }
                    });
                });
                _this.listArray = lists;
                _this.friendsListArray = freindsList;
            }
        });
    };
    DashboardComponent.prototype.createList = function (privacy) {
        var _this = this;
        if (!this.listName) {
            this.toastr.info('Please Enter List Name');
        }
        else {
            var data_1 = {
                listId: this.uid.randomUUID(8),
                listName: this.listName,
                creatorId: this.cookieService.get('userId'),
                creatorName: this.cookieService.get('UserName'),
                modifierName: this.cookieService.get('UserName'),
                modifierId: this.cookieService.get('userId'),
                privacy: privacy,
                key: "List Added"
            };
            this.appService.createListFunction(data_1).subscribe(function (response) {
                if (response.status === 200) {
                    _this.toastr.success(response.message);
                    _this.getUpdatedList();
                    _this.listName = "";
                    if (privacy === false) {
                        var notifcationData = {
                            message: "A " + data_1.listName + " List has been added by " + _this.cookieService.get('UserName') + " in Friends Lets-do.",
                            userId: _this.friendsId
                        };
                        _this.notifyUpdatesToUser(notifcationData);
                    }
                }
                else {
                    _this.toastr.error(response.message);
                }
            }, function (error) {
                _this.router.navigate(['/serverError']);
            });
            this.appService.createHistoryFunction(data_1).subscribe(function (response) {
                if (response.status !== 200) {
                    _this.toastr.warning(response.message);
                }
            }, function (error) {
                _this.router.navigate(['/serverError']);
            });
        }
    };
    DashboardComponent.prototype.deleteList = function (gotList) {
        var _this = this;
        this.appService.deleteListFunction(gotList.listId).subscribe(function (response) {
            if (response.status === 200) {
                _this.toastr.success(response.message);
                _this.listArray.forEach(function (list, index, object) {
                    if (list.listId === gotList.listId) {
                        object.splice(index, 1);
                    }
                });
                _this.friendsListArray.forEach(function (list, index, object) {
                    if (list.listId === gotList.listId) {
                        object.splice(index, 1);
                    }
                });
            }
            else {
                _this.toastr.info(response.message);
            }
        });
        this.appService.deleteHistoryFunction(gotList.listId).subscribe(function (response) {
            if (response.status !== 200) {
                _this.toastr.warning(response.message);
            }
        }, function (error) {
            _this.router.navigate(['/serverError']);
        });
        if (gotList.privacy === false) {
            var notifcationData = {
                message: "A " + gotList.listName + " List has been deleted by " + this.cookieService.get('UserName') + " from Friends Lets-do.",
                userId: this.friendsId
            };
            this.notifyUpdatesToUser(notifcationData);
        }
        this.toggle = false;
    };
    DashboardComponent.prototype.editListName = function (event, editedListName, gotList) {
        var _this = this;
        if (event.keyCode === 13) {
            if (!editedListName) {
                this.toastr.info('Please Enter List Name');
            }
            else {
                var data = {
                    listId: gotList.listId,
                    listName: editedListName,
                    modifierName: this.cookieService.get('UserName'),
                    modifierId: this.cookieService.get('userId')
                };
                this.appService.editListFunction(data).subscribe(function (response) {
                    _this.toastr.success(response.message);
                    _this.getUpdatedList();
                });
                if (gotList.privacy === false) {
                    var notifcationData = {
                        message: "A " + gotList.listName + " List has been Changed by " + this.cookieService.get('UserName') + " to " + editedListName + " in Friends Lets-do.",
                        userId: this.friendsId
                    };
                    this.notifyUpdatesToUser(notifcationData);
                }
            }
        }
    };
    DashboardComponent.prototype.getAllHistory = function (listId) {
        var _this = this;
        this.appService.getAllHistory(listId).subscribe(function (response) {
            for (var _i = 0, _a = response.data; _i < _a.length; _i++) {
                var x = _a[_i];
                _this.allHistory = x.itemDetails;
            }
            _this.allHistory.reverse();
        }, function (error) {
            _this.router.navigate(['/serverError']);
        });
    };
    DashboardComponent.prototype.getAllItem = function (listId) {
        var _this = this;
        this.itemArray = [];
        this.appService.getAllItem(listId).subscribe(function (response) {
            if (response.data !== null) {
                response.data.forEach(function (item) {
                    if (listId === item.listId) {
                        _this.itemArray.push(item);
                    }
                });
            }
        });
    };
    DashboardComponent.prototype.chooseList = function (listId) {
        for (var _i = 0, _a = this.allList; _i < _a.length; _i++) {
            var selectList = _a[_i];
            if (listId === selectList.listId) {
                this.currentList = [selectList];
            }
        }
        this.getAllItem(listId);
        this._toggleSidebar();
        this._friendsToggleSidebar();
        this.toggle = true;
        this.getAllHistory(listId);
        this.selectedListId = listId;
    };
    DashboardComponent.prototype.addItem = function (list) {
        var _this = this;
        var option = {
            key: "Item Added",
            listId: list.listId
        };
        this.appService.createHistoryFunction(option).subscribe(function (response) {
            if (response.status !== 200) {
                _this.toastr.warning(response.message);
            }
        }, function (error) {
            _this.router.navigate(['/serverError']);
        });
        var data = {
            listId: list.listId,
            itemName: this.itemName,
            itemId: this.uid.randomUUID(8)
        };
        this.appService.addItems(data).subscribe(function (response) {
            _this.toastr.success(response.message);
            for (var _i = 0, _a = response.data; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.itemArray.push(item);
            }
            _this.itemName = '';
            _this.getAllHistory(list.listId);
        });
        if (list.privacy === false) {
            var notifcationData = {
                message: "A " + data.itemName + " Item has been added by " + this.cookieService.get('UserName') + " in " + list.listName + " List.",
                userId: this.friendsId,
                listId: list.listId
            };
            this.notifyUpdatesToUser(notifcationData);
        }
    };
    DashboardComponent.prototype.addSubItem = function (itemId, gotList) {
        var _this = this;
        var option = {
            key: "Sub Item Added",
            listId: gotList.listId
        };
        this.appService.createHistoryFunction(option).subscribe(function (response) {
            if (response.status !== 200) {
                _this.toastr.warning(response.message);
            }
        }, function (error) {
            _this.router.navigate(['/serverError']);
        });
        var data = {
            itemId: itemId,
            subItemName: this.subItemName,
            subItemId: this.uid.randomUUID(8),
            subItemDone: false
        };
        this.appService.addSubItems(data).subscribe(function (response) {
            _this.toastr.success(response.message);
            for (var _i = 0, _a = _this.itemArray; _i < _a.length; _i++) {
                var item = _a[_i];
                if (itemId === item.itemId) {
                    item.subItems.push(data);
                }
            }
            _this.subItemName = '';
            _this.getAllHistory(gotList.listId);
        });
        if (gotList.privacy === false) {
            var notifcationData = {
                message: "A " + data.subItemName + " Sub Item has been added by " + this.cookieService.get('UserName') + " in " + gotList.listName + " List.",
                userId: this.friendsId
            };
            this.notifyUpdatesToUser(notifcationData);
        }
    };
    DashboardComponent.prototype.editItem = function (event, item, done, gotList) {
        var _this = this;
        if (event) {
            var option = {
                key: "Item Edited",
                listId: item.listId
            };
            this.appService.createHistoryFunction(option).subscribe(function (response) {
                if (response.status !== 200) {
                    _this.toastr.warning(response.message);
                }
            }, function (error) {
                _this.router.navigate(['/serverError']);
            });
            if (!item.itemName) {
                this.toastr.info('Please Enter Item Name');
            }
            else {
                var data = {
                    itemId: item.itemId,
                    itemName: item.itemName,
                    done: done
                };
                this.appService.editItem(data).subscribe(function (response) {
                    _this.toastr.success(response.message);
                });
                item.a = false;
                this.getAllHistory(item.listId);
            }
            if (gotList.privacy === false) {
                var notifcationData = {
                    message: "A " + item.itemName + "  Item has been Changed by " + this.cookieService.get('UserName') + " in " + gotList.listName + " List.",
                    userId: this.friendsId
                };
                this.notifyUpdatesToUser(notifcationData);
            }
        }
    };
    DashboardComponent.prototype.deleteItem = function (item, gotList) {
        var _this = this;
        if (gotList) {
            var option = {
                key: "Item Deleted",
                listId: gotList.listId
            };
            this.appService.createHistoryFunction(option).subscribe(function (response) {
                if (response.status !== 200) {
                    _this.toastr.warning(response.message);
                }
            }, function (error) {
                _this.router.navigate(['/serverError']);
            });
        }
        this.appService.deleteItemFunction(item.itemId).subscribe(function (response) {
            if (response.status === 200) {
                _this.toastr.info(response.message);
                _this.itemArray.forEach(function (item, index, object) {
                    if (item.itemId === item.itemId) {
                        object.splice(index, 1);
                    }
                });
            }
            else {
                _this.toastr.warning(response.message);
            }
            _this.getAllHistory(_this.selectedListId);
        });
        if (gotList) {
            if (gotList.privacy === false) {
                var notifcationData = {
                    message: "A " + item.itemName + "  Item has been Deleted by " + this.cookieService.get('UserName') + " in " + gotList.listName + " List.",
                    userId: this.friendsId
                };
                this.notifyUpdatesToUser(notifcationData);
            }
        }
    };
    DashboardComponent.prototype.editSubItem = function (event, subItem, itemId, done, gotList) {
        var _this = this;
        if (event) {
            var option = {
                key: "Sub Item Edited",
                listId: this.selectedListId
            };
            this.appService.createHistoryFunction(option).subscribe(function (response) {
                if (response.status !== 200) {
                    _this.toastr.warning(response.message);
                }
            }, function (error) {
                _this.router.navigate(['/serverError']);
            });
            if (!subItem.subItemName) {
                this.toastr.info('Please Enter Item Name');
            }
            else {
                var data = {
                    subItemId: subItem.subItemId,
                    subItemName: subItem.subItemName,
                    subItemDone: done,
                    itemId: itemId
                };
                this.appService.editSubItem(data).subscribe(function (response) {
                    _this.toastr.success(response.message);
                });
                subItem.a = false;
                this.getAllHistory(this.selectedListId);
            }
            if (gotList.privacy === false) {
                var notifcationData = {
                    message: "A " + subItem.subItemName + " Sub Item has been Changed by " + this.cookieService.get('UserName') + " in " + gotList.listName + " List.",
                    userId: this.friendsId
                };
                this.notifyUpdatesToUser(notifcationData);
            }
        }
    };
    DashboardComponent.prototype.deleteSubItem = function (subItem, itemId, gotList) {
        var _this = this;
        var option = {
            key: "Sub Item Added",
            listId: this.selectedListId
        };
        this.appService.createHistoryFunction(option).subscribe(function (response) {
            if (response.status !== 200) {
                _this.toastr.warning(response.message);
            }
        }, function (error) {
            _this.router.navigate(['/serverError']);
        });
        var data = {
            itemId: itemId,
            subItemId: subItem.subItemId
        };
        this.appService.deleteSubItemFunction(data).subscribe(function (response) {
            if (response.status === 200) {
                _this.toastr.info(response.message);
                _this.itemArray.forEach(function (item) {
                    item.subItems.forEach(function (Item, index, object) {
                        if (Item.subItemId === subItem.subItemId) {
                            object.splice(index, 1);
                        }
                    });
                });
            }
            else {
                _this.toastr.warning(response.message);
            }
            _this.getAllHistory(_this.selectedListId);
        });
        if (gotList.privacy === false) {
            var notifcationData = {
                message: "A " + subItem.subItemName + " Sub Item has been Deleted by " + this.cookieService.get('UserName') + " in " + gotList.listName + " List.",
                userId: this.friendsId
            };
            this.notifyUpdatesToUser(notifcationData);
        }
    };
    DashboardComponent.prototype.undoFunction = function (listId) {
        var _this = this;
        var tempHistory = this.allHistory[0];
        var props = ['itemId', 'listId', 'itemName', 'createdOn', 'subItems'];
        if (tempHistory.key === "Item Added") {
            var result = this.itemArray.filter(function (oldItem) {
                return !tempHistory.itemsArray.some(function (newItem) {
                    return oldItem.itemId === newItem.itemId;
                });
            }).map(function (item) {
                return props.reduce(function (newOne, itemId) {
                    newOne[itemId] = item[itemId];
                    return newOne;
                }, {});
            });
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var item = result_1[_i];
                this.deleteItem(item);
            }
        }
        if (tempHistory.key === "Item Deleted") {
            var newResult = tempHistory.itemsArray.filter(function (oldItem) {
                return !_this.itemArray.some(function (newItem) {
                    return oldItem.itemId === newItem.itemId;
                });
            }).map(function (item) {
                return props.reduce(function (newOne, itemId) {
                    newOne[itemId] = item[itemId];
                    return newOne;
                }, {});
            });
            for (var _a = 0, newResult_1 = newResult; _a < newResult_1.length; _a++) {
                var item = newResult_1[_a];
                var data = {
                    listId: item['listId'],
                    itemName: item['itemName'],
                    itemId: item['itemId']
                };
                this.appService.addItems(data).subscribe(function (response) {
                    _this.toastr.success(response.message);
                });
                this.getAllHistory(item['listId']);
            }
        }
        this.itemArray = this.allHistory[0].itemsArray;
        for (var _b = 0, _c = this.itemArray; _b < _c.length; _b++) {
            var items = _c[_b];
            var data = {
                listId: listId,
                itemId: items.itemId,
                itemName: items.itemName,
                done: items.done,
                subItems: items.subItems,
                createdOn: items.createdOn
            };
            this.appService.replaceItem(data).subscribe(function (response) {
                if (response.status !== 200) {
                    _this.toastr.warning(response.message);
                }
            }, function (error) {
                _this.router.navigate(['/serverError']);
            });
        }
        this.appService.updateHistoryFunction(listId).subscribe(function (response) {
            if (response.status !== 200) {
                _this.toastr.warning(response.message);
            }
        }, function (error) {
            _this.router.navigate(['/serverError']);
        });
        this.getAllHistory(listId);
        this.getAllItem(listId);
        for (var _d = 0, _e = this.currentList; _d < _e.length; _d++) {
            var list = _e[_d];
            if (list.privacy === false) {
                var notifcationData = {
                    message: "A Undo has been done by " + this.cookieService.get('UserName') + " in " + list.listName + " List.",
                    userId: this.friendsId
                };
                this.notifyUpdatesToUser(notifcationData);
            }
        }
    };
    DashboardComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.ctrlKey && event.key == 'z' || event.metaKey && event.key == 'z') {
            this.undoFunction(this.selectedListId);
        }
    }; //end
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], DashboardComponent.prototype, "handleKeyboardEvent", null);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-image\">\n  <div class=\"row\">\n      <div style=\"margin-top: 5vh;\" class=\"col-md-6 mx-auto col-sm-8\">\n          <div class=\"card border-info cardBorder\">\n              <div class=\"card-header bg-secondary\">\n                  <h2 class=\"card-title\" style=\"color:white; text-align: center\">Password Reset</h2>\n              </div>\n\n              <div style=\"padding-top:30px\" class=\"card-body text-center \">\n                  <div class=\"text-center\">\n                      <div>\n                          <h2>Something is Wrong</h2>\n                      </div>\n                      <hr>\n                      <h1 style=\"color: red\">Opps!!</h1>\n                      <br>\n                      <h3>The page you are looking for are not exist</h3>\n                      <br>\n                      <h5 style=\"color: red;\">Error 404</h5>\n                  \n                  <hr>\n                  <h4>Thank You!!!</h4>\n\n                  <br>\n              </div>\n              <div class=\"card-footer text-center\">\n                  <div class=\"col-md-12 control\">\n                      <button class=\"btn btn-outline-success\" (click)=\"goBack()\">Go Back to previous page </button>\n                  </div>\n              </div>\n\n          </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(location) {
        var _this = this;
        this.location = location;
        this.goBack = function () {
            _this.location.back();
        };
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/server-error/server-error.component.css":
/*!*********************************************************!*\
  !*** ./src/app/server-error/server-error.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlci1lcnJvci9zZXJ2ZXItZXJyb3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/server-error/server-error.component.html":
/*!**********************************************************!*\
  !*** ./src/app/server-error/server-error.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-image\">\n  <div class=\"row\">\n      <div style=\"margin-top: 5vh;\" class=\"col-md-6 mx-auto col-sm-8\">\n          <div class=\"card border-info cardBorder\">\n              <div class=\"card-header bg-secondary\">\n                  <h2 class=\"card-title\" style=\"color:white; text-align: center\">Password Reset</h2>\n              </div>\n\n              <div style=\"padding-top:30px\" class=\"card-body text-center \">\n                  <div class=\"text-center\">\n                      <div>\n                          <h2>Something is Wrong</h2>\n                      </div>\n                      <hr>\n                      <h1 style=\"color: red\">Opps!!</h1>\n                      <br>\n                      <h3>There might be some technical error, we are really sorry for this</h3>\n                      <br>\n                      <h5 style=\"color: red;\">Error 500</h5>\n                      <br>\n                      <h4 style=\"color: green\">Please try again after sometime :)</h4>\n                  <hr>\n                  <h4>Thank You!!!</h4>\n\n                  <br>\n              </div>\n              <div class=\"card-footer text-center\">\n                  <div class=\"col-md-12 control\">\n                      <button class=\"btn btn-outline-success\" (click)=\"goBack()\">Go Back to previous page </button>\n                  </div>\n              </div>\n\n          </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/server-error/server-error.component.ts":
/*!********************************************************!*\
  !*** ./src/app/server-error/server-error.component.ts ***!
  \********************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerErrorComponent = /** @class */ (function () {
    function ServerErrorComponent(location) {
        var _this = this;
        this.location = location;
        this.goBack = function () {
            _this.location.back();
        };
    }
    ServerErrorComponent.prototype.ngOnInit = function () {
    };
    ServerErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-server-error',
            template: __webpack_require__(/*! ./server-error.component.html */ "./src/app/server-error/server-error.component.html"),
            styles: [__webpack_require__(/*! ./server-error.component.css */ "./src/app/server-error/server-error.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], ServerErrorComponent);
    return ServerErrorComponent;
}());



/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\r\n    border-radius: 100%;\r\n    line-height: .5em;\r\n    padding: .7em;\r\n    text-align: center;\r\n    margin: 0em;\r\n    width: 2em;\r\n    height: 2em;\r\n    float: left;\r\n    text-transform: uppercase;\r\n    font-size: 1.5em\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZpcnN0LWNoYXIvZmlyc3QtY2hhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0dBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2ZpcnN0LWNoYXIvZmlyc3QtY2hhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyb3Age1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAuNWVtO1xyXG4gICAgcGFkZGluZzogLjdlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMGVtO1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)='nameClicked()'  class=\"crop\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n  {{firstChar}}\n</div>"

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.ts ***!
  \***********************************************************/
/*! exports provided: FirstCharComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstCharComponent", function() { return FirstCharComponent; });
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

var FirstCharComponent = /** @class */ (function () {
    function FirstCharComponent() {
        this._name = '';
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FirstCharComponent.prototype.ngOnInit = function () {
        this._name = this.name;
        this.firstChar = this._name[0];
    }; // end ngOnInit
    FirstCharComponent.prototype.ngOnChanges = function (changes) {
        var name = changes.name;
        this._name = name.currentValue;
        this.firstChar = this._name[0];
    };
    FirstCharComponent.prototype.nameClicked = function () {
        this.notify.emit(this._name);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "userBg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "userColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FirstCharComponent.prototype, "notify", void 0);
    FirstCharComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'first-char',
            template: __webpack_require__(/*! ./first-char.component.html */ "./src/app/shared/first-char/first-char.component.html"),
            styles: [__webpack_require__(/*! ./first-char.component.css */ "./src/app/shared/first-char/first-char.component.css")]
        })
    ], FirstCharComponent);
    return FirstCharComponent;
}()); // end show full name



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./first-char/first-char.component */ "./src/app/shared/first-char/first-char.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_first_char_first_char_component__WEBPACK_IMPORTED_MODULE_2__["FirstCharComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            exports: [
                _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_2__["FirstCharComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = /** @class */ (function () {
    function SocketService(http) {
        var _this = this;
        this.http = http;
        this.baseUrl = "http://api-lets-do.issuetrackerpro.com";
        this.verifyUser = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('verifyUser', function (data) {
                    observer.next(data);
                });
            });
        };
        this.onlineUserList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('user-list', function (userList) {
                    observer.next(userList);
                });
            });
        };
        this.disconnectSocket = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('disconnect', function () {
                    observer.next();
                });
            });
        };
        this.getUpdatesFromUser = function (userId) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on(userId, function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end getUpdatesFromUser
        this.setUser = function (authToken) {
            _this.socket.emit('set-user', authToken);
        };
        this.notifyUpdates = function (data) {
            _this.socket.emit('notification', data);
        };
        this.exitSocket = function () {
            _this.socket.disconnect();
        }; // end exit socket
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(this.baseUrl);
    }
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/user/forget-password/forget-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/forget-password/forget-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/forget-password/forget-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/forget-password/forget-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-image\">\n  <div class=\"row\">\n      <div style=\"margin-top: 5vh;\" class=\"col-md-6 mx-auto col-sm-8\">\n          <div class=\"card border-info cardBorder\">\n              <div class=\"card-header bg-secondary\">\n                  <h2 class=\"card-title\" style=\"color:white; text-align: center\">Password Reset</h2>\n              </div>\n\n              <div style=\"padding-top:30px\" class=\"card-body text-center \">\n                  <div class=\"text-center\">\n                      <div>\n                          <h2>Welcome to Lets-Do!!</h2>\n                      </div>\n                      <hr>\n                      <div class=\"form-group form-field-container\">\n                        <label for=\"exampleInputEmail1\" style=\"color: gray; float: left;\"><i class=\"fas fa-at\"></i>&nbsp;&nbsp;Email address<span style=\"color: red; font-size: 22px;\">*</span></label>\n                          <input type=\"email\" [(ngModel)]=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" #emailref=\"ngModel\" name=\"email\" id=\"inputEmail\" class=\"form-control\"  placeholder=\" Email address\" required\n                            autofocus>\n                            <div [hidden]=\"emailref.valid || emailref.pristine\" style=\"color: red;\">Please enter the Correct Email Address</div>\n                      </div>\n                  </div>\n                  <hr>\n                  <h6>Please Enter you Registered Email addess and You will get the link to reset your Password at the registred email address</h6>\n\n                  <br>\n              </div>\n              <div class=\"card-footer text-center\">\n                  <div class=\"col-md-12 control\">\n                      <button class=\"btn btn-outline-success\" (click)=\"resetPassword()\">Submit </button>\n                  </div>\n              </div>\n\n          </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/forget-password/forget-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forget-password/forget-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(appService, _route, router, toastr) {
        var _this = this;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.resetPassword = function () {
            console.log(_this.email + 'here');
            if (!_this.email) {
                _this.toastr.warning("Please provide registered email address", "Warning!");
            }
            else {
                _this.appService.forgetPassword(_this.email).subscribe(function (response) {
                    if (response['status'] === 200) {
                        _this.toastr.success(response.message);
                    }
                    else {
                        _this.toastr.error(response.messsage);
                    }
                }, function (error) {
                    _this.router.navigate(['/serverError']);
                });
            }
        };
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__(/*! ./forget-password.component.html */ "./src/app/user/forget-password/forget-password.component.html"),
            styles: [__webpack_require__(/*! ./forget-password.component.css */ "./src/app/user/forget-password/forget-password.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n      <div style=\"margin-top: 5vh;\" class=\"col-sm-12 col-md-6 col-lg-4 mx-auto\">\n          <div class=\"card border-success cardBorder\">\n\n              <div style=\"padding-top:30px; background-color: #f9fbe7\" class=\"card-body text-center\">\n                  <div class=\"text-center\">\n                      <div>\n                          <h2>Welcome!!</h2>\n                      </div>\n                      <div>\n                          <h3>Lets-Do :)</h3>\n                      </div>\n                      <hr>\n                      <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\" style=\"color: gray; float: left;\"><i class=\"fas fa-at\"></i>&nbsp;&nbsp;Email address<span style=\"color: red; font-size: 22px;\">*</span></label>\n                      <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" id=\"inputEmail\" class=\"form-control\"  placeholder=\" Email address\" required\n                        autofocus>\n                      <br>\n                        <label for=\"inputPassword\" style=\"color: gray; float: left;\"><i class=\"fas fa-key\"></i>&nbsp;&nbsp;Password<span style=\"color: red; font-size: 22px;\">*</span></label>\n                       <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\">\n                      </div>\n                      <hr>\n                      <div class=\"row p-3\" style=\"display: flex; justify-content: space-between \">\n                        <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/signup/']\"><i class=\"fas fa-user-plus\"></i>&nbsp;Register-Now</button>\n                        <button type=\"button\" class=\"btn btn-success\" (click)=\"signinFunction()\">Log-in &nbsp;&nbsp;<i class=\"fas fa-sign-in-alt\"></i></button>\n                      </div>\n                      <br>\n                      <a [routerLink]=\"['/forget-password/']\" style=\"float: right; color: red; cursor: pointer;\">Forget Password Click here</a>\n                  </div>\n              </div>\n          </div>\n\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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
    function LoginComponent(cookieService, toastr, appService, router) {
        var _this = this;
        this.cookieService = cookieService;
        this.toastr = toastr;
        this.appService = appService;
        this.router = router;
        this.signinFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('Please Enter Email');
            }
            else if (!_this.password) {
                _this.toastr.warning('Please Enter Password');
            }
            else {
                var data = {
                    email: _this.email,
                    password: _this.password
                };
                _this.appService.signinFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        console.log(apiResponse.data);
                        _this.cookieService.set('authtoken', apiResponse.data.authToken);
                        _this.cookieService.set('userId', apiResponse.data.userDetails.userId);
                        _this.cookieService.set('UserName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        _this.appService.setUserInformationStorage(apiResponse.data);
                        _this.router.navigate(['/dashboard']);
                    }
                    else {
                        _this.toastr.info(apiResponse.message);
                    }
                }, function (error) {
                    _this.router.navigate(['/serverError']);
                });
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-image\">\n  <div class=\"row\">\n      <div style=\"margin-top: 5vh;\" class=\"col-md-6 mx-auto col-sm-8\">\n          <div class=\"card border-info cardBorder\">\n              <div class=\"card-header bg-secondary\">\n                  <h2 class=\"card-title\" style=\"color:white; text-align: center\">Password Reset</h2>\n              </div>\n\n              <div style=\"padding-top:30px\" class=\"card-body text-center \">\n                  <div class=\"text-center\">\n                      <div>\n                          <h2>Welcome to Lets-Do!!</h2>\n                      </div>\n                      <hr>\n                      <div class=\"form-group form-field-container\">\n                        <label for=\"inputPassword\" style=\"color: gray; float: left;\"><i class=\"fas fa-key\"></i>&nbsp;&nbsp;Password<span style=\"color: red; font-size: 22px;\">*</span> (Min 8 characters)</label>\n                           <input type=\"password\" minlength=\"8\" #passref=\"ngModel\" [(ngModel)]=\"password\" name=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n                           <div [hidden]=\"!passref.errors?.minlength\" style=\"color: red;\">Password must have eight characters</div>\n                           <div [hidden]=\"!passref.errors?.required || passref.pristine\" style=\"color: red;\">Please Enter the value</div>\n                           \n                      </div>\n                      <div class=\"form-group form-field-container\">\n                        <label for=\"inputPassword\" style=\"color: gray; float: left;\"><i class=\"fas fa-key\"></i>&nbsp;&nbsp;Confirm Password<span style=\"color: red; font-size: 22px;\">*</span></label>\n                           <input type=\"password\"  #confirm=\"ngModel\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" id=\"confirmPassword\" class=\"form-control\" placeholder=\"Password\" required>\n                           <div *ngIf=\"(passref.value !== confirm.value) && !confirm.pristine\" style=\"color: red;\">Password do not match</div>\n                           <div [hidden]=\"!confirm.errors?.required || confirm.pristine\" style=\"color: red;\">Please Enter the value</div>\n                           \n                      </div>\n                  </div>\n                  <hr>\n                  <h4>Thank You!!!</h4>\n\n                  <br>\n              </div>\n              <div class=\"card-footer text-center\">\n                  <div class=\"col-md-12 control\">\n                      <button class=\"btn btn-outline-success\" (click)=\"resetPassword()\">Submit </button>\n                  </div>\n              </div>\n\n          </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(appService, _route, router, toastr) {
        var _this = this;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.resetPassword = function () {
            if (!_this.password) {
                _this.toastr.info('Please enter password');
            }
            else {
                var data = {
                    userId: _this.userId,
                    password: _this.password
                };
                _this.appService.resetPassword(data).subscribe(function (response) {
                    if (response.status === 200) {
                        _this.toastr.success(response.message);
                        setTimeout(function () {
                            _this.router.navigate(['/login']);
                        }, 2000); //redirecting to signIn page
                    }
                    else {
                        _this.toastr.warning(response.message);
                    }
                }, function (error) {
                    _this.router.navigate(['/serverError']);
                });
            }
        };
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.userId = this._route.snapshot.paramMap.get('userId');
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/user/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/user/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-image\">\n  <div class=\"row\">\n    <div id=\"signupbox\" style=\"margin-top:5vh;\" class=\"mainbox col-sm-12 col-md-8 col-lg-6 mx-auto\">\n      <div class=\"card border-info cardBorder\">\n        <div class=\"card-body\">\n\n          <div class=\"text-center\">\n            <div>\n              <h3>Welcome!!</h3>\n            </div>\n            <div>\n              <h5>Thank You for being a part of Lets-Do, Happy to see you here.<br>LetS PLan!!</h5>\n            </div>\n          </div>\n          <br>\n          <form id=\"signupform\" class=\"form-horizontal\" role=\"form\" #signupForm=\"ngForm\">\n\n            <div class=\"row\">\n\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <div class=\"form-group form-field-container\">\n                    <label  style=\"color: gray; float: left;\"><i class=\"fas fa-pen-nib\"></i>&nbsp;&nbsp;First Name<span style=\"color: red; font-size: 22px;\">*</span></label>\n                      <input type=\"text\" #first=\"ngModel\" [(ngModel)]=\"firstName\" name=\"firstName\" id=\"inputFirstName\" class=\"form-control\"  placeholder=\" first name\" required\n                        autofocus>\n                        <div [hidden]=\"first.valid || first.pristine\" style=\"color: red;\">Please enter the value</div>\n                  </div>\n\n                </div>\n              </div>\n\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <div class=\"form-group form-field-container\">\n                    <label  style=\"color: gray; float: left;\"><i class=\"fas fa-pen-nib\"></i>&nbsp;&nbsp;Last Name<span style=\"color: red; font-size: 22px;\">*</span></label>\n                    <input type=\"text\" #last=\"ngModel\" [(ngModel)]=\"lastName\" name=\"lastName\" id=\"inputLastName\" class=\"form-control\"  placeholder=\"last name\" required\n                      autofocus>\n                      <div [hidden]=\"last.valid || last.pristine\" style=\"color: red;\">Please enter the value</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-group form-field-container\">\n                    <label for=\"exampleInputEmail1\" style=\"color: gray; float: left;\"><i class=\"fas fa-at\"></i>&nbsp;&nbsp;Email address<span style=\"color: red; font-size: 22px;\">*</span></label>\n                      <input type=\"email\" [(ngModel)]=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" #emailref=\"ngModel\" name=\"email\" id=\"inputEmail\" class=\"form-control\"  placeholder=\" Email address\" required\n                        autofocus>\n                        <div [hidden]=\"emailref.valid || emailref.pristine\" style=\"color: red;\">Please enter the Correct Email Address</div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-group form-field-container\">\n                    <label for=\"inputPassword\" style=\"color: gray; float: left;\"><i class=\"fas fa-key\"></i>&nbsp;&nbsp;Password<span style=\"color: red; font-size: 22px;\">*</span> (Min 8 characters)</label>\n                       <input type=\"password\" minlength=\"8\" #passref=\"ngModel\" [(ngModel)]=\"password\" name=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n                       <div [hidden]=\"!passref.errors?.minlength\" style=\"color: red;\">Password must have eight characters</div>\n                       <div [hidden]=\"!passref.errors?.required || passref.pristine\" style=\"color: red;\">Please Enter the value</div>\n                       \n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-sm-12 col-md-6\">\n                <div class=\"form-group form-field-container\">\n\n                  <label style=\"color: gray; float: left;\"><i class=\"fas fa-flag\"></i>&nbsp; Country</label>\n                  <select [(ngModel)]=\"countryCode\" name=\"countryCode\" (change)=\"getCode()\" class=\"form-control\" id=\"code\"\n                      required>\n                      <option [ngValue]=\"undefined\"  disabled  selected> Select the Country </option>\n                    <option  *ngFor=\"let country of countries\" [value]=\"country.code\">{{country.name}}</option>\n                  </select> \n\n                </div>\n              </div>\n\n              <div class=\"col-sm-12 col-md-6\">\n                \n                  <label for=\"validationCustomUsername\" style=\"color: gray; float: left;\"><i class=\"fas fa-mobile-alt\"></i>&nbsp; Mobile Number</label>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"inputGroupPrepend\">+{{singleCountryCode}}</span>\n                    </div>\n                    <input type=\"text\" [(ngModel)]=\"mobileNumber\" name=\"mobileNumber\" class=\"form-control\" id=\"validationCustomUsername\" placeholder=\"Mobile Number\" aria-describedby=\"inputGroupPrepend\" required>\n                  </div>\n                \n              </div>\n\n            </div>\n\n            <div class=\"form-group text-center\">\n              <div class=\"col-md-12\">\n                <button id=\"btn-signup\" type=\"button\" class=\"btn btn-primary\" (click)=\"signupFunction()\"  [disabled]=\"!signupForm.form.valid\">\n                  Register To Plan&nbsp;&nbsp;<i class=\"fas fa-user-plus\"></i></button>\n\n                <br>\n                <br>\n                <button class=\"btn btn-warning\" type=\"button\" style=\"float:right; color: white\" [routerLink]=\"['/login']\">Sign\n                  In</button>\n\n              </div>\n            </div>\n\n          </form>\n        </div>\n      </div>\n\n      <br>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(appService, _route, router, toastr) {
        var _this = this;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.countries = [];
        this.countriesCode = [];
        this.getCode = function () {
            for (var _i = 0, _a = _this.countriesCode; _i < _a.length; _i++) {
                var x = _a[_i];
                if (_this.countryCode === x['code']) {
                    _this.singleCountryCode = x['number'];
                }
            }
            for (var _b = 0, _c = _this.countries; _b < _c.length; _b++) {
                var y = _c[_b];
                if (_this.countryCode === y['code']) {
                    _this.countryName = y['name'];
                }
            }
            console.log(_this.countryName);
        };
        this.signupFunction = function () {
            if (!_this.firstName) {
                _this.toastr.info('Enter first name');
            }
            else if (!_this.lastName) {
                _this.toastr.info('Enter last name');
            }
            else if (!_this.mobileNumber) {
                _this.toastr.info('Enter mobile number');
            }
            else if (!_this.password) {
                _this.toastr.info('Enter password');
            }
            else {
                var data = {
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    mobileNumber: "" + _this.singleCountryCode + _this.mobileNumber,
                    email: _this.email,
                    password: _this.password,
                    country: _this.countryName
                };
                _this.appService.signUp(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        _this.toastr.success('SingUp Successfully');
                        setTimeout(function () {
                            _this.router.navigate(['/']);
                        }, 2000);
                    }
                    else {
                        _this.toastr.info(apiResponse.message);
                    }
                }, function (error) {
                    _this.router.navigate(['/serverError']);
                });
            }
        };
    }
    SignUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getCountryNames().subscribe(function (response) {
            for (var i in response) {
                var singleCountry = {
                    name: response[i],
                    code: i
                };
                _this.countries.push(singleCountry);
            }
            _this.countries = _this.countries.sort(function (first, second) {
                return first.name.toUpperCase() < second.name.toUpperCase() ? -1 : (first.name.toUpperCase() > second.name.toUpperCase() ? 1 : 0);
            }); //end sort
        });
        this.appService.getCountryCodes()
            .subscribe(function (response) {
            for (var i in response) {
                var singleCountryCode = {
                    number: response[i],
                    code: i
                };
                _this.countriesCode.push(singleCountryCode);
            }
        });
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/user/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/user/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/user/forget-password/forget-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/user/reset-password/reset-password.component.ts");
/* harmony import */ var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./verify-email/verify-email.component */ "./src/app/user/verify-email/verify-email.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'signup', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__["SignUpComponent"] },
    { path: 'forget-password', component: _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordComponent"] },
    { path: 'verify-email/:userId', component: _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_7__["VerifyEmailComponent"] },
    { path: 'reset-password/:userId', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"] }
];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__["SignUpComponent"], _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"], _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_7__["VerifyEmailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/verify-email/verify-email.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/verify-email/verify-email.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdmVyaWZ5LWVtYWlsL3ZlcmlmeS1lbWFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/verify-email/verify-email.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/verify-email/verify-email.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-image\">\n  <div class=\"row\">\n      <div style=\"margin-top: 5vh;\" class=\"col-md-6 mx-auto col-sm-8\">\n          <div class=\"card border-info cardBorder\">\n              <div class=\"card-header bg-secondary\">\n                  <h2 class=\"card-title\" style=\"color:white; text-align: center\">Email Verification Status!</h2>\n              </div>\n\n              <div style=\"padding-top:30px\" class=\"card-body text-center \">\n                  <div class=\"text-center\">\n                      <div>\n                          <h2>Welcome to Lets-Do!!</h2>\n                      </div>\n                      <div>\n                          <h4 style=\"color:red\">{{message}}</h4>\n                      </div>\n                  </div>\n\n                  <br>\n              </div>\n              <div class=\"card-footer text-center\">\n                  <div class=\"col-md-12 control\">\n                      <button class=\"btn btn-outline-success\" [routerLink]=\"['/login']\">Login </button>\n                  </div>\n              </div>\n\n          </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/verify-email/verify-email.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/verify-email/verify-email.component.ts ***!
  \*************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent(appService, _route, router, toastr) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this._route.snapshot.paramMap.get('userId');
        this.appService.verifyEmail(this.userId).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
                _this.toastr.success(apiResponse['message']);
                _this.message = "Your account has been Successfully activated. Please Log-In to enjoy our services";
            }
            else {
                _this.toastr.error(apiResponse.message, "Error!");
            }
        }, function (error) {
            _this.router.navigate(['/serverError']);
        }); //end calling verifyEmail
    };
    VerifyEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(/*! ./verify-email.component.html */ "./src/app/user/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ./verify-email.component.css */ "./src/app/user/verify-email/verify-email.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\FAISAL\edwisor\project\Lets-Do\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map