import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './Shared/shared.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Components/main.module').then(m => m.MainModule)
  },
  {
    path: '',
    loadChildren: () => import('./Components/main.module').then(m => m.MainModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
