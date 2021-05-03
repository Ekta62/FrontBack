import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import {ProductComponent} from './product/product.component';
import { UploadimageComponent } from './uploadimage/uploadimage.component';

const dashboardrouting:Routes=[
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard],
    children:[{
        path:'profile',
        component:ProfileComponent
    },
    {
      path:'product',
      component:ProductComponent
    },
    {
      path:'upload',
      component:UploadimageComponent
    }
  ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(dashboardrouting)],
  exports: [RouterModule]
})

export class DashboardRoutingModule{}