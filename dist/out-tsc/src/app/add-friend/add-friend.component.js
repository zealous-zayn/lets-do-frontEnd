var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { AppService } from './../app.service';
import { SocketService } from './../socket.service';
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
        Component({
            selector: 'app-add-friend',
            templateUrl: './add-friend.component.html',
            styleUrls: ['./add-friend.component.css']
        }),
        __metadata("design:paramtypes", [ToastrService,
            AppService,
            Router,
            CookieService,
            SocketService])
    ], AddFriendComponent);
    return AddFriendComponent;
}());
export { AddFriendComponent };
//# sourceMappingURL=add-friend.component.js.map