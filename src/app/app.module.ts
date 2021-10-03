import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './component/menu/menu.component';
import {ErrorComponent} from './component/error/error.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {InterceptorService} from './service/interceptor.service';
import {FooterComponent} from './component/footer/footer.component';
import {ConfigurationsComponent} from './component/configurations/configurations.component';
import {HandlersComponent} from './component/handlers/handlers.component';
import {OutputsComponent} from './component/outputs/outputs.component';
import {LoginComponent} from './component/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ErrorComponent,
    FooterComponent,
    ConfigurationsComponent,
    HandlersComponent,
    OutputsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
