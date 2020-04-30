import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';

import 'hammerjs';

import { AppComponent } from './app.component';
import { LoginContentComponent } from './login-content/login-content.component';

import { AppRoutingModule, routes } from './/app-routing.module';
import {  RouterModule} from '@angular/router';

import { MatCardModule,
          MatTabsModule,
          MatFormFieldModule,
          MatInputModule,
          MatCheckboxModule,
          MatIconModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,

    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],

  exports:[BrowserAnimationsModule,
            MatToolbarModule,
            FlexLayoutModule,
            MatButtonModule,
            MatCardModule,
            MatTabsModule,
            MatFormFieldModule,
            MatInputModule,
            MatCheckboxModule,
            MatIconModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
