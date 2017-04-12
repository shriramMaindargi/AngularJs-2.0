import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {WelcomeComponent} from "./welcome.component";
import {MenuComponent} from './menu.component';
import {RouterModule ,Routes} from '@angular/router';
import {PageNotFoundComponent} from './pageNoFound.component';
import {ProductComponent} from './products.component';
import {PhotoComponent} from'./photo.component';
import {FooterComponent} from'./footer.component';
import {ForgotPasswordComponent} from'./forgotPassword.component';
import {HeaderComponent} from'./header.component';

const routes:Routes = [
      {
        path :'',
        component:WelcomeComponent
      },
      {
        path :'welcome',
        component:WelcomeComponent
      },
      {
        path :'product',
        component:ProductComponent
      },
      {
        path :'photo',
        component:PhotoComponent
      },
      {
        path :'forgotpassword',
        component:ForgotPasswordComponent
      },
      {
        path :'menu',
        component:MenuComponent
      },
      {
        path :'**',
        component:PageNotFoundComponent
      }

];


@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent,WelcomeComponent,MenuComponent,PageNotFoundComponent,ProductComponent,PhotoComponent,FooterComponent,ForgotPasswordComponent,HeaderComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
