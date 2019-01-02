import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent} from './sign-up/sign-up.component';
import { RouterModule, Route } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';


const routes = [
              {path: 'signup', component: SignUpComponent},
              {path:'forget-password', component:ForgetPasswordComponent},
              {path :'verify-email/:userId', component:VerifyEmailComponent},
              {path :'reset-password/:userId', component:ResetPasswordComponent}
              ]


@NgModule({
  declarations: [SignUpComponent, ForgetPasswordComponent, ResetPasswordComponent, VerifyEmailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
