import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ErrorComponent} from './component/error/error.component';
import {ConfigurationsComponent} from './component/configurations/configurations.component';
import {HandlersComponent} from './component/handlers/handlers.component';
import {OutputsComponent} from './component/outputs/outputs.component';
import {LoginComponent} from './component/login/login.component';


const routes: Routes = [
  {path: 'configurations', component: ConfigurationsComponent},
  {path: '', component: LoginComponent},
  {path: 'handlers', component: HandlersComponent},
  {path: 'outputs', component: OutputsComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
