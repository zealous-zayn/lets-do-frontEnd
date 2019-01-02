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
import { AppService } from './app.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AppService,
            Router,
            ToastrService])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map