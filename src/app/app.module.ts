import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/layout/admin/admin.component';
import { HeaderComponent } from './admin/layout/block/header/header.component';
import { FooterComponent } from './admin/layout/block/footer/footer.component';
import { HomeComponent } from './admin/pages/home/home.component';
import { ProductComponent } from './admin/pages/product/product.component';
import { OrderComponent } from './admin/pages/order/order.component';
import { ListComponent } from './admin/pages/product/child/list/list.component';
import { FormComponent } from './admin/pages/product/child/form/form.component';
import { FormsModule } from '@angular/forms';
import { FormeditComponent } from './admin/pages/product/child/formedit/formedit.component';
import { ColorchangeDirective } from './directives/colorchange.directive';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    OrderComponent,
    ListComponent,
    FormComponent,
    FormeditComponent,
    ColorchangeDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
