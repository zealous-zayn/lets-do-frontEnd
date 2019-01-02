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
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../../app.service';
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
        Component({
            selector: 'app-reset-password',
            templateUrl: './reset-password.component.html',
            styleUrls: ['./reset-password.component.css']
        }),
        __metadata("design:paramtypes", [AppService,
            ActivatedRoute,
            Router,
            ToastrService])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
export { ResetPasswordComponent };
//# sourceMappingURL=reset-password.component.js.map