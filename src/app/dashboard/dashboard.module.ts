import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { dashboard} from './dashboard.coponent';
import { NavbarComponent} from './navbar/navbar.component';

//import dashboardRouting Module for using routing:
import { DashboardRoutingModule} from './dashboard-routing.module';

// import MatToolbarModule for create a navigation bar:
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule,MatIconModule} from '@angular/material';

@NgModule({
  imports: [
            CommonModule,
            MatToolbarModule,
            MatButtonModule,
            MatIconModule,
            DashboardRoutingModule,
          ],

  exports:[MatToolbarModule,
           MatButtonModule,
           MatIconModule],

  declarations: [dashboard],
})
export class DashboardModule { }
