import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/layout/admin/admin.component';
import { HomeComponent } from './admin/pages/home/home.component';
import { OrderComponent } from './admin/pages/order/order.component';
import { ProductComponent } from './admin/pages/product/product.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    redirectTo:'admin',
    path:'',
    pathMatch:'full'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:AdminComponent,
    canActivate:[AuthGuard],
    path:"admin",
    children:[
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },{
        component:HomeComponent,
        path:'home'
      },{
        component:ProductComponent,
        path:'product'
      },{
        component:OrderComponent,
        path:'order'
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
