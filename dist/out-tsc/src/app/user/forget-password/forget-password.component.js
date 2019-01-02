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
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../app.service';
import { ToastrService } from 'ngx-toastr';
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
        Component({
            selector: 'app-forget-password',
            templateUrl: './forget-password.component.html',
            styleUrls: ['./forget-password.component.css']
        }),
        __metadata("design:paramtypes", [AppService,
            ActivatedRoute,
            Router,
            ToastrService])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());
export { ForgetPasswordComponent };
//# sourceMappingURL=forget-password.component.js.map