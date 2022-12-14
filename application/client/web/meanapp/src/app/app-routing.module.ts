import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SefscreenComponent } from './sefscreen/sefscreen.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UpdateauthorizationComponent } from './authorization/updateauthorization/updateauthorization.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { ManagecontrolComponent } from './managecontrol/managecontrol.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { VaultadminComponent } from './vaultadmin/vaultadmin.component';
import { AuthGuard } from './auth/auth.guard';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
{ path: 'sefscreen', component: SefscreenComponent, canActivate: [AuthGuard] },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'authorization', component: AuthorizationComponent, canActivate: [AuthGuard] },
{ path: 'updateauthorization', component: UpdateauthorizationComponent, canActivate: [AuthGuard] },
{ path: 'manageroles', component: ManagerolesComponent, canActivate: [AuthGuard] },
{ path: 'manageusers', component: ManageusersComponent, canActivate: [AuthGuard] },
{ path: 'managecontrol', component: ManagecontrolComponent, canActivate: [AuthGuard] },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
{ path: 'vaultadmin', component: VaultadminComponent, canActivate: [AuthGuard] },
       { path: '', component: TemplateComponent, pathMatch: 'full'   } 

{ path : 'createseverity', loadChildren: () => import('./createseverity/createseverity.module').then(m => m.CreateseverityModule), canActivate: [AuthGuard] } , 
{ path : 'getallseverity', loadChildren: () => import('./getallseverity/getallseverity.module').then(m => m.GetallseverityModule), canActivate: [AuthGuard] } , 
{ path : 'createtypes', loadChildren: () => import('./createtypes/createtypes.module').then(m => m.CreatetypesModule), canActivate: [AuthGuard] } , 
{ path : 'getalltypes', loadChildren: () => import('./getalltypes/getalltypes.module').then(m => m.GetalltypesModule), canActivate: [AuthGuard] } , 
{ path : 'createtickets', loadChildren: () => import('./createtickets/createtickets.module').then(m => m.CreateticketsModule), canActivate: [AuthGuard] } , 
{ path : 'updatetickets', loadChildren: () => import('./updatetickets/updatetickets.module').then(m => m.UpdateticketsModule), canActivate: [AuthGuard] } , 
{ path : 'getalltickets', loadChildren: () => import('./getalltickets/getalltickets.module').then(m => m.GetallticketsModule), canActivate: [AuthGuard] } , 
{ path : 'searchupdatetickets', loadChildren: () => import('./searchupdatetickets/searchupdatetickets.module').then(m => m.SearchupdateticketsModule), canActivate: [AuthGuard] } , 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
