import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';
import { ViewCart } from './viewcart/viewcart.component';
import { CheckOut } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'viewcart', component: ViewCart },
  { path: 'checkout', component: CheckOut }
];


@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]	
	
})

export class AppRoutingModule{}