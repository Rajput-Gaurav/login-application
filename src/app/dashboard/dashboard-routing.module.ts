import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {dashboard} from './dashboard.coponent';
import {  Routes, RouterModule} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginContentComponent } from '../login-content/login-content.component';
import { BlogComponent } from '../blog/blog.component';
import { QuotesComponent } from '../quotes/quotes.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
// import { routes } from '../app-routing.module';

// create aa variable name routes:
//generate routing path:
const routes: Routes =[
                        {
                          path: 'home', component:HomeComponent
                        },

                        {
                          path: 'login-content', component:LoginContentComponent
                        },

                        {
                          path: 'blog', component:BlogComponent
                        },

                        {
                          path: 'quotes', component:QuotesComponent
                        },

                        {
                          path: 'about-us', component:AboutUsComponent
                        },

                        {
                          path: 'contact-us', component:ContactUsComponent
                        }
                      ];

@NgModule({
  imports: [
                CommonModule,
                RouterModule.forRoot(routes),
          ],
  exports:[RouterModule],        

  declarations: []

})
export class DashboardRoutingModule { }
