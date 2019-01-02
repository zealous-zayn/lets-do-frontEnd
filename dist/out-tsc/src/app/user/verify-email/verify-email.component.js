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
        Component({
            selector: 'app-verify-email',
            templateUrl: './verify-email.component.html',
            styleUrls: ['./verify-email.component.css']
        }),
        __metadata("design:paramtypes", [AppService,
            ActivatedRoute,
            Router,
            ToastrService])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());
export { VerifyEmailComponent };
//# sourceMappingURL=verify-email.component.js.map