var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { AuthGuard } from './auth.guard';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { SidebarModule } from 'ng-sidebar';
var routes = [
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: "", redirectTo: 'login', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'serverError', component: ServerErrorComponent },
    { path: 'addFriend', component: AddFriendComponent, canActivate: [AuthGuard] },
    { path: '*', component: PageNotFoundComponent },
    { path: '**', component: PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            declarations: [LoginComponent, DashboardComponent, PageNotFoundComponent, ServerErrorComponent, AddFriendComponent],
            imports: [
                FormsModule,
                BrowserModule,
                SharedModule,
                ReactiveFormsModule,
                RouterModule.forRoot(routes),
                SidebarModule.forRoot()
            ],
            exports: [RouterModule],
            providers: [AuthGuard]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map