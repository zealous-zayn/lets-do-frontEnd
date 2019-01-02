var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { AppService } from './../app.service';
import { SocketService } from './../socket.service';
import ShortUniqueId from 'short-unique-id';
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
        this.uid = new ShortUniqueId();
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
            console.log(_this.allHistory);
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
            if (gotList) {
                _this.getAllHistory(_this.selectedListId);
            }
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
        HostListener('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], DashboardComponent.prototype, "handleKeyboardEvent", null);
    DashboardComponent = __decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        }),
        __metadata("design:paramtypes", [ToastrService,
            AppService,
            Router,
            CookieService,
            SocketService])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map