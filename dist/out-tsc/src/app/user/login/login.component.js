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
import { AppService } from './../../app.service';
import { ToastrService } from 'ngx-toastr';
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
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [CookieService,
            ToastrService,
            AppService,
            Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map