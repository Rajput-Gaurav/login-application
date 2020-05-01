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

          // create a new module file for eager and feature loading:
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginContentComponent,
    NavbarComponent,
    HomeComponent,
    BlogComponent,
    QuotesComponent,
    AboutUsComponent,
    ContactUsComponent
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
    RouterModule.forRoot(routes),
    DashboardRoutingModule
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
