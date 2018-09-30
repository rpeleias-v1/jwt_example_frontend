import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from '../login/login.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'user', component: UserComponent },
    { path: '', component: LoginComponent } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)] ,
    exports: [RouterModule]   
})
export class AppRoutingModule {}
