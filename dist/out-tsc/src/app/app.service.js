var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
var AppService = /** @class */ (function () {
    function AppService(cookieService, _http) {
        this.cookieService = cookieService;
        this._http = _http;
        this.baseUrl = 'http://localhost:3000/api/v1/users';
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
        var params = new HttpParams()
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
        var params = new HttpParams()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobileNumber', data.mobileNumber)
            .set('email', data.email)
            .set('password', data.password)
            .set('country', data.country);
        return this._http.post(this.baseUrl + "/signup", params);
    }; //end signUp 
    AppService.prototype.verifyEmail = function (userId) {
        var params = new HttpParams()
            .set('userId', userId);
        return this._http.post(this.baseUrl + "/verifyEmail", params);
    };
    AppService.prototype.forgetPassword = function (email) {
        var params = new HttpParams()
            .set('email', email);
        return this._http.post(this.baseUrl + "/forgetPassword", params);
    };
    AppService.prototype.resetPassword = function (data) {
        var params = new HttpParams()
            .set('userId', data.userId)
            .set('password', data.password);
        return this._http.post(this.baseUrl + "/resetPassword", params);
    };
    AppService.prototype.logout = function () {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'));
        return this._http.post(this.baseUrl + "/logout", params);
    };
    AppService.prototype.getAllUsers = function () {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'));
        return this._http.get(this.baseUrl + "/getAllUsers", { params: params });
    };
    AppService.prototype.sendRequestFunction = function (data) {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('senderId', this.cookieService.get('userId'))
            .set('senderName', this.cookieService.get('UserName'))
            .set('receiverId', data.receiverId)
            .set('receiverName', data.receiverName);
        return this._http.post(this.baseUrl + "/sent-friend-request", params);
    };
    AppService.prototype.getAllFriend = function () {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('userId', this.cookieService.get('userId'));
        return this._http.get(this.baseUrl + "/get-all-friends", { params: params });
    };
    AppService.prototype.getAllFilterUser = function (data) {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('userIdArray', data.array);
        return this._http.get(this.baseUrl + "/get-all-filter-users", { params: params });
    };
    AppService.prototype.cancelRequestFunction = function (data) {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('senderId', this.cookieService.get('userId'))
            .set('senderName', this.cookieService.get('UserName'))
            .set('receiverId', data.receiverId)
            .set('receiverName', data.receiverName);
        return this._http.post(this.baseUrl + "/cancel-request", params);
    };
    AppService.prototype.rejectRequestFunction = function (data) {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('receiverId', this.cookieService.get('userId'))
            .set('receiverName', this.cookieService.get('UserName'))
            .set('senderId', data.senderId)
            .set('senderName', data.senderName);
        return this._http.post(this.baseUrl + "/reject-request", params);
    };
    AppService.prototype.acceptRequestFunction = function (data) {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('receiverId', this.cookieService.get('userId'))
            .set('receiverName', this.cookieService.get('UserName'))
            .set('senderId', data.senderId)
            .set('senderName', data.senderName);
        return this._http.post(this.baseUrl + "/accept-request", params);
    };
    AppService.prototype.unFriendFunction = function (data) {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('userId', this.cookieService.get('userId'))
            .set('userName', this.cookieService.get('UserName'))
            .set('friendId', data.friendId)
            .set('friendName', data.friendName);
        return this._http.post(this.baseUrl + "/un-friend", params);
    };
    AppService.prototype.createListFunction = function (data) {
        var params = new HttpParams()
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
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'));
        return this._http.get(this.baseUrl + "/get-all-list", { params: params });
    };
    AppService.prototype.deleteListFunction = function (data) {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('listId', data);
        return this._http.post(this.baseUrl + "/delete-list", params);
    };
    AppService.prototype.editListFunction = function (data) {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('modifierName', data.modifierName)
            .set('modifierId', data.modifierId)
            .set('listName', data.listName)
            .set('listId', data.listId);
        return this._http.post(this.baseUrl + "/edit-list", params);
    };
    AppService.prototype.getAllItem = function (listId) {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('listId', listId);
        return this._http.get(this.baseUrl + "/get-all-items", { params: params });
    };
    AppService.prototype.addItems = function (data) {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('itemName', data.itemName)
            .set('listId', data.listId)
            .set('itemId', data.itemId);
        return this._http.post(this.baseUrl + "/add-item", params);
    };
    AppService.prototype.addSubItems = function (data) {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('subItemName', data.subItemName)
            .set('itemId', data.itemId)
            .set('subItemId', data.subItemId);
        return this._http.post(this.baseUrl + "/add-sub-item", params);
    };
    AppService.prototype.editItem = function (data) {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('itemName', data.itemName)
            .set('itemId', data.itemId)
            .set('done', data.done);
        return this._http.post(this.baseUrl + "/edit-item", params);
    };
    AppService.prototype.deleteItemFunction = function (data) {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('itemId', data);
        return this._http.post(this.baseUrl + "/delete-item", params);
    };
    AppService.prototype.editSubItem = function (data) {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('subItemName', data.subItemName)
            .set('subItemId', data.subItemId)
            .set('subItemDone', data.subItemDone)
            .set('itemId', data.itemId);
        return this._http.post(this.baseUrl + "/edit-sub-item", params);
    };
    AppService.prototype.deleteSubItemFunction = function (data) {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('itemId', data.itemId)
            .set('subItemId', data.subItemId);
        return this._http.post(this.baseUrl + "/delete-sub-item", params);
    };
    AppService.prototype.getAllHistory = function (listId) {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('listId', listId);
        return this._http.get(this.baseUrl + "/get-all-history", { params: params });
    };
    AppService.prototype.createHistoryFunction = function (data) {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('listId', data.listId)
            .set('key', data.key);
        return this._http.post(this.baseUrl + "/create-history", params);
    };
    AppService.prototype.updateHistoryFunction = function (listId) {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('listId', listId);
        return this._http.post(this.baseUrl + "/update-history", params);
    };
    AppService.prototype.deleteHistoryFunction = function (listId) {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('listId', listId);
        return this._http.post(this.baseUrl + "/delete-history", params);
    };
    AppService.prototype.replaceItem = function (data) {
        var params = new HttpParams()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('data', JSON.stringify(data));
        return this._http.post(this.baseUrl + "/replace-item", params);
    };
    AppService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [CookieService, HttpClient])
    ], AppService);
    return AppService;
}());
export { AppService };
//# sourceMappingURL=app.service.js.map