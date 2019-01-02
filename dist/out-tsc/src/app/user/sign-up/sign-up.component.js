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
import { AppService } from './../../app.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
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
        Component({
            selector: 'app-sign-up',
            templateUrl: './sign-up.component.html',
            styleUrls: ['./sign-up.component.css']
        }),
        __metadata("design:paramtypes", [AppService,
            ActivatedRoute,
            Router,
            ToastrService])
    ], SignUpComponent);
    return SignUpComponent;
}());
export { SignUpComponent };
//# sourceMappingURL=sign-up.component.js.map