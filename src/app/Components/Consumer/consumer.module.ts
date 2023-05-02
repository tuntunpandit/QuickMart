import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ConsumerDashboardComponent } from './consumer-dashboard/consumer-dashboard.component';

const consumerRoutes: Routes = [
  {
    path: "",
    component: ConsumerDashboardComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(consumerRoutes)],
})
export class ConsumerModule {}
