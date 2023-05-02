import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { SharedModule } from '../Shared/shared.module';
import { HeaderComponent } from './Layout/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    loadChildren: () =>
      import('./Consumer/consumer.module').then((m) => m.ConsumerModule),
  },
  {
    path: 'admin',
    component: MainComponent,
    loadChildren: () =>
      import('./Admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  declarations: [MainComponent, HeaderComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class MainModule {}
