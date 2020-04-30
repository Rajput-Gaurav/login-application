import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  Routes, RouterModule} from '@angular/router';

import{ LoginContentComponent} from './login-content/login-content.component';
import { AppComponent } from './app.component';


@NgModule({

  imports: [
    CommonModule,
    RouterModule,
  ],

  declarations: []
})

export class AppRoutingModule { }

export const routes:Routes =[


  {
    path:'login-content', component:LoginContentComponent
  },
];