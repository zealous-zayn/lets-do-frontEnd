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
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
var SocketService = /** @class */ (function () {
    function SocketService(http) {
        var _this = this;
        this.http = http;
        this.baseUrl = "http://localhost:3000";
        this.verifyUser = function () {
            return Observable.create(function (observer) {
                _this.socket.on('verifyUser', function (data) {
                    observer.next(data);
                });
            });
        };
        this.onlineUserList = function () {
            return Observable.create(function (observer) {
                _this.socket.on('user-list', function (userList) {
                    observer.next(userList);
                });
            });
        };
        this.disconnectSocket = function () {
            return Observable.create(function (observer) {
                _this.socket.on('disconnect', function () {
                    observer.next();
                });
            });
        };
        this.getUpdatesFromUser = function (userId) {
            return Observable.create(function (observer) {
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
        this.socket = io(this.baseUrl);
    }
    SocketService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], SocketService);
    return SocketService;
}());
export { SocketService };
//# sourceMappingURL=socket.service.js.map