import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

//Components
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const routes : Routes = [
  {path: 'login', component:LoginComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}

